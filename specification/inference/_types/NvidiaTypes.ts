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
import { CohereTruncateType } from '@inference/_types/CommonTypes'
import { RateLimitSetting } from '@inference/_types/Services'

export class NvidiaServiceSettings {
  /**
   * A valid API key for your Nvidia endpoint.
   * Can be found in `API Keys` section of Nvidia account settings.
   */
  api_key: string
  /**
   * The URL of the Nvidia model endpoint. If not provided, the default endpoint URL is used depending on the task type:
   *
   * * For `text_embedding` task - `https://integrate.api.nvidia.com/v1/embeddings`.
   * * For `completion` and `chat_completion` tasks - `https://integrate.api.nvidia.com/v1/chat/completions`.
   * * For `rerank` task - `https://ai.api.nvidia.com/v1/retrieval/nvidia/reranking`.
   */
  url?: string
  /**
   * The name of the model to use for the inference task.
   * Refer to the model's documentation for the name if needed.
   * Service has been tested and confirmed to be working with the following models:
   *
   * * For `text_embedding` task - `nvidia/llama-3.2-nv-embedqa-1b-v2`.
   * * For `completion` and `chat_completion` tasks - `microsoft/phi-3-mini-128k-instruct`.
   * * For `rerank` task - `nv-rerank-qa-mistral-4b:1`.
   * Service doesn't support `text_embedding` task `baai/bge-m3` and `nvidia/nvclip` models due to them not recognizing the `input_type` parameter.
   */
  model_id: string
  /**
   * For a `text_embedding` task, the maximum number of tokens per input. Inputs exceeding this value are truncated prior to sending to the Nvidia API.
   */
  max_input_tokens?: integer
  /**
   * For a `text_embedding` task, the similarity measure. One of cosine, dot_product, l2_norm.
   */
  similarity?: NvidiaSimilarityType
  /**
   * This setting helps to minimize the number of rate limit errors returned from the Nvidia API.
   * By default, the `nvidia` service sets the number of requests allowed per minute to 3000.
   */
  rate_limit?: RateLimitSetting
}

export enum NvidiaTaskType {
  chat_completion,
  completion,
  rerank,
  text_embedding
}

export enum NvidiaServiceType {
  nvidia
}

export enum NvidiaSimilarityType {
  cosine,
  dot_product,
  l2_norm
}

export class NvidiaTaskSettings {
  /**
   * For a `text_embedding` task, type of input sent to the Nvidia endpoint.
   * Valid values are:
   *
   * * `ingest`: Mapped to Nvidia's `passage` value in request. Used when generating embeddings during indexing.
   * * `search`: Mapped to Nvidia's `query` value in request. Used when generating embeddings during querying.
   *
   * IMPORTANT: For Nvidia endpoints, if the `input_type` field is not specified, it defaults to `query`.
   */
  input_type?: NvidiaInputType
  /**
   * For a `text_embedding` task, the method used by the Nvidia model to handle inputs longer than the maximum token length.
   * Valid values are:
   *
   * * `END`: When the input exceeds the maximum input token length, the end of the input is discarded.
   * * `NONE`: When the input exceeds the maximum input token length, an error is returned.
   * * `START`: When the input exceeds the maximum input token length, the start of the input is discarded.
   */
  truncate?: CohereTruncateType
}

export enum NvidiaInputType {
  ingest,
  search
}
