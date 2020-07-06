import Domain from "elasticsearch-client-specification/src/domain";
import {specification} from "./specs";
import {$namespace} from "./naming";

const $referencedTypes = (instance: Domain.InstanceOf) : Domain.TypeDeclaration[] => {
  // Type|ArrayOf|Dictionary|UnionOf;
  if (instance instanceof Domain.Type) {
    const type = specification.typeLookup[instance.name];
    const inherits =
      type instanceof Domain.Interface
        ? type.inherits.flatMap(t=> t.closedGenerics.map($referencedTypes)).flat()
        : [];
    const properties =
      type instanceof Domain.Interface
        ? type.properties.map(t=> specification.typeLookup[t.name])
        : [];
    return [type]
      .concat(instance.closedGenerics.map($referencedTypes).flat())
      // .concat(properties)
      .concat(inherits);
  }
  else if (instance instanceof Domain.ArrayOf)
    return $referencedTypes(instance.of).flat();
  else if (instance instanceof Domain.Dictionary)
    return [$referencedTypes(instance.key), $referencedTypes(instance.value)].flat();
  else if (instance instanceof Domain.UnionOf)
    return instance.items.map($referencedTypes).flat();
};

const $import = (ns: string) => `using ${$namespace(ns, ".", ns.startsWith("nest.") ? 2 : Infinity)};`;

const defaultImports = [
  "System",
  "System.Collections.Generic",
  "System.Runtime.Serialization"
]

export const $imports = (type: Domain.Interface) => {
  const types = type.properties
    .flatMap(e => $referencedTypes(e.type))
    .concat(
      type.properties
        .filter(p=>p.type instanceof Domain.Type)
        .map(p=>p.type instanceof Domain.Type ? specification.typeLookup[p.type.name] : null)
        .filter(t=>!t)
    )
    .concat(type.inherits.map(i=>i.type))
    .concat(type.inherits.flatMap(i=> i.closedGenerics.flatMap($referencedTypes)))
    .filter(e=>e && e.name !== "string")
    .map(e=> {
      if (e.namespace.startsWith("mapping.types.core."))
        return "nest.mapping.types.core";
      return "nest." + e.namespace;
    })
    .concat(defaultImports)
    .map($import);
  return new Set(types);
};
