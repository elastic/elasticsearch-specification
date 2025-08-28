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
import { TimeZone } from '@_types/Time'
import { PipeSeparatedFlags } from '@spec_utils/PipeSeparatedFlags'
import { QueryBase } from './abstractions'
import { Operator } from './Operator'

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
  /**
   * An array of rules to combine. All rules must produce a match in a document for the overall source to match.
   */
  intervals: IntervalsContainer[]
  /**
   * Maximum number of positions between the matching terms.
   * Intervals produced by the rules further apart than this are not considered matches.
   * @server_default -1
   */
  max_gaps?: integer
  /**
   * If `true`, intervals produced by the rules should appear in the order in which they are specified.
   * @server_default false
   * */
  ordered?: boolean
  /**
   * Rule used to filter returned intervals.
   */
  filter?: IntervalsFilter
}

export class IntervalsAnyOf {
  /**
   * An array of rules to match.
   */
  intervals: IntervalsContainer[]
  /**
   * Rule used to filter returned intervals.
   */
  filter?: IntervalsFilter
}

/** @variants container */
// Note: similar to IntervalsQuery - see comment there
export class IntervalsContainer {
  /**
   * Returns matches that span a combination of other rules.
   */
  all_of?: IntervalsAllOf
  /**
   * Returns intervals produced by any of its sub-rules.
   */
  any_of?: IntervalsAnyOf
  /**
   * Matches analyzed text.
   */
  fuzzy?: IntervalsFuzzy
  /**
   * Matches analyzed text.
   */
  match?: IntervalsMatch
  /**
   * Matches terms that start with a specified set of characters.
   */
  prefix?: IntervalsPrefix
  range?: IntervalsRange
  regexp?: IntervalsRegexp
  /**
   * Matches terms using a wildcard pattern.
   */
  wildcard?: IntervalsWildcard
}

/** @variants container */
// Note: doc says filters are queries, but they're actually intervals
export class IntervalsFilter {
  /**
   * Query used to return intervals that follow an interval from the `filter` rule.
   */
  after?: IntervalsContainer
  /**
   * Query used to return intervals that occur before an interval from the `filter` rule.
   */
  before?: IntervalsContainer
  /**
   * Query used to return intervals contained by an interval from the `filter` rule.
   */
  contained_by?: IntervalsContainer
  /**
   * Query used to return intervals that contain an interval from the `filter` rule.
   */
  containing?: IntervalsContainer
  /**
   * Query used to return intervals that are **not** contained by an interval from the `filter` rule.
   */
  not_contained_by?: IntervalsContainer
  /**
   * Query used to return intervals that do **not** contain an interval from the `filter` rule.
   */
  not_containing?: IntervalsContainer
  /**
   * Query used to return intervals that do **not** overlap with an interval from the `filter` rule.
   */
  not_overlapping?: IntervalsContainer
  /**
   * Query used to return intervals that overlap with an interval from the `filter` rule.
   */
  overlapping?: IntervalsContainer
  /**
   * Script used to return matching documents.
   * This script must return a boolean value: `true` or `false`.
   */
  script?: Script
}

export class IntervalsFuzzy {
  /**
   * Analyzer used to normalize the term.
   * @doc_id analysis
   */
  analyzer?: string
  /**
   * Maximum edit distance allowed for matching.
   * @server_default auto
   */
  fuzziness?: Fuzziness
  /**
   * Number of beginning characters left unchanged when creating expansions.
   * @server_default 0
   */
  prefix_length?: integer
  /**
   * The term to match.
   */
  term: string
  /**
   * Indicates whether edits include transpositions of two adjacent characters (for example, `ab` to `ba`).
   * @server_default true
   */
  transpositions?: boolean
  /**
   * If specified, match intervals from this field rather than the top-level field.
   * The `term` is normalized using the search analyzer from this field, unless `analyzer` is specified separately.
   */
  use_field?: Field
}

