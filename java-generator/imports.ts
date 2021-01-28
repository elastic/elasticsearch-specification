/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

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
