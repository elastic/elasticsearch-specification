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
import { DecisionInput, DecisionTaskSettings } from './types'

/**
 * Perform decision inference on the service.
 *
 * Answer a set of named questions about an input, such as whether a customer is complaining, which team should handle a request, or how angry a customer is.
 * The questions are defined in the task settings of the inference endpoint, and can be replaced for a single request through `task_settings`.
 *
 * > info
 * > Only the `elastic` service currently supports the `decision` task.
 *
 * @rest_spec_name inference.decision
 * @availability stack since=9.6.0 stability=experimental visibility=public
 * @availability serverless stability=experimental visibility=public
 * @cluster_privileges monitor_inference
 * @doc_id inference-api-post
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_inference/decision/{inference_id}'
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
     * The input to answer the questions about.
     * It can be specified as a string, or as an object.
     * The object form additionally allows specifying images.
     *
     * string example:
     * ```
     * "input": "I was charged twice for my order and nobody answers my emails."
     * ```
     * object example:
     * ```
     * "input": {
     *   "type": "image",
     *   "format": "base64",
     *   "value": "data:image/jpeg;base64,..."
     * }
     * ```
     */
    input: DecisionInput
    /**
     * Task settings for the individual inference request.
     * These settings override the task settings specified when creating the inference endpoint.
     */
    task_settings?: DecisionTaskSettings
  }
}
