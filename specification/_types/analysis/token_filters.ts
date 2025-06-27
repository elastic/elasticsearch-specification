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
import { Stringified } from '@spec_utils/Stringified'
import {
  IcuCollationTokenFilter,
  IcuFoldingTokenFilter,
  IcuNormalizationTokenFilter,
  IcuTransformTokenFilter
} from './icu-plugin'
import {
  JaStopTokenFilter,
  KuromojiPartOfSpeechTokenFilter,
  KuromojiReadingFormTokenFilter,
  KuromojiStemmerTokenFilter
} from './kuromoji-plugin'
import { SnowballLanguage } from './languages'
import { NoriPartOfSpeechTokenFilter } from './nori-plugin'
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
  /** If `true`, emit both original tokens and folded tokens. Defaults to `false`. */
  preserve_original?: Stringified<boolean>
}

export class CommonGramsTokenFilter extends TokenFilterBase {
  type: 'common_grams'
  /** A list of tokens. The filter generates bigrams for these tokens.
   * Either this or the `common_words_path` parameter is required. */
  common_words?: string[]
  /** Path to a file containing a list of tokens. The filter generates bigrams for these tokens.
   * This path must be absolute or relative to the `config` location. The file must be UTF-8 encoded. Each token in the file must be separated by a line break.
   * Either this or the `common_words` parameter is required. */
  common_words_path?: string
  /** If `true`, matches for common words matching are case-insensitive. Defaults to `false`. */
  ignore_case?: boolean
  /** If `true`, the filter excludes the following tokens from the output:
   * - Unigrams for common words
   * - Unigrams for terms followed by common words
   * Defaults to `false`. We recommend enabling this parameter for search analyzers. */
  query_mode?: boolean
}

export class ConditionTokenFilter extends TokenFilterBase {
  type: 'condition'
  /** Array of token filters. If a token matches the predicate script in the `script` parameter, these filters are applied to the token in the order provided. */
  filter: string[]
  /** Predicate script used to apply token filters. If a token matches this script, the filters in the `filter` parameter are applied to the token. */
  script: Script
}

export class ElisionTokenFilter extends TokenFilterBase {
  type: 'elision'
  /** List of elisions to remove.
   * To be removed, the elision must be at the beginning of a token and be immediately followed by an apostrophe. Both the elision and apostrophe are removed.
   * For custom `elision` filters, either this parameter or `articles_path` must be specified. */
  articles?: string[]
  /** Path to a file that contains a list of elisions to remove.
   * This path must be absolute or relative to the `config` location, and the file must be UTF-8 encoded. Each elision in the file must be separated by a line break.
   * To be removed, the elision must be at the beginning of a token and be immediately followed by an apostrophe. Both the elision and apostrophe are removed.
   * For custom `elision` filters, either this parameter or `articles` must be specified. */
  articles_path?: string
  /** If `true`, elision matching is case insensitive. If `false`, elision matching is case sensitive. Defaults to `false`. */
  articles_case?: Stringified<boolean>
}

export class FingerprintTokenFilter extends TokenFilterBase {
  type: 'fingerprint'
  /** Maximum character length, including whitespace, of the output token. Defaults to `255`. Concatenated tokens longer than this will result in no token output. */
  max_output_size?: integer
  /** Character to use to concatenate the token stream input. Defaults to a space. */
  separator?: string
}

export class HunspellTokenFilter extends TokenFilterBase {
  type: 'hunspell'
  /** If `true`, duplicate tokens are removed from the filter’s output. Defaults to `true`. */
  dedup?: boolean
  /** One or more `.dic` files (e.g, `en_US.dic`, my_custom.dic) to use for the Hunspell dictionary.
   * By default, the `hunspell` filter uses all `.dic` files in the `<$ES_PATH_CONF>/hunspell/<locale>` directory specified using the `lang`, `language`, or `locale` parameter. */
  dictionary?: string
  /** Locale directory used to specify the `.aff` and `.dic` files for a Hunspell dictionary.
   * @aliases lang, language */
  locale: string
  /** If `true`, only the longest stemmed version of each token is included in the output. If `false`, all stemmed versions of the token are included. Defaults to `false`. */
  longest_only?: boolean
}

