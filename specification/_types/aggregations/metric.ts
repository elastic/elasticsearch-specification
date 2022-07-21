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

import { Highlight } from '@global/search/_types/highlighting'
import { SortOrder, Sort } from '@_types/sort'
import { SourceConfig } from '@global/search/_types/SourceFilter'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { Field, Fields } from '@_types/common'
import { double, integer, long } from '@_types/Numeric'
import { QueryContainer } from '@_types/query_dsl/abstractions'
import { Script, ScriptField } from '@_types/Scripting'
import { Aggregation } from './Aggregation'
import { Missing } from './AggregationContainer'
import { CalendarInterval } from './bucket'
import { GeoLocation } from '@_types/Geo'

export class MetricAggregationBase {
  field?: Field
  missing?: Missing
  script?: Script
}

export class FormatMetricAggregationBase extends MetricAggregationBase {
  format?: string
}

export class FormattableMetricAggregation extends MetricAggregationBase {
  format?: string
}

export class AverageAggregation extends FormatMetricAggregationBase {}

export class BoxplotAggregation extends MetricAggregationBase {
  compression?: double
}

export enum CardinalityExecutionMode {
  global_ordinals,
  segment_ordinals,
  direct,
  save_memory_heuristic,
  save_time_heuristic
}

export class CardinalityAggregation extends MetricAggregationBase {
  precision_threshold?: integer
  rehash?: boolean
  execution_hint?: CardinalityExecutionMode
}

export class ExtendedStatsAggregation extends FormatMetricAggregationBase {
  sigma?: double
}

export class GeoBoundsAggregation extends MetricAggregationBase {
  wrap_longitude?: boolean
}

export class GeoCentroidAggregation extends MetricAggregationBase {
  count?: long
  location?: GeoLocation
}

export class GeoLineAggregation {
  point: GeoLinePoint
  sort: GeoLineSort
  include_sort?: boolean
  sort_order?: SortOrder
  size?: integer
}

export class GeoLineSort {
  field: Field
}

export class GeoLinePoint {
  field: Field
}

export class MaxAggregation extends FormatMetricAggregationBase {}

export class MedianAbsoluteDeviationAggregation extends FormatMetricAggregationBase {
  compression?: double
}

export class MinAggregation extends FormatMetricAggregationBase {}

export class PercentileRanksAggregation extends FormatMetricAggregationBase {
  keyed?: boolean
  values?: double[] | null
  hdr?: HdrMethod
  tdigest?: TDigest
}

export class PercentilesAggregation extends FormatMetricAggregationBase {
  keyed?: boolean
  percents?: double[]
  hdr?: HdrMethod
  tdigest?: TDigest
}

export class HdrMethod {
  number_of_significant_value_digits?: integer
}

export class TDigest {
  compression?: integer
}

export class RateAggregation extends FormatMetricAggregationBase {
  unit?: CalendarInterval
  mode?: RateMode
}

export enum RateMode {
  sum,
  value_count
}

export class ScriptedMetricAggregation extends MetricAggregationBase {
  combine_script?: Script
  init_script?: Script
  map_script?: Script
  params?: Dictionary<string, UserDefinedValue>
  reduce_script?: Script
}

export class StatsAggregation extends FormatMetricAggregationBase {}

export class StringStatsAggregation extends MetricAggregationBase {
  show_distribution?: boolean
}

export class SumAggregation extends FormatMetricAggregationBase {}

export class TTestAggregation extends Aggregation {
  a?: TestPopulation
  b?: TestPopulation
  type?: TTestType
}

export class TestPopulation {
  field: Field
  script?: Script
  filter?: QueryContainer
}

export enum TTestType {
  paired,
  homoscedastic,
  heteroscedastic
}

export class TopHitsAggregation extends MetricAggregationBase {
  docvalue_fields?: Fields
  explain?: boolean
  from?: integer
  highlight?: Highlight
  script_fields?: Dictionary<string, ScriptField>
  size?: integer
  sort?: Sort
  _source?: SourceConfig
  stored_fields?: Fields
  track_scores?: boolean
  version?: boolean
  seq_no_primary_term?: boolean
}

export class TopMetricsAggregation extends MetricAggregationBase {
  metrics?: TopMetricsValue | TopMetricsValue[]
  size?: integer
  sort?: Sort
}

export class TopMetricsValue {
  field: Field
}

export class ValueCountAggregation extends FormattableMetricAggregation {}

export enum ValueType {
  string = 0,
  long = 1,
  double = 2,
  number = 3,
  date = 4,
  date_nanos = 5,
  ip = 6,
  numeric = 7,
  geo_point = 8,
  boolean = 9
}

export class WeightedAverageAggregation extends Aggregation {
  format?: string
  value?: WeightedAverageValue
  value_type?: ValueType
  weight?: WeightedAverageValue
}

export class WeightedAverageValue {
  field?: Field
  missing?: double
  script?: Script
}
