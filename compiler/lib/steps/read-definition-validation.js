"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const chalk_1 = __importDefault(require("chalk"));
async function readDefinitionValidation(model, jsonSpec) {
    var _a;
    for (const type of model.types) {
        if (type.kind !== 'interface')
            continue;
        const readBehavior = (_a = type.behaviors) === null || _a === void 0 ? void 0 : _a.find(behavior => behavior.type.name === 'OverloadOf');
        if (readBehavior == null)
            continue;
        (0, assert_1.default)(Array.isArray(readBehavior.generics));
        (0, assert_1.default)(readBehavior.generics[0].kind === 'instance_of');
        for (const parent of model.types) {
            if (parent.name.name === readBehavior.generics[0].type.name && parent.name.namespace === readBehavior.generics[0].type.namespace) {
                (0, assert_1.default)(parent.kind === 'interface');
                const readProperties = type.properties.map(p => p.name);
                for (const property of parent.properties) {
                    if (!readProperties.includes(property.name)) {
                        console.log(chalk_1.default.red `The property '${property.name}' is present in ${parent.name.namespace}.${parent.name.name} but not in ${type.name.namespace}.${type.name.name}`);
                        process.exit(1);
                    }
                    const readProperty = type.properties.find(p => p.name === property.name);
                    if (!deepEqual(readProperty.type, property.type)) {
                        console.log(chalk_1.default.red `The property '${property.name}' present in ${parent.name.namespace}.${parent.name.name} does not have the same type in ${type.name.namespace}.${type.name.name}`);
                        process.exit(1);
                    }
                    for (const key in property) {
                        if (key === 'required')
                            continue;
                        readProperty[key] = property[key];
                    }
                }
            }
        }
    }
    return model;
}
exports.default = readDefinitionValidation;
function deepEqual(a, b) {
    try {
        assert_1.default.deepStrictEqual(a, b);
        return true;
    }
    catch (err) {
        return false;
    }
}
