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
import { integer } from '@_types/Numeric'
import { AdaptiveAllocationsSettings } from '@ml/_types/TrainedModel'

/**
 * Update a trained model deployment.
 * @rest_spec_name ml.update_trained_model_deployment
 * @availability stack since=8.6.0 stability=stable
 * @availability serverless stability=beta visibility=public
 * @cluster_privileges manage_ml
 * @doc_tag ml trained model
 * @doc_id update-trained-model-deployment
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_ml/trained_models/{model_id}/deployment/_update'
      methods: ['POST']
    }
  ]
  path_parts: {
    /**
     * The unique identifier of the trained model. Currently, only PyTorch models are supported.
     */
    model_id: Id
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * The number of model allocations on each node where the model is deployed.
     * All allocations on a node share the same copy of the model in memory but use
     * a separate set of threads to evaluate the model.
     * Increasing this value generally increases the throughput.
     * If this setting is greater than the number of hardware threads
     * it will automatically be changed to a value less than the number of hardware threads.
     * @server_default 1
     */
    number_of_allocations?: integer
  }
  body?: {
    /**
     * The number of model allocations on each node where the model is deployed.
     * All allocations on a node share the same copy of the model in memory but use
     * a separate set of threads to evaluate the model.
     * Increasing this value generally increases the throughput.
     * If this setting is greater than the number of hardware threads
     * it will automatically be changed to a value less than the number of hardware threads.
     * If adaptive_allocations is enabled, do not set this value, because it’s automatically set.
     * @server_default 1
     */
    number_of_allocations?: integer
    /**
     * Adaptive allocations configuration. When enabled, the number of allocations
     * is set based on the current load.
     * If adaptive_allocations is enabled, do not set the number of allocations manually.
     */
    adaptive_allocations?: AdaptiveAllocationsSettings
  }
}
