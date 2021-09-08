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
import chalk from 'chalk'

/**
 * Verifies if "read" version of interface definitions
 * contains the same properties of their "write" version.
 * Then, it copies every model.Property from write to read but 'required'.
 */
export default async function readDefinitionValidation (model: model.Model, jsonSpec: Map<string, JsonSpec>): Promise<model.Model> {
  for (const type of model.types) {
    if (type.kind !== 'interface') continue
    const readBehavior = type.behaviors?.find(behavior => behavior.type.name === 'ReadOf')
    if (readBehavior == null) continue
    assert(Array.isArray(readBehavior.generics))
    assert(readBehavior.generics[0].kind === 'instance_of')

    for (const parent of model.types) {
      if (parent.name.name === readBehavior.generics[0].type.name && parent.name.namespace === readBehavior.generics[0].type.namespace) {
        assert(parent.kind === 'interface')
        const readProperties = type.properties.map(p => p.name)
        for (const property of parent.properties) {
          // have we defined the same properties?
          if (!readProperties.includes(property.name)) {
            console.log(chalk.red`The property '${property.name}' is present in ${parent.name.namespace}.${parent.name.name} but not in ${type.name.namespace}.${type.name.name}`)
            process.exit(1)
          }

          const readProperty = type.properties.find(p => p.name === property.name) as model.Property
          // in the future we might want to have a different type between read and write defintions
          // but let's address it when it will happen
          if (!deepEqual(readProperty.type, property.type)) {
            console.log(chalk.red`The property '${property.name}' present in ${parent.name.namespace}.${parent.name.name} does not have the same type in ${type.name.namespace}.${type.name.name}`)
            process.exit(1)
          }

          // we have the same properties, so let's copy the metadata
          for (const key in property) {
            if (key === 'required') continue
            if (!readProperties.includes(property.name)) {
              console.log(chalk.red`The property '${property.name}' is present in ${parent.name.namespace}.${parent.name.name} but not in ${type.name.namespace}.${type.name.name}`)
              process.exit(1)
            }
            readProperty[key] = property[key]
          }
        }
      }
    }
  }

  return model
}

function deepEqual (a: any, b: any): boolean {
  try {
    assert.deepStrictEqual(a, b)
    return true
  } catch (err) {
    return false
  }
}