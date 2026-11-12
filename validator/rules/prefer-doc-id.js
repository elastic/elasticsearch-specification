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
import { getJsDoc, tagValue } from '../utils/jsdoc.js'
import { createRule } from '../utils/rule.js'
import { CLASS_SELECTOR, PROPERTY_SELECTOR } from '../utils/spec.js'

export default createRule({
  name: 'prefer-doc-id',
  meta: {
    type: 'suggestion',
    docs: {
      description: 'A documentation link uses `@doc_id` with an entry in the table of documentation links. A URL in `@doc_url` is not checked by anything and breaks when the documentation moves.'
    },
    messages: {
      preferDocId: "Replace '@doc_url' with '@doc_id' and an entry in specification/_doc_ids/table.csv. See https://github.com/elastic/elasticsearch-specification/blob/main/docs/modeling-guide.md#doc_url"
    },
    schema: []
  },
  defaultOptions: [],
  create
})

function create (context) {
  return {
    [`${CLASS_SELECTOR}, ${PROPERTY_SELECTOR}, TSEnumDeclaration, TSTypeAliasDeclaration`] (node) {
      if (tagValue(getJsDoc(context.sourceCode, node), 'doc_url') != null) {
        context.report({ node, messageId: 'preferDocId' })
      }
    }
  }
}
