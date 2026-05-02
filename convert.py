import pandas as pd
import json
import re

INPUT_FILE = "meds.xlsx"
OUTPUT_FILE = "data.js"

# -------------------------
# имя файла картинки
# -------------------------
def make_filename(name):
    name = str(name).lower().strip()
    name = re.sub(r'[^\w\s-]', '', name)
    name = re.sub(r'\s+', '_', name)
    return name + ".webp"

# -------------------------
# читаем Excel
# -------------------------
try:
    df = pd.read_excel(INPUT_FILE)
except Exception as e:
    print("❌ Ошибка:", e)
    exit()

print("📊 Найдено строк:", len(df))

drugs = []

for _, row in df.iterrows():
    name = str(row.get("name", "")).strip()
    indications = str(row.get("Показания", "")).strip()

    if not name or name == "nan":
        continue

    # если в Excel уже есть photo — используем её
    photo = str(row.get("photo", "")).strip()

    if not photo or photo == "nan":
        photo = "images/" + make_filename(name)

    drugs.append({
    "name": name,
    "indications": indications,
    "sostav": str(row.get("sostav", "")).strip(),
    "form": str(row.get("form", "")).strip(),
    "dosage": str(row.get("dosage", "")).strip(),
    "photo": photo
})

# -------------------------
# сохраняем
# -------------------------
with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
    f.write("const drugs = ")
    json.dump(drugs, f, ensure_ascii=False, indent=2)

print("✅ Готово:", len(drugs), "препаратов")