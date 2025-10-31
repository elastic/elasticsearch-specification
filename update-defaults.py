import json
import os


def update_default(src_dir, dest_dir, path):
    api_name = path.removesuffix(".json")
    print(api_name)

    defaults = {}

    with open(f"{src_dir}/{api_name}.json") as f:
        generated_data = json.load(f)
        if params := generated_data[api_name].get("params"):
            for param_name, param_data in params.items():
                if "default" in param_data:
                    defaults[param_name] = param_data["default"]

    if not defaults:
        return

    with open(f"{dest_dir}/{api_name}.json") as f:
        es_data = json.load(f)

    for param_name, param_data in es_data[api_name].get("params", {}).items():
        if param_name in defaults and "default" not in param_data:
            param_data["default"] = defaults[param_name]
            # make sure description comes after default
            if desc := param_data.pop("description"):
                param_data["description"] = desc

    with open(f"{dest_dir}/{api_name}.json", "w") as f:
        json.dump(es_data, f, indent=2)
        f.write("\n")

SRC_DIR = "compiler-rs/clients_schema_to_rest_api_spec/rest-api-output"
DEST_DIR = "../elasticsearch/rest-api-spec/src/main/resources/rest-api-spec/api"
for path in sorted(os.listdir(SRC_DIR)):
    if path.endswith(".json"):
        update_default(SRC_DIR, DEST_DIR, path)