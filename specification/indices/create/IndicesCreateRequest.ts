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
import { IndexName, Name, WaitForActiveShards } from '@_types/common'
import { TypeMapping } from '@_types/mapping/TypeMapping'
import { Duration } from '@_types/Time'
import { Alias } from '@indices/_types/Alias'
import { IndexSettings } from '@indices/_types/IndexSettings'
import { Dictionary } from '@spec_utils/Dictionary'

/**
 * Create an index.
 * You can use the create index API to add a new index to an Elasticsearch cluster.
 * When creating an index, you can specify the following:
 *
 * * Settings for the index.
 * * Mappings for fields in the index.
 * * Index aliases
 *
 * **Wait for active shards**
 *
 * By default, index creation will only return a response to the client when the primary copies of each shard have been started, or the request times out.
 * The index creation response will indicate what happened.
 * For example, `acknowledged` indicates whether the index was successfully created in the cluster, `while shards_acknowledged` indicates whether the requisite number of shard copies were started for each shard in the index before timing out.
 * Note that it is still possible for either `acknowledged` or `shards_acknowledged` to be `false`, but for the index creation to be successful.
 * These values simply indicate whether the operation completed before the timeout.
 * If `acknowledged` is false, the request timed out before the cluster state was updated with the newly created index, but it probably will be created sometime soon.
 * If `shards_acknowledged` is false, then the request timed out before the requisite number of shards were started (by default just the primaries), even if the cluster state was successfully updated to reflect the newly created index (that is to say, `acknowledged` is `true`).
 *
 * You can change the default of only waiting for the primary shards to start through the index setting `index.write.wait_for_active_shards`.
 * Note that changing this setting will also affect the `wait_for_active_shards` value on all subsequent write operations.


 * @doc_id indices-create-index
 * @rest_spec_name indices.create
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=public
 * @index_privileges create_index, manage
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/{index}'
      methods: ['PUT']
    }
  ]
  path_parts: {
    /**
     * Name of the index you wish to create.
     */
    index: IndexName
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
     The number of shard copies that must be active before proceeding with the operation.
     * Set to `all` or any positive integer up to the total number of shards in the index (`number_of_replicas+1`).
     * @server_default 1
     */
    wait_for_active_shards?: WaitForActiveShards
  }
  body?: {
    /**
     * Aliases for the index.
     */
    aliases?: Dictionary<Name, Alias>
    /**
     * Mapping for fields in the index. If specified, this mapping can include:
     * - Field names
     * - Field data types
     * - Mapping parameters
     * @doc_id mapping
     */
    mappings?: TypeMapping
    /**
     * Configuration options for the index.
     */
    settings?: IndexSettings
  }
}
