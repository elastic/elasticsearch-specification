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
import { IcuAnalyzer } from './icu-plugin'
import { KuromojiAnalyzer } from './kuromoji-plugin'
import { Language, SnowballLanguage } from './languages'
import { StopWords } from './StopWords'
import { NoriDecompoundMode } from './tokenizers'

export class CustomAnalyzer {
  type: 'custom'
  char_filter?: string[]
  filter?: string[]
  position_increment_gap?: integer
  position_offset_gap?: integer
  tokenizer: string
}

export class FingerprintAnalyzer {
  type: 'fingerprint'
  version?: VersionString
  max_output_size: integer
  preserve_original: boolean
  separator: string
  stopwords?: StopWords
  stopwords_path?: string
}

export class KeywordAnalyzer {
  type: 'keyword'
  version?: VersionString
}

export class LanguageAnalyzer {
  type: 'language'
  version?: VersionString
  language: Language
  stem_exclusion: string[]
  stopwords?: StopWords
  stopwords_path?: string
}

export class DutchAnalyzer {
  type: 'dutch'
  stopwords?: StopWords
}

export class NoriAnalyzer {
  type: 'nori'
  version?: VersionString
  decompound_mode?: NoriDecompoundMode
  stoptags?: string[]
  user_dictionary?: string
}

export class PatternAnalyzer {
  type: 'pattern'
  version?: VersionString
  flags?: string
  lowercase?: boolean
  pattern: string
  stopwords?: StopWords
}

export class SimpleAnalyzer {
  type: 'simple'
  version?: VersionString
}

export class SnowballAnalyzer {
  type: 'snowball'
  version?: VersionString
  language: SnowballLanguage
  stopwords?: StopWords
}

export class StandardAnalyzer {
  type: 'standard'
  max_token_length?: integer
  stopwords?: StopWords
}

export class StopAnalyzer {
  type: 'stop'
  version?: VersionString
  stopwords?: StopWords
  stopwords_path?: string
}

export class WhitespaceAnalyzer {
  type: 'whitespace'
  version?: VersionString
}

/**
 * @variants internal tag='type' default='custom'
 * @non_exhaustive
 */
export type Analyzer =
  | CustomAnalyzer
  | FingerprintAnalyzer
  | KeywordAnalyzer
  | LanguageAnalyzer
  | NoriAnalyzer
  | PatternAnalyzer
  | SimpleAnalyzer
  | StandardAnalyzer
  | StopAnalyzer
  | WhitespaceAnalyzer
  | IcuAnalyzer
  | KuromojiAnalyzer
  | SnowballAnalyzer
  | DutchAnalyzer
