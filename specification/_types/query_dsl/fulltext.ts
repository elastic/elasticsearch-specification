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
  Fields,
  Fuzziness,
  MinimumShouldMatch,
  MultiTermQueryRewrite
} from '@_types/common'
import { double, float, integer } from '@_types/Numeric'
import { Script } from '@_types/Scripting'
import { QueryBase } from './abstractions'
import { Operator } from './Operator'

export class CommonTermsQuery extends QueryBase {
  analyzer?: string
  cutoff_frequency?: double
  high_freq_operator?: Operator
  low_freq_operator?: Operator
  minimum_should_match?: MinimumShouldMatch
  query?: string
}

export class Intervals {
  filter?: IntervalsFilter
}

export class IntervalsAllOf {
  intervals?: IntervalsContainer[]
  max_gaps?: integer
  ordered?: boolean
  filter?: IntervalsFilter
}

export class IntervalsAnyOf {
  intervals?: IntervalsContainer[]
  filter?: IntervalsFilter
}

/**
 * @variants container
 */
export class IntervalsContainer {
  all_of?: IntervalsAllOf
  any_of?: IntervalsAnyOf
  fuzzy?: IntervalsFuzzy
  match?: IntervalsMatch
  prefix?: IntervalsPrefix
  wildcard?: IntervalsWildcard
}

export class IntervalsFilter {
  after?: IntervalsContainer
  before?: IntervalsContainer
  contained_by?: IntervalsContainer
  containing?: IntervalsContainer
  not_contained_by?: IntervalsContainer
  not_containing?: IntervalsContainer
  not_overlapping?: IntervalsContainer
  overlapping?: IntervalsContainer
  script?: Script
}

export class IntervalsFuzzy {
  analyzer?: string
  fuzziness?: Fuzziness
  prefix_length?: integer
  term?: string
  transpositions?: boolean
  use_field?: Field
}

export class IntervalsMatch {
  analyzer?: string
  max_gaps?: integer
  ordered?: boolean
  query?: string
  use_field?: Field
  filter?: IntervalsFilter
}

export class IntervalsPrefix {
  analyzer?: string
  prefix?: string
  use_field?: Field
}

export class IntervalsQuery extends QueryBase {
  all_of?: IntervalsAllOf
  any_of?: IntervalsAnyOf
  fuzzy?: IntervalsFuzzy
  match?: IntervalsMatch
  prefix?: IntervalsPrefix
  wildcard?: IntervalsWildcard
}

export class IntervalsWildcard {
  analyzer?: string
  pattern?: string
  use_field?: Field
}

export class MatchQuery extends QueryBase {
  analyzer?: string
  auto_generate_synonyms_phrase_query?: boolean
  cutoff_frequency?: double
  fuzziness?: Fuzziness
  fuzzy_rewrite?: MultiTermQueryRewrite
  fuzzy_transpositions?: boolean
  lenient?: boolean
  max_expansions?: integer
  minimum_should_match?: MinimumShouldMatch
  operator?: Operator
  prefix_length?: integer
  query?: string | float | boolean
  zero_terms_query?: ZeroTermsQuery
}

export class MatchBoolPrefixQuery extends QueryBase {
  analyzer?: string
  fuzziness?: Fuzziness
  fuzzy_rewrite?: MultiTermQueryRewrite
  fuzzy_transpositions?: boolean
  max_expansions?: integer
  minimum_should_match?: MinimumShouldMatch
  operator?: Operator
  prefix_length?: integer
  query?: string
}

export class MatchPhraseQuery extends QueryBase {
  analyzer?: string
  query?: string
  slop?: integer
}

export class MatchPhrasePrefixQuery extends QueryBase {
  analyzer?: string
  max_expansions?: integer
  query?: string
  slop?: integer
  zero_terms_query?: ZeroTermsQuery
}

export class MultiMatchQuery extends QueryBase {
  analyzer?: string
  auto_generate_synonyms_phrase_query?: boolean
  cutoff_frequency?: double
  fields?: Fields
  fuzziness?: Fuzziness
  fuzzy_rewrite?: MultiTermQueryRewrite
  fuzzy_transpositions?: boolean
  lenient?: boolean
  max_expansions?: integer
  minimum_should_match?: MinimumShouldMatch
  operator?: Operator
  prefix_length?: integer
  query?: string
  slop?: integer
  tie_breaker?: double
  type?: TextQueryType
  use_dis_max?: boolean
  zero_terms_query?: ZeroTermsQuery
}

export enum TextQueryType {
  best_fields = 0,
  most_fields = 1,
  cross_fields = 2,
  phrase = 3,
  phrase_prefix = 4,
  bool_prefix = 5
}

export enum ZeroTermsQuery {
  all = 0,
  none = 1
}

export class QueryStringQuery extends QueryBase {
  allow_leading_wildcard?: boolean
  analyzer?: string
  analyze_wildcard?: boolean
  auto_generate_synonyms_phrase_query?: boolean
  default_field?: Field
  default_operator?: Operator
  enable_position_increments?: boolean
  escape?: boolean
  fields?: Fields
  fuzziness?: Fuzziness
  fuzzy_max_expansions?: integer
  fuzzy_prefix_length?: integer
  fuzzy_rewrite?: MultiTermQueryRewrite
  fuzzy_transpositions?: boolean
  lenient?: boolean
  max_determinized_states?: integer
  minimum_should_match?: MinimumShouldMatch
  phrase_slop?: double
  query?: string
  quote_analyzer?: string
  quote_field_suffix?: string
  rewrite?: MultiTermQueryRewrite
  tie_breaker?: double
  time_zone?: string
  type?: TextQueryType
}

export enum SimpleQueryStringFlags {
  NONE = 1,
  AND = 2,
  OR = 4,
  NOT = 8,
  PREFIX = 16,
  PHRASE = 32,
  PRECEDENCE = 64,
  ESCAPE = 128,
  WHITESPACE = 256,
  FUZZY = 512,
  NEAR = 1024,
  SLOP = 2048,
  ALL = 4096
}

export class SimpleQueryStringQuery extends QueryBase {
  analyzer?: string
  analyze_wildcard?: boolean
  auto_generate_synonyms_phrase_query?: boolean
  default_operator?: Operator
  fields?: Fields
  flags?: SimpleQueryStringFlags | string
  fuzzy_max_expansions?: integer
  fuzzy_prefix_length?: integer
  fuzzy_transpositions?: boolean
  lenient?: boolean
  minimum_should_match?: MinimumShouldMatch
  query?: string
  quote_field_suffix?: string
}