export class IntervalsMatch {
  /**
   * Analyzer used to analyze terms in the query.
   * @doc_id analysis
   */
  analyzer?: string
  /**
   * Maximum number of positions between the matching terms.
   * Terms further apart than this are not considered matches.
   * @server_default -1
   */
  max_gaps?: integer
  /**
   * If `true`, matching terms must appear in their specified order.
   * @server_default false
   */
  ordered?: boolean
  /**
   * Text you wish to find in the provided field.
   */
  query: string
  /**
   * If specified, match intervals from this field rather than the top-level field.
   * The `term` is normalized using the search analyzer from this field, unless `analyzer` is specified separately.
   */
  use_field?: Field
  /**
   * An optional interval filter.
   */
  filter?: IntervalsFilter
}

export class IntervalsPrefix {
  /**
   * Analyzer used to analyze the `prefix`.
   * @doc_id analysis
   */
  analyzer?: string
  /**
   * Beginning characters of terms you wish to find in the top-level field.
   */
  prefix: string
  /**
   * If specified, match intervals from this field rather than the top-level field.
   * The `prefix` is normalized using the search analyzer from this field, unless `analyzer` is specified separately.
   */
  use_field?: Field
}

export class IntervalsRange {
  /**
   * Analyzer used to analyze the `prefix`.
   * @doc_id analysis
   */
  analyzer?: string
  /**
   * Lower term, either gte or gt must be provided.
   */
  gte?: string
  /**
   * Lower term, either gte or gt must be provided.
   */
  gt?: string
  /**
   * Upper term, either lte or lt must be provided.
   */
  lte?: string
  /**
   * Upper term, either lte or lt must be provided.
   */
  lt?: string
  /**
   * If specified, match intervals from this field rather than the top-level field.
   * The `prefix` is normalized using the search analyzer from this field, unless `analyzer` is specified separately.
   */
  use_field?: Field
}

export class IntervalsRegexp {
  /**
   * Analyzer used to analyze the `prefix`.
   * @doc_id analysis
   */
  analyzer?: string
  /**
   * Regex pattern.
   */
  pattern: string
  /**
   * If specified, match intervals from this field rather than the top-level field.
   * The `prefix` is normalized using the search analyzer from this field, unless `analyzer` is specified separately.
   */
  use_field?: Field
}

/**
 * @variants container
 * @ext_doc_id query-dsl-intervals-query
 */
// Note: similar to IntervalsContainer, but has to be duplicated because of the QueryBase parent class
export class IntervalsQuery extends QueryBase {
  /**
   * Returns matches that span a combination of other rules.
   */
  all_of?: IntervalsAllOf
  /**
   * Returns intervals produced by any of its sub-rules.
   */
  any_of?: IntervalsAnyOf
  /**
   * Matches terms that are similar to the provided term, within an edit distance defined by `fuzziness`.
   * @doc_id fuzziness
   */
  fuzzy?: IntervalsFuzzy
  /**
   * Matches analyzed text.
   */
  match?: IntervalsMatch
  /**
   * Matches terms that start with a specified set of characters.
   */
  prefix?: IntervalsPrefix
  range?: IntervalsRange
  regexp?: IntervalsRegexp

  /**
   * Matches terms using a wildcard pattern.
   */
  wildcard?: IntervalsWildcard
}

export class IntervalsWildcard {
  /**
   * Analyzer used to analyze the `pattern`.
   * Defaults to the top-level field's analyzer.
   */
  analyzer?: string
  /**
   * Wildcard pattern used to find matching terms.
   */
  pattern: string
  /**
   * If specified, match intervals from this field rather than the top-level field.
   * The `pattern` is normalized using the search analyzer from this field, unless `analyzer` is specified separately.
   */
  use_field?: Field
}

/**
 * @shortcut_property query
 * @ext_doc_id query-dsl-match-query
 */
