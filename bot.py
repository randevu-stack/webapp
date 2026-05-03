import logging
from telegram import (
    Update, ReplyKeyboardMarkup, KeyboardButton,
    WebAppInfo
)
from telegram.ext import (
    ApplicationBuilder, CommandHandler,
    ContextTypes
)

TOKEN = "8708262770:AAEoDWw4SBmj3Za_1DYW9OAjwkluleoKYj4"
WEB_APP_URL = "https://webapp-alpha-nine-95.vercel.app"

logging.basicConfig(level=logging.INFO)


async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    args = context.args

    if args:
        raw = args[0]

        # drug_12_preview
        if "drug_" in raw:
            id = raw.replace("drug_", "").replace("_preview", "")

            url = f"{WEB_APP_URL}?drug={id}"

            keyboard = [[KeyboardButton(
                text="🔍 Открыть препарат",
                web_app=WebAppInfo(url=url)
            )]]

            await update.message.reply_text(
                "💊 Открыть препарат:",
                reply_markup=ReplyKeyboardMarkup(keyboard, resize_keyboard=True)
            )
            return

    # обычный вход
    keyboard = [[KeyboardButton(
        text="📱 Открыть каталог",
        web_app=WebAppInfo(url=WEB_APP_URL)
    )]]

    await update.message.reply_text(
        "💊 Открой каталог:",
        reply_markup=ReplyKeyboardMarkup(keyboard, resize_keyboard=True)
    )


app = ApplicationBuilder().token(TOKEN).build()
app.add_handler(CommandHandler("start", start))

print("🚀 bot started")
app.run_polling()