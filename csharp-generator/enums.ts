import Domain from "elasticsearch-client-specification/src/domain";
import {$typeName, $propertyName, $namespace} from "./naming";

const $enumFlag = (e: Domain.EnumMember, flag: boolean, n: number) => !flag ? `` : ` = 1 << ${n+1}`;
const $enumValue = (e: Domain.EnumMember, flag: boolean, n: number) => `
\t\t[DataMember(Name = "${e.stringRepresentation}")] ${$propertyName(e.name)}${$enumFlag(e, flag, n)}`;
const $enumValues = (e: Domain.Enum) => e.members.map((m,i)=> $enumValue(m, e.flags, i)).join(",");
export const $createEnum = (e: Domain.Enum) => `
using System.Runtime.Serialization;

namespace Nest.${$namespace(e.namespace)} {

\tpublic enum ${$typeName(e.name)} {
  ${$enumValues(e)}
\t}
}
`;
