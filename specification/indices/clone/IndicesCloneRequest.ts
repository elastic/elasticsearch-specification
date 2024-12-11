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

import { Alias } from '@indices/_types/Alias'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { RequestBase } from '@_types/Base'
import { IndexName, Name, WaitForActiveShards } from '@_types/common'
import { Duration } from '@_types/Time'

/**
 * Clone an index.
 * Clone an existing index into a new index.
 * Each original primary shard is cloned into a new primary shard in the new index.
 *
 * IMPORTANT: Elasticsearch does not apply index templates to the resulting index.
 * The API also does not copy index metadata from the original index.
 * Index metadata includes aliases, index lifecycle management phase definitions, and cross-cluster replication (CCR) follower information.
 * For example, if you clone a CCR follower index, the resulting clone will not be a follower index.
 *
 * The clone API copies most index settings from the source index to the resulting index, with the exception of `index.number_of_replicas` and `index.auto_expand_replicas`.
 * To set the number of replicas in the resulting index, configure these settings in the clone request.
 *
 * Cloning works as follows:
 *
 * * First, it creates a new target index with the same definition as the source index.
 * * Then it hard-links segments from the source index into the target index. If the file system does not support hard-linking, all segments are copied into the new index, which is a much more time consuming process.
 * * Finally, it recovers the target index as though it were a closed index which had just been re-opened.
 *
 * IMPORTANT: Indices can only be cloned if they meet the following requirements:
 *
 * * The target index must not exist.
 * * The source index must have the same number of primary shards as the target index.
 * * The node handling the clone process must have sufficient free disk space to accommodate a second copy of the existing index.
 *
 * @rest_spec_name indices.clone
 * @availability stack since=7.4.0 stability=stable
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * Name of the source index to clone.
     */
    index: IndexName
    /**
     * Name of the target index to create.
     * @doc_id indices-clone-index
     */
    target: Name
  }
  query_parameters: {
    /**
     * Period to wait for a connection to the master node.
     * If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    master_timeout?: Duration
    /**
     * Period to wait for a response.
     * If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    timeout?: Duration
    /**
     * The number of shard copies that must be active before proceeding with the operation.
     * Set to `all` or any positive integer up to the total number of shards in the index (`number_of_replicas+1`).
     * @server_default 1
     */
    wait_for_active_shards?: WaitForActiveShards
  }
  body: {
    /**
     * Aliases for the resulting index.
     */
    aliases?: Dictionary<IndexName, Alias>
    /**
     * Configuration options for the target index.
     * @doc_id index-modules-settings
     */
    settings?: Dictionary<string, UserDefinedValue>
  }
}
