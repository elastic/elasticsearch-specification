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

import * as changeCase from "change-case";
import Domain from "elasticsearch-client-specification/src/domain";
import {specification} from "./specs";

export const stringTypes =
  ["Field", "Id", "Ids", "IndexName", "Indices", "Routing", "LongId", "IndexMetrics", "Metrics", "Name", "Names",
    "NodeIds", "PropertyName", "RelationName", "TaskId", "Timestamp",
    "Uri", "Date", "TimeSpan"
  ];
export const numberTypes = ["short", "byte", "integer", "long", "float", "double"];
export const objectTypes = ["SourceDocument"];

export const reservedTypes = ["string", "integer", "double", "boolean", "object"];

export const $typeName = (name: string) => {
  switch (name) {
    case "String": return "string";
    case "long": return "long";
    case "integer": return "int";
    case "boolean": return "bool";
    case "Date": return "DateTimeOffset";
    case "Indices": return "IndicesNames";
    default:
      if (reservedTypes.includes(name)) return changeCase.noCase(name);
      if (numberTypes.includes(name)) return changeCase.noCase(name);
      if (!name.includes("<"))
        return changeCase.pascalCase(name, {stripRegexp:/[^A-Z0-9<>]/gi });

      return changeCase.pascalCase(name, {stripRegexp:/[^A-Z0-9<>]/gi });
  }
};

export const $propertyName = (prop: string) => {
  if (prop === "+") return "Add";
  if (prop === "-") return "Subtract";
  if (prop.match(/^\d/)) return `${changeCase.pascalCase("average" + prop)}`;
  return prop.includes(".") || prop.includes("-") || prop.match(/^(\d|\W)/)
    ? changeCase.pascalCase(prop)
    : changeCase.pascalCase(prop);
};

export const $fieldName = (prop: string) => {
  if (prop.match(/^\d/)) return `_${changeCase.camelCase("average" + prop)}`;
  return prop.includes(".") || prop.includes("-") || prop.match(/^(\d|\W)/)
    ? `_${changeCase.camelCase(prop)}`
    : `_${changeCase.camelCase(prop)}`;
};

export const $parseFieldName = (prop: string) => {
  if (prop.match(/^\d/)) return changeCase.constantCase("average" + prop);
  return changeCase.constantCase(prop);
};
export const $namespace = (ns: string, join: string = ".", max: number = 1) => ns.split(".").slice(0, max).map(e => $typeName(e)).join(join);

export const $instanceOf = (instance: Domain.InstanceOf) => {
  if (instance instanceof Domain.Type)  {
    const typeRef = specification.typeLookup[instance.name] || { generatorHints: { alternateName: undefined }};
    if (!typeRef.generatorHints)
      console.log(instance.name)
    if (instance.closedGenerics.length === 0)
      return $typeName(typeRef.generatorHints.alternateName || instance.name);

    const generics = instance.closedGenerics.map($instanceOf).flat(Infinity);
    return `${$typeName(typeRef.generatorHints.alternateName || instance.name)}<${generics.join(", ")}>`;
  }
  else if (instance instanceof Domain.ArrayOf) return `List<${$instanceOf(instance.of)}>`;
  else if (instance instanceof Domain.Dictionary) return `IDictionary<${$instanceOf(instance.key)}, ${$instanceOf(instance.value)}>`;
  else if (instance instanceof Domain.UnionOf) return `Union<${instance.items.map($instanceOf).join(", ")}>`;
};

