"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const compiler_1 = __importDefault(require("./compiler"));
const validate_rest_spec_1 = __importDefault(require("./steps/validate-rest-spec"));
const add_info_1 = __importDefault(require("./steps/add-info"));
const add_description_1 = __importDefault(require("./steps/add-description"));
const validate_model_1 = __importDefault(require("./steps/validate-model"));
const add_content_type_1 = __importDefault(require("./steps/add-content-type"));
const read_definition_validation_1 = __importDefault(require("./steps/read-definition-validation"));
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
