import pandas as pd
import json
import re

INPUT_FILE = "meds.xlsx"
OUTPUT_JS = "data.js"
OUTPUT_JSON = "data.json"

def clean(v):
    if pd.isna(v):
        return ""
    return str(v).strip()

# разбивает "Раствор ... 5 мг/мл 4 мл" → form + dosage
def split_form_dosage(text):
    text = clean(text)
    if not text:
        return "", ""
    m = re.search(r'(\d.*)', text)
    if m:
        return text[:m.start()].strip(), m.group(1).strip()
    return text, ""

# ===== ЧТЕНИЕ EXCEL =====
try:
    df = pd.read_excel(INPUT_FILE)
except Exception as e:
    print("❌ Ошибка чтения Excel:", e)
    exit()

print("📊 Колонки:", list(df.columns))
print("📊 Строк:", len(df))

drugs = []

for i, row in df.iterrows():
    name = clean(row.get("name"))
    if not name:
        continue

    sostav = clean(row.get("sostav"))
    form_raw = clean(row.get("form"))
    dosage_raw = clean(row.get("dosage"))
    indications = clean(row.get("Показания"))
    url = clean(row.get("url"))
    photo = clean(row.get("photo"))
    group = clean(row.get("group"))

    # ===== FORM / DOSAGE =====
    if dosage_raw:
        form = form_raw
        dosage = dosage_raw
    else:
        form, dosage = split_form_dosage(form_raw)

    # ===== PHOTO FIX =====
    if not photo:
        photo = ""
    elif photo.startswith("http"):
        pass
    else:
        if not photo.startswith("images/"):
            photo = "images/" + photo

    # ===== СОЗДАЁМ ОБЪЕКТ =====
    drug = {
        "id": i + 1,  # 🔥 добавили ID
        "name": name,
        "sostav": sostav,
        "form": form,
        "dosage": dosage,
        "group": group,
        "indications": indications,
        "photo": photo,
        "url": url
    }

    drugs.append(drug)

print("✅ Собрано препаратов:", len(drugs))

if len(drugs) == 0:
    print("❌ ВНИМАНИЕ: ни одной записи не добавлено. Проверь Excel!")
    exit()

# ===== СОХРАНЯЕМ data.json (ДЛЯ БОТА) =====
with open(OUTPUT_JSON, "w", encoding="utf-8") as f:
    json.dump(drugs, f, ensure_ascii=False, indent=2)

print("📁 data.json создан")

# ===== СОХРАНЯЕМ data.js (ДЛЯ WEBAPP) =====
with open(OUTPUT_JS, "w", encoding="utf-8") as f:
    f.write("const drugs = ")
    json.dump(drugs, f, ensure_ascii=False, indent=2)

print("📁 data.js создан")