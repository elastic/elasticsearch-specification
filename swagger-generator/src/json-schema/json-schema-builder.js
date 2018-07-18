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
    createInterfaceProperty(property) {
        return this.dispatchInstanceOf(property.type);
    }
    dispatchInstanceOf(type) {
        if (type instanceof Domain.Dictionary)
            return this.createDictionarySchema(type);
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