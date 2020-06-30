"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightRecorderJsonGenerator = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const Domain = __importStar(require("elasticsearch-client-specification/src/domain"));
const json_stable_stringify_1 = __importDefault(require("json-stable-stringify"));
class FlightRecorderJsonGenerator {
    constructor(specification) {
        this.specification = specification;
    }
    export(folder) {
        const f = path.join(__dirname, folder);
        if (!fs.existsSync(f))
            fs.mkdirSync(f);
        this.specification.endpoints.forEach(api => {
            const pathPrefix = path.join(f, api.name);
            const body = this.createRequestResponse(api.typeMapping.request);
            let args = api.queryStringParameters.reduce((o, p) => ({ ...o, [p.name]: p.type }), {});
            args = api.url.paths
                .flatMap(p => p.parts)
                .reduce((o, p) => ({ ...o, [p.name]: p.type }), args);
            if (Object.keys(body).length > 0) {
                args.body = body;
            }
            const request = {
                api: api.name,
                args
            };
            fs.writeFileSync(pathPrefix + "_request.json", json_stable_stringify_1.default(request, { space: 2 }));
            const response = {
                api: api.name,
                headers: {
                    "content-length": "string",
                    "content-type": "application/json; charset=UTF-8"
                },
                payload: {
                    body: this.createRequestResponse(api.typeMapping.response)
                },
                statusCode: [200]
            };
            fs.writeFileSync(pathPrefix + "_response.json", json_stable_stringify_1.default(response, { space: 2 }));
        });
    }
    createRequestResponse(typeName) {
        const type = this.lookupType(typeName);
        const seenTypes = new Set();
        seenTypes.add(typeName);
        return this.toSchema(type, seenTypes, typeName);
    }
    dispatchInterface(i, seenTypes) {
        if (i.inheritsFromUnresolved.some(t => t === "String"))
            return "__" + i.name + "__";
        const valueType = FlightRecorderJsonGenerator.createValueType(i.name);
        if (valueType !== null)
            return valueType;
        return i.properties
            .filter(p => !p.isRequestParameter)
            .reduce((o, p) => ({ ...o, [p.name]: this.createInterfaceProperty(p, seenTypes) }), {});
    }
    static createValueType(typeName) {
        switch (typeName) {
            case "Time": return "__time__";
            case "Uri": return "__uri__";
            case "Date": return "__date__";
            case "TimeSpan": return "__duration__";
            case "TDocument":
            case "TPartialDocument":
            case "SourceDocument": return "__source__";
            case "T": return "__value__";
            case "TResult": return "__value__";
            case "string":
            case "boolean":
                return typeName;
            case "short":
            case "byte":
            case "integer":
            case "long":
                return "number";
            case "float":
            case "double":
                return "number";
            case "object":
                return {};
        }
        return null;
    }
    static createEnumSchema(enumType) {
        return "enum";
    }
    lookupType(typeName) {
        let i = this.specification.typeLookup[typeName];
        if (i != null)
            return i;
        typeName = typeName.replace(/<.+$/, "");
        i = this.specification.typeLookup[typeName];
        if (i == null && typeName !== "object" &&
            (!typeName.endsWith("Response") && !typeName.endsWith("Request")))
            throw Error("Can not find " + typeName);
        return i;
    }
    createTypeSchema(type, seenTypes) {
        const valueType = FlightRecorderJsonGenerator.createValueType(type.name);
        if (valueType !== null)
            return valueType;
        if (seenTypes.has(type.name))
            return { $type: `Circular reference to: ${type.name}` };
        seenTypes.add(type.name);
        const i = this.lookupType(type.name);
        const schema = this.toSchema(i, seenTypes, type.name);
        seenTypes.delete(type.name);
        return schema;
    }
    createArraySchema(arr, seenTypes) {
        return [this.dispatchInstanceOf(arr.of, seenTypes)];
    }
    createDictionarySchema(dict, seenTypes) {
        return { __name__: this.dispatchInstanceOf(dict.value, seenTypes) };
    }
    createInterfaceProperty(property, seenTypes) {
        return this.dispatchInstanceOf(property.type, seenTypes);
    }
    createUnionOfSchema(union, seenTypes) {
        return { __anyOf__: [
                union.items.map(i => this.dispatchInstanceOf(i, seenTypes))
            ] };
    }
    dispatchInstanceOf(type, seenTypes) {
        if (type instanceof Domain.Dictionary)
            return this.createDictionarySchema(type, seenTypes);
        if (type instanceof Domain.UnionOf)
            return this.createUnionOfSchema(type, seenTypes);
        if (type instanceof Domain.Type)
            return this.createTypeSchema(type, seenTypes);
        if (type instanceof Domain.ArrayOf)
            return this.createArraySchema(type, seenTypes);
        return { type: "object", description: "Unknown InstanceOf" };
    }
    toSchema(type, seenTypes, lastAddedType) {
        if (type instanceof Domain.Enum)
            return FlightRecorderJsonGenerator.createEnumSchema(type);
        if (type instanceof Domain.Interface)
            return this.dispatchInterface(type, seenTypes);
        return { type: "object", description: "undefined in spec" + lastAddedType };
    }
}
exports.FlightRecorderJsonGenerator = FlightRecorderJsonGenerator;
//# sourceMappingURL=flight-recorder-json-generator.js.map