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
import {$instanceOf, $namespace, $typeName} from "./naming";
import {$imports} from "./imports";

export const $createUnionType = (type: Domain.Interface) => `${[...$imports(type)].join("\n")}
namespace Nest.${$namespace(type.namespace)} {

\tpublic class ${$typeName(type.name)} : Union<${type.inherits[0].closedGenerics.map($instanceOf).join(", ")}> {

\t\tpublic ${$typeName(type.name)}(${$instanceOf(type.inherits[0].closedGenerics[0])} val1) : base(val1) { }

\t\tpublic ${$typeName(type.name)}(${$instanceOf(type.inherits[0].closedGenerics[1])} val2) : base(val2) { }

\t\tpublic static implicit operator ${$typeName(type.name)}(${$instanceOf(type.inherits[0].closedGenerics[0])} val1) => new ${$typeName(type.name)}(val1);

\t\tpublic static implicit operator ${$typeName(type.name)}(${$instanceOf(type.inherits[0].closedGenerics[1])} val2) => new ${$typeName(type.name)}(val2);

\t}
}
`;
