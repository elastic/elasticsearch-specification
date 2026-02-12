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
import { Id, MediaType } from '@_types/common'
import { InferenceEndpoint } from '@inference/_types/Services'
import { TaskType } from '@inference/_types/TaskType'

/**
 * Update an inference endpoint.
 *
 * Modify `task_settings`, secrets (within `service_settings`), or `num_allocations` for an inference endpoint, depending on the specific endpoint service and `task_type`.
 *
 * IMPORTANT: The inference APIs enable you to use certain services, such as built-in machine learning models (ELSER, E5), models uploaded through Eland, Cohere, OpenAI, Azure, Google AI Studio, Google Vertex AI, Anthropic, Watsonx.ai, or Hugging Face.
 * For built-in models and models uploaded through Eland, the inference APIs offer an alternative way to use and manage trained models.
 * However, if you do not plan to use the inference APIs to use these models or if you want to use non-NLP models, use the machine learning trained model APIs.
 * @rest_spec_name inference.update
 * @category ai/ml
 * @availability stack since=8.17.0 stability=stable visibility=public
 * @cluster_privileges manage_inference
 * @doc_id inference-api-update
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_inference/{inference_id}/_update'
      methods: ['PUT']
    },
    {
      path: '/_inference/{task_type}/{inference_id}/_update'
      methods: ['PUT']
    }
  ]
  path_parts: {
    /**
     * The unique identifier of the inference endpoint.
     */
    inference_id: Id
    /**
     * The type of inference task that the model performs.
     */
    task_type?: TaskType
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  /** @codegen_name inference_config */
  body: InferenceEndpoint
}
