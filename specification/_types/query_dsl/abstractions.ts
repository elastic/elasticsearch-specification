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
  Id,
  IndexName,
  MinimumShouldMatch,
  Routing
} from '@_types/common'
import { KnnQuery } from '@_types/Knn'
import { float } from '@_types/Numeric'
import { SingleKeyDictionary } from '@spec_utils/Dictionary'
import {
  BoolQuery,
  BoostingQuery,
  ConstantScoreQuery,
  DisMaxQuery,
  FunctionScoreQuery
} from './compound'
import {
  CommonTermsQuery,
  IntervalsQuery,
  MatchBoolPrefixQuery,
  MatchPhrasePrefixQuery,
  MatchPhraseQuery,
  MatchQuery,
  MultiMatchQuery,
  QueryStringQuery,
  SimpleQueryStringQuery
} from './fulltext'
import {
  GeoBoundingBoxQuery,
  GeoDistanceQuery,
  GeoGridQuery,
  GeoPolygonQuery,
  GeoShapeQuery
} from './geo'
import {
  HasChildQuery,
  HasParentQuery,
  NestedQuery,
  ParentIdQuery
} from './joining'
import { MatchAllQuery } from './MatchAllQuery'
import { MatchNoneQuery } from './MatchNoneQuery'
import { SemanticQuery } from './SemanticQuery'
import {
  SpanContainingQuery,
  SpanFieldMaskingQuery,
  SpanFirstQuery,
  SpanMultiTermQuery,
  SpanNearQuery,
  SpanNotQuery,
  SpanOrQuery,
  SpanTermQuery,
  SpanWithinQuery
} from './span'
import { SparseVectorQuery } from './SparseVectorQuery'
import {
  DistanceFeatureQuery,
  MoreLikeThisQuery,
  PercolateQuery,
  PinnedQuery,
  RankFeatureQuery,
  RuleQuery,
  ScriptQuery,
  ScriptScoreQuery,
  ShapeQuery
} from './specialized'
import {
  ExistsQuery,
  FuzzyQuery,
  IdsQuery,
  PrefixQuery,
  RangeQuery,
  RegexpQuery,
  TermQuery,
  TermsQuery,
  TermsSetQuery,
  TypeQuery,
  WildcardQuery
} from './term'
import { TextExpansionQuery } from './TextExpansionQuery'
import { WeightedTokensQuery } from './WeightedTokensQuery'

/**
 * An Elasticsearch Query DSL (Domain Specific Language) object that defines a query.
 * @variants container
 * @non_exhaustive
 * @ext_doc_id query-dsl
 */
export class QueryContainer {
  /**
   * matches documents matching boolean combinations of other queries.
   * @ext_doc_id query-dsl-bool-query
   */
  bool?: BoolQuery
  /**
   * Returns documents matching a `positive` query while reducing the relevance score of documents that also match a `negative` query.
   * @ext_doc_id query-dsl-boosting-query
   */
  boosting?: BoostingQuery
  /** @deprecated 7.3.0 */
  common?: SingleKeyDictionary<Field, CommonTermsQuery>
  /**
   * The `combined_fields` query supports searching multiple text fields as if their contents had been indexed into one combined field.
   * @ext_doc_id query-dsl-combined-fields-query
   * @availability stack since=7.13.0
   * @availability serverless
   */
  combined_fields?: CombinedFieldsQuery
  /**
   * Wraps a filter query and returns every matching document with a relevance score equal to the `boost` parameter value.
   * @ext_doc_id query-dsl-constant-score-query
   */
  constant_score?: ConstantScoreQuery
  /**
   * Returns documents matching one or more wrapped queries, called query clauses or clauses.
   * If a returned document matches multiple query clauses, the `dis_max` query assigns the document the highest relevance score from any matching clause, plus a tie breaking increment for any additional matching subqueries.
   * @ext_doc_id query-dsl-dis-max-query
   */
  dis_max?: DisMaxQuery
  /**
   * Boosts the relevance score of documents closer to a provided origin date or point.
   * For example, you can use this query to give more weight to documents closer to a certain date or location.
   * @ext_doc_id query-dsl-distance-feature-query
   */
  distance_feature?: DistanceFeatureQuery
  /**
   * Returns documents that contain an indexed value for a field.
   * @ext_doc_id query-dsl-exists-query
   */
  exists?: ExistsQuery
  /**
   * The `function_score` enables you to modify the score of documents that are retrieved by a query.
   * @ext_doc_id query-dsl-function-score-query
   */
  function_score?: FunctionScoreQuery
  /**
   * Returns documents that contain terms similar to the search term, as measured by a Levenshtein edit distance.
   * @ext_doc_id query-dsl-fuzzy-query
   */
  fuzzy?: SingleKeyDictionary<Field, FuzzyQuery>
  /**
   * Matches geo_point and geo_shape values that intersect a bounding box.
   * @ext_doc_id query-dsl-geo-bounding-box-query
   */
  geo_bounding_box?: GeoBoundingBoxQuery
  /**
   * Matches `geo_point` and `geo_shape` values within a given distance of a geopoint.
   * @ext_doc_id query-dsl-geo-distance-query
   */
  geo_distance?: GeoDistanceQuery

