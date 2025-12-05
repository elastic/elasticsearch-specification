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
import { Indices, MediaType } from '@_types/common'
import { Duration } from '@_types/Time'

/**
 * Get follower stats.
 *
 * Get cross-cluster replication follower stats.
 * The API returns shard-level stats about the "following tasks" associated with each shard for the specified indices.
 * @rest_spec_name ccr.follow_stats
 * @availability stack since=6.5.0 stability=stable
 * @cluster_privileges monitor
 * @doc_id ccr-get-follow-stats
 * @ext_doc_id ccr
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/{index}/_ccr/stats'
      methods: ['GET']
    }
  ]
  path_parts: {
    /** A comma-delimited list of index patterns. */
    index: Indices
  }
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * The period to wait for a response.
     * If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    timeout?: Duration
  }
}
