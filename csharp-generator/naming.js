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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.$instanceOf = exports.$namespace = exports.$parseFieldName = exports.$fieldName = exports.$propertyName = exports.$typeName = exports.reservedTypes = exports.objectTypes = exports.numberTypes = exports.stringTypes = void 0;
const changeCase = __importStar(require("change-case"));
const domain_1 = __importDefault(require("elasticsearch-client-specification/src/domain"));
const specs_1 = require("./specs");
exports.stringTypes = ["Field", "Id", "Ids", "IndexName", "Indices", "Routing", "LongId", "IndexMetrics", "Metrics", "Name", "Names",
    "NodeIds", "PropertyName", "RelationName", "TaskId", "Timestamp",
    "Uri", "Date", "TimeSpan"
];
exports.numberTypes = ["short", "byte", "integer", "long", "float", "double"];
exports.objectTypes = ["SourceDocument"];
exports.reservedTypes = ["string", "integer", "double", "boolean", "object"];
exports.$typeName = (name) => {
    switch (name) {
        case "String": return "string";
        case "long": return "long";
        case "integer": return "int";
        case "boolean": return "bool";
        case "Date": return "DateTimeOffset";
        case "Indices": return "IndicesNames";
        default:
            if (exports.reservedTypes.includes(name))
                return changeCase.noCase(name);
            if (exports.numberTypes.includes(name))
                return changeCase.noCase(name);
            if (!name.includes("<"))
                return changeCase.pascalCase(name, { stripRegexp: /[^A-Z0-9<>]/gi });
            return changeCase.pascalCase(name, { stripRegexp: /[^A-Z0-9<>]/gi });
    }
};
exports.$propertyName = (prop) => {
    if (prop === "+")
        return "Add";
    if (prop === "-")
        return "Subtract";
    if (prop.match(/^\d/))
        return `${changeCase.pascalCase("average" + prop)}`;
    return prop.includes(".") || prop.includes("-") || prop.match(/^(\d|\W)/)
        ? changeCase.pascalCase(prop)
        : changeCase.pascalCase(prop);
};
exports.$fieldName = (prop) => {
    if (prop.match(/^\d/))
        return `_${changeCase.camelCase("average" + prop)}`;
    return prop.includes(".") || prop.includes("-") || prop.match(/^(\d|\W)/)
        ? `_${changeCase.camelCase(prop)}`
        : `_${changeCase.camelCase(prop)}`;
};
exports.$parseFieldName = (prop) => {
    if (prop.match(/^\d/))
        return changeCase.constantCase("average" + prop);
    return changeCase.constantCase(prop);
};
exports.$namespace = (ns, join = ".", max = 1) => ns.split(".").slice(0, max).map(e => exports.$typeName(e)).join(join);
exports.$instanceOf = (instance) => {
    if (instance instanceof domain_1.default.Type) {
        const typeRef = specs_1.specification.typeLookup[instance.name] || { generatorHints: { alternateName: undefined } };
        if (!typeRef.generatorHints)
            console.log(instance.name);
        if (instance.closedGenerics.length === 0)
            return exports.$typeName(typeRef.generatorHints.alternateName || instance.name);
        const generics = instance.closedGenerics.map(exports.$instanceOf).flat(Infinity);
        return `${exports.$typeName(typeRef.generatorHints.alternateName || instance.name)}<${generics.join(", ")}>`;
    }
    else if (instance instanceof domain_1.default.ArrayOf)
        return `List<${exports.$instanceOf(instance.of)}>`;
    else if (instance instanceof domain_1.default.Dictionary)
        return `IDictionary<${exports.$instanceOf(instance.key)}, ${exports.$instanceOf(instance.value)}>`;
    else if (instance instanceof domain_1.default.UnionOf)
        return `Union<${instance.items.map(exports.$instanceOf).join(", ")}>`;
};
//# sourceMappingURL=naming.js.map