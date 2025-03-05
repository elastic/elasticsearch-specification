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
import { integer } from '@_types/Numeric'
import { TaskType } from '../_types/TaskType'

/**
 * Configuration options when storing the inference endpoint
 */
export class InferenceEndpoint {
  /**
   * Chunking configuration object
   */
  chunking_settings?: InferenceChunkingSettings
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
  task_settings?: TaskSettings
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

/**
 * Chunking configuration object
 */
export class InferenceChunkingSettings extends InferenceEndpoint {
  /**
   * Specifies the maximum size of a chunk in words
   * This value cannot be higher than `300` or lower than `20` (for `sentence` strategy) or `10` (for `word` strategy)
   * @server_default 250
   */
  max_chunk_size?: integer
  /**
   * Specifies the number of overlapping words for chunks
   * Only for `word` chunking strategy
   * This value cannot be higher than the half of `max_chunk_size`
   * @server_default 100
   */
  overlap?: integer
  /**
   * Specifies the number of overlapping sentences for chunks
   * Only for `sentence` chunking strategy
   * It can be either `1` or `0`
   * @server_default 1
   */
  sentence_overlap?: integer
  /**
   * Specifies the chunking strategy
   * It could be either `sentence` or `word`
   * @server_default sentence
   */
  strategy?: string
}

export type ServiceSettings = UserDefinedValue

export type TaskSettings = UserDefinedValue

export class RateLimitSetting {
  /**
   * The number of requests allowed per minute.
   */
  requests_per_minute?: integer
}
