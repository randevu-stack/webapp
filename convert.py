import pandas as pd
import json

# читаем Excel
df = pd.read_excel("meds.xlsx").fillna("")

# приводим к нужному виду
data = []

for _, row in df.iterrows():
    data.append({
        "name": row.get("name", ""),
        "sostav": row.get("sostav", ""),
        "form": row.get("form", ""),
        "dosage": row.get("dosage", ""),
        "group": row.get("group", ""),
        "indications": row.get("Показания", ""),
        "photo": row.get("photo", ""),
        "url": row.get("url", "")
    })

# сохраняем в data.js
with open("webapp/data.js", "w", encoding="utf-8") as f:
    f.write("const drugs = ")
    json.dump(data, f, ensure_ascii=False, indent=2)

print("✅ data.js обновлён")