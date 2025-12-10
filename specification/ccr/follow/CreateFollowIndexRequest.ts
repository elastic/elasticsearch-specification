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
  IndexName,
  MediaType,
  WaitForActiveShards
} from '@_types/common'
import { integer, long } from '@_types/Numeric'
import { Duration } from '@_types/Time'
import { IndexSettings } from '@indices/_types/IndexSettings'

/**
 * Create a follower.
 * Create a cross-cluster replication follower index that follows a specific leader index.
 * When the API returns, the follower index exists and cross-cluster replication starts replicating operations from the leader index to the follower index.
 * @rest_spec_name ccr.follow
 * @availability stack since=6.5.0 stability=stable
 * @doc_id ccr-put-follow
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/{index}/_ccr/follow'
      methods: ['PUT']
    }
  ]
  path_parts: {
    /**
     * The name of the follower index.
     */
    index: IndexName
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * Period to wait for a connection to the master node.
     * @server_default 30s
     */
    master_timeout?: Duration
    /**
     * Specifies the number of shards to wait on being active before responding. This defaults to waiting on none of the shards to be
     * active.
     * A shard must be restored from the leader index before being active. Restoring a follower shard requires transferring all the
     * remote Lucene segment files to the follower index.
     * @server_default 0
     */
    wait_for_active_shards?: WaitForActiveShards
  }
  body: {
    /**
     * If the leader index is part of a data stream, the name to which the local data stream for the followed index should be renamed.
     */
    data_stream_name?: string
    /**
     * The name of the index in the leader cluster to follow.
     */
    leader_index: IndexName
    /**
     * The maximum number of outstanding reads requests from the remote cluster.
     */
    max_outstanding_read_requests?: long
    /**
     * The maximum number of outstanding write requests on the follower.
     */
    max_outstanding_write_requests?: integer
    /**
     * The maximum number of operations to pull per read from the remote cluster.
     */
    max_read_request_operation_count?: integer
    /**
     * The maximum size in bytes of per read of a batch of operations pulled from the remote cluster.
     */
    max_read_request_size?: ByteSize
    /**
     * The maximum time to wait before retrying an operation that failed exceptionally. An exponential backoff strategy is employed when
     * retrying.
     */
    max_retry_delay?: Duration
    /**
     * The maximum number of operations that can be queued for writing. When this limit is reached, reads from the remote cluster will be
     * deferred until the number of queued operations goes below the limit.
     */
    max_write_buffer_count?: integer
    /**
     * The maximum total bytes of operations that can be queued for writing. When this limit is reached, reads from the remote cluster will
     * be deferred until the total bytes of queued operations goes below the limit.
     */
    max_write_buffer_size?: ByteSize
    /**
     * The maximum number of operations per bulk write request executed on the follower.
     */
    max_write_request_operation_count?: integer
    /**
     * The maximum total bytes of operations per bulk write request executed on the follower.
     */
    max_write_request_size?: ByteSize
    /**
     * The maximum time to wait for new operations on the remote cluster when the follower index is synchronized with the leader index.
     * When the timeout has elapsed, the poll for operations will return to the follower so that it can update some statistics.
     * Then the follower will immediately attempt to read from the leader again.
     */
    read_poll_timeout?: Duration
    /**
     * The remote cluster containing the leader index.
     */
    remote_cluster: string
    /**
     * Settings to override from the leader index.
     */
    settings?: IndexSettings
  }
}
