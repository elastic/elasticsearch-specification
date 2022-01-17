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

/* global $ argv, path, cd, nothrow */

'use strict'

require('zx/globals')
const { writeFile } = require('fs/promises')

const compilerPath = path.join(__dirname, '..')
const tsNode = path.join(compilerPath, 'node_modules', '.bin', 'ts-node')

const jekyllConfig = `
markdown: GFM
`

async function run () {
  await $`${tsNode} ${path.join(compilerPath, 'reporter', 'create-import-graph.ts')}`
  await $`node ${path.join(compilerPath, 'reporter', 'generate-import-graph.js')} --compact`
  await $`node ${path.join(compilerPath, 'reporter', 'generate-import-graph.js')} --expanded`
  await $`${tsNode} ${path.join(compilerPath, 'reporter', 'generate-type-report.ts')}`
  await writeFile(
    path.join(__dirname, '..', '..', 'report', '_config.yml'),
    jekyllConfig.trim(),
    'utf8'
  )
}

run().catch(err => {
  console.error(err)
  process.exit(1)
})
