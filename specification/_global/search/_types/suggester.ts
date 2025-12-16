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

import {
  Field,
  Fuzziness,
  Id,
  IndexName,
  Routing,
  SuggestMode
} from '@_types/common'
import { GeoHashPrecision, GeoLocation } from '@_types/Geo'
import { double, float, integer, long } from '@_types/Numeric'
import { ScriptSource } from '@_types/Scripting'
import { AdditionalProperties } from '@spec_utils/behaviors'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

/**
 * @variants typed_keys_quirk
 */
export type Suggest<TDocument> =
  | CompletionSuggest<TDocument>
  | PhraseSuggest
  | TermSuggest

export class SuggestBase {
  length: integer
  offset: integer
  text: string
}

/**
 * @variant name=completion
 */
export class CompletionSuggest<TDocument> extends SuggestBase {
  options:
    | CompletionSuggestOption<TDocument>
    | CompletionSuggestOption<TDocument>[]
}

/**
 * @variant name=phrase
 */
export class PhraseSuggest extends SuggestBase {
  options: PhraseSuggestOption | PhraseSuggestOption[]
}

/**
 * @variant name=term
 */
export class TermSuggest extends SuggestBase {
  options: TermSuggestOption | TermSuggestOption[]
}

// In the ES code a nested Hit object is expanded inline. Not all Hit fields have been
// added below as many do not make sense in the context of a suggestion.
export class CompletionSuggestOption<TDocument> {
  collate_match?: boolean
  contexts?: Dictionary<string, Context[]>
  fields?: Dictionary<string, UserDefinedValue>
  _id?: string
  _index?: IndexName
  _routing?: Routing
  _score?: double
  _source?: TDocument
  text: string
  score?: double
}

export class PhraseSuggestOption {
  text: string
  score: double
  highlighted?: string
  collate_match?: boolean
}

export class TermSuggestOption {
  text: string
  score: double
  freq: long
  highlighted?: string
  collate_match?: boolean
}

/**
 * @behavior_meta AdditionalProperties fieldname=suggesters description="The named suggesters"
 */
export class Suggester implements AdditionalProperties<string, FieldSuggester> {
  /** Global suggest text, to avoid repetition when the same text is used in several suggesters */
  text?: string
}

/**
 * @variants container
 * @non_exhaustive
 */
export class FieldSuggester {
  /**
   * Provides auto-complete/search-as-you-type functionality.
   */
  completion?: CompletionSuggester
  /**
   * Provides access to word alternatives on a per token basis within a certain string distance.
   */
  phrase?: PhraseSuggester
  /**
   * Suggests terms based on edit distance.
   */
  term?: TermSuggester
  /**
   * Prefix used to search for suggestions.
   * @variant container_property
   */
  prefix?: string
  /**
   * A prefix expressed as a regular expression.
   * @variant container_property
   */
  regex?: string
  /**
   * The text to use as input for the suggester.
   * Needs to be set globally or per suggestion.
   * @variant container_property
   */
  text?: string
}

export class SuggesterBase {
  /**
   * The field to fetch the candidate suggestions from.
   * Needs to be set globally or per suggestion.
   */
  field: Field
  /**
   * The analyzer to analyze the suggest text with.
   * Defaults to the search analyzer of the suggest field.
   */
  analyzer?: string
  /**
   * The maximum corrections to be returned per suggest text token.
   */
  size?: integer
}

// completion suggester

export class CompletionSuggester extends SuggesterBase {
  /**
   * A value, geo point object, or a geo hash string to filter or boost the suggestion on.
   */
  contexts?: Dictionary<Field, CompletionContext | CompletionContext[]>
  /**
   * Enables fuzziness, meaning you can have a typo in your search and still get results back.
   */
  fuzzy?: SuggestFuzziness
  /**
   * A regex query that expresses a prefix as a regular expression.
   */
  regex?: RegexOptions
  /**
   * Whether duplicate suggestions should be filtered out.
   * @server_default false
   */
  skip_duplicates?: boolean
}

