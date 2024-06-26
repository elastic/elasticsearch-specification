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
import { IndexName, WaitForActiveShards } from '@_types/common'
import { Duration } from '@_types/Time'

/**
 * Shrinks an existing index into a new index with fewer primary shards.
 * @doc_id indices-shrink-index
 * @rest_spec_name indices.shrink
 * @availability stack since=5.0.0 stability=stable
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * Name of the source index to shrink.
     */
    index: IndexName
    /**
     * Name of the target index to create.
     */
    target: IndexName
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
     * The key is the alias name.
     * Index alias names support date math.
     */
    aliases?: Dictionary<IndexName, Alias>
    /**
     * Configuration options for the target index.
     */
    settings?: Dictionary<string, UserDefinedValue>
  }
}
