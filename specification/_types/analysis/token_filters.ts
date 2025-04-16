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

import { Stringified } from '@spec_utils/Stringified'
import { VersionString } from '@_types/common'
import { integer } from '@_types/Numeric'
import { Script } from '@_types/Scripting'
import {
  IcuCollationTokenFilter,
  IcuFoldingTokenFilter,
  IcuNormalizationTokenFilter,
  IcuTransformTokenFilter
} from './icu-plugin'
import {
  KuromojiPartOfSpeechTokenFilter,
  KuromojiReadingFormTokenFilter,
  KuromojiStemmerTokenFilter
} from './kuromoji-plugin'
import { SnowballLanguage } from './languages'
import { PhoneticTokenFilter } from './phonetic-plugin'
import { StopWords } from './StopWords'

export class TokenFilterBase {
  version?: VersionString
}

export class CompoundWordTokenFilterBase extends TokenFilterBase {
  hyphenation_patterns_path?: string
  max_subword_size?: integer
  min_subword_size?: integer
  min_word_size?: integer
  only_longest_match?: boolean
  word_list?: string[]
  word_list_path?: string
}

export class DictionaryDecompounderTokenFilter extends CompoundWordTokenFilterBase {
  type: 'dictionary_decompounder'
}

export class HyphenationDecompounderTokenFilter extends CompoundWordTokenFilterBase {
  type: 'hyphenation_decompounder'
}

export enum DelimitedPayloadEncoding {
  int,
  float,
  identity
}

export class DelimitedPayloadTokenFilter extends TokenFilterBase {
  type: 'delimited_payload'
  delimiter?: string
  encoding?: DelimitedPayloadEncoding
}

export enum EdgeNGramSide {
  front,
  back
}

export class EdgeNGramTokenFilter extends TokenFilterBase {
  type: 'edge_ngram'
  max_gram?: integer
  min_gram?: integer
  side?: EdgeNGramSide
  preserve_original?: Stringified<boolean>
}

export class ShingleTokenFilter extends TokenFilterBase {
  type: 'shingle'
  filler_token?: string
  max_shingle_size?: integer | string // TODO: should be only int
  min_shingle_size?: integer | string // TODO: should be only int
  output_unigrams?: boolean
  output_unigrams_if_no_shingles?: boolean
  token_separator?: string
}

export class StopTokenFilter extends TokenFilterBase {
  type: 'stop'
  ignore_case?: boolean
  remove_trailing?: boolean
  stopwords?: StopWords
  stopwords_path?: string
}

export enum SynonymFormat {
  solr,
  wordnet
}

export class SynonymGraphTokenFilter extends TokenFilterBase {
  type: 'synonym_graph'
  expand?: boolean
  format?: SynonymFormat
  lenient?: boolean
  synonyms?: string[]
  synonyms_path?: string
  synonyms_set?: string
  tokenizer?: string
  updateable?: boolean
}

export class SynonymTokenFilter extends TokenFilterBase {
  type: 'synonym'
  expand?: boolean
  format?: SynonymFormat
  lenient?: boolean
  synonyms?: string[]
  synonyms_path?: string
  synonyms_set?: string
  tokenizer?: string
  updateable?: boolean
}

export class WordDelimiterTokenFilter extends TokenFilterBase {
  type: 'word_delimiter'
  catenate_all?: boolean
  catenate_numbers?: boolean
  catenate_words?: boolean
  generate_number_parts?: boolean
  generate_word_parts?: boolean
  preserve_original?: Stringified<boolean>
  protected_words?: string[]
  protected_words_path?: string
  split_on_case_change?: boolean
  split_on_numerics?: boolean
  stem_english_possessive?: boolean
  type_table?: string[]
  type_table_path?: string
}

export class WordDelimiterGraphTokenFilter extends TokenFilterBase {
  type: 'word_delimiter_graph'
  adjust_offsets?: boolean
  catenate_all?: boolean
  catenate_numbers?: boolean
  catenate_words?: boolean
  generate_number_parts?: boolean
  generate_word_parts?: boolean
  ignore_keywords?: boolean
  preserve_original?: Stringified<boolean>
  protected_words?: string[]
  protected_words_path?: string
  split_on_case_change?: boolean
  split_on_numerics?: boolean
  stem_english_possessive?: boolean
  type_table?: string[]
  type_table_path?: string
}

export class AsciiFoldingTokenFilter extends TokenFilterBase {
  type: 'asciifolding'
  preserve_original?: Stringified<boolean>
}

export class CommonGramsTokenFilter extends TokenFilterBase {
  type: 'common_grams'
  common_words?: string[]
  common_words_path?: string
  ignore_case?: boolean
  query_mode?: boolean
}

