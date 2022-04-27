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

/**
 * @variants container
 * @non_exhaustive
 */
export class QueryContainer {
  bool?: BoolQuery
  boosting?: BoostingQuery
  /** @deprecated 7.3.0 */
  common?: SingleKeyDictionary<Field, CommonTermsQuery>
  /** @since 7.13.0 */
  combined_fields?: CombinedFieldsQuery
  constant_score?: ConstantScoreQuery
  dis_max?: DisMaxQuery
  distance_feature?: DistanceFeatureQuery
  exists?: ExistsQuery
  function_score?: FunctionScoreQuery
  fuzzy?: SingleKeyDictionary<Field, FuzzyQuery>
  geo_bounding_box?: GeoBoundingBoxQuery
  geo_distance?: GeoDistanceQuery
  geo_polygon?: GeoPolygonQuery
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
  wildcard?: SingleKeyDictionary<Field, WildcardQuery>
  wrapper?: WrapperQuery

  /**
   * @deprecated 7.0.0 https://www.elastic.co/guide/en/elasticsearch/reference/7.x/removal-of-types.html
   */
  type?: TypeQuery
}

export class FieldLookup {
  id: Id
  index?: IndexName
  path?: Field
  routing?: Routing
}

export class FieldNameQuery {
  field?: Field
}

export class QueryBase {
  boost?: float
  /** @codegen_name query_name */
  _name?: string
}

export class CombinedFieldsQuery extends QueryBase {
  fields: Field[]
  query: string

  /** @server_default true */
  auto_generate_synonyms_phrase_query?: boolean

  /** @server_default or */
  operator?: CombinedFieldsOperator

  minimum_should_match?: MinimumShouldMatch

  /** @server_default none */
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
  none,
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
