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
exports.$createEnum = void 0;
const naming_1 = require("./naming");
const $enumFlag = (e, flag, n) => !flag ? `` : ` = 1 << ${n + 1}`;
const $enumValue = (e, flag, n) => `
\t\t[DataMember(Name = "${e.stringRepresentation}")] ${naming_1.$propertyName(e.name)}${$enumFlag(e, flag, n)}`;
const $enumValues = (e) => e.members.map((m, i) => $enumValue(m, e.flags, i)).join(",");
exports.$createEnum = (e) => `
using System.Runtime.Serialization;

namespace Nest.${naming_1.$namespace(e.namespace)} {

\tpublic enum ${naming_1.$typeName(e.name)} {
  ${$enumValues(e)}
\t}
}
`;
//# sourceMappingURL=enums.js.map