"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
async function addContentType(model, jsonSpec) {
    for (const endpoint of model.endpoints) {
        const spec = jsonSpec.get(endpoint.name);
        (0, assert_1.default)(spec, `Can't find the json spec for ${endpoint.name}`);
        if (Array.isArray(spec.headers.accept)) {
            endpoint.accept = spec.headers.accept;
        }
        if (Array.isArray(spec.headers.content_type)) {
            endpoint.contentType = spec.headers.content_type;
        }
    }
    return model;
}
exports.default = addContentType;
