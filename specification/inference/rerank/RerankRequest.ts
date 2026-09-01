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
import { Id, MediaType } from '@_types/common'
import { integer } from '@_types/Numeric'
import { Duration } from '@_types/Time'
import { TaskSettings } from '@inference/_types/Services'

/**
 * Perform reranking inference on the service.
 *
 * @rest_spec_name inference.rerank
 * @availability stack since=8.11.0 stability=stable visibility=public
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges monitor_inference
 * @doc_id inference-api-post
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_inference/rerank/{inference_id}'
      methods: ['POST']
    }
  ]
  path_parts: {
    /**
     * The unique identifier for the inference endpoint.
     */
    inference_id: Id
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * The amount of time to wait for the inference request to complete.
     * @server_default 30s
     */
    timeout?: Duration
  }
  body: {
    /**
     * Query input.
     * The query can be specified as a single string, or as an object.
     * The object form additionally allows specifying non-text inputs, such as images.
     *
     * > info
     * > Only the `elastic` service currently supports non-text queries for the `rerank` task. For all other services, the query must be a string.
     *
     * string example:
     * ```
     * "query": "some query text"
     * ```
     * object example:
     * ```
     * "query": {
     *   "type": "image",
     *   "format": "base64",
     *   "value": "data:image/jpeg;base64,..."
     * }
     * ```
     */
    query: RerankQuery
    /**
     * The documents to rank.
     * The input can be specified as a single string or an array of strings, or as an object or an array of objects.
     * The object form additionally allows specifying non-text inputs, such as images.
     *
     * > info
     * > Only the `elastic` service currently supports non-text inputs for the `rerank` task. For all other services, the input must be a string or an array of strings.
     *
     * string example:
     * ```
     * "input": "some document text"
     * ```
     * string array example:
     * ```
     * "input": ["some document text", "some more document text"]
     * ```
     * object example:
     * ```
     * "input": {
     *   "type": "image",
     *   "format": "base64",
     *   "value": "data:image/jpeg;base64,..."
     * }
     * ```
     * object array example:
     * ```
     * "input": [
     *   {
     *     "type": "text",
     *     "format": "text",
     *     "value": "some document text"
     *   },
     *   {
     *     "type": "image",
     *     "format": "base64",
     *     "value": "data:image/jpeg;base64,..."
     *   }
     * ]
     * ```
     */
    input: RerankInput
    /**
     * Include the document text in the response.
     */
    return_documents?: boolean
    /**
     * Limit the response to the top N documents.
     */
    top_n?: integer
    /**
     * Task settings for the individual inference request.
     * These settings are specific to the task type you specified and override the task settings specified when initializing the service.
     */
    task_settings?: TaskSettings
  }
}

/**
 * Query input for the `rerank` task.
 * Either a string, or an object. The object form additionally allows specifying non-text inputs, such as images.
 *
 * > info
 * > Only the `elastic` service currently supports non-text queries for the `rerank` task.
 * @codegen_names string, object
 */
export type RerankQuery = string | RerankInputObject

/**
 * The documents to rank for the `rerank` task.
 * Either a string, an array of strings, an object, or an array of objects.
 * The object form additionally allows specifying non-text inputs, such as images.
 *
 * > info
 * > Only the `elastic` service currently supports non-text inputs for the `rerank` task.
 * @codegen_names string, object
 */
export type RerankInput = RerankStringInput | RerankObjectInput

/**
 * Allows specifying text-only documents to rank for the `rerank` task.
 */
type RerankStringInput = string | Array<string>

/**
 * Allows specifying documents to rank as objects, which additionally supports non-text inputs, such as images.
 */
type RerankObjectInput = RerankInputObject | Array<RerankInputObject>

/**
 * An object describing a single input for the `rerank` task, which additionally allows specifying non-text inputs, such as images.
 */
export class RerankInputObject {
  /**
   * The type of input. Not all services and models support all input types.
   */
  type: RerankInputType
  /**
   * The format of the input. For the `text` type this must be `text`. For the `image` type this must be `base64`.
   * If not specified, this defaults to `text` for the `text` type and `base64` for the `image` type.
   */
  format?: RerankInputFormat
  /**
   * The value of the input. For images, this must be a base64-encoded data URI, that is, "data:content/type;base64,...".
   */
  value: string
}

/**
 * The type of input to rank.
 */
export enum RerankInputType {
  text,
  image
}

/**
 * The format of the input. For the `text` type this must be `text`. For the `image` type this must be `base64`.
 * If not specified, this defaults to `text` for the `text` type and `base64` for the `image` type.
 */
export enum RerankInputFormat {
  text,
  base64
}