export class RegexOptions {
  /**
   * Optional operators for the regular expression.
   * @doc_id regexp-syntax
   */
  // eslint-disable-next-line es-spec-validator/no-inline-unions -- TODO: create named alias
  flags?: integer | string
  /**
   * Maximum number of automaton states required for the query.
   * @server_default 10000
   */
  max_determinized_states?: integer
}

export class SuggestFuzziness {
  /**
   * The fuzziness factor.
   * @doc_id fuzziness
   * @server_default AUTO
   */
  fuzziness?: Fuzziness
  /**
   * Minimum length of the input before fuzzy suggestions are returned.
   * @server_default 3
   */
  min_length?: integer
  /**
   * Minimum length of the input, which is not checked for fuzzy alternatives.
   * @server_default 1
   */
  prefix_length?: integer
  /**
   * If set to `true`, transpositions are counted as one change instead of two.
   * @server_default true
   */
  transpositions?: boolean
  /**
   * If `true`, all measurements (like fuzzy edit distance, transpositions, and lengths) are measured in Unicode code points instead of in bytes.
   * This is slightly slower than raw bytes.
   * @server_default false
   */
  unicode_aware?: boolean
}

// context suggester

/**
 * Text or location that we want similar documents for or a lookup to a document's field for the text.
 * @doc_id document-input-parameters
 * @codegen_names category, location
 */
export type Context = string | GeoLocation

/** @shortcut_property context */
export class CompletionContext {
  /**
   * The factor by which the score of the suggestion should be boosted.
   * The score is computed by multiplying the boost with the suggestion weight.
   * @server_default 1
   */
  boost?: double
  /**
   * The value of the category to filter/boost on.
   */
  context: Context
  /**
   * An array of precision values at which neighboring geohashes should be taken into account.
   * Precision value can be a distance value (`5m`, `10km`, etc.) or a raw geohash precision (`1`..`12`).
   * Defaults to generating neighbors for index time precision level.
   */
  neighbours?: GeoHashPrecision[]
  /**
   * The precision of the geohash to encode the query geo point.
   * Can be specified as a distance value (`5m`, `10km`, etc.), or as a raw geohash precision (`1`..`12`).
   * Defaults to index time precision level.
   */
  precision?: GeoHashPrecision
  /**
   * Whether the category value should be treated as a prefix or not.
   * @server_default false
   */
  prefix?: boolean
}

// phrase suggester

export class DirectGenerator {
  /**
   * The field to fetch the candidate suggestions from.
   * Needs to be set globally or per suggestion.
   */
  field: Field
  /**
   * The maximum edit distance candidate suggestions can have in order to be considered as a suggestion.
   * Can only be `1` or `2`.
   * @server_default 2
   */
  max_edits?: integer
  /**
   * A factor that is used to multiply with the shard_size in order to inspect more candidate spelling corrections on the shard level.
   * Can improve accuracy at the cost of performance.
   * @server_default 5
   */
  max_inspections?: float
  /**
   * The maximum threshold in number of documents in which a suggest text token can exist in order to be included.
   * This can be used to exclude high frequency terms — which are usually spelled correctly — from being spellchecked.
   * Can be a relative percentage number (for example `0.4`) or an absolute number to represent document frequencies.
   * If a value higher than 1 is specified, then fractional can not be specified.
   * @server_default 0.01
   */
  max_term_freq?: float
  /**
   * The minimal threshold in number of documents a suggestion should appear in.
   * This can improve quality by only suggesting high frequency terms.
   * Can be specified as an absolute number or as a relative percentage of number of documents.
   * If a value higher than 1 is specified, the number cannot be fractional.
   * @server_default 0
   */
  min_doc_freq?: float
  /**
   * The minimum length a suggest text term must have in order to be included.
   * @server_default 4
   */
  min_word_length?: integer
  /**
   * A filter (analyzer) that is applied to each of the generated tokens before they are passed to the actual phrase scorer.
   */
  post_filter?: string
  /**
   * A filter (analyzer) that is applied to each of the tokens passed to this candidate generator.
   * This filter is applied to the original token before candidates are generated.
   */
  pre_filter?: string
  /**
   * The number of minimal prefix characters that must match in order be a candidate suggestions.
   * Increasing this number improves spellcheck performance.
   * @server_default 1
   */
  prefix_length?: integer
  /**
   * The maximum corrections to be returned per suggest text token.
   */
  size?: integer
  /**
   * Controls what suggestions are included on the suggestions generated on each shard.
   * @server_default missing
   */
  suggest_mode?: SuggestMode
}

