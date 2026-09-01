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
import { SnowballLanguage } from './languages'
import { NoriDecompoundMode } from './nori-plugin'
import { StopWords } from './StopWords'

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
  /** @deprecated 7.14.0 */
  version?: VersionString
  /**
   * The maximum token size to emit. Tokens larger than this size will be discarded.
   * Defaults to `255`
   *
   * @server_default 255
   */
  max_output_size?: integer
  /**
   * The character to use to concatenate the terms.
   * Defaults to a space.
   */
  separator?: string
  /**
   * A pre-defined stop words list like `_english_` or an array containing a list of stop words.
   * Defaults to `_none_`.
   *
   * @server_default _none_
   */
  stopwords?: StopWords
  /**
   * The path to a file containing stop words.
   */
  stopwords_path?: string
}

export class KeywordAnalyzer {
  type: 'keyword'
  /** @deprecated 7.14.0 */
  version?: VersionString
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
  /** @deprecated 7.14.0 */
  version?: VersionString
  decompound_mode?: NoriDecompoundMode
  stoptags?: string[]
  user_dictionary?: string
}

export class PatternAnalyzer {
  type: 'pattern'
  /** @deprecated 7.14.0 */
  version?: VersionString
  /**
   * Java regular expression flags. Flags should be pipe-separated, eg "CASE_INSENSITIVE|COMMENTS".
   */
  flags?: string // TODO: Use PipeSeparatedFlags<T> and proper enum
  /**
   * Should terms be lowercased or not.
   * Defaults to `true`.
   *
   * @server_default true
   */
  lowercase?: boolean
  /**
   * A Java regular expression.
   * Defaults to `\W+`.
   *
   * @server_default \W+
   */
  pattern?: string
  /**
   * A pre-defined stop words list like `_english_` or an array containing a list of stop words.
   * Defaults to `_none_`.
   *
   * @server_default _none_
   */
  stopwords?: StopWords
  /**
   * The path to a file containing stop words.
   */
  stopwords_path?: string
}

export class SimpleAnalyzer {
  type: 'simple'
  /** @deprecated 7.14.0 */
  version?: VersionString
}

// TODO: This one seems undocumented!?
export class SnowballAnalyzer {
  type: 'snowball'
  /** @deprecated 7.14.0 */
  version?: VersionString
  language: SnowballLanguage
  stopwords?: StopWords
}

export class StandardAnalyzer {
  type: 'standard'
  /**
   * The maximum token length. If a token is seen that exceeds this length then it is split at `max_token_length` intervals.
   * Defaults to `255`.
   *
   * @server_default 255
   */
  max_token_length?: integer
  /**
   * A pre-defined stop words list like `_english_` or an array containing a list of stop words.
   * Defaults to `_none_`.
   *
   * @server_default _none_
   */
  stopwords?: StopWords
  /**
   * The path to a file containing stop words.
   */
  stopwords_path?: string
}

export class StopAnalyzer {
  type: 'stop'
  /** @deprecated 7.14.0 */
  version?: VersionString
  /**
   * A pre-defined stop words list like `_english_` or an array containing a list of stop words.
   * Defaults to `_none_`.
   *
   * @server_default _none_
   */
  stopwords?: StopWords
  /**
   * The path to a file containing stop words.
   */
  stopwords_path?: string
}

export class WhitespaceAnalyzer {
  type: 'whitespace'
  /** @deprecated 7.14.0 */
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
