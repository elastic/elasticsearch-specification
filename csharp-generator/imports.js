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
exports.$imports = void 0;
const domain_1 = __importDefault(require("elasticsearch-client-specification/src/domain"));
const specs_1 = require("./specs");
const naming_1 = require("./naming");
const $referencedTypes = (instance) => {
    if (instance instanceof domain_1.default.Type) {
        const type = specs_1.specification.typeLookup[instance.name];
        const inherits = type instanceof domain_1.default.Interface
            ? type.inherits.flatMap(t => t.closedGenerics.map($referencedTypes)).flat()
            : [];
        const properties = type instanceof domain_1.default.Interface
            ? type.properties.map(t => specs_1.specification.typeLookup[t.name])
            : [];
        return [type]
            .concat(instance.closedGenerics.map($referencedTypes).flat())
            .concat(inherits);
    }
    else if (instance instanceof domain_1.default.ArrayOf)
        return $referencedTypes(instance.of).flat();
    else if (instance instanceof domain_1.default.Dictionary)
        return [$referencedTypes(instance.key), $referencedTypes(instance.value)].flat();
    else if (instance instanceof domain_1.default.UnionOf)
        return instance.items.map($referencedTypes).flat();
};
const $import = (ns) => `using ${naming_1.$namespace(ns, ".", ns.startsWith("nest.") ? 2 : Infinity)};`;
const defaultImports = [
    "System",
    "System.Collections.Generic",
    "System.Runtime.Serialization"
];
exports.$imports = (type) => {
    const types = type.properties
        .flatMap(e => $referencedTypes(e.type))
        .concat(type.properties
        .filter(p => p.type instanceof domain_1.default.Type)
        .map(p => p.type instanceof domain_1.default.Type ? specs_1.specification.typeLookup[p.type.name] : null)
        .filter(t => !t))
        .concat(type.inherits.map(i => i.type))
        .concat(type.inherits.flatMap(i => i.closedGenerics.flatMap($referencedTypes)))
        .filter(e => e && e.name !== "string")
        .map(e => {
        if (e.namespace.startsWith("mapping.types.core."))
            return "nest.mapping.types.core";
        return "nest." + e.namespace;
    })
        .concat(defaultImports)
        .map($import);
    return new Set(types);
};
//# sourceMappingURL=imports.js.map