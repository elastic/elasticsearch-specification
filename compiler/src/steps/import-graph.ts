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

import { writeFile } from 'fs/promises'
import { join } from 'path'
import assert from 'assert'
import * as model from '../model/metamodel'
import { JsonSpec } from '../model/json-spec'

interface ImportTypesGraph {
  type: model.TypeName
  imported_by: model.TypeName[]
}

interface ImportNamespaceGraph {
  namespace: string
  imported_by: string[]
}

export default async function createImportGraph (model: model.Model, jsonSpec: Map<string, JsonSpec>): Promise<model.Model> {
  const importGraph: Map<model.TypeName, model.TypeDefinition[]> = new Map()
  for (const current of model.types) {
    if (current.kind === 'request' || current.kind === 'response') continue
    for (const type of model.types) {
      if (current.name.name === type.name.name && current.name.namespace === type.name.namespace) continue
      switch (type.kind) {
        case 'type_alias':
          if (contains(type.type, current)) {
            const list = importGraph.get(current.name) ?? []
            importGraph.set(current.name, list.concat(type))
          }
          break
        case 'interface':
          for (const property of type.properties) {
            if (contains(property.type, current)) {
              const list = importGraph.get(current.name) ?? []
              importGraph.set(current.name, list.concat(type))
            }
          }
          break
        case 'request':
          for (const property of type.path) {
            if (contains(property.type, current)) {
              const list = importGraph.get(current.name) ?? []
              importGraph.set(current.name, list.concat(type))
            }
          }
          for (const property of type.query) {
            if (contains(property.type, current)) {
              const list = importGraph.get(current.name) ?? []
              importGraph.set(current.name, list.concat(type))
            }
          }
          if (type.body.kind === 'properties') {
            for (const property of type.body.properties) {
              if (contains(property.type, current)) {
                const list = importGraph.get(current.name) ?? []
                importGraph.set(current.name, list.concat(type))
              }
            }
          }
          break
        case 'response':
          if (type.body.kind === 'properties') {
            for (const property of type.body.properties) {
              if (contains(property.type, current)) {
                const list = importGraph.get(current.name) ?? []
                importGraph.set(current.name, list.concat(type))
              }
            }
          }
          break
        default:
      }
    }
  }

  const typeGraph: ImportTypesGraph[] = []
  for (const [type, types] of importGraph.entries()) {
    typeGraph.push({
      type,
      imported_by: types.map(type => type.name)
    })
  }

  const namespaceGraph: ImportNamespaceGraph[] = []
  for (const [type, types] of importGraph.entries()) {
    namespaceGraph.push({
      namespace: type.namespace,
      imported_by: [...new Set(types.map(type => type.name.namespace))]
    })
  }

  await writeFile(
    join(__dirname, '..', '..', '..', 'output', 'schema', 'import-type-graph.json'),
    JSON.stringify(typeGraph, null, 2),
    'utf8'
  )

  await writeFile(
    join(__dirname, '..', '..', '..', 'output', 'schema', 'import-namespace-graph.json'),
    JSON.stringify(namespaceGraph, null, 2),
    'utf8'
  )

  return model

  function contains (value: model.ValueOf, type: model.TypeDefinition): boolean {
    switch (value.kind) {
      case 'dictionary_of':
      case 'array_of':
        return contains(value.value, type)
      case 'union_of':
        for (const item of value.items) {
          if (contains(item, type)) return true
        }
        return false
      case 'instance_of':
        return value.type.name === type.name.name && value.type.namespace === type.name.namespace
      case 'literal_value':
        return false
      case 'user_defined_value':
        return false
    }
  }
}
