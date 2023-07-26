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
  VersionNumber,
  VersionType
} from '@_types/common'
import { Distance, GeoLocation, GeoShape, GeoShapeRelation } from '@_types/Geo'
import { double, float, integer, long } from '@_types/Numeric'
import { Script } from '@_types/Scripting'
import { DateMath, Duration } from '@_types/Time'
import { FieldLookup, QueryBase, QueryContainer } from './abstractions'
import { AdditionalProperty } from '@spec_utils/behaviors'

export class DistanceFeatureQueryBase<TOrigin, TDistance> extends QueryBase {
  /**
   * Date or point of origin used to calculate distances.
   * If the `field` value is a `date` or `date_nanos` field, the `origin` value must be a date.
   * Date Math, such as `now-1h`, is supported.
   * If the field value is a `geo_point` field, the `origin` value must be a geopoint.
   */
  origin: TOrigin
  /**
   * Distance from the `origin` at which relevance scores receive half of the `boost` value.
   * If the `field` value is a `date` or `date_nanos` field, the `pivot` value must be a time unit, such as `1h` or `10d`. If the `field` value is a `geo_point` field, the `pivot` value must be a distance unit, such as `1km` or `12m`.
   */
  pivot: TDistance
  /**
   * Name of the field used to calculate distances. This field must meet the following criteria:
   * be a `date`, `date_nanos` or `geo_point` field;
   * have an `index` mapping parameter value of `true`, which is the default;
   * have an `doc_values` mapping parameter value of `true`, which is the default.
   */
  field: Field
}

export class GeoDistanceFeatureQuery extends DistanceFeatureQueryBase<
  GeoLocation,
  Distance
> {}

export class DateDistanceFeatureQuery extends DistanceFeatureQueryBase<
  DateMath,
  Duration
> {}

/** @codegen_names geo, date */
// Note: deserialization depends on value types
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
  _index?: IndexName
  per_field_analyzer?: Dictionary<Field, string>
  routing?: Routing
  version?: VersionNumber
  /** @server_default 'internal' */
  version_type?: VersionType
}

/**
 * Text that we want similar documents for or a lookup to a document's field for the text.
 * @doc_id document-input-parameters
 * @codegen_names text, document
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

/**
 * @variants container
 */
export class PinnedQuery extends QueryBase {
  /** @variant container_property */
  organic: QueryContainer
  ids?: Id[]
  docs?: PinnedDoc[]
}

export class PinnedDoc {
  _id: Id
  _index: IndexName
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
  implements AdditionalProperty<Field, ShapeFieldQuery>
{
  ignore_unmapped?: boolean
}

export class ShapeFieldQuery {
  indexed_shape?: FieldLookup
  relation?: GeoShapeRelation
  shape?: GeoShape
}

/**
 * @variants container
 */
export class RuleQuery extends QueryBase {
  /** @variant container_property */
  organic: QueryContainer
  /** @variant container_property */
  ruleset_id: Id
  /** @variant container_property */
  match_criteria: UserDefinedValue
}
