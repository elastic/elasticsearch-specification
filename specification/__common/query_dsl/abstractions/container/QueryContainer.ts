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

import { SingleKeyDictionary } from "../../../../__spec_utils/Dictionary";
import { float, long } from "../../../common";
import { BoolQuery } from "../../compound/bool/BoolQuery";
import { BoostingQuery } from "../../compound/boosting/BoostingQuery";
import { ConstantScoreQuery } from "../../compound/constant_score/ConstantScoreQuery";
import { DisMaxQuery } from "../../compound/dismax/DisMaxQuery";
import { FunctionScoreQuery } from "../../compound/function_score/FunctionScoreQuery";
import { CommonTermsQuery } from "../../full_text/common_terms/CommonTermsQuery";
import { IntervalsQuery } from "../../full_text/intervals/IntervalsQuery";
import { MatchQuery } from "../../full_text/match/MatchQuery";
import { MatchBoolPrefixQuery } from "../../full_text/match_bool_prefix/MatchBoolPrefixQuery";
import { MatchPhraseQuery } from "../../full_text/match_phrase/MatchPhraseQuery";
import { MatchPhrasePrefixQuery } from "../../full_text/match_phrase_prefix/MatchPhrasePrefixQuery";
import { MultiMatchQuery } from "../../full_text/multi_match/MultiMatchQuery";
import { QueryStringQuery } from "../../full_text/query_string/QueryStringQuery";
import { SimpleQueryStringQuery } from "../../full_text/simple_query_string/SimpleQueryStringQuery";
import { GeoBoundingBoxQuery } from "../../geo/bounding_box/GeoBoundingBoxQuery";
import { GeoDistanceQuery } from "../../geo/distance/GeoDistanceQuery";
import { GeoPolygonQuery } from "../../geo/polygon/GeoPolygonQuery";
import { GeoShapeQuery } from "../../geo/shape/GeoShapeQuery";
import { HasChildQuery } from "../../joining/has_child/HasChildQuery";
import { HasParentQuery } from "../../joining/has_parent/HasParentQuery";
import { NestedQuery } from "../../joining/nested/NestedQuery";
import { ParentIdQuery } from "../../joining/parent_id/ParentIdQuery";
import { MatchAllQuery } from "../../MatchAllQuery";
import { MatchNoneQuery } from "../../MatchNoneQuery";
import { SpanContainingQuery } from "../../span/containing/SpanContainingQuery";
import { SpanFieldMaskingQuery } from "../../span/field_masking/SpanFieldMaskingQuery";
import { SpanFirstQuery } from "../../span/first/SpanFirstQuery";
import { SpanMultiTermQuery } from "../../span/multi_term/SpanMultiTermQuery";
import { SpanNearQuery } from "../../span/near/SpanNearQuery";
import { SpanNotQuery } from "../../span/not/SpanNotQuery";
import { SpanOrQuery } from "../../span/or/SpanOrQuery";
import { SpanTermQuery } from "../../span/term/SpanTermQuery";
import { SpanWithinQuery } from "../../span/within/SpanWithinQuery";
import { DistanceFeatureQuery } from "../../specialized/distance_feature/DistanceFeatureQuery";
import { MoreLikeThisQuery } from "../../specialized/more_like_this/MoreLikeThisQuery";
import { PercolateQuery } from "../../specialized/percolate/PercolateQuery";
import { PinnedQuery } from "../../specialized/pinned/PinnedQuery";
import { RankFeatureQuery } from "../../specialized/rank_feature/RankFeatureQuery";
import { ScriptQuery } from "../../specialized/script/ScriptQuery";
import { ScriptScoreQuery } from "../../specialized/script_score/ScriptScoreQuery";
import { ShapeQuery } from "../../specialized/shape/ShapeQuery";
import { ExistsQuery } from "../../term_level/exists/ExistsQuery";
import { FuzzyQuery } from "../../term_level/fuzzy/FuzzyQuery";
import { IdsQuery } from "../../term_level/ids/IdsQuery";
import { PrefixQuery } from "../../term_level/prefix/PrefixQuery";
import { RangeQuery } from "../../term_level/range/RangeQuery";
import { RegexpQuery } from "../../term_level/regexp/RegexpQuery";
import { TermQuery } from "../../term_level/term/TermQuery";
import { TermsQuery } from "../../term_level/terms/TermsQuery";
import { TermsSetQuery } from "../../term_level/terms_set/TermsSetQuery";
import { TypeQuery } from "../../term_level/type/TypeQuery";
import { WildcardQuery } from "../../term_level/wildcard/WildcardQuery";
import { NamedQuery } from "../query/Query";
import { QueryTemplate } from "./QueryTemplate";

