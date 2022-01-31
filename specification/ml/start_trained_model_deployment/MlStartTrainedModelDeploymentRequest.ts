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
import { integer } from '@_types/Numeric'
import { Time } from '@_types/Time'
import { DeploymentAllocationState } from '../_types/TrainedModel'

/**
 * Starts a trained model deployment, which allocates the model to every machine learning node.
 * @rest_spec_name ml.start_trained_model_deployment
 * @since 8.0.0
 * @stability experimental
 * @cluster_privileges manage_ml
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * The unique identifier of the trained model. Currently, only PyTorch models are supported.
     */
    model_id: Id
  }
  query_parameters: {
    /**
     * Specifies the number of threads that are used by the inference process. If you increase this value, inference
     * speed generally increases. However, the actual number of threads is limited by the number of available CPU
     * cores.
     * @server_default 1
     */
    inference_threads?: integer
    /**
     * Specifies the number of threads that are used when sending inference requests to the model. If you increase this value,
     * throughput generally increases.
     * @server_default 1
     */
    model_threads?: integer
    /**
     * Specifies the number of inference requests that are allowed in the queue. After the number of requests exceeds
     * this value, new requests are rejected with a 429 error.
     * @server_default 1024
     */
    queue_capacity?: integer
    /**
     * Specifies the amount of time to wait for the model to deploy.
     * @server_default 20s
     */
    timeout?: Time
    /**
     * Specifies the allocation status to wait for before returning.
     * @server_default started
     */
    wait_for?: DeploymentAllocationState
  }
}
