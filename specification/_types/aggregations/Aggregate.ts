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

import { HitsMetadata } from '@global/search/_types/hits'
import { AdditionalProperties, AdditionalProperty } from '@spec_utils/behaviors'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { AggregateName, Field, FieldValue, Metadata } from '@_types/common'
import {
  GeoBounds,
  GeoHash,
  GeoHexCell,
  GeoLine,
  GeoLocation,
  GeoTile
} from '@_types/Geo'
import { double, integer, long } from '@_types/Numeric'
import { DurationLarge, EpochTime, UnitMillis } from '@_types/Time'
import { Void } from '@spec_utils/VoidValue'
import { CompositeAggregateKey } from '@_types/aggregations/bucket'

/**
 * @variants external
 * @non_exhaustive
 */
export type Aggregate =
  | CardinalityAggregate
  // Digests
  | HdrPercentilesAggregate
  | HdrPercentileRanksAggregate
  | TDigestPercentilesAggregate
  | TDigestPercentileRanksAggregate
  | PercentilesBucketAggregate
  // Single value
  | MedianAbsoluteDeviationAggregate
  | MinAggregate
  | MaxAggregate
  | SumAggregate
  | AvgAggregate
  | WeightedAvgAggregate
  | ValueCountAggregate
  | SimpleValueAggregate
  | DerivativeAggregate
  | BucketMetricValueAggregate
  // Multi value
  | StatsAggregate
  | StatsBucketAggregate
  | ExtendedStatsAggregate
  | ExtendedStatsBucketAggregate
  // Geo
  | GeoBoundsAggregate
  | GeoCentroidAggregate
  // Histograms
  | HistogramAggregate
  | DateHistogramAggregate
  | AutoDateHistogramAggregate
  | VariableWidthHistogramAggregate
  // Terms
  | StringTermsAggregate
  | LongTermsAggregate
  | DoubleTermsAggregate
  | UnmappedTermsAggregate
  | LongRareTermsAggregate
  | StringRareTermsAggregate
  | UnmappedRareTermsAggregate
  | MultiTermsAggregate
  // Single bucket
  | MissingAggregate
  | NestedAggregate
  | ReverseNestedAggregate
  | GlobalAggregate
  | FilterAggregate
  | ChildrenAggregate
  | ParentAggregate
  | SamplerAggregate
  | UnmappedSamplerAggregate
  // Geo grid
  | GeoHashGridAggregate
  | GeoTileGridAggregate
  | GeoHexGridAggregate
  // Range
  | RangeAggregate
  | DateRangeAggregate
  | GeoDistanceAggregate
  | IpRangeAggregate
  | IpPrefixAggregate
  // Other multi-bucket
  | FiltersAggregate
  | AdjacencyMatrixAggregate
  | SignificantLongTermsAggregate
  | SignificantStringTermsAggregate
  | UnmappedSignificantTermsAggregate
  | CompositeAggregate
  | FrequentItemSetsAggregate
  //
  | ScriptedMetricAggregate
  | TopHitsAggregate
  | InferenceAggregate
  // Analytics
  | StringStatsAggregate
  | BoxPlotAggregate
  | TopMetricsAggregate
  | TTestAggregate
  | RateAggregate
  | CumulativeCardinalityAggregate
  | MatrixStatsAggregate
  | GeoLineAggregate

// Aggregations are defined in the ES code base in two ways:
// - in SearchModule.registerAggregations()
// - in implementations of SearchPlugin, through the getAggregations() and getPipelineAggregations() methods
//
// For an aggregate FooAggregate, the reference code in ES lives in two places:
// - ES aggregations: InternalFoo, the actual aggregate implementation, with the `doXContentBody` methods
// - HLRC classes: ParsedFoo, that have a parser and `toXContent` implementations
// Exceptions to this scheme exist and are indicated in the relevant aggregates

export class AggregateBase {
  meta?: Metadata
}

