from flask import Flask, send_from_directory
from flask_cors import CORS
import os

app = Flask(__name__, static_folder='.')
CORS(app)

# 👉 Главная страница
@app.route("/")
def home():
    return send_from_directory('.', 'index.html')

# 👉 отдаёт ВСЕ файлы (data.js, картинки и т.д.)
@app.route("/<path:path>")
def static_files(path):
    return send_from_directory('.', path)

# 👉 запуск (под Render)
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)