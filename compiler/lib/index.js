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