/** @variant name=cardinality */
export class CardinalityAggregate extends AggregateBase {
  value: long
}

//----- Percentiles

// ES: AbstractInternalHDRPercentiles, AbstractInternalTDigestPercentiles, InternalPercentilesBucket
export class PercentilesAggregateBase extends AggregateBase {
  values: Percentiles
}

/** @codegen_names keyed, array */
type Percentiles = KeyedPercentiles | Array<ArrayPercentilesItem>

// In keyed form, percentiles are represented as an object with 1 or 2 properties for each key:
// <key_name>: double | null - always present (null means there were no values for this percentile)
// <key_name>_as_string? string - present if a format was provided
//
// Note: defined as type alias and not inline, as some clients may want to implement it in a more usable way.
type KeyedPercentiles = Dictionary<string, string | long | null>

export class ArrayPercentilesItem {
  key: string
  value: double | null
  value_as_string?: string
}

/** @variant name=hdr_percentiles */
export class HdrPercentilesAggregate extends PercentilesAggregateBase {}

/** @variant name=hdr_percentile_ranks */
export class HdrPercentileRanksAggregate extends PercentilesAggregateBase {}

/** @variant name=tdigest_percentiles */
export class TDigestPercentilesAggregate extends PercentilesAggregateBase {}

/** @variant name=tdigest_percentile_ranks */
export class TDigestPercentileRanksAggregate extends PercentilesAggregateBase {}

/** @variant name=percentiles_bucket */
export class PercentilesBucketAggregate extends PercentilesAggregateBase {}

//----- Single value

export class SingleMetricAggregateBase extends AggregateBase {
  // HLRC: ParsedSingleValueNumericMetricsAggregation
  // ES: InternalNumericMetricsAggregation.SingleValue
  /**
   * The metric value. A missing value generally means that there was no data to aggregate,
   * unless specified otherwise.
   */
  value: double | null
  value_as_string?: string
}

/** @variant name=median_absolute_deviation */
export class MedianAbsoluteDeviationAggregate extends SingleMetricAggregateBase {}

/** @variant name=min */
export class MinAggregate extends SingleMetricAggregateBase {}

/** @variant name=max */
export class MaxAggregate extends SingleMetricAggregateBase {}

/**
 * Sum aggregation result. `value` is always present and is zero if there were no values to process.
 * @variant name=sum
 */
export class SumAggregate extends SingleMetricAggregateBase {}

/** @variant name=avg */
export class AvgAggregate extends SingleMetricAggregateBase {}

/**
 * Weighted average aggregation result. `value` is missing if the weight was set to zero.
 * @variant name=weighted_avg
 */
export class WeightedAvgAggregate extends SingleMetricAggregateBase {}

/**
 * Value count aggregation result. `value` is always present.
 * @variant name=value_count
 */
export class ValueCountAggregate extends SingleMetricAggregateBase {}

/** @variant name=simple_value */
export class SimpleValueAggregate extends SingleMetricAggregateBase {}

/** @variant name=derivative */
export class DerivativeAggregate extends SingleMetricAggregateBase {
  normalized_value?: double
  normalized_value_as_string?: string
}

/** @variant name=bucket_metric_value */
export class BucketMetricValueAggregate extends SingleMetricAggregateBase {
  keys: string[]
}

//----- Multi value

/**
 * Statistics aggregation result. `min`, `max` and `avg` are missing if there were no values to process
 * (`count` is zero).
 * @variant name=stats
 */
export class StatsAggregate extends AggregateBase {
  count: long
  min: double | null
  max: double | null
  avg: double | null
  sum: double
  min_as_string?: string
  max_as_string?: string
  avg_as_string?: string
  sum_as_string?: string
}

/** @variant name=stats_bucket */
export class StatsBucketAggregate extends StatsAggregate {}

export class StandardDeviationBounds {
  upper: double | null
  lower: double | null
  upper_population: double | null
  lower_population: double | null
  upper_sampling: double | null
  lower_sampling: double | null
}

