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

import { TokenizerBase } from '@_types/analysis/tokenizers/TokenizerBase'
import { integer } from '@_types/Numeric'
import { KuromojiTokenizationMode } from './KuromojiTokenizationMode'

export class KuromojiTokenizer extends TokenizerBase {
  /** @prop_serializer NullableStringBooleanFormatter */
  discard_punctuation: boolean
  mode: KuromojiTokenizationMode
  /** @prop_serializer NullableStringIntFormatter */
  nbest_cost: integer
  nbest_examples: string
  user_dictionary: string
  user_dictionary_rules: string[]
}
