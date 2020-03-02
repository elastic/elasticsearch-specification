"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const Domain = require("elasticsearch-client-specification/src/domain");
class FlightRecorderJsonGenerator {
    constructor(specification) {
        this.specification = specification;
    }
    export(folder) {
        const f = path.join(__dirname, folder);
        this.specification.endpoints.forEach(api => {
            const pathPrefix = path.join(f, api.name);
            const request = this.toType(api.typeMapping.request);
            fs.writeFileSync(pathPrefix + "_request.json", JSON.stringify(request, null, 2));
            const response = this.toType(api.typeMapping.response);
            fs.writeFileSync(pathPrefix + "_response.json", JSON.stringify(response, null, 2));
        });
    }
    toType(typeName) {
        const type = this.specification.typeLookup[typeName];
        return this.toSchema(type);
    }
    dispatchInterface(i) {
        if (i.inheritsFromUnresolved.some(t => t === "String"))
            return "__" + i.name + "__";
        switch (i.name) {
            case "Uri": return "__uri__";
            case "Date": return "__date__";
            case "TimeSpan": return "__duration__";
            case "SourceDocument": return "__source__";
            case "short":
            case "byte":
            case "integer":
            case "long":
            case "float":
            case "double":
                return i.name;
        }
        return i.properties.reduce((o, p) => (Object.assign(Object.assign({}, o), { [p.name]: this.createInterfaceProperty(p) })), {});
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
            return "boolean";
        if (type.name === "string")
            return "string";
        const i = this.specification.typeLookup[type.name];
        return {};
    }
    createArraySchema(arr) {
        return [this.dispatchInstanceOf(arr.of)];
    }
    createDictionarySchema(dict) {
        return { __name__: this.dispatchInstanceOf(dict.value) };
    }
    createInterfaceProperty(property) {
        return this.dispatchInstanceOf(property.type);
    }
    createUnionOfSchema(union) {
        return { __anyOf__: [
                union.items.map(i => this.dispatchInstanceOf(i))
            ] };
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
    toSchema(type) {
        if (type instanceof Domain.Enum)
            return this.createEnumSchema(type);
        if (type instanceof Domain.Interface)
            return this.dispatchInterface(type);
        return { type: "object", description: "Unknown TypeDeclaration" };
    }
}
exports.FlightRecorderJsonGenerator = FlightRecorderJsonGenerator;
//# sourceMappingURL=flight-recorder-json-generator.js.map