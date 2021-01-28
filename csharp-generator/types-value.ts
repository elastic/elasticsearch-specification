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
import {$namespace, $typeName} from "./naming";

export const $createValueObject = (type: Domain.Interface, valueType: string) => {
  const t = $typeName(type.name)
  return `
using System;

namespace Nest.${$namespace(type.namespace)} {
public readonly struct ${t} : IComparable<${t}>, IEquatable<${t}> {
\t\tpublic ${t}(string value) => Value = value;

\t\tprivate string Value { get; }

\t\tpublic bool Equals(${t} other) => this.Value.Equals(other.Value);
\t\tpublic int CompareTo(${t} other) => string.Compare(Value, other.Value, StringComparison.Ordinal);

\t\tpublic override bool Equals(object obj)
\t\t{
\t\t\tif (ReferenceEquals(null, obj)) return false;
\t\t\treturn obj is ${t} other && Equals(other);
\t\t}

\t\tpublic override int GetHashCode() => Value.GetHashCode();
\t\tpublic override string ToString() => Value;
\t\tpublic static bool operator ==(${t} a, ${t} b) => a.CompareTo(b) == 0;
\t\tpublic static bool operator !=(${t} a, ${t} b) => !(a == b);
\t}
}
`};
