import json
import os

for path in os.listdir("api"):
    if path == "_common.json":
        continue
    api_name = path.removesuffix(".json")
    print(api_name)
    with open(f"api/{path}") as f:
        d = json.load(f)

    if d[api_name].get("params") == {}:
        d[api_name].pop("params")

    with open(f"api/{path}", "w") as f:
        d = json.dump(d, f, indent=2)
        print("", file=f)  # end with an empty line
