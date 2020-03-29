"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_specification_1 = require("../specification/src/api-specification");
const domain_1 = __importStar(require("elasticsearch-client-specification/src/domain"));
const fs_1 = __importDefault(require("fs"));
const specification = api_specification_1.Specification.load();
if (specification.domain_errors.length + specification.endpoint_errors.length !== 0) {
    if (specification.endpoint_errors.length > 0)
        console.error("The specification contains the following endpoint mapping errors:");
    for (const e of specification.endpoint_errors)
        console.error("  - " + e);
}
else
    console.log("The specification contains no errors in any of the " + specification.endpoints.length + " endpoints yielding " + specification.types.length + " types");
const $instanceOf = (instance) => {
    if (instance instanceof domain_1.Type)
        return `${instance.name}`;
    else if (instance instanceof domain_1.ArrayOf)
        return `${$instanceOf(instance.of)}[]`;
    else if (instance instanceof domain_1.Dictionary)
        return `Record<${$instanceOf(instance.key)}, ${$instanceOf(instance.value)}>`;
    else if (instance instanceof domain_1.UnionOf)
        return `${instance.items.map($instanceOf).join(" | ")}`;
};
const $propertyName = (prop) => prop.includes(".") || prop.includes("-") || prop.match(/^(\d|\W)/)
    ? `"${prop}"`
    : prop;
const $property = (prop) => `${$propertyName(prop.name)}: ${$instanceOf(prop.type)}`;
const $properties = (type) => type.properties.map($property).join("\n");
const $typeExtends = (type) => {
    return type.inherits.length === 0
        ? ``
        : `extends ${type.inherits.map($handleDictionaryResponse).join(", ")}`;
};
const $handleDictionaryResponse = (ref) => {
    if (ref.type === undefined) {
        console.log(ref);
        return "";
    }
    return ref.type.name !== "DictionaryResponseBase"
        ? ref.type.name
        : `ResponseBase, Record<${$instanceOf(ref.closedGenerics[0])}, any>`;
};
const $typeGenerics = (type) => {
    return type.openGenerics.length === 0
        ? ``
        : `<${type.openGenerics.map(g => `${g}`).join(", ")}>`;
};
const $type = (type) => `
export interface ${type.name}${$typeGenerics(type)} ${$typeExtends(type)} {
  ${$properties(type)}
}
`;
const $createUnionType = (type) => `
export type ${type.name} = ${type.inherits[0].closedGenerics.map($instanceOf).join(" | ")};
`;
const stringTypes = ["Field", "Id", "Ids", "IndexName", "Indices", "Routing", "LongId", "IndexMetrics", "Metrics", "Name", "Names",
    "NodeIds", "PropertyName", "RelationName", "TaskId", "Timestamp",
    "Uri", "Date", "TimeSpan"
];
const numberTypes = ["short", "byte", "integer", "long", "float", "double"];
const objectTypes = ["SourceDocument"];
const $createType = (type) => {
    if (stringTypes.includes(type.name))
        return `export type ${type.name} = string;
`;
    if (numberTypes.includes(type.name))
        return `export type ${type.name} = number;
`;
    if (objectTypes.includes(type.name))
        return `export type ${type.name} = Record<string, any>;
`;
    if (type.implementsUnion())
        return $createUnionType(type);
    return $type(type);
};
const $enumFlag = (e, flag, n) => !flag ? `"${e.name}"` : `1 << ${n + 1}`;
const $enumValue = (e, flag, n) => `${$propertyName(e.name)} = ${$enumFlag(e, flag, n)}`;
const $enumValues = (e) => e.members.map((m, i) => $enumValue(m, e.flags, i)).join(",\n    ");
const $enum = (e) => `
export enum ${e.name} {
  ${$enumValues(e)}
}
`;
const $renderType = (type) => {
    if (type instanceof domain_1.default.Interface)
        return $createType(type);
    else if (type instanceof domain_1.default.Enum)
        return $enum(type);
};
fs_1.default.writeFileSync("../output/typescript/types.ts", specification.types.map($renderType).join(""));
//# sourceMappingURL=index.js.map