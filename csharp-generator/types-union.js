"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$createUnionType = void 0;
const naming_1 = require("./naming");
const imports_1 = require("./imports");
exports.$createUnionType = (type) => `${[...imports_1.$imports(type)].join("\n")}
namespace Nest.${naming_1.$namespace(type.namespace)} {

\tpublic class ${naming_1.$typeName(type.name)} : Union<${type.inherits[0].closedGenerics.map(naming_1.$instanceOf).join(", ")}> {

\t\tpublic ${naming_1.$typeName(type.name)}(${naming_1.$instanceOf(type.inherits[0].closedGenerics[0])} val1) : base(val1) { }

\t\tpublic ${naming_1.$typeName(type.name)}(${naming_1.$instanceOf(type.inherits[0].closedGenerics[1])} val2) : base(val2) { }

\t\tpublic static implicit operator ${naming_1.$typeName(type.name)}(${naming_1.$instanceOf(type.inherits[0].closedGenerics[0])} val1) => new ${naming_1.$typeName(type.name)}(val1);

\t\tpublic static implicit operator ${naming_1.$typeName(type.name)}(${naming_1.$instanceOf(type.inherits[0].closedGenerics[1])} val2) => new ${naming_1.$typeName(type.name)}(val2);

\t}
}
`;
//# sourceMappingURL=types-union.js.map