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
import {
  CustomServiceSettings,
  CustomServiceType,
  CustomTaskSettings,
  CustomTaskType
} from '@inference/_types/CommonTypes'
import { InferenceChunkingSettings } from '@inference/_types/Services'

/**
 * Create a custom inference endpoint.
 *
 * The custom service gives more control over how to interact with external inference services that aren't explicitly supported through dedicated integrations.
 * The custom service gives you the ability to define the headers, url, query parameters, request body, and secrets.
 * The custom service supports the template replacement functionality, which enables you to define a template that can be replaced with the value associated with that key.
 * Templates are portions of a string that start with `${` and end with `}`.
 * The parameters `secret_parameters` and `task_settings` are checked for keys for template replacement. Template replacement is supported in the `request`, `headers`, `url`, and `query_parameters`.
 * If the definition (key) is not found for a template, an error message is returned.
 * In case of an endpoint definition like the following:
 * ```
 * PUT _inference/text_embedding/test-text-embedding
 * {
 *   "service": "custom",
 *   "service_settings": {
 *      "secret_parameters": {
 *           "api_key": "<some api key>"
 *      },
 *      "url": "...endpoints.huggingface.cloud/v1/embeddings",
 *      "headers": {
 *          "Authorization": "Bearer ${api_key}",
 *          "Content-Type": "application/json"
 *      },
 *      "request": "{\"input\": ${input}}",
 *      "response": {
 *          "json_parser": {
 *              "text_embeddings":"$.data[*].embedding[*]"
 *          }
 *      }
 *   }
 * }
 * ```
 * To replace `${api_key}` the `secret_parameters` and `task_settings` are checked for a key named `api_key`.
 *
 * > info
 * > Templates should not be surrounded by quotes.
 *
 * Pre-defined templates:
 * * `${input}` refers to the array of input strings that comes from the `input` field of the subsequent inference requests.
 * * `${input_type}` refers to the input type translation values.
 * * `${query}` refers to the query field used specifically for reranking tasks.
 * * `${top_n}` refers to the `top_n` field available when performing rerank requests.
 * * `${return_documents}` refers to the `return_documents` field available when performing rerank requests.
 * @rest_spec_name inference.put_custom
 * @availability stack since=8.19.0 stability=stable visibility=public
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_inference
 * @doc_id inference-api-put-custom
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_inference/{task_type}/{custom_inference_id}'
      methods: ['PUT']
    }
  ]
  path_parts: {
    /**
     * The type of the inference task that the model will perform.
     */
    task_type: CustomTaskType
    /**
     * The unique identifier of the inference endpoint.
     */
    custom_inference_id: Id
  }
  body: {
    /**
     * The chunking configuration object.
     * Applies only to the `sparse_embedding` or `text_embedding` task types.
     * Not applicable to the `rerank` or `completion` task types.
     * @ext_doc_id inference-chunking
     */
    chunking_settings?: InferenceChunkingSettings
    /**
     * The type of service supported for the specified task type. In this case, `custom`.
     */
    service: CustomServiceType
    /**
     * Settings used to install the inference model.
     * These settings are specific to the `custom` service.
     */
    service_settings: CustomServiceSettings
    /**
     * Settings to configure the inference task.
     * These settings are specific to the task type you specified.
     */
    task_settings?: CustomTaskSettings
  }
}