  /**
   * Matches `geo_point` and `geo_shape` values that intersect a grid cell from a GeoGrid aggregation.
   */
  geo_grid?: SingleKeyDictionary<Field, GeoGridQuery>
  /**
   * @deprecated 7.12.0 Use geo-shape instead.
   */
  geo_polygon?: GeoPolygonQuery
  /**
   * Filter documents indexed using either the `geo_shape` or the `geo_point` type.
   * @ext_doc_id query-dsl-geo-shape-query
   */
  geo_shape?: GeoShapeQuery
  /**
   * Returns parent documents whose joined child documents match a provided query.
   * @ext_doc_id query-dsl-has-child-query
   */
  has_child?: HasChildQuery
  /**
   * Returns child documents whose joined parent document matches a provided query.
   * @ext_doc_id query-dsl-has-parent-query
   */
  has_parent?: HasParentQuery
  /**
   * Returns documents based on their IDs.
   * This query uses document IDs stored in the `_id` field.
   * @ext_doc_id query-dsl-ids-query
   */
  ids?: IdsQuery
  /**
   * Returns documents based on the order and proximity of matching terms.
   * @ext_doc_id query-dsl-intervals-query
   */
  intervals?: SingleKeyDictionary<Field, IntervalsQuery>
  /**
   * Finds the k nearest vectors to a query vector, as measured by a similarity
   * metric. knn query finds nearest vectors through approximate search on indexed
   * dense_vectors.
   * @ext_doc_id query-dsl-knn-query
   */
  knn?: KnnQuery
  /**
   * Returns documents that match a provided text, number, date or boolean value.
   * The provided text is analyzed before matching.
   * @ext_doc_id query-dsl-match-query
   */
  match?: SingleKeyDictionary<Field, MatchQuery>
  /**
   * Matches all documents, giving them all a `_score` of 1.0.
   * @ext_doc_id query-dsl-match-all-query
   */
  match_all?: MatchAllQuery
  /**
   * Analyzes its input and constructs a `bool` query from the terms.
   * Each term except the last is used in a `term` query.
   * The last term is used in a prefix query.
   * @ext_doc_id query-dsl-match-bool-prefix-query
   */
  match_bool_prefix?: SingleKeyDictionary<Field, MatchBoolPrefixQuery>
  /**
   * Matches no documents.
   * @ext_doc_id query-dsl-match-none-query
   */
  match_none?: MatchNoneQuery
  /**
   * Analyzes the text and creates a phrase query out of the analyzed text.
   * @ext_doc_id query-dsl-match-query-phrase
   */
  match_phrase?: SingleKeyDictionary<Field, MatchPhraseQuery>
  /**
   * Returns documents that contain the words of a provided text, in the same order as provided.
   * The last term of the provided text is treated as a prefix, matching any words that begin with that term.
   * @ext_doc_id query-dsl-match-query-phrase-prefix
   */
  match_phrase_prefix?: SingleKeyDictionary<Field, MatchPhrasePrefixQuery>
  /**
   * Returns documents that are "like" a given set of documents.
   * @ext_doc_id query-dsl-mlt-query
   */
  more_like_this?: MoreLikeThisQuery
  /**
   * Enables you to search for a provided text, number, date or boolean value across multiple fields.
   * The provided text is analyzed before matching.
   * @ext_doc_id query-dsl-multi-match-query
   */
  multi_match?: MultiMatchQuery
  /**
   * Wraps another query to search nested fields.
   * If an object matches the search, the nested query returns the root parent document.
   * @ext_doc_id query-dsl-nested-query
   */
  nested?: NestedQuery
  /**
   * Returns child documents joined to a specific parent document.
   * @ext_doc_id query-dsl-parent-id-query
   */
  parent_id?: ParentIdQuery
  /**
   * Matches queries stored in an index.
   * @ext_doc_id query-dsl-percolate-query
   */
  percolate?: PercolateQuery
  /**
   * Promotes selected documents to rank higher than those matching a given query.
   * @ext_doc_id query-dsl-pinned-query
   */
  pinned?: PinnedQuery
  /**
   * Returns documents that contain a specific prefix in a provided field.
   * @ext_doc_id query-dsl-prefix-query
   */
  prefix?: SingleKeyDictionary<Field, PrefixQuery>
  /**
   * Returns documents based on a provided query string, using a parser with a strict syntax.
   * @ext_doc_id query-dsl-query-string-query
   */
  query_string?: QueryStringQuery
  /**
   * Returns documents that contain terms within a provided range.
   * @ext_doc_id query-dsl-range-query
   */
  range?: SingleKeyDictionary<Field, RangeQuery>
  /**
   * Boosts the relevance score of documents based on the numeric value of a `rank_feature` or `rank_features` field.
   * @ext_doc_id query-dsl-rank-feature-query
   */
  rank_feature?: RankFeatureQuery
  /**
   * Returns documents that contain terms matching a regular expression.
   * @ext_doc_id query-dsl-regexp-query
   */
  regexp?: SingleKeyDictionary<Field, RegexpQuery>
  rule?: RuleQuery
  /**
   * Filters documents based on a provided script.
   * The script query is typically used in a filter context.
   * @ext_doc_id query-dsl-script-query
   */
  script?: ScriptQuery
  /**
   * Uses a script to provide a custom score for returned documents.
   * @ext_doc_id query-dsl-script-score-query
   */
  script_score?: ScriptScoreQuery
  /**
   * A semantic query to semantic_text field types
   * @availability stack since=8.15.0
   * @availability serverless
   */
  semantic?: SemanticQuery
  /**
   * Queries documents that contain fields indexed using the `shape` type.
   * @ext_doc_id query-dsl-shape-query
   */
  shape?: ShapeQuery
  /**
   * Returns documents based on a provided query string, using a parser with a limited but fault-tolerant syntax.
   * @ext_doc_id query-dsl-simple-query-string-query
   */
  simple_query_string?: SimpleQueryStringQuery
  /**
   * Returns matches which enclose another span query.
   * @ext_doc_id query-dsl-span-containing-query
   */
  span_containing?: SpanContainingQuery
  /**
   * Wrapper to allow span queries to participate in composite single-field span queries by _lying_ about their search field.
   * @ext_doc_id query-dsl-span-field-masking-query
   */
  span_field_masking?: SpanFieldMaskingQuery
  /**
   * Matches spans near the beginning of a field.
   * @ext_doc_id query-dsl-span-first-query
   */
  span_first?: SpanFirstQuery
  /**
   * Allows you to wrap a multi term query (one of `wildcard`, `fuzzy`, `prefix`, `range`, or `regexp` query) as a `span` query, so it can be nested.
   * @ext_doc_id query-dsl-span-multi-term-query
   */
  span_multi?: SpanMultiTermQuery
  /**
   * Matches spans which are near one another.
   * You can specify `slop`, the maximum number of intervening unmatched positions, as well as whether matches are required to be in-order.
   * @ext_doc_id query-dsl-span-near-query
   */
  span_near?: SpanNearQuery
  /**
   * Removes matches which overlap with another span query or which are within x tokens before (controlled by the parameter `pre`) or y tokens after (controlled by the parameter `post`) another span query.
   * @ext_doc_id query-dsl-span-not-query
   */
  span_not?: SpanNotQuery
  /**
   * Matches the union of its span clauses.
   * @ext_doc_id query-dsl-span-or-query
   */
  span_or?: SpanOrQuery
  /**
   * Matches spans containing a term.
   * @ext_doc_id query-dsl-span-term-query
   */
  span_term?: SingleKeyDictionary<Field, SpanTermQuery>
  /**
   * Returns matches which are enclosed inside another span query.
   * @ext_doc_id query-dsl-span-within-query
   */
  span_within?: SpanWithinQuery
  /**
   * Using input query vectors or a natural language processing model to convert a query into a list of token-weight pairs, queries against a sparse vector field.
   * @availability stack since=8.15.0
   * @availability serverless
   * @ext_doc_id query-dsl-sparse-vector-query
   */
  sparse_vector?: SparseVectorQuery
  /**
   * Returns documents that contain an exact term in a provided field.
   * To return a document, the query term must exactly match the queried field's value, including whitespace and capitalization.
   * @ext_doc_id query-dsl-term-query
   */
  term?: SingleKeyDictionary<Field, TermQuery>
  /**
   * Returns documents that contain one or more exact terms in a provided field.
   * To return a document, one or more terms must exactly match a field value, including whitespace and capitalization.
   * @ext_doc_id query-dsl-terms-query
   */
  terms?: TermsQuery
  /**
   * Returns documents that contain a minimum number of exact terms in a provided field.
   * To return a document, a required number of terms must exactly match the field values, including whitespace and capitalization.
   * @ext_doc_id query-dsl-terms-set-query
   */
  terms_set?: SingleKeyDictionary<Field, TermsSetQuery>
  /**
   * Uses a natural language processing model to convert the query text into a list of token-weight pairs which are then used in a query against a sparse vector or rank features field.
   * @availability stack since=8.8.0
   * @availability serverless
   * @ext_doc_id query-dsl-text-expansion-query
   * @deprecated 8.15.0
   */
  text_expansion?: SingleKeyDictionary<Field, TextExpansionQuery>
  /**
   * Supports returning text_expansion query results by sending in precomputed tokens with the query.
   * @availability stack since=8.13.0
   * @availability serverless
   * @ext_doc_id query-dsl-weighted-tokens-query
   * @deprecated 8.15.0
   */
  weighted_tokens?: SingleKeyDictionary<Field, WeightedTokensQuery>
  /**
   * Returns documents that contain terms matching a wildcard pattern.
   * @ext_doc_id query-dsl-wildcard-query
   */
  wildcard?: SingleKeyDictionary<Field, WildcardQuery>
  /**
   * A query that accepts any other query as base64 encoded string.
   * @ext_doc_id query-dsl-wrapper-query
   */
  wrapper?: WrapperQuery

