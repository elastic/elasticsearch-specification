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
import { StopWords } from '@_types/analysis/StopWords'
import {
  Field,
  Fields,
  Id,
  IndexName,
  MinimumShouldMatch,
  Routing,
  ShapeRelation,
  Type,
  VersionNumber,
  VersionType
} from '@_types/common'
import { Distance, GeoShape } from '@_types/Geo'
import { double, float, integer, long } from '@_types/Numeric'
import { Script } from '@_types/Scripting'
import { DateMath, Time } from '@_types/Time'
import { FieldLookup, QueryBase, QueryContainer } from './abstractions'
import { GeoCoordinate } from './geo'
import { AdditionalProperty } from '@spec_utils/behaviors'

export class DistanceFeatureQueryBase<TOrigin, TDistance> extends QueryBase {
  origin: TOrigin
  pivot: TDistance
  field: Field
}

export class GeoDistanceFeatureQuery extends DistanceFeatureQueryBase<
  GeoCoordinate,
  Distance
> {}

export class DateDistanceFeatureQuery extends DistanceFeatureQueryBase<
  DateMath,
  Time
> {}

export type DistanceFeatureQuery =
  | GeoDistanceFeatureQuery
  | DateDistanceFeatureQuery

export class MoreLikeThisQuery extends QueryBase {
  analyzer?: string
  boost_terms?: double
  /** @server_default true */
  fail_on_unsupported_field?: boolean
  fields?: Field[]
  /** @server_default false */
  include?: boolean
  like: Like | Like[]
  max_doc_freq?: integer
  /** @server_default 25 */
  max_query_terms?: integer
  max_word_length?: integer
  /** @server_default 5 */
  min_doc_freq?: integer
  minimum_should_match?: MinimumShouldMatch
  /** @server_default 2 */
  min_term_freq?: integer
  /** @server_default 0 */
  min_word_length?: integer
  per_field_analyzer?: Dictionary<Field, string>
  routing?: Routing
  stop_words?: StopWords
  unlike?: Like | Like[]
  version?: VersionNumber
  /** @server_default 'internal' */
  version_type?: VersionType
}

export class LikeDocument {
  doc?: UserDefinedValue
  fields?: Field[]
  _id?: Id
  _type?: Type
  _index?: IndexName
  per_field_analyzer?: Dictionary<Field, string>
  routing?: Routing
  version?: VersionNumber
  /** @server_default 'internal' */
  version_type?: VersionType
}

/**
 * Text that we want similar documents for or a lookup to a document's field for the text.
 * @doc_url https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-mlt-query.html#_document_input_parameters
 *
 */
export type Like = string | LikeDocument

export class PercolateQuery extends QueryBase {
  document?: UserDefinedValue
  documents?: UserDefinedValue[]
  field: Field
  id?: Id
  index?: IndexName
  name?: string
  preference?: string
  routing?: Routing
  version?: VersionNumber
}

export class PinnedQuery extends QueryBase {
  ids: Id[]
  organic: QueryContainer
}

export class RankFeatureFunction {}

export class RankFeatureFunctionLinear extends RankFeatureFunction {}

export class RankFeatureFunctionLogarithm extends RankFeatureFunction {
  scaling_factor: float
}

export class RankFeatureFunctionSaturation extends RankFeatureFunction {
  pivot?: float
}

export class RankFeatureFunctionSigmoid extends RankFeatureFunction {
  pivot: float
  exponent: float
}

export class RankFeatureQuery extends QueryBase {
  field: Field

  // This is actually an inline optional container: at most one of these fields can exist
  saturation?: RankFeatureFunctionSaturation
  log?: RankFeatureFunctionLogarithm
  linear?: RankFeatureFunctionLinear
  sigmoid?: RankFeatureFunctionSigmoid
}

export class ScriptQuery extends QueryBase {
  script: Script
}

export class ScriptScoreQuery extends QueryBase {
  min_score?: float
  query: QueryContainer
  script: Script
}

// Shape query doesn't follow the common pattern of having a single field-name property
// holding also the query base fields (boost and _name)
export class ShapeQuery
  extends QueryBase
  implements AdditionalProperty<Field, ShapeFieldQuery> {}

export class ShapeFieldQuery {
  ignore_unmapped?: boolean
  indexed_shape?: FieldLookup
  relation?: ShapeRelation
  shape?: GeoShape
}
