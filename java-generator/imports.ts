import Domain from "elasticsearch-client-specification/src/domain";
import {specification} from "./specs";

const $referencedTypes = (instance: Domain.InstanceOf) : Domain.TypeDeclaration[] => {
  // Type|ArrayOf|Dictionary|UnionOf;
  if (instance instanceof Domain.Type) {
    const type = specification.typeLookup[instance.name];
    const inherits =
      type instanceof Domain.Interface
        ? type.inherits.flatMap(t=> t.closedGenerics.flatMap($referencedTypes))
        : [];
    return [type]
      .concat(instance.closedGenerics.flatMap($referencedTypes))
      .concat(inherits);
  }
  else if (instance instanceof Domain.ArrayOf) return $referencedTypes(instance.of);
  else if (instance instanceof Domain.Dictionary) return [$referencedTypes(instance.key), $referencedTypes(instance.value)].flat();
  else if (instance instanceof Domain.UnionOf) return instance.items.flatMap($referencedTypes)
};

const $import = (ns: string) => `import org.elasticsearch.${ns}.*;`;

export const $imports = (type: Domain.Interface) => {
  const types = type
    .properties
    .flatMap(e => $referencedTypes(e.type))
    .concat(type.inherits.map(i=>i.type))
    .concat(type.inherits.flatMap(i=> i.closedGenerics.flatMap($referencedTypes)))
    .filter(e=>e && e.name !== "string")
    .map(e=> {
      if (e.namespace.startsWith("mapping.types.core."))
        return "mapping.types.core";
      return e.namespace;
    })
    .map($import);
  return new Set(types);
};
