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
  InferenceChunkingSettings,
  RateLimitSetting
} from '@inference/_types/Services'
import { RequestBase } from '@_types/Base'
import { Id } from '@_types/common'
import { integer } from '@_types/Numeric'

/**
 * Create a Google Vertex AI inference endpoint.
 *
 * Create an inference endpoint to perform an inference task with the `googlevertexai` service.
 *
 * When you create an inference endpoint, the associated machine learning model is automatically deployed if it is not already running.
 * After creating the endpoint, wait for the model deployment to complete before using it.
 * To verify the deployment status, use the get trained model statistics API.
 * Look for `"state": "fully_allocated"` in the response and ensure that the `"allocation_count"` matches the `"target_allocation_count"`.
 * Avoid creating multiple endpoints for the same model unless required, as each endpoint consumes significant resources.
 * @rest_spec_name inference.put_googlevertexai
 * @availability stack since=8.15.0 stability=stable visibility=public
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_inference
 * @doc_id inference-api-put-googlevertexai
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_inference/{task_type}/{googlevertexai_inference_id}'
      methods: ['PUT']
    }
  ]
  path_parts: {
    /**
     * The type of the inference task that the model will perform.
     */
    task_type: GoogleVertexAITaskType
    /**
     * The unique identifier of the inference endpoint.
     */
    googlevertexai_inference_id: Id
  }
  body: {
    /**
     * The chunking configuration object.
     * @ext_doc_id inference-chunking
     */
    chunking_settings?: InferenceChunkingSettings
    /**
     * The type of service supported for the specified task type. In this case, `googlevertexai`.
     */
    service: ServiceType
    /**
     * Settings used to install the inference model. These settings are specific to the `googlevertexai` service.
     */
    service_settings: GoogleVertexAIServiceSettings
    /**
     * Settings to configure the inference task.
     * These settings are specific to the task type you specified.
     */
    task_settings?: GoogleVertexAITaskSettings
  }
}

export enum GoogleVertexAITaskType {
  rerank,
  text_embedding
}

export enum ServiceType {
  googlevertexai
}

export class GoogleVertexAIServiceSettings {
  /**
   * The name of the location to use for the inference task.
   * Refer to the Google documentation for the list of supported locations.
   * @ext_doc_id googlevertexai-locations
   */
  location: string
  /**
   * The name of the model to use for the inference task.
   * Refer to the Google documentation for the list of supported models.
   * @ext_doc_id googlevertexai-models
   */
  model_id: string
  /**
   * The name of the project to use for the inference task.
   */
  project_id: string
  /**
   * This setting helps to minimize the number of rate limit errors returned from Google Vertex AI.
   * By default, the `googlevertexai` service sets the number of requests allowed per minute to 30.000.
   */
  rate_limit?: RateLimitSetting
  /**
   * A valid service account in JSON format for the Google Vertex AI API.
   */
  service_account_json: string
}

export class GoogleVertexAITaskSettings {
  /**
   * For a `text_embedding` task, truncate inputs longer than the maximum token length automatically.
   */
  auto_truncate?: boolean
  /**
   * For a `rerank` task, the number of the top N documents that should be returned.
   */
  top_n?: integer
}
