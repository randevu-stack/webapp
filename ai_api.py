from flask import Flask, request, jsonify
from openai import OpenAI
import json

app = Flask(__name__)

client = OpenAI(api_key="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")

# загружаем базу
with open("drugs.json", encoding="utf-8") as f:
    drugs = json.load(f)

@app.route("/ai", methods=["POST"])
def ai():
    user_text = request.json.get("query")

    data_text = "\n".join([
        f"{d['name']} - {d['indications']}"
        for d in drugs
    ])

    prompt = f"""
Ты фармацевт.

Вот база препаратов:
{data_text}

Верни ТОЛЬКО JSON без текста:

{{
 "drugs": ["название", "название"]
}}

Вопрос:
{user_text}
"""

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}]
    )

    return jsonify({
        "answer": response.choices[0].message.content
    })

app.run(port=5000)