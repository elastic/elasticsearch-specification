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
const domain_1 = __importDefault(require("elasticsearch-client-specification/src/domain"));
const fs_1 = __importDefault(require("fs"));
const naming_1 = require("./naming");
const types_value_1 = require("./types-value");
const types_union_1 = require("./types-union");
const types_1 = require("./types");
const enums_1 = require("./enums");
const specs_1 = require("./specs");
const rimraf_1 = __importDefault(require("rimraf"));
if (specs_1.specification.domain_errors.length + specs_1.specification.endpoint_errors.length !== 0) {
    if (specs_1.specification.endpoint_errors.length > 0)
        console.error("The specification contains the following endpoint mapping errors:");
    for (const e of specs_1.specification.endpoint_errors)
        console.error("  - " + e);
}
else
    console.log("The specification contains no errors in any of the " + specs_1.specification.endpoints.length + " endpoints yielding " + specs_1.specification.types.length + " types");
const $createType = (type) => {
    if (naming_1.stringTypes.includes(type.name) || type.inherits.findIndex(t => t.type.name === "String") > -1)
        return types_value_1.$createValueObject(type, "string");
    if (naming_1.objectTypes.includes(type.name))
        return types_value_1.$createValueObject(type, "Object");
    if (type.implementsUnion())
        return types_union_1.$createUnionType(type);
    return types_1.$createClass(type);
};
const $renderType = (type) => {
    if (type instanceof domain_1.default.Interface)
        return $createType(type);
    else if (type instanceof domain_1.default.Enum)
        return enums_1.$createEnum(type);
};
fs_1.default.renameSync('../output/csharp/Union.cs', '../output/Union.cs');
fs_1.default.renameSync('../output/csharp/Nest.csproj', '../output/Nest.csproj');
rimraf_1.default.sync('../output/csharp/**', {});
fs_1.default.mkdirSync("../output/csharp");
fs_1.default.renameSync('../output/Union.cs', '../output/csharp/Union.cs');
fs_1.default.renameSync('../output/Nest.csproj', '../output/csharp/Nest.csproj');
for (const type of specs_1.specification.types) {
    if (naming_1.reservedTypes.includes(type.name.toLowerCase()))
        continue;
    if (naming_1.numberTypes.includes(type.name.toLowerCase()))
        continue;
    if (type.name === "Uri")
        continue;
    if (type.name === "Date")
        continue;
    if (type.name === "Dictionary")
        continue;
    if (type.namespace.startsWith("mapping.types.core."))
        type.namespace = "mapping.types.core";
    const ns = type.namespace;
    const folder = naming_1.$namespace(ns, "/", Infinity);
    const exportFolder = `../output/csharp/${folder}`;
    if (!fs_1.default.existsSync(exportFolder))
        fs_1.default.mkdirSync(exportFolder, { recursive: true });
    fs_1.default.writeFileSync(`${exportFolder}/${naming_1.$typeName(type.name)}.cs`, $renderType(type));
}
//# sourceMappingURL=index.js.map