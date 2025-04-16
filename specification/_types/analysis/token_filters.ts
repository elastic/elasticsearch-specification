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
  /** Maximum subword character length. Longer subword tokens are excluded from the output. Defaults to `15`. */
  max_subword_size?: integer
  /** Minimum subword character length. Shorter subword tokens are excluded from the output. Defaults to `2`. */
  min_subword_size?: integer
  /** Minimum word character length. Shorter word tokens are excluded from the output. Defaults to `5`. */
  min_word_size?: integer
  /** If `true`, only include the longest matching subword. Defaults to `false`. */
  only_longest_match?: boolean
  /** A list of subwords to look for in the token stream. If found, the subword is included in the token output.
    * Either this parameter or `word_list_path` must be specified.*/
  word_list?: string[]
  /** Path to a file that contains a list of subwords to find in the token stream. If found, the subword is included in the token output.
    * This path must be absolute or relative to the config location, and the file must be UTF-8 encoded. Each token in the file must be separated by a line break.
    * Either this parameter or `word_list` must be specified. */
  word_list_path?: string
}

export class DictionaryDecompounderTokenFilter extends CompoundWordTokenFilterBase {
  type: 'dictionary_decompounder'
}

export class HyphenationDecompounderTokenFilter extends CompoundWordTokenFilterBase {
  type: 'hyphenation_decompounder'
  /** Path to an Apache FOP (Formatting Objects Processor) XML hyphenation pattern file.
    * This path must be absolute or relative to the `config` location. Only FOP v1.2 compatible files are supported. */
  hyphenation_patterns_path: string
  /** If `true`, do not match sub tokens in tokens that are in the word list. Defaults to `false`. */
  no_sub_matches?: boolean
  /** If `true`, do not allow overlapping tokens. Defaults to `false`. */
  no_overlapping_matches?: boolean
}

export enum DelimitedPayloadEncoding {
  int,
  float,
  identity
}

export class DelimitedPayloadTokenFilter extends TokenFilterBase {
  type: 'delimited_payload'
  /** Character used to separate tokens from payloads. Defaults to `|`. */
  delimiter?: string
  /** Data type for the stored payload. */
  encoding?: DelimitedPayloadEncoding
}

export enum EdgeNGramSide {
  front,
  back
}

export class EdgeNGramTokenFilter extends TokenFilterBase {
  type: 'edge_ngram'
  /** Maximum character length of a gram. For custom token filters, defaults to `2`. For the built-in edge_ngram filter, defaults to `1`. */
  max_gram?: integer
  /** Minimum character length of a gram. Defaults to `1`. */
  min_gram?: integer
  /** Indicates whether to truncate tokens from the `front` or `back`. Defaults to `front`. */
  side?: EdgeNGramSide
  /** Emits original token when set to `true`. Defaults to `false`. */
  preserve_original?: Stringified<boolean>
}

export class ShingleTokenFilter extends TokenFilterBase {
  type: 'shingle'
  /** String used in shingles as a replacement for empty positions that do not contain a token. This filler token is only used in shingles, not original unigrams. Defaults to an underscore (`_`). */
  filler_token?: string
  /** Maximum number of tokens to concatenate when creating shingles. Defaults to `2`. */
  max_shingle_size?: Stringified<integer>
  /** Minimum number of tokens to concatenate when creating shingles. Defaults to `2`. */
  min_shingle_size?: Stringified<integer>
  /** If `true`, the output includes the original input tokens. If `false`, the output only includes shingles; the original input tokens are removed. Defaults to `true`. */
  output_unigrams?: boolean
  /** If `true`, the output includes the original input tokens only if no shingles are produced; if shingles are produced, the output only includes shingles. Defaults to `false`. */
  output_unigrams_if_no_shingles?: boolean
  /** Separator used to concatenate adjacent tokens to form a shingle. Defaults to a space (`" "`). */
  token_separator?: string
}

export class StopTokenFilter extends TokenFilterBase {
  type: 'stop'
  /** If `true`, stop word matching is case insensitive. For example, if `true`, a stop word of the matches and removes `The`, `THE`, or `the`. Defaults to `false`. */
  ignore_case?: boolean
  /** If `true`, the last token of a stream is removed if it’s a stop word. Defaults to `true`. */
  remove_trailing?: boolean
  /** Language value, such as `_arabic_` or `_thai_`. Defaults to `_english_`. */
  stopwords?: StopWords
  /** Path to a file that contains a list of stop words to remove.
    * This path must be absolute or relative to the `config` location, and the file must be UTF-8 encoded. Each stop word in the file must be separated by a line break. */
  stopwords_path?: string
}

