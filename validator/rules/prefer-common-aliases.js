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
import { createRule } from '../utils/rule.js'
import { PROPERTY_SELECTOR, propertyName, propertyType } from '../utils/spec.js'

export default createRule({
  name: 'prefer-common-aliases',
  meta: {
    type: 'suggestion',
    docs: {
      description: 'A property with a well-known name, such as `index` or `node_id`, uses the alias of `specification/_types` for its value and not the primitive type behind the alias. The rule finds the properties by their name.'
    },
    messages: {
      preferAlias: "The property '{{name}}' has the type '{{type}}'. Use the alias '{{alias}}'. See https://github.com/elastic/elasticsearch-specification/blob/main/docs/modeling-guide.md#strings"
    },
    schema: []
  },
  defaultOptions: [],
  create
})

// Only names that have one meaning across the specification. `id`, `name` and `routing` are not
// here: the first two are too general, and the `Routing` alias is for URL parameters only.
const ALIASES = [
  { name: /^data_stream$/, type: 'string', alias: 'DataStreamName' },
  { name: /^field$/, type: 'string', alias: 'Field' },
  { name: /^fields$/, type: 'string[]', alias: 'Field[]' },
  { name: /^host$/, type: 'string', alias: 'Host' },
  { name: /^_id$/, type: 'string', alias: 'Id' },
  { name: /^(_index|index|index_name)$/, type: 'string', alias: 'IndexName' },
  { name: /^index_patterns$/, type: 'string[]', alias: 'IndexPatterns' },
  { name: /^indices$/, type: 'string[]', alias: 'IndexName[]' },
  { name: /^ip$/, type: 'string', alias: 'Ip' },
  { name: /^(_meta|metadata)$/, type: 'Dictionary<string, UserDefinedValue>', alias: 'Metadata' },
  { name: /^node_id$/, type: 'string', alias: 'NodeId' },
  { name: /^node_name$/, type: 'string', alias: 'NodeName' },
  { name: /^password$/, type: 'string', alias: 'Password' },
  { name: /^_?scroll_id$/, type: 'string', alias: 'ScrollId' },
  { name: /^_?seq_no$/, type: 'long', alias: 'SequenceNumber' },
  { name: /^task_id$/, type: 'string', alias: 'TaskId' },
  { name: /^time_?zone$/, type: 'string', alias: 'TimeZone' },
  { name: /^username$/, type: 'string', alias: 'Username' },
  { name: /(^|_)uuid$/, type: 'string', alias: 'Uuid' },
  { name: /^_version$/, type: 'long', alias: 'VersionNumber' }
]

function create (context) {
  return {
    [PROPERTY_SELECTOR] (node) {
      const typeNode = propertyType(node)
      if (typeNode == null) return

      const name = propertyName(node)
      const type = context.sourceCode.getText(typeNode).replace(/\s+/g, ' ')
      const match = ALIASES.find((entry) => entry.name.test(name) && entry.type === type)
      if (match != null) {
        context.report({ node, messageId: 'preferAlias', data: { name, type, alias: match.alias } })
      }
    }
  }
}
