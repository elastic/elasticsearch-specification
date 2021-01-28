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

import Domain from "elasticsearch-client-specification/src/domain";
import {$typeName, $propertyName, $namespace} from "./naming";

const $enumFlag = (e: Domain.EnumMember, flag: boolean, n: number) => !flag ? `` : ` = 1 << ${n+1}`;
const $enumValue = (e: Domain.EnumMember, flag: boolean, n: number) => `
\t\t[DataMember(Name = "${e.stringRepresentation}")] ${$propertyName(e.name)}${$enumFlag(e, flag, n)}`;
const $enumValues = (e: Domain.Enum) => e.members.map((m,i)=> $enumValue(m, e.flags, i)).join(",");
export const $createEnum = (e: Domain.Enum) => `
using System.Runtime.Serialization;

namespace Nest.${$namespace(e.namespace)} {

\tpublic enum ${$typeName(e.name)} {
  ${$enumValues(e)}
\t}
}
`;
