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
  CompletionTool,
  CompletionToolType,
  Message
} from '@inference/chat_completion_unified/UnifiedRequest'
import { RequestBase } from '@_types/Base'
import { float, integer, long } from '@_types/Numeric'

export interface RequestChatCompletionBase extends RequestBase {
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
   * Controls which tool is called by the model.
   */
  tool_choice?: CompletionToolType
  /**
   * A list of tools that the model can call.
   */
  tools?: Array<CompletionTool>
  /**
   * Nucleus sampling, an alternative to sampling with temperature.
   */
  top_p?: float
}

export class AdaptiveAllocations {
  /**
   * Turn on `adaptive_allocations`.
   * @server_default false
   */
  enabled?: boolean
  /**
   * The maximum number of allocations to scale to.
   * If set, it must be greater than or equal to `min_number_of_allocations`.
   */
  max_number_of_allocations?: integer
  /**
   * The minimum number of allocations to scale to.
   * If set, it must be greater than or equal to 0.
   * If not defined, the deployment scales to 0.
   */
  min_number_of_allocations?: integer
}
