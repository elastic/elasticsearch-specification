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
import {
  WatsonxServiceSettings,
  WatsonxServiceType,
  WatsonxTaskType
} from '@inference/_types/CommonTypes'

/**
 * Create a Watsonx inference endpoint.
 *
 * Create an inference endpoint to perform an inference task with the `watsonxai` service.
 * You need an IBM Cloud Databases for Elasticsearch deployment to use the `watsonxai` inference service.
 * You can provision one through the IBM catalog, the Cloud Databases CLI plug-in, the Cloud Databases API, or Terraform.
 * @rest_spec_name inference.put_watsonx
 * @availability stack since=8.16.0 stability=stable visibility=public
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_inference
 * @doc_id inference-api-put-watsonx
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_inference/{task_type}/{watsonx_inference_id}'
      methods: ['PUT']
    }
  ]
  path_parts: {
    /**
     * The task type.
     * The only valid task type for the model to perform is `text_embedding`.
     */
    task_type: WatsonxTaskType
    /**
     * The unique identifier of the inference endpoint.
     */
    watsonx_inference_id: Id
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * Specifies the amount of time to wait for the inference endpoint to be created.
     * @server_default 30s
     */
    timeout?: Duration
  }
  body: {
    /**
     * The type of service supported for the specified task type. In this case, `watsonxai`.
     */
    service: WatsonxServiceType
    /**
     * Settings used to install the inference model. These settings are specific to the `watsonxai` service.
     */
    service_settings: WatsonxServiceSettings
  }
}
