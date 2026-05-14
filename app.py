from flask import Flask, send_from_directory
import os

app = Flask(__name__)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# ===== HOME PAGE =====
@app.route("/")
def home():
    return send_from_directory(BASE_DIR, "index.html")

# ===== STATIC FILES (ТОЛЬКО НУЖНОЕ) =====
@app.route("/<path:filename>")
def static_files(filename):
    allowed_extensions = (".js", ".css", ".png", ".jpg", ".jpeg", ".webp", ".svg", ".json")

    # защита от доступа к лишним файлам
    if not filename.endswith(allowed_extensions):
        return "Not allowed", 403

    return send_from_directory(BASE_DIR, filename)

# ===== RUN (LOCAL ONLY) =====
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)