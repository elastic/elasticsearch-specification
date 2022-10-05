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

export class PipelineAggregationBase extends Aggregation {
  buckets_path?: BucketsPath
  format?: string
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
  script?: Script
}

export class BucketSelectorAggregation extends PipelineAggregationBase {
  script?: Script
}

export class BucketSortAggregation extends Aggregation {
  from?: integer
  gap_policy?: GapPolicy
  size?: integer
  sort?: Sort
}

export class CumulativeCardinalityAggregation extends PipelineAggregationBase {}

export class CumulativeSumAggregation extends PipelineAggregationBase {}

export class DerivativeAggregation extends PipelineAggregationBase {}

export class ExtendedStatsBucketAggregation extends PipelineAggregationBase {
  sigma?: double
}

export class InferenceAggregation extends PipelineAggregationBase {
  model_id: Name
  inference_config?: InferenceConfigContainer
}

export class InferenceConfigContainer {
  /** Regression configuration for inference. */
  regression?: RegressionInferenceOptions
  /** Classification configuration for inference. */
  classification?: ClassificationInferenceOptions
}

export class RegressionInferenceOptions {
  /** The field that is added to incoming documents to contain the inference prediction. Defaults to predicted_value. */
  results_field?: Field
  /**
   * Specifies the maximum number of feature importance values per document. By default, it is zero and no feature importance calculation occurs.
   * @doc_url https://www.elastic.co/guide/en/machine-learning/7.12/ml-feature-importance.html
   */
  num_top_feature_importance_values?: integer
}

export class ClassificationInferenceOptions {
  /** Specifies the number of top class predictions to return. Defaults to 0. */
  num_top_classes?: integer
  /**
   * Specifies the maximum number of feature importance values per document. By default, it is zero and no feature importance calculation occurs.
   * @doc_url https://www.elastic.co/guide/en/machine-learning/7.12/ml-feature-importance.html
   */
  num_top_feature_importance_values?: integer
  /** Specifies the type of the predicted field to write. Acceptable values are: string, number, boolean. When boolean is provided 1.0 is transformed to true and 0.0 to false. */
  prediction_field_type?: string
  /** The field that is added to incoming documents to contain the inference prediction. Defaults to predicted_value. */
  results_field?: string
  /** Specifies the field to which the top classes are written. Defaults to top_classes. */
  top_classes_results_field?: string
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
