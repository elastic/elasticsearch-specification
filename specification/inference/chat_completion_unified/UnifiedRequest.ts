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

import { RequestChatCompletion } from '@inference/_types/CommonTypes'
import { RequestBase } from '@_types/Base'
import { Id } from '@_types/common'
import { Duration } from '@_types/Time'
/**
 * Perform chat completion inference
 * @rest_spec_name inference.chat_completion_unified
 * @availability stack since=8.18.0 stability=stable visibility=public
 * @availability serverless stability=stable visibility=public
 * @doc_id inference-api-chat-completion
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_inference/chat_completion/{inference_id}/_stream'
      methods: ['POST']
    }
  ]
  path_parts: {
    /**
     * The inference Id
     */
    inference_id: Id
  }
  query_parameters: {
    /**
     * Specifies the amount of time to wait for the inference request to complete.
     * @server_default 30s
     */
    timeout?: Duration
  }
  /** @codegen_name chat_completion_request */
  body: RequestChatCompletion
}
