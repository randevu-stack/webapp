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

# =========================
# 📦 ПРИМЕР БАЗЫ (замени на свою)
# =========================
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

# =========================
# 🚀 START
# =========================
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    args = context.args

    if args:
        raw = args[0]

        if "drug_" in raw:
            drug_id = raw.replace("drug_", "").replace("_preview", "")
            drug_id = int(drug_id)

            d = DRUGS.get(drug_id)

            if d:
                await send_preview(update, d, drug_id)
                return

    await update.message.reply_text(
    "💊 Нажми START и получишь препарат"
)

# =========================
# 🔥 PREVIEW КАРТОЧКА
# =========================
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
        ]
    ])

    await update.message.reply_photo(
        photo=d["photo"],
        caption=text,
        parse_mode="HTML",
        reply_markup=keyboard
    )

# =========================
# 🚀 ЗАПУСК
# =========================
app = ApplicationBuilder().token(TOKEN).build()
app.add_handler(CommandHandler("start", start))

print("🚀 bot started")
app.run_polling()