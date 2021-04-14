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

import { Field, integer, Name } from '@common/common'
import { PipelineAggregationBase } from '../PipelineAggregationBase'

export class InferenceAggregation extends PipelineAggregationBase {
  model_id: Name
  inference_config?: InferenceConfigContainer
}

export class InferenceConfigContainer {
  regression?: RegressionInferenceOptions
  classification?: ClassificationInferenceOptions
}

export class RegressionInferenceOptions {
  results_field: Field
  num_top_feature_importance_values?: integer
}

export class ClassificationInferenceOptions {
  num_top_classes?: integer
  num_top_feature_importance_values?: integer
  prediction_field_type?: string
}
