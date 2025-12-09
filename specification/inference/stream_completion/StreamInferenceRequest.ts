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
 * Perform streaming inference.
 *
 * Get real-time responses for completion tasks by delivering answers incrementally, reducing response times during computation.
 * This API works only with the completion task type.
 *
 * IMPORTANT: The inference APIs enable you to use certain services, such as built-in machine learning models (ELSER, E5), models uploaded through Eland, Cohere, OpenAI, Azure, Google AI Studio, Google Vertex AI, Anthropic, Watsonx.ai, or Hugging Face. For built-in models and models uploaded through Eland, the inference APIs offer an alternative way to use and manage trained models. However, if you do not plan to use the inference APIs to use these models or if you want to use non-NLP models, use the machine learning trained model APIs.
 *
 * This API requires the `monitor_inference` cluster privilege (the built-in `inference_admin` and `inference_user` roles grant this privilege). You must use a client that supports streaming.
 * @rest_spec_name inference.stream_completion
 * @availability stack since=8.16.0 stability=stable visibility=public
 * @cluster_privileges monitor_inference
 * @doc_id inference-api-stream
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_inference/completion/{inference_id}/_stream'
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
  response_media_type: MediaType.EventStream
  query_parameters: {
    /**
     * The amount of time to wait for the inference request to complete.
     * @server_default 30s
     */
    timeout?: Duration
  }
  body: {
    /**
     * The text on which you want to perform the inference task.
     * It can be a single string or an array.
     *
     * NOTE: Inference endpoints for the completion task type currently only support a single string as input.
     */
    input: string | string[]
    /**
     * Optional task settings
     */
    task_settings?: TaskSettings
  }
}
