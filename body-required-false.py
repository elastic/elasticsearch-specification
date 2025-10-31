import json
import os


def update_default(src_dir, dest_dir, path):
    api_name = path.removesuffix(".json")
    body_required = None	
    with open(f"{src_dir}/{api_name}.json") as f:
        generated_data = json.load(f)
        if not "body" in generated_data[api_name]:
            return
        body_required = generated_data[api_name]["body"]["required"]

    if body_required is None:
        return
    
    print(api_name, body_required)
    with open(f"{dest_dir}/{api_name}.json") as f:
        es_data = json.load(f)
        es_data[api_name].setdefault("body", {})["required"] = body_required

    with open(f"{dest_dir}/{api_name}.json", "w") as f:
        json.dump(es_data, f, indent=2)
        f.write("\n")

SRC_DIR = "compiler-rs/clients_schema_to_rest_api_spec/rest-api-output"
DEST_DIR = "../elasticsearch/rest-api-spec/src/main/resources/rest-api-spec/api"
for path in sorted(os.listdir(SRC_DIR)):
    if path.endswith(".json"):
        update_default(SRC_DIR, DEST_DIR, path)
