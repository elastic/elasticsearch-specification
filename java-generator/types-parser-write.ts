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
import {
  $fieldName,
  $instanceOf,
  $isPrimitiveType,
  $parseFieldName,
  $propertyName,
  $typeName,
  numberTypes,
  stringTypes
} from "./naming";
import * as changeCase from "change-case";
import {specification} from "./specs";

const directWriteTypes = [
  "Object", "String",
  "Integer", "Boolean", "Double", "Long", "Float",
  "byte", "char", "short", "int", "long","float", "double", "boolean"
];

const $writePropertyWrapped = (prop: Domain.InterfaceProperty, parent: Domain.Interface) => {
  let setTest = "";
  if ($isPrimitiveType(prop.type)) {
    setTest = `if (${$fieldName(prop.name)}$isSet) {`;
  } else {
    setTest = `if (${$fieldName(prop.name)} != null) {`;
  }
  return [setTest]
    .concat($writeProperty(prop, parent).map(e => `  ${e}`))
    .concat([`}`]);
}

const $writeProperty = (prop: Domain.InterfaceProperty, parent: Domain.Interface) : string[] => {
  const typeSymbol = $instanceOf(prop.type, false);
  if (directWriteTypes.includes(typeSymbol))
    return [`builder.field(${$parseFieldName(prop.name)}.getPreferredName(), ${$fieldName(prop.name)});`];

  if (typeSymbol === "Date")
    return [
      `builder.field(${$parseFieldName(prop.name)}.getPreferredName(),`,
      `  DateTimeFormatter.ISO_DATE.format(${$fieldName(prop.name)}.toInstant()));`
    ];

  // if (prop.type instanceof Domain.UnionOf) {
  //   const lr = (type: Domain.InstanceOf) => {
  //     const s = $instanceOf(type, false);
  //     if (directWriteTypes.includes(s)) return "builder::value";
  //     if (s === "Date")
  //       return `r -> builder.value(DateTimeFormatter.ISO_DATE.format(r.toInstant()))`;
  //     if (type instanceof Domain.ArrayOf)
  //       return `builder::value /* TODO ${s} */`;
  //     return "r-> r.toXContent(builder, params)";
  //   };
  //   return [
  //     `builder.field(${$parseFieldName(prop.name)}.getPreferredName());`,
  //     `${$fieldName(prop.name)}.map(${lr(prop.type.items[0])}, ${lr(prop.type.items[1])});`,
  //   ];
  // }
  if (prop.type instanceof Domain.ArrayOf)
    return [
      `builder.array(${$parseFieldName(prop.name)}.getPreferredName(), ${$fieldName(prop.name)});`,
    ];

  if (stringTypes.includes(typeSymbol))
    return [
      `builder.field(${$parseFieldName(prop.name)}.getPreferredName());`,
      `${$fieldName(prop.name)}.toXContent(builder, params);`,
    ];

  if (["TDocument", "TPartialDocument", "TResult", "T", "TCatRecord"].includes(typeSymbol))
    return [`builder.field(${$parseFieldName(prop.name)}.getPreferredName(), ${$fieldName(prop.name)});`];

  return [
    `builder.field(${$parseFieldName(prop.name)}.getPreferredName());`,
    `${$fieldName(prop.name)}.toXContent(builder, params);`,
  ];
};

export const $writeProperties = (type: Domain.Interface) => type.properties.flatMap(p => $writePropertyWrapped(p, type)).join("\n    ");
