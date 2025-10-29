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
import { Duration } from '@_types/Time'
import {
  ElserServiceSettings,
  ElserServiceType,
  ElserTaskType
} from '@inference/_types/CommonTypes'
import { InferenceChunkingSettings } from '@inference/_types/Services'

/**
 * Create an ELSER inference endpoint.
 *
 * Create an inference endpoint to perform an inference task with the `elser` service.
 * You can also deploy ELSER by using the Elasticsearch inference integration.
 *
 * > info
 * > Your Elasticsearch deployment contains a preconfigured ELSER inference endpoint, you only need to create the enpoint using the API if you want to customize the settings.
 *
 * The API request will automatically download and deploy the ELSER model if it isn't already downloaded.
 *
 * > info
 * > You might see a 502 bad gateway error in the response when using the Kibana Console. This error usually just reflects a timeout, while the model downloads in the background. You can check the download progress in the Machine Learning UI. If using the Python client, you can set the timeout parameter to a higher value.
 *
 * After creating the endpoint, wait for the model deployment to complete before using it.
 * To verify the deployment status, use the get trained model statistics API.
 * Look for `"state": "fully_allocated"` in the response and ensure that the `"allocation_count"` matches the `"target_allocation_count"`.
 * Avoid creating multiple endpoints for the same model unless required, as each endpoint consumes significant resources.
 * @rest_spec_name inference.put_elser
 * @availability stack since=8.11.0 stability=stable visibility=public
 * @availability serverless stability=stable visibility=public
 * @deprecated 8.16.0 The elser service is deprecated and will be removed in a future release. Use the Elasticsearch inference integration instead, with model_id included in the service_settings.
 * @cluster_privileges manage_inference
 * @doc_id inference-api-put-elser
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_inference/{task_type}/{elser_inference_id}'
      methods: ['PUT']
    }
  ]
  path_parts: {
    /**
     * The type of the inference task that the model will perform.
     */
    task_type: ElserTaskType
    /**
     * The unique identifier of the inference endpoint.
     */
    elser_inference_id: Id
  }
  query_parameters: {
    /**
     * Specifies the amount of time to wait for the inference endpoint to be created.
     * @server_default 30s
     */
    timeout?: Duration
  }
  body: {
    /**
     * The chunking configuration object.
     * Applies only to the `sparse_embedding` and `text_embedding` task types.
     * Not applicable to the `rerank`, `completion`, or `chat_completion` task types.
     * Note that for ELSER endpoints, the max_chunk_size may not exceed `300`.
     * @ext_doc_id inference-chunking
     */
    chunking_settings?: InferenceChunkingSettings
    /**
     * The type of service supported for the specified task type. In this case, `elser`.
     */
    service: ElserServiceType
    /**
     * Settings used to install the inference model. These settings are specific to the `elser` service.
     */
    service_settings: ElserServiceSettings
  }
}
