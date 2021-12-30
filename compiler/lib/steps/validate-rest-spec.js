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
var Body;
(function (Body) {
    Body[Body["noBody"] = 0] = "noBody";
    Body[Body["yesBody"] = 1] = "yesBody";
})(Body || (Body = {}));
const LOG = 'ALL';
async function validateRestSpec(model, jsonSpec, errors) {
    for (const endpoint of model.endpoints) {
        if (endpoint.request == null)
            continue;
        const requestDefinition = getDefinition(endpoint.request);
        const requestProperties = getProperties(requestDefinition);
        if (endpoint.request.name === LOG || LOG === 'ALL') {
            const spec = jsonSpec.get(endpoint.name);
            (0, assert_1.default)(spec, `Can't find the json spec for ${endpoint.name}`);
            const urlParts = Array.from(new Set(spec.url.paths
                .filter(path => path.parts != null)
                .flatMap(path => {
                (0, assert_1.default)(path.parts != null);
                return Object.keys(path.parts);
            })));
            const pathProperties = requestProperties.path.map(property => property.name);
            for (const name of pathProperties) {
                if (!urlParts.includes(name)) {
                    errors.addEndpointError(endpoint.name, 'request', `${endpoint.request.name}: path parameter '${name}' does not exist in the json spec`);
                }
            }
            for (const name of urlParts) {
                if (!pathProperties.includes(name)) {
                    errors.addEndpointError(endpoint.name, 'request', `${endpoint.request.name}: missing json spec path parameter '${name}'`);
                }
            }
            if (spec.params != null) {
                const params = Object.keys(spec.params);
                const queryProperties = requestProperties.query.map(property => property.name);
                for (const name of queryProperties) {
                    if (!params.includes(name)) {
                        errors.addEndpointError(endpoint.name, 'request', `${endpoint.request.name}: query parameter '${name}' does not exist in the json spec`);
                    }
                }
                for (const name of params) {
                    if (!queryProperties.includes(name)) {
                        errors.addEndpointError(endpoint.name, 'request', `${endpoint.request.name}: missing json spec query parameter '${name}'`);
                    }
                }
            }
            if (requestProperties.body === Body.yesBody && spec.body == null) {
                errors.addEndpointError(endpoint.name, 'request', `${endpoint.request.name}: should not have a body`);
            }
            if (requestProperties.body === Body.noBody && spec.body != null && spec.body.required === true) {
                errors.addEndpointError(endpoint.name, 'request', `${endpoint.request.name}: should have a body definition`);
            }
        }
    }
    return model;
    function getDefinition(name) {
        for (const type of model.types) {
            if (type.kind === 'request' || type.kind === 'interface') {
                if (type.name.name === name.name && type.name.namespace === name.namespace) {
                    return type;
                }
            }
        }
        throw new Error(`Can't find the request definiton for ${name.namespace}.${name.name}`);
    }
    function getProperties(definition) {
        const path = [];
        const query = [];
        let body = Body.noBody;
        if (definition.kind === 'request') {
            if (definition.path.length > 0) {
                path.push(...definition.path);
            }
            if (definition.query.length > 0) {
                query.push(...definition.query);
            }
            if (definition.body != null) {
                body = Body.yesBody;
            }
        }
        else {
            if (definition.properties.length > 0) {
                query.push(...definition.properties);
            }
        }
        if (Array.isArray(definition.inherits)) {
            const inherits = definition.inherits.map(inherit => getDefinition(inherit.type));
            for (const inherit of inherits) {
                const properties = getProperties(inherit);
                if (properties.path.length > 0) {
                    path.push(...properties.path);
                }
                if (properties.query.length > 0) {
                    query.push(...properties.query);
                }
                if (properties.body === Body.yesBody) {
                    body = properties.body;
                }
            }
        }
        return { path, query, body };
    }
}
exports.default = validateRestSpec;
