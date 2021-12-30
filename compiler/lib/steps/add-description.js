"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
async function addDescription(model, jsonSpec) {
    var _a, _b, _c;
    for (const endpoint of model.endpoints) {
        if (endpoint.request == null)
            continue;
        const requestDefinition = getDefinition(endpoint.request);
        const spec = jsonSpec.get(endpoint.name);
        (0, assert_1.default)(spec, `Can't find the json spec for ${endpoint.name}`);
        for (const property of requestDefinition.path) {
            const definition = spec.url.paths.find(path => {
                if (path.parts == null)
                    return false;
                return path.parts[property.name] != null;
            });
            if ((definition === null || definition === void 0 ? void 0 : definition.parts) != null) {
                const { description } = definition.parts[property.name];
                if (typeof description === 'string') {
                    property.description = (_a = property.description) !== null && _a !== void 0 ? _a : description;
                }
            }
        }
        if (spec.params != null) {
            for (const property of requestDefinition.query) {
                const param = spec.params[property.name];
                if (param != null && typeof param.description === 'string') {
                    property.description = (_b = property.description) !== null && _b !== void 0 ? _b : param.description;
                }
            }
        }
        if (spec.documentation.description != null) {
            requestDefinition.description = (_c = requestDefinition.description) !== null && _c !== void 0 ? _c : spec.documentation.description;
        }
    }
    return model;
    function getDefinition(request) {
        for (const type of model.types) {
            if (type.kind === 'request') {
                if (type.name.name === request.name && type.name.namespace === request.namespace) {
                    return type;
                }
            }
        }
        throw new Error(`Can't find the request definiton for ${request.namespace}.${request.name}`);
    }
}
exports.default = addDescription;
