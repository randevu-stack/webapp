import logging
import json
from urllib.parse import unquote, quote

from telegram import Update, InlineKeyboardMarkup, InlineKeyboardButton
from telegram.ext import ApplicationBuilder, CommandHandler, ContextTypes

TOKEN = "8708262770:AAEoDWw4SBmj3Za_1DYW9OAjwkluleoKYj4"
WEB_APP_URL = "https://webapp-alpha-nine-95.vercel.app"

logging.basicConfig(level=logging.INFO)

# ===== ЗАГРУЗКА БАЗЫ =====
try:
    with open("data.json", encoding="utf-8") as f:
        DRUGS = json.load(f)

    if not isinstance(DRUGS, list) or len(DRUGS) == 0:
        raise ValueError("data.json пустой или неправильный")

    print(f"✅ Загружено препаратов: {len(DRUGS)}")

except Exception as e:
    logging.error(f"Ошибка загрузки data.json: {e}")
    DRUGS = []

# ===== УТИЛИТЫ =====
def norm(text):
    return (text or "").lower().strip()

def find_drug(name):
    name = norm(name)
    for d in DRUGS:
        if norm(d.get("name")) == name:
            return d
    return None

# ===== START =====
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    payload = None

    # 1. стандартный payload
    if context.args:
        payload = context.args[0]

    # 2. fallback (Telegram иногда кладёт в текст)
    if not payload and update.message and update.message.text:
        parts = update.message.text.split(" ")
        if len(parts) > 1:
            payload = parts[1]

    print("PAYLOAD:", payload)

    # ===== если есть payload =====
    if payload and "drug_" in payload:
        try:
            raw = payload.replace("drug_", "")
            name = unquote(raw)

            drug = find_drug(name)

            if drug:
                await send_preview(update, drug)
                return

        except Exception as e:
            logging.error(f"Ошибка обработки payload: {e}")

    # ===== fallback =====
    if DRUGS:
        await send_preview(update, DRUGS[0])
    else:
        await update.message.reply_text("⚠️ База препаратов не загружена")

# ===== ОТПРАВКА =====
async def send_preview(update: Update, d):
    try:
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
                    "📱 Открыть приложение",
                    url=f"{WEB_APP_URL}?drug={quote(d.get('name',''))}"
                )
            ],
            [
                InlineKeyboardButton(
                    "🌐 Открыть сайт",
                    url=d.get("url") or WEB_APP_URL
                )
            ]
        ])

        # безопасная отправка
        if d.get("photo"):
            await update.message.reply_photo(
                photo=d.get("photo"),
                caption=text,
                parse_mode="HTML",
                reply_markup=keyboard
            )
        else:
            await update.message.reply_text(
                text,
                parse_mode="HTML",
                reply_markup=keyboard
            )

    except Exception as e:
        logging.error(f"Ошибка отправки: {e}")
        await update.message.reply_text("⚠️ Ошибка отображения препарата")

# ===== ЗАПУСК =====
app = ApplicationBuilder().token(TOKEN).build()
app.add_handler(CommandHandler("start", start))

print("🚀 Бот запущен")
app.run_polling()