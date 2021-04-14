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

import { double, integer } from '@common/common'
import { QueryContainer } from '@common/query_dsl/abstractions/container/QueryContainer'
import { Dictionary } from '__spec_utils/Dictionary'
import { UserDefinedValue } from '__spec_utils/UserDefinedValue'
import { AdjacencyMatrixAggregation } from './bucket/adjacency_matrix/AdjacencyMatrixAggregation'
import { AutoDateHistogramAggregation } from './bucket/auto_date_histogram/AutoDateHistogramAggregation'
import { ChildrenAggregation } from './bucket/children/ChildrenAggregation'
import { CompositeAggregation } from './bucket/composite/CompositeAggregation'
import { DateHistogramAggregation } from './bucket/date_histogram/DateHistogramAggregation'
import { DateRangeAggregation } from './bucket/date_range/DateRangeAggregation'
import { DiversifiedSamplerAggregation } from './bucket/diversified_sampler/DiversifiedSamplerAggregation'
import { FiltersAggregation } from './bucket/filters/FiltersAggregation'
import { GeoDistanceAggregation } from './bucket/geo_distance/GeoDistanceAggregation'
import { GeoHashGridAggregation } from './bucket/geo_hash_grid/GeoHashGridAggregation'
import { GeoTileGridAggregation } from './bucket/geo_tile_grid/GeoTileGridAggregation'
import { GlobalAggregation } from './bucket/global/GlobalAggregation'
import { HistogramAggregation } from './bucket/histogram/HistogramAggregation'
import { IpRangeAggregation } from './bucket/ip_range/IpRangeAggregation'
import { MissingAggregation } from './bucket/missing/MissingAggregation'
import { MultiTermsAggregation } from './bucket/multi_terms/MultiTermsAggregation'
import { NestedAggregation } from './bucket/nested/NestedAggregation'
import { ParentAggregation } from './bucket/parent/ParentAggregation'
import { RangeAggregation } from './bucket/range/RangeAggregation'
import { RareTermsAggregation } from './bucket/rare_terms/RareTermsAggregation'
import { ReverseNestedAggregation } from './bucket/reverse_nested/ReverseNestedAggregation'
import { SamplerAggregation } from './bucket/sampler/SamplerAggregation'
import { SignificantTermsAggregation } from './bucket/significant_terms/SignificantTermsAggregation'
import { SignificantTextAggregation } from './bucket/significant_text/SignificantTextAggregation'
import { TermsAggregation } from './bucket/terms/TermsAggregation'
import { VariableWidthHistogramAggregation } from './bucket/variable_width_histogram/VariableWidthHistogramAggregation'
import { MatrixStatsAggregation } from './matrix/matrix_stats/MatrixStatsAggregation'
import { AverageAggregation } from './metric/average/AverageAggregation'
import { BoxplotAggregation } from './metric/boxplot/BoxplotAggregation'
import { CardinalityAggregation } from './metric/cardinality/CardinalityAggregation'
import { ExtendedStatsAggregation } from './metric/extended_stats/ExtendedStatsAggregation'
import { GeoBoundsAggregation } from './metric/geo_bounds/GeoBoundsAggregation'
import { GeoCentroidAggregation } from './metric/geo_centroid/GeoCentroidAggregation'
import { GeoLineAggregation } from './metric/geo_line/GeoLineAggregation'
import { MaxAggregation } from './metric/max/MaxAggregation'
import { MedianAbsoluteDeviationAggregation } from './metric/median_absolute_deviation/MedianAbsoluteDeviationAggregation'
import { MinAggregation } from './metric/min/MinAggregation'
import { PercentilesAggregation } from './metric/percentiles/PercentilesAggregation'
import { PercentileRanksAggregation } from './metric/percentile_ranks/PercentileRanksAggregation'
import { RateAggregation } from './metric/rate/RateAggregation'
import { ScriptedMetricAggregation } from './metric/scripted_metric/ScriptedMetricAggregation'
import { StatsAggregation } from './metric/stats/StatsAggregation'
import { StringStatsAggregation } from './metric/string_stats/StringStatsAggregation'
import { SumAggregation } from './metric/sum/SumAggregation'
import { TopHitsAggregation } from './metric/top_hits/TopHitsAggregation'
import { TopMetricsAggregation } from './metric/top_metrics/TopMetricsAggregation'
import { TTestAggregation } from './metric/t_test/TTestAggregation'
import { ValueCountAggregation } from './metric/value_count/ValueCountAggregation'
import { WeightedAverageAggregation } from './metric/weighted_average/WeightedAverageAggregation'
import { AverageBucketAggregation } from './pipeline/average_bucket/AverageBucketAggregation'
import { BucketScriptAggregation } from './pipeline/bucket_script/BucketScriptAggregation'
import { BucketSelectorAggregation } from './pipeline/bucket_selector/BucketSelectorAggregation'
import { BucketSortAggregation } from './pipeline/bucket_sort/BucketSortAggregation'
import { CumulativeCardinalityAggregation } from './pipeline/cumulative_cardinality/CumulativeCardinalityAggregation'
import { CumulativeSumAggregation } from './pipeline/cumulative_sum/CumulativeSumAggregation'
import { DerivativeAggregation } from './pipeline/derivative/DerivativeAggregation'
import { ExtendedStatsBucketAggregation } from './pipeline/extended_stats_bucket/ExtendedStatsBucketAggregation'
import { InferenceAggregation } from './pipeline/inference_bucket/InferenceBucketAggregation'
import { MaxBucketAggregation } from './pipeline/max_bucket/MaxBucketAggregation'
import { MinBucketAggregation } from './pipeline/min_bucket/MinBucketAggregation'
import { MovingAverageAggregation } from './pipeline/moving_average/MovingAverageAggregation'
import { MovingFunctionAggregation } from './pipeline/moving_function/MovingFunctionAggregation'
import { MovingPercentilesAggregation } from './pipeline/moving_percentiles/MovingPercentilesAggregation'
import { NormalizeAggregation } from './pipeline/normalize/NormalizeAggregation'
import { PercentilesBucketAggregation } from './pipeline/percentiles_bucket/PercentilesBucketAggregation'
import { SerialDifferencingAggregation } from './pipeline/serial_differencing/SerialDifferencingAggregation'
import { StatsBucketAggregation } from './pipeline/stats_bucket/StatsBucketAggregation'
import { SumBucketAggregation } from './pipeline/sum_bucket/SumBucketAggregation'

export class AggregationContainer {
  adjacency_matrix?: AdjacencyMatrixAggregation
  aggs?: Dictionary<string, AggregationContainer>
  aggregations?: Dictionary<string, AggregationContainer>
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
  meta?: Dictionary<string, UserDefinedValue>
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
