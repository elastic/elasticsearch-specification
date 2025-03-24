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
 * Create an OpenAI inference endpoint.
 *
 * Create an inference endpoint to perform an inference task with the `openai` service or `openai` compatible APIs.
 *
 * When you create an inference endpoint, the associated machine learning model is automatically deployed if it is not already running.
 * After creating the endpoint, wait for the model deployment to complete before using it.
 * To verify the deployment status, use the get trained model statistics API.
 * Look for `"state": "fully_allocated"` in the response and ensure that the `"allocation_count"` matches the `"target_allocation_count"`.
 * Avoid creating multiple endpoints for the same model unless required, as each endpoint consumes significant resources.
 * @rest_spec_name inference.put_openai
 * @availability stack since=8.12.0 stability=stable visibility=public
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_inference
 * @doc_id inference-api-put-openai
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_inference/{task_type}/{openai_inference_id}'
      methods: ['PUT']
    }
  ]
  path_parts: {
    /**
     * The type of the inference task that the model will perform.
     * NOTE: The `chat_completion` task type only supports streaming and only through the _stream API.
     */
    task_type: OpenAITaskType
    /**
     * The unique identifier of the inference endpoint.
     */
    openai_inference_id: Id
  }
  body: {
    /**
     * The chunking configuration object.
     * @ext_doc_id inference-chunking
     */
    chunking_settings?: InferenceChunkingSettings
    /**
     * The type of service supported for the specified task type. In this case, `openai`.
     */
    service: ServiceType
    /**
     * Settings used to install the inference model. These settings are specific to the `openai` service.
     */
    service_settings: OpenAIServiceSettings
    /**
     * Settings to configure the inference task.
     * These settings are specific to the task type you specified.
     */
    task_settings?: OpenAITaskSettings
  }
}

export enum OpenAITaskType {
  chat_completion,
  completion,
  text_embedding
}

export enum ServiceType {
  openai
}

export class OpenAIServiceSettings {
  /**
   * A valid API key of your OpenAI account.
   * You can find your OpenAI API keys in your OpenAI account under the API keys section.
   *
   * IMPORTANT: You need to provide the API key only once, during the inference model creation.
   * The get inference endpoint API does not retrieve your API key.
   * After creating the inference model, you cannot change the associated API key.
   * If you want to use a different API key, delete the inference model and recreate it with the same name and the updated API key.
   * @ext_doc_id openai-api-keys
   */
  api_key: string
  /**
   * The number of dimensions the resulting output embeddings should have.
   * It is supported only in `text-embedding-3` and later models.
   * If it is not set, the OpenAI defined default for the model is used.
   */
  dimensions?: integer
  /**
   * The name of the model to use for the inference task.
   * Refer to the OpenAI documentation for the list of available text embedding models.
   * @ext_doc_id openai-models
   */
  model_id: string
  /**
   * The unique identifier for your organization.
   * You can find the Organization ID in your OpenAI account under *Settings > Organizations*.
   */
  organization_id?: string
  /**
   * This setting helps to minimize the number of rate limit errors returned from OpenAI.
   * The `openai` service sets a default number of requests allowed per minute depending on the task type.
   * For `text_embedding`, it is set to `3000`.
   * For `completion`, it is set to `500`.
   */
  rate_limit?: RateLimitSetting
  /**
   * The URL endpoint to use for the requests.
   * It can be changed for testing purposes.
   * @server_default https://api.openai.com/v1/embeddings.
   */
  url?: string
}

export class OpenAITaskSettings {
  /**
   * For a `completion` or `text_embedding` task, specify the user issuing the request.
   * This informaiton can be used for abuse detection.
   */
  user?: string
}