export enum KeepTypesMode {
  include,
  exclude
}

export class KeepTypesTokenFilter extends TokenFilterBase {
  type: 'keep_types'
  /** Indicates whether to keep or remove the specified token types. */
  mode?: KeepTypesMode
  /** List of token types to keep or remove. */
  types: string[]
}

export class KeepWordsTokenFilter extends TokenFilterBase {
  type: 'keep'
  /** List of words to keep. Only tokens that match words in this list are included in the output.
   * Either this parameter or `keep_words_path` must be specified. */
  keep_words?: string[]
  /** If `true`, lowercase all keep words. Defaults to `false`. */
  keep_words_case?: boolean
  /** Path to a file that contains a list of words to keep. Only tokens that match words in this list are included in the output.
   * This path must be absolute or relative to the `config` location, and the file must be UTF-8 encoded. Each word in the file must be separated by a line break.
   * Either this parameter or `keep_words` must be specified. */
  keep_words_path?: string
}

export class KeywordMarkerTokenFilter extends TokenFilterBase {
  type: 'keyword_marker'
  /** If `true`, matching for the `keywords` and `keywords_path` parameters ignores letter case. Defaults to `false`. */
  ignore_case?: boolean
  /** Array of keywords. Tokens that match these keywords are not stemmed.
   * This parameter, `keywords_path`, or `keywords_pattern` must be specified. You cannot specify this parameter and `keywords_pattern`. */
  keywords?: string | string[]
  /** Path to a file that contains a list of keywords. Tokens that match these keywords are not stemmed.
   * This path must be absolute or relative to the `config` location, and the file must be UTF-8 encoded. Each word in the file must be separated by a line break.
   * This parameter, `keywords`, or `keywords_pattern` must be specified. You cannot specify this parameter and `keywords_pattern`. */
  keywords_path?: string
  /** Java regular expression used to match tokens. Tokens that match this expression are marked as keywords and not stemmed.
   * This parameter, `keywords`, or `keywords_path` must be specified. You cannot specify this parameter and `keywords` or `keywords_pattern`. */
  keywords_pattern?: string
}

export class KStemTokenFilter extends TokenFilterBase {
  type: 'kstem'
}

export class LengthTokenFilter extends TokenFilterBase {
  type: 'length'
  /** Maximum character length of a token. Longer tokens are excluded from the output. Defaults to `Integer.MAX_VALUE`, which is `2^31-1` or `2147483647`. */
  max?: integer
  /** Minimum character length of a token. Shorter tokens are excluded from the output. Defaults to `0`. */
  min?: integer
}

export class LimitTokenCountTokenFilter extends TokenFilterBase {
  type: 'limit'
  /** If `true`, the limit filter exhausts the token stream, even if the `max_token_count` has already been reached. Defaults to `false`. */
  consume_all_tokens?: boolean
  /** Maximum number of tokens to keep. Once this limit is reached, any remaining tokens are excluded from the output. Defaults to `1`. */
  max_token_count?: Stringified<integer>
}

export enum LowercaseTokenFilterLanguages {
  greek,
  irish,
  turkish
}

export class LowercaseTokenFilter extends TokenFilterBase {
  type: 'lowercase'
  /** Language-specific lowercase token filter to use. */
  language?: LowercaseTokenFilterLanguages
}

export class MultiplexerTokenFilter extends TokenFilterBase {
  type: 'multiplexer'
  /** A list of token filters to apply to incoming tokens. */
  filters: string[]
  /** If `true` (the default) then emit the original token in addition to the filtered tokens. */
  preserve_original?: Stringified<boolean>
}

export class NGramTokenFilter extends TokenFilterBase {
  type: 'ngram'
  /** Maximum length of characters in a gram. Defaults to `2`. */
  max_gram?: integer
  /** Minimum length of characters in a gram. Defaults to `1`. */
  min_gram?: integer
  /** Emits original token when set to `true`. Defaults to `false`. */
  preserve_original?: Stringified<boolean>
}

