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

import {Specification} from "../../../specification/src/api-specification";
import * as Domain from "../../../specification/src/domain";
import {Schema} from "swagger-schema-official";
import {Dictionary} from "../../../specification/src/domain";

export type Definitions = { [p: string]: Schema};

export class JsonSchemaBuilder {
  constructor(private specification: Specification) { }

  private createEnumSchema(enumType: Domain.Enum): Schema {
    return {
      type: "string",
      description: enumType.flags ? "flags" : null,
      enum: enumType.members.map(e => e.name)
    };
  }

  private createTypeSchema(type: Domain.Type): Schema {
    if (type.name === "boolean") return { type: "boolean" };
    if (type.name === "string") return { type: "string" };

    return {$ref: "#/definitions/" + type.name};
  }

  private createArraySchema(arr: Domain.ArrayOf): Schema {
    return { type: "array", items: this.dispatchInstanceOf(arr.of) };
  }

  private createDictionarySchema(dict: Domain.Dictionary): Schema {
    // todo handle additionalProperties and find out how we can type the key.
    return {
      type: "object",
      additionalProperties: this.dispatchInstanceOf(dict.value)
    };
  }
  private createName(i: Domain.InstanceOf): string {
    if (i instanceof Domain.Dictionary)
      return `dict<key: ${this.createName(i.key)}, value: ${this.createName(i.value)} >`;
    if (i instanceof Domain.UnionOf)
      return `union<${i.items.map(it => this.createName(it)).join(", ")}>`;
    if (i instanceof Domain.Type) return i.name;
    if (i instanceof Domain.ArrayOf) return `${this.createName(i.of)}[]`;
  }

  private createUnionOfSchema(union: Domain.UnionOf): Schema {
    // union should be oneOf but open api does not support the full json-schema draft 4
    return {
      description: `Not an array but: ${this.createName(union)}`,
      type:  "array",
      items: union.items.map(i => this.dispatchInstanceOf(i))
    };
  }

  private createInterfaceProperty(property: Domain.InterfaceProperty): Schema {
    return this.dispatchInstanceOf(property.type);
  }

  private dispatchInstanceOf(type: Domain.InstanceOf): Schema {
    if (type instanceof Domain.Dictionary) return this.createDictionarySchema(type);
    if (type instanceof Domain.UnionOf) return this.createUnionOfSchema(type);
    if (type instanceof Domain.Type) return this.createTypeSchema(type);
    if (type instanceof Domain.ArrayOf) return this.createArraySchema(type);
    return { type: "object", description: "Unknown InstanceOf" };
  }
  private dispatchInterface(i: Domain.Interface): Schema {
    if (i.inheritsFromUnresolved.some(t => t === "String")) return { type: "string", format: i.name };

    switch (i.name) {
      case "Uri" : return { type: "string", format: "uri" };
      case "Date" : return { type: "string", format: "date-time" };
      case "TimeSpan" : return { type: "string", format: "time" };
      case "SourceDocument" : return { type: "object" };
      case "short" :
      case "byte" :
      case "integer" :
      case "long" :
        return { type: "integer", format: i.name };
      case "float" :
      case "double" :
        return { type: "number", format: i.name};
    }
    return {
      type: "object",
      properties: i.properties.reduce((o, p) => ({...o, [p.name]: this.createInterfaceProperty(p)}), {})
    };
  }

  private toSchema(type: Domain.TypeDeclaration): Schema {
    if (type instanceof Domain.Enum) return this.createEnumSchema(type);
    if (type instanceof Domain.Interface) return this.dispatchInterface(type);
    return { type: "object", description: "Unknown TypeDeclaration" };
  }

  build(): Definitions {
    return this.specification.types.reduce((o, t) => ({...o, [t.name]: this.toSchema(t)}), {});
  }
}
