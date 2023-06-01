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

import { RequestBase } from '@_types/Base'
import { Id } from '@_types/common'

/**
 * Creates a trained model vocabulary.
 * This API is supported only for natural language processing (NLP) models.
 * The vocabulary is stored in the index as described in `inference_config.*.vocabulary` of the trained model definition.
 * @rest_spec_name ml.put_trained_model_vocabulary
 * @availability stack since=8.0.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_ml
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * The unique identifier of the trained model.
     */
    model_id: Id
  }
  body: {
    /**
     * The model vocabulary, which must not be empty.
     */
    vocabulary: string[]

    /**
     * The optional model merges if required by the tokenizer.
     * @availability stack since=8.2.0
     * @availability serverless
     */
    merges?: string[]
  }
}
