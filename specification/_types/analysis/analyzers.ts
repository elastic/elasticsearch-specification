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
import { Language, SnowballLanguage } from './languages'
import { StopWords } from './StopWords'
import { NoriDecompoundMode } from './tokenizers'
import { IcuAnalyzer } from './icu-plugin'
import { KuromojiAnalyzer } from './kuromoji-plugin'

export class CustomAnalyzer {
  type: 'custom'
  char_filter?: string | string[]
  filter?: string | string[]
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

export class ArabicAnalyzer {
  type: 'arabic'
  stopwords?: StopWords
  stopwords_path?: string
  stem_exclusion?: string[]
}

export class ArmenianAnalyzer {
  type: 'armenian'
  stopwords?: StopWords
  stopwords_path?: string
  stem_exclusion?: string[]
}

export class BasqueAnalyzer {
  type: 'basque'
  stopwords?: StopWords
  stopwords_path?: string
  stem_exclusion?: string[]
}

export class BengaliAnalyzer {
  type: 'bengali'
  stopwords?: StopWords
  stopwords_path?: string
  stem_exclusion?: string[]
}

export class BrazilianAnalyzer {
  type: 'brazilian'
  stopwords?: StopWords
  stopwords_path?: string
}

export class BulgarianAnalyzer {
  type: 'bulgarian'
  stopwords?: StopWords
  stopwords_path?: string
  stem_exclusion?: string[]
}

export class CatalanAnalyzer {
  type: 'catalan'
  stopwords?: StopWords
  stopwords_path?: string
  stem_exclusion?: string[]
}

export class ChineseAnalyzer {
  type: 'chinese'
  stopwords?: StopWords
  stopwords_path?: string
}

export class CjkAnalyzer {
  type: 'cjk'
  stopwords?: StopWords
  stopwords_path?: string
}

export class CzechAnalyzer {
  type: 'czech'
  stopwords?: StopWords
  stopwords_path?: string
  stem_exclusion?: string[]
}

export class DanishAnalyzer {
  type: 'danish'
  stopwords?: StopWords
  stopwords_path?: string
}

export class DutchAnalyzer {
  type: 'dutch'
  stopwords?: StopWords
  stopwords_path?: string
  stem_exclusion?: string[]
}

export class EnglishAnalyzer {
  type: 'english'
  stopwords?: StopWords
  stopwords_path?: string
  stem_exclusion?: string[]
}

export class EstonianAnalyzer {
  type: 'estonian'
  stopwords?: StopWords
  stopwords_path?: string
}

export class FinnishAnalyzer {
  type: 'finnish'
  stopwords?: StopWords
  stopwords_path?: string
  stem_exclusion?: string[]
}

export class FrenchAnalyzer {
  type: 'french'
  stopwords?: StopWords
  stopwords_path?: string
  stem_exclusion?: string[]
}

export class GalicianAnalyzer {
  type: 'galician'
  stopwords?: StopWords
  stopwords_path?: string
  stem_exclusion?: string[]
}

export class GermanAnalyzer {
  type: 'german'
  stopwords?: StopWords
  stopwords_path?: string
  stem_exclusion?: string[]
}

export class GreekAnalyzer {
  type: 'greek'
  stopwords?: StopWords
  stopwords_path?: string
}

export class HindiAnalyzer {
  type: 'hindi'
  stopwords?: StopWords
  stopwords_path?: string
  stem_exclusion?: string[]
}

export class HungarianAnalyzer {
  type: 'hungarian'
  stopwords?: StopWords
  stopwords_path?: string
  stem_exclusion?: string[]
}

export class IndonesianAnalyzer {
  type: 'indonesian'
  stopwords?: StopWords
  stopwords_path?: string
  stem_exclusion?: string[]
}

export class IrishAnalyzer {
  type: 'irish'
  stopwords?: StopWords
  stopwords_path?: string
  stem_exclusion?: string[]
}

export class ItalianAnalyzer {
  type: 'italian'
  stopwords?: StopWords
  stopwords_path?: string
  stem_exclusion?: string[]
}

export class LatvianAnalyzer {
  type: 'latvian'
  stopwords?: StopWords
  stopwords_path?: string
  stem_exclusion?: string[]
}

export class LithuanianAnalyzer {
  type: 'lithuanian'
  stopwords?: StopWords
  stopwords_path?: string
  stem_exclusion?: string[]
}

export class NorwegianAnalyzer {
  type: 'norwegian'
  stopwords?: StopWords
  stopwords_path?: string
  stem_exclusion?: string[]
}

export class PersianAnalyzer {
  type: 'persian'
  stopwords?: StopWords
  stopwords_path?: string
}

export class PortugueseAnalyzer {
  type: 'portuguese'
  stopwords?: StopWords
  stopwords_path?: string
  stem_exclusion?: string[]
}

export class RomanianAnalyzer {
  type: 'romanian'
  stopwords?: StopWords
  stopwords_path?: string
  stem_exclusion?: string[]
}

export class RussianAnalyzer {
  type: 'russian'
  stopwords?: StopWords
  stopwords_path?: string
  stem_exclusion?: string[]
}

export class SerbianAnalyzer {
  type: 'serbian'
  stopwords?: StopWords
  stopwords_path?: string
  stem_exclusion?: string[]
}

export class SoraniAnalyzer {
  type: 'sorani'
  stopwords?: StopWords
  stopwords_path?: string
  stem_exclusion?: string[]
}

export class SpanishAnalyzer {
  type: 'spanish'
  stopwords?: StopWords
  stopwords_path?: string
  stem_exclusion?: string[]
}

export class SwedishAnalyzer {
  type: 'swedish'
  stopwords?: StopWords
  stopwords_path?: string
  stem_exclusion?: string[]
}

export class TurkishAnalyzer {
  type: 'turkish'
  stopwords?: StopWords
  stopwords_path?: string
  stem_exclusion?: string[]
}

export class ThaiAnalyzer {
  type: 'thai'
  stopwords?: StopWords
  stopwords_path?: string
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
  | ArabicAnalyzer
  | ArmenianAnalyzer
  | BasqueAnalyzer
  | BengaliAnalyzer
  | BrazilianAnalyzer
  | BulgarianAnalyzer
  | CatalanAnalyzer
  | ChineseAnalyzer
  | CjkAnalyzer
  | CzechAnalyzer
  | DanishAnalyzer
  | DutchAnalyzer
  | EnglishAnalyzer
  | EstonianAnalyzer
  | FinnishAnalyzer
  | FrenchAnalyzer
  | GalicianAnalyzer
  | GermanAnalyzer
  | GreekAnalyzer
  | HindiAnalyzer
  | HungarianAnalyzer
  | IndonesianAnalyzer
  | IrishAnalyzer
  | ItalianAnalyzer
  | LatvianAnalyzer
  | LithuanianAnalyzer
  | NorwegianAnalyzer
  | PersianAnalyzer
  | PortugueseAnalyzer
  | RomanianAnalyzer
  | RussianAnalyzer
  | SerbianAnalyzer
  | SoraniAnalyzer
  | SpanishAnalyzer
  | SwedishAnalyzer
  | TurkishAnalyzer
  | ThaiAnalyzer
