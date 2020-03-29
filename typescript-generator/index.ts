/* tslint:disable:no-console */
import {Specification} from "../specification/src/api-specification";
import Domain, {ArrayOf, Dictionary, Type, UnionOf} from "elasticsearch-client-specification/src/domain";
import fs from "fs";

const specification = Specification.load();

if (specification.domain_errors.length + specification.endpoint_errors.length !== 0) {
  if (specification.endpoint_errors.length > 0) console.error("The specification contains the following endpoint mapping errors:");
  for (const e of specification.endpoint_errors) console.error("  - " + e);
// tslint:disable-next-line:max-line-length
} else console.log("The specification contains no errors in any of the " + specification.endpoints.length + " endpoints yielding " + specification.types.length + " types");

const $instanceOf = (instance: Domain.InstanceOf) => {
  // Type|ArrayOf|Dictionary|UnionOf;
  if (instance instanceof Type) return `${instance.name}`;
  else if (instance instanceof ArrayOf) return `${$instanceOf(instance.of)}[]`;
  else if (instance instanceof Dictionary) return `Record<${$instanceOf(instance.key)}, ${$instanceOf(instance.value)}>`;
  else if (instance instanceof UnionOf) return `${instance.items.map($instanceOf).join(" | ")}`;
};
const $propertyName = (prop: string) =>
  prop.includes(".") || prop.includes("-") || prop.match(/^(\d|\W)/)
    ? `"${prop}"`
    : prop;

const $property = (prop: Domain.InterfaceProperty) => `${$propertyName(prop.name)}: ${$instanceOf(prop.type)}`;
const $properties = (type: Domain.Interface) => type.properties.map($property).join("\n");
const $typeExtends = (type: Domain.Interface) => {
  return type.inherits.length === 0
    ? ``
    : `extends ${type.inherits.map($handleDictionaryResponse).join(", ")}`;
};
const $handleDictionaryResponse = (ref: Domain.ImplementsReference) => {
  if (ref.type === undefined) {
    console.log(ref);
    return "";
  }

  return ref.type.name !== "DictionaryResponseBase"
    ? ref.type.name
    : `ResponseBase, Record<${$instanceOf(ref.closedGenerics[0])}, any>`;
  // For now we don't know quite what to do with dictionary responses
  // : `ResponseBase, Record<${ref.closedGenerics.map($instanceOf)}>`;
}
const $typeGenerics = (type: Domain.Interface) => {
  return type.openGenerics.length === 0
    ? ``
    : `<${type.openGenerics.map(g => `${g}`).join(", ")}>`;
};
const $type = (type: Domain.Interface) => `
export interface ${type.name}${$typeGenerics(type)} ${$typeExtends(type)} {
  ${$properties(type)}
}
`;
const $createUnionType = (type: Domain.Interface) => `
export type ${type.name} = ${type.inherits[0].closedGenerics.map($instanceOf).join(" | ")};
`;
const stringTypes =
  ["Field", "Id", "Ids", "IndexName", "Indices", "Routing", "LongId", "IndexMetrics", "Metrics", "Name", "Names",
  "NodeIds", "PropertyName", "RelationName", "TaskId", "Timestamp",
  "Uri", "Date", "TimeSpan"
  ];
const numberTypes = ["short", "byte", "integer", "long", "float", "double"];
const objectTypes = ["SourceDocument"];
const $createType = (type: Domain.Interface) => {
  if (stringTypes.includes(type.name))
    return `export type ${type.name} = string;
`;
  if (numberTypes.includes(type.name))
    return `export type ${type.name} = number;
`;
  if (objectTypes.includes(type.name))
    return `export type ${type.name} = Record<string, any>;
`;
  if (type.implementsUnion()) return $createUnionType(type);
  return $type(type)
};

const $enumFlag = (e: Domain.EnumMember, flag: boolean, n: number) => !flag ? `"${e.name}"` : `1 << ${n+1}`;
const $enumValue = (e: Domain.EnumMember, flag: boolean, n: number) => `${$propertyName(e.name)} = ${$enumFlag(e, flag, n)}`;
const $enumValues = (e: Domain.Enum) => e.members.map((m,i)=> $enumValue(m, e.flags, i)).join(",\n    ");
const $enum = (e: Domain.Enum) => `
export enum ${e.name} {
  ${$enumValues(e)}
}
`;
const $renderType = (type: Domain.TypeDeclaration) => {
  if (type instanceof Domain.Interface) return $createType(type);
  else if (type instanceof Domain.Enum) return $enum(type);
};

fs.writeFileSync("../output/typescript/types.ts", specification.types.map($renderType).join(""));
