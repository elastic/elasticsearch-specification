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

import { RequestBase } from '@_types/Base'
import { Id } from '@_types/common'
import { Duration } from '@_types/Time'
import {
  HuggingFaceServiceSettings,
  HuggingFaceServiceType,
  HuggingFaceTaskSettings,
  HuggingFaceTaskType
} from '@inference/_types/CommonTypes'
import { InferenceChunkingSettings } from '@inference/_types/Services'

/**
 * Create a Hugging Face inference endpoint.
 *
 * Create an inference endpoint to perform an inference task with the `hugging_face` service.
 * Supported tasks include: `text_embedding`, `completion`, and `chat_completion`.
 *
 * To configure the endpoint, first visit the Hugging Face Inference Endpoints page and create a new endpoint.
 * Select a model that supports the task you intend to use.
 *
 * For Elastic's `text_embedding` task:
 * The selected model must support the `Sentence Embeddings` task. On the new endpoint creation page, select the `Sentence Embeddings` task under the `Advanced Configuration` section.
 * After the endpoint has initialized, copy the generated endpoint URL.
 * Recommended models for `text_embedding` task:
 *
 * * `all-MiniLM-L6-v2`
 * * `all-MiniLM-L12-v2`
 * * `all-mpnet-base-v2`
 * * `e5-base-v2`
 * * `e5-small-v2`
 * * `multilingual-e5-base`
 * * `multilingual-e5-small`
 *
 * For Elastic's `chat_completion` and `completion` tasks:
 * The selected model must support the `Text Generation` task and expose OpenAI API. HuggingFace supports both serverless and dedicated endpoints for `Text Generation`. When creating dedicated endpoint select the `Text Generation` task.
 * After the endpoint is initialized (for dedicated) or ready (for serverless), ensure it supports the OpenAI API and includes `/v1/chat/completions` part in URL. Then, copy the full endpoint URL for use.
 * Recommended models for `chat_completion` and `completion` tasks:
 *
 * * `Mistral-7B-Instruct-v0.2`
 * * `QwQ-32B`
 * * `Phi-3-mini-128k-instruct`
 *
 * For Elastic's `rerank` task:
 * The selected model must support the `sentence-ranking` task and expose OpenAI API.
 * HuggingFace supports only dedicated (not serverless) endpoints for `Rerank` so far.
 * After the endpoint is initialized, copy the full endpoint URL for use.
 * Tested models for `rerank` task:
 *
 * * `bge-reranker-base`
 * * `jina-reranker-v1-turbo-en-GGUF`
 *
 * @rest_spec_name inference.put_hugging_face
 * @availability stack since=8.12.0 stability=stable visibility=public
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_inference
 * @doc_id inference-api-put-huggingface
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_inference/{task_type}/{huggingface_inference_id}'
      methods: ['PUT']
    }
  ]
  path_parts: {
    /**
     * The type of the inference task that the model will perform.
     */
    task_type: HuggingFaceTaskType
    /**
     * The unique identifier of the inference endpoint.
     */
    huggingface_inference_id: Id
  }
  query_parameters: {
    /**
     * Specifies the amount of time to wait for the inference endpoint to be created.
     * @server_default 30s
     */
    timeout?: Duration
  }
  body: {
    /**
     * The chunking configuration object.
     * Applies only to the `text_embedding` task type.
     * Not applicable to the `rerank`, `completion`, or `chat_completion` task types.
     * @ext_doc_id inference-chunking
     */
    chunking_settings?: InferenceChunkingSettings
    /**
     * The type of service supported for the specified task type. In this case, `hugging_face`.
     */
    service: HuggingFaceServiceType
    /**
     * Settings used to install the inference model. These settings are specific to the `hugging_face` service.
     */
    service_settings: HuggingFaceServiceSettings
    /**
     * Settings to configure the inference task.
     * These settings are specific to the task type you specified.
     */
    task_settings?: HuggingFaceTaskSettings
  }
}
