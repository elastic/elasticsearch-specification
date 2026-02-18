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
  TaskTypeAi21,
  TaskTypeAlibabaCloudAI,
  TaskTypeAmazonBedrock,
  TaskTypeAmazonSageMaker,
  TaskTypeAnthropic,
  TaskTypeAzureAIStudio,
  TaskTypeAzureOpenAI,
  TaskTypeCohere,
  TaskTypeContextualAI,
  TaskTypeCustom,
  TaskTypeDeepSeek,
  TaskTypeElasticsearch,
  TaskTypeELSER,
  TaskTypeGoogleAIStudio,
  TaskTypeGoogleVertexAI,
  TaskTypeGroq,
  TaskTypeHuggingFace,
  TaskTypeJinaAi,
  TaskTypeLlama,
  TaskTypeMistral,
  TaskTypeMixedbread,
  TaskTypeNvidia,
  TaskTypeOpenAI,
  TaskTypeOpenShiftAi,
  TaskTypeVoyageAI,
  TaskTypeWatsonx
} from '../_types/TaskType'

/**
 * Configuration options when storing the inference endpoint
 */
export class InferenceEndpoint {
  /**
   * The chunking configuration object.
   * Applies only to the `embedding`, `sparse_embedding` and `text_embedding` task types.
   * Not applicable to the `rerank`, `completion`, or `chat_completion` task types.
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

export class InferenceEndpointInfoAi21 extends InferenceEndpoint {
  /**
   * The inference Id
   */
  inference_id: string
  /**
   * The task type
   */
  task_type: TaskTypeAi21
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

export class InferenceEndpointInfoAmazonSageMaker extends InferenceEndpoint {
  /**
   * The inference Id
   */
  inference_id: string
  /**
   * The task type
   */
  task_type: TaskTypeAmazonSageMaker
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

export class InferenceEndpointInfoContextualAi extends InferenceEndpoint {
  /**
   * The inference Id
   */
  inference_id: string
  /**
   * The task type
   */
  task_type: TaskTypeContextualAI
}

export class InferenceEndpointInfoCustom extends InferenceEndpoint {
  /**
   * The inference Id
   */
  inference_id: string
  /**
   * The task type
   */
  task_type: TaskTypeCustom
}
export class InferenceEndpointInfoDeepSeek extends InferenceEndpoint {
  /**
   * The inference Id
   */
  inference_id: string
  /**
   * The task type
   */
  task_type: TaskTypeDeepSeek
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

export class InferenceEndpointInfoGroq extends InferenceEndpoint {
  /**
   * The inference Id
   */
  inference_id: string
  /**
   * The task type
   */
  task_type: TaskTypeGroq
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

export class InferenceEndpointInfoLlama extends InferenceEndpoint {
  /**
   * The inference Id
   */
  inference_id: string
  /**
   * The task type
   */
  task_type: TaskTypeLlama
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

export class InferenceEndpointInfoMixedbread extends InferenceEndpoint {
  /**
   * The inference ID
   */
  inference_id: string
  /**
   * The task type
   */
  task_type: TaskTypeMixedbread
}

export class InferenceEndpointInfoNvidia extends InferenceEndpoint {
  /**
   * The inference ID
   */
  inference_id: string
  /**
   * The task type
   */
  task_type: TaskTypeNvidia
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

export class InferenceEndpointInfoOpenShiftAi extends InferenceEndpoint {
  /**
   * The inference Id
   */
  inference_id: string
  /**
   * The task type
   */
  task_type: TaskTypeOpenShiftAi
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
   * This value cannot be lower than `20` (for `sentence` strategy) or `10` (for `word` strategy).
   * This value should not exceed the window size for the associated model.
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
   * Only applicable to the `recursive` strategy and required when using it.
   *
   * Sets a predefined list of separators in the saved chunking settings based on the selected text type.
   * Values can be `markdown` or `plaintext`.
   *
   * Using this parameter is an alternative to manually specifying a custom `separators` list.
   */
  separator_group?: string
  /**
   * Only applicable to the `recursive` strategy and required when using it.
   *
   * A list of strings used as possible split points when chunking text.
   *
   * Each string can be a plain string or a regular expression (regex) pattern.
   * The system tries each separator in order to split the text, starting from the first item in the list.
   *
   * After splitting, it attempts to recombine smaller pieces into larger chunks that stay within
   * the `max_chunk_size` limit, to reduce the total number of chunks generated.
   */
  separators?: string[]
  /**
   * The chunking strategy: `sentence`, `word`, `none` or `recursive`.
   *
   *  * If `strategy` is set to `recursive`, you must also specify:
   *
   * - `max_chunk_size`
   * - either `separators` or`separator_group`
   *
   * Learn more about different chunking strategies in the linked documentation.
   * @server_default sentence
   * @ext_doc_id chunking-strategies
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
   * * `amazonbedrock` service: `240`
   * * `anthropic` service: `50`
   * * `azureaistudio` service: `240`
   * * `azureopenai` service and task type `text_embedding`: `1440`
   * * `azureopenai` service and task types `completion` or `chat_completion`: `120`
   * * `cohere` service: `10000`
   * * `contextualai` service: `1000`
   * * `elastic` service and task type `chat_completion`: `240`
   * * `googleaistudio` service: `360`
   * * `googlevertexai` service: `30000`
   * * `hugging_face` service: `3000`
   * * `jinaai` service: `2000`
   * * `llama` service: `3000`
   * * `mistral` service: `240`
   * * `openai` service and task type `text_embedding`: `3000`
   * * `openai` service and task type `completion`: `500`
   * * `openshift_ai` service: `3000`
   * * `voyageai` service: `2000`
   * * `watsonxai` service: `120`
   */
  requests_per_minute?: integer
}
