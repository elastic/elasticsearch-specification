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
import path from 'node:path'
import { createRule } from '../utils/rule.js'
import { specNamespace } from '../utils/spec.js'

export default createRule({
  name: 'prefer-alias-imports',
  meta: {
    type: 'suggestion',
    docs: {
      description: 'An import of a shared folder (`_global`, `_internal`, `_spec_utils`, `_types`) from a different namespace uses the path alias of `tsconfig.json`, such as `@_types/common`, and not a relative path.'
    },
    fixable: 'code',
    messages: {
      preferAlias: "Import the shared folder with its path alias: '{{alias}}'."
    },
    schema: []
  },
  defaultOptions: [],
  create
})

// The shared folders and their aliases in `specification/tsconfig.json`.
const ALIASES = {
  _global: '@global',
  _internal: '@_internal',
  _spec_utils: '@spec_utils',
  _types: '@_types'
}

function create (context) {
  const namespace = specNamespace(context.filename)
  if (namespace == null) return {}

  const directory = path.dirname(context.filename)
  const specRoot = path.resolve(directory, ...namespace.map(() => '..'))

  return {
    ImportDeclaration (node) {
      const source = node.source.value
      if (!source.startsWith('.')) return

      const [folder, ...rest] = path.relative(specRoot, path.resolve(directory, source)).split(path.sep)
      if (folder === namespace[0] || ALIASES[folder] == null) return

      const alias = [ALIASES[folder], ...rest].join('/')
      context.report({
        node: node.source,
        messageId: 'preferAlias',
        data: { alias },
        fix: (fixer) => fixer.replaceText(node.source, `'${alias}'`)
      })
    }
  }
}
