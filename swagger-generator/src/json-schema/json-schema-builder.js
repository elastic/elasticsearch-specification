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

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Domain = require("../../../specification/src/domain");
class JsonSchemaBuilder {
    constructor(specification) {
        this.specification = specification;
    }
    createEnumSchema(enumType) {
        return {
            type: "string",
            description: enumType.flags ? "flags" : null,
            enum: enumType.members.map(e => e.name)
        };
    }
    createTypeSchema(type) {
        if (type.name === "boolean")
            return { type: "boolean" };
        if (type.name === "string")
            return { type: "string" };
        return { $ref: "#/definitions/" + type.name };
    }
    createArraySchema(arr) {
        return { type: "array", items: this.dispatchInstanceOf(arr.of) };
    }
    createDictionarySchema(dict) {
        return {
            type: "object",
            additionalProperties: this.dispatchInstanceOf(dict.value)
        };
    }
    createName(i) {
        if (i instanceof Domain.Dictionary)
            return `dict<key: ${this.createName(i.key)}, value: ${this.createName(i.value)} >`;
        if (i instanceof Domain.UnionOf)
            return `union<${i.items.map(it => this.createName(it)).join(", ")}>`;
        if (i instanceof Domain.Type)
            return i.name;
        if (i instanceof Domain.ArrayOf)
            return `${this.createName(i.of)}[]`;
    }
    createUnionOfSchema(union) {
        return {
            description: `Not an array but: ${this.createName(union)}`,
            type: "array",
            items: union.items.map(i => this.dispatchInstanceOf(i))
        };
    }
    createInterfaceProperty(property) {
        return this.dispatchInstanceOf(property.type);
    }
    dispatchInstanceOf(type) {
        if (type instanceof Domain.Dictionary)
            return this.createDictionarySchema(type);
        if (type instanceof Domain.UnionOf)
            return this.createUnionOfSchema(type);
        if (type instanceof Domain.Type)
            return this.createTypeSchema(type);
        if (type instanceof Domain.ArrayOf)
            return this.createArraySchema(type);
        return { type: "object", description: "Unknown InstanceOf" };
    }
    dispatchInterface(i) {
        if (i.inheritsFromUnresolved.some(t => t === "String"))
            return { type: "string", format: i.name };
        switch (i.name) {
            case "Uri": return { type: "string", format: "uri" };
            case "Date": return { type: "string", format: "date-time" };
            case "TimeSpan": return { type: "string", format: "time" };
            case "SourceDocument": return { type: "object" };
            case "short":
            case "byte":
            case "integer":
            case "long":
                return { type: "integer", format: i.name };
            case "float":
            case "double":
                return { type: "number", format: i.name };
        }
        return {
            type: "object",
            properties: i.properties.reduce((o, p) => (Object.assign({}, o, { [p.name]: this.createInterfaceProperty(p) })), {})
        };
    }
    toSchema(type) {
        if (type instanceof Domain.Enum)
            return this.createEnumSchema(type);
        if (type instanceof Domain.Interface)
            return this.dispatchInterface(type);
        return { type: "object", description: "Unknown TypeDeclaration" };
    }
    build() {
        return this.specification.types.reduce((o, t) => (Object.assign({}, o, { [t.name]: this.toSchema(t) })), {});
    }
}
exports.JsonSchemaBuilder = JsonSchemaBuilder;
//# sourceMappingURL=json-schema-builder.js.map