"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$createClass = void 0;
const naming_1 = require("./naming");
const imports_1 = require("./imports");
const $typeExtends = (type) => {
    return type.inherits.length === 0
        ? ``
        : `: ${type.inherits.map($handleDictionaryResponse).join(", ")}`;
};
const $handleDictionaryResponse = (ref) => {
    if (ref.type === undefined)
        return "";
    return ref.type.name === "DictionaryResponseBase"
        ? `${naming_1.$typeName(ref.type.name)}<${ref.closedGenerics.map(naming_1.$instanceOf).join(", ")}>`
        : naming_1.$typeName(ref.type.name);
};
const $abstractClass = (type) => {
    return type.name === "DictionaryResponseBase"
        ? `abstract `
        : ``;
};
const $typeGenerics = (type) => {
    return type.openGenerics.length === 0
        ? ``
        : `<${type.openGenerics.map(g => `${g}`).join(", ")}>`;
};
const $property = (prop, parent) => `
\t\t[DataMember(Name="${prop.name}")]
\t\tpublic ${naming_1.$instanceOf(prop.type)} ${naming_1.$propertyName(prop.generatorHints.alternateName || prop.name)} { get; set; }
`;
const $properties = (type) => type.properties.map(p => $property(p, type)).join("\n");
exports.$createClass = (type) => `${[...imports_1.$imports(type)].join("\n")}
namespace Nest.${naming_1.$namespace(type.namespace)} {

\tpublic ${$abstractClass(type)}class ${naming_1.$typeName(type.name)}${$typeGenerics(type)} ${$typeExtends(type)} {
\t\t${$properties(type)}
\t}
}
`;
//# sourceMappingURL=types.js.map