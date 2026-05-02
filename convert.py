import pandas as pd
import json
import re

INPUT_FILE = "meds.xlsx"
OUTPUT_FILE = "data.js"

# -------------------------
# функция имени файла
# -------------------------
def make_filename(name):
    name = str(name).lower().strip()
    name = re.sub(r'[^\w\s-]', '', name)
    name = re.sub(r'\s+', '_', name)
    return name + ".webp"

# -------------------------
# разделение form / dosage
# -------------------------
def split_form_dosage(text):
    text = str(text).strip()
    
    if not text or text == "nan":
        return "", ""

    # ищем место где начинаются цифры
    match = re.search(r'(\d.*)', text)

    if match:
        form = text[:match.start()].strip()
        dosage = match.group(1).strip()
    else:
        form = text
        dosage = ""

    return form, dosage

# -------------------------
# читаем Excel
# -------------------------
try:
    df = pd.read_excel(INPUT_FILE)
except Exception as e:
    print("❌ Ошибка чтения Excel:", e)
    exit()

print("📊 Найдено строк:", len(df))

drugs = []

# -------------------------
# обработка строк
# -------------------------
for _, row in df.iterrows():

    name = str(row.get("name", "")).strip()
    if not name or name == "nan":
        continue

    sostav = str(row.get("sostav", "")).strip()
    form_raw = str(row.get("form", "")).strip()
    dosage_raw = str(row.get("dosage", "")).strip()
    indications = str(row.get("Показания", "")).strip()
    url = str(row.get("url", "")).strip()

    # если dosage пустой — вытаскиваем из form
    if not dosage_raw or dosage_raw == "nan":
        form, dosage = split_form_dosage(form_raw)
    else:
        form = form_raw
        dosage = dosage_raw

    # обработка фото
    photo = str(row.get("photo", "")).strip()

    if not photo or photo == "nan":
        photo = "images/" + make_filename(name)
    else:
        if not photo.startswith("images/"):
            photo = "images/" + photo

    drugs.append({
        "name": name,
        "sostav": sostav,
        "form": form,
        "dosage": dosage,
        "indications": indications,
        "photo": photo,
        "url": url
    })

# -------------------------
# сохраняем data.js
# -------------------------
with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
    f.write("const drugs = ")
    json.dump(drugs, f, ensure_ascii=False, indent=2)

print("✅ Готово:", len(drugs), "препаратов")
print("📁 Создан файл:", OUTPUT_FILE)