import json
import os

for path in os.listdir("api"):
    if path == "_common.json":
        continue
    api_name = path.removesuffix(".json")
    print(api_name)
    with open(f"api/{path}") as f:
        d = json.load(f)

    paths = d[api_name]["url"]["paths"]
    for p in paths:
        if p.get("parts") == {}:
            p.pop("parts")

    with open(f"api/{path}", "w") as f:
        d = json.dump(d, f, indent=2)
        print("", file=f)  # end with an empty line
