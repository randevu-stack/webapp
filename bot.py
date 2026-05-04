from dotenv import load_dotenv
import os

load_dotenv()

import logging
import json
import re
from urllib.parse import unquote, quote

from telegram import (
    Update,
    InlineKeyboardMarkup,
    InlineKeyboardButton,
    WebAppInfo,
    MessageEntity
)
from telegram.ext import (
    ApplicationBuilder,
    CommandHandler,
    ContextTypes
)

TOKEN = os.getenv("BOT_TOKEN")
WEB_APP_URL = os.getenv("WEB_APP_URL")

logging.basicConfig(level=logging.INFO)

# ===== ЧИТАЕМ data.js =====
def load_data():
    with open("data.js", encoding="utf-8") as f:
        content = f.read()
        content = re.sub(r"^const\s+drugs\s*=\s*", "", content)
        return json.loads(content)

DRUGS = load_data()

# ===== НОРМАЛИЗАЦИЯ =====
def norm(text):
    return (text or "").lower().strip()

# ===== ПОИСК =====
def find_drug(name):
    name = norm(name)
    for d in DRUGS:
        if norm(d.get("name")) == name:
            return d
    return None

# ===== КНОПКА WEBAPP =====
def webapp_button(text="📱 Открыть приложение"):
    return InlineKeyboardMarkup([
        [
            InlineKeyboardButton(
                text=text,
                web_app=WebAppInfo(url=WEB_APP_URL)
            )
        ]
    ])

# ===== START =====
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    payload = None

    if context.args:
        payload = context.args[0]

    if not payload and update.message and update.message.text:
        parts = update.message.text.split(" ")
        if len(parts) > 1:
            payload = parts[1]

    print("PAYLOAD:", payload)

    # ===== DEEP LINK =====
    if payload and "drug_" in payload:
        try:
            raw = payload.replace("drug_", "")
            name = unquote(raw)

            drug = find_drug(name)

            if drug:
                await send_preview(update, drug)
                return

        except Exception as e:
            logging.error(e)

    # ===== ГЛАВНЫЙ ЭКРАН =====

    text = "⬜  JURABEK Laboratories\nПроизводство лекарственных средств широкого спектра"
    await update.message.reply_text(
        text,
        entities=[
            # 🔥 custom emoji
            MessageEntity(
                type="custom_emoji",
                offset=0,
                length=1,
                custom_emoji_id="5420394129374878285"  # 👉 твой ID
            ),
            # 🔥 жирный текст
            MessageEntity(
                type="bold",
                offset=3,
                length=21  # длина "JURABEK Laboratories"
            )
        ],
        reply_markup=webapp_button()
    )

# ===== PREVIEW =====
async def send_preview(update: Update, d):
    short = (d.get("indications") or "")[:140] + "..."

    text = f"""💊 <b>{d.get('name','-')}</b>

🧬 {d.get('sostav','-')}
📦 {d.get('form','-')} ({d.get('dosage','-')})
🏷 {d.get('group','-')}

🩺 {short}
"""

    keyboard = InlineKeyboardMarkup([
        [
            InlineKeyboardButton(
                text="📱 Открыть приложение",
                web_app=WebAppInfo(
                    url=f"{WEB_APP_URL}?drug={quote(d.get('name',''))}"
                )
            )
        ],
        [
            InlineKeyboardButton(
                text="🌐 Открыть сайт",
                url=d.get("url", WEB_APP_URL)
            )
        ]
    ])

    await update.message.reply_photo(
        photo=d.get("photo"),
        caption=text,
        parse_mode="HTML",
        reply_markup=keyboard
    )

# ===== ЗАПУСК =====
app = ApplicationBuilder().token(TOKEN).build()
app.add_handler(CommandHandler("start", start))

print("🚀 bot started")
app.run_polling()