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

import { Metadata } from '@_types/common'
import { double, integer } from '@_types/Numeric'
import { QueryContainer } from '@_types/query_dsl/abstractions'
import { Dictionary } from '@spec_utils/Dictionary'
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
  FrequentItemSetsAggregation,
  GeoDistanceAggregation,
  GeoHashGridAggregation,
  GeohexGridAggregation,
  GeoTileGridAggregation,
  GlobalAggregation,
  HistogramAggregation,
  IpPrefixAggregation,
  IpRangeAggregation,
  MissingAggregation,
  MultiTermsAggregation,
  NestedAggregation,
  ParentAggregation,
  RandomSamplerAggregation,
  RangeAggregation,
  RareTermsAggregation,
  ReverseNestedAggregation,
  SamplerAggregation,
  SignificantTermsAggregation,
  SignificantTextAggregation,
  TermsAggregation,
  TimeSeriesAggregation,
  VariableWidthHistogramAggregation
} from './bucket'
import { MatrixStatsAggregation } from './matrix'
import {
  AverageAggregation,
  BoxplotAggregation,
  CardinalityAggregation,
  CartesianBoundsAggregation,
  CartesianCentroidAggregation,
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
  TopMetricsAggregation,
  TTestAggregation,
  ValueCountAggregation,
  WeightedAverageAggregation
} from './metric'
import {
  AverageBucketAggregation,
  BucketCorrelationAggregation,
  BucketKsAggregation,
  BucketScriptAggregation,
  BucketSelectorAggregation,
  BucketSortAggregation,
  ChangePointAggregation,
  CumulativeCardinalityAggregation,
  CumulativeSumAggregation,
  DerivativeAggregation,
  ExtendedStatsBucketAggregation,
  InferenceAggregation,
  MaxBucketAggregation,
  MinBucketAggregation,
  MovingAverageAggregation,
  MovingFunctionAggregation,
  MovingPercentilesAggregation,
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
   * Sub-aggregations for this aggregation.
   * Only applies to bucket aggregations.
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
   * The request provides a collection of named filter expressions, similar to the `filters` aggregation.
   * Each bucket in the response represents a non-empty cell in the matrix of intersecting filters.
   * @ext_doc_id search-aggregations-bucket-adjacency-matrix-aggregation
   */
  adjacency_matrix?: AdjacencyMatrixAggregation
  /**
   * A multi-bucket aggregation similar to the date histogram, except instead of providing an interval to use as the width of each bucket, a target number of buckets is provided.
   * @ext_doc_id search-aggregations-bucket-autodatehistogram-aggregation
   */
  auto_date_histogram?: AutoDateHistogramAggregation
  /**
   * A single-value metrics aggregation that computes the average of numeric values that are extracted from the aggregated documents.
   * @ext_doc_id search-aggregations-metrics-avg-aggregation
   */
  avg?: AverageAggregation
  /**
   * A sibling pipeline aggregation which calculates the mean value of a specified metric in a sibling aggregation.
   * The specified metric must be numeric and the sibling aggregation must be a multi-bucket aggregation.
   * @ext_doc_id search-aggregations-pipeline-avg-bucket-aggregation
   */
  avg_bucket?: AverageBucketAggregation
  /**
   * A metrics aggregation that computes a box plot of numeric values extracted from the aggregated documents.
   * @ext_doc_id search-aggregations-metrics-boxplot-aggregation
   */
  boxplot?: BoxplotAggregation
  /**
   * A parent pipeline aggregation which runs a script which can perform per bucket computations on metrics in the parent multi-bucket aggregation.
   * @ext_doc_id search-aggregations-pipeline-bucket-script-aggregation
   */
  bucket_script?: BucketScriptAggregation
  /**
   * A parent pipeline aggregation which runs a script to determine whether the current bucket will be retained in the parent multi-bucket aggregation.
   * @ext_doc_id search-aggregations-pipeline-bucket-selector-aggregation
   */
  bucket_selector?: BucketSelectorAggregation
  /**
   * A parent pipeline aggregation which sorts the buckets of its parent multi-bucket aggregation.
   * @ext_doc_id search-aggregations-pipeline-bucket-sort-aggregation
   */
  bucket_sort?: BucketSortAggregation
  /**
   * A sibling pipeline aggregation which runs a two sample Kolmogorov–Smirnov test ("K-S test") against a provided distribution and the distribution implied by the documents counts in the configured sibling aggregation.
   * @ext_doc_id search-aggregations-bucket-count-ks-test-aggregation
   * @availability stack stability=experimental
   * @availability serverless stability=experimental
   */
  bucket_count_ks_test?: BucketKsAggregation
  /**
   * A sibling pipeline aggregation which runs a correlation function on the configured sibling multi-bucket aggregation.
   * @ext_doc_id search-aggregations-bucket-correlation-aggregation
   * @availability stack stability=experimental
   * @availability serverless stability=experimental
   */
  bucket_correlation?: BucketCorrelationAggregation
  /**
   * A single-value metrics aggregation that calculates an approximate count of distinct values.
   * @ext_doc_id search-aggregations-metrics-cardinality-aggregation
   */
  cardinality?: CardinalityAggregation
  /**
   * A metric aggregation that computes the spatial bounding box containing all values for a Point or Shape field.
   * @ext_doc_id search-aggregations-metrics-cartesian-bounds-aggregation
   */
  cartesian_bounds?: CartesianBoundsAggregation
  /**
   * A metric aggregation that computes the weighted centroid from all coordinate values for point and shape fields.
   * @ext_doc_id search-aggregations-metrics-cartesian-centroid-aggregation
   */
  cartesian_centroid?: CartesianCentroidAggregation
  /**
   * A multi-bucket aggregation that groups semi-structured text into buckets.
   * @ext_doc_id search-aggregations-bucket-categorize-text-aggregation
   * @availability stack stability=experimental
   * @availability serverless stability=experimental
   */
  categorize_text?: CategorizeTextAggregation
  /**
   * A sibling pipeline that detects, spikes, dips, and change points in a metric.
   * Given a distribution of values provided by the sibling multi-bucket aggregation,
   * this aggregation indicates the bucket of any spike or dip and/or the bucket at which
   * the largest change in the distribution of values, if they are statistically significant.
   * @ext_doc_id search-aggregations-change-point-aggregation
   */
  change_point?: ChangePointAggregation
  /**
   * A single bucket aggregation that selects child documents that have the specified type, as defined in a `join` field.
   * @ext_doc_id search-aggregations-bucket-children-aggregation
   */
  children?: ChildrenAggregation
  /**
   * A multi-bucket aggregation that creates composite buckets from different sources.
   * Unlike the other multi-bucket aggregations, you can use the `composite` aggregation to paginate *all* buckets from a multi-level aggregation efficiently.
   */
  composite?: CompositeAggregation
  /**
   * A parent pipeline aggregation which calculates the cumulative cardinality in a parent `histogram` or `date_histogram` aggregation.
   * @ext_doc_id search-aggregations-pipeline-cumulative-cardinality-aggregation
   */
  cumulative_cardinality?: CumulativeCardinalityAggregation
  /**
   * A parent pipeline aggregation which calculates the cumulative sum of a specified metric in a parent `histogram` or `date_histogram` aggregation.
   * @ext_doc_id search-aggregations-pipeline-cumulative-sum-aggregation
   */
  cumulative_sum?: CumulativeSumAggregation
  /**
   * A multi-bucket values source based aggregation that can be applied on date values or date range values extracted from the documents.
   * It dynamically builds fixed size (interval) buckets over the values.
   * @ext_doc_id search-aggregations-bucket-datehistogram-aggregation
   */
  date_histogram?: DateHistogramAggregation
  /**
   * A multi-bucket value source based aggregation that enables the user to define a set of date ranges - each representing a bucket.
   * @ext_doc_id search-aggregations-bucket-daterange-aggregation
   */
  date_range?: DateRangeAggregation
  /**
   * A parent pipeline aggregation which calculates the derivative of a specified metric in a parent `histogram` or `date_histogram` aggregation.
   * @ext_doc_id search-aggregations-pipeline-derivative-aggregation
   */
  derivative?: DerivativeAggregation
  /**
   * A filtering aggregation used to limit any sub aggregations' processing to a sample of the top-scoring documents.
   * Similar to the `sampler` aggregation, but adds the ability to limit the number of matches that share a common value.
   * @ext_doc_id search-aggregations-bucket-diversified-sampler-aggregation
   */
  diversified_sampler?: DiversifiedSamplerAggregation
  /**
   * A multi-value metrics aggregation that computes stats over numeric values extracted from the aggregated documents.
   * @ext_doc_id search-aggregations-metrics-extendedstats-aggregation
   */
  extended_stats?: ExtendedStatsAggregation
  /**
   * A sibling pipeline aggregation which calculates a variety of stats across all bucket of a specified metric in a sibling aggregation.
   * @ext_doc_id search-aggregations-pipeline-extended-stats-bucket-aggregation
   */
  extended_stats_bucket?: ExtendedStatsBucketAggregation
  /**
   * A bucket aggregation which finds frequent item sets, a form of association rules mining that identifies items that often occur together.
   * @ext_doc_id search-aggregations-bucket-frequent-item-sets-aggregation
   * @aliases frequent_items
   */
  frequent_item_sets?: FrequentItemSetsAggregation
  /**
   * A single bucket aggregation that narrows the set of documents to those that match a query.
   * @ext_doc_id search-aggregations-bucket-filter-aggregation
   */
  filter?: QueryContainer
  /**
   * A multi-bucket aggregation where each bucket contains the documents that match a query.
   * @ext_doc_id search-aggregations-bucket-filters-aggregation
   */
  filters?: FiltersAggregation
  /**
   * A metric aggregation that computes the geographic bounding box containing all values for a Geopoint or Geoshape field.
   * @ext_doc_id search-aggregations-metrics-geobounds-aggregation
   */
  geo_bounds?: GeoBoundsAggregation
  /**
   * A metric aggregation that computes the weighted centroid from all coordinate values for geo fields.
   * @ext_doc_id search-aggregations-metrics-geocentroid-aggregation
   */
  geo_centroid?: GeoCentroidAggregation
  /**
   * A multi-bucket aggregation that works on `geo_point` fields.
   * Evaluates the distance of each document value from an origin point and determines the buckets it belongs to, based on ranges defined in the request.
   * @ext_doc_id search-aggregations-bucket-geodistance-aggregation
   */
  geo_distance?: GeoDistanceAggregation
  /**
   * A multi-bucket aggregation that groups `geo_point` and `geo_shape` values into buckets that represent a grid.
   * Each cell is labeled using a geohash which is of user-definable precision.
   * @ext_doc_id search-aggregations-bucket-geohashgrid-aggregation
   */
  geohash_grid?: GeoHashGridAggregation
  /**
   * Aggregates all `geo_point` values within a bucket into a `LineString` ordered by the chosen sort field.
   * @ext_doc_id search-aggregations-metrics-geo-line
   */
  geo_line?: GeoLineAggregation
  /**
   * A multi-bucket aggregation that groups `geo_point` and `geo_shape` values into buckets that represent a grid.
   * Each cell corresponds to a map tile as used by many online map sites.
   * @ext_doc_id search-aggregations-bucket-geotilegrid-aggregation
   */
  geotile_grid?: GeoTileGridAggregation
  /**
   * A multi-bucket aggregation that groups `geo_point` and `geo_shape` values into buckets that represent a grid.
   * Each cell corresponds to a H3 cell index and is labeled using the H3Index representation.
   * @ext_doc_id search-aggregations-bucket-geohexgrid-aggregation
   */
  geohex_grid?: GeohexGridAggregation
  /**
   * Defines a single bucket of all the documents within the search execution context.
   * This context is defined by the indices and the document types you’re searching on, but is not influenced by the search query itself.
   * @ext_doc_id search-aggregations-bucket-global-aggregation
   */
  global?: GlobalAggregation
  /**
   * A multi-bucket values source based aggregation that can be applied on numeric values or numeric range values extracted from the documents.
   * It dynamically builds fixed size (interval) buckets over the values.
   * @ext_doc_id search-aggregations-bucket-histogram-aggregation
   */
  histogram?: HistogramAggregation
  /**
   * A multi-bucket value source based aggregation that enables the user to define a set of IP ranges - each representing a bucket.
   * @ext_doc_id search-aggregations-bucket-iprange-aggregation
   */
  ip_range?: IpRangeAggregation
  /**
   * A bucket aggregation that groups documents based on the network or sub-network of an IP address.
   * @ext_doc_id search-aggregations-bucket-ipprefix-aggregation
   */
  ip_prefix?: IpPrefixAggregation
  /**
   * A parent pipeline aggregation which loads a pre-trained model and performs inference on the collated result fields from the parent bucket aggregation.
   * @ext_doc_id search-aggregations-pipeline-inference-bucket-aggregation
   */
  inference?: InferenceAggregation
  line?: GeoLineAggregation
  /**
   * A numeric aggregation that computes the following statistics over a set of document fields: `count`, `mean`, `variance`, `skewness`, `kurtosis`, `covariance`, and `covariance`.
   * @ext_doc_id search-aggregations-matrix-stats-aggregation
   */
  matrix_stats?: MatrixStatsAggregation
  /**
   * A single-value metrics aggregation that returns the maximum value among the numeric values extracted from the aggregated documents.
   * @ext_doc_id search-aggregations-metrics-max-aggregation
   */
  max?: MaxAggregation
  /**
   * A sibling pipeline aggregation which identifies the bucket(s) with the maximum value of a specified metric in a sibling aggregation and outputs both the value and the key(s) of the bucket(s).
   * @ext_doc_id search-aggregations-pipeline-max-bucket-aggregation
   */
  max_bucket?: MaxBucketAggregation
  /**
   * A single-value aggregation that approximates the median absolute deviation of its search results.
   * @ext_doc_id search-aggregations-metrics-median-absolute-deviation-aggregation
   */
  median_absolute_deviation?: MedianAbsoluteDeviationAggregation
  /**
   * A single-value metrics aggregation that returns the minimum value among numeric values extracted from the aggregated documents.
   * @ext_doc_id search-aggregations-metrics-min-aggregation
   */
  min?: MinAggregation
  /**
   * A sibling pipeline aggregation which identifies the bucket(s) with the minimum value of a specified metric in a sibling aggregation and outputs both the value and the key(s) of the bucket(s).
   * @ext_doc_id search-aggregations-pipeline-min-bucket-aggregation
   */
  min_bucket?: MinBucketAggregation
  /**
   * A field data based single bucket aggregation, that creates a bucket of all documents in the current document set context that are missing a field value (effectively, missing a field or having the configured NULL value set).
   * @ext_doc_id search-aggregations-bucket-missing-aggregation
   */
  missing?: MissingAggregation
  moving_avg?: MovingAverageAggregation
  /**
   * Given an ordered series of percentiles, "slides" a window across those percentiles and computes cumulative percentiles.
   * @ext_doc_id search-aggregations-pipeline-moving-percentiles-aggregation
   */
  moving_percentiles?: MovingPercentilesAggregation
  /**
   * Given an ordered series of data, "slides" a window across the data and runs a custom script on each window of data.
   * For convenience, a number of common functions are predefined such as `min`, `max`, and moving averages.
   * @ext_doc_id search-aggregations-pipeline-movfn-aggregation
   */
  moving_fn?: MovingFunctionAggregation
  /**
   * A multi-bucket value source based aggregation where buckets are dynamically built - one per unique set of values.
   * @ext_doc_id search-aggregations-bucket-multi-terms-aggregation
   */
  multi_terms?: MultiTermsAggregation
  /**
   * A special single bucket aggregation that enables aggregating nested documents.
   * @ext_doc_id search-aggregations-bucket-nested-aggregation
   */
  nested?: NestedAggregation
  /**
   * A parent pipeline aggregation which calculates the specific normalized/rescaled value for a specific bucket value.
   * @ext_doc_id search-aggregations-pipeline-normalize-aggregation
   */
  normalize?: NormalizeAggregation
  /**
   * A special single bucket aggregation that selects parent documents that have the specified type, as defined in a `join` field.
   * @ext_doc_id search-aggregations-bucket-parent-aggregation
   */
  parent?: ParentAggregation
  /**
   * A multi-value metrics aggregation that calculates one or more percentile ranks over numeric values extracted from the aggregated documents.
   * @ext_doc_id search-aggregations-metrics-percentile-rank-aggregation
   */
  percentile_ranks?: PercentileRanksAggregation
  /**
   * A multi-value metrics aggregation that calculates one or more percentiles over numeric values extracted from the aggregated documents.
   * @ext_doc_id search-aggregations-metrics-percentile-aggregation
   */
  percentiles?: PercentilesAggregation
  /**
   * A sibling pipeline aggregation which calculates percentiles across all bucket of a specified metric in a sibling aggregation.
   * @ext_doc_id search-aggregations-pipeline-percentiles-bucket-aggregation
   */
  percentiles_bucket?: PercentilesBucketAggregation
  /**
   * A multi-bucket value source based aggregation that enables the user to define a set of ranges - each representing a bucket.
   * @ext_doc_id search-aggregations-bucket-range-aggregation
   */
  range?: RangeAggregation
  /**
   * A multi-bucket value source based aggregation which finds "rare" terms — terms that are at the long-tail of the distribution and are not frequent.
   * @ext_doc_id search-aggregations-bucket-rare-terms-aggregation
   */
  rare_terms?: RareTermsAggregation
  /**
   * Calculates a rate of documents or a field in each bucket.
   * Can only be used inside a `date_histogram` or `composite` aggregation.
   * @ext_doc_id search-aggregations-metrics-rate-aggregation
   */
  rate?: RateAggregation
  /**
   * A special single bucket aggregation that enables aggregating on parent documents from nested documents.
   * Should only be defined inside a `nested` aggregation.
   * @ext_doc_id search-aggregations-bucket-reverse-nested-aggregation
   */
  reverse_nested?: ReverseNestedAggregation
  /**
   *
   * A single bucket aggregation that randomly includes documents in the aggregated results.
   * Sampling provides significant speed improvement at the cost of accuracy.
   * @ext_doc_id search-aggregations-random-sampler-aggregation
   * @availability stack since=8.1.0 stability=experimental

   */
  random_sampler?: RandomSamplerAggregation
  /**
   * A filtering aggregation used to limit any sub aggregations' processing to a sample of the top-scoring documents.
   * @ext_doc_id search-aggregations-bucket-sampler-aggregation
   */
  sampler?: SamplerAggregation
  /**
   * A metric aggregation that uses scripts to provide a metric output.
   * @ext_doc_id search-aggregations-metrics-scripted-metric-aggregation
   */
  scripted_metric?: ScriptedMetricAggregation
  /**
   * An aggregation that subtracts values in a time series from themselves at different time lags or periods.
   * @ext_doc_id search-aggregations-pipeline-serialdiff-aggregation
   */
  serial_diff?: SerialDifferencingAggregation
  /**
   * Returns interesting or unusual occurrences of terms in a set.
   * @ext_doc_id search-aggregations-bucket-significantterms-aggregation
   */
  significant_terms?: SignificantTermsAggregation
  /**
   * Returns interesting or unusual occurrences of free-text terms in a set.
   * @ext_doc_id search-aggregations-bucket-significanttext-aggregation
   */
  significant_text?: SignificantTextAggregation
  /**
   * A multi-value metrics aggregation that computes stats over numeric values extracted from the aggregated documents.
   * @ext_doc_id search-aggregations-metrics-stats-aggregation
   */
  stats?: StatsAggregation
  /**
   * A sibling pipeline aggregation which calculates a variety of stats across all bucket of a specified metric in a sibling aggregation.
   * @ext_doc_id search-aggregations-pipeline-stats-bucket-aggregation
   */
  stats_bucket?: StatsBucketAggregation
  /**
   * A multi-value metrics aggregation that computes statistics over string values extracted from the aggregated documents.
   * @ext_doc_id search-aggregations-metrics-string-stats-aggregation
   */
  string_stats?: StringStatsAggregation
  /**
   * A single-value metrics aggregation that sums numeric values that are extracted from the aggregated documents.
   * @ext_doc_id search-aggregations-metrics-sum-aggregation
   */
  sum?: SumAggregation
  /**
   * A sibling pipeline aggregation which calculates the sum of a specified metric across all buckets in a sibling aggregation.
   * @ext_doc_id search-aggregations-pipeline-sum-bucket-aggregation
   */
  sum_bucket?: SumBucketAggregation
  /**
   * A multi-bucket value source based aggregation where buckets are dynamically built - one per unique value.
   * @ext_doc_id search-aggregations-bucket-terms-aggregation
   */
  terms?: TermsAggregation
  /**
   * The time series aggregation queries data created using a time series index.
   * This is typically data such as metrics or other data streams with a time component, and requires creating an index using the time series mode.
   * @ext_doc_id search-aggregations-bucket-time-series-aggregation
   * @availability stack stability=experimental
   * @availability serverless stability=experimental
   */
  time_series?: TimeSeriesAggregation
  /**
   * A metric aggregation that returns the top matching documents per bucket.
   * @ext_doc_id search-aggregations-metrics-top-hits-aggregation
   */
  top_hits?: TopHitsAggregation
  /**
   * A metrics aggregation that performs a statistical hypothesis test in which the test statistic follows a Student’s t-distribution under the null hypothesis on numeric values extracted from the aggregated documents.
   * @ext_doc_id search-aggregations-metrics-ttest-aggregation
   */
  t_test?: TTestAggregation
  /**
   * A metric aggregation that selects metrics from the document with the largest or smallest sort value.
   * @ext_doc_id search-aggregations-metrics-top-metrics
   */
  top_metrics?: TopMetricsAggregation
  /**
   * A single-value metrics aggregation that counts the number of values that are extracted from the aggregated documents.
   * @ext_doc_id search-aggregations-metrics-valuecount-aggregation
   */
  value_count?: ValueCountAggregation
  /**
   * A single-value metrics aggregation that computes the weighted average of numeric values that are extracted from the aggregated documents.
   * @ext_doc_id search-aggregations-metrics-weight-avg-aggregation
   */
  weighted_avg?: WeightedAverageAggregation
  /**
   * A multi-bucket aggregation similar to the histogram, except instead of providing an interval to use as the width of each bucket, a target number of buckets is provided.
   * @ext_doc_id search-aggregations-bucket-variablewidthhistogram-aggregation
   */
  variable_width_histogram?: VariableWidthHistogramAggregation
}

export type Missing = string | integer | double | boolean
export enum MissingOrder {
  first,
  last,
  default
}