export class MatchQuery extends QueryBase {
  /**
   * Analyzer used to convert the text in the query value into tokens.
   * @doc_id analysis
   */
  analyzer?: string
  /**
   * If `true`, match phrase queries are automatically created for multi-term synonyms.
   * @server_default true
   */
  auto_generate_synonyms_phrase_query?: boolean
  /** @deprecated 7.3.0 */
  cutoff_frequency?: double
  /**
   * Maximum edit distance allowed for matching.
   * @doc_id fuzziness
   */
  fuzziness?: Fuzziness
  /**
   * Method used to rewrite the query.
   * @doc_id query-dsl-multi-term-rewrite
   */
  fuzzy_rewrite?: MultiTermQueryRewrite
  /**
   * If `true`, edits for fuzzy matching include transpositions of two adjacent characters (for example, `ab` to `ba`).
   * @server_default true
   */
  fuzzy_transpositions?: boolean
  /**
   *  If `true`, format-based errors, such as providing a text query value for a numeric field, are ignored.
   * @server_default false
   */
  lenient?: boolean
  /**
   * Maximum number of terms to which the query will expand.
   * @server_default 50
   */
  max_expansions?: integer
  /**
   * Minimum number of clauses that must match for a document to be returned.
   * @doc_id query-dsl-minimum-should-match
   */
  minimum_should_match?: MinimumShouldMatch
  /**
   * Boolean logic used to interpret text in the query value.
   * @server_default 'or'
   */
  operator?: Operator
  /**
   * Number of beginning characters left unchanged for fuzzy matching.
   * @server_default 0
   */
  prefix_length?: integer
  /**
   * Text, number, boolean value or date you wish to find in the provided field.
   */
  // FIXME: docs states "date" as a possible format. Add DateMath, or DurationLarge?
  //        Should also be consistent with MultiMatchQuery.query
  query: string | float | boolean
  /**
   * Indicates whether no documents are returned if the `analyzer` removes all tokens, such as when using a `stop` filter.
   * @server_default 'none'
   */
  zero_terms_query?: ZeroTermsQuery
}

/**
 * @shortcut_property query
 * @ext_doc_id query-dsl-match-bool-prefix-query
 */
export class MatchBoolPrefixQuery extends QueryBase {
  /**
   * Analyzer used to convert the text in the query value into tokens.
   * @doc_id analysis
   */
  analyzer?: string
  /**
   * Maximum edit distance allowed for matching.
   * Can be applied to the term subqueries constructed for all terms but the final term.
   * @doc_id fuzziness
   */
  fuzziness?: Fuzziness
  /**
   * Method used to rewrite the query.
   * Can be applied to the term subqueries constructed for all terms but the final term.
   * @doc_id query-dsl-multi-term-rewrite
   */
  fuzzy_rewrite?: MultiTermQueryRewrite
  /**
   * If `true`, edits for fuzzy matching include transpositions of two adjacent characters (for example, `ab` to `ba`).
   * Can be applied to the term subqueries constructed for all terms but the final term.
   * @server_default true
   */
  fuzzy_transpositions?: boolean
  /**
   * Maximum number of terms to which the query will expand.
   * Can be applied to the term subqueries constructed for all terms but the final term.
   * @server_default 50
   */
  max_expansions?: integer
  /**
   * Minimum number of clauses that must match for a document to be returned.
   * Applied to the constructed bool query.
   * @doc_id query-dsl-minimum-should-match
   */
  minimum_should_match?: MinimumShouldMatch
  /**
   * Boolean logic used to interpret text in the query value.
   * Applied to the constructed bool query.
   * @server_default 'or'
   */
  operator?: Operator
  /**
   * Number of beginning characters left unchanged for fuzzy matching.
   * Can be applied to the term subqueries constructed for all terms but the final term.
   * @server_default 0
   */
  prefix_length?: integer
  /**
   * Terms you wish to find in the provided field.
   * The last term is used in a prefix query.
   */
  query: string
}

/**
 * @shortcut_property query
 * @ext_doc_id query-dsl-match-query-phrase
 */
export class MatchPhraseQuery extends QueryBase {
  /**
   * Analyzer used to convert the text in the query value into tokens.
   * @doc_id analysis
   */
  analyzer?: string
  /**
   * Query terms that are analyzed and turned into a phrase query.
   */
  query: string
  /**
   * Maximum number of positions allowed between matching tokens.
   * @server_default 0
   */
  slop?: integer
  /**
   * Indicates whether no documents are returned if the `analyzer` removes all tokens, such as when using a `stop` filter.
   * @server_default 'none'
   */
  zero_terms_query?: ZeroTermsQuery
}

