import pandas as pd
import json
import os

print("🚀 Запуск конвертации...")

FILE = "meds.xlsx"

# =========================
# 📂 ПРОВЕРКА ФАЙЛА
# =========================
if not os.path.exists(FILE):
    print(f"❌ Файл {FILE} не найден!")
    exit()

# =========================
# 📥 ЧТЕНИЕ EXCEL
# =========================
try:
    df = pd.read_excel(FILE).fillna("")
    print("✅ Excel загружен")
except Exception as e:
    print("❌ Ошибка чтения:", e)
    exit()

# =========================
# 🧠 ПОИСК КОЛОНКИ ПОКАЗАНИЯ (даже если криво названа)
# =========================
def find_indications_column(columns):
    for col in columns:
        c = col.strip().lower()
        if c in ["показания", "symptoms", "indications"]:
            return col
    return None

ind_col = find_indications_column(df.columns)

if not ind_col:
    print("⚠️ Колонка 'Показания' не найдена")
    ind_col = None

# =========================
# 🔄 ОЧИСТКА ТЕКСТА
# =========================
def clean_text(text):
    text = str(text).strip()

    # убираем мусор
    if text in ["", "-", "—", ";", ";;"]:
        return ""

    # убираем лишние пробелы
    text = " ".join(text.split())

    return text

# =========================
# 🔄 ПРЕОБРАЗОВАНИЕ
# =========================
data = []

for _, row in df.iterrows():
    try:
        name = clean_text(row.get("name", ""))

        if not name:
            continue

        indications = ""
        if ind_col:
            indications = clean_text(row.get(ind_col, ""))

        item = {
            "name": name,
            "sostav": clean_text(row.get("sostav", "")),
            "form": clean_text(row.get("form", "")),
            "dosage": clean_text(row.get("dosage", "")),
            "group": clean_text(row.get("group", "")),
            "indications": indications,
            "photo": clean_text(row.get("photo", "")),
            "url": clean_text(row.get("url", ""))
        }

        data.append(item)

    except Exception as e:
        print("⚠️ Ошибка строки:", e)

# =========================
# 💾 СОХРАНЕНИЕ
# =========================
try:
    with open("data.js", "w", encoding="utf-8") as f:
        f.write("const drugs = ")
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write(";")

    print(f"✅ Готово! {len(data)} препаратов сохранено")

except Exception as e:
    print("❌ Ошибка сохранения:", e)

print("🏁 Завершено")