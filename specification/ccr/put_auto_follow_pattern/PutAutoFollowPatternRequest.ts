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
  ByteSize,
  IndexPattern,
  IndexPatterns,
  MediaType,
  Name
} from '@_types/common'
import { integer } from '@_types/Numeric'
import { Duration } from '@_types/Time'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

/**
 * Create or update auto-follow patterns.
 * Create a collection of cross-cluster replication auto-follow patterns for a remote cluster.
 * Newly created indices on the remote cluster that match any of the patterns are automatically configured as follower indices.
 * Indices on the remote cluster that were created before the auto-follow pattern was created will not be auto-followed even if they match the pattern.
 *
 * This API can also be used to update auto-follow patterns.
 * NOTE: Follower indices that were configured automatically before updating an auto-follow pattern will remain unchanged even if they do not match against the new patterns.
 * @rest_spec_name ccr.put_auto_follow_pattern
 * @availability stack since=6.5.0 stability=stable
 * @doc_id ccr-put-auto-follow-pattern
 * @ext_doc_id ccr-auto-follow
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_ccr/auto_follow/{name}'
      methods: ['PUT']
    }
  ]
  path_parts: {
    /**
     * The name of the collection of auto-follow patterns.
     */
    name: Name
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * Period to wait for a connection to the master node.
     * @server_default 30s
     */
    master_timeout?: Duration
  }
  body: {
    /**
     * The remote cluster containing the leader indices to match against.
     * @doc_id modules-remote-clusters
     */
    remote_cluster: string
    /**
     * The name of follower index. The template {{leader_index}} can be used to derive the name of the follower index from the name of the leader index. When following a data stream, use {{leader_index}}; CCR does not support changes to the names of a follower data stream’s backing indices.
     */
    follow_index_pattern?: IndexPattern
    /**
     * An array of simple index patterns to match against indices in the remote cluster specified by the remote_cluster field.
     */
    leader_index_patterns?: IndexPatterns
    /**
     * An array of simple index patterns that can be used to exclude indices from being auto-followed. Indices in the remote cluster whose names are matching one or more leader_index_patterns and one or more leader_index_exclusion_patterns won’t be followed.
     */
    leader_index_exclusion_patterns?: IndexPatterns
    /**
     * The maximum number of outstanding reads requests from the remote cluster.
     * @server_default 12
     */
    max_outstanding_read_requests?: integer
    /**
     * Settings to override from the leader index. Note that certain settings can not be overrode (e.g., index.number_of_shards).
     */
    settings?: Dictionary<string, UserDefinedValue>
    /**
     * The maximum number of outstanding reads requests from the remote cluster.
     * @server_default 9
     */
    max_outstanding_write_requests?: integer
    /**
     * The maximum time to wait for new operations on the remote cluster when the follower index is synchronized with the leader index. When the timeout has elapsed, the poll for operations will return to the follower so that it can update some statistics. Then the follower will immediately attempt to read from the leader again.
     * @server_default 1m
     */
    read_poll_timeout?: Duration
    /**
     * The maximum number of operations to pull per read from the remote cluster.
     * @server_default 5120
     */
    max_read_request_operation_count?: integer
    /**
     * The maximum size in bytes of per read of a batch of operations pulled from the remote cluster.
     * @server_default 32mb
     */
    max_read_request_size?: ByteSize
    /**
     * The maximum time to wait before retrying an operation that failed exceptionally. An exponential backoff strategy is employed when retrying.
     * @server_default 500ms
     */
    max_retry_delay?: Duration
    /**
     * The maximum number of operations that can be queued for writing. When this limit is reached, reads from the remote cluster will be deferred until the number of queued operations goes below the limit.
     * @server_default 2147483647
     */
    max_write_buffer_count?: integer
    /**
     * The maximum total bytes of operations that can be queued for writing. When this limit is reached, reads from the remote cluster will be deferred until the total bytes of queued operations goes below the limit.
     * @server_default 512mb
     */
    max_write_buffer_size?: ByteSize
    /**
     * The maximum number of operations per bulk write request executed on the follower.
     * @server_default 5120
     */
    max_write_request_operation_count?: integer
    /**
     * The maximum total bytes of operations per bulk write request executed on the follower.
     * @server_default 9223372036854775807b
     */
    max_write_request_size?: ByteSize
  }
}
