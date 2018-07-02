//import { Specification } from "../specification/src/api-specification";
import Specification = require("../specification/src/api-specification");
import Yaml = require('js-yaml');

const specification = Specification.loadWithValidation();
if (specification.endpoint_errors.length > 0)
  console.error("The specification contains the following endpoint mapping errors:");

for (let e of specification.endpoint_errors) console.error("  - " + e);

if (specification.domain_errors.length +  specification.endpoint_errors.length == 0)
  console.log("The specification contains no errors in any of the " + specification.endpoints.length + " endpoints yielding " + specification.types.length + " types");

console.log("The specification contains " + specification.endpoints.length + " endpoints yielding " + specification.types.length + " types");

var swaggerRoot = Yaml.safeDump({
  swagger : "2.0",
  info : {
    version: "0.0.0",
    title: "Elasticsearch swagger documentation"
  },
  paths: {
    "$ref": "paths.yml"
  }
});

console.log(swaggerRoot);
