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

logging.basicConfig(level=logging.INFO)

# =========================
# 🚀 СТАРТ (КНОПКА WEB APP)
# =========================
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    keyboard = [
        [KeyboardButton(
            text="📱 Открыть каталог",
            web_app=WebAppInfo(
                url="https://webapp-alpha-nine-95.vercel.app"
            )
        )]
    ]

    await update.message.reply_text(
        "💊 Открой каталог препаратов:",
        reply_markup=ReplyKeyboardMarkup(keyboard, resize_keyboard=True)
    )


# =========================
# 📦 ПОЛУЧЕНИЕ ДАННЫХ ИЗ WEB APP
# =========================
async def web_app_data(update: Update, context: ContextTypes.DEFAULT_TYPE):
    try:
        data = json.loads(update.message.web_app_data.data)

        # 👉 проверяем что это шаринг
        if data.get("type") == "share":
            d = data.get("drug", {})

            name = d.get("name", "-")
            sostav = d.get("sostav", "-")
            indications = d.get("indications", "-")
            photo = d.get("photo")
            url = d.get("url")

            caption = f"""💊 {name}

📋 Состав:
{sostav}

🩺 Показания:
{indications}
"""

            # 👉 кнопка "Открыть сайт"
            keyboard = None
            if url:
                keyboard = InlineKeyboardMarkup([
                    [InlineKeyboardButton("🌐 Открыть сайт", url=url)]
                ])

            # 👉 если есть фото
            if photo:
                await update.message.reply_photo(
                    photo=photo,
                    caption=caption,
                    reply_markup=keyboard
                )
            else:
                await update.message.reply_text(
                    caption,
                    reply_markup=keyboard
                )

        else:
            await update.message.reply_text("⚠️ Неизвестный тип данных")

    except Exception as e:
        logging.error(e)
        await update.message.reply_text("⚠️ Ошибка обработки данных")


# =========================
# 🧠 ОСТАЛЬНОЙ ТЕКСТ
# =========================
async def handle_text(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("Нажми кнопку 📱 Открыть каталог")


# =========================
# 🚀 ЗАПУСК
# =========================
app = ApplicationBuilder().token(TOKEN).build()

app.add_handler(CommandHandler("start", start))

# 🔥 ВАЖНО — ЭТОТ ХЕНДЛЕР
app.add_handler(MessageHandler(filters.StatusUpdate.WEB_APP_DATA, web_app_data))

app.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, handle_text))

print("🚀 WebApp бот запущен")
app.run_polling()