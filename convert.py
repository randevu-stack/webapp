import pandas as pd
import json
import os

print("🚀 Запуск конвертации...")

# =========================
# 📂 ПРОВЕРКА ФАЙЛА
# =========================
FILE = "meds.xlsx"

if not os.path.exists(FILE):
    print(f"❌ Файл {FILE} не найден!")
    print("👉 Положи meds.xlsx рядом с convert.py")
    exit()

# =========================
# 📥 ЧТЕНИЕ EXCEL
# =========================
try:
    df = pd.read_excel(FILE).fillna("")
    print("✅ Excel загружен")
except Exception as e:
    print("❌ Ошибка чтения Excel:", e)
    exit()

# =========================
# 🔄 ПРЕОБРАЗОВАНИЕ
# =========================
data = []

for _, row in df.iterrows():
    try:
        # защита на Показания / Symptoms
        indications = row.get("Показания") or row.get("Symptoms") or ""

        item = {
            "name": str(row.get("name", "")).strip(),
            "sostav": str(row.get("sostav", "")).strip(),
            "form": str(row.get("form", "")).strip(),
            "dosage": str(row.get("dosage", "")).strip(),
            "group": str(row.get("group", "")).strip(),
            "indications": str(indications).strip(),
            "photo": str(row.get("photo", "")).strip(),
            "url": str(row.get("url", "")).strip()
        }

        # пропускаем пустые записи
        if item["name"]:
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

    print(f"✅ Готово! Сохранено {len(data)} препаратов в data.js")

except Exception as e:
    print("❌ Ошибка сохранения:", e)

print("🏁 Завершено")