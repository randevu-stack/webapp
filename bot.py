import logging
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

# ===== БАЗА =====
DRUGS = {
    1: {
        "name": "Торасса",
        "sostav": "Торасемид",
        "form": "Раствор для инъекций",
        "dosage": "5 мг/мл 4 мл",
        "group": "Диуретик",
        "indications": "Лечение при отеках и/или выпотах, вызванных сердечной недостаточностью, если необходимо в/в применение лекарственного средства, например, в случае отека легких вследствие острой сердечной недостаточности.",
        "photo": "https://jurabek.uz/d/torassa_4_ml_no10_8162uzp01.png",
        "url": "https://jurabek.uz/magazin/product/torassa"
    }
}

# ===== START =====
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    payload = None

    # 👉 пытаемся получить payload
    if context.args:
        payload = context.args[0]

    # ===== ЕСЛИ ЕСТЬ PAYLOAD =====
    if payload and "drug_" in payload:
        try:
            drug_id = int(payload.replace("drug_", ""))
        except:
            await fallback(update)
            return

        d = DRUGS.get(drug_id)

        if d:
            await send_preview(update, d, drug_id)
            return

    # ===== ЕСЛИ НЕТ PAYLOAD =====
    await fallback(update)

# ===== PREVIEW =====
async def send_preview(update: Update, d, drug_id):

    short_indications = d["indications"][:140] + "..."

    text = f"""💊 <b>{d['name']}</b>

📦 {d['form']} ({d['dosage']})
🏷 {d.get('group','-')}

🩺 {short_indications}
"""

    keyboard = InlineKeyboardMarkup([
        [
            InlineKeyboardButton(
                "🔍 Открыть в приложении",
                url=f"{WEB_APP_URL}?drug={drug_id}"
            )
        ],
        [
            InlineKeyboardButton(
                "🌐 Открыть сайт",
                url=d["url"]
            )
        ],
        [
            InlineKeyboardButton(
                "📱 Открыть каталог",
                url=WEB_APP_URL
            )
        ]
    ])

    await update.message.reply_photo(
        photo=d["photo"],
        caption=text,
        parse_mode="HTML",
        reply_markup=keyboard
    )

# ===== FALLBACK =====
async def fallback(update: Update):
    await update.message.reply_text(
        "💊 Открой каталог препаратов:",
        reply_markup=InlineKeyboardMarkup([
            [
                InlineKeyboardButton(
                    "📱 Открыть приложение",
                    url=WEB_APP_URL
                )
            ]
        ])
    )

# ===== ЗАПУСК =====
app = ApplicationBuilder().token(TOKEN).build()
app.add_handler(CommandHandler("start", start))

print("🚀 bot started")
app.run_polling()