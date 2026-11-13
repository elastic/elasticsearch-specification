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
import fs from 'node:fs'
import { getJsDoc } from '../utils/jsdoc.js'
import { createRule } from '../utils/rule.js'
import { PROPERTY_SELECTOR } from '../utils/spec.js'

export default createRule({
  name: 'doc-id-exists',
  meta: {
    type: 'problem',
    docs: {
      description: 'A `@doc_id` or `@ext_doc_id` on a property must be in the table of documentation links. The compiler checks the tags on types and requests, but drops an unknown identifier on a property without an error.'
    },
    messages: {
      unknownDocId: "The '@{{tag}}' value '{{id}}' is not in the table of documentation links (specification/_doc_ids/table.csv)."
    },
    schema: {
      type: 'array',
      minItems: 1,
      maxItems: 1,
      items: {
        type: 'object',
        properties: {
          table: {
            type: 'string',
            description: 'Path of the CSV file with the documentation links'
          }
        },
        required: ['table'],
        additionalProperties: false
      }
    }
  },
  defaultOptions: [{ table: '' }],
  create
})

const tables = new Map()

// ESLint creates the rule one time for each file. The cache keeps the table in memory between files,
// and the modification time keeps an editor session in step with an edit of the table.
function loadIds (table) {
  const { mtimeMs } = fs.statSync(table)
  const cached = tables.get(table)
  if (cached?.mtimeMs === mtimeMs) return cached.ids

  const ids = new Set(
    fs.readFileSync(table, 'utf8')
      .split('\n')
      .map((line) => line.split(',')[0].trim())
      .filter((id) => id !== '')
  )
  tables.set(table, { mtimeMs, ids })
  return ids
}

function create (context, [{ table }]) {
  const ids = loadIds(table)

  return {
    [PROPERTY_SELECTOR] (node) {
      for (const { tag, value } of getJsDoc(context.sourceCode, node).tags) {
        if ((tag === 'doc_id' || tag === 'ext_doc_id') && !ids.has(value)) {
          context.report({ node, messageId: 'unknownDocId', data: { tag, id: value } })
        }
      }
    }
  }
}
