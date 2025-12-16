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

import { TokenFilterBase } from './token_filters'
import { TokenizerBase } from './tokenizers'

export enum NoriDecompoundMode {
  discard,
  none,
  mixed
}

export class NoriTokenizer extends TokenizerBase {
  type: 'nori_tokenizer'
  decompound_mode?: NoriDecompoundMode
  discard_punctuation?: boolean
  user_dictionary?: string
  user_dictionary_rules?: string[]
}

export class NoriPartOfSpeechTokenFilter extends TokenFilterBase {
  type: 'nori_part_of_speech'
  /** An array of part-of-speech tags that should be removed. */
  stoptags?: string[]
}
