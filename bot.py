import logging
from urllib.parse import unquote, quote

from telegram import (
    Update,
    InlineKeyboardMarkup,
    InlineKeyboardButton
)
from telegram.ext import (
    ApplicationBuilder,
    CommandHandler,
    ContextTypes
)

TOKEN = "8708262770:AAEoDWw4SBmj3Za_1DYW9OAjwkluleoKYj4"
WEB_APP_URL = "https://webapp-alpha-nine-95.vercel.app"

logging.basicConfig(level=logging.INFO)

DRUGS = {
    1: {
        "name": "Торасса",
        "sostav": "Торасемид",
        "form": "Раствор для инъекций",
        "dosage": "5 мг/мл 4 мл",
        "group": "Диуретик",
        "indications": "Лечение при отеках и/или выпотах, вызванных сердечной недостаточностью...",
        "photo": "https://jurabek.uz/d/torassa_4_ml_no10_8162uzp01.png",
        "url": "https://jurabek.uz/magazin/product/torassa"
    }
}

def norm(t):
    return (t or "").lower().strip()

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    payload = None

    if context.args:
        payload = context.args[0]

    # fallback (иногда Telegram кладёт payload в текст)
    if not payload and update.message and update.message.text:
        parts = update.message.text.split(" ")
        if len(parts) > 1:
            payload = parts[1]

    if payload and "drug_" in payload:
        try:
            raw = payload.replace("drug_", "")
            name = norm(unquote(raw))

            drug = None
            for d in DRUGS.values():
                if norm(d["name"]) == name:
                    drug = d
                    break

            if drug:
                await send_preview(update, drug)
                return

        except Exception as e:
            logging.error(e)

    await fallback(update)

async def send_preview(update: Update, d):
    short = d["indications"][:140] + "..."

    text = f"""💊 <b>{d['name']}</b>

🧬 {d['sostav']}
📦 {d['form']} ({d['dosage']})
🏷 {d.get('group','-')}

🩺 {short}
"""

    keyboard = InlineKeyboardMarkup([
        [
            InlineKeyboardButton(
                "📱 Открыть приложение",
                url=f"{WEB_APP_URL}?drug={quote(d['name'])}"
            )
        ],
        [
            InlineKeyboardButton(
                "🌐 Открыть сайт",
                url=d["url"]
            )
        ]
    ])

    await update.message.reply_photo(
        photo=d["photo"],
        caption=text,
        parse_mode="HTML",
        reply_markup=keyboard
    )

async def fallback(update: Update):
    await update.message.reply_text(
        "💊 Открой каталог препаратов:",
        reply_markup=InlineKeyboardMarkup([
            [InlineKeyboardButton("📱 Открыть", url=WEB_APP_URL)]
        ])
    )

app = ApplicationBuilder().token(TOKEN).build()
app.add_handler(CommandHandler("start", start))

print("🚀 bot started")
app.run_polling()