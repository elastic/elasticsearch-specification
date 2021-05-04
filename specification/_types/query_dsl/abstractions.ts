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

import { AdditionalProperties } from '@spec_utils/behaviors'
import { SingleKeyDictionary } from '@spec_utils/Dictionary'
import { Field, Id, IndexName, Routing } from '@_types/common'
import { float, long } from '@_types/Numeric'
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
 */
export class QueryContainer {
  bool?: BoolQuery
  boosting?: BoostingQuery
  common?: SingleKeyDictionary<Field, CommonTermsQuery | string>
  /** @since 7.13.0 */
  combined_fields?: CombinedFieldsQuery
  constant_score?: ConstantScoreQuery
  dis_max?: DisMaxQuery
  // TODO?: can be both { __field__ ?: { options } } and { field?: "" ...options }
  // very lenient parser on the server, never documented as such but used in yamltests as such
  distance_feature?:
    | SingleKeyDictionary<Field, DistanceFeatureQuery | string>
    | DistanceFeatureQuery
  exists?: ExistsQuery
  function_score?: FunctionScoreQuery
  fuzzy?: SingleKeyDictionary<Field, FuzzyQuery | string>
  geo_bounding_box?: NamedQuery<GeoBoundingBoxQuery | string>
  geo_distance?: GeoDistanceQuery
  geo_polygon?: NamedQuery<GeoPolygonQuery | string>
  geo_shape?: NamedQuery<GeoShapeQuery | string>
  has_child?: HasChildQuery
  has_parent?: HasParentQuery
  ids?: IdsQuery
  intervals?: NamedQuery<IntervalsQuery | string>
  match?: NamedQuery<MatchQuery | string | float | boolean>
  match_all?: MatchAllQuery
  match_bool_prefix?: NamedQuery<MatchBoolPrefixQuery | string>
  match_none?: MatchNoneQuery
  match_phrase?: NamedQuery<MatchPhraseQuery | string>
  match_phrase_prefix?: NamedQuery<MatchPhrasePrefixQuery | string>
  more_like_this?: MoreLikeThisQuery
  multi_match?: MultiMatchQuery
  nested?: NestedQuery
  parent_id?: ParentIdQuery
  percolate?: PercolateQuery
  pinned?: PinnedQuery
  prefix?: NamedQuery<PrefixQuery | string>
  query_string?: QueryStringQuery
  range?: NamedQuery<RangeQuery>
  rank_feature?: NamedQuery<RankFeatureQuery | string>
  regexp?: NamedQuery<RegexpQuery | string>
  script?: ScriptQuery
  script_score?: ScriptScoreQuery
  shape?: NamedQuery<ShapeQuery | string>
  simple_query_string?: SimpleQueryStringQuery
  span_containing?: SpanContainingQuery
  field_masking_span?: SpanFieldMaskingQuery
  span_first?: SpanFirstQuery
  span_multi?: SpanMultiTermQuery
  span_near?: SpanNearQuery
  span_not?: SpanNotQuery
  span_or?: SpanOrQuery
  span_term?: NamedQuery<SpanTermQuery | string>
  span_within?: SpanWithinQuery
  template?: QueryTemplate
  term?: NamedQuery<TermQuery | string | float | boolean>
  terms?: NamedQuery<TermsQuery | string[] | long[]>
  terms_set?: NamedQuery<TermsSetQuery | string>
  wildcard?: NamedQuery<WildcardQuery | string>

  /**
   * @obsolete 7.0.0
   * @obsolete_description https://www.elastic.co/guide/en/elasticsearch/reference/7.x/removal-of-types.html
   */
  type?: TypeQuery
}

export class QueryTemplate {
  source: string
}

export class FieldLookup {
  id?: Id
  index?: IndexName
  path?: Field
  routing?: Routing
}

export class FieldNameQuery {
  field?: Field
}

export class QueryBase {
  boost?: float
  _name?: string
}

/**
 * Queries can either be in the form of
 * { type: { field: { ...query_details...including_boost_and_name } } }
 * ||
 * { type: { boost: _, _name: _, field: { ...query_details... } } }
 */

export class NamedQuery<TQuery>
  implements AdditionalProperties<string, TQuery> {
  boost?: float
  _name?: string
  ignore_unmapped?: boolean
}

export class CombinedFieldsQuery {
  query: string
  fields: Field[]
  operator?: string
}