export class QueryContainer {
  bool?: BoolQuery;
  boosting?: BoostingQuery;
  common?: SingleKeyDictionary<CommonTermsQuery | string>;
  constant_score?: ConstantScoreQuery;
  dis_max?: DisMaxQuery;
  // TODO?: can be both { __field__ ?: { options } } and { field?: "" ...options }
  // very lenient parser on the server, never documented as such but used in yamltests as such
  distance_feature?:
    | SingleKeyDictionary<DistanceFeatureQuery | string>
    | DistanceFeatureQuery;
  exists?: ExistsQuery;
  function_score?: FunctionScoreQuery;
  fuzzy?: SingleKeyDictionary<FuzzyQuery | string>;
  geo_bounding_box?: NamedQuery<GeoBoundingBoxQuery | string>;
  geo_distance?: NamedQuery<GeoDistanceQuery | string>;
  geo_polygon?: NamedQuery<GeoPolygonQuery | string>;
  geo_shape?: NamedQuery<GeoShapeQuery | string>;
  has_child?: HasChildQuery;
  has_parent?: HasParentQuery;
  ids?: IdsQuery;
  intervals?: NamedQuery<IntervalsQuery | string>;
  is_conditionless?: boolean;
  is_strict?: boolean;
  is_verbatim?: boolean;
  is_writable?: boolean;
  match?: NamedQuery<MatchQuery | string | float | boolean>;
  match_all?: MatchAllQuery;
  match_bool_prefix?: NamedQuery<MatchBoolPrefixQuery | string>;
  match_none?: MatchNoneQuery;
  match_phrase?: NamedQuery<MatchPhraseQuery | string>;
  match_phrase_prefix?: NamedQuery<MatchPhrasePrefixQuery | string>;
  more_like_this?: MoreLikeThisQuery;
  multi_match?: MultiMatchQuery;
  nested?: NestedQuery;
  parent_id?: ParentIdQuery;
  percolate?: PercolateQuery;
  pinned?: PinnedQuery;
  prefix?: NamedQuery<PrefixQuery | string>;
  query_string?: QueryStringQuery;
  range?: NamedQuery<RangeQuery>;
  rank_feature?: NamedQuery<RankFeatureQuery | string>;
  regexp?: NamedQuery<RegexpQuery | string>;
  script?: ScriptQuery;
  script_score?: ScriptScoreQuery;
  shape?: NamedQuery<ShapeQuery | string>;
  simple_query_string?: SimpleQueryStringQuery;
  span_containing?: SpanContainingQuery;
  field_masking_span?: SpanFieldMaskingQuery;
  span_first?: SpanFirstQuery;
  span_multi?: SpanMultiTermQuery;
  span_near?: SpanNearQuery;
  span_not?: SpanNotQuery;
  span_or?: SpanOrQuery;
  span_term?: NamedQuery<SpanTermQuery | string>;
  span_within?: SpanWithinQuery;
  template?: QueryTemplate;
  term?: NamedQuery<TermQuery | string | float | boolean>;
  terms?: NamedQuery<TermsQuery | string[] | long[]>;
  terms_set?: NamedQuery<TermsSetQuery | string>;
  wildcard?: NamedQuery<WildcardQuery | string>;

  /**
   * @obsolete 7.0.0
   * @obsolete_description https://www.elastic.co/guide/en/elasticsearch/reference/7.x/removal-of-types.html
   */
  type?: TypeQuery;
}
