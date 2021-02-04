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

/* tslint:disable:no-console */
import Domain from "elasticsearch-client-specification/src/domain";
import fs from "fs";
import * as changeCase from "change-case";
import {stringTypes, objectTypes, numberTypes, reservedTypes, $typeName, $namespace} from "./naming";
import {$createValueObject} from "./types-value";
import {$createUnionType} from "./types-union";
import {$createClass} from "./types";
import {$createEnum} from "./enums";
import {specification} from "./specs";
import path from "path";
import rimraf from "rimraf";

if (specification.domain_errors.length + specification.endpoint_errors.length !== 0) {
  if (specification.endpoint_errors.length > 0) console.error("The specification contains the following endpoint mapping errors:");
  for (const e of specification.endpoint_errors) console.error("  - " + e);
// tslint:disable-next-line:max-line-length
} else console.log("The specification contains no errors in any of the " + specification.endpoints.length + " endpoints yielding " + specification.types.length + " types");

const $createType = (type: Domain.Interface) => {
  if (stringTypes.includes(type.name) || type.inherits.findIndex(t=>t.type.name === "String") > -1)
    return $createValueObject(type, "string");
  if (objectTypes.includes(type.name))
    return $createValueObject(type, "Object");
  if (type.implementsUnion()) return $createUnionType(type);
  return $createClass(type)
};

const $renderType = (type: Domain.TypeDeclaration) => {
  if (type instanceof Domain.Interface) return $createType(type);
  else if (type instanceof Domain.Enum) return $createEnum(type);
};

fs.renameSync('../output/csharp/Union.cs', '../output/Union.cs');
fs.renameSync('../output/csharp/Nest.csproj', '../output/Nest.csproj');
rimraf.sync('../output/csharp/**', {});
fs.mkdirSync("../output/csharp");
fs.renameSync('../output/Union.cs', '../output/csharp/Union.cs');
fs.renameSync('../output/Nest.csproj', '../output/csharp/Nest.csproj');

for (const type of specification.types) {
  if (reservedTypes.includes(type.name.toLowerCase())) continue;
  if (numberTypes.includes(type.name.toLowerCase())) continue;
  if (type.name === "Uri") continue;
  if (type.name === "Date") continue;
  if (type.name === "Dictionary") continue;
  if (type.namespace.startsWith("mapping.types.core."))
    type.namespace = "mapping.types.core";
  const ns = type.namespace;
  const folder = $namespace(ns, "/", Infinity);
  const exportFolder = `../output/csharp/${folder}`;
  if (!fs.existsSync(exportFolder)) fs.mkdirSync(exportFolder, { recursive: true });

  fs.writeFileSync(`${exportFolder}/${$typeName(type.name)}.cs`, $renderType(type));
}
