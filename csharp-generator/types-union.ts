import Domain from "elasticsearch-client-specification/src/domain";
import {$instanceOf, $namespace, $typeName} from "./naming";
import {$imports} from "./imports";

export const $createUnionType = (type: Domain.Interface) => `${[...$imports(type)].join("\n")}
namespace Nest.${$namespace(type.namespace)} {

\tpublic class ${$typeName(type.name)} : Union<${type.inherits[0].closedGenerics.map($instanceOf).join(", ")}> {

\t\tpublic ${$typeName(type.name)}(${$instanceOf(type.inherits[0].closedGenerics[0])} val1) : base(val1) { }

\t\tpublic ${$typeName(type.name)}(${$instanceOf(type.inherits[0].closedGenerics[1])} val2) : base(val2) { }

\t\tpublic static implicit operator ${$typeName(type.name)}(${$instanceOf(type.inherits[0].closedGenerics[0])} val1) => new ${$typeName(type.name)}(val1);

\t\tpublic static implicit operator ${$typeName(type.name)}(${$instanceOf(type.inherits[0].closedGenerics[1])} val2) => new ${$typeName(type.name)}(val2);

\t}
}
`;