  /**
   * @deprecated 7.0.0 https://www.elastic.co/guide/en/elasticsearch/reference/7.x/removal-of-types.html
   */
  type?: TypeQuery
}

export class FieldLookup {
  /**
   * `id` of the document.
   */
  id: Id
  /**
   * Index from which to retrieve the document.
   */
  index?: IndexName
  /**
   * Name of the field.
   */
  path?: Field
  /**
   * Custom routing value.
   */
  routing?: string
}

export class FieldNameQuery {
  field?: Field
}

export class QueryBase {
  /**
   * Floating point number used to decrease or increase the relevance scores of the query.
   * Boost values are relative to the default value of 1.0.
   * A boost value between 0 and 1.0 decreases the relevance score.
   * A value greater than 1.0 increases the relevance score.
   * @server_default 1.0
   */
  boost?: float
  /** @codegen_name query_name */
  _name?: string
}

export class CombinedFieldsQuery extends QueryBase {
  /**
   * List of fields to search. Field wildcard patterns are allowed. Only `text` fields are supported, and they must all have the same search `analyzer`.
   */
  fields: Field[]
  /**
   * Text to search for in the provided `fields`.
   * The `combined_fields` query analyzes the provided text before performing a search.
   */
  query: string

  /**
   * If true, match phrase queries are automatically created for multi-term synonyms.
   * @server_default true
   */
  auto_generate_synonyms_phrase_query?: boolean

