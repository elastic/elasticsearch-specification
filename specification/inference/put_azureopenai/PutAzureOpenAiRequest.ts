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
 * Create an Azure OpenAI inference endpoint.
 *
 * Create an inference endpoint to perform an inference task with the `azureopenai` service.
 *
 * The list of chat completion models that you can choose from in your Azure OpenAI deployment include:
 *
 * * [GPT-4 and GPT-4 Turbo models](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models?tabs=global-standard%2Cstandard-chat-completions#gpt-4-and-gpt-4-turbo-models)
 * * [GPT-3.5](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models?tabs=global-standard%2Cstandard-chat-completions#gpt-35)
 *
 * The list of embeddings models that you can choose from in your deployment can be found in the [Azure models documentation](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models?tabs=global-standard%2Cstandard-chat-completions#embeddings).
 *
 * When you create an inference endpoint, the associated machine learning model is automatically deployed if it is not already running.
 * After creating the endpoint, wait for the model deployment to complete before using it.
 * To verify the deployment status, use the get trained model statistics API.
 * Look for `"state": "fully_allocated"` in the response and ensure that the `"allocation_count"` matches the `"target_allocation_count"`.
 * Avoid creating multiple endpoints for the same model unless required, as each endpoint consumes significant resources.
 * @rest_spec_name inference.put_azureopenai
 * @availability stack since=8.14.0 stability=stable visibility=public
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_inference
 * @doc_id inference-api-put-azureopenai
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_inference/{task_type}/{azureopenai_inference_id}'
      methods: ['PUT']
    }
  ]
  path_parts: {
    /**
     * The type of the inference task that the model will perform.
     * NOTE: The `chat_completion` task type only supports streaming and only through the _stream API.
     */
    task_type: AzureOpenAITaskType
    /**
     * The unique identifier of the inference endpoint.
     */
    azureopenai_inference_id: Id
  }
  body: {
    /**
     * The chunking configuration object.
     * @ext_doc_id inference-chunking
     */
    chunking_settings?: InferenceChunkingSettings
    /**
     * The type of service supported for the specified task type. In this case, `azureopenai`.
     */
    service: ServiceType
    /**
     * Settings used to install the inference model. These settings are specific to the `azureopenai` service.
     */
    service_settings: AzureOpenAIServiceSettings
    /**
     * Settings to configure the inference task.
     * These settings are specific to the task type you specified.
     */
    task_settings?: AzureOpenAITaskSettings
  }
}

export enum AzureOpenAITaskType {
  completion,
  text_embedding
}

export enum ServiceType {
  azureopenai
}

export class AzureOpenAIServiceSettings {
  /**
   * A valid API key for your Azure OpenAI account.
   * You must specify either `api_key` or `entra_id`.
   * If you do not provide either or you provide both, you will receive an error when you try to create your model.
   *
   * IMPORTANT: You need to provide the API key only once, during the inference model creation.
   * The get inference endpoint API does not retrieve your API key.
   * After creating the inference model, you cannot change the associated API key.
   * If you want to use a different API key, delete the inference model and recreate it with the same name and the updated API key.
   * @ext_doc_id azureopenai-auth
   */
  api_key?: string
  /**
   * The Azure API version ID to use.
   * It is recommended to use the latest supported non-preview version.
   */
  api_version: string
  /**
   * The deployment name of your deployed models.
   * Your Azure OpenAI deployments can be found though the Azure OpenAI Studio portal that is linked to your subscription.
   * @ext_doc_id azureopenai
   */
  deployment_id: string
  /**
   * A valid Microsoft Entra token.
   * You must specify either `api_key` or `entra_id`.
   * If you do not provide either or you provide both, you will receive an error when you try to create your model.
   * @ext_doc_id azureopenai-auth
   */
  entra_id?: string
  /**
   * This setting helps to minimize the number of rate limit errors returned from Azure.
   * The `azureopenai` service sets a default number of requests allowed per minute depending on the task type.
   * For `text_embedding`, it is set to `1440`.
   * For `completion`, it is set to `120`.
   * @ext_doc_id azureopenai-quota-limits
   */
  rate_limit?: RateLimitSetting
  /**
   * The name of your Azure OpenAI resource.
   * You can find this from the list of resources in the Azure Portal for your subscription.
   * @ext_doc_id azureopenai-portal
   */
  resource_name: string
}

export class AzureOpenAITaskSettings {
  /**
   * For a `completion` or `text_embedding` task, specify the user issuing the request.
   * This information can be used for abuse detection.
   */
  user?: string
}
