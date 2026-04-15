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

import { float, integer } from '@_types/Numeric'
import { RateLimitSetting } from '@inference/_types/Services'

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
   * * `anthropic` - available for `chat_completion` and `completion` task types
   * * `ai21labs` - available for `chat_completion` and `completion` task types
   * * `cohere` - available for `chat_completion`, `completion` and `text_embedding` task types
   * * `meta` - available for `chat_completion` and `completion` task types
   * * `mistral` - available for `chat_completion` and `completion` task types
   */
  provider?: string
  /**
   * The region that your model or ARN is deployed in.
   * The list of available regions per model can be found in the Amazon Bedrock documentation.
   * @ext_doc_id amazonbedrock-models
   */
  region: string
  /**
   * This setting helps to minimize the number of rate limit errors returned from Amazon Bedrock.
   * By default, the `amazonbedrock` service sets the number of requests allowed per minute to 240.
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
   * For `chat_completion` and `completion` tasks, it sets the maximum number for the output tokens to be generated.
   * @server_default 64
   */
  max_new_tokens?: integer
  /**
   * For `chat_completion` and `completion` tasks, it is a number between 0.0 and 1.0 that controls the apparent creativity of the results.
   * At temperature 0.0 the model is most deterministic, at temperature 1.0 most random.
   * It should not be used if `top_p` or `top_k` is specified.
   */
  temperature?: float
  /**
   * For `chat_completion` and `completion` tasks, it limits samples to the top-K most likely words, balancing coherence and variability.
   * It is only available for anthropic, cohere, and mistral providers.
   * It is an alternative to `temperature`; it should not be used if `temperature` is specified.
   */
  top_k?: float
  /**
   * For `chat_completion` and `completion` tasks, it is a number in the range of 0.0 to 1.0, to eliminate low-probability tokens.
   * Top-p uses nucleus sampling to select top tokens whose sum of likelihoods does not exceed a certain value, ensuring both variety and coherence.
   * It is an alternative to `temperature`; it should not be used if `temperature` is specified.
   */
  top_p?: float
}

export enum AmazonBedrockTaskType {
  chat_completion,
  completion,
  text_embedding
}

export enum AmazonBedrockServiceType {
  amazonbedrock
}
