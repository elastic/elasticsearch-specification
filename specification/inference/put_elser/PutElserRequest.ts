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

import { InferenceChunkingSettings } from '@inference/_types/Services'
import { RequestBase } from '@_types/Base'
import { Id } from '@_types/common'
import { integer } from '@_types/Numeric'

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
  body: {
    /**
     * The chunking configuration object.
     * @ext_doc_id inference-chunking
     */
    chunking_settings?: InferenceChunkingSettings
    /**
     * The type of service supported for the specified task type. In this case, `elser`.
     */
    service: ServiceType
    /**
     * Settings used to install the inference model. These settings are specific to the `elser` service.
     */
    service_settings: ElserServiceSettings
  }
}

export enum ElserTaskType {
  sparse_embedding
}

export enum ServiceType {
  elser
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

export class ElserServiceSettings {
  /**
   * Adaptive allocations configuration details.
   * If `enabled` is true, the number of allocations of the model is set based on the current load the process gets.
   * When the load is high, a new model allocation is automatically created, respecting the value of `max_number_of_allocations` if it's set.
   * When the load is low, a model allocation is automatically removed, respecting the value of `min_number_of_allocations` if it's set.
   * If `enabled` is true, do not set the number of allocations manually.
   */
  adaptive_allocations?: AdaptiveAllocations
  /**
   * The total number of allocations this model is assigned across machine learning nodes.
   * Increasing this value generally increases the throughput.
   * If adaptive allocations is enabled, do not set this value because it's automatically set.
   */
  num_allocations: integer
  /**
   * The number of threads used by each model allocation during inference.
   * Increasing this value generally increases the speed per inference request.
   * The inference process is a compute-bound process; `threads_per_allocations` must not exceed the number of available allocated processors per node.
   * The value must be a power of 2.
   * The maximum value is 32.
   *
   * > info
   * > If you want to optimize your ELSER endpoint for ingest, set the number of threads to 1. If you want to optimize your ELSER endpoint for search, set the number of threads to greater than 1.
   */
  num_threads: integer
}
