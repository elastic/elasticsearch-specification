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
  GoogleAiServiceType,
  GoogleAiStudioServiceSettings,
  GoogleAiStudioTaskType
} from '@inference/_types/CommonTypes'
import { InferenceChunkingSettings } from '@inference/_types/Services'
import { RequestBase } from '@_types/Base'
import { Id } from '@_types/common'

/**
 * Create an Google AI Studio inference endpoint.
 *
 * Create an inference endpoint to perform an inference task with the `googleaistudio` service.
 *
 * When you create an inference endpoint, the associated machine learning model is automatically deployed if it is not already running.
 * After creating the endpoint, wait for the model deployment to complete before using it.
 * To verify the deployment status, use the get trained model statistics API.
 * Look for `"state": "fully_allocated"` in the response and ensure that the `"allocation_count"` matches the `"target_allocation_count"`.
 * Avoid creating multiple endpoints for the same model unless required, as each endpoint consumes significant resources.
 * @rest_spec_name inference.put_googleaistudio
 * @availability stack since=8.15.0 stability=stable visibility=public
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_inference
 * @doc_id inference-api-put-googleaistudio
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_inference/{task_type}/{googleaistudio_inference_id}'
      methods: ['PUT']
    }
  ]
  path_parts: {
    /**
     * The type of the inference task that the model will perform.
     */
    task_type: GoogleAiStudioTaskType
    /**
     * The unique identifier of the inference endpoint.
     */
    googleaistudio_inference_id: Id
  }
  body: {
    /**
     * The chunking configuration object.
     * @ext_doc_id inference-chunking
     */
    chunking_settings?: InferenceChunkingSettings
    /**
     * The type of service supported for the specified task type. In this case, `googleaistudio`.
     */
    service: GoogleAiServiceType
    /**
     * Settings used to install the inference model. These settings are specific to the `googleaistudio` service.
     */
    service_settings: GoogleAiStudioServiceSettings
  }
}
