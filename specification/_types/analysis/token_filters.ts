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
import { Script } from '@_types/Scripting'
import { SnowballLanguage } from './languages'
import { StopWords } from './StopWords'

export class TokenFilterBase {
  type: string
  version?: VersionString
}

export class CompoundWordTokenFilterBase extends TokenFilterBase {
  hyphenation_patterns_path: string
  max_subword_size: integer
  min_subword_size: integer
  min_word_size: integer
  only_longest_match: boolean
  word_list: string[]
  word_list_path: string
}

export class DictionaryDecompounderTokenFilter extends CompoundWordTokenFilterBase {}

export class HyphenationDecompounderTokenFilter extends CompoundWordTokenFilterBase {}

export enum DelimitedPayloadEncoding {
  int = 0,
  float = 1,
  identity = 2
}

export class DelimitedPayloadTokenFilter extends TokenFilterBase {
  delimiter: string
  encoding: DelimitedPayloadEncoding
}

export enum EdgeNGramSide {
  front = 0,
  back = 1
}

export class EdgeNGramTokenFilter extends TokenFilterBase {
  max_gram: integer
  min_gram: integer
  side: EdgeNGramSide
}

export class ShingleTokenFilter extends TokenFilterBase {
  filler_token: string
  max_shingle_size: integer
  min_shingle_size: integer
  output_unigrams: boolean
  output_unigrams_if_no_shingles: boolean
  token_separator: string
}

export class StopTokenFilter extends TokenFilterBase {
  ignore_case?: boolean
  remove_trailing?: boolean
  stopwords: StopWords
  stopwords_path?: string
}

export enum SynonymFormat {
  solr = 0,
  wordnet = 1
}

export class SynonymGraphTokenFilter extends TokenFilterBase {
  expand: boolean
  format: SynonymFormat
  lenient: boolean
  synonyms: string[]
  synonyms_path: string
  tokenizer: string
  updateable: boolean
}

export class SynonymTokenFilter extends TokenFilterBase {
  expand: boolean
  format: SynonymFormat
  lenient: boolean
  synonyms: string[]
  synonyms_path: string
  tokenizer: string
  updateable: boolean
}

export class WordDelimiterTokenFilter extends TokenFilterBase {
  catenate_all: boolean
  catenate_numbers: boolean
  catenate_words: boolean
  generate_number_parts: boolean
  generate_word_parts: boolean
  preserve_original: boolean
  protected_words: string[]
  protected_words_path: string
  split_on_case_change: boolean
  split_on_numerics: boolean
  stem_english_possessive: boolean
  type_table: string[]
  type_table_path: string
}

export class WordDelimiterGraphTokenFilter extends TokenFilterBase {
  adjust_offsets: boolean
  catenate_all: boolean
  catenate_numbers: boolean
  catenate_words: boolean
  generate_number_parts: boolean
  generate_word_parts: boolean
  preserve_original: boolean
  protected_words: string[]
  protected_words_path: string
  split_on_case_change: boolean
  split_on_numerics: boolean
  stem_english_possessive: boolean
  type_table: string[]
  type_table_path: string
}

export class AsciiFoldingTokenFilter extends TokenFilterBase {
  preserve_original: boolean
}

export class CommonGramsTokenFilter extends TokenFilterBase {
  common_words: string[]
  common_words_path: string
  ignore_case: boolean
  query_mode: boolean
}

export class ConditionTokenFilter extends TokenFilterBase {
  filter: string[]
  script: Script
}

export class ElisionTokenFilter extends TokenFilterBase {
  articles: string[]
  articles_case: boolean
}

export class FingerprintTokenFilter extends TokenFilterBase {
  max_output_size: integer
  separator: string
}

export class HunspellTokenFilter extends TokenFilterBase {
  dedup: boolean
  dictionary: string
  locale: string
  longest_only: boolean
}

export enum KeepTypesMode {
  include = 0,
  exclude = 1
}

export class KeepTypesTokenFilter extends TokenFilterBase {
  mode: KeepTypesMode
  types: string[]
}

export class KeepWordsTokenFilter extends TokenFilterBase {
  keep_words: string[]
  keep_words_case: boolean
  keep_words_path: string
}

export class KeywordMarkerTokenFilter extends TokenFilterBase {
  ignore_case: boolean
  keywords: string[]
  keywords_path: string
  keywords_pattern: string
}

export class KStemTokenFilter extends TokenFilterBase {}

export class LengthTokenFilter extends TokenFilterBase {
  max: integer
  min: integer
}

export class LimitTokenCountTokenFilter extends TokenFilterBase {
  consume_all_tokens: boolean
  max_token_count: integer
}

export class LowercaseTokenFilter extends TokenFilterBase {
  language: string
}

export class MultiplexerTokenFilter extends TokenFilterBase {
  filters: string[]
  preserve_original: boolean
}

export class NGramTokenFilter extends TokenFilterBase {
  max_gram: integer
  min_gram: integer
}

export class NoriPartOfSpeechTokenFilter extends TokenFilterBase {
  stoptags: string[]
}

export class PatternCaptureTokenFilter extends TokenFilterBase {
  patterns: string[]
  preserve_original: boolean
}

export class PatternReplaceTokenFilter extends TokenFilterBase {
  flags: string
  pattern: string
  replacement: string
}

export class PorterStemTokenFilter extends TokenFilterBase {}

export class PredicateTokenFilter extends TokenFilterBase {
  script: Script
}

export class RemoveDuplicatesTokenFilter extends TokenFilterBase {}

export class ReverseTokenFilter extends TokenFilterBase {}

export class SnowballTokenFilter extends TokenFilterBase {
  language: SnowballLanguage
}

export class StemmerOverrideTokenFilter extends TokenFilterBase {
  rules: string[]
  rules_path: string
}

export class StemmerTokenFilter extends TokenFilterBase {
  language: string
}

export class TrimTokenFilter extends TokenFilterBase {}

export class TruncateTokenFilter extends TokenFilterBase {
  length: integer
}

export class UniqueTokenFilter extends TokenFilterBase {
  only_on_same_position: boolean
}

export class UppercaseTokenFilter extends TokenFilterBase {}

export type TokenFilter =
  | AsciiFoldingTokenFilter
  | CommonGramsTokenFilter
  | ConditionTokenFilter
  | DelimitedPayloadTokenFilter
  //DictionaryDecompounderTokenFilter |
  | EdgeNGramTokenFilter
  | ElisionTokenFilter
  | FingerprintTokenFilter
  | HunspellTokenFilter
  | HyphenationDecompounderTokenFilter
  | KeepTypesTokenFilter
  | KeepWordsTokenFilter
  | KeywordMarkerTokenFilter
  | KStemTokenFilter
  | LengthTokenFilter
  | LimitTokenCountTokenFilter
  | LowercaseTokenFilter
  | MultiplexerTokenFilter
  | NGramTokenFilter
  | NoriPartOfSpeechTokenFilter
  | PatternCaptureTokenFilter
  | PatternReplaceTokenFilter
  | PorterStemTokenFilter
  | PredicateTokenFilter
  | RemoveDuplicatesTokenFilter
  | ReverseTokenFilter
  | ShingleTokenFilter
  | SnowballTokenFilter
  | StemmerOverrideTokenFilter
  | StemmerTokenFilter
  | StopTokenFilter
  | SynonymGraphTokenFilter
  | SynonymTokenFilter
  | TrimTokenFilter
  | TruncateTokenFilter
  | UniqueTokenFilter
  | UppercaseTokenFilter
  | WordDelimiterGraphTokenFilter
  | WordDelimiterTokenFilter