export class PhraseSuggestCollate {
  /**
   * Parameters to use if the query is templated.
   */
  params?: Dictionary<string, UserDefinedValue>
  /**
   * Returns all suggestions with an extra `collate_match` option indicating whether the generated phrase matched any document.
   */
  prune?: boolean
  /**
   * A collate query that is run once for every suggestion.
   */
  query: PhraseSuggestCollateQuery
}

export class PhraseSuggestCollateQuery {
  /**
   * The search template ID.
   */
  id?: Id
  /**
   * The query source.
   */
  source?: ScriptSource
}

export class PhraseSuggester extends SuggesterBase {
  /**
   * Checks each suggestion against the specified query to prune suggestions for which no matching docs exist in the index.
   */
  collate?: PhraseSuggestCollate
  /**
   * Defines a factor applied to the input phrases score, which is used as a threshold for other suggest candidates.
   * Only candidates that score higher than the threshold will be included in the result.
   * @server_default 1.0
   */
  confidence?: double
  /**
   * A list of candidate generators that produce a list of possible terms per term in the given text.
   */
  direct_generator?: DirectGenerator[]
  force_unigrams?: boolean
  /**
   * Sets max size of the n-grams (shingles) in the field.
   * If the field doesn’t contain n-grams (shingles), this should be omitted or set to `1`.
   * If the field uses a shingle filter, the `gram_size` is set to the `max_shingle_size` if not explicitly set.
   */
  gram_size?: integer
  /**
   * Sets up suggestion highlighting.
   * If not provided, no highlighted field is returned.
   */
  highlight?: PhraseSuggestHighlight
  /**
   * The maximum percentage of the terms considered to be misspellings in order to form a correction.
   * This method accepts a float value in the range `[0..1)` as a fraction of the actual query terms or a number `>=1` as an absolute number of query terms.
   * @server_default 1.0
   */
  max_errors?: double
  /**
   * The likelihood of a term being misspelled even if the term exists in the dictionary.
   * @server_default 0.95
   */
  real_word_error_likelihood?: double
  /**
   * The separator that is used to separate terms in the bigram field.
   * If not set, the whitespace character is used as a separator.
   */
  separator?: string
  /**
   * Sets the maximum number of suggested terms to be retrieved from each individual shard.
   * @server_default 5
   */
  shard_size?: integer
  /**
   * The smoothing model used to balance weight between infrequent grams (grams (shingles) are not existing in the index) and frequent grams (appear at least once in the index).
   * The default model is Stupid Backoff.
   */
  smoothing?: SmoothingModelContainer
  /**
   * The text/query to provide suggestions for.
   */
  text?: string
  token_limit?: integer
}

export class PhraseSuggestHighlight {
  /**
   * Use in conjunction with `pre_tag` to define the HTML tags to use for the highlighted text.
   */
  post_tag: string
  /**
   * Use in conjunction with `post_tag` to define the HTML tags to use for the highlighted text.
   */
  pre_tag: string
}

export class LaplaceSmoothingModel {
  /**
   * A constant that is added to all counts to balance weights.
   */
  alpha: double
}

