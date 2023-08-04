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
import { Metadata } from '@_types/common'
import { integer, double } from '@_types/Numeric'
import { QueryContainer } from '@_types/query_dsl/abstractions'
import {
  AdjacencyMatrixAggregation,
  AutoDateHistogramAggregation,
  CategorizeTextAggregation,
  ChildrenAggregation,
  CompositeAggregation,
  DateHistogramAggregation,
  DateRangeAggregation,
  DiversifiedSamplerAggregation,
  FiltersAggregation,
  GeoDistanceAggregation,
  GeoHashGridAggregation,
  GeoTileGridAggregation,
  GeohexGridAggregation,
  GlobalAggregation,
  HistogramAggregation,
  IpRangeAggregation,
  MissingAggregation,
  MultiTermsAggregation,
  NestedAggregation,
  ParentAggregation,
  RangeAggregation,
  RareTermsAggregation,
  ReverseNestedAggregation,
  SamplerAggregation,
  SignificantTermsAggregation,
  SignificantTextAggregation,
  TermsAggregation,
  VariableWidthHistogramAggregation,
  IpPrefixAggregation,
  FrequentItemSetsAggregation
} from './bucket'
import { MatrixStatsAggregation } from './matrix'
import {
  AverageAggregation,
  BoxplotAggregation,
  CardinalityAggregation,
  ExtendedStatsAggregation,
  GeoBoundsAggregation,
  GeoCentroidAggregation,
  GeoLineAggregation,
  MaxAggregation,
  MedianAbsoluteDeviationAggregation,
  MinAggregation,
  PercentileRanksAggregation,
  PercentilesAggregation,
  RateAggregation,
  ScriptedMetricAggregation,
  StatsAggregation,
  StringStatsAggregation,
  SumAggregation,
  TopHitsAggregation,
  TTestAggregation,
  TopMetricsAggregation,
  ValueCountAggregation,
  WeightedAverageAggregation
} from './metric'
import {
  AverageBucketAggregation,
  BucketScriptAggregation,
  BucketSelectorAggregation,
  BucketSortAggregation,
  CumulativeCardinalityAggregation,
  CumulativeSumAggregation,
  DerivativeAggregation,
  ExtendedStatsBucketAggregation,
  InferenceAggregation,
  MaxBucketAggregation,
  MinBucketAggregation,
  MovingAverageAggregation,
  MovingPercentilesAggregation,
  MovingFunctionAggregation,
  NormalizeAggregation,
  PercentilesBucketAggregation,
  SerialDifferencingAggregation,
  StatsBucketAggregation,
  SumBucketAggregation,
  BucketCorrelationAggregation,
  BucketKsAggregation
} from './pipeline'

/**
 * @variants container
 * @non_exhaustive
 */
export class AggregationContainer {
  /**
   * Sub-aggregations for this aggregation. Only applies to bucket aggregations.
   *
   * @variant container_property
   * @aliases aggs
   */
  aggregations?: Dictionary<string, AggregationContainer>
  /**
   * @variant container_property
   */
  meta?: Metadata

