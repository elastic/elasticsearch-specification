"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const compiler_1 = __importDefault(require("./compiler"));
const validate_rest_spec_1 = __importDefault(require("./steps/validate-rest-spec"));
const add_info_1 = __importDefault(require("./steps/add-info"));
const add_description_1 = __importDefault(require("./steps/add-description"));
const validate_model_1 = __importDefault(require("./steps/validate-model"));
const add_content_type_1 = __importDefault(require("./steps/add-content-type"));
const read_definition_validation_1 = __importDefault(require("./steps/read-definition-validation"));
const nvmrc = (0, fs_1.readFileSync)((0, path_1.join)(__dirname, '..', '..', '.nvmrc'), 'utf8');
const nodejsMajor = (_b = (_a = process.version.split('.').shift()) === null || _a === void 0 ? void 0 : _a.slice(1)) !== null && _b !== void 0 ? _b : '';
const nvmMajor = (_c = nvmrc.trim().split('.').shift()) !== null && _c !== void 0 ? _c : '';
if (nodejsMajor !== nvmMajor) {
    console.error(`Bad nodejs major version, you are using ${nodejsMajor}, while ${nvmMajor} should be used. Run 'nvm install' to fix this.`);
    process.exit(1);
}
const compiler = new compiler_1.default();
compiler
    .generateModel()
    .step(add_info_1.default)
    .step(add_content_type_1.default)
    .step(read_definition_validation_1.default)
    .step(validate_rest_spec_1.default)
    .step(add_description_1.default)
    .step(validate_model_1.default)
    .write()
    .then(() => {
    console.log('Done');
})
    .catch(err => {
    console.error(err);
    process.exit(1);
});