export class PatternCaptureTokenFilter extends TokenFilterBase {
  type: 'pattern_capture'
  /** A list of regular expressions to match. */
  patterns: string[]
  /** If set to `true` (the default) it will emit the original token. */
  preserve_original?: Stringified<boolean>
}

export class PatternReplaceTokenFilter extends TokenFilterBase {
  type: 'pattern_replace'
  /** If `true`, all substrings matching the pattern parameter’s regular expression are replaced. If `false`, the filter replaces only the first matching substring in each token. Defaults to `true`. */
  all?: boolean
  flags?: string
  /** Regular expression, written in Java’s regular expression syntax. The filter replaces token substrings matching this pattern with the substring in the `replacement` parameter. */
  pattern: string
  /** Replacement substring. Defaults to an empty substring (`""`). */
  replacement?: string
}

export class PorterStemTokenFilter extends TokenFilterBase {
  type: 'porter_stem'
}

export class PredicateTokenFilter extends TokenFilterBase {
  type: 'predicate_token_filter'
  /** Script containing a condition used to filter incoming tokens. Only tokens that match this script are included in the output. */
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
  /** Controls the language used by the stemmer. */
  language?: SnowballLanguage
}

export class StemmerOverrideTokenFilter extends TokenFilterBase {
  type: 'stemmer_override'
  /** A list of mapping rules to use. */
  rules?: string[]
  /** A path (either relative to `config` location, or absolute) to a list of mappings. */
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
  /** Character limit for each token. Tokens exceeding this limit are truncated. Defaults to `10`. */
  length?: integer
}

export class UniqueTokenFilter extends TokenFilterBase {
  type: 'unique'
  /** If `true`, only remove duplicate tokens in the same position. Defaults to `false`. */
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

export class BengaliNormalizationTokenFilter extends TokenFilterBase {
  type: 'bengali_normalization'
}

export class BrazilianStemTokenFilter extends TokenFilterBase {
  type: 'brazilian_stem'
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

export class ArabicStemTokenFilter extends TokenFilterBase {
  type: 'arabic_stem'
}

export class CzechStemTokenFilter extends TokenFilterBase {
  type: 'czech_stem'
}

export class FrenchStemTokenFilter extends TokenFilterBase {
  type: 'french_stem'
}

export class DutchStemTokenFilter extends TokenFilterBase {
  type: 'dutch_stem'
}

export class GermanStemTokenFilter extends TokenFilterBase {
  type: 'german_stem'
}

export class RussianStemTokenFilter extends TokenFilterBase {
  type: 'russian_stem'
}

export class PersianStemTokenFilter extends TokenFilterBase {
  type: 'persian_stem'
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
  | ArabicStemTokenFilter
  | ArabicNormalizationTokenFilter
  | AsciiFoldingTokenFilter
  | BengaliNormalizationTokenFilter
  | BrazilianStemTokenFilter
  | CjkBigramTokenFilter
  | CjkWidthTokenFilter
  | ClassicTokenFilter
  | CommonGramsTokenFilter
  | ConditionTokenFilter
  | CzechStemTokenFilter
  | DecimalDigitTokenFilter
  | DelimitedPayloadTokenFilter
  | DutchStemTokenFilter
  | EdgeNGramTokenFilter
  | ElisionTokenFilter
  | FingerprintTokenFilter
  | FlattenGraphTokenFilter
  | FrenchStemTokenFilter
  | GermanNormalizationTokenFilter
  | GermanStemTokenFilter
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
  | PersianStemTokenFilter
  | PorterStemTokenFilter
  | PredicateTokenFilter
  | RemoveDuplicatesTokenFilter
  | ReverseTokenFilter
  | RussianStemTokenFilter
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
  | JaStopTokenFilter
  | KuromojiStemmerTokenFilter
  | KuromojiReadingFormTokenFilter
  | KuromojiPartOfSpeechTokenFilter
  | IcuCollationTokenFilter
  | IcuFoldingTokenFilter
  | IcuNormalizationTokenFilter
  | IcuTransformTokenFilter
  | PhoneticTokenFilter
  | DictionaryDecompounderTokenFilter
