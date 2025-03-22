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
import { integer } from '@_types/Numeric'

/**
 * Create an JinaAI inference endpoint.
 *
 * Create an inference endpoint to perform an inference task with the `jinaai` service.
 *
 * To review the available `rerank` models, refer to <https://jina.ai/reranker>.
 * To review the available `text_embedding` models, refer to the <https://jina.ai/embeddings/>.
 *
 * When you create an inference endpoint, the associated machine learning model is automatically deployed if it is not already running.
 * After creating the endpoint, wait for the model deployment to complete before using it.
 * To verify the deployment status, use the get trained model statistics API.
 * Look for `"state": "fully_allocated"` in the response and ensure that the `"allocation_count"` matches the `"target_allocation_count"`.
 * Avoid creating multiple endpoints for the same model unless required, as each endpoint consumes significant resources.
 * @rest_spec_name inference.put_jinaai
 * @availability stack since=8.18.0 stability=stable visibility=public
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_inference
 * @doc_id inference-api-put-jinaai
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_inference/{task_type}/{jinaai_inference_id}'
      methods: ['PUT']
    }
  ]
  path_parts: {
    /**
     * The type of the inference task that the model will perform.
     */
    task_type: JinaAITaskType
    /**
     * The unique identifier of the inference endpoint.
     */
    jinaai_inference_id: Id
  }
  body: {
    /**
     * The chunking configuration object.
     * @ext_doc_id inference-chunking
     */
    chunking_settings?: InferenceChunkingSettings
    /**
     * The type of service supported for the specified task type. In this case, `openai`.
     */
    service: ServiceType
    /**
     * Settings used to install the inference model. These settings are specific to the `jinaai` service.
     */
    service_settings: JinaAIServiceSettings
    /**
     * Settings to configure the inference task.
     * These settings are specific to the task type you specified.
     */
    task_settings?: JinaAITaskSettings
  }
}

export enum JinaAITaskType {
  rerank,
  text_embedding
}

export enum ServiceType {
  jinaai
}

export enum SimilarityType {
  cosine,
  dot_product,
  l2_norm
}

export enum TextEmbeddingTask {
  classification,
  clustering,
  ingest,
  search
}

export class JinaAIServiceSettings {
  /**
   * A valid API key of your JinaAI account.
   *
   * IMPORTANT: You need to provide the API key only once, during the inference model creation.
   * The get inference endpoint API does not retrieve your API key.
   * After creating the inference model, you cannot change the associated API key.
   * If you want to use a different API key, delete the inference model and recreate it with the same name and the updated API key.
   * @ext_doc_id jinaAi-embeddings
   */
  api_key: string
  /**
   * The name of the model to use for the inference task.
   * For a `rerank` task, it is required.
   * For a `text_embedding` task, it is optional.
   */
  model_id?: string
  /**
   * This setting helps to minimize the number of rate limit errors returned from JinaAI.
   * By default, the `jinaai` service sets the number of requests allowed per minute to 2000 for all task types.
   * @ext_doc_id jinaAi-rate-limit
   */
  rate_limit?: RateLimitSetting
  /**
   * For a `text_embedding` task, the similarity measure. One of cosine, dot_product, l2_norm.
   * The default values varies with the embedding type.
   * For example, a float embedding type uses a `dot_product` similarity measure by default.
   */
  similarity?: SimilarityType
}

export class JinaAITaskSettings {
  /**
   * For a `rerank` task, return the doc text within the results.
   */
  return_documents?: boolean
  /**
   * For a `text_embedding` task, the task passed to the model.
   * Valid values are:
   *
   * * `classification`: Use it for embeddings passed through a text classifier.
   * * `clustering`: Use it for the embeddings run through a clustering algorithm.
   * * `ingest`: Use it for storing document embeddings in a vector database.
   * * `search`: Use it for storing embeddings of search queries run against a vector database to find relevant documents.
   */
  task?: TextEmbeddingTask
  /**
   * For a `rerank` task, the number of most relevant documents to return.
   * It defaults to the number of the documents.
   * If this inference endpoint is used in a `text_similarity_reranker` retriever query and `top_n` is set, it must be greater than or equal to `rank_window_size` in the query.
   */
  top_n?: integer
}
