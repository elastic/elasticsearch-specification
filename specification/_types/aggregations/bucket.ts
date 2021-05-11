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

import { SortOrder } from '@global/search/_types/sort'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { Field, Fields, RelationName } from '@_types/common'
import {
  DistanceUnit,
  GeoDistanceType,
  GeoHashPrecision,
  GeoTilePrecision
} from '@_types/Geo'
import { double, float, integer, long } from '@_types/Numeric'
import { QueryContainer } from '@_types/query_dsl/abstractions'
import { BoundingBox, GeoLocation } from '@_types/query_dsl/geo'
import { Script } from '@_types/Scripting'
import { DateMath, DateString, Time } from '@_types/Time'
import { GeoBounds } from './Aggregate'
import { Aggregation } from './Aggregation'
import { AggregationContainer, Missing } from './AggregationContainer'

export class BucketAggregationBase extends Aggregation {
  aggregations?: Dictionary<string, AggregationContainer>
}

export class AdjacencyMatrixAggregation extends BucketAggregationBase {
  filters?: Dictionary<string, QueryContainer>
}

export class AutoDateHistogramAggregation extends BucketAggregationBase {
  buckets?: integer
  field?: Field
  format?: string
  minimum_interval?: MinimumInterval
  missing?: DateString
  offset?: string
  params?: Dictionary<string, UserDefinedValue>
  script?: Script
  time_zone?: string
}

export enum MinimumInterval {
  second = 0,
  minute = 1,
  hour = 2,
  day = 3,
  month = 4,
  year = 5
}

export class ChildrenAggregation extends BucketAggregationBase {
  type?: RelationName
}

export class CompositeAggregation extends BucketAggregationBase {
  after?: Dictionary<string, string | float | null>
  size?: integer
  sources?: Array<Dictionary<string, CompositeAggregationSource>>
}

export class CompositeAggregationSource {
  // field: Field;
  // missing_bucket: boolean;
  // name: string;
  // order: SortOrder;
  // source_type: string;
  terms?: TermsAggregation
  histogram?: HistogramAggregation
  date_histogram?: DateHistogramAggregation
  geotile_grid?: GeoTileGridAggregation
}

export class DateHistogramAggregation extends BucketAggregationBase {
  calendar_interval?: DateInterval | Time
  extended_bounds?: ExtendedBounds<DateMath | long>
  hard_bounds?: ExtendedBounds<DateMath | long>
  field?: Field
  fixed_interval?: DateInterval | Time
  format?: string
  interval?: DateInterval | Time
  min_doc_count?: integer
  missing?: DateString
  offset?: Time
  order?: HistogramOrder
  params?: Dictionary<string, UserDefinedValue>
  script?: Script
  time_zone?: string
}

export enum DateInterval {
  second = 0,
  minute = 1,
  hour = 2,
  day = 3,
  week = 4,
  month = 5,
  quarter = 6,
  year = 7
}

export class DateRangeAggregation extends BucketAggregationBase {
  field?: Field
  format?: string
  missing?: Missing
  ranges?: DateRangeExpression[]
  time_zone?: string
}

export class DateRangeExpression {
  from?: DateMath | float
  from_as_string?: string
  to_as_string?: string
  key?: string
  to?: DateMath | float
  doc_count?: long
}

export class DiversifiedSamplerAggregation extends BucketAggregationBase {
  execution_hint?: SamplerAggregationExecutionHint
  max_docs_per_value?: integer
  script?: Script
  shard_size?: integer
  field?: Field
}

export enum SamplerAggregationExecutionHint {
  map = 0,
  global_ordinals = 1,
  bytes_hash = 2
}

export class FiltersAggregation extends BucketAggregationBase {
  filters?: Dictionary<string, QueryContainer> | QueryContainer[]
  other_bucket?: boolean
  other_bucket_key?: string
}

export class GeoDistanceAggregation extends BucketAggregationBase {
  distance_type?: GeoDistanceType
  field?: Field
  origin?: GeoLocation | string
  ranges?: AggregationRange[]
  unit?: DistanceUnit
}

export class GeoHashGridAggregation extends BucketAggregationBase {
  bounds?: BoundingBox
  field?: Field
  precision?: GeoHashPrecision
  shard_size?: integer
  size?: integer
}

export class GeoTileGridAggregation extends BucketAggregationBase {
  field?: Field
  precision?: GeoTilePrecision
  shard_size?: integer
  size?: integer
  bounds?: GeoBounds
}

export class GlobalAggregation extends BucketAggregationBase {}

