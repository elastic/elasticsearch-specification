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
import { float, integer } from '@_types/Numeric'

/**
 * Create an Azure AI studio inference endpoint.
 *
 * Create an inference endpoint to perform an inference task with the `azureaistudio` service.
 *
 * When you create an inference endpoint, the associated machine learning model is automatically deployed if it is not already running.
 * After creating the endpoint, wait for the model deployment to complete before using it.
 * To verify the deployment status, use the get trained model statistics API.
 * Look for `"state": "fully_allocated"` in the response and ensure that the `"allocation_count"` matches the `"target_allocation_count"`.
 * Avoid creating multiple endpoints for the same model unless required, as each endpoint consumes significant resources.
 * @rest_spec_name inference.put_azureaistudio
 * @availability stack since=8.14.0 stability=stable visibility=public
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_inference
 * @doc_id inference-api-put-azureaistudio
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_inference/{task_type}/{azureaistudio_inference_id}'
      methods: ['PUT']
    }
  ]
  path_parts: {
    /**
     * The type of the inference task that the model will perform.
     */
    task_type: AzureAiStudioTaskType
    /**
     * The unique identifier of the inference endpoint.
     */
    azureaistudio_inference_id: Id
  }
  body: {
    /**
     * The chunking configuration object.
     * @ext_doc_id inference-chunking
     */
    chunking_settings?: InferenceChunkingSettings
    /**
     * The type of service supported for the specified task type. In this case, `azureaistudio`.
     */
    service: ServiceType
    /**
     * Settings used to install the inference model. These settings are specific to the `openai` service.
     */
    service_settings: AzureAiStudioServiceSettings
    /**
     * Settings to configure the inference task.
     * These settings are specific to the task type you specified.
     */
    task_settings?: AzureAiStudioTaskSettings
  }
}

export enum AzureAiStudioTaskType {
  completion,
  text_embedding
}

export enum ServiceType {
  azureaistudio
}

export class AzureAiStudioServiceSettings {
  /**
   * A valid API key of your Azure AI Studio model deployment.
   * This key can be found on the overview page for your deployment in the management section of your Azure AI Studio account.
   *
   * IMPORTANT: You need to provide the API key only once, during the inference model creation.
   * The get inference endpoint API does not retrieve your API key.
   * After creating the inference model, you cannot change the associated API key.
   * If you want to use a different API key, delete the inference model and recreate it with the same name and the updated API key.
   * @ext_doc_id azureaistudio-api-keys
   */
  api_key: string
  /**
   * The type of endpoint that is available for deployment through Azure AI Studio: `token` or `realtime`.
   * The `token` endpoint type is for "pay as you go" endpoints that are billed per token.
   * The `realtime` endpoint type is for "real-time" endpoints that are billed per hour of usage.
   * @ext_doc_id azureaistudio-endpoint-types
   */
  endpoint_type: string
  /**
   * The target URL of your Azure AI Studio model deployment.
   * This can be found on the overview page for your deployment in the management section of your Azure AI Studio account.
   */
  target: string
  /**
   * The model provider for your deployment.
   * Note that some providers may support only certain task types.
   * Supported providers include:
   *
   * * `cohere` - available for `text_embedding` and `completion` task types
   * * `databricks` - available for `completion` task type only
   * * `meta` - available for `completion` task type only
   * * `microsoft_phi` - available for `completion` task type only
   * * `mistral` - available for `completion` task type only
   * * `openai` - available for `text_embedding` and `completion` task types
   */
  provider: string
  /**
   * This setting helps to minimize the number of rate limit errors returned from Azure AI Studio.
   * By default, the `azureaistudio` service sets the number of requests allowed per minute to 240.
   */
  rate_limit?: RateLimitSetting
}

export class AzureAiStudioTaskSettings {
  /**
   * For a `completion` task, instruct the inference process to perform sampling.
   * It has no effect unless `temperature` or `top_p` is specified.
   */
  do_sample?: float
  /**
   * For a `completion` task, provide a hint for the maximum number of output tokens to be generated.
   * @server_default 64
   */
  max_new_tokens?: integer
  /**
   * For a `completion` task, control the apparent creativity of generated completions with a sampling temperature.
   * It must be a number in the range of 0.0 to 2.0.
   * It should not be used if `top_p` is specified.
   */
  temperature?: float
  /**
   * For a `completion` task, make the model consider the results of the tokens with nucleus sampling probability.
   * It is an alternative value to `temperature` and must be a number in the range of 0.0 to 2.0.
   * It should not be used if `temperature` is specified.
   */
  top_p?: float
  /**
   * For a `text_embedding` task, specify the user issuing the request.
   * This information can be used for abuse detection.
   */
  user?: string
}
