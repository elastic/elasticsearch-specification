/* tslint:disable:no-console */
import Domain from "elasticsearch-client-specification/src/domain";
import fs from "fs";
import * as changeCase from "change-case";
import {stringTypes, objectTypes, numberTypes} from "./naming";
import {$createValueObject} from "./types-value";
import {$createUnionType} from "./types-union";
import {$createClass} from "./types";
import {$createEnum} from "./enums";
import {specification} from "./specs";

if (specification.domain_errors.length + specification.endpoint_errors.length !== 0) {
  if (specification.endpoint_errors.length > 0) console.error("The specification contains the following endpoint mapping errors:");
  for (const e of specification.endpoint_errors) console.error("  - " + e);
// tslint:disable-next-line:max-line-length
} else console.log("The specification contains no errors in any of the " + specification.endpoints.length + " endpoints yielding " + specification.types.length + " types");

const $createType = (type: Domain.Interface) => {
  if (stringTypes.includes(type.name))
    return $createValueObject(type, "String");
  if (objectTypes.includes(type.name))
    return $createValueObject(type, "Object");
  if (type.implementsUnion()) return $createUnionType(type);
  return $createClass(type)
};

const $renderType = (type: Domain.TypeDeclaration) => {
  if (type instanceof Domain.Interface) return $createType(type);
  else if (type instanceof Domain.Enum) return $createEnum(type);
};

for (const type of specification.types) {
  if (numberTypes.includes(type.name)) continue;
  if (type.name === "Date") continue;
  if (type.name === "Dictionary") continue;
  if (type.namespace.startsWith("mapping.types.core."))
    type.namespace = "mapping.types.core";
  const ns = type.namespace;
  const folder = ns.replace(/\./g, "/");
  const exportFolder = `../output/java/src/main/java/org/elasticsearch/${folder}`;
  if (!fs.existsSync(exportFolder)) fs.mkdirSync(exportFolder, { recursive: true });
  fs.writeFileSync(`${exportFolder}/${changeCase.pascalCase(type.name)}.java`, $renderType(type));
}

