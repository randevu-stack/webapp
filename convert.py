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
# 🔄 ПРЕОБРАЗОВАНИЕ
# =========================
data = []

for _, row in df.iterrows():
    try:
        name = str(row.get("name", "")).strip()

        # пропускаем пустые строки
        if not name:
            continue

        # 🔥 ГЛАВНОЕ — ПРАВИЛЬНЫЕ ПОКАЗАНИЯ
        indications = (
            str(row.get("Показания", "")).strip()
            or str(row.get("Symptoms", "")).strip()
        )

        item = {
            "name": name,
            "sostav": str(row.get("sostav", "")).strip(),
            "form": str(row.get("form", "")).strip(),
            "dosage": str(row.get("dosage", "")).strip(),
            "group": str(row.get("group", "")).strip(),
            "indications": indications,
            "photo": str(row.get("photo", "")).strip(),
            "url": str(row.get("url", "")).strip()
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

    print(f"✅ Готово! {len(data)} препаратов сохранено в data.js")

except Exception as e:
    print("❌ Ошибка сохранения:", e)

print("🏁 Завершено")