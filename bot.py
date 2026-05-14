from dotenv import load_dotenv
import os
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

# ===== LOAD ENV =====
load_dotenv()

TOKEN = os.getenv("BOT_TOKEN")
WEB_APP_URL = os.getenv("WEB_APP_URL", "").strip()

if WEB_APP_URL and not WEB_APP_URL.startswith("http"):
    WEB_APP_URL = "https://" + WEB_APP_URL

if not TOKEN:
    raise ValueError("❌ BOT_TOKEN не задан")

if not WEB_APP_URL:
    raise ValueError("❌ WEB_APP_URL не задан")

logging.basicConfig(level=logging.INFO)

# ===== PATH (только для чтения data.js локально) =====
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
WEBAPP_DIR = os.path.join(BASE_DIR, "webapp")

# ===== LOAD DATA =====
def load_data():
    try:
        path = os.path.join(WEBAPP_DIR, "data.js")

        with open(path, encoding="utf-8") as f:
            content = f.read()

            # убираем: const drugs =
            content = re.sub(r"^const\s+drugs\s*=\s*", "", content.strip())

            return json.loads(content)

    except Exception as e:
        logging.error("❌ Ошибка data.js: %s", e)
        return []

DRUGS = load_data()

# ===== HELPERS =====
def norm(text):
    return (text or "").lower().strip()

DRUGS_MAP = {norm(d.get("name")): d for d in DRUGS}

def find_drug(name):
    return DRUGS_MAP.get(norm(name))

# ===== WEBAPP BUTTON =====
def webapp_button(text="🚀 Открыть приложение"):
    return InlineKeyboardMarkup([[
        InlineKeyboardButton(
            text=text,
            web_app=WebAppInfo(url=WEB_APP_URL)
        )
    ]])

# ===== START COMMAND =====
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    message = update.message
    if not message:
        return

    payload = context.args[0] if context.args else None

    # ===== DEEP LINK =====
    if payload and payload.startswith("drug_"):
        try:
            name = unquote(payload.replace("drug_", ""))
            drug = find_drug(name)

            if drug:
                await send_preview(message, drug)
                return

        except Exception as e:
            logging.error("❌ deep link ошибка: %s", e)

    # ===== DEFAULT START MESSAGE =====
    text = (
        "⬜ JURABEK Laboratories\n"
        "Производство лекарственных средств широкого спектра"
    )

    await message.reply_text(
        text,
        entities=[
            MessageEntity(
                type="custom_emoji",
                offset=0,
                length=1,
                custom_emoji_id="5420394129374878285"
            ),
            MessageEntity(
                type="bold",
                offset=3,
                length=21
            )
        ],
        reply_markup=webapp_button()
    )

# ===== DRUG PREVIEW =====
async def send_preview(message, d):
    indications = d.get("indications") or ""
    short = indications[:140] + ("..." if len(indications) > 140 else "")

    text = f"""💊 <b>{d.get('name','-')}</b>

🧬 {d.get('sostav','-')}
📦 {d.get('form','-')} ({d.get('dosage','-')})
🏷 {d.get('group','-')}

🩺 {short}
"""

    keyboard = InlineKeyboardMarkup([
        [
            InlineKeyboardButton(
                text="🚀 Открыть приложение",
                web_app=WebAppInfo(
                    url=f"{WEB_APP_URL}?drug={quote(d.get('name',''))}"
                )
            )
        ],
        [
            InlineKeyboardButton(
                text="🌐 Открыть сайт",
                url=d.get("url") or WEB_APP_URL
            )
        ]
    ])

    await message.reply_text(
        text,
        parse_mode="HTML",
        reply_markup=keyboard
    )

# ===== MAIN =====
def main():
    app = ApplicationBuilder().token(TOKEN).build()

    app.add_handler(CommandHandler("start", start))

    logging.info("🚀 Bot запущен")
    app.run_polling()

if __name__ == "__main__":
    main()