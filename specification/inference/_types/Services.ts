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

import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { double, integer, long } from '@_types/Numeric'
import { TaskType } from '../_types/TaskType'

/**
 * Configuration options when storing the inference endpoint
 */
export class InferenceEndpoint {
  /**
   * The service type
   */
  service: string
  /**
   * Settings specific to the service
   */
  service_settings: ServiceSettings
  /**
   * Task settings specific to the service and task type
   */
  task_settings: TaskSettings
}

/**
 * Represents an inference endpoint as returned by the GET API
 */
export class InferenceEndpointInfo extends InferenceEndpoint {
  /**
   * The inference Id
   */
  inference_id: string
  /**
   * The task type
   */
  task_type: TaskType
}

export type ServiceSettings = UserDefinedValue

export type TaskSettings = UserDefinedValue

export enum SimilarityMeasure {
  cosine,
  dot_product,
  l2_norm
}

export class RateLimitSettings {
  requests_per_minute: long
}

export class ElserServiceSettings {
  num_allocations: integer
  num_threads: integer
  model_id?: string
  adaptive_allocations?: UserDefinedValue
}

export class ElserService {
  service: 'elser'
  service_settings: ElserServiceSettings
  // temp solution, task_settings returns as an empty object for Elser
  // needs to be checked with generators, can be changed to UDF.
  task_settings: void
}

export enum AmazonBedrockProvider {
  amazontitan,
  anthropic,
  ai21labs,
  cohere,
  meta,
  mistral
}

export class AmazonBedrockServiceSettings {
  // common settings for service
  access_key: string
  secret_key: string
  region: string
  model: string
  provider: AmazonBedrockProvider
  rate_limit?: RateLimitSettings

  // text embedding specifics
  dimensions?: integer
  dimensions_set_by_user?: boolean
  max_input_tokens?: integer
  similarity?: SimilarityMeasure
}

export class AmazonBedrockTaskSettings {
  // chat completion specifics
  temperature?: double
  top_p?: double
  top_k?: double
  max_new_tokens?: integer
}

export class AmazonBedrockService {
  service: 'amazon_bedrock'
  service_settings: AmazonBedrockServiceSettings
  task_settings: AmazonBedrockTaskSettings
}

/**
 * @variants internal tag='service'
 */
export type InferenceService = ElserService | AmazonBedrockService
