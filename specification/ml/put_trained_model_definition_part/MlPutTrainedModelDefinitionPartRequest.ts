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
import { integer, long } from '@_types/Numeric'

/**
 * Create part of a trained model definition.
 * @rest_spec_name ml.put_trained_model_definition_part
 * @availability stack since=8.0.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_ml
 * @doc_tag ml trained model
 * @doc_id put-trained-model-definition-part
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_ml/trained_models/{model_id}/definition/{part}'
      methods: ['PUT']
    }
  ]
  path_parts: {
    /**
     * The unique identifier of the trained model.
     */
    model_id: Id
    /**
     * The definition part number. When the definition is loaded for inference the definition parts are streamed in the
     * order of their part number. The first part must be `0` and the final part must be `total_parts - 1`.
     */
    part: integer
  }
  body: {
    /**
     * The definition part for the model. Must be a base64 encoded string.
     */
    definition: string
    /**
     * The total uncompressed definition length in bytes. Not base64 encoded.
     */
    total_definition_length: long
    /**
     * The total number of parts that will be uploaded. Must be greater than 0.
     */
    total_parts: integer
  }
}
