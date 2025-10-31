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
        if name == "master_timeout":
            data["default"] = "30s"
	    # make sure description comes after default
            if desc := data.pop("description"):
                data["description"] = desc
        # if api_name.startswith("cat.") and name == "format":
        #     desc = data.pop("description")
        #     data["default"] = "text"
        #     if desc:
        #         # make sure description comes after default
        #         data["description"] = desc
        # if data["type"] == "enum" and name == "bytes":
        #     data["options"] = ["b", "kb", "mb", "gb", "tb", "pb"]

    with open(f"api/{path}", "w") as f:
        d = json.dump(d, f, indent=2)
        print("", file=f)  # end with an empty line
