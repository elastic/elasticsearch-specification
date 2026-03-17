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

import assert from 'assert'
import * as model from '../model/metamodel'
import { JsonSpec } from '../model/json-spec'

/**
 * Validates overloaded interface definitions against their parent type.
 * Properties not explicitly defined in the overloaded class are inherited as-is.
 */
export default async function readDefinitionValidation (model: model.Model, jsonSpec: Map<string, JsonSpec>): Promise<model.Model> {
  for (const type of model.types) {
    if (type.kind !== 'interface') continue
    const readBehavior = type.behaviors?.find(behavior => behavior.type.name === 'OverloadOf')
    if (readBehavior == null) continue
    assert(Array.isArray(readBehavior.generics))
    assert(readBehavior.generics[0].kind === 'instance_of')

    for (const parent of model.types) {
      if (parent.name.name === readBehavior.generics[0].type.name && parent.name.namespace === readBehavior.generics[0].type.namespace) {
        assert(parent.kind === 'interface')
        const readProperties = type.properties.map(p => p.name)
        for (const property of parent.properties) {
          if (!readProperties.includes(property.name)) {
            type.properties.push({ ...property })
            continue
          }

          const readProperty = type.properties.find(p => p.name === property.name) as model.Property

          for (const key in property) {
            if (key === 'required') continue
            if (readProperty[key] == null) {
              readProperty[key] = property[key]
            }
          }
        }
      }
    }
  }

  return model
}