export class ExtendedBounds<T> {
  max: T
  min: T
}

export class HistogramAggregation extends BucketAggregationBase {
  extended_bounds?: ExtendedBounds<double>
  hard_bounds?: ExtendedBounds<double>
  field?: Field
  interval?: double
  min_doc_count?: integer
  missing?: double
  offset?: double
  order?: HistogramOrder
  script?: Script
  format?: string
}

export class HistogramOrder {
  _count?: SortOrder
  _key?: SortOrder
}

export class IpRangeAggregation extends BucketAggregationBase {
  field?: Field
  ranges?: IpRangeAggregationRange[]
}

export class IpRangeAggregationRange {
  from?: string
  mask?: string
  to?: string
}

export class MissingAggregation extends BucketAggregationBase {
  field?: Field
  missing?: Missing
}

export class MultiTermsAggregation extends BucketAggregationBase {
  terms: MultiTermLookup[]
}

export class MultiTermLookup {
  field: Field
}

export class NestedAggregation extends BucketAggregationBase {
  path?: Field
}

export class ParentAggregation extends BucketAggregationBase {
  type?: RelationName
}

export class RangeAggregation extends BucketAggregationBase {
  field?: Field
  ranges?: AggregationRange[]
  script?: Script
}

export class AggregationRange {
  from?: double | string
  key?: string
  to?: double | string
}

export class RareTermsAggregation extends BucketAggregationBase {
  exclude?: string | string[]
  field?: Field
  include?: string | string[] | TermsInclude
  max_doc_count?: long
  missing?: Missing
  precision?: double
  value_type?: string
}

export class ReverseNestedAggregation extends BucketAggregationBase {
  path?: Field
}

export class SamplerAggregation extends BucketAggregationBase {
  shard_size?: integer
}

export class ChiSquareHeuristic {
  background_is_superset: boolean
  include_negatives: boolean
}

export class GoogleNormalizedDistanceHeuristic {
  background_is_superset: boolean
}

export class MutualInformationHeuristic {
  background_is_superset: boolean
  include_negatives: boolean
}

export class PercentageScoreHeuristic {}

export class ScriptedHeuristic {
  script: Script
}

export class SignificantTermsAggregation extends BucketAggregationBase {
  background_filter?: QueryContainer
  chi_square?: ChiSquareHeuristic
  exclude?: string | string[]
  execution_hint?: TermsAggregationExecutionHint
  field?: Field
  gnd?: GoogleNormalizedDistanceHeuristic
  include?: string | string[]
  min_doc_count?: long
  mutual_information?: MutualInformationHeuristic
  percentage?: PercentageScoreHeuristic
  script_heuristic?: ScriptedHeuristic
  shard_min_doc_count?: long
  shard_size?: integer
  size?: integer
}

export class SignificantTextAggregation extends BucketAggregationBase {
  background_filter?: QueryContainer
  chi_square?: ChiSquareHeuristic
  exclude?: string | string[]
  execution_hint?: TermsAggregationExecutionHint
  field?: Field
  filter_duplicate_text?: boolean
  gnd?: GoogleNormalizedDistanceHeuristic
  include?: string | string[]
  min_doc_count?: long
  mutual_information?: MutualInformationHeuristic
  percentage?: PercentageScoreHeuristic
  script_heuristic?: ScriptedHeuristic
  shard_min_doc_count?: long
  shard_size?: integer
  size?: integer
  source_fields?: Fields
}

export class TermsAggregation extends BucketAggregationBase {
  collect_mode?: TermsAggregationCollectMode
  exclude?: string | string[]
  execution_hint?: TermsAggregationExecutionHint
  field?: Field
  include?: string | string[] | TermsInclude
  min_doc_count?: integer
  missing?: Missing
  missing_bucket?: boolean
  value_type?: string
  order?: TermsAggregationOrder
  script?: Script
  shard_size?: integer
  show_term_doc_count_error?: boolean
  size?: integer
}

export type TermsAggregationOrder =
  | SortOrder
  | Dictionary<string, SortOrder>
  | Dictionary<string, SortOrder>[]

export enum TermsAggregationCollectMode {
  depth_first = 0,
  breadth_first = 1
}

export enum TermsAggregationExecutionHint {
  map = 0,
  global_ordinals = 1,
  global_ordinals_hash = 2,
  global_ordinals_low_cardinality = 3
}

export class TermsInclude {
  num_partitions: long
  partition: long
}

export class VariableWidthHistogramAggregation {
  field?: Field
  buckets?: integer
  shard_size?: integer
  initial_buffer?: integer
}
