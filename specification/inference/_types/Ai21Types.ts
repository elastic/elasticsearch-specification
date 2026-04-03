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

import { RateLimitSetting } from '@inference/_types/Services'

export class Ai21ServiceSettings {
  /**
   * The name of the model to use for the inference task.
   * Refer to the AI21 models documentation for the list of supported models and versions.
   * Service has been tested and confirmed to be working for `completion` and `chat_completion` tasks with the following models:
   * * `jamba-mini`
   * * `jamba-large`
   * @ext_doc_id ai21-api-models
   */
  model_id: string
  /**
   * A valid API key for accessing AI21 API.
   *
   * IMPORTANT: You need to provide the API key only once, during the inference model creation.
   * The get inference endpoint API does not retrieve your API key.
   */
  api_key?: string
  /**
   * This setting helps to minimize the number of rate limit errors returned from the AI21 API.
   * By default, the `ai21` service sets the number of requests allowed per minute to 200. Please refer to AI21 documentation for more details.
   * @ext_doc_id ai21-rate-limit
   */
  rate_limit?: RateLimitSetting
}

export enum Ai21TaskType {
  completion,
  chat_completion
}

export enum Ai21ServiceType {
  ai21
}
