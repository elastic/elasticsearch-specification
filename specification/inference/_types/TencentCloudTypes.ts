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

export class TencentCloudServiceSettings {
  /**
   * A valid API key for the Tencent Cloud AI Gateway.
   * Contact the administrator of the gateway to obtain a token in the format `sk-<your-api-key>`.
   */
  api_key: string
  /**
   * The name of the model to use for the inference task.
   * For example, `bge-m3` for the `text_embedding` task, `deepseek-v3` for the `completion` and `chat_completion` tasks, and `bge-reranker-v2-m3` for the `rerank` task.
   * The gateway supports additional models. Refer to the Tencent Cloud AI Gateway documentation for the full list.
   */
  model_id: string
  /**
   * The region of the Tencent Cloud AI Gateway, for example `bj`, `sh` or `gz`.
   * The URL of the endpoint is built from the region: `https://{region}.aisearch.tencentelasticsearch.com`.
   * @server_default bj
   */
  region?: string
  /**
   * For a `text_embedding` task, the maximum number of tokens per input.
   */
  max_input_tokens?: integer
  /**
   * For a `text_embedding` task, the similarity measure. One of `cosine`, `dot_product`, `l2_norm`.
   */
  similarity?: TencentCloudSimilarityType
  /**
   * This setting helps to minimize the number of rate limit errors returned from the Tencent Cloud AI Gateway.
   * By default, the `tencentcloud` service sets the number of requests allowed per minute to 20 for the `text_embedding` and `rerank` tasks, and to 5 for the `completion` and `chat_completion` tasks.
   */
  rate_limit?: RateLimitSetting
}

export enum TencentCloudTaskType {
  chat_completion,
  completion,
  rerank,
  text_embedding
}

export enum TencentCloudServiceType {
  tencentcloud
}

export enum TencentCloudSimilarityType {
  cosine,
  dot_product,
  l2_norm
}

export class TencentCloudTaskSettings {
  /**
   * For a `rerank` task, the number of most relevant documents to return.
   * It must be a positive integer.
   */
  top_n?: integer
  /**
   * For a `rerank` task, whether to return the documents in the response, in addition to their relevance scores.
   */
  return_documents?: boolean
}
