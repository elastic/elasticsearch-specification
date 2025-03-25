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
 * Create an Amazon Bedrock inference endpoint.
 *
 * Creates an inference endpoint to perform an inference task with the `amazonbedrock` service.
 *
 * >info
 * > You need to provide the access and secret keys only once, during the inference model creation. The get inference API does not retrieve your access or secret keys. After creating the inference model, you cannot change the associated key pairs. If you want to use a different access and secret key pair, delete the inference model and recreate it with the same name and the updated keys.
 *
 * When you create an inference endpoint, the associated machine learning model is automatically deployed if it is not already running.
 * After creating the endpoint, wait for the model deployment to complete before using it.
 * To verify the deployment status, use the get trained model statistics API.
 * Look for `"state": "fully_allocated"` in the response and ensure that the `"allocation_count"` matches the `"target_allocation_count"`.
 * Avoid creating multiple endpoints for the same model unless required, as each endpoint consumes significant resources.
 * @rest_spec_name inference.put_amazonbedrock
 * @availability stack since=8.12.0 stability=stable visibility=public
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_inference
 * @doc_id inference-api-amazonbedrock
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_inference/{task_type}/{amazonbedrock_inference_id}'
      methods: ['PUT']
    }
  ]
  path_parts: {
    /**
     * The type of the inference task that the model will perform.
     */
    task_type: AmazonBedrockTaskType
    /**
     * The unique identifier of the inference endpoint.
     */
    amazonbedrock_inference_id: Id
  }
  body: {
    /**
     * The chunking configuration object.
     * @ext_doc_id inference-chunking
     */
    chunking_settings?: InferenceChunkingSettings
    /**
     * The type of service supported for the specified task type. In this case, `amazonbedrock`.
     */
    service: ServiceType
    /**
     * Settings used to install the inference model. These settings are specific to the `amazonbedrock` service.
     */
    service_settings: AmazonBedrockServiceSettings
    /**
     * Settings to configure the inference task.
     * These settings are specific to the task type you specified.
     */
    task_settings?: AmazonBedrockTaskSettings
  }
}

export enum AmazonBedrockTaskType {
  completion,
  text_embedding
}

export enum ServiceType {
  amazonbedrock
}

export class AmazonBedrockServiceSettings {
  /**
   * A valid AWS access key that has permissions to use Amazon Bedrock and access to models for inference requests.
   */
  access_key: string
  /**
   * The base model ID or an ARN to a custom model based on a foundational model.
   * The base model IDs can be found in the Amazon Bedrock documentation.
   * Note that the model ID must be available for the provider chosen and your IAM user must have access to the model.
   * @ext_doc_id amazonbedrock-models
   */
  model: string
  /**
   * The model provider for your deployment.
   * Note that some providers may support only certain task types.
   * Supported providers include:
   *
   * * `amazontitan` - available for `text_embedding` and `completion` task types
   * * `anthropic` - available for `completion` task type only
   * * `ai21labs` - available for `completion` task type only
   * * `cohere` - available for `text_embedding` and `completion` task types
   * * `meta` - available for `completion` task type only
   * * `mistral` - available for `completion` task type only
   */
  provider?: string
  /**
   * The region that your model or ARN is deployed in.
   * The list of available regions per model can be found in the Amazon Bedrock documentation.
   * @ext_doc_id amazonbedrock-models
   */
  region: string
  /**
   * This setting helps to minimize the number of rate limit errors returned from Watsonx.
   * By default, the `watsonxai` service sets the number of requests allowed per minute to 120.
   */
  rate_limit?: RateLimitSetting
  /**
   * A valid AWS secret key that is paired with the `access_key`.
   * For informationg about creating and managing access and secret keys, refer to the AWS documentation.
   * @ext_doc_id amazonbedrock-secret-keys
   */
  secret_key: string
}

export class AmazonBedrockTaskSettings {
  /**
   * For a `completion` task, it sets the maximum number for the output tokens to be generated.
   * @server_default 64
   */
  max_new_tokens?: integer
  /**
   * For a `completion` task, it is a number between 0.0 and 1.0 that controls the apparent creativity of the results.
   * At temperature 0.0 the model is most deterministic, at temperature 1.0 most random.
   * It should not be used if `top_p` or `top_k` is specified.
   */
  temperature?: float
  /**
   * For a `completion` task, it limits samples to the top-K most likely words, balancing coherence and variability.
   * It is only available for anthropic, cohere, and mistral providers.
   * It is an alternative to `temperature`; it should not be used if `temperature` is specified.
   */
  top_k?: float
  /**
   * For a `completion` task, it is a number in the range of 0.0 to 1.0, to eliminate low-probability tokens.
   * Top-p uses nucleus sampling to select top tokens whose sum of likelihoods does not exceed a certain value, ensuring both variety and coherence.
   * It is an alternative to `temperature`; it should not be used if `temperature` is specified.
   */
  top_p?: float
}
