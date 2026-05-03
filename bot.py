import logging
import json

from telegram import (
    Update,
    ReplyKeyboardMarkup,
    KeyboardButton,
    WebAppInfo,
    InlineKeyboardMarkup,
    InlineKeyboardButton
)

from telegram.ext import (
    ApplicationBuilder,
    CommandHandler,
    MessageHandler,
    ContextTypes,
    filters,
)

TOKEN = "8708262770:AAEoDWw4SBmj3Za_1DYW9OAjwkluleoKYj4"
WEB_APP_URL = "https://webapp-alpha-nine-95.vercel.app"

logging.basicConfig(level=logging.INFO)

# =========================
# 📦 ПРИМЕР БАЗЫ
# =========================
# ⚠️ потом можно подключить data.js / Excel
DRUGS = {
    "орса": {
        "name": "Орса",
        "sostav": "Описание состава...",
        "indications": "Длинное описание показаний препарата. Может быть очень длинным текстом без ограничений.",
        "photo": "https://via.placeholder.com/500",
        "url": "https://example.com"
    }
}


# =========================
# 🧠 ПОКАЗ КАТАЛОГА
# =========================
async def show_main(update: Update):
    keyboard = [[KeyboardButton(
        text="📱 Открыть каталог",
        web_app=WebAppInfo(url=WEB_APP_URL)
    )]]

    await update.message.reply_text(
        "💊 Открой каталог препаратов:",
        reply_markup=ReplyKeyboardMarkup(keyboard, resize_keyboard=True)
    )


# =========================
# 🔥 PREVIEW (короткая карточка)
# =========================
async def send_preview(update: Update, d):
    short_text = f"""💊 {d['name']}

🩺 {d['indications'][:120]}...
"""

    keyboard = InlineKeyboardMarkup([
        [InlineKeyboardButton(
            "🔍 Подробнее",
            web_app=WebAppInfo(
                url=f"{WEB_APP_URL}?drug={d['name']}"
            )
        )]
    ])

    if d.get("photo"):
        await update.message.reply_photo(
            photo=d["photo"],
            caption=short_text,
            reply_markup=keyboard
        )
    else:
        await update.message.reply_text(
            short_text,
            reply_markup=keyboard
        )


# =========================
# 💊 ПОЛНЫЙ ТОВАР
# =========================
async def send_drug(update: Update, d):
    text = f"""💊 {d['name']}

📋 Состав:
{d['sostav']}

🩺 Показания:
{d['indications']}
"""

    keyboard = InlineKeyboardMarkup([
        [InlineKeyboardButton("🌐 Открыть сайт", url=d["url"])]
    ]) if d.get("url") else None

    # фото отдельно (чтобы не обрезался текст)
    if d.get("photo"):
        await update.message.reply_photo(photo=d["photo"])

    await update.message.reply_text(
        text,
        reply_markup=keyboard
    )


# =========================
# 🚀 START (deep link)
# =========================
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    args = context.args

    if args:
        raw = args[0]

        is_preview = "preview" in raw
        key = raw.replace("drug_", "").replace("_preview", "").lower()

        d = DRUGS.get(key)

        if d:
            if is_preview:
                await send_preview(update, d)
            else:
                await send_drug(update, d)
            return

    await show_main(update)


# =========================
# 📦 WEB APP DATA (опционально)
# =========================
async def web_app_data(update: Update, context: ContextTypes.DEFAULT_TYPE):
    try:
        data = json.loads(update.message.web_app_data.data)
        await update.message.reply_text(f"📦 {data}")
    except Exception as e:
        logging.error(e)


# =========================
# 🧠 ТЕКСТ
# =========================
async def handle_text(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("Нажми 📱 Открыть каталог")


# =========================
# 🚀 ЗАПУСК
# =========================
app = ApplicationBuilder().token(TOKEN).build()

app.add_handler(CommandHandler("start", start))
app.add_handler(MessageHandler(filters.StatusUpdate.WEB_APP_DATA, web_app_data))
app.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, handle_text))

print("🚀 бот запущен")
app.run_polling()