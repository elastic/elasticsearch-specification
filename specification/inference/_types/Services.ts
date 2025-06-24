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
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import {
  TaskType,
  TaskTypeAlibabaCloudAI,
  TaskTypeAmazonBedrock,
  TaskTypeAnthropic,
  TaskTypeAzureAIStudio,
  TaskTypeAzureOpenAI,
  TaskTypeCohere,
  TaskTypeElasticsearch,
  TaskTypeELSER,
  TaskTypeGoogleAIStudio,
  TaskTypeGoogleVertexAI,
  TaskTypeHuggingFace,
  TaskTypeJinaAi,
  TaskTypeMistral,
  TaskTypeOpenAI,
  TaskTypeVoyageAI,
  TaskTypeWatsonx
} from '../_types/TaskType'

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

export class InferenceEndpointInfoJinaAi extends InferenceEndpoint {
  /**
   * The inference Id
   */
  inference_id: string
  /**
   * The task type
   */
  task_type: TaskTypeJinaAi
}

export class InferenceEndpointInfoAlibabaCloudAI extends InferenceEndpoint {
  /**
   * The inference Id
   */
  inference_id: string
  /**
   * The task type
   */
  task_type: TaskTypeAlibabaCloudAI
}

export class InferenceEndpointInfoAmazonBedrock extends InferenceEndpoint {
  /**
   * The inference Id
   */
  inference_id: string
  /**
   * The task type
   */
  task_type: TaskTypeAmazonBedrock
}

export class InferenceEndpointInfoAnthropic extends InferenceEndpoint {
  /**
   * The inference Id
   */
  inference_id: string
  /**
   * The task type
   */
  task_type: TaskTypeAnthropic
}

export class InferenceEndpointInfoAzureAIStudio extends InferenceEndpoint {
  /**
   * The inference Id
   */
  inference_id: string
  /**
   * The task type
   */
  task_type: TaskTypeAzureAIStudio
}

export class InferenceEndpointInfoAzureOpenAI extends InferenceEndpoint {
  /**
   * The inference Id
   */
  inference_id: string
  /**
   * The task type
   */
  task_type: TaskTypeAzureOpenAI
}

export class InferenceEndpointInfoCohere extends InferenceEndpoint {
  /**
   * The inference Id
   */
  inference_id: string
  /**
   * The task type
   */
  task_type: TaskTypeCohere
}

export class InferenceEndpointInfoElasticsearch extends InferenceEndpoint {
  /**
   * The inference Id
   */
  inference_id: string
  /**
   * The task type
   */
  task_type: TaskTypeElasticsearch
}

export class InferenceEndpointInfoELSER extends InferenceEndpoint {
  /**
   * The inference Id
   */
  inference_id: string
  /**
   * The task type
   */
  task_type: TaskTypeELSER
}

export class InferenceEndpointInfoGoogleAIStudio extends InferenceEndpoint {
  /**
   * The inference Id
   */
  inference_id: string
  /**
   * The task type
   */
  task_type: TaskTypeGoogleAIStudio
}

export class InferenceEndpointInfoGoogleVertexAI extends InferenceEndpoint {
  /**
   * The inference Id
   */
  inference_id: string
  /**
   * The task type
   */
  task_type: TaskTypeGoogleVertexAI
}

export class InferenceEndpointInfoHuggingFace extends InferenceEndpoint {
  /**
   * The inference Id
   */
  inference_id: string
  /**
   * The task type
   */
  task_type: TaskTypeHuggingFace
}

export class InferenceEndpointInfoMistral extends InferenceEndpoint {
  /**
   * The inference Id
   */
  inference_id: string
  /**
   * The task type
   */
  task_type: TaskTypeMistral
}

export class InferenceEndpointInfoOpenAI extends InferenceEndpoint {
  /**
   * The inference Id
   */
  inference_id: string
  /**
   * The task type
   */
  task_type: TaskTypeOpenAI
}

export class InferenceEndpointInfoVoyageAI extends InferenceEndpoint {
  /**
   * The inference Id
   */
  inference_id: string
  /**
   * The task type
   */
  task_type: TaskTypeVoyageAI
}

export class InferenceEndpointInfoWatsonx extends InferenceEndpoint {
  /**
   * The inference Id
   */
  inference_id: string
  /**
   * The task type
   */
  task_type: TaskTypeWatsonx
}

/**
 * Chunking configuration object
 */
export class InferenceChunkingSettings {
  /**
   * The maximum size of a chunk in words.
   * This value cannot be higher than `300` or lower than `20` (for `sentence` strategy) or `10` (for `word` strategy).
   * @server_default 250
   */
  max_chunk_size?: integer
  /**
   * The number of overlapping words for chunks.
   * It is applicable only to a `word` chunking strategy.
   * This value cannot be higher than half the `max_chunk_size` value.
   * @server_default 100
   */
  overlap?: integer
  /**
   * The number of overlapping sentences for chunks.
   * It is applicable only for a `sentence` chunking strategy.
   * It can be either `1` or `0`.
   * @server_default 1
   */
  sentence_overlap?: integer
  /**
   * The chunking strategy: `sentence` or `word`.
   * @server_default sentence
   */
  strategy?: string
}

export type ServiceSettings = UserDefinedValue

export type TaskSettings = UserDefinedValue

/**
 * This setting helps to minimize the number of rate limit errors returned from the service.
 */
export class RateLimitSetting {
  /**
   * The number of requests allowed per minute.
   * By default, the number of requests allowed per minute is set by each service as follows:
   *
   * * `alibabacloud-ai-search` service: `1000`
   * * `anthropic` service: `50`
   * * `azureaistudio` service: `240`
   * * `azureopenai` service and task type `text_embedding`: `1440`
   * * `azureopenai` service and task type `completion`: `120`
   * * `cohere` service: `10000`
   * * `elastic` service and task type `chat_completion`: `240`
   * * `googleaistudio` service: `360`
   * * `googlevertexai` service: `30000`
   * * `hugging_face` service: `3000`
   * * `jinaai` service: `2000`
   * * `mistral` service: `240`
   * * `openai` service and task type `text_embedding`: `3000`
   * * `openai` service and task type `completion`: `500`
   * * `voyageai` service: `2000`
   * * `watsonxai` service: `120`
   */
  requests_per_minute?: integer
}