export class StandardDeviationBoundsAsString {
  upper: string
  lower: string
  upper_population: string
  lower_population: string
  upper_sampling: string
  lower_sampling: string
}

/** @variant name=extended_stats */
export class ExtendedStatsAggregate extends StatsAggregate {
  sum_of_squares: double | null
  variance: double | null
  variance_population: double | null
  variance_sampling: double | null
  std_deviation: double | null
  std_deviation_population: double | null
  std_deviation_sampling: double | null
  // Always sent (see InternalExtendedStats), but semantically it's useless if std_deviation is null
  std_deviation_bounds?: StandardDeviationBounds

  sum_of_squares_as_string?: string
  variance_as_string?: string
  variance_population_as_string?: string
  variance_sampling_as_string?: string
  std_deviation_as_string?: string
  std_deviation_bounds_as_string?: StandardDeviationBoundsAsString
}

/** @variant name=extended_stats_bucket */
export class ExtendedStatsBucketAggregate extends ExtendedStatsAggregate {}

//----- Geo

/** @variant name=geo_bounds */
export class GeoBoundsAggregate extends AggregateBase {
  bounds?: GeoBounds
}

/** @variant name=geo_centroid */
export class GeoCentroidAggregate extends AggregateBase {
  count: long
  location?: GeoLocation
}

//----- Histograms

/**
 * Aggregation buckets. By default they are returned as an array, but if the aggregation has keys configured for
 * the different buckets, the result is a dictionary.
 *
 * @codegen_names keyed, array
 */
// Note: not all aggregations support keys in their configuration, meaning they will never return the dictionary
// variant. However we use this union for all aggregates to future-proof the spec if some key-less aggregations finally
// add support for keys.
export type Buckets<TBucket> = Dictionary<string, TBucket> | Array<TBucket>

export class MultiBucketAggregateBase<TBucket> extends AggregateBase {
  buckets: Buckets<TBucket>
}

/**
 * Base type for multi-bucket aggregation results that can hold sub-aggregations results.
 *
 * @behavior_meta AdditionalProperties aggregations, "Nested aggregations"
 */
export class MultiBucketBase
  implements AdditionalProperties<AggregateName, Aggregate>
{
  doc_count: long
}

/** @variant name=histogram */
export class HistogramAggregate extends MultiBucketAggregateBase<HistogramBucket> {}

export class HistogramBucket extends MultiBucketBase {
  key_as_string?: string
  key: double
}

/** @variant name=date_histogram */
export class DateHistogramAggregate extends MultiBucketAggregateBase<DateHistogramBucket> {}

export class DateHistogramBucket extends MultiBucketBase {
  key_as_string?: string
  key: EpochTime<UnitMillis>
}

/** @variant name=auto_date_histogram */
// Note: no keyed variant in `InternalAutoDateHistogram`
export class AutoDateHistogramAggregate extends MultiBucketAggregateBase<DateHistogramBucket> {
  interval: DurationLarge
}

/** @variant name=variable_width_histogram */
// Note: no keyed variant in `InternalVariableWidthHistogram`
export class VariableWidthHistogramAggregate extends MultiBucketAggregateBase<VariableWidthHistogramBucket> {}

export class VariableWidthHistogramBucket extends MultiBucketBase {
  min: double
  key: double
  max: double
  min_as_string?: string
  key_as_string?: string
  max_as_string?: string
}

//----- Terms

export class TermsAggregateBase<
  TBucket
> extends MultiBucketAggregateBase<TBucket> {
  doc_count_error_upper_bound?: long
  sum_other_doc_count?: long
}

/**
 * Result of a `terms` aggregation when the field is a string.
 * @variant name=sterms
 */
// ES: StringTerms
export class StringTermsAggregate extends TermsAggregateBase<StringTermsBucket> {}

export class TermsBucketBase extends MultiBucketBase {
  doc_count_error_upper_bound?: long
}

export class StringTermsBucket extends TermsBucketBase {
  key: FieldValue
}

