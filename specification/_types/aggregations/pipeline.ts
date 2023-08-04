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

import { Sort } from '@_types/sort'
import { Dictionary } from '@spec_utils/Dictionary'
import { Name, Field, EmptyObject } from '@_types/common'
import { integer, double, float } from '@_types/Numeric'
import { Script } from '@_types/Scripting'
import { Aggregation } from './Aggregation'
import {
  RegressionInferenceOptions,
  ClassificationInferenceOptions
} from '@ml/_types/inference'

export class BucketPathAggregation extends Aggregation {
  /**
   * Path to the buckets that contain one set of values to correlate.
   * @doc_id search-aggregations-pipeline-bucket-path
   */
  buckets_path?: BucketsPath
}

export class PipelineAggregationBase extends BucketPathAggregation {
  /**
   * DecimalFormat pattern for the output value.
   * If specified, the formatted value is returned in the aggregation’s `value_as_string` property.
   */
  format?: string
  /**
   * Policy to apply when gaps are found in the data.
   * @doc_id gap-policy
   * @server_default skip
   */
  gap_policy?: GapPolicy
}

/**
 * Buckets path can be expressed in different ways, and an aggregation may accept some or all of these
 * forms depending on its type. Please refer to each aggregation's documentation to know what buckets
 * path forms they accept.
 * @codegen_names single, array, dict
 */
export type BucketsPath = string | string[] | Dictionary<string, string>

export enum GapPolicy {
  /**
   * Treats missing data as if the bucket does not exist. It will skip the bucket and
   * continue calculating using the next available value.
   */
  skip,
  /**
   * Replace missing values with a zero (0) and pipeline aggregation computation will proceed as normal.
   */
  insert_zeros,
  /**
   * Similar to skip, except if the metric provides a non-null, non-NaN value this value is used,
   * otherwise the empty bucket is skipped.
   */
  keep_values
}

export class AverageBucketAggregation extends PipelineAggregationBase {}

export class BucketScriptAggregation extends PipelineAggregationBase {
  /**
   * The script to run for this aggregation.
   */
  script?: Script
}

export class BucketSelectorAggregation extends PipelineAggregationBase {
  /**
   * The script to run for this aggregation.
   */
  script?: Script
}

/**
 * A sibling pipeline aggregation which executes a two sample Kolmogorov–Smirnov test (referred
 * to as a "K-S test" from now on) against a provided distribution, and the distribution implied
 * by the documents counts in the configured sibling aggregation. Specifically, for some metric,
 * assuming that the percentile intervals of the metric are known beforehand or have been computed
 * by an aggregation, then one would use range aggregation for the sibling to compute the p-value
 * of the distribution difference between the metric and the restriction of that metric to a subset
 * of the documents. A natural use case is if the sibling aggregation range aggregation nested in a
 * terms aggregation, in which case one compares the overall distribution of metric to its restriction
 * to each term.
 */
export class BucketKsAggregation extends BucketPathAggregation {
  /**
   * A list of string values indicating which K-S test alternative to calculate. The valid values
   * are: "greater", "less", "two_sided". This parameter is key for determining the K-S statistic used
   * when calculating the K-S test. Default value is all possible alternative hypotheses.
   */
  alternative?: string[]
  /**
   * A list of doubles indicating the distribution of the samples with which to compare to the `buckets_path` results.
   * In typical usage this is the overall proportion of documents in each bucket, which is compared with the actual
   * document proportions in each bucket from the sibling aggregation counts. The default is to assume that overall
   * documents are uniformly distributed on these buckets, which they would be if one used equal percentiles of a
   * metric to define the bucket end points.
   */
  fractions?: double[]
  /**
   * Indicates the sampling methodology when calculating the K-S test. Note, this is sampling of the returned values.
   * This determines the cumulative distribution function (CDF) points used comparing the two samples. Default is
   * `upper_tail`, which emphasizes the upper end of the CDF points. Valid options are: `upper_tail`, `uniform`,
   * and `lower_tail`.
   */
  sampling_method?: string
}

/**
 * A sibling pipeline aggregation which executes a correlation function on the configured sibling multi-bucket aggregation.
 */
export class BucketCorrelationAggregation extends BucketPathAggregation {
  /** The correlation function to execute. */
  function: BucketCorrelationFunction
}

export class BucketCorrelationFunction {
  /**
   * The configuration to calculate a count correlation. This function is designed for determining the correlation of a term value and a given metric.
   */
  count_correlation: BucketCorrelationFunctionCountCorrelation
}

export class BucketCorrelationFunctionCountCorrelation {
  /** The indicator with which to correlate the configured `bucket_path` values. */
  indicator: BucketCorrelationFunctionCountCorrelationIndicator
}

