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

import { SingleKeyDictionary } from '@spec_utils/Dictionary'
import {
  Field,
  Id,
  IndexName,
  MinimumShouldMatch,
  Routing
} from '@_types/common'
import { float } from '@_types/Numeric'
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
import {
  DistanceFeatureQuery,
  MoreLikeThisQuery,
  PercolateQuery,
  PinnedQuery,
  RankFeatureQuery,
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

/**
 * @variants container
 * @non_exhaustive
 * @doc_id query-dsl
 */
export class QueryContainer {
  /**
   * matches documents matching boolean combinations of other queries.
   * @doc_id query-dsl-bool-query
   */
  bool?: BoolQuery
  /**
   * Returns documents matching a `positive` query while reducing the relevance score of documents that also match a `negative` query.
   * @doc_id query-dsl-boosting-query
   */
  boosting?: BoostingQuery
  /** @deprecated 7.3.0 */
  common?: SingleKeyDictionary<Field, CommonTermsQuery>
  /**
   * The `combined_fields` query supports searching multiple text fields as if their contents had been indexed into one combined field.
   * @doc_id query-dsl-combined-fields-query
   * @availability stack since=7.13.0
   * @availability serverless
   */
  combined_fields?: CombinedFieldsQuery
  /**
   * Wraps a filter query and returns every matching document with a relevance score equal to the `boost` parameter value.
   * @doc_id query-dsl-constant-score-query
   */
  constant_score?: ConstantScoreQuery
  /**
   * Returns documents matching one or more wrapped queries, called query clauses or clauses.
   * If a returned document matches multiple query clauses, the `dis_max` query assigns the document the highest relevance score from any matching clause, plus a tie breaking increment for any additional matching subqueries.
   * @doc_id query-dsl-dis-max-query
   */
  dis_max?: DisMaxQuery
  /**
   * Boosts the relevance score of documents closer to a provided origin date or point.
   * For example, you can use this query to give more weight to documents closer to a certain date or location.
   * @doc_id query-dsl-distance-feature-query
   */
  distance_feature?: DistanceFeatureQuery
  /**
   * Returns documents that contain an indexed value for a field.
   * @doc_id query-dsl-exists-query
   */
  exists?: ExistsQuery
  /**
   * The `function_score` enables you to modify the score of documents that are retrieved by a query.
   * @doc_id query-dsl-function-score-query
   */
  function_score?: FunctionScoreQuery
  /**
   * Returns documents that contain terms similar to the search term, as measured by a Levenshtein edit distance.
   * @doc_id query-dsl-fuzzy-query
   */
  fuzzy?: SingleKeyDictionary<Field, FuzzyQuery>
  /**
   * Matches geo_point and geo_shape values that intersect a bounding box.
   * @doc_id query-dsl-geo-bounding-box-query
   */
  geo_bounding_box?: GeoBoundingBoxQuery
  /**
   * Matches `geo_point` and `geo_shape` values within a given distance of a geopoint.
   * @doc_id query-dsl-geo-distance-query
   */
  geo_distance?: GeoDistanceQuery
  geo_polygon?: GeoPolygonQuery
  /**
   * Filter documents indexed using either the `geo_shape` or the `geo_point` type.
   * @doc_id query-dsl-geo-shape-query
   */
  geo_shape?: GeoShapeQuery
  has_child?: HasChildQuery
  has_parent?: HasParentQuery
  ids?: IdsQuery
  intervals?: SingleKeyDictionary<Field, IntervalsQuery>
  match?: SingleKeyDictionary<Field, MatchQuery>
  match_all?: MatchAllQuery
  match_bool_prefix?: SingleKeyDictionary<Field, MatchBoolPrefixQuery>
  match_none?: MatchNoneQuery
  match_phrase?: SingleKeyDictionary<Field, MatchPhraseQuery>
  match_phrase_prefix?: SingleKeyDictionary<Field, MatchPhrasePrefixQuery>
  more_like_this?: MoreLikeThisQuery
  multi_match?: MultiMatchQuery
  nested?: NestedQuery
  parent_id?: ParentIdQuery
  percolate?: PercolateQuery
  pinned?: PinnedQuery
  prefix?: SingleKeyDictionary<Field, PrefixQuery>
  query_string?: QueryStringQuery
  range?: SingleKeyDictionary<Field, RangeQuery>
  rank_feature?: RankFeatureQuery
  regexp?: SingleKeyDictionary<Field, RegexpQuery>
  script?: ScriptQuery
  script_score?: ScriptScoreQuery
  shape?: ShapeQuery
  simple_query_string?: SimpleQueryStringQuery
  span_containing?: SpanContainingQuery
  field_masking_span?: SpanFieldMaskingQuery
  span_first?: SpanFirstQuery
  span_multi?: SpanMultiTermQuery
  span_near?: SpanNearQuery
  span_not?: SpanNotQuery
  span_or?: SpanOrQuery
  span_term?: SingleKeyDictionary<Field, SpanTermQuery>
  span_within?: SpanWithinQuery
  term?: SingleKeyDictionary<Field, TermQuery>
  terms?: TermsQuery
  terms_set?: SingleKeyDictionary<Field, TermsSetQuery>
  /**
   * @availability stack since=8.8.0
   * @availability serverless
   */
  text_expansion?: TextExpansionQuery
  wildcard?: SingleKeyDictionary<Field, WildcardQuery>
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
  routing?: Routing
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
   * @doc_id query-dsl-minimum-should-match
   */
  minimum_should_match?: MinimumShouldMatch

  /**
   * Indicates whether no documents are returned if the analyzer removes all tokens, such as when using a `stop` filter.
   * @server_default none
   */
  zero_terms_query?: CombinedFieldsZeroTerms
}

export class WrapperQuery extends QueryBase {
  /** A base64 encoded query. The binary data format can be any of JSON, YAML, CBOR or SMILE encodings */
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
   * Wildcard pattern. The request returns values for field names matching this pattern.
   */
  field: Field
  /**
   * Format in which the values are returned.
   */
  format?: string
  include_unmapped?: boolean
}
