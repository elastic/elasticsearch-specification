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

import { Sort } from '@global/search/_types/sort'
import { Name, Field } from '@_types/common'
import { integer, double, float } from '@_types/Numeric'
import { Script } from '@_types/Scripting'
import { Aggregation } from './Aggregation'

export class PipelineAggregationBase extends Aggregation {
  buckets_path?: BucketsPath
  format?: string
  gap_policy?: GapPolicy
}

export enum GapPolicy {
  skip = 0,
  insert_zeros = 1
}

export class BucketsPath {}

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

export class MovingAverageAggregation extends PipelineAggregationBase {
  minimize?: boolean
  model?: MovingAverageModel
  settings: MovingAverageSettings
  predict?: integer
  window?: integer
}

export enum MovingAverageModel {
  linear,
  simple,
  ewma,
  holt,
  holt_winters
}

export type MovingAverageSettings =
  | EwmaModelSettings
  | HoltLinearModelSettings
  | HoltWintersModelSettings

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
  /** @identifier Additive */
  add,
  /** @identifier Multiplicative */
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
  /** @identifier z_score */
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
