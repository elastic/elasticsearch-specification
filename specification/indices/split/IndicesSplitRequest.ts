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
import { IndexName, MediaType, WaitForActiveShards } from '@_types/common'
import { Duration } from '@_types/Time'
import { Alias } from '@indices/_types/Alias'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

/**
 * Split an index.
 *
 * Split an index into a new index with more primary shards.
 * * Before you can split an index:
 *
 * * The index must be read-only.
 * * The cluster health status must be green.
 *
 * You can do make an index read-only with the following request using the add index block API:
 *
 * ```
 * PUT /my_source_index/_block/write
 * ```
 *
 * The current write index on a data stream cannot be split.
 * In order to split the current write index, the data stream must first be rolled over so that a new write index is created and then the previous write index can be split.
 *
 * The number of times the index can be split (and the number of shards that each original shard can be split into) is determined by the `index.number_of_routing_shards` setting.
 * The number of routing shards specifies the hashing space that is used internally to distribute documents across shards with consistent hashing.
 * For instance, a 5 shard index with `number_of_routing_shards` set to 30 (5 x 2 x 3) could be split by a factor of 2 or 3.
 *
 * A split operation:
 *
 * * Creates a new target index with the same definition as the source index, but with a larger number of primary shards.
 * * Hard-links segments from the source index into the target index. If the file system doesn't support hard-linking, all segments are copied into the new index, which is a much more time consuming process.
 * * Hashes all documents again, after low level files are created, to delete documents that belong to a different shard.
 * * Recovers the target index as though it were a closed index which had just been re-opened.
 *
 * IMPORTANT: Indices can only be split if they satisfy the following requirements:
 *
 * * The target index must not exist.
 * * The source index must have fewer primary shards than the target index.
 * * The number of primary shards in the target index must be a multiple of the number of primary shards in the source index.
 * * The node handling the split process must have sufficient free disk space to accommodate a second copy of the existing index.
 * @doc_id indices-split-index
 * @rest_spec_name indices.split
 * @category management
 * @availability stack since=6.1.0 stability=stable
 * @index_privileges manage
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/{index}/_split/{target}'
      methods: ['PUT', 'POST']
    }
  ]
  path_parts: {
    /**
     * Name of the source index to split.
     */
    index: IndexName
    /**
     * Name of the target index to create.
     */
    target: IndexName
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
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
     */
    settings?: Dictionary<string, UserDefinedValue>
  }
}
