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

import { double } from '@_types/Numeric'
import {
  PredictedValue,
  TopClassEntry,
  TrainedModelEntities
} from '@ml/_types/TrainedModel'

export class TrainedModelInferenceResult {
  /**
   * If the model is trained for named entity recognition (NER) tasks, the response contains the recognized entities.
   */
  entities?: TrainedModelEntities[]
  /**
   * Indicates whether the input text was truncated to meet the model's maximum sequence length limit. This property
   * is present only when it is true.
   */
  is_truncated?: boolean
  /**
   * If the model is trained for a text classification or zero shot classification task, the response is the
   * predicted class.
   * For named entity recognition (NER) tasks, it contains the annotated text output.
   * For fill mask tasks, it contains the top prediction for replacing the mask token.
   * For text embedding tasks, it contains the raw numerical text embedding values.
   */
  predicted_value?: PredictedValue[]
  /**
   * For fill mask tasks, the response contains the input text sequence with the mask token replaced by the predicted
   * value.
   */
  predicted_value_sequence?: string
  /**
   * Specifies a confidence score for the predicted value.
   */
  prediction_probability?: double
  /**
   * For fill mask, text classification, and zero shot classification tasks, the response contains a list of top
   * class entries.
   */
  top_classes: TopClassEntry[]
  /**
   * If the request failed, the response contains the reason for the failure.
   */
  warning?: string
}
