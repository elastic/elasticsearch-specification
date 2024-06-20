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

import { SortOrder } from '@_types/sort'
import { Dictionary, SingleKeyDictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { EmptyObject, FieldValue } from '@_types/common'
import { Field, RelationName, Fields } from '@_types/common'
import {
  GeoDistanceType,
  DistanceUnit,
  GeoHashPrecision,
  GeoTilePrecision,
  GeoLocation,
  GeoBounds
} from '@_types/Geo'
import { integer, float, long, double } from '@_types/Numeric'
import { QueryContainer } from '@_types/query_dsl/abstractions'
import { Script } from '@_types/Scripting'
import { DateString, Time, DateMath } from '@_types/Time'
import { Buckets } from './Aggregate'
import { Aggregation } from './Aggregation'
import { Missing, MissingOrder } from './AggregationContainer'

/**
 * Base type for bucket aggregations. These aggregations also accept sub-aggregations.
 */
// Note: since sub-aggregations exist only for bucket aggregations, this empty base class is a placeholder for client
// code generators that would want to lift the 'AggregationContainer.aggregations' container property here.
export class BucketAggregationBase extends Aggregation {}

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

export type CompositeAggregateKey = Dictionary<Field, FieldValue>

export class CompositeAggregation extends BucketAggregationBase {
  // Must be consistent with CompositeAggregate.after_key
  after?: CompositeAggregateKey
  size?: integer
  sources?: Array<Dictionary<string, CompositeAggregationSource>>
}

export class CompositeAggregationSource {
  terms?: TermsAggregation
  histogram?: HistogramAggregation
  date_histogram?: DateHistogramAggregation
  geotile_grid?: GeoTileGridAggregation
}

export class DateHistogramAggregation extends BucketAggregationBase {
  calendar_interval?: CalendarInterval // CalendarInterval is too restrictive here
  extended_bounds?: ExtendedBounds<FieldDateMath>
  hard_bounds?: ExtendedBounds<FieldDateMath>
  field?: Field
  fixed_interval?: Time // CalendarInterval is too restrictive here
  format?: string
  interval?: Time
  min_doc_count?: integer
  missing?: DateString
  offset?: Time
  order?: AggregateOrder
  params?: Dictionary<string, UserDefinedValue>
  script?: Script
  time_zone?: string
  keyed?: boolean
}

export enum CalendarInterval {
  /** @aliases 1s */
  second,
  /** @aliases 1m */
  minute,
  /** @aliases 1h */
  hour,
  /** @aliases 1d */
  day,
  /** @aliases 1w */
  week,
  /** @aliases 1M */
  month,
  /** @aliases 1q */
  quarter,
  /** @aliases 1Y */
  year
}

export class DateRangeAggregation extends BucketAggregationBase {
  field?: Field
  format?: string
  missing?: Missing
  ranges?: DateRangeExpression[]
  time_zone?: string
  keyed?: boolean
}

/**
 * A date range limit, represented either as a DateMath expression or a number expressed
 * according to the target field's precision.
 *
 * @codegen_names expr, value
 */
// ES: DateRangeAggregationBuilder.innerBuild()
export type FieldDateMath = DateMath | double

export class DateRangeExpression {
  from?: FieldDateMath
  key?: string
  to?: FieldDateMath
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
  filters?: Buckets<QueryContainer>
  other_bucket?: boolean
  other_bucket_key?: string
  keyed?: boolean
}

export class GeoDistanceAggregation extends BucketAggregationBase {
  distance_type?: GeoDistanceType
  field?: Field
  origin?: GeoLocation
  ranges?: AggregationRange[]
  unit?: DistanceUnit
}

export class GeoHashGridAggregation extends BucketAggregationBase {
  bounds?: GeoBounds
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
  order?: AggregateOrder
  script?: Script
  format?: string
  keyed?: boolean
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
  collect_mode?: TermsAggregationCollectMode
  order?: AggregateOrder
  min_doc_count?: long
  shard_min_doc_count?: long
  shard_size?: integer
  show_term_doc_count_error?: boolean
  size?: integer
  terms: MultiTermLookup[]
}

export class MultiTermLookup {
  field: Field
  missing?: Missing
}

export class NestedAggregation extends BucketAggregationBase {
  path?: Field
}

export class ParentAggregation extends BucketAggregationBase {
  type?: RelationName
}

export class RangeAggregation extends BucketAggregationBase {
  field?: Field
  missing?: integer
  ranges?: AggregationRange[]
  script?: Script
  keyed?: boolean
}

export class AggregationRange {
  from?: double | string
  key?: string
  to?: double | string
}

export class RareTermsAggregation extends BucketAggregationBase {
  exclude?: TermsExclude
  field?: Field
  include?: TermsInclude
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
  background_is_superset?: boolean
}

export class MutualInformationHeuristic {
  background_is_superset?: boolean
  include_negatives?: boolean
}

export class PercentageScoreHeuristic {}

export class ScriptedHeuristic {
  script: Script
}

export class SignificantTermsAggregation extends BucketAggregationBase {
  background_filter?: QueryContainer
  chi_square?: ChiSquareHeuristic
  exclude?: TermsExclude
  execution_hint?: TermsAggregationExecutionHint
  field?: Field
  gnd?: GoogleNormalizedDistanceHeuristic
  include?: TermsInclude
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
  exclude?: TermsExclude
  execution_hint?: TermsAggregationExecutionHint
  field?: Field
  filter_duplicate_text?: boolean
  gnd?: GoogleNormalizedDistanceHeuristic
  include?: TermsInclude
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
  exclude?: TermsExclude
  execution_hint?: TermsAggregationExecutionHint
  field?: Field
  include?: TermsInclude
  min_doc_count?: integer
  missing?: Missing
  missing_order?: MissingOrder
  missing_bucket?: boolean
  value_type?: string
  order?: AggregateOrder
  script?: Script
  /**
   * Regulates the certainty a shard has if the term should actually be added to the candidate list or not with respect to the `min_doc_count`.
   * Terms will only be considered if their local shard frequency within the set is higher than the `shard_min_doc_count`.
   */
  shard_min_doc_count?: long
  /**
   * The number of candidate terms produced by each shard.
   * By default, `shard_size` will be automatically estimated based on the number of shards and the `size` parameter.
   */
  shard_size?: integer
  show_term_doc_count_error?: boolean
  size?: integer
}

// Note: ES is very lazy when parsing this data type: it accepts any number of properties in the objects below,
// but will only keep the *last* property in JSON document order and ignore others.
// This means that something like `"order": { "downloads": "desc", "_key": "asc" }` will actually be interpreted
// as `"order": [ { "_key": "asc" } ]`
export type AggregateOrder =
  | SingleKeyDictionary<Field, SortOrder>
  | SingleKeyDictionary<Field, SortOrder>[]

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

/** @codegen_names regexp, terms, partition */
export type TermsInclude = string | string[] | TermsPartition

/** @codegen_names regexp, terms */
export type TermsExclude = string | string[]

export class TermsPartition {
  num_partitions: long
  partition: long
}

export class VariableWidthHistogramAggregation {
  field?: Field
  buckets?: integer
  shard_size?: integer
  initial_buffer?: integer
}
