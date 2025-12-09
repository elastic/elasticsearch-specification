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
     */
    query: string
    /**
     * The text on which you want to perform the inference task.
     * It can be a single string or an array.
     *
     * > info
     * > Inference endpoints for the `completion` task type currently only support a single string as input.
     */
    // eslint-disable-next-line es-spec-validator/no-inline-unions -- TODO: nothing, is fixed in main
    input: string | Array<string>
    /**
     * Task settings for the individual inference request.
     * These settings are specific to the task type you specified and override the task settings specified when initializing the service.
     */
    task_settings?: TaskSettings
  }
}
