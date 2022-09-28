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
import { ByteSize, Id } from '@_types/common'
import { integer } from '@_types/Numeric'
import { Duration } from '@_types/Time'
import { DeploymentAllocationState } from '../_types/TrainedModel'

/**
 * Starts a trained model deployment, which allocates the model to every machine learning node.
 * @rest_spec_name ml.start_trained_model_deployment
 * @since 8.0.0
 * @stability beta
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
     * The inference cache size (in memory outside the JVM heap) per node for the model.
     * The default value is the same size as the `model_size_bytes`. To disable the cache,
     * `0b` can be provided.
     */
    cache_size?: ByteSize
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
    /**
     * Specifies the number of inference requests that are allowed in the queue. After the number of requests exceeds
     * this value, new requests are rejected with a 429 error.
     * @server_default 1024
     */
    queue_capacity?: integer
    /**
     * Sets the number of threads used by each model allocation during inference. This generally increases
     * the inference speed. The inference process is a compute-bound process; any number
     * greater than the number of available hardware threads on the machine does not increase the
     * inference speed. If this setting is greater than the number of hardware threads
     * it will automatically be changed to a value less than the number of hardware threads.
     * @server_default 1
     */
    threads_per_allocation?: integer
    /**
     * Specifies the amount of time to wait for the model to deploy.
     * @server_default 20s
     */
    timeout?: Duration
    /**
     * Specifies the allocation status to wait for before returning.
     * @server_default started
     */
    wait_for?: DeploymentAllocationState
  }
}
