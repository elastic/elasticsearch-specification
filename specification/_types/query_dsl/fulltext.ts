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
import { DateMath, TimeZone } from '@_types/Time'

/**
 * @shortcut_property query
 */
export class CommonTermsQuery extends QueryBase {
  analyzer?: string
  cutoff_frequency?: double
  high_freq_operator?: Operator
  low_freq_operator?: Operator
  minimum_should_match?: MinimumShouldMatch
  query: string
}

export class Intervals {
  filter?: IntervalsFilter
}

export class IntervalsAllOf {
  intervals: IntervalsContainer[]
  /** @server_default -1 */
  max_gaps?: integer
  /** @server_default false */
  ordered?: boolean
  filter?: IntervalsFilter
}

export class IntervalsAnyOf {
  intervals: IntervalsContainer[]
  filter?: IntervalsFilter
}

/** @variants container */
// Note: similar to IntervalsQuery - see comment there
export class IntervalsContainer {
  all_of?: IntervalsAllOf
  any_of?: IntervalsAnyOf
  fuzzy?: IntervalsFuzzy
  match?: IntervalsMatch
  prefix?: IntervalsPrefix
  wildcard?: IntervalsWildcard
}

/** @variants container */
// Note: doc says filters are queries, but they're actually intervals
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
  /** @server_default 0 */
  prefix_length?: integer
  term: string
  /** @server_default true */
  transpositions?: boolean
  use_field?: Field
}

export class IntervalsMatch {
  analyzer?: string
  /** @server_default -1 */
  max_gaps?: integer
  /** @server_default false */
  ordered?: boolean
  query: string
  use_field?: Field
  filter?: IntervalsFilter
}

export class IntervalsPrefix {
  analyzer?: string
  prefix: string
  use_field?: Field
}

/** @variants container */
// Note: similar to IntervalsContainer, but has to be duplicated because of the QueryBase parent class
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
  pattern: string
  use_field?: Field
}

/** @shortcut_property query */
export class MatchQuery extends QueryBase {
  analyzer?: string
  /** @server_default true */
  auto_generate_synonyms_phrase_query?: boolean
  /** @deprecated 7.3.0 */
  cutoff_frequency?: double
  fuzziness?: Fuzziness
  fuzzy_rewrite?: MultiTermQueryRewrite
  /** @server_default true */
  fuzzy_transpositions?: boolean
  /** @server_default false */
  lenient?: boolean
  /** @server_default 50 */
  max_expansions?: integer
  minimum_should_match?: MinimumShouldMatch
  /** @server_default 'or' */
  operator?: Operator
  /** @server_default 0 */
  prefix_length?: integer
  // FIXME: docs states "date" as a possible format. Add DateMath, or TimeSpanLarge?
  //        Should also be consisitent with MultiMatchQuery.query
  query: string | float | boolean
  /** @server_default 'none' */
  zero_terms_query?: ZeroTermsQuery
}

/** @shortcut_property query */
export class MatchBoolPrefixQuery extends QueryBase {
  analyzer?: string
  fuzziness?: Fuzziness
  fuzzy_rewrite?: MultiTermQueryRewrite
  fuzzy_transpositions?: boolean
  max_expansions?: integer
  minimum_should_match?: MinimumShouldMatch
  operator?: Operator
  prefix_length?: integer
  query: string
}

/** @shortcut_property query */
export class MatchPhraseQuery extends QueryBase {
  analyzer?: string
  query: string
  /** @server_default 0 */
  slop?: integer
  zero_terms_query?: ZeroTermsQuery
}

/** @shortcut_property query */
export class MatchPhrasePrefixQuery extends QueryBase {
  analyzer?: string
  max_expansions?: integer
  query: string
  slop?: integer
  zero_terms_query?: ZeroTermsQuery
}

export class MultiMatchQuery extends QueryBase {
  analyzer?: string
  /** @server_default true */
  auto_generate_synonyms_phrase_query?: boolean
  /** @deprecated 7.3.0 */
  cutoff_frequency?: double
  fields?: Fields
  fuzziness?: Fuzziness
  fuzzy_rewrite?: MultiTermQueryRewrite
  /** @server_default true */
  fuzzy_transpositions?: boolean
  /** @server_default false */
  lenient?: boolean
  /** @server_default 50 */
  max_expansions?: integer
  minimum_should_match?: MinimumShouldMatch
  /** @server_default 'or' */
  operator?: Operator
  /** @server_default 0 */
  prefix_length?: integer
  query: string
  slop?: integer
  tie_breaker?: double
  /** @server_default 'best_fields' */
  type?: TextQueryType
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
  /** @server_default true */
  allow_leading_wildcard?: boolean
  analyzer?: string
  /** @server_default false */
  analyze_wildcard?: boolean
  /** @server_default true */
  auto_generate_synonyms_phrase_query?: boolean
  default_field?: Field
  /** @server_default 'or' */
  default_operator?: Operator
  /** @server_default true */
  enable_position_increments?: boolean
  /** @server_default false */
  escape?: boolean
  fields?: Field[]
  fuzziness?: Fuzziness
  /** @server_default 50 */
  fuzzy_max_expansions?: integer
  fuzzy_prefix_length?: integer
  fuzzy_rewrite?: MultiTermQueryRewrite
  fuzzy_transpositions?: boolean
  /** @server_default false */
  lenient?: boolean
  /** @server_default 10000 */
  max_determinized_states?: integer
  minimum_should_match?: MinimumShouldMatch
  phrase_slop?: double
  query: string
  quote_analyzer?: string
  quote_field_suffix?: string
  rewrite?: MultiTermQueryRewrite
  tie_breaker?: double
  time_zone?: TimeZone
  /** @server_default 'best_fields' */
  type?: TextQueryType
}

/**
 * Query flags can be either a single flag or a combination of flags, e.g. `OR|AND|PREFIX`
 * @doc_id supported-flags
 * @codegen_names single, multiple
 */
export type SimpleQueryStringFlags = SimpleQueryStringFlag | string

export enum SimpleQueryStringFlag {
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
  /** @server_default false */
  analyze_wildcard?: boolean
  /** @server_default true */
  auto_generate_synonyms_phrase_query?: boolean
  /** @server_default 'or' */
  default_operator?: Operator
  fields?: Field[]
  flags?: SimpleQueryStringFlags
  fuzzy_max_expansions?: integer
  fuzzy_prefix_length?: integer
  fuzzy_transpositions?: boolean
  /** @server_default false */
  lenient?: boolean
  minimum_should_match?: MinimumShouldMatch
  query: string
  quote_field_suffix?: string
}
