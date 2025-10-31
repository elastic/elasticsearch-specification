import json
import os

for path in os.listdir("api"):
    print(path)
    with open(f"api/{path}") as f:
        d = json.load(f)

    with open(f"api/{path}", "w") as f:
        d = json.dump(d, f, indent=2)
        print("", file=f)  # end with an empty line