export enum SynonymFormat {
  solr,
  wordnet
}

export class SynonymTokenFilterBase extends TokenFilterBase {
  /** Expands definitions for equivalent synonym rules. Defaults to `true`. */
  expand?: boolean
  /** Sets the synonym rules format. */
  format?: SynonymFormat
  /** If `true` ignores errors while parsing the synonym rules. It is important to note that only those synonym rules which cannot get parsed are ignored. Defaults to the value of the `updateable` setting. */
  lenient?: boolean
  /** Used to define inline synonyms. */
  synonyms?: string[]
  /** Used to provide a synonym file. This path must be absolute or relative to the `config` location. */
  synonyms_path?: string
  /** Provide a synonym set created via Synonyms Management APIs. */
  synonyms_set?: string
  /** Controls the tokenizers that will be used to tokenize the synonym, this parameter is for backwards compatibility for indices that created before 6.0.
   * @deprecated 6.0.0 */
  tokenizer?: string
  /** If `true` allows reloading search analyzers to pick up changes to synonym files. Only to be used for search analyzers. Defaults to `false`. */
  updateable?: boolean
}

export class SynonymGraphTokenFilter extends SynonymTokenFilterBase {
  type: 'synonym_graph'
}

export class SynonymTokenFilter extends SynonymTokenFilterBase {
  type: 'synonym'
}

export class WordDelimiterTokenFilterBase extends TokenFilterBase {
  /** If `true`, the filter produces catenated tokens for chains of alphanumeric characters separated by non-alphabetic delimiters. Defaults to `false`. */
  catenate_all?: boolean
  /** If `true`, the filter produces catenated tokens for chains of numeric characters separated by non-alphabetic delimiters. Defaults to `false`. */
  catenate_numbers?: boolean
  /** If `true`, the filter produces catenated tokens for chains of alphabetical characters separated by non-alphabetic delimiters. Defaults to `false`. */
  catenate_words?: boolean
  /** If `true`, the filter includes tokens consisting of only numeric characters in the output. If `false`, the filter excludes these tokens from the output. Defaults to `true`. */
  generate_number_parts?: boolean
  /** If `true`, the filter includes tokens consisting of only alphabetical characters in the output. If `false`, the filter excludes these tokens from the output. Defaults to `true`. */
  generate_word_parts?: boolean
  /** If `true`, the filter includes the original version of any split tokens in the output. This original version includes non-alphanumeric delimiters. Defaults to `false`. */
  preserve_original?: Stringified<boolean>
  /** Array of tokens the filter won’t split. */
  protected_words?: string[]
  /** Path to a file that contains a list of tokens the filter won’t split.
    * This path must be absolute or relative to the `config` location, and the file must be UTF-8 encoded. Each token in the file must be separated by a line break. */
  protected_words_path?: string
  /** If `true`, the filter splits tokens at letter case transitions. For example: camelCase -> [ camel, Case ]. Defaults to `true`. */
  split_on_case_change?: boolean
  /** If `true`, the filter splits tokens at letter-number transitions. For example: j2se -> [ j, 2, se ]. Defaults to `true`. */
  split_on_numerics?: boolean
  /** If `true`, the filter removes the English possessive (`'s`) from the end of each token. For example: O'Neil's -> [ O, Neil ]. Defaults to `true`. */
  stem_english_possessive?: boolean
  /** Array of custom type mappings for characters. This allows you to map non-alphanumeric characters as numeric or alphanumeric to avoid splitting on those characters. */
  type_table?: string[]
  /** Path to a file that contains custom type mappings for characters. This allows you to map non-alphanumeric characters as numeric or alphanumeric to avoid splitting on those characters. */
  type_table_path?: string
}

export class WordDelimiterTokenFilter extends WordDelimiterTokenFilterBase {
  type: 'word_delimiter'
}

export class WordDelimiterGraphTokenFilter extends WordDelimiterTokenFilterBase {
  type: 'word_delimiter_graph'
  /** If `true`, the filter adjusts the offsets of split or catenated tokens to better reflect their actual position in the token stream. Defaults to `true`. */
  adjust_offsets?: boolean
  /** If `true`, the filter skips tokens with a keyword attribute of true. Defaults to `false`. */
  ignore_keywords?: boolean
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
