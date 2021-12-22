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
