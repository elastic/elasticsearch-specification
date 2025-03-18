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

import {
  InferenceChunkingSettings,
  RateLimitSetting
} from '@inference/_types/Services'
import { RequestBase } from '@_types/Base'
import { Id } from '@_types/common'
import { integer } from '@_types/Numeric'

/**
 * Create a Mistral inference endpoint.
 *
 * Creates an inference endpoint to perform an inference task with the `mistral` service.
 *
 * When you create an inference endpoint, the associated machine learning model is automatically deployed if it is not already running.
 * After creating the endpoint, wait for the model deployment to complete before using it.
 * To verify the deployment status, use the get trained model statistics API.
 * Look for `"state": "fully_allocated"` in the response and ensure that the `"allocation_count"` matches the `"target_allocation_count"`.
 * Avoid creating multiple endpoints for the same model unless required, as each endpoint consumes significant resources.
 * @rest_spec_name inference.put_mistral
 * @availability stack since=8.15.0 stability=stable visibility=public
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_inference
 * @doc_id inference-api-put-mistral
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_inference/{task_type}/{mistral_inference_id}'
      methods: ['PUT']
    }
  ]
  path_parts: {
    /**
     * The task type.
     * The only valid task type for the model to perform is `text_embedding`.
     */
    task_type: MistralTaskType
    /**
     * The unique identifier of the inference endpoint.
     */
    mistral_inference_id: Id
  }
  body: {
    /**
     * The chunking configuration object.
     * @ext_doc_id inference-chunking
     */
    chunking_settings?: InferenceChunkingSettings
    /**
     * The type of service supported for the specified task type. In this case, `mistral`.
     */
    service: ServiceType
    /**
     * Settings used to install the inference model. These settings are specific to the `mistral` service.
     */
    service_settings: MistralServiceSettings
  }
}

export enum MistralTaskType {
  text_embedding
}

export enum ServiceType {
  mistral
}

export class MistralServiceSettings {
  /**
   * A valid API key of your Mistral account.
   * You can find your Mistral API keys or you can create a new one on the API Keys page.
   *
   * IMPORTANT: You need to provide the API key only once, during the inference model creation.
   * The get inference endpoint API does not retrieve your API key.
   * After creating the inference model, you cannot change the associated API key.
   * If you want to use a different API key, delete the inference model and recreate it with the same name and the updated API key.
   * @ext_doc_id mistral-api-keys
   */
  api_key: string
  /**
   * The maximum number of tokens per input before chunking occurs.
   */
  max_input_tokens?: integer
  /**
   * The name of the model to use for the inference task.
   * Refer to the Mistral models documentation for the list of available text embedding models.
   * @ext_doc_id mistral-api-models
   */
  model: string
  /**
   * This setting helps to minimize the number of rate limit errors returned from the Mistral API.
   * By default, the `mistral` service sets the number of requests allowed per minute to 240.
   */
  rate_limit?: RateLimitSetting
}