export class ConditionTokenFilter extends TokenFilterBase {
  type: 'condition'
  filter: string[]
  script: Script
}

export class ElisionTokenFilter extends TokenFilterBase {
  type: 'elision'
  articles?: string[]
  articles_path?: string
  articles_case?: Stringified<boolean>
}

export class FingerprintTokenFilter extends TokenFilterBase {
  type: 'fingerprint'
  max_output_size?: integer
  separator?: string
}

export class HunspellTokenFilter extends TokenFilterBase {
  type: 'hunspell'
  dedup?: boolean
  dictionary?: string
  locale: string
  longest_only?: boolean
}

export class JaStopTokenFilter extends TokenFilterBase {
  type: 'ja_stop'
  stopwords?: StopWords
}

export enum KeepTypesMode {
  include,
  exclude
}

export class KeepTypesTokenFilter extends TokenFilterBase {
  type: 'keep_types'
  mode?: KeepTypesMode
  types?: string[]
}

export class KeepWordsTokenFilter extends TokenFilterBase {
  type: 'keep'
  keep_words?: string[]
  keep_words_case?: boolean
  keep_words_path?: string
}

export class KeywordMarkerTokenFilter extends TokenFilterBase {
  type: 'keyword_marker'
  ignore_case?: boolean
  keywords?: string | string[]
  keywords_path?: string
  keywords_pattern?: string
}

export class KStemTokenFilter extends TokenFilterBase {
  type: 'kstem'
}

export class LengthTokenFilter extends TokenFilterBase {
  type: 'length'
  max?: integer
  min?: integer
}

export class LimitTokenCountTokenFilter extends TokenFilterBase {
  type: 'limit'
  consume_all_tokens?: boolean
  max_token_count?: Stringified<integer>
}

export class LowercaseTokenFilter extends TokenFilterBase {
  type: 'lowercase'
  language?: string
}

export class MultiplexerTokenFilter extends TokenFilterBase {
  type: 'multiplexer'
  filters: string[]
  preserve_original?: Stringified<boolean>
}

export class NGramTokenFilter extends TokenFilterBase {
  type: 'ngram'
  max_gram?: integer
  min_gram?: integer
  preserve_original?: Stringified<boolean>
}

export class NoriPartOfSpeechTokenFilter extends TokenFilterBase {
  type: 'nori_part_of_speech'
  stoptags?: string[]
}

export class PatternCaptureTokenFilter extends TokenFilterBase {
  type: 'pattern_capture'
  patterns: string[]
  preserve_original?: Stringified<boolean>
}

export class PatternReplaceTokenFilter extends TokenFilterBase {
  type: 'pattern_replace'
  all?: boolean
  flags?: string
  pattern: string
  replacement?: string
}

export class PorterStemTokenFilter extends TokenFilterBase {
  type: 'porter_stem'
}

export class PredicateTokenFilter extends TokenFilterBase {
  type: 'predicate_token_filter'
  script: Script
}

export class RemoveDuplicatesTokenFilter extends TokenFilterBase {
  type: 'remove_duplicates'
}

export class ReverseTokenFilter extends TokenFilterBase {
  type: 'reverse'
}

export class SnowballTokenFilter extends TokenFilterBase {
  type: 'snowball'
  language?: SnowballLanguage
}

export class StemmerOverrideTokenFilter extends TokenFilterBase {
  type: 'stemmer_override'
  rules?: string[]
  rules_path?: string
}

export class StemmerTokenFilter extends TokenFilterBase {
  type: 'stemmer'
  /** @aliases name */
  language?: string
}

export class TrimTokenFilter extends TokenFilterBase {
  type: 'trim'
}

export class TruncateTokenFilter extends TokenFilterBase {
  type: 'truncate'
  length?: integer
}

export class UniqueTokenFilter extends TokenFilterBase {
  type: 'unique'
  only_on_same_position?: boolean
}

export class UppercaseTokenFilter extends TokenFilterBase {
  type: 'uppercase'
}

export class ApostropheTokenFilter extends TokenFilterBase {
  type: 'apostrophe'
}

export class ArabicNormalizationTokenFilter extends TokenFilterBase {
  type: 'arabic_normalization'
}

export enum CjkBigramIgnoredScript {
  han,
  hangul,
  hiragana,
  katakana
}

export class CjkBigramTokenFilter extends TokenFilterBase {
  type: 'cjk_bigram'
  /** Array of character scripts for which to disable bigrams. */
  ignored_scripts?: CjkBigramIgnoredScript[]
  /** If `true`, emit tokens in both bigram and unigram form. If `false`, a CJK character is output in unigram form when it has no adjacent characters. Defaults to `false`. */
  output_unigrams?: boolean
}

