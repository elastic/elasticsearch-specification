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
const child_process_1 = require("child_process");
const fs_1 = require("fs");
const path_1 = require("path");
async function addInfo(model, jsonSpec) {
    const branch = (0, child_process_1.execSync)('git branch --show-current').toString().trim();
    const isBaseBranch = branch === 'main' || branch.startsWith('7.');
    if (isBaseBranch && process.env.SKIP_VERSION_UPDATE !== 'true') {
        model._info = {
            version: branch,
            hash: (0, child_process_1.execSync)('git rev-parse --short HEAD').toString().trim(),
            title: 'Elasticsearch Request & Response Specification',
            license: {
                name: 'Apache 2.0',
                url: 'https://github.com/elastic/elasticsearch-specification/blob/master/LICENSE'
            }
        };
    }
    else {
        const current = JSON.parse((0, fs_1.readFileSync)((0, path_1.join)(__dirname, '..', '..', '..', 'output', 'schema', 'schema.json'), 'utf8'));
        model._info = {
            version: current._info.version,
            hash: current._info.hash,
            title: 'Elasticsearch Request & Response Specification',
            license: {
                name: 'Apache 2.0',
                url: 'https://github.com/elastic/elasticsearch-specification/blob/master/LICENSE'
            }
        };
    }
    return model;
}
exports.default = addInfo;
