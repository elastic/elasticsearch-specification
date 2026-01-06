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
import chalk from 'chalk'

/**
 * Verifies if "read" version of interface definitions
 * contains the same properties of their "write" version.
 * Then, it copies every model.Property from write to read but 'required'.
 */
export default async function readDefinitionValidation (model: model.Model): Promise<model.Model> {
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
          // have we defined the same properties?
          if (!readProperties.includes(property.name)) {
            console.log(chalk.red`The property '${property.name}' is present in ${parent.name.namespace}.${parent.name.name} but not in ${type.name.namespace}.${type.name.name}`)
            process.exit(1)
          }

          const readProperty = type.properties.find(p => p.name === property.name) as model.Property

          if (property.type.kind === 'union_of' && property.type.items.some(contains(readProperty.type))) {
            // this is allowed, as if the original property type is an union (of type and type[]),
            // the overloaded property type should be either the same type or an element of the union
          } else if (isOverloadOf(readProperty.type, property.type)) {
            // this is allowed, as if the overloaded property has a different type,
            // this type should be an overload of the original property type
          } else if (!deepEqual(readProperty.type, property.type)) {
            console.log(chalk.red`The property '${property.name}' present in ${parent.name.namespace}.${parent.name.name} does not have the same type in ${type.name.namespace}.${type.name.name}`)
            process.exit(1)
          }

          // we have the same properties, so let's copy the metadata
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

  function isOverloadOf (readType: model.ValueOf, type: model.ValueOf): boolean {
    const readTypeInstance = unwrap(readType)
    const typeInstance = unwrap(type)
    if (readTypeInstance == null || typeInstance == null) return false
    if (readTypeInstance.type.namespace !== '_builtins') {
      const definition = model.types.find(t => t.name.namespace === readTypeInstance.type.namespace && t.name.name === readTypeInstance.type.name)
      return definition?.kind === 'interface' && (definition.behaviors?.some(overloaded) ?? false)
    }
    return false

    function overloaded (def: model.Inherits): boolean {
      if (def.type.name !== 'OverloadOf') return false
      assert(Array.isArray(def.generics))
      return def.generics[0].kind === 'instance_of' &&
             def.generics[0].type.namespace === typeInstance?.type.namespace &&
             def.generics[0].type.name === typeInstance?.type.name
    }

    function unwrap (type: model.ValueOf): model.InstanceOf | null {
      switch (type.kind) {
        case 'instance_of':
          return type
        case 'array_of':
          return unwrap(type.value)
        default:
          return null
      }
    }
  }

  function contains (readType: model.ValueOf) {
    return function (type: model.ValueOf, index: number, arr: model.ValueOf[]): boolean {
      if (type.kind === 'array_of') {
        return deepEqual(type.value, readType)
      }
      return deepEqual(type, readType)
    }
  }

  function deepEqual (a: any, b: any): boolean {
    try {
      assert.deepStrictEqual(a, b)
      return true
    } catch (err) {
      return false
    }
  }
}