  /**
   * A bucket aggregation returning a form of adjacency matrix.
   * The request provides a collection of named filter expressions, similar to the filters aggregation request.
   * Each bucket in the response represents a non-empty cell in the matrix of intersecting filters.
   * @doc_id search-aggregations-bucket-adjacency-matrix-aggregation
   */
  adjacency_matrix?: AdjacencyMatrixAggregation
  /**
   * A multi-bucket aggregation similar to the date histogram, except instead of providing an interval to use as the width of each bucket, a target number of buckets is provided.
   * @doc_id search-aggregations-bucket-autodatehistogram-aggregation
   */
  auto_date_histogram?: AutoDateHistogramAggregation
  /**
   * A single-value metrics aggregation that computes the average of numeric values that are extracted from the aggregated documents.
   * @doc_id search-aggregations-metrics-avg-aggregation
   */
  avg?: AverageAggregation
  /**
   * A sibling pipeline aggregation which calculates the mean value of a specified metric in a sibling aggregation.
   * The specified metric must be numeric and the sibling aggregation must be a multi-bucket aggregation.
   * @doc_id search-aggregations-pipeline-avg-bucket-aggregation
   */
  avg_bucket?: AverageBucketAggregation
  /**
   * A metrics aggregation that computes a box plot of numeric values extracted from the aggregated documents.
   * @doc_id search-aggregations-metrics-boxplot-aggregation
   */
  boxplot?: BoxplotAggregation
  /**
   * A parent pipeline aggregation which runs a script which can perform per bucket computations on specified metrics in the parent multi-bucket aggregation.
   * @doc_id search-aggregations-pipeline-bucket-script-aggregation
   */
  bucket_script?: BucketScriptAggregation
  /**
   * A parent pipeline aggregation which runs a script to determine whether the current bucket will be retained in the parent multi-bucket aggregation.
   * @doc_id search-aggregations-pipeline-bucket-selector-aggregation
   */
  bucket_selector?: BucketSelectorAggregation
  /**
   * A parent pipeline aggregation which sorts the buckets of its parent multi-bucket aggregation.
   * @doc_id search-aggregations-pipeline-bucket-sort-aggregation
   */
  bucket_sort?: BucketSortAggregation
  /**
   * A sibling pipeline aggregation which runs a two sample Kolmogorov–Smirnov test ("K-S test") against a provided distribution, and the distribution implied by the documents counts in the configured sibling aggregation.
   * @doc_id search-aggregations-bucket-count-ks-test-aggregation
   * @availability stack stability=experimental
   * @availability serverless stability=experimental
   */
  bucket_count_ks_test?: BucketKsAggregation
  /**
   * A sibling pipeline aggregation which runs a correlation function on the configured sibling multi-bucket aggregation.
   * @doc_id search-aggregations-bucket-correlation-aggregation
   * @availability stack stability=experimental
   * @availability serverless stability=experimental
   */
  bucket_correlation?: BucketCorrelationAggregation
  /**
   * A single-value metrics aggregation that calculates an approximate count of distinct values.
   * @doc_id search-aggregations-metrics-cardinality-aggregation
   */
  cardinality?: CardinalityAggregation
  /**
   * A multi-bucket aggregation that groups semi-structured text into buckets.
   * @doc_id search-aggregations-bucket-categorize-text-aggregation
   * @availability stack stability=experimental
   * @availability serverless stability=experimental
   */
  categorize_text?: CategorizeTextAggregation
  /**
   * A single bucket aggregation that selects child documents that have the specified type, as defined in a `join` field.
   * @doc_id search-aggregations-bucket-children-aggregation
   */
  children?: ChildrenAggregation
  /**
   * A multi-bucket aggregation that creates composite buckets from different sources.
   * Unlike the other multi-bucket aggregations, you can use the `composite` aggregation to paginate *all* buckets from a multi-level aggregation efficiently.
   */
  composite?: CompositeAggregation
  /**
   * A parent pipeline aggregation which calculates the cumulative cardinality in a parent `histogram` (or `date_histogram`) aggregation.
   * @doc_id search-aggregations-pipeline-cumulative-cardinality-aggregation
   */
  cumulative_cardinality?: CumulativeCardinalityAggregation
  /**
   * A parent pipeline aggregation which calculates the cumulative sum of a specified metric in a parent `histogram` (or `date_histogram`) aggregation.
   * @doc_id search-aggregations-pipeline-cumulative-sum-aggregation
   */
  cumulative_sum?: CumulativeSumAggregation
  /**
   * A multi-bucket values source based aggregation that can be applied on date values or date range values extracted from the documents.
   * It dynamically builds fixed size (interval) buckets over the values.
   * @doc_id search-aggregations-bucket-datehistogram-aggregation
   */
  date_histogram?: DateHistogramAggregation
  /**
   * A multi-bucket value source based aggregation that enables the user to define a set of date ranges - each representing a bucket.
   * @doc_id search-aggregations-bucket-daterange-aggregation
   */
  date_range?: DateRangeAggregation
  /**
   * A parent pipeline aggregation which calculates the derivative of a specified metric in a parent `histogram` or `date_histogram` aggregation.
   * @doc_id search-aggregations-pipeline-derivative-aggregation
   */
  derivative?: DerivativeAggregation
  /**
   * A filtering aggregation used to limit any sub aggregations' processing to a sample of the top-scoring documents.
   * Similar to the `sampler` aggregation, but adds the ability to limit the number of matches that share a common value.
   * @doc_id search-aggregations-bucket-diversified-sampler-aggregation
   */
  diversified_sampler?: DiversifiedSamplerAggregation
  /**
   * A multi-value metrics aggregation that computes stats over numeric values extracted from the aggregated documents.
   * @doc_id search-aggregations-metrics-extendedstats-aggregation
   */
  extended_stats?: ExtendedStatsAggregation
  /**
   * A sibling pipeline aggregation which calculates a variety of stats across all bucket of a specified metric in a sibling aggregation.
   * @doc_id search-aggregations-pipeline-extended-stats-bucket-aggregation
   */
  extended_stats_bucket?: ExtendedStatsBucketAggregation
  /**
   * A bucket aggregation which finds frequent item sets, a form of association rules mining that identifies items that often occur together.
   * @doc_id search-aggregations-bucket-frequent-item-sets-aggregation
   */
  frequent_item_sets?: FrequentItemSetsAggregation
  /**
   * A single bucket aggregation that narrows the set of documents to those that match a query.
   * @doc_id search-aggregations-bucket-filter-aggregation
   */
  filter?: QueryContainer
  /**
   * A multi-bucket aggregation where each bucket contains the documents that match a query.
   */
  filters?: FiltersAggregation
  geo_bounds?: GeoBoundsAggregation
  geo_centroid?: GeoCentroidAggregation
  geo_distance?: GeoDistanceAggregation
  geohash_grid?: GeoHashGridAggregation
  geo_line?: GeoLineAggregation
  geotile_grid?: GeoTileGridAggregation
  geohex_grid?: GeohexGridAggregation
  global?: GlobalAggregation
  histogram?: HistogramAggregation
  ip_range?: IpRangeAggregation
  ip_prefix?: IpPrefixAggregation
  inference?: InferenceAggregation
  line?: GeoLineAggregation
  matrix_stats?: MatrixStatsAggregation
  max?: MaxAggregation
  max_bucket?: MaxBucketAggregation
  median_absolute_deviation?: MedianAbsoluteDeviationAggregation
  min?: MinAggregation
  min_bucket?: MinBucketAggregation
  missing?: MissingAggregation
  moving_avg?: MovingAverageAggregation
  moving_percentiles?: MovingPercentilesAggregation
  moving_fn?: MovingFunctionAggregation
  multi_terms?: MultiTermsAggregation
  nested?: NestedAggregation
  normalize?: NormalizeAggregation
  parent?: ParentAggregation
  percentile_ranks?: PercentileRanksAggregation
  percentiles?: PercentilesAggregation
  percentiles_bucket?: PercentilesBucketAggregation
  range?: RangeAggregation
  rare_terms?: RareTermsAggregation
  rate?: RateAggregation
  reverse_nested?: ReverseNestedAggregation
  sampler?: SamplerAggregation
  scripted_metric?: ScriptedMetricAggregation
  serial_diff?: SerialDifferencingAggregation
  significant_terms?: SignificantTermsAggregation
  significant_text?: SignificantTextAggregation
  stats?: StatsAggregation
  stats_bucket?: StatsBucketAggregation
  string_stats?: StringStatsAggregation
  sum?: SumAggregation
  sum_bucket?: SumBucketAggregation
  terms?: TermsAggregation
  top_hits?: TopHitsAggregation
  t_test?: TTestAggregation
  top_metrics?: TopMetricsAggregation
  value_count?: ValueCountAggregation
  weighted_avg?: WeightedAverageAggregation
  variable_width_histogram?: VariableWidthHistogramAggregation
}

export type Missing = string | integer | double | boolean
export enum MissingOrder {
  first,
  last,
  default
}
