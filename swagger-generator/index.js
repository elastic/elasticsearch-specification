var spec = require("elasticsearch-client-specification");
var yaml = require('js-yaml');
var fs = require('fs');

var specification = new spec.Specification();
console.log("The specification contains " + specification.endpoints.length + " endpoints yielding " + specification.types.length + " types");

specification = spec.Specification.load();
console.log("The specification contains " + specification.endpoints.length + " endpoints yielding " + specification.types.length + " types");

var swaggerRoot = yaml.safeDump({
  swagger : "2.0",
  info : {
    version: "0.0.0",
    title: "Elasticsearch swagger documentation"
  },
  paths: {
    "$ref": "paths.yml"
  }
});

console.log(swaggerRoot));
