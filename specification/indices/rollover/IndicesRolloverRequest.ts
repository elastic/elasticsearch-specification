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
import {
  IndexAlias,
  IndexName,
  MediaType,
  WaitForActiveShards
} from '@_types/common'
import { TypeMapping } from '@_types/mapping/TypeMapping'
import { Duration } from '@_types/Time'
import { Alias } from '@indices/_types/Alias'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { RolloverConditions } from './types'

/**
 * Roll over to a new index.
 * TIP: We recommend using the index lifecycle rollover action to automate rollovers. However, Serverless does not support Index Lifecycle Management (ILM), so don't use this approach in the Serverless context.
 *
 * The rollover API creates a new index for a data stream or index alias.
 * The API behavior depends on the rollover target.
 *
 * **Roll over a data stream**
 *
 * If you roll over a data stream, the API creates a new write index for the stream.
 * The stream's previous write index becomes a regular backing index.
 * A rollover also increments the data stream's generation.
 *
 * **Roll over an index alias with a write index**
 *
 * TIP: Prior to Elasticsearch 7.9, you'd typically use an index alias with a write index to manage time series data.
 * Data streams replace this functionality, require less maintenance, and automatically integrate with data tiers.
 *
 * If an index alias points to multiple indices, one of the indices must be a write index.
 * The rollover API creates a new write index for the alias with `is_write_index` set to `true`.
 * The API also `sets is_write_index` to `false` for the previous write index.
 *
 * **Roll over an index alias with one index**
 *
 * If you roll over an index alias that points to only one index, the API creates a new index for the alias and removes the original index from the alias.
 *
 * NOTE: A rollover creates a new index and is subject to the `wait_for_active_shards` setting.
 *
 * **Increment index names for an alias**
 *
 * When you roll over an index alias, you can specify a name for the new index.
 * If you don't specify a name and the current index ends with `-` and a number, such as `my-index-000001` or `my-index-3`, the new index name increments that number.
 * For example, if you roll over an alias with a current index of `my-index-000001`, the rollover creates a new index named `my-index-000002`.
 * This number is always six characters and zero-padded, regardless of the previous index's name.
 *
 * If you use an index alias for time series data, you can use date math in the index name to track the rollover date.
 * For example, you can create an alias that points to an index named `<my-index-{now/d}-000001>`.
 * If you create the index on May 6, 2099, the index's name is `my-index-2099.05.06-000001`.
 * If you roll over the alias on May 7, 2099, the new index's name is `my-index-2099.05.07-000002`.
 * @doc_id indices-rollover-index
 * @rest_spec_name indices.rollover
 * @availability stack since=5.0.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @index_privileges manage
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/{alias}/_rollover'
      methods: ['POST']
    },
    {
      path: '/{alias}/_rollover/{new_index}'
      methods: ['POST']
    }
  ]
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
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
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
    /**
     * If set to true, the rollover action will only mark a data stream to signal that it needs to be rolled over at the next write.
     * Only allowed on data streams.
     * @server_default false
     */
    lazy?: boolean
  }
  body?: {
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
