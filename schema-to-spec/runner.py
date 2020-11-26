
import sys
import json

#
# Build the Skeleton of the Specification JSON
#
def get_spec_skel():
    return {
        "info": {
            "description": "",
            "version": "7.10.0",
            "title": "Elasticsearch",
            "license": {
                "name": "Apache 2.0",
                "url": "https://github.com/elastic/elasticsearch/blob/master/LICENSE.txt"
            }
        },
        "externalDocs": {
            "description": "Documentation",
            "url": "https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html"
        },
        "tags": [],
        "definitions": {},
        "paths": {},
    }

#
# Collect all namespaces from the Endpoints
#
def get_namespace_tags(j):
    tags = []
    for endpoint in j['endpoints']:
        if endpoint["name"].find(".") > 0:
            tag = endpoint["name"][:endpoint["name"].index(".")].lower()
            if tag not in tags:
                tags.append(tag)
    return [{"name": t} for t in tags]

#
# Import the Request & Response Body definitions
#
# - transform to k-v map
# - rehsape definition
#
def import_definitions(j):
    defs = {}
    for d in j['types']:
        defs[d.get('name').get('name')] = _reshape_definition_elem(d)

    print(">>> exporting %d of %d request & response definitions .." % (len(defs), len(j["types"])))
    return defs

def _reshape_definition_elem(elem):
    # TODO
    return elem

#
# Import the Endpoint definitions
#
# - transform to k-v map
# - reshape body
#
def import_paths(j):
    paths = {}
    for path in j['endpoints']:
        paths[path.get('name')] = _reshape_endpoint_elem(path)
    print(">>> exporting %d of %d endpoints .." % (len(paths), len(j["endpoints"])))
    return paths

def _reshape_endpoint_elem(elem):
    # set $ref for req & res
    elem["request"]  = { "$ref": "#/definitions/%s" % elem.get('request').get('name') }
    elem["response"] = { "$ref": "#/definitions/%s" % elem.get('response').get('name') }

    # register namespace tag
    if elem["name"].find(".") > 0:
        elem["tags"] = [elem["name"][:elem["name"].index(".")].lower()]

    return elem

#
# helper
#
def pp(j):
    print(json.dumps(j, indent=4))

# Let's do this!
if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Missing JSON file ..")
        print("Usage: %s <json>" % (sys.argv[0]))
        exit(1)

    # -------------------------------- #
    print("> loading json ..")
    with open(sys.argv[1]) as h:
        schema = json.load(h)

    # -------------------------------- #
    print("> build specification skeleton ..")
    spec = get_spec_skel()

    # -------------------------------- #
    print("> collection namespace tags ..")
    spec["tags"] = get_namespace_tags(schema)

    # -------------------------------- #
    print("> import definitions ..")
    spec["definitions"] = import_definitions(schema)

    # -------------------------------- #
    print("> import endpoints ..")
    spec["paths"] = import_paths(schema)

    # -------------------------------- #
    print("> write specification ..")
    with open('specification.json', 'w') as h:
        json.dump(spec, h)

    exit(0)