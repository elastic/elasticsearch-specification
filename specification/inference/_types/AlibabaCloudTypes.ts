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

export class AlibabaCloudServiceSettings {
  /**
   * A valid API key for the AlibabaCloud AI Search API.
   */
  api_key: string
  /**
   * The name of the host address used for the inference task.
   * You can find the host address in the API keys section of the documentation.
   * @ext_doc_id alibabacloud-api-keys
   */
  host: string
  /**
   * This setting helps to minimize the number of rate limit errors returned from AlibabaCloud AI Search.
   * By default, the `alibabacloud-ai-search` service sets the number of requests allowed per minute to `1000`.
   */
  rate_limit?: RateLimitSetting
  /**
   * The name of the model service to use for the inference task.
   * The following service IDs are available for the `completion` task:
   *
   * * `ops-qwen-turbo`
   * * `qwen-turbo`
   * * `qwen-plus`
   * * `qwen-max ÷ qwen-max-longcontext`
   *
   * The following service ID is available for the `rerank` task:
   *
   * * `ops-bge-reranker-larger`
   *
   * The following service ID is available for the `sparse_embedding` task:
   *
   * * `ops-text-sparse-embedding-001`
   *
   * The following service IDs are available for the `text_embedding` task:
   *
   * `ops-text-embedding-001`
   * `ops-text-embedding-zh-001`
   * `ops-text-embedding-en-001`
   * `ops-text-embedding-002`
   */
  service_id: string
  /**
   * The name of the workspace used for the inference task.
   */
  workspace: string
}

export class AlibabaCloudTaskSettings {
  /**
   * For a `sparse_embedding` or `text_embedding` task, specify the type of input passed to the model.
   * Valid values are:
   *
   * * `ingest` for storing document embeddings in a vector database.
   * * `search` for storing embeddings of search queries run against a vector database to find relevant documents.
   */
  input_type?: string
  /**
   * For a `sparse_embedding` task, it affects whether the token name will be returned in the response.
   * It defaults to `false`, which means only the token ID will be returned in the response.
   */
  return_token?: boolean
}

export enum AlibabaCloudTaskType {
  completion,
  rerank,
  sparse_embedding,
  text_embedding
}

export enum AlibabaCloudServiceType {
  'alibabacloud-ai-search'
}
