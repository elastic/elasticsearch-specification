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
exports.$createClass = void 0;
const naming_1 = require("./naming");
const imports_1 = require("./imports");
const $typeExtends = (type) => {
    return type.inherits.length === 0
        ? ``
        : `: ${type.inherits.map($handleDictionaryResponse).join(", ")}`;
};
const $handleDictionaryResponse = (ref) => {
    if (ref.type === undefined)
        return "";
    return ref.type.name === "DictionaryResponseBase"
        ? `${naming_1.$typeName(ref.type.name)}<${ref.closedGenerics.map(naming_1.$instanceOf).join(", ")}>`
        : naming_1.$typeName(ref.type.name);
};
const $abstractClass = (type) => {
    return type.name === "DictionaryResponseBase"
        ? `abstract `
        : ``;
};
const $typeGenerics = (type) => {
    return type.openGenerics.length === 0
        ? ``
        : `<${type.openGenerics.map(g => `${g}`).join(", ")}>`;
};
const $property = (prop, parent) => `
\t\t[DataMember(Name="${prop.name}")]
\t\tpublic ${naming_1.$instanceOf(prop.type)} ${naming_1.$propertyName(prop.generatorHints.alternateName || prop.name)} { get; set; }
`;
const $properties = (type) => type.properties.map(p => $property(p, type)).join("\n");
exports.$createClass = (type) => `${[...imports_1.$imports(type)].join("\n")}
namespace Nest.${naming_1.$namespace(type.namespace)} {

\tpublic ${$abstractClass(type)}class ${naming_1.$typeName(type.name)}${$typeGenerics(type)} ${$typeExtends(type)} {
\t\t${$properties(type)}
\t}
}
`;
//# sourceMappingURL=types.js.map