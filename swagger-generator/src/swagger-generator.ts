/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

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

    const swaggerRoot = Yaml.safeDump(swag, { noRefs: true, lineWidth: 400, skipInvalid: true });
    const f = __dirname + "/" + folder;

    fs.writeFileSync( f + "/index.yml", swaggerRoot);
    fs.writeFileSync(f + "/index.json", JSON.stringify(swag));
  }
}
