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

@class_serializer('QueryContainerInterfaceFormatter')
class QueryContainer {
  bool?: BoolQuery
  boosting?: BoostingQuery
  common?: SingleKeyDictionary<Union<CommonTermsQuery, string>>
  constant_score?: ConstantScoreQuery
  dis_max?: DisMaxQuery
  // TODO?: can be both { __field__ ?: { options } } and { field?: "" ...options }
  // very lenient parser on the server, never documented as such but used in yamltests as such
  distance_feature?:
    | SingleKeyDictionary<Union<DistanceFeatureQuery, string>>
    | DistanceFeatureQuery
  exists?: ExistsQuery
  function_score?: FunctionScoreQuery
  fuzzy?: SingleKeyDictionary<Union<FuzzyQuery, string>>
  geo_bounding_box?: NamedQuery<Union<GeoBoundingBoxQuery, string>>
  geo_distance?: NamedQuery<Union<GeoDistanceQuery, string>>
  geo_polygon?: NamedQuery<Union<GeoPolygonQuery, string>>
  geo_shape?: NamedQuery<GeoShapeQuery | string>
  has_child?: HasChildQuery
  has_parent?: HasParentQuery
  ids?: IdsQuery
  intervals?: NamedQuery<Union<IntervalsQuery, string>>
  is_conditionless?: boolean
  is_strict?: boolean
  is_verbatim?: boolean
  is_writable?: boolean
  match?: NamedQuery<MatchQuery | string | float | boolean>
  match_all?: MatchAllQuery
  match_bool_prefix?: NamedQuery<Union<MatchBoolPrefixQuery, string>>
  match_none?: MatchNoneQuery
  match_phrase?: NamedQuery<Union<MatchPhraseQuery, string>>
  match_phrase_prefix?: NamedQuery<Union<MatchPhrasePrefixQuery, string>>
  more_like_this?: MoreLikeThisQuery
  multi_match?: MultiMatchQuery
  nested?: NestedQuery
  parent_id?: ParentIdQuery
  percolate?: PercolateQuery
  pinned?: PinnedQuery
  prefix?: NamedQuery<Union<PrefixQuery, string>>
  query_string?: QueryStringQuery
  range?: NamedQuery<RangeQuery>
  rank_feature?: NamedQuery<Union<RankFeatureQuery, string>>
  regexp?: NamedQuery<Union<RegexpQuery, string>>
  script?: ScriptQuery
  script_score?: ScriptScoreQuery
  shape?: NamedQuery<Union<ShapeQuery, string>>
  simple_query_string?: SimpleQueryStringQuery
  span_containing?: SpanContainingQuery
  field_masking_span?: SpanFieldMaskingQuery
  span_first?: SpanFirstQuery
  span_multi?: SpanMultiTermQuery
  span_near?: SpanNearQuery
  span_not?: SpanNotQuery
  span_or?: SpanOrQuery
  span_term?: NamedQuery<Union<SpanTermQuery, string>>
  span_within?: SpanWithinQuery
  term?: NamedQuery<TermQuery | string | float | boolean>
  terms?: NamedQuery<TermsQuery | string[] | long[]>
  terms_set?: NamedQuery<Union<TermsSetQuery, string>>
  wildcard?: NamedQuery<Union<WildcardQuery, string>>

  /**
   * @obsolete 7.0.0
   * @obsolete_description https://www.elastic.co/guide/en/elasticsearch/reference/7.x/removal-of-types.html
   */
  type?: TypeQuery
}
