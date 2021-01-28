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
exports.$createUnionType = void 0;
const naming_1 = require("./naming");
const imports_1 = require("./imports");
exports.$createUnionType = (type) => `${[...imports_1.$imports(type)].join("\n")}
namespace Nest.${naming_1.$namespace(type.namespace)} {

\tpublic class ${naming_1.$typeName(type.name)} : Union<${type.inherits[0].closedGenerics.map(naming_1.$instanceOf).join(", ")}> {

\t\tpublic ${naming_1.$typeName(type.name)}(${naming_1.$instanceOf(type.inherits[0].closedGenerics[0])} val1) : base(val1) { }

\t\tpublic ${naming_1.$typeName(type.name)}(${naming_1.$instanceOf(type.inherits[0].closedGenerics[1])} val2) : base(val2) { }

\t\tpublic static implicit operator ${naming_1.$typeName(type.name)}(${naming_1.$instanceOf(type.inherits[0].closedGenerics[0])} val1) => new ${naming_1.$typeName(type.name)}(val1);

\t\tpublic static implicit operator ${naming_1.$typeName(type.name)}(${naming_1.$instanceOf(type.inherits[0].closedGenerics[1])} val2) => new ${naming_1.$typeName(type.name)}(val2);

\t}
}
`;
//# sourceMappingURL=types-union.js.map