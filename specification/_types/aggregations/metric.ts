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

import { Field, Fields } from '@_types/common'
import { GeoLocation } from '@_types/Geo'
import { double, integer, long } from '@_types/Numeric'
import { FieldAndFormat, QueryContainer } from '@_types/query_dsl/abstractions'
import { Script, ScriptField } from '@_types/Scripting'
import { Sort, SortOrder } from '@_types/sort'
import { Highlight } from '@global/search/_types/highlighting'
import { SourceConfig } from '@global/search/_types/SourceFilter'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { Aggregation } from './Aggregation'
import { Missing } from './AggregationContainer'
import { CalendarInterval } from './bucket'

export class MetricAggregationBase {
  /**
   * The field on which to run the aggregation.
   */
  field?: Field
  /**
   * The value to apply to documents that do not have a value.
   * By default, documents without a value are ignored.
   */
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
  /**
   * Limits the maximum number of nodes used by the underlying TDigest algorithm to `20 * compression`, enabling control of memory usage and approximation error.
   */
  compression?: double
  /**
   * The default implementation of TDigest is optimized for performance, scaling to millions or even billions of sample values while maintaining acceptable accuracy levels (close to 1% relative error for millions of samples in some cases).
   * To use an implementation optimized for accuracy, set this parameter to high_accuracy instead.
   * @server_default default
   */
  execution_hint?: TDigestExecutionHint
}

export enum CardinalityExecutionMode {
  /**
   * Run the aggregation by using global ordinals of the field and resolving those values after finishing a shard.
   */
  global_ordinals,
  /**
   * Run the aggregation by using segment ordinal values and resolving those values after each segment.
   */
  segment_ordinals,
  /**
   * Run the aggregation by using field values directly.
   */
  direct,
  /**
   * Heuristic-based mode, default in Elasticsearch 8.3 and earlier.
   */
  save_memory_heuristic,
  /**
   * Heuristic-based mode, default in Elasticsearch 8.4 and later.
   */
  save_time_heuristic
}

export class CardinalityAggregation extends MetricAggregationBase {
  /**
   * A unique count below which counts are expected to be close to accurate.
   * This allows to trade memory for accuracy.
   * @server_default 3000
   */
  precision_threshold?: integer
  rehash?: boolean
  /**
   * Mechanism by which cardinality aggregations is run.
   */
  execution_hint?: CardinalityExecutionMode
}

export class ExtendedStatsAggregation extends FormatMetricAggregationBase {
  /**
   * The number of standard deviations above/below the mean to display.
   */
  sigma?: double
}

export class CartesianBoundsAggregation extends MetricAggregationBase {}

export class CartesianCentroidAggregation extends MetricAggregationBase {}

/**
 * @ext_doc_id search-aggregations-metrics-geobounds-aggregation
 */
export class GeoBoundsAggregation extends MetricAggregationBase {
  /**
   * Specifies whether the bounding box should be allowed to overlap the international date line.
   * @server_default true
   */
  wrap_longitude?: boolean
}

export class GeoCentroidAggregation extends MetricAggregationBase {
  count?: long
  location?: GeoLocation
}

export class GeoLineAggregation {
  /**
   * The name of the geo_point field.
   */
  point: GeoLinePoint
  /**
   * The name of the numeric field to use as the sort key for ordering the points.
   * When the `geo_line` aggregation is nested inside a `time_series` aggregation, this field defaults to `@timestamp`, and any other value will result in error.
   */
  sort: GeoLineSort
  /**
   * When `true`, returns an additional array of the sort values in the feature properties.
   */
  include_sort?: boolean
  /**
   * The order in which the line is sorted (ascending or descending).
   * @server_default asc
   */
  sort_order?: SortOrder
  /**
   * The maximum length of the line represented in the aggregation.
   * Valid sizes are between 1 and 10000.
   * @server_default 10000
   */
  size?: integer
}

export class GeoLineSort {
  /**
   * The name of the numeric field to use as the sort key for ordering the points.
   */
  field: Field
}

export class GeoLinePoint {
  /**
   * The name of the geo_point field.
   */
  field: Field
}

export class MaxAggregation extends FormatMetricAggregationBase {}

