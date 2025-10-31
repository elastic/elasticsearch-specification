import json
import os

for path in os.listdir("api"):
    if path == "_common.json":
        continue
    api_name = path.removesuffix(".json")
    print(api_name)
    with open(f"api/{path}") as f:
        d = json.load(f)

    for name, data in d[api_name].get("params", {}).items():
        if name == "default_operator":
            data["default"] = data["default"].lower()
            data["options"] = [option.lower() for option in data.get("options", [])]

    with open(f"api/{path}", "w") as f:
        d = json.dump(d, f, indent=2)
        print("", file=f)  # end with an empty line
