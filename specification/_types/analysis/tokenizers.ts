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

export class TokenizerBase {
  type: string
  version?: VersionString
}

export class EdgeNGramTokenizer extends TokenizerBase {
  custom_token_chars: string
  max_gram: integer
  min_gram: integer
  token_chars: TokenChar[]
}

export class NGramTokenizer extends TokenizerBase {
  custom_token_chars: string
  max_gram: integer
  min_gram: integer
  token_chars: TokenChar[]
}

export enum TokenChar {
  letter = 0,
  digit = 1,
  whitespace = 2,
  punctuation = 3,
  symbol = 4,
  custom = 5
}

export class CharGroupTokenizer extends TokenizerBase {
  tokenize_on_chars: string[]
}

export class KeywordTokenizer extends TokenizerBase {
  buffer_size: integer
}

export class LetterTokenizer extends TokenizerBase {}

export class LowercaseTokenizer extends TokenizerBase {}

export enum NoriDecompoundMode {
  discard = 0,
  none = 1,
  mixed = 2
}

export class NoriTokenizer extends TokenizerBase {
  decompound_mode: NoriDecompoundMode
  discard_punctuation: boolean
  user_dictionary: string
  user_dictionary_rules: string[]
}

export class PathHierarchyTokenizer extends TokenizerBase {
  buffer_size: integer
  delimiter: string
  replacement: string
  reverse: boolean
  skip: integer
}

export class PatternTokenizer extends TokenizerBase {
  flags: string
  group: integer
  pattern: string
}

export class StandardTokenizer extends TokenizerBase {
  max_token_length: integer
}

export class UaxEmailUrlTokenizer extends TokenizerBase {
  max_token_length: integer
}

export class WhitespaceTokenizer extends TokenizerBase {
  max_token_length: integer
}

export type Tokenizer =
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
