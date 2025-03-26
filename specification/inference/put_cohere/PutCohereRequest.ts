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
 * Create a Cohere inference endpoint.
 *
 * Create an inference endpoint to perform an inference task with the `cohere` service.
 *
 * When you create an inference endpoint, the associated machine learning model is automatically deployed if it is not already running.
 * After creating the endpoint, wait for the model deployment to complete before using it.
 * To verify the deployment status, use the get trained model statistics API.
 * Look for `"state": "fully_allocated"` in the response and ensure that the `"allocation_count"` matches the `"target_allocation_count"`.
 * Avoid creating multiple endpoints for the same model unless required, as each endpoint consumes significant resources.
 * @rest_spec_name inference.put_cohere
 * @availability stack since=8.13.0 stability=stable visibility=public
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_inference
 * @doc_id inference-api-put-cohere
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_inference/{task_type}/{cohere_inference_id}'
      methods: ['PUT']
    }
  ]
  path_parts: {
    /**
     * The type of the inference task that the model will perform.
     */
    task_type: CohereTaskType
    /**
     * The unique identifier of the inference endpoint.
     */
    cohere_inference_id: Id
  }
  body: {
    /**
     * The chunking configuration object.
     * @ext_doc_id inference-chunking
     */
    chunking_settings?: InferenceChunkingSettings
    /**
     * The type of service supported for the specified task type. In this case, `cohere`.
     */
    service: ServiceType
    /**
     * Settings used to install the inference model.
     * These settings are specific to the `cohere` service.
     */
    service_settings: CohereServiceSettings
    /**
     * Settings to configure the inference task.
     * These settings are specific to the task type you specified.
     */
    task_settings?: CohereTaskSettings
  }
}

export enum CohereTaskType {
  completion,
  rerank,
  text_embedding
}

export enum ServiceType {
  cohere
}

export enum EmbeddingType {
  byte,
  float,
  int8
}

export enum InputType {
  classification,
  clustering,
  ingest,
  search
}

export enum SimilarityType {
  cosine,
  dot_product,
  l2_norm
}

export enum TruncateType {
  END,
  NONE,
  START
}

export class CohereServiceSettings {
  /**
   * A valid API key for your Cohere account.
   * You can find or create your Cohere API keys on the Cohere API key settings page.
   *
   * IMPORTANT: You need to provide the API key only once, during the inference model creation.
   * The get inference endpoint API does not retrieve your API key.
   * After creating the inference model, you cannot change the associated API key.
   * If you want to use a different API key, delete the inference model and recreate it with the same name and the updated API key.
   * @ext_doc_id cohere-api-keys
   */
  api_key: string
  /**
   * For a `text_embedding` task, the types of embeddings you want to get back.
   * Use `byte` for signed int8 embeddings (this is a synonym of `int8`).
   * Use `float` for the default float embeddings.
   * Use `int8` for signed int8 embeddings.
   * @server_default float
   */
  embedding_type?: EmbeddingType
  /**
   * For a `completion`, `rerank`, or `text_embedding` task, the name of the model to use for the inference task.
   *
   * * For the available `completion` models, refer to the [Cohere command docs](https://docs.cohere.com/docs/models#command).
   * * For the available `rerank` models, refer to the [Cohere rerank docs](https://docs.cohere.com/reference/rerank-1).
   * * For the available `text_embedding` models, refer to [Cohere embed docs](https://docs.cohere.com/reference/embed).
   *
   * The default value for a text embedding task is `embed-english-v2.0`.
   */
  model_id?: string
  /**
   * This setting helps to minimize the number of rate limit errors returned from Cohere.
   * By default, the `cohere` service sets the number of requests allowed per minute to 10000.
   */
  rate_limit?: RateLimitSetting
  /**
   * The similarity measure.
   * If the `embedding_type` is `float`, the default value is `dot_product`.
   * If the `embedding_type` is `int8` or `byte`, the default value is `cosine`.
   */
  similarity?: SimilarityType
}

export class CohereTaskSettings {
  /**
   * For a `text_embedding` task, the type of input passed to the model.
   * Valid values are:
   *
   * * `classification`: Use it for embeddings passed through a text classifier.
   * * `clustering`: Use it for the embeddings run through a clustering algorithm.
   * * `ingest`: Use it for storing document embeddings in a vector database.
   * * `search`: Use it for storing embeddings of search queries run against a vector database to find relevant documents.
   *
   * IMPORTANT: The `input_type` field is required when using embedding models `v3` and higher.
   */
  input_type?: InputType
  /**
   * For a `rerank` task, return doc text within the results.
   */
  return_documents?: boolean
  /**
   * For a `rerank` task, the number of most relevant documents to return.
   * It defaults to the number of the documents.
   * If this inference endpoint is used in a `text_similarity_reranker` retriever query and `top_n` is set, it must be greater than or equal to `rank_window_size` in the query.
   */
  top_n?: integer
  /**
   * For a `text_embedding` task, the method to handle inputs longer than the maximum token length.
   * Valid values are:
   *
   * * `END`: When the input exceeds the maximum input token length, the end of the input is discarded.
   * * `NONE`: When the input exceeds the maximum input token length, an error is returned.
   * * `START`: When the input exceeds the maximum input token length, the start of the input is discarded.
   */
  truncate?: TruncateType
}
