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
import singleKeyDict from './rules/single-key-dictionary-key-is-string.js'
import dict from './rules/dictionary-key-is-string.js'
import noNativeTypes from './rules/no-native-types.js'
import invalidNodeTypes from './rules/invalid-node-types.js'
import noGenericNumber from './rules/no-generic-number.js'
import requestMustHaveUrls from './rules/request-must-have-urls.js'
import noVariantsOnResponses from './rules/no-variants-on-responses.js'
import noInlineUnions from './rules/no-inline-unions.js'
import preferTaggedVariants from './rules/prefer-tagged-variants.js'
import noDuplicateTypeNames from './rules/no-duplicate-type-names.js'

export default {
  rules: {
    'single-key-dictionary-key-is-string': singleKeyDict,
    'dictionary-key-is-string': dict,
    'no-native-types': noNativeTypes,
    'invalid-node-types': invalidNodeTypes,
    'no-generic-number': noGenericNumber,
    'request-must-have-urls': requestMustHaveUrls,
    'no-variants-on-responses': noVariantsOnResponses,
    'no-inline-unions': noInlineUnions,
    'prefer-tagged-variants': preferTaggedVariants,
      'no-duplicate-type-names': noDuplicateTypeNames
  }
}
