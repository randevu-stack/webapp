import pandas as pd
import json
import os

INPUT_FILE = "drugs.xlsx"
OUTPUT_DIR = "webapp"

os.makedirs(OUTPUT_DIR, exist_ok=True)

df = pd.read_excel(INPUT_FILE, engine="openpyxl")
df = df.fillna("")

drugs = []

for _, row in df.iterrows():
    item = {
        "name": str(row.get("Название", "")).strip(),
        "sostav": str(row.get("Состав", "")).strip(),
        "form": str(row.get("Форма", "")).strip(),
        "dosage": str(row.get("Дозировка", "")).strip(),
        "group": str(row.get("Группа", "")).strip(),
        "indications": str(row.get("Показания", "")).strip(),  # 👈 ВАЖНО
        "photo": str(row.get("Фото", "")).strip(),
        "url": str(row.get("Ссылка", "")).strip()
    }

    # 👉 чистим переносы
    item["indications"] = (
        item["indications"]
        .replace("\n", " ")
        .replace("\r", " ")
        .replace("  ", " ")
    )

    drugs.append(item)

# JSON для AI
with open(os.path.join(OUTPUT_DIR, "drugs.json"), "w", encoding="utf-8") as f:
    json.dump(drugs, f, ensure_ascii=False, indent=2)

# JS для сайта
with open(os.path.join(OUTPUT_DIR, "data.js"), "w", encoding="utf-8") as f:
    f.write("const drugs = ")
    json.dump(drugs, f, ensure_ascii=False, indent=2)

print("✅ Готово: data.js и drugs.json созданы")