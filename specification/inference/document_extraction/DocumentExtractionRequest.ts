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
import { Duration } from '@_types/Time'
import { TaskSettings } from '@inference/_types/Services'

/**
 * Perform document extraction inference on the service.
 *
 * Extract the content of documents, such as PDFs or images of documents, into a textual format.
 *
 * @rest_spec_name inference.document_extraction
 * @availability stack since=9.6.0 stability=experimental visibility=public
 * @availability serverless stability=experimental visibility=public
 * @cluster_privileges monitor_inference
 * @doc_id inference-api-post
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_inference/document_extraction/{inference_id}'
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
     * @server_default 120s
     */
    timeout?: Duration
  }
  body: {
    /**
     * The documents to extract the content from.
     * Either a `content` object or an array of `content` objects.
     *
     * `content` object example:
     * ```
     * "input": {
     *   "content": {
     *     "type": "pdf",
     *     "format": "base64",
     *     "value": "data:application/pdf;base64,..."
     *   }
     * }
     * ```
     * `content` object array example:
     * ```
     * "input": [
     *   {
     *     "content": {
     *       "type": "pdf",
     *       "format": "base64",
     *       "value": "data:application/pdf;base64,..."
     *     }
     *   },
     *   {
     *     "content": {
     *       "type": "image",
     *       "format": "url",
     *       "value": "https://example.com/scanned-page.png"
     *     }
     *   }
     * ]
     * ```
     */
    input: DocumentExtractionInput
    /**
     * Task settings for the individual inference request.
     * These settings are specific to the task type you specified and override the task settings specified when initializing the service.
     */
    task_settings?: TaskSettings
  }
}

/**
 * The documents to extract the content from for the `document_extraction` task.
 * Either a `content` object or an array of `content` objects.
 */
export type DocumentExtractionInput =
  | DocumentExtractionContentObject
  | Array<DocumentExtractionContentObject>

/**
 * A wrapper object which contains a single document to extract the content from.
 */
export class DocumentExtractionContentObject {
  /**
   * The document to extract the content from.
   */
  content: DocumentExtractionContentObjectItem
}

/**
 * An object describing a single document to extract the content from.
 */
export class DocumentExtractionContentObjectItem {
  /**
   * The type of the document. Not all services and models support all types.
   */
  type: DocumentExtractionContentType
  /**
   * The format of the document. If not specified, this defaults to `base64`.
   * Not all services and models support all formats.
   */
  format?: DocumentExtractionContentFormat
  /**
   * The value of the document. For the `base64` format, this must be a base64-encoded data URI, that is, "data:content/type;base64,...".
   * For the `url` format, this must be a URL that points to the document, that is, "https://example.com/document.pdf".
   */
  value: string
}

/**
 * The type of the document to extract the content from.
 */
export enum DocumentExtractionContentType {
  image,
  pdf
}

/**
 * The format of the document to extract the content from.
 * If not specified, this defaults to `base64`.
 */
export enum DocumentExtractionContentFormat {
  base64,
  url
}
