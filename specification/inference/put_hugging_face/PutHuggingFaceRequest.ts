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

/**
 * Create a Hugging Face inference endpoint.
 *
 * Create an inference endpoint to perform an inference task with the `hugging_face` service.
 *
 * You must first create an inference endpoint on the Hugging Face endpoint page to get an endpoint URL.
 * Select the model you want to use on the new endpoint creation page (for example `intfloat/e5-small-v2`), then select the sentence embeddings task under the advanced configuration section.
 * Create the endpoint and copy the URL after the endpoint initialization has been finished.
 *
 * The following models are recommended for the Hugging Face service:
 *
 * * `all-MiniLM-L6-v2`
 * * `all-MiniLM-L12-v2`
 * * `all-mpnet-base-v2`
 * * `e5-base-v2`
 * * `e5-small-v2`
 * * `multilingual-e5-base`
 * * `multilingual-e5-small`
 *
 * When you create an inference endpoint, the associated machine learning model is automatically deployed if it is not already running.
 * After creating the endpoint, wait for the model deployment to complete before using it.
 * To verify the deployment status, use the get trained model statistics API.
 * Look for `"state": "fully_allocated"` in the response and ensure that the `"allocation_count"` matches the `"target_allocation_count"`.
 * Avoid creating multiple endpoints for the same model unless required, as each endpoint consumes significant resources.
 * @rest_spec_name inference.put_hugging_face
 * @availability stack since=8.12.0 stability=stable visibility=public
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_inference
 * @doc_id inference-api-put-huggingface
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_inference/{task_type}/{huggingface_inference_id}'
      methods: ['PUT']
    }
  ]
  path_parts: {
    /**
     * The type of the inference task that the model will perform.
     */
    task_type: HuggingFaceTaskType
    /**
     * The unique identifier of the inference endpoint.
     */
    huggingface_inference_id: Id
  }
  body: {
    /**
     * The chunking configuration object.
     * @ext_doc_id inference-chunking
     */
    chunking_settings?: InferenceChunkingSettings
    /**
     * The type of service supported for the specified task type. In this case, `hugging_face`.
     */
    service: ServiceType
    /**
     * Settings used to install the inference model. These settings are specific to the `hugging_face` service.
     */
    service_settings: HuggingFaceServiceSettings
  }
}

export enum HuggingFaceTaskType {
  text_embedding
}

export enum ServiceType {
  hugging_face
}

export class HuggingFaceServiceSettings {
  /**
   * A valid access token for your HuggingFace account.
   * You can create or find your access tokens on the HuggingFace settings page.
   *
   * IMPORTANT: You need to provide the API key only once, during the inference model creation.
   * The get inference endpoint API does not retrieve your API key.
   * After creating the inference model, you cannot change the associated API key.
   * If you want to use a different API key, delete the inference model and recreate it with the same name and the updated API key.
   * @ext_doc_id huggingface-tokens
   */
  api_key: string
  /**
   * This setting helps to minimize the number of rate limit errors returned from Hugging Face.
   * By default, the `hugging_face` service sets the number of requests allowed per minute to 3000.
   */
  rate_limit?: RateLimitSetting
  /**
   * The URL endpoint to use for the requests.
   */
  url: string
}
