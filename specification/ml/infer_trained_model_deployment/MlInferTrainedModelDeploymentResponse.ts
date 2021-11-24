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
import { TrainedModelEntities } from '@ml/_types/TrainedModel'

export class Response {
  body: {
    /**
     * If the model is trained for named entity recognition (NER) tasks, the response contains the recognized entities.
     */
    entities?: TrainedModelEntities[]
    /**
     * If the model is trained for a text classification task, the response is a predicted label.
     * For named entity recognition (NER) tasks, the response contains the annotated text output.
     */
    predicted_value?: string
    /**
     * If the model is trained for a text classification task, the response is a confidence score.
     */
    prediction_probability?: double
      /**
       * True if the input text was truncated to meet the model's maximum sequence length limit. is_truncated is present only when it is true.
       */
      is_truncated?: boolean
  }
}
