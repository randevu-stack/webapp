import re

with open("data.js", "r", encoding="utf-8") as f:
    content = f.read()

# Найдём все объекты { ... }
objects = re.findall(r"\{[\s\S]*?\}", content)

new_objects = []

for i, obj in enumerate(objects, start=1):
    # если уже есть id — пропускаем
    if "id:" in obj:
        new_objects.append(obj)
        continue

    # вставляем id после {
    obj = obj.replace("{", "{\n  id: " + str(i) + ",", 1)
    new_objects.append(obj)

# собираем обратно
result = "const drugs = [\n" + ",\n".join(new_objects) + "\n];"

with open("data.js", "w", encoding="utf-8") as f:
    f.write(result)

print("✅ ID добавлены")