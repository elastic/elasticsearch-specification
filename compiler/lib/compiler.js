"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = require("fs/promises");
const path_1 = require("path");
const safe_stable_stringify_1 = __importDefault(require("safe-stable-stringify"));
const build_model_1 = require("./model/build-model");
const json_spec_1 = __importDefault(require("./model/json-spec"));
const validation_errors_1 = require("./validation-errors");
class Compiler {
    constructor() {
        this.queue = [];
        this.errors = new validation_errors_1.ValidationErrors();
    }
    generateModel() {
        this.jsonSpec = (0, json_spec_1.default)();
        const endpoints = (0, build_model_1.compileEndpoints)();
        this.model = (0, build_model_1.compileSpecification)(endpoints);
        return this;
    }
    async write() {
        for (const step of this.queue) {
            this.model = await step(this.model, this.jsonSpec, this.errors);
        }
        await (0, promises_1.writeFile)((0, path_1.join)(__dirname, '..', '..', 'output', 'schema', 'schema.json'), (0, safe_stable_stringify_1.default)(this.model, null, 2), 'utf8');
        this.errors.log();
        await (0, promises_1.writeFile)((0, path_1.join)(__dirname, '..', '..', 'output', 'schema', 'validation-errors.json'), (0, safe_stable_stringify_1.default)(this.errors, null, 2), 'utf8');
    }
    step(step) {
        this.queue.push(step);
        return this;
    }
}
exports.default = Compiler;
