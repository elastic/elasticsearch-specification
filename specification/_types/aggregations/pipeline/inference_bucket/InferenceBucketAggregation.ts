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

import { Field, Name } from '@_types/common'
import { integer } from '@_types/Numeric'
import { PipelineAggregationBase } from '../PipelineAggregationBase'

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
  results_field: Field
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