export class BucketCorrelationFunctionCountCorrelationIndicator {
  /**
   * The total number of documents that initially created the expectations. It’s required to be greater
   * than or equal to the sum of all values in the buckets_path as this is the originating superset of data
   * to which the term values are correlated.
   */
  doc_count: integer
  /**
   * An array of numbers with which to correlate the configured `bucket_path` values.
   * The length of this value must always equal the number of buckets returned by the `bucket_path`.
   */
  expectations: double[]
  /**
   * An array of fractions to use when averaging and calculating variance. This should be used if
   * the pre-calculated data and the buckets_path have known gaps. The length of fractions, if provided,
   * must equal expectations.
   */
  fractions?: double[]
}

export class BucketSortAggregation extends Aggregation {
  /**
   * Buckets in positions prior to `from` will be truncated.
   */
  from?: integer
  /**
   * The policy to apply when gaps are found in the data.
   * @doc_id gap-policy
   * @server_default skip
   */
  gap_policy?: GapPolicy
  /**
   * The number of buckets to return.
   * Defaults to all buckets of the parent aggregation.
   */
  size?: integer
  /**
   * The list of fields to sort on.
   * @doc_id sort-search-results
   */
  sort?: Sort
}

export class CumulativeCardinalityAggregation extends PipelineAggregationBase {}

export class CumulativeSumAggregation extends PipelineAggregationBase {}

export class DerivativeAggregation extends PipelineAggregationBase {}

export class ExtendedStatsBucketAggregation extends PipelineAggregationBase {
  /**
   * The number of standard deviations above/below the mean to display.
   */
  sigma?: double
}

export class InferenceAggregation extends PipelineAggregationBase {
  model_id: Name
  inference_config?: InferenceConfigContainer
}

/** @variants container */
class InferenceConfigContainer {
  /** Regression configuration for inference. */
  regression?: RegressionInferenceOptions
  /** Classification configuration for inference. */
  classification?: ClassificationInferenceOptions
}

export class MaxBucketAggregation extends PipelineAggregationBase {}

export class MinBucketAggregation extends PipelineAggregationBase {}

/** @variants internal tag=model */
export type MovingAverageAggregation =
  | LinearMovingAverageAggregation
  | SimpleMovingAverageAggregation
  | EwmaMovingAverageAggregation
  | HoltMovingAverageAggregation
  | HoltWintersMovingAverageAggregation

export class MovingAverageAggregationBase extends PipelineAggregationBase {
  minimize?: boolean
  predict?: integer
  window?: integer
}

export class LinearMovingAverageAggregation extends MovingAverageAggregationBase {
  model: 'linear'
  settings: EmptyObject
}

export class SimpleMovingAverageAggregation extends MovingAverageAggregationBase {
  model: 'simple'
  settings: EmptyObject
}

export class EwmaMovingAverageAggregation extends MovingAverageAggregationBase {
  model: 'ewma'
  settings: EwmaModelSettings
}

export class HoltMovingAverageAggregation extends MovingAverageAggregationBase {
  model: 'holt'
  settings: HoltLinearModelSettings
}

export class HoltWintersMovingAverageAggregation extends MovingAverageAggregationBase {
  model: 'holt_winters'
  settings: HoltWintersModelSettings
}

export class EwmaModelSettings {
  alpha?: float
}

export class HoltLinearModelSettings {
  alpha?: float
  beta?: float
}
export class HoltWintersModelSettings {
  alpha?: float
  beta?: float
  gamma?: float
  pad?: boolean
  period?: integer
  type?: HoltWintersType
}
export enum HoltWintersType {
  /** @codegen_name Additive */
  add,
  /** @codegen_name Multiplicative */
  mult
}

export class MovingFunctionAggregation extends PipelineAggregationBase {
  script?: string
  shift?: integer
  window?: integer
}

export class MovingPercentilesAggregation extends PipelineAggregationBase {
  window?: integer
  shift?: integer
  keyed?: boolean
}

export class NormalizeAggregation extends PipelineAggregationBase {
  method?: NormalizeMethod
}

export enum NormalizeMethod {
  rescale_0_1,
  rescale_0_100,
  percent_of_sum,
  mean,
  /** @codegen_name z_score */
  'z-score',
  softmax
}

export class PercentilesBucketAggregation extends PipelineAggregationBase {
  percents?: double[]
}

export class SerialDifferencingAggregation extends PipelineAggregationBase {
  lag?: integer
}

export class StatsBucketAggregation extends PipelineAggregationBase {}

export class SumBucketAggregation extends PipelineAggregationBase {}