  /**
   * Boolean logic used to interpret text in the query value.
   * @server_default or
   */
  operator?: CombinedFieldsOperator

  /**
   * Minimum number of clauses that must match for a document to be returned.
   * @ext_doc_id query-dsl-minimum-should-match
   */
  minimum_should_match?: MinimumShouldMatch

  /**
   * Indicates whether no documents are returned if the analyzer removes all tokens, such as when using a `stop` filter.
   * @server_default none
   */
  zero_terms_query?: CombinedFieldsZeroTerms
}

/**
 * @ext_doc_id query-dsl-wrapper-query
 */
export class WrapperQuery extends QueryBase {
  /**
   * A base64 encoded query.
   * The binary data format can be any of JSON, YAML, CBOR or SMILE encodings
   */
  query: string
}

export enum CombinedFieldsOperator {
  or,
  and
}

export enum CombinedFieldsZeroTerms {
  /**
   * No documents are returned if the analyzer removes all tokens.
   */
  none,
  /**
   * Returns all documents, similar to a `match_all` query.
   */
  all
}

/**
 * A reference to a field with formatting instructions on how to return the value
 * @shortcut_property field
 */
export class FieldAndFormat {
  /**
   * A wildcard pattern. The request returns values for field names matching this pattern.
   */
  field: Field
  /**
   * The format in which the values are returned.
   */
  format?: string
  include_unmapped?: boolean
}