/**
 * Result of a `terms` aggregation when the field is some kind of whole number like a integer, long, or a date.
 * @variant name=lterms
 */
// ES: LongTerms
export class LongTermsAggregate extends TermsAggregateBase<LongTermsBucket> {}

export class LongTermsBucket extends TermsBucketBase {
  key: long
  key_as_string?: string
}

/**
 * Result of a `terms` aggregation when the field is some kind of decimal number like a float, double, or distance.
 * @variant name=dterms
 */
// ES: DoubleTerms
export class DoubleTermsAggregate extends TermsAggregateBase<DoubleTermsBucket> {}

export class DoubleTermsBucket extends TermsBucketBase {
  key: double
  key_as_string?: string
}

/**
 * Result of a `terms` aggregation when the field is unmapped. `buckets` is always empty.
 * @variant name=umterms
 */
// ES: UnmappedTerms
// Since the buckets array is present but always empty, we use `Void` as the bucket type.
export class UnmappedTermsAggregate extends TermsAggregateBase<Void> {}

/**
 * Result of the `rare_terms` aggregation when the field is some kind of whole number like a integer, long, or a date.
 * @variant name=lrareterms
 */
// ES: LongRareTerms
export class LongRareTermsAggregate extends MultiBucketAggregateBase<LongRareTermsBucket> {}

export class LongRareTermsBucket extends MultiBucketBase {
  key: long
  key_as_string?: string
}

/**
 * Result of the `rare_terms` aggregation when the field is a string.
 * @variant name=srareterms
 */
export class StringRareTermsAggregate extends MultiBucketAggregateBase<StringRareTermsBucket> {}

export class StringRareTermsBucket extends MultiBucketBase {
  key: string
}

/**
 * Result of a `rare_terms` aggregation when the field is unmapped. `buckets` is always empty.
 * @variant name=umrareterms
 */
// ES: UnmappedRareTerms
// Since the buckets array is present but always empty, we use `Void` as the bucket type.
export class UnmappedRareTermsAggregate extends MultiBucketAggregateBase<Void> {}

/** @variant name=multi_terms */
// Note: no keyed variant
export class MultiTermsAggregate extends TermsAggregateBase<MultiTermsBucket> {}

export class MultiTermsBucket extends MultiBucketBase {
  key: Array<FieldValue>
  key_as_string?: string
  doc_count_error_upper_bound?: long
}

//----- Single bucket

/**
 * Base type for single-bucket aggregation results that can hold sub-aggregations results.
 *
 * @behavior_meta AdditionalProperties aggregations, "Nested aggregations"
 */
export class SingleBucketAggregateBase
  extends AggregateBase
  implements AdditionalProperties<AggregateName, Aggregate>
{
  doc_count: long
}

/** @variant name=missing */
export class MissingAggregate extends SingleBucketAggregateBase {}

/** @variant name=nested */
export class NestedAggregate extends SingleBucketAggregateBase {}

/** @variant name=reverse_nested */
export class ReverseNestedAggregate extends SingleBucketAggregateBase {}

/** @variant name=global */
export class GlobalAggregate extends SingleBucketAggregateBase {}

/** @variant name=filter */
export class FilterAggregate extends SingleBucketAggregateBase {}

/** @variant name=sampler */
export class SamplerAggregate extends SingleBucketAggregateBase {}

/** @variant name=unmapped_sampler */
export class UnmappedSamplerAggregate extends SingleBucketAggregateBase {}

//----- Geo grid

/** @variant name=geohash_grid */
// Note: no keyed variant in the `InternalGeoGrid` parent class
export class GeoHashGridAggregate extends MultiBucketAggregateBase<GeoHashGridBucket> {}

export class GeoHashGridBucket extends MultiBucketBase {
  key: GeoHash
}

/** @variant name=geotile_grid */
// Note: no keyed variant in the `InternalGeoGrid` parent class
export class GeoTileGridAggregate extends MultiBucketAggregateBase<GeoTileGridBucket> {}

