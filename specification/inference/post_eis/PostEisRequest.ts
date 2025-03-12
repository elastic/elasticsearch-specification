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

import type { Request as RequestChatCompletion } from '../chat_completion_unified/UnifiedRequest'
import { Id } from '@_types/common'


export type OmittedChatCompletionRequest = Omit<RequestChatCompletion, 'urls' | 'path_parts'>;

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
export interface Request extends OmittedChatCompletionRequest {
  urls: [
    {
      path: '/_inference/{task_type}/{eis_inference_id}/_stream'
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
}

export enum EisTaskType {
  chat_completion
}

