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

import { readFile, writeFile } from 'fs/promises'
import { join } from 'path'
import * as model from '../src/model/metamodel'

export interface ImportTypesGraph {
  type: model.TypeName
  imported_by: model.TypeName[]
  imports: model.TypeName[]
}

export interface ImportNamespaceGraph {
  namespace: string
  imported_by: string[]
  imports: string[]
}

async function createImportGraph (): Promise<void> {
  const model: model.Model = JSON.parse(await readFile(join(__dirname, '..', '..', 'output', 'schema', 'schema.json'), 'utf8'))
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
        }),
      imports: []
    })
  }

  for (const current of typeGraph) {
    for (const entry of typeGraph) {
      if (entry.imported_by.find(search)) {
        current.imports.push(entry.type)
      }
    }

    function search (element: model.TypeName): boolean {
      return element.name === current.type.name && element.namespace === current.type.namespace
    }
  }

  const namespaceMap: Map<string, string[]> = new Map()
  for (const [type, types] of importGraph.entries()) {
    const list = namespaceMap.get(type.namespace) ?? []
    namespaceMap.set(type.namespace, list.concat(types.map(t => t.namespace)))
  }

  const namespaceGraphExpanded: ImportNamespaceGraph[] = []
  for (const [namespace, namespaces] of namespaceMap.entries()) {
    namespaceGraphExpanded.push({
      namespace,
      imported_by: [...new Set(namespaces)].sort(),
      imports: []
    })
  }

  for (const current of namespaceGraphExpanded) {
    for (const entry of namespaceGraphExpanded) {
      if (entry.imported_by.includes(current.namespace)) {
        current.imports.push(entry.namespace)
      }
    }
  }

  namespaceGraphExpanded.sort((a, b) => {
    if (a.namespace < b.namespace) return -1
    if (a.namespace > b.namespace) return 1
    return 0
  })

  const namespaceMapCompact: Map<string, { imported_by: string[], imports: string[] }> = new Map()
  for (const entry of namespaceGraphExpanded) {
    const store = namespaceMapCompact.get(compact(entry.namespace)) ?? { imported_by: [], imports: [] }
    store.imports = [...new Set(store.imports.concat(entry.imports.map(compact)))]
    store.imported_by = [...new Set(store.imported_by.concat(entry.imported_by.map(compact)))]
    namespaceMapCompact.set(compact(entry.namespace), store)
  }

  const namespaceGraphCompact: ImportNamespaceGraph[] = []
  for (const [namespace, data] of namespaceMapCompact.entries()) {
    namespaceGraphCompact.push({
      namespace,
      imported_by: data.imported_by,
      imports: data.imports
    })
  }

  await writeFile(
    join(__dirname, '..', '..', 'output', 'schema', 'import-type-graph.json'),
    JSON.stringify(typeGraph, null, 2),
    'utf8'
  )

  await writeFile(
    join(__dirname, '..', '..', 'output', 'schema', 'import-namespace-graph-expanded.json'),
    JSON.stringify(namespaceGraphExpanded, null, 2),
    'utf8'
  )

  await writeFile(
    join(__dirname, '..', '..', 'output', 'schema', 'import-namespace-graph-compact.json'),
    JSON.stringify(namespaceGraphCompact, null, 2),
    'utf8'
  )

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

  function compact (namespace: string): string {
    if (namespace.startsWith('_global')) {
      return namespace.split('.')[1]
    }
    if (namespace.startsWith('_types')) {
      return '_types'
    }
    return namespace.split('.')[0]
  }
}

createImportGraph().catch(err => {
  console.error(err)
  process.exit(1)
})