/**
 * @shortcut_property query
 * @ext_doc_id query-dsl-match-query-phrase-prefix
 */
export class MatchPhrasePrefixQuery extends QueryBase {
  /**
   * Analyzer used to convert text in the query value into tokens.
   * @doc_id analysis
   */
  analyzer?: string
  /**
   * Maximum number of terms to which the last provided term of the query value will expand.
   * @server_default 50
   */
  max_expansions?: integer
  /**
   * Text you wish to find in the provided field.
   */
  query: string
  /**
   * Maximum number of positions allowed between matching tokens.
   * @server_default 0
   */
  slop?: integer
  /**
   * Indicates whether no documents are returned if the analyzer removes all tokens, such as when using a `stop` filter.
   * @server_default none
   */
  zero_terms_query?: ZeroTermsQuery
}

/**
 * @ext_doc_id query-dsl-multi-match-query
 */
export class MultiMatchQuery extends QueryBase {
  /**
   * Analyzer used to convert the text in the query value into tokens.
   * @doc_id analysis
   */
  analyzer?: string
  /**
   * If `true`, match phrase queries are automatically created for multi-term synonyms.
   * @server_default true
   */
  auto_generate_synonyms_phrase_query?: boolean
  /** @deprecated 7.3.0 */
  cutoff_frequency?: double
  /**
   * The fields to be queried.
   * Defaults to the `index.query.default_field` index settings, which in turn defaults to `*`.
   */
  fields?: Fields
  /**
   * Maximum edit distance allowed for matching.
   * @doc_id fuzziness
   */
  fuzziness?: Fuzziness
  /**
   * Method used to rewrite the query.
   * @doc_id query-dsl-multi-term-rewrite
   */
  fuzzy_rewrite?: MultiTermQueryRewrite
  /**
   * If `true`, edits for fuzzy matching include transpositions of two adjacent characters (for example, `ab` to `ba`).
   * Can be applied to the term subqueries constructed for all terms but the final term.
   * @server_default true
   */
  fuzzy_transpositions?: boolean
  /**
   *  If `true`, format-based errors, such as providing a text query value for a numeric field, are ignored.
   * @server_default false
   */
  lenient?: boolean
  /**
   * Maximum number of terms to which the query will expand.
   * @server_default 50
   */
  max_expansions?: integer
  /**
   * Minimum number of clauses that must match for a document to be returned.
   * @doc_id query-dsl-minimum-should-match
   */
  minimum_should_match?: MinimumShouldMatch
  /**
   * Boolean logic used to interpret text in the query value.
   * @server_default 'or'
   */
  operator?: Operator
  /**
   * Number of beginning characters left unchanged for fuzzy matching.
   * @server_default 0
   */
  prefix_length?: integer
  /**
   * Text, number, boolean value or date you wish to find in the provided field.
   */
  query: string
  /**
   * Maximum number of positions allowed between matching tokens.
   * @server_default 0
   */
  slop?: integer
  /**
   * Determines how scores for each per-term blended query and scores across groups are combined.
   * @server_default 0.0
   */
  tie_breaker?: double
  /**
   * How `the` multi_match query is executed internally.
   * @server_default 'best_fields'
   */
  type?: TextQueryType
  /**
   * Indicates whether no documents are returned if the `analyzer` removes all tokens, such as when using a `stop` filter.
   * @server_default 'none'
   */
  zero_terms_query?: ZeroTermsQuery
}

