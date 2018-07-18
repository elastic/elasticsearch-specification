import {Specification} from "../../specification/src/api-specification";
import * as Yaml from "js-yaml";
import * as fs from "fs";
import {Schema, Spec} from "swagger-schema-official";
import {SwaggerEndpointBuilder} from "./swagger-enpoint-builder";
import {JsonSchemaBuilder} from "./json-schema/json-schema-builder";

export class SwaggerGenerator {
  constructor(private specification: Specification) { }

  export(folder: string) {
    const swag: Spec = {
      swagger : "2.0",
      info: {
        version: "0.0.0",
        title: "Elasticsearch swagger documentation"
      },
      paths: new SwaggerEndpointBuilder(this.specification).build(),
      definitions: new JsonSchemaBuilder(this.specification).build()
    };

    const swaggerRoot = Yaml.safeDump(swag, { noRefs: true, lineWidth: 400 });
    const f = __dirname + "/" + folder;

    fs.writeFileSync( f + "/index.yml", swaggerRoot);
    fs.writeFileSync(f + "/index.json", JSON.stringify(swag));
  }
}
