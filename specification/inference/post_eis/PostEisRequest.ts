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
import { float, long } from '@_types/Numeric'

/**
 * Performs an inference task through the Elastic Inference Service (EIS).
 *
 * Perform an inference task with the `elastic` service.
 * @rest_spec_name inference.post_eis
 * @availability stack since=9.0.0 stability=stable visibility=public
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_inference
 * @doc_id inference-api-post-eis
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_inference/{task_type}/{eis_inference_id}'
      methods: ['POST']
    }
  ]
  path_parts: {
    /**
     * The type of the inference task that the model will perform.
     */
    task_type: EisTaskType
    /**
     * The unique identifier of the inference endpoint.
     */
    eis_inference_id: Id
  }
  body: {
    /**
     * A list of objects representing the conversation.
     */
    messages: Array<Message>
    /**
     * The ID of the model to use.
     */
    model?: string
    /**
     * The upper bound limit for the number of tokens that can be generated for a completion request.
     */
    max_completion_tokens?: long
    /**
     * A sequence of strings to control when the model should stop generating additional tokens.
     */
    stop?: Array<string>
    /**
     * The sampling temperature to use.
     */
    temperature?: float
    /**
     * Nucleus sampling, an alternative to sampling with temperature.
     */
    top_p?: float
  }
}

export enum EisTaskType {
  chat_completion
}

/**
 * @codegen_names string, object
 */
export type MessageContent = string | Array<ContentObject>

/**
 * An object style representation of a single portion of a conversation.
 */
export interface ContentObject {
  /**
   * The text content.
   */
  text: string
  /**
   * The type of content.
   */
  type: string
}

/**
 * An object representing part of the conversation.
 */
export interface Message {
  /**
   * The content of the message.
   */
  content?: MessageContent
  /**
   * The role of the message author.
   */
  role: string
}
