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

export default createRule({
  name: 'no-index-signatures',
  meta: {
    type: 'problem',
    docs: {
      description: 'An index signature such as `[key: string]: T` is not allowed. The compiler leaves it out of a class without an error. Dynamic keys are written with `Dictionary`, or with the `AdditionalProperties` and `AdditionalProperty` behaviors.'
    },
    messages: {
      indexSignature: "An index signature is not part of the specification model, and the compiler leaves it out of a class without an error. Use 'Dictionary<K, V>' for an object that has dynamic keys only. For dynamic keys next to fixed properties, use the 'AdditionalProperties<K, V>' behavior, or 'AdditionalProperty<K, V>' when the object accepts one dynamic key. See https://github.com/elastic/elasticsearch-specification/blob/main/docs/behaviors.md#additionalproperties--additionalproperty"
    },
    schema: []
  },
  defaultOptions: [],
  create
})

function create (context) {
  return {
    TSIndexSignature (node) {
      context.report({ node, messageId: 'indexSignature' })
    }
  }
}