export class GeoTileGridBucket extends MultiBucketBase {
  key: GeoTile
}

/** @variant name=geohex_grid */
export class GeoHexGridAggregate extends MultiBucketAggregateBase<GeoHexGridBucket> {}

export class GeoHexGridBucket extends MultiBucketBase {
  key: GeoHexCell
}

//----- Ranges

/** @variant name=range */
export class RangeAggregate extends MultiBucketAggregateBase<RangeBucket> {}

export class RangeBucket extends MultiBucketBase {
  from?: double
  to?: double
  from_as_string?: string
  to_as_string?: string
  /** The bucket key. Present if the aggregation is _not_ keyed */
  key?: string
}

/**
 * Result of a `date_range` aggregation. Same format as a for a `range` aggregation: `from` and `to`
 * in `buckets` are milliseconds since the Epoch, represented as a floating point number.
 * @variant name=date_range
 */
export class DateRangeAggregate extends RangeAggregate {}

/**
 * Result of a `geo_distance` aggregation. The unit for `from` and `to` is meters by default.
 * @variant name=geo_distance
 */
export class GeoDistanceAggregate extends RangeAggregate {}

/** @variant name=ip_range */
// ES: InternalBinaryRange
export class IpRangeAggregate extends MultiBucketAggregateBase<IpRangeBucket> {}

export class IpRangeBucket extends MultiBucketBase {
  key?: string
  from?: string
  to?: string
}

//----- Other multi-bucket

/** @variant name=filters */
export class FiltersAggregate extends MultiBucketAggregateBase<FiltersBucket> {}

export class FiltersBucket extends MultiBucketBase {}

/** @variant name=adjacency_matrix */
// Note: no keyed variant in the `InternalAdjacencyMatrix`
export class AdjacencyMatrixAggregate extends MultiBucketAggregateBase<AdjacencyMatrixBucket> {}

export class AdjacencyMatrixBucket extends MultiBucketBase {
  key: string
}

export class SignificantTermsAggregateBase<
  T
> extends MultiBucketAggregateBase<T> {
  bg_count?: long
  doc_count?: long
}

/** @variant name=siglterms */
// ES: SignificantLongTerms & InternalSignificantTerms
export class SignificantLongTermsAggregate extends SignificantTermsAggregateBase<SignificantLongTermsBucket> {}

export class SignificantTermsBucketBase extends MultiBucketBase {
  score: double
  bg_count: long
}

export class SignificantLongTermsBucket extends SignificantTermsBucketBase {
  key: long
  key_as_string?: string
}

/** @variant name=sigsterms */
// ES: SignificantStringTerms & InternalSignificantTerms
export class SignificantStringTermsAggregate extends SignificantTermsAggregateBase<SignificantStringTermsBucket> {}

export class SignificantStringTermsBucket extends SignificantTermsBucketBase {
  key: string
}

/**
 * Result of the `significant_terms` aggregation on an unmapped field. `buckets` is always empty.
 * @variant name=umsigterms
 */
// ES: UnmappedSignificantTerms
// See note in UnmappedTermsAggregate
export class UnmappedSignificantTermsAggregate extends SignificantTermsAggregateBase<Void> {}

/** @variant name=composite */
// Note: no keyed variant
export class CompositeAggregate extends MultiBucketAggregateBase<CompositeBucket> {
  // Must be consistent with CompositeAggregation.after and CompositeBucket.key
  after_key?: CompositeAggregateKey
}

export class CompositeBucket extends MultiBucketBase {
  key: CompositeAggregateKey
}

/** @variant name=ip_prefix */
export class IpPrefixAggregate extends MultiBucketAggregateBase<IpPrefixBucket> {}

export class IpPrefixBucket extends MultiBucketBase {
  is_ipv6: boolean
  key: string
  prefix_length: integer
  netmask?: string
}

