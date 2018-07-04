//import { Specification } from "../specification/src/api-specification";
import Specification = require("../specification/src/api-specification");
import Yaml = require('js-yaml');
import fs = require('fs');
import * as Domain from "../specification/src/domain";

const specification = Specification.loadWithValidation();
if (specification.endpoint_errors.length > 0)
  console.error("The specification contains the following endpoint mapping errors:");

for (let e of specification.endpoint_errors) console.error("  - " + e);

if (specification.domain_errors.length +  specification.endpoint_errors.length == 0)
  console.log("The specification contains no errors in any of the " + specification.endpoints.length + " endpoints yielding " + specification.types.length + " types");

console.log("The specification contains " + specification.endpoints.length + " endpoints yielding " + specification.types.length + " types");


var swaggerEndpoints = {};
for (let e of specification.endpoints)
{
  let apiName = e.name;

  for (let m in e.methods)
  {
    let method = e.methods[m].toLowerCase();
    for (let u in e.url.paths)
    {
      let url = e.url.paths[u].toLowerCase();
      if (swaggerEndpoints[url] == null) swaggerEndpoints[url] = { };
      swaggerEndpoints[url][method] = {};
      let me = swaggerEndpoints[url][method];

      me.tags = [apiName];
      if (e.documentation)
        me.externalDocs = {url: e.documentation};

      me.consumes = ["application/json"];
      me.produces = ["application/json"];

      me.parameters = [];
      if (e.bodyDocumentation) {
        me.parameters.push({
          in: "body",
          name: "request",
          description: e.bodyDocumentation ? e.bodyDocumentation.description : null,
          required: e.bodyDocumentation ? e.bodyDocumentation.required : false,
          schema: { '$ref' : "#/definitions/" + e.typeMapping.request }
        });
      }
      me.responses = {
        200: {
          description: "Request accepted and processed response",
          schema: { '$ref': "#/definitions/" + e.typeMapping.response }
        }
      }
    }
  }
}

let swaggerDefinitions = {};
for (let t of specification.types)
{
  swaggerDefinitions[t.name] = {};
  let type = swaggerDefinitions[t.name];
  if (t instanceof Domain.Enum)
  {
    type.type = "string";
    //t.flags
    type.enum = [];
    for (let m of t.members)
    {
      type.enum.push(m)
    }
  }
  if (t instanceof Domain.Interface)
  {
    type.type = "object";
    type.properties = {};
    for (let p of t.properties)
    {
      if (p.type instanceof Domain.Type)
      {
        type.properties[p.name] = { '$ref': "#/definitions/" + p.type.name };
      }
      else
      {
        if (p.typeString != "string")
          type.properties[p.name] = { '$ref': "#/definitions/" + p.typeString };
        else
          type.properties[p.name] = {
            type: "string" //todo handle p.type
          }
      }


    }

  }
}

var swag = {
  swagger : "2.0",
  info : {
    version: "0.0.0",
    title: "Elasticsearch swagger documentation"
  },
  paths: swaggerEndpoints,
  definitions: swaggerDefinitions
};

var swaggerRoot = Yaml.safeDump(swag, { noRefs: true, lineWidth: 400 });

fs.writeFileSync("swagger-output/index.yml", swaggerRoot);
fs.writeFileSync("swagger-output/index.json", JSON.stringify(swag));
fs.writeFileSync("swagger-output/paths.yml", Yaml.safeDump(swaggerEndpoints));