export enum TextQueryType {
  /**
   * Finds documents that match any field, but uses the `_score` from the best field.
   */
  best_fields,
  /**
   * Finds documents that match any field and combines the `_score` from each field.
   */
  most_fields,
  /**
   * Treats fields with the same analyzer as though they were one big field.
   * Looks for each word in any field.
   */
  cross_fields,
  /**
   * Runs a `match_phrase` query on each field and uses the `_score` from the best field.
   */
  phrase,
  /**
   * Runs a `match_phrase_prefix` query on each field and uses the `_score` from the best field.
   */
  phrase_prefix,
  /**
   * Creates a `match_bool_prefix` query on each field and combines the `_score` from each field.
   */
  bool_prefix
}

export enum ZeroTermsQuery {
  /**
   * Returns all documents, similar to a `match_all` query.
   */
  all,
  /**
   * No documents are returned if the `analyzer` removes all tokens.
   */
  none
}

/**
 * @ext_doc_id query-dsl-query-string-query
 */
export class QueryStringQuery extends QueryBase {
  /**
   * If `true`, the wildcard characters `*` and `?` are allowed as the first character of the query string.
   * @server_default true
   */
  allow_leading_wildcard?: boolean
  /**
   * Analyzer used to convert text in the query string into tokens.
   * @doc_id analysis
   */
  analyzer?: string
  /**
   * If `true`, the query attempts to analyze wildcard terms in the query string.
   * @server_default false
   */
  analyze_wildcard?: boolean
  /**
   * If `true`, match phrase queries are automatically created for multi-term synonyms.
   * @server_default true
   */
  auto_generate_synonyms_phrase_query?: boolean
  /**
   * Default field to search if no field is provided in the query string.
   * Supports wildcards (`*`).
   * Defaults to the `index.query.default_field` index setting, which has a default value of `*`.
   */
  default_field?: Field
  /**
   * Default boolean logic used to interpret text in the query string if no operators are specified.
   * @server_default 'or'
   */
  default_operator?: Operator
  /**
   * If `true`, enable position increments in queries constructed from a `query_string` search.
   * @server_default true
   */
  enable_position_increments?: boolean
  /** @server_default false */
  escape?: boolean
  /**
   * Array of fields to search. Supports wildcards (`*`).
   */
  fields?: Field[]
  /**
   * Maximum edit distance allowed for fuzzy matching.
   * @doc_id fuzziness
   */
  fuzziness?: Fuzziness
  /**
   * Maximum number of terms to which the query expands for fuzzy matching.
   * @server_default 50
   */
  fuzzy_max_expansions?: integer
  /**
   * Number of beginning characters left unchanged for fuzzy matching.
   * @server_default 0
   */
  fuzzy_prefix_length?: integer
  /**
   * Method used to rewrite the query.
   * @doc_id query-dsl-multi-term-rewrite
   */
  fuzzy_rewrite?: MultiTermQueryRewrite
  /**
   * If `true`, edits for fuzzy matching include transpositions of two adjacent characters (for example, `ab` to `ba`).
   * @server_default true
   */
  fuzzy_transpositions?: boolean
  /**
   * If `true`, format-based errors, such as providing a text value for a numeric field, are ignored.
   * @server_default false
   */
  lenient?: boolean
  /**
   * Maximum number of automaton states required for the query.
   * @server_default 10000
   */
  max_determinized_states?: integer
  /**
   * Minimum number of clauses that must match for a document to be returned.
   * @doc_id query-dsl-minimum-should-match
   */
  minimum_should_match?: MinimumShouldMatch
  /**
   * Maximum number of positions allowed between matching tokens for phrases.
   * @server_default 0
   */
  phrase_slop?: double
  /**
   * Query string you wish to parse and use for search.
   */
  query: string
  /**
   * Analyzer used to convert quoted text in the query string into tokens.
   * For quoted text, this parameter overrides the analyzer specified in the `analyzer` parameter.
   */
  quote_analyzer?: string
  /**
   * Suffix appended to quoted text in the query string.
   * You can use this suffix to use a different analysis method for exact matches.
   */
  quote_field_suffix?: string
  /**
   * Method used to rewrite the query.
   * @doc_id query-dsl-multi-term-rewrite
   */
  rewrite?: MultiTermQueryRewrite
  /**
   * How to combine the queries generated from the individual search terms in the resulting `dis_max` query.
   */
  tie_breaker?: double
  /**
   * Coordinated Universal Time (UTC) offset or IANA time zone used to convert date values in the query string to UTC.
   */
  time_zone?: TimeZone
  /**
   * Determines how the query matches and scores documents.
   * @server_default 'best_fields'
   * */
  type?: TextQueryType
}