/** @variant name=frequent_item_sets */
export class FrequentItemSetsAggregate extends MultiBucketAggregateBase<FrequentItemSetsBucket> {}

export class FrequentItemSetsBucket extends MultiBucketBase {
  key: Dictionary<Field, string[]>
  support: double
}

//----- Misc

/** @variant name=scripted_metric */
export class ScriptedMetricAggregate extends AggregateBase {
  value: UserDefinedValue
}

/** @variant name=top_hits */
export class TopHitsAggregate extends AggregateBase {
  hits: HitsMetadata<UserDefinedValue>
}

/**
 * @variant name=inference
 * @behavior_meta AdditionalProperties data, "Additional data"
 */
// This is a union with widely different fields, many of them being runtime-defined. We mimic below the few fields
// present in `ParsedInference` with an additional properties spillover to not loose any data.
export class InferenceAggregate
  extends AggregateBase
  implements AdditionalProperties<string, UserDefinedValue>
{
  value?: FieldValue
  feature_importance?: InferenceFeatureImportance[]
  top_classes?: InferenceTopClassEntry[]
  warning?: string
}

export class InferenceTopClassEntry {
  class_name: FieldValue
  class_probability: double
  class_score: double
}

export class InferenceFeatureImportance {
  feature_name: string
  importance?: double
  classes?: InferenceClassImportance[]
}

export class InferenceClassImportance {
  class_name: string
  importance: double
}

//------ Plugin aggregations

// Analytics

/** @variant name=string_stats */
export class StringStatsAggregate extends AggregateBase {
  count: long
  min_length: integer | null
  max_length: integer | null
  avg_length: double | null
  entropy: double | null
  distribution?: Dictionary<string, double> | null
  min_length_as_string?: string
  max_length_as_string?: string
  avg_length_as_string?: string
}

/** @variant name=boxplot */
export class BoxPlotAggregate extends AggregateBase {
  min: double
  max: double
  q1: double
  q2: double
  q3: double
  lower: double
  upper: double
  min_as_string?: string
  max_as_string?: string
  q1_as_string?: string
  q2_as_string?: string
  q3_as_string?: string
  lower_as_string?: string
  upper_as_string?: string
}

/** @variant name=top_metrics */
export class TopMetricsAggregate extends AggregateBase {
  top: TopMetrics[]
}

export class TopMetrics {
  // Always contains a single element since `top_metrics` only accepts a single sort field
  sort: Array<FieldValue | null>
  metrics: Dictionary<string, FieldValue | null>
}

/** @variant name=t_test */
export class TTestAggregate extends AggregateBase {
  value: double | null
  value_as_string?: string
}

/** @variant name=rate */
export class RateAggregate extends AggregateBase {
  value: double
  value_as_string?: string
}

/**
 * Result of the `cumulative_cardinality` aggregation
 * @variant name=simple_long_value
 */
// ES: InternalSimpleLongValue
export class CumulativeCardinalityAggregate extends AggregateBase {
  value: long
  value_as_string?: string
}

/** @variant name=matrix_stats */
export class MatrixStatsAggregate extends AggregateBase {
  doc_count: long
  fields?: MatrixStatsFields[]
}

export class MatrixStatsFields {
  name: Field
  count: long
  mean: double
  variance: double
  skewness: double
  kurtosis: double
  covariance: Dictionary<Field, double>
  correlation: Dictionary<Field, double>
}

//----- Parent join plugin

/** @variant name=children */
export class ChildrenAggregate extends SingleBucketAggregateBase {}

/** @variant name=parent */
export class ParentAggregate extends SingleBucketAggregateBase {}

//----- Spatial plugin

/** @variant name=geo_line */
export class GeoLineAggregate extends AggregateBase {
  type: string // should be "Feature"
  geometry: GeoLine
  // https://www.rfc-editor.org/rfc/rfc7946#section-3.2
  // "The value of the properties member is an object (any JSON object or a JSON null value)"
  properties: UserDefinedValue
}
