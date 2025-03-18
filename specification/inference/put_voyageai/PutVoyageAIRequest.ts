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
   * Create a VoyageAI inference endpoint.
   *
   * Create an inference endpoint to perform an inference task with the `voyageai` service.

   * Avoid creating multiple endpoints for the same model unless required, as each endpoint consumes significant resources.
   * @rest_spec_name inference.put_voyageai
   * @availability stack since=8.19.0 stability=stable visibility=public
   * @availability serverless stability=stable visibility=public
   * @cluster_privileges manage_inference
   * @doc_id inference-api-put-voyageai
   */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_inference/{task_type}/{voyageai_inference_id}'
      methods: ['PUT']
    }
  ]
  path_parts: {
    /**
     * The type of the inference task that the model will perform.
     */
    task_type: VoyageAITaskType
    /**
     * The unique identifier of the inference endpoint.
     */
    voyageai_inference_id: Id
  }
  body: {
    /**
     * The chunking configuration object.
     * @ext_doc_id inference-chunking
     */
    chunking_settings?: InferenceChunkingSettings
    /**
     * The type of service supported for the specified task type. In this case, `voyageai`.
     */
    service: ServiceType
    /**
     * Settings used to install the inference model. These settings are specific to the `voyageai` service.
     */
    service_settings: VoyageAIServiceSettings
    /**
     * Settings to configure the inference task.
     * These settings are specific to the task type you specified.
     */
    task_settings?: VoyageAITaskSettings
  }
}

export enum VoyageAITaskType {
  text_embedding,
  rerank
}

export enum ServiceType {
  voyageai
}

export class VoyageAIServiceSettings {
  /**
   * The number of dimensions for resulting output embeddings.
   * This setting maps to `output_dimension` in the VoyageAI documentation.
   * Only for the `text_embedding` task type.
   * @ext_doc_id voyageai-embeddings
   */
  dimensions?: integer
  /**
   * The name of the model to use for the inference task.
   * Refer to the VoyageAI documentation for the list of available text embedding and rerank models.
   * @ext_doc_id voyageai-embeddings
   * @ext_doc_id voyageai-rerank
   */
  model_id: string
  /**
   * This setting helps to minimize the number of rate limit errors returned from VoyageAI.
   * The `voyageai` service sets a default number of requests allowed per minute depending on the task type.
   * For both `text_embedding` and `rerank`, it is set to `2000`.
   */
  rate_limit?: RateLimitSetting
  /**
   * The data type for the embeddings to be returned.
   * This setting maps to `output_dtype` in the VoyageAI documentation.
   * Permitted values: float, int8, bit.
   * `int8` is a synonym of `byte` in the VoyageAI documentation.
   * `bit` is a synonym of `binary` in the VoyageAI documentation.
   * Only for the `text_embedding` task type.
   * @ext_doc_id voyageai-embeddings
   */
  embedding_type?: float
}

export class VoyageAITaskSettings {
  /**
   * Type of the input text.
   * Permitted values: `ingest` (maps to `document` in the VoyageAI documentation), `search` (maps to `query` in the VoyageAI documentation).
   * Only for the `text_embedding` task type.
   */
  input_type?: string
  /**
   * Whether to return the source documents in the response.
   * Only for the `rerank` task type.
   * @server_default false
   */
  return_documents?: boolean
  /**
   * The number of most relevant documents to return.
   * If not specified, the reranking results of all documents will be returned.
   * Only for the `rerank` task type.
   */
  top_k?: integer
  /**
   * Whether to truncate the input texts to fit within the context length.
   * @server_default true
   */
  truncation?: boolean
}
