"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$createEnum = void 0;
const naming_1 = require("./naming");
const $enumFlag = (e, flag, n) => !flag ? `` : ` = 1 << ${n + 1}`;
const $enumValue = (e, flag, n) => `
\t\t[DataMember(Name = "${e.stringRepresentation}")] ${naming_1.$propertyName(e.name)}${$enumFlag(e, flag, n)}`;
const $enumValues = (e) => e.members.map((m, i) => $enumValue(m, e.flags, i)).join(",");
exports.$createEnum = (e) => `
using System.Runtime.Serialization;

namespace Nest.${naming_1.$namespace(e.namespace)} {

\tpublic enum ${naming_1.$typeName(e.name)} {
  ${$enumValues(e)}
\t}
}
`;
//# sourceMappingURL=enums.js.map