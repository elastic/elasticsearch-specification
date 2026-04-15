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

import { integer } from '@_types/Numeric'
import { RateLimitSetting } from '@inference/_types/Services'

export class MistralServiceSettings {
  /**
   * A valid API key of your Mistral account.
   * You can find your Mistral API keys or you can create a new one on the API Keys page.
   *
   * IMPORTANT: You need to provide the API key only once, during the inference model creation.
   * The get inference endpoint API does not retrieve your API key.
   * @ext_doc_id mistral-api-keys
   */
  api_key: string
  /**
   * The maximum number of tokens per input before chunking occurs.
   */
  max_input_tokens?: integer
  /**
   * The name of the model to use for the inference task.
   * Refer to the Mistral models documentation for the list of available models.
   * @ext_doc_id mistral-api-models
   */
  model: string
  /**
   * This setting helps to minimize the number of rate limit errors returned from the Mistral API.
   * By default, the `mistral` service sets the number of requests allowed per minute to 240.
   */
  rate_limit?: RateLimitSetting
}

export enum MistralTaskType {
  text_embedding,
  completion,
  chat_completion
}

export enum MistralServiceType {
  mistral
}
