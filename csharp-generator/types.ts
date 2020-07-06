import Domain from "elasticsearch-client-specification/src/domain";
import {$fieldName, $instanceOf, $namespace, $parseFieldName, $propertyName, $typeName} from "./naming";
import * as changeCase from "change-case";
import {$imports} from "./imports";

// import {$parseProperties} from "./types-parser-read";
// import {$writeProperties} from "./types-parser-write";

const $typeExtends = (type: Domain.Interface) => {
  return type.inherits.length === 0
    ? ``
    : `: ${type.inherits.map($handleDictionaryResponse).join(", ")}`;
};

const $handleDictionaryResponse = (ref: Domain.ImplementsReference) => {
  if (ref.type === undefined) return "";

  return ref.type.name === "DictionaryResponseBase"
    ? `${$typeName(ref.type.name)}<${ref.closedGenerics.map($instanceOf).join(", ")}>`
    : $typeName(ref.type.name);
};

const $abstractClass = (type: Domain.Interface) => {
  return type.name === "DictionaryResponseBase"
    ? `abstract `
    : ``;
};

const $typeGenerics = (type: Domain.Interface) => {
  return type.openGenerics.length === 0
    ? ``
    : `<${type.openGenerics.map(g => `${g}`).join(", ")}>`;
};

const $property = (prop: Domain.InterfaceProperty, parent: Domain.Interface) => `
\t\t[DataMember(Name="${prop.name}")]
\t\tpublic ${$instanceOf(prop.type)} ${$propertyName(prop.generatorHints.alternateName || prop.name)} { get; set; }
`;
const $properties = (type: Domain.Interface) => type.properties.map(p => $property(p, type)).join("\n");

export const $createClass = (type: Domain.Interface) => `${[...$imports(type)].join("\n")}
namespace Nest.${$namespace(type.namespace)} {

\tpublic ${$abstractClass(type)}class ${$typeName(type.name)}${$typeGenerics(type)} ${$typeExtends(type)} {
\t\t${$properties(type)}
\t}
}
`;