export class CjkWidthTokenFilter extends TokenFilterBase {
  type: 'cjk_width'
}

export class ClassicTokenFilter extends TokenFilterBase {
  type: 'classic'
}

export class DecimalDigitTokenFilter extends TokenFilterBase {
  type: 'decimal_digit'
}

export class FlattenGraphTokenFilter extends TokenFilterBase {
  type: 'flatten_graph'
}

export class GermanNormalizationTokenFilter extends TokenFilterBase {
  type: 'german_normalization'
}

export class HindiNormalizationTokenFilter extends TokenFilterBase {
  type: 'hindi_normalization'
}

export class IndicNormalizationTokenFilter extends TokenFilterBase {
  type: 'indic_normalization'
}

export class KeywordRepeatTokenFilter extends TokenFilterBase {
  type: 'keyword_repeat'
}

export class MinHashTokenFilter extends TokenFilterBase {
  type: 'min_hash'
  /** Number of buckets to which hashes are assigned. Defaults to `512`. */
  bucket_count?: integer
  /** Number of ways to hash each token in the stream. Defaults to `1`. */
  hash_count?: integer
  /** Number of hashes to keep from each bucket. Defaults to `1`.
    * Hashes are retained by ascending size, starting with the bucket’s smallest hash first. */
  hash_set_size?: integer
  /** If `true`, the filter fills empty buckets with the value of the first non-empty bucket to its circular right if the `hash_set_size` is `1`. If the `bucket_count` argument is greater than 1, this parameter defaults to `true`. Otherwise, this parameter defaults to `false`. */
  with_rotation?: boolean
}

export class PersianNormalizationTokenFilter extends TokenFilterBase {
  type: 'persian_normalization'
}

export class ScandinavianFoldingTokenFilter extends TokenFilterBase {
  type: 'scandinavian_folding'
}

export class ScandinavianNormalizationTokenFilter extends TokenFilterBase {
  type: 'scandinavian_normalization'
}

export class SerbianNormalizationTokenFilter extends TokenFilterBase {
  type: 'serbian_normalization'
}

export class SoraniNormalizationTokenFilter extends TokenFilterBase {
  type: 'sorani_normalization'
}

/**
 * @codegen_names name, definition
 * @ext_doc_id analysis-tokenfilters
 */
// ES: NameOrDefinition, used everywhere charfilter, tokenfilter or tokenizer is used
export type TokenFilter = string | TokenFilterDefinition

/**
 * @variants internal tag='type'
 * @non_exhaustive
 */
export type TokenFilterDefinition =
  | ApostropheTokenFilter
  | ArabicNormalizationTokenFilter
  | AsciiFoldingTokenFilter
  | CjkBigramTokenFilter
  | CjkWidthTokenFilter
  | ClassicTokenFilter
  | CommonGramsTokenFilter
  | ConditionTokenFilter
  | DecimalDigitTokenFilter
  | DelimitedPayloadTokenFilter
  | EdgeNGramTokenFilter
  | ElisionTokenFilter
  | FingerprintTokenFilter
  | FlattenGraphTokenFilter
  | GermanNormalizationTokenFilter
  | HindiNormalizationTokenFilter
  | HunspellTokenFilter
  | HyphenationDecompounderTokenFilter
  | IndicNormalizationTokenFilter
  | KeepTypesTokenFilter
  | KeepWordsTokenFilter
  | KeywordMarkerTokenFilter
  | KeywordRepeatTokenFilter
  | KStemTokenFilter
  | LengthTokenFilter
  | LimitTokenCountTokenFilter
  | LowercaseTokenFilter
  | MinHashTokenFilter
  | MultiplexerTokenFilter
  | NGramTokenFilter
  | NoriPartOfSpeechTokenFilter
  | PatternCaptureTokenFilter
  | PatternReplaceTokenFilter
  | PersianNormalizationTokenFilter
  | PorterStemTokenFilter
  | PredicateTokenFilter
  | RemoveDuplicatesTokenFilter
  | ReverseTokenFilter
  | ScandinavianFoldingTokenFilter
  | ScandinavianNormalizationTokenFilter
  | SerbianNormalizationTokenFilter
  | ShingleTokenFilter
  | SnowballTokenFilter
  | SoraniNormalizationTokenFilter
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
  | KuromojiStemmerTokenFilter
  | KuromojiReadingFormTokenFilter
  | KuromojiPartOfSpeechTokenFilter
  | IcuCollationTokenFilter
  | IcuFoldingTokenFilter
  | IcuNormalizationTokenFilter
  | IcuTransformTokenFilter
  | PhoneticTokenFilter
  | DictionaryDecompounderTokenFilter
