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
  const importGraph: Map<model.TypeName, model.TypeName[]> = new Map()
  for (const current of model.types) {
    if (current.kind === 'request' || current.kind === 'response') continue
    for (const type of model.types) {
      if (current.name.name === type.name.name && current.name.namespace === type.name.namespace) continue
      switch (type.kind) {
        case 'type_alias':
          if (contains(type.type, current)) {
            const list = importGraph.get(current.name) ?? []
            importGraph.set(current.name, list.concat(type.name))
          }
          break

        case 'interface':
          for (const property of type.properties) {
            if (contains(property.type, current)) {
              const list = importGraph.get(current.name) ?? []
              importGraph.set(current.name, list.concat(type.name))
            }
          }
          if (type.inherits?.type.name === current.name.name &&
              type.inherits?.type.namespace === current.name.namespace) {
            const list = importGraph.get(current.name) ?? []
            importGraph.set(current.name, list.concat(type.name))
          }
          break

        case 'request':
          for (const property of type.path) {
            if (contains(property.type, current)) {
              const list = importGraph.get(current.name) ?? []
              importGraph.set(current.name, list.concat(type.name))
            }
          }
          for (const property of type.query) {
            if (contains(property.type, current)) {
              const list = importGraph.get(current.name) ?? []
              importGraph.set(current.name, list.concat(type.name))
            }
          }
          if (type.body.kind === 'properties') {
            for (const property of type.body.properties) {
              if (contains(property.type, current)) {
                const list = importGraph.get(current.name) ?? []
                importGraph.set(current.name, list.concat(type.name))
              }
            }
          }
          if (type.inherits?.type.name === current.name.name &&
              type.inherits?.type.namespace === current.name.namespace) {
            const list = importGraph.get(current.name) ?? []
            importGraph.set(current.name, list.concat(type.name))
          }
          break

        case 'response':
          if (type.body.kind === 'properties') {
            for (const property of type.body.properties) {
              if (contains(property.type, current)) {
                const list = importGraph.get(current.name) ?? []
                importGraph.set(current.name, list.concat(type.name))
              }
            }
          }
          if (type.inherits?.type.name === current.name.name &&
              type.inherits?.type.namespace === current.name.namespace) {
            const list = importGraph.get(current.name) ?? []
            importGraph.set(current.name, list.concat(type.name))
          }
          break
      }
    }
  }

  const typeGraph: ImportTypesGraph[] = []
  for (const [type, types] of importGraph.entries()) {
    typeGraph.push({
      type,
      imported_by: types
        .filter((type, index, arr) => {
          return index === arr.findIndex(t => {
            return type.name === t.name && type.namespace === t.namespace
          })
        })
    })
  }

  const namespaceMap: Map<string, string[]> = new Map()
  for (const [type, types] of importGraph.entries()) {
    const list = namespaceMap.get(type.namespace) ?? []
    namespaceMap.set(type.namespace, list.concat(types.map(t => t.namespace)))
  }

  const namespaceGraph: ImportNamespaceGraph[] = []
  for (const [namespace, namespaces] of namespaceMap.entries()) {
    namespaceGraph.push({
      namespace,
      imported_by: [...new Set(namespaces)].sort()
    })
  }

  namespaceGraph.sort((a, b) => {
    if (a.namespace < b.namespace) return -1
    if (a.namespace > b.namespace) return 1
    return 0
  })

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
      case 'user_defined_value':
        return false
    }
  }
}