/**
 * @ext_doc_id search-aggregations-metrics-median-absolute-deviation-aggregation
 */
export class MedianAbsoluteDeviationAggregation extends FormatMetricAggregationBase {
  /**
   * Limits the maximum number of nodes used by the underlying TDigest algorithm to `20 * compression`, enabling control of memory usage and approximation error.
   * @server_default 1000
   */
  compression?: double
  /**
   * The default implementation of TDigest is optimized for performance, scaling to millions or even billions of sample values while maintaining acceptable accuracy levels (close to 1% relative error for millions of samples in some cases).
   * To use an implementation optimized for accuracy, set this parameter to high_accuracy instead.
   * @server_default default
   */
  execution_hint?: TDigestExecutionHint
}

export class MinAggregation extends FormatMetricAggregationBase {}

/**
 * @ext_doc_id search-aggregations-metrics-percentile-rank-aggregation
 */
export class PercentileRanksAggregation extends FormatMetricAggregationBase {
  /**
   * By default, the aggregation associates a unique string key with each bucket and returns the ranges as a hash rather than an array.
   * Set to `false` to disable this behavior.
   * @server_default true
   */
  keyed?: boolean
  /**
   * An array of values for which to calculate the percentile ranks.
   */
  values?: double[] | null
  /**
   * Uses the alternative High Dynamic Range Histogram algorithm to calculate percentile ranks.
   */
  hdr?: HdrMethod
  /**
   * Sets parameters for the default TDigest algorithm used to calculate percentile ranks.
   */
  tdigest?: TDigest
}

export class PercentilesAggregation extends FormatMetricAggregationBase {
  /**
   * By default, the aggregation associates a unique string key with each bucket and returns the ranges as a hash rather than an array.
   * Set to `false` to disable this behavior.
   * @server_default true
   */
  keyed?: boolean
  /**
   * The percentiles to calculate.
   */
  percents?: double | double[]
  /**
   * Uses the alternative High Dynamic Range Histogram algorithm to calculate percentiles.
   */
  hdr?: HdrMethod
  /**
   * Sets parameters for the default TDigest algorithm used to calculate percentiles.
   */
  tdigest?: TDigest
}

export class HdrMethod {
  /**
   * Specifies the resolution of values for the histogram in number of significant digits.
   */
  number_of_significant_value_digits?: integer
}

export class TDigest {
  /**
   * Limits the maximum number of nodes used by the underlying TDigest algorithm to `20 * compression`, enabling control of memory usage and approximation error.
   */
  compression?: integer
  /**
   * The default implementation of TDigest is optimized for performance, scaling to millions or even billions of sample values while maintaining acceptable accuracy levels (close to 1% relative error for millions of samples in some cases).
   * To use an implementation optimized for accuracy, set this parameter to high_accuracy instead.
   * @server_default default
   */
  execution_hint?: TDigestExecutionHint
}

export enum TDigestExecutionHint {
  default,
  high_accuracy
}

export class RateAggregation extends FormatMetricAggregationBase {
  /**
   * The interval used to calculate the rate.
   * By default, the interval of the `date_histogram` is used.
   */
  unit?: CalendarInterval
  /**
   * How the rate is calculated.
   * @server_default sum
   */
  mode?: RateMode
}

export enum RateMode {
  /**
   * Calculates the sum of all values of the field.
   */
  sum,
  /**
   * Uses the number of values of the field.
   */
  value_count
}

export class ScriptedMetricAggregation extends MetricAggregationBase {
  /**
   * Runs once on each shard after document collection is complete.
   * Allows the aggregation to consolidate the state returned from each shard.
   */
  combine_script?: Script
  /**
   * Runs prior to any collection of documents.
   * Allows the aggregation to set up any initial state.
   */
  init_script?: Script
  /**
   * Run once per document collected.
   * If no `combine_script` is specified, the resulting state needs to be stored in the `state` object.
   */
  map_script?: Script
  /**
   * A global object with script parameters for `init`, `map` and `combine` scripts.
   * It is shared between the scripts.
   */
  params?: Dictionary<string, UserDefinedValue>
  /**
   * Runs once on the coordinating node after all shards have returned their results.
   * The script is provided with access to a variable `states`, which is an array of the result of the `combine_script` on each shard.
   */
  reduce_script?: Script
}