export class LinearInterpolationSmoothingModel {
  bigram_lambda: double
  trigram_lambda: double
  unigram_lambda: double
}

export class SmoothingModel {}

/**
 * @variants container
 */
export class SmoothingModelContainer {
  /**
   * A smoothing model that uses an additive smoothing where a constant (typically `1.0` or smaller) is added to all counts to balance weights.
   */
  laplace?: LaplaceSmoothingModel
  /**
   * A smoothing model that takes the weighted mean of the unigrams, bigrams, and trigrams based on user supplied weights (lambdas).
   */
  linear_interpolation?: LinearInterpolationSmoothingModel
  /**
   * A simple backoff model that backs off to lower order n-gram models if the higher order count is `0` and discounts the lower order n-gram model by a constant factor.
   */
  stupid_backoff?: StupidBackoffSmoothingModel
}

export class StupidBackoffSmoothingModel {
  /**
   * A constant factor that the lower order n-gram model is discounted by.
   */
  discount: double
}

// term suggester

export enum StringDistance {
  /**
   * Based on the Damerau-Levenshtein algorithm, but highly optimized for comparing string distance for terms inside the index.
   */
  internal,
  /**
   * String distance algorithm based on Damerau-Levenshtein algorithm.
   */
  damerau_levenshtein,
  /**
   * String distance algorithm based on the Levenshtein edit distance algorithm.
   */
  levenshtein,
  /**
   * String distance algorithm based on Jaro-Winkler algorithm.
   */
  jaro_winkler,
  /**
   * String distance algorithm based on character n-grams.
   */
  ngram
}

export enum SuggestSort {
  /**
   * Sort by score first, then document frequency and then the term itself.
   */
  score,
  /**
   * Sort by document frequency first, then similarity score and then the term itself.
   */
  frequency
}

export class TermSuggester extends SuggesterBase {
  lowercase_terms?: boolean
  /**
   * The maximum edit distance candidate suggestions can have in order to be considered as a suggestion.
   * Can only be `1` or `2`.
   * @server_default 2
   */
  max_edits?: integer
  /**
   * A factor that is used to multiply with the shard_size in order to inspect more candidate spelling corrections on the shard level.
   * Can improve accuracy at the cost of performance.
   * @server_default 5
   */
  max_inspections?: integer
  /**
   * The maximum threshold in number of documents in which a suggest text token can exist in order to be included.
   * Can be a relative percentage number (for example `0.4`) or an absolute number to represent document frequencies.
   * If a value higher than 1 is specified, then fractional can not be specified.
   * @server_default 0.01
   */
  max_term_freq?: float
  /**
   * The minimal threshold in number of documents a suggestion should appear in.
   * This can improve quality by only suggesting high frequency terms.
   * Can be specified as an absolute number or as a relative percentage of number of documents.
   * If a value higher than 1 is specified, then the number cannot be fractional.
   * @server_default 0
   */
  min_doc_freq?: float
  /**
   * The minimum length a suggest text term must have in order to be included.
   * @server_default 4
   */
  min_word_length?: integer
  /**
   * The number of minimal prefix characters that must match in order be a candidate for suggestions.
   * Increasing this number improves spellcheck performance.
   * @server_default 1
   */
  prefix_length?: integer
  /**
   * Sets the maximum number of suggestions to be retrieved from each individual shard.
   */
  shard_size?: integer
  /**
   * Defines how suggestions should be sorted per suggest text term.
   */
  sort?: SuggestSort
  /**
   * The string distance implementation to use for comparing how similar suggested terms are.
   * @server_default internal
   */
  string_distance?: StringDistance
  /**
   * Controls what suggestions are included or controls for what suggest text terms, suggestions should be suggested.
   */
  suggest_mode?: SuggestMode
  /**
   * The suggest text.
   * Needs to be set globally or per suggestion.
   */
  text?: string
}
