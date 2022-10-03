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

import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import {
  Field,
  Fuzziness,
  Id,
  IndexName,
  Routing,
  SuggestMode,
  Type
} from '@_types/common'
import { GeoHash, GeoHashPrecision, GeoLocation } from '@_types/Geo'
import { double, float, integer, long } from '@_types/Numeric'
import { AdditionalProperties } from '@spec_utils/behaviors'

/**
 * @variants external
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
  _type?: Type
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

export class Suggester implements AdditionalProperties<string, FieldSuggester> {
  /** Global suggest text, to avoid repetition when the same text is used in several suggesters */
  text?: string
}

/**
 * @variants container
 * @non_exhaustive
 */
export class FieldSuggester {
  completion?: CompletionSuggester
  phrase?: PhraseSuggester
  term?: TermSuggester
  /** @variant container_property */
  prefix?: string
  /** @variant container_property */
  regex?: string
  /** @variant container_property */
  text?: string
}

export class SuggesterBase {
  field: Field
  analyzer?: string
  size?: integer
}

// completion suggester

export class CompletionSuggester extends SuggesterBase {
  contexts?: Dictionary<Field, CompletionContext | CompletionContext[]>
  fuzzy?: SuggestFuzziness
  prefix?: string
  regex?: string
  skip_duplicates?: boolean
}

export class SuggestFuzziness {
  fuzziness?: Fuzziness
  min_length?: integer
  prefix_length?: integer
  transpositions?: boolean
  unicode_aware?: boolean
}

// context suggester

/**
 * Text or location that we want similar documents for or a lookup to a document's field for the text.
 * @doc_url https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-mlt-query.html#_document_input_parameters
 *
 * @codegen_names category, location
 */
export type Context = string | GeoLocation

/** @shortcut_property context */
export class CompletionContext {
  boost?: double
  context: Context
  neighbours?: GeoHashPrecision[]
  precision?: GeoHashPrecision
  prefix?: boolean
}

// phrase suggester

export class DirectGenerator {
  field: Field
  max_edits?: integer
  max_inspections?: float
  max_term_freq?: float
  min_doc_freq?: float
  min_word_length?: integer
  post_filter?: string
  pre_filter?: string
  prefix_length?: integer
  size?: integer
  suggest_mode?: SuggestMode
}

export class PhraseSuggestCollate {
  params?: Dictionary<string, UserDefinedValue>
  prune?: boolean
  query: PhraseSuggestCollateQuery
}

export class PhraseSuggestCollateQuery {
  id?: Id
  source?: string
}

export class PhraseSuggester extends SuggesterBase {
  collate?: PhraseSuggestCollate
  confidence?: double
  direct_generator?: DirectGenerator[]
  force_unigrams?: boolean
  gram_size?: integer
  highlight?: PhraseSuggestHighlight
  max_errors?: double
  real_word_error_likelihood?: double
  separator?: string
  shard_size?: integer
  smoothing?: SmoothingModelContainer
  text?: string
  token_limit?: integer
}

export class PhraseSuggestHighlight {
  post_tag: string
  pre_tag: string
}

export class LaplaceSmoothingModel {
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
  laplace?: LaplaceSmoothingModel
  linear_interpolation?: LinearInterpolationSmoothingModel
  stupid_backoff?: StupidBackoffSmoothingModel
}

export class StupidBackoffSmoothingModel {
  discount: double
}

// term suggester

export enum StringDistance {
  internal = 0,
  damerau_levenshtein = 1,
  levenshtein = 2,
  jaro_winkler = 3,
  ngram = 4
}

export enum SuggestSort {
  score = 0,
  frequency = 1
}

export class TermSuggester extends SuggesterBase {
  lowercase_terms?: boolean
  max_edits?: integer
  max_inspections?: integer
  max_term_freq?: float
  min_doc_freq?: float
  min_word_length?: integer
  prefix_length?: integer
  shard_size?: integer
  sort?: SuggestSort
  string_distance?: StringDistance
  suggest_mode?: SuggestMode
  text?: string
}