/**
 * Query flags can be either a single flag or a combination of flags, e.g. `OR|AND|PREFIX`
 * @doc_id supported-flags
 */
export type SimpleQueryStringFlags = PipeSeparatedFlags<SimpleQueryStringFlag>

export enum SimpleQueryStringFlag {
  /**
   * Disables all operators.
   */
  NONE,
  /**
   * Enables the `+` AND operator.
   */
  AND,
  /**
   * Enables the `-` NOT operator.
   */
  NOT,
  /**
   * Enables the `\|` OR operator.
   */
  OR,
  /**
   * Enables the `*` prefix operator.
   */
  PREFIX,
  /**
   * Enables the `"` quotes operator used to search for phrases.
   */
  PHRASE,
  /**
   * Enables the `(` and `)` operators to control operator precedence.
   */
  PRECEDENCE,
  /**
   * Enables `\` as an escape character.
   */
  ESCAPE,
  /**
   * Enables whitespace as split characters.
   */
  WHITESPACE,
  /**
   * Enables the `~N` operator after a word, where `N` is an integer denoting the allowed edit distance for matching.
   */
  FUZZY,
  /**
   * Enables the `~N` operator, after a phrase where `N` is the maximum number of positions allowed between matching tokens.
   * Synonymous to `SLOP`.
   */
  NEAR,
  /**
   * Enables the `~N` operator, after a phrase where `N` is maximum number of positions allowed between matching tokens.
   * Synonymous to `NEAR`.
   */
  SLOP,
  /**
   * Enables all optional operators.
   */
  ALL
}

/**
 * @ext_doc_id query-dsl-simple-query-string-query
 */
export class SimpleQueryStringQuery extends QueryBase {
  /**
   * Analyzer used to convert text in the query string into tokens.
   * @doc_id analysis
   */
  analyzer?: string
  /**
   * If `true`, the query attempts to analyze wildcard terms in the query string.
   * @server_default false
   */
  analyze_wildcard?: boolean
  /**
   * If `true`, the parser creates a match_phrase query for each multi-position token.
   * @server_default true
   */
  auto_generate_synonyms_phrase_query?: boolean
  /**
   * Default boolean logic used to interpret text in the query string if no operators are specified.
   * @server_default 'or'
   */
  default_operator?: Operator
  /**
   * Array of fields you wish to search.
   * Accepts wildcard expressions.
   * You also can boost relevance scores for matches to particular fields using a caret (`^`) notation.
   * Defaults to the `index.query.default_field index` setting, which has a default value of `*`.
   */
  fields?: Field[]
  /**
   * List of enabled operators for the simple query string syntax.
   * @server_default ALL
   */
  flags?: SimpleQueryStringFlags
  /**
   * Maximum number of terms to which the query expands for fuzzy matching.
   * @server_default 50
   */
  fuzzy_max_expansions?: integer
  /**
   * Number of beginning characters left unchanged for fuzzy matching.
   * @server_default 0
   */
  fuzzy_prefix_length?: integer
  /**
   * If `true`, edits for fuzzy matching include transpositions of two adjacent characters (for example, `ab` to `ba`).
   */
  fuzzy_transpositions?: boolean
  /**
   * If `true`, format-based errors, such as providing a text value for a numeric field, are ignored.
   * @server_default false
   */
  lenient?: boolean
  /**
   * Minimum number of clauses that must match for a document to be returned.
   * @doc_id query-dsl-minimum-should-match
   */
  minimum_should_match?: MinimumShouldMatch
  /**
   * Query string in the simple query string syntax you wish to parse and use for search.
   */
  query: string
  /**
   * Suffix appended to quoted text in the query string.
   */
  quote_field_suffix?: string
}
