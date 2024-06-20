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
import { ImportTypesGraph, ImportNamespaceGraph } from './create-import-graph'
import * as model from '../src/model/metamodel'

const tick = '`'
async function createTypeReport (): Promise<void> {
  const model: model.Model = JSON.parse(await readFile(join(__dirname, '..', '..', 'output', 'schema', 'schema.json'), 'utf8'))
  const typesGraph: ImportTypesGraph[] = JSON.parse(await readFile(join(__dirname, '..', '..', 'output', 'schema', 'import-type-graph.json'), 'utf8'))
  const namespaceGraph: ImportNamespaceGraph[] = JSON.parse(await readFile(join(__dirname, '..', '..', 'output', 'schema', 'import-namespace-graph-compact.json'), 'utf8'))
  let markdown = ''

  markdown += '# Type Specification Report\n\n'

  markdown += '- [Compact namespace import graph](https://elastic.github.io/elasticsearch-specification/namespace-dependencies-compact.html)\n'
  markdown += '- [Expanded namespace import graph](https://elastic.github.io/elasticsearch-specification/namespace-dependencies-expanded.html)\n'
  markdown += '- [Most used namespaces](#most-used-namespaces)\n'
  markdown += '- [Most greedy namespaces](#most-greedy-namespaces)\n'
  markdown += '- [Top 50 used types](#top-50-used-types)\n'
  markdown += '- [Top 50 greedy types](#top-50-greedy-types)\n'

  markdown += '\n\n## Most used namespaces\n'
  markdown += '| Namespace | Occurencies |\n'
  markdown += '| --- | --- |\n'
  const mostUsedNamespaces = namespaceGraph.sort((a, b) => b.imported_by.length - a.imported_by.length)
  for (const namespace of mostUsedNamespaces) {
    markdown += `| ${tick}${namespace.namespace}${tick} | ${namespace.imported_by.length} |\n`
  }
  markdown += `\n[Back to top](#type-specification-report)\n`

  markdown += '\n\n## Most greedy namespaces\n'
  markdown += '| Namespace | Occurencies |\n'
  markdown += '| --- | --- |\n'
  const mostGreedyNamespaces = namespaceGraph.sort((a, b) => b.imports.length - a.imports.length)
  for (const namespace of mostGreedyNamespaces) {
    markdown += `| ${tick}${namespace.namespace}${tick} | ${namespace.imports.length} |\n`
  }
  markdown += `\n[Back to top](#type-specification-report)\n`

  markdown += '\n\n## Top 50 used types\n'
  markdown += '| Type | Occurencies | Location |\n'
  markdown += '| --- | --- | --- |\n'
  const mostUsedTypes = typesGraph.sort((a, b) => b.imported_by.length - a.imported_by.length)
  for (let i = 0; i < 50; i++) {
    const type = mostUsedTypes[i]
    markdown += `| ${tick}${type.type.namespace}.${type.type.name}${tick} | ${type.imported_by.length} | ${findLocaton(type)} |\n`
  }
  markdown += `\n[Back to top](#type-specification-report)\n`

  markdown += '\n\n## Top 50 greedy types\n'
  markdown += '| Type | Occurencies | Location |\n'
  markdown += '| --- | --- | --- |\n'
  const mostGreedyTypes = typesGraph.sort((a, b) => b.imports.length - a.imports.length)
  for (let i = 0; i < 50; i++) {
    const type = mostGreedyTypes[i]
    markdown += `| ${tick}${type.type.namespace}.${type.type.name}${tick} | ${type.imports.length} | ${findLocaton(type)} |\n`
  }
  markdown += `\n[Back to top](#type-specification-report)\n`

  await writeFile(
    join(__dirname, '..', '..', 'report', 'report.md'),
    markdown,
    'utf8'
  )

  function findLocaton (type: ImportTypesGraph): string {
    for (const current of model.types) {
      if (current.name.name === type.type.name && current.name.namespace === type.type.namespace) {
        return `[${tick}${current.specLocation.path}${tick}](https://github.com/elastic/elasticsearch-specification/blob/main/specification/${current.specLocation.path}#L${current.specLocation.startLine}-L${current.specLocation.endLine})`
      }
    }
    throw new Error(`Can't find type ${JSON.stringify(type.type)}`)
  }
}

createTypeReport().catch(err => {
  console.error(err)
  process.exit(1)
})
