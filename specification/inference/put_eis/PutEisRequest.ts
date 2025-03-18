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

import { RateLimitSetting } from '@inference/_types/Services'
import { RequestBase } from '@_types/Base'
import { Id } from '@_types/common'

/**
 * Create an Elastic Inference Service (EIS) inference endpoint.
 *
 * Create an inference endpoint to perform an inference task through the Elastic Inference Service (EIS).
 * @rest_spec_name inference.put_eis
 * @availability stack since=8.12.0 stability=stable visibility=public
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_inference
 * @doc_id inference-api-put-eis
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_inference/{task_type}/{eis_inference_id}'
      methods: ['PUT']
    }
  ]
  path_parts: {
    /**
     * The type of the inference task that the model will perform.
     * NOTE: The `chat_completion` task type only supports streaming and only through the _stream API.
     */
    task_type: EisTaskType
    /**
     * The unique identifier of the inference endpoint.
     */
    eis_inference_id: Id
  }
  body: {
    /**
     * The type of service supported for the specified task type. In this case, `elastic`.
     */
    service: ServiceType
    /**
     * Settings used to install the inference model. These settings are specific to the `elastic` service.
     */
    service_settings: EisServiceSettings
  }
}

export enum EisTaskType {
  chat_completion
}

export enum ServiceType {
  elastic
}

export class EisServiceSettings {
  /**
   * The name of the model to use for the inference task.
   */
  model_id: string
  /**
   * This setting helps to minimize the number of rate limit errors returned.
   * By default, the `elastic` service sets the number of requests allowed per minute to `240` in case of `chat_completion`.
   */
  rate_limit?: RateLimitSetting
}
