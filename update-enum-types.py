import json
import os


def update_default(src_dir, dest_dir, path):
    api_name = path.removesuffix(".json")

    enums = {}

    with open(f"{src_dir}/{api_name}.json") as f:
        generated_data = json.load(f)
        if params := generated_data[api_name].get("params"):
            for param_name, param_data in params.items():
                if param_data["type"] == "enum" and "options" in param_data:
                    enums[param_name] = param_data


    if not enums:
        return

    print(api_name)

    with open(f"{dest_dir}/{api_name}.json") as f:
        es_data = json.load(f)

    for param_name, param_data in es_data[api_name].get("params", {}).items():
        if param_name in enums and param_data["type"] == "string":
            print("  ", param_name)
            es_data[api_name]["params"][param_name] = enums[param_name]

    with open(f"{dest_dir}/{api_name}.json", "w") as f:
        json.dump(es_data, f, indent=2)
        f.write("\n")

SRC_DIR = "compiler-rs/clients_schema_to_rest_api_spec/rest-api-output"
DEST_DIR = "../elasticsearch/rest-api-spec/src/main/resources/rest-api-spec/api"
for path in sorted(os.listdir(SRC_DIR)):
    if path.endswith(".json"):
        update_default(SRC_DIR, DEST_DIR, path)