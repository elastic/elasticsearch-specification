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
import { IndexAlias, IndexName, WaitForActiveShards } from '@_types/common'
import { TypeMapping } from '@_types/mapping/TypeMapping'
import { Duration } from '@_types/Time'
import { RolloverConditions } from './types'

/**
 * Roll over to a new index.
 * Creates a new index for a data stream or index alias.
 * @doc_id indices-rollover-index
 * @rest_spec_name indices.rollover
 * @availability stack since=5.0.0 stability=stable
 * @availability serverless stability=stable visibility=public
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * Name of the data stream or index alias to roll over.
     */
    alias: IndexAlias
    /**
     * Name of the index to create.
     * Supports date math.
     * Data streams do not support this parameter.
     */
    new_index?: IndexName
  }
  query_parameters: {
    /**
     * If `true`, checks whether the current index satisfies the specified conditions but does not perform a rollover.
     * @server_default false
     */
    dry_run?: boolean
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
     * Set to all or any positive integer up to the total number of shards in the index (`number_of_replicas+1`).
     * @server_default 1
     */
    wait_for_active_shards?: WaitForActiveShards
  }
  body: {
    /**
     * Aliases for the target index.
     * Data streams do not support this parameter.
     */
    aliases?: Dictionary<IndexName, Alias>
    /**
     * Conditions for the rollover.
     * If specified, Elasticsearch only performs the rollover if the current index satisfies these conditions.
     * If this parameter is not specified, Elasticsearch performs the rollover unconditionally.
     * If conditions are specified, at least one of them must be a `max_*` condition.
     * The index will rollover if any `max_*` condition is satisfied and all `min_*` conditions are satisfied.
     */
    conditions?: RolloverConditions
    /**
     * Mapping for fields in the index.
     * If specified, this mapping can include field names, field data types, and mapping paramaters.
     */
    mappings?: TypeMapping
    /**
     * Configuration options for the index.
     * Data streams do not support this parameter.
     */
    settings?: Dictionary<string, UserDefinedValue>
  }
}