export class StatsAggregation extends FormatMetricAggregationBase {}

export class StringStatsAggregation extends MetricAggregationBase {
  /**
   * Shows the probability distribution for all characters.
   * @server_default false
   */
  show_distribution?: boolean
}

export class SumAggregation extends FormatMetricAggregationBase {}

export class TTestAggregation extends Aggregation {
  /**
   * Test population A.
   */
  a?: TestPopulation
  /**
   * Test population B.
   */
  b?: TestPopulation
  /**
   * The type of test.
   * @server_default heteroscedastic
   */
  type?: TTestType
}

export class TestPopulation {
  /**
   * The field to aggregate.
   */
  field: Field
  script?: Script
  /**
   * A filter used to define a set of records to run unpaired t-test on.
   */
  filter?: QueryContainer
}

export enum TTestType {
  /**
   * Performs paired t-test.
   */
  paired,
  /**
   * Performs two-sample equal variance test.
   */
  homoscedastic,
  /**
   * Performs two-sample unequal variance test.
   */
  heteroscedastic
}

export class TopHitsAggregation extends MetricAggregationBase {
  /**
   * Fields for which to return doc values.
   */
  docvalue_fields?: FieldAndFormat[]
  /**
   * If `true`, returns detailed information about score computation as part of a hit.
   * @server_default false
   */
  explain?: boolean
  /**
   * Array of wildcard (*) patterns. The request returns values for field names
   * matching these patterns in the hits.fields property of the response.
   */
  fields?: FieldAndFormat[]
  /**
   * Starting document offset.
   * @server_default 0
   */
  from?: integer
  /**
   * Specifies the highlighter to use for retrieving highlighted snippets from one or more fields in the search results.
   */
  highlight?: Highlight
  /**
   * Returns the result of one or more script evaluations for each hit.
   */
  script_fields?: Dictionary<string, ScriptField>
  /**
   * The maximum number of top matching hits to return per bucket.
   * @server_default 3
   */
  size?: integer
  /**
   * Sort order of the top matching hits.
   * By default, the hits are sorted by the score of the main query.
   */
  sort?: Sort
  /**
   * Selects the fields of the source that are returned.
   */
  _source?: SourceConfig
  /**
   * Returns values for the specified stored fields (fields that use the `store` mapping option).
   */
  stored_fields?: Fields
  /**
   * If `true`, calculates and returns document scores, even if the scores are not used for sorting.
   * @server_default false
   */
  track_scores?: boolean
  /**
   * If `true`, returns document version as part of a hit.
   * @server_default false
   */
  version?: boolean
  /**
   * If `true`, returns sequence number and primary term of the last modification of each hit.
   */
  seq_no_primary_term?: boolean
}

/**
 * @ext_doc_id search-aggregations-metrics-top-metrics
 */
export class TopMetricsAggregation extends MetricAggregationBase {
  /**
   * The fields of the top document to return.
   */
  metrics?: TopMetricsValue | TopMetricsValue[]
  /**
   * The number of top documents from which to return metrics.
   * @server_default 1
   */
  size?: integer
  /**
   * The sort order of the documents.
   */
  sort?: Sort
}

export class TopMetricsValue {
  /**
   * A field to return as a metric.
   */
  field: Field
}

export class ValueCountAggregation extends FormattableMetricAggregation {}

export enum ValueType {
  string,
  long,
  double,
  number,
  date,
  date_nanos,
  ip,
  numeric,
  geo_point,
  boolean
}

export class WeightedAverageAggregation extends Aggregation {
  /**
   * A numeric response formatter.
   */
  format?: string
  /**
   * Configuration for the field that provides the values.
   */
  value?: WeightedAverageValue
  value_type?: ValueType
  /**
   * Configuration for the field or script that provides the weights.
   */
  weight?: WeightedAverageValue
}

export class WeightedAverageValue {
  /**
   * The field from which to extract the values or weights.
   */
  field?: Field
  /**
   * A value or weight to use if the field is missing.
   */
  missing?: double
  script?: Script
}
