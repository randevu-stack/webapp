from flask import Flask, request, jsonify
from flask_cors import CORS
from openai import OpenAI
import json

# -----------------------
# ИНИЦИАЛИЗАЦИЯ
# -----------------------
app = Flask(__name__)
CORS(app)

client = OpenAI(api_key="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")  # 

# -----------------------
# ЗАГРУЗКА БАЗЫ
# -----------------------
try:
    with open("drugs.json", encoding="utf-8") as f:
        drugs = json.load(f)
    print("✅ drugs.json загружен:", len(drugs))
except Exception as e:
    print("❌ Ошибка загрузки drugs.json:", e)
    drugs = []

# -----------------------
# AI ROUTE
# -----------------------
@app.route("/ai", methods=["POST"])
def ai():
    try:
        data = request.get_json()
        user_text = data.get("query", "").lower().strip()
        print("🔍 запрос:", user_text)

        if not user_text:
            return jsonify({"drugs": ["Карблок"]})

        # -----------------------
        # ⚡ БЫСТРЫЙ ПОИСК
        # -----------------------
        found = []
        for d in drugs:
            text = (d.get("name","") + " " + d.get("indications","")).lower()

            for word in user_text.split():
                if word in text:
                    found.append(d.get("name"))
                    break

        if found:
            print("⚡ быстрый результат:", found)
            return jsonify({"drugs": found[:5]})

        # -----------------------
        # 🤖 AI (если не нашли)
        # -----------------------
        print("🤖 подключаем AI...")

        data_text = "\n".join([
            f"{d.get('name','')} - {d.get('indications','')}"
            for d in drugs
        ])

        prompt = f"""
Ты фармацевт.

Вот база препаратов:
{data_text}

Подбери подходящие препараты по запросу.

Ответ строго в JSON:
{{"drugs":["название","название"]}}

Запрос: {user_text}
"""

        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[{"role": "user", "content": prompt}]
        )

        text = response.choices[0].message.content.strip()
        print("🤖 ответ AI:", text)

        try:
            parsed = json.loads(text)
            return jsonify(parsed)
        except:
            print("⚠️ AI вернул не JSON")
            return jsonify({"drugs": []})

    except Exception as e:
        print("❌ ошибка:", e)
        return jsonify({"drugs": []})

# -----------------------
# ЗАПУСК
# -----------------------
if __name__ == "__main__":
    app.run(port=5000)