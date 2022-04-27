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
import { integer, double } from '@_types/Numeric'
import { QueryContainer } from '@_types/query_dsl/abstractions'
import {
  AdjacencyMatrixAggregation,
  AutoDateHistogramAggregation,
  ChildrenAggregation,
  CompositeAggregation,
  DateHistogramAggregation,
  DateRangeAggregation,
  DiversifiedSamplerAggregation,
  FiltersAggregation,
  GeoDistanceAggregation,
  GeoHashGridAggregation,
  GeoTileGridAggregation,
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
  VariableWidthHistogramAggregation
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
  SumBucketAggregation
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
  meta?: Dictionary<string, UserDefinedValue>

  adjacency_matrix?: AdjacencyMatrixAggregation
  auto_date_histogram?: AutoDateHistogramAggregation
  avg?: AverageAggregation
  avg_bucket?: AverageBucketAggregation
  boxplot?: BoxplotAggregation
  bucket_script?: BucketScriptAggregation
  bucket_selector?: BucketSelectorAggregation
  bucket_sort?: BucketSortAggregation
  cardinality?: CardinalityAggregation
  children?: ChildrenAggregation
  composite?: CompositeAggregation
  cumulative_cardinality?: CumulativeCardinalityAggregation
  cumulative_sum?: CumulativeSumAggregation
  date_histogram?: DateHistogramAggregation
  date_range?: DateRangeAggregation
  derivative?: DerivativeAggregation
  diversified_sampler?: DiversifiedSamplerAggregation
  extended_stats?: ExtendedStatsAggregation
  extended_stats_bucket?: ExtendedStatsBucketAggregation
  filter?: QueryContainer
  filters?: FiltersAggregation
  geo_bounds?: GeoBoundsAggregation
  geo_centroid?: GeoCentroidAggregation
  geo_distance?: GeoDistanceAggregation
  geohash_grid?: GeoHashGridAggregation
  geo_line?: GeoLineAggregation
  geotile_grid?: GeoTileGridAggregation
  global?: GlobalAggregation
  histogram?: HistogramAggregation
  ip_range?: IpRangeAggregation
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
