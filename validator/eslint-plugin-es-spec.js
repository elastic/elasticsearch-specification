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
import noSameNameAsEnclosingType from './rules/no-same-name-as-enclosing-type.js'
import invalidNodeTypes from './rules/invalid-node-types.js'
import noGenericNumber from './rules/no-generic-number.js'
import requestMustHaveUrls from './rules/request-must-have-urls.js'
import noVariantsOnResponses from './rules/no-variants-on-responses.js'
import noInlineUnions from './rules/no-inline-unions.js'
import preferTaggedVariants from './rules/prefer-tagged-variants.js'
import noDuplicateTypeNames from './rules/no-duplicate-type-names.js'
import noAllStringLiteralUnions from './rules/no-all-string-literal-unions.js'
import jsdocEndpointCheck from './rules/jsdoc-endpoint-check.js'
import codegenExcludeOnRequestOnly from './rules/codegen-exclude-on-request-only.js'
import noDeprecatedAvailabilityOnTypes from './rules/no-deprecated-availability-on-types.js'
import validRequestUrls from './rules/valid-request-urls.js'
import binaryRequiresAlias from './rules/binary-requires-alias.js'
import docIdExists from './rules/doc-id-exists.js'
import noContainerPropertyOutsideContainer from './rules/no-container-property-outside-container.js'
import noDuplicateJsdocTags from './rules/no-duplicate-jsdoc-tags.js'
import noDuplicateVariantNames from './rules/no-duplicate-variant-names.js'
import noObjectUrlParameters from './rules/no-object-url-parameters.js'
import noSimilarPropertyNames from './rules/no-similar-property-names.js'
import noStringifiedInRequests from './rules/no-stringified-in-requests.js'
import preferGenericArrayForUnions from './rules/prefer-generic-array-for-unions.js'
import preferInternalVariants from './rules/prefer-internal-variants.js'
import requestPathPartsMatchUrls from './rules/request-path-parts-match-urls.js'

export default {
  rules: {
    'single-key-dictionary-key-is-string': singleKeyDict,
    'dictionary-key-is-string': dict,
    'no-native-types': noNativeTypes,
    'no-same-name-as-enclosing-type': noSameNameAsEnclosingType,
    'invalid-node-types': invalidNodeTypes,
    'no-generic-number': noGenericNumber,
    'request-must-have-urls': requestMustHaveUrls,
    'no-variants-on-responses': noVariantsOnResponses,
    'no-inline-unions': noInlineUnions,
    'prefer-tagged-variants': preferTaggedVariants,
    'no-duplicate-type-names': noDuplicateTypeNames,
    'no-all-string-literal-unions': noAllStringLiteralUnions,
    'jsdoc-endpoint-check': jsdocEndpointCheck,
    'codegen-exclude-on-request-only': codegenExcludeOnRequestOnly,
    'no-deprecated-availability-on-types': noDeprecatedAvailabilityOnTypes,
    'valid-request-urls': validRequestUrls,
    'binary-requires-alias': binaryRequiresAlias,
    'doc-id-exists': docIdExists,
    'no-container-property-outside-container': noContainerPropertyOutsideContainer,
    'no-duplicate-jsdoc-tags': noDuplicateJsdocTags,
    'no-duplicate-variant-names': noDuplicateVariantNames,
    'no-object-url-parameters': noObjectUrlParameters,
    'no-similar-property-names': noSimilarPropertyNames,
    'no-stringified-in-requests': noStringifiedInRequests,
    'prefer-generic-array-for-unions': preferGenericArrayForUnions,
    'prefer-internal-variants': preferInternalVariants,
    'request-path-parts-match-urls': requestPathPartsMatchUrls
  }
}
