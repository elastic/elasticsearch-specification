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

import { VersionString } from '@_types/common'
import { integer } from '@_types/Numeric'
import { IcuTokenizer } from './icu-plugin'
import { KuromojiTokenizer } from './kuromoji-plugin'
import { TokenFilterDefinition } from '@_types/analysis/token_filters'
import { Stringified } from '@spec_utils/Stringified'

export class TokenizerBase {
  version?: VersionString
}

export class EdgeNGramTokenizer extends TokenizerBase {
  type: 'edge_ngram'
  custom_token_chars?: string
  max_gram: integer
  min_gram: integer
  token_chars: TokenChar[]
}

export class NGramTokenizer extends TokenizerBase {
  type: 'ngram'
  custom_token_chars?: string
  max_gram: integer
  min_gram: integer
  token_chars: TokenChar[]
}

export enum TokenChar {
  letter,
  digit,
  whitespace,
  punctuation,
  symbol,
  custom
}

export class CharGroupTokenizer extends TokenizerBase {
  type: 'char_group'
  tokenize_on_chars: string[]
  max_token_length?: integer
}

export class KeywordTokenizer extends TokenizerBase {
  type: 'keyword'
  buffer_size: integer
}

export class LetterTokenizer extends TokenizerBase {
  type: 'letter'
}

export class LowercaseTokenizer extends TokenizerBase {
  type: 'lowercase'
}

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

export class PathHierarchyTokenizer extends TokenizerBase {
  type: 'path_hierarchy'
  buffer_size?: Stringified<integer>
  delimiter?: string
  replacement?: string
  reverse?: Stringified<boolean>
  skip?: Stringified<integer>
}

export class PatternTokenizer extends TokenizerBase {
  type: 'pattern'
  flags?: string
  group?: integer
  pattern?: string
}

export class StandardTokenizer extends TokenizerBase {
  type: 'standard'
  max_token_length?: integer
}

export class UaxEmailUrlTokenizer extends TokenizerBase {
  type: 'uax_url_email'
  max_token_length?: integer
}

export class WhitespaceTokenizer extends TokenizerBase {
  type: 'whitespace'
  max_token_length?: integer
}

/** @codegen_names name, definition */
// ES: NameOrDefinition, used everywhere charfilter, tokenfilter or tokenizer is used
export type Tokenizer = string | TokenizerDefinition

/**
 * @variants internal tag='type'
 * @non_exhaustive
 */
export type TokenizerDefinition =
  | CharGroupTokenizer
  | EdgeNGramTokenizer
  | KeywordTokenizer
  | LetterTokenizer
  | LowercaseTokenizer
  | NGramTokenizer
  | NoriTokenizer
  | PathHierarchyTokenizer
  | StandardTokenizer
  | UaxEmailUrlTokenizer
  | WhitespaceTokenizer
  | KuromojiTokenizer
  | PatternTokenizer
  | IcuTokenizer
