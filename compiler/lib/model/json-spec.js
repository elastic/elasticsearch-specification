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
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const fs_1 = require("fs");
const jsonSpecPath = (0, path_1.join)(__dirname, '..', '..', '..', 'specification', '_json_spec');
function buildJsonSpec() {
    const files = (0, fs_1.readdirSync)(jsonSpecPath)
        .filter(file => file.endsWith('.json'));
    const map = new Map();
    for (const file of files) {
        const json = require((0, path_1.join)(jsonSpecPath, file));
        const name = Object.keys(json)[0];
        map.set(name, json[name]);
    }
    return map;
}
exports.default = buildJsonSpec;
