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
 * 
 * The chat completion inference API enables real-time responses for chat completion tasks by delivering answers incrementally, reducing response times during computation. 
 * It only works with the `chat_completion` task type for `openai` and `elastic` inference services.

 * IMPORTANT: The inference APIs enable you to use certain services, such as built-in machine learning models (ELSER, E5), models uploaded through Eland, Cohere, OpenAI, Azure, Google AI Studio, Google Vertex AI, Anthropic, Watsonx.ai, or Hugging Face.
 * For built-in models and models uploaded through Eland, the inference APIs offer an alternative way to use and manage trained models. However, if you do not plan to use the inference APIs to use these models or if you want to use non-NLP models, use the machine learning trained model APIs.
 * 
 * NOTE: The `chat_completion` task type is only available within the _stream API and only supports streaming.
 * The Chat completion inference API and the Stream inference API differ in their response structure and capabilities.
 * The Chat completion inference API provides more comprehensive customization options through more fields and function calling support.
 * If you use the `openai` service or the `elastic` service, use the Chat completion inference API.
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
