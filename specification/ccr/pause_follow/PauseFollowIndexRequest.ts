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
import { IndexName, MediaType } from '@_types/common'
import { Duration } from '@_types/Time'

/**
 * Pause a follower.
 *
 * Pause a cross-cluster replication follower index.
 * The follower index will not fetch any additional operations from the leader index.
 * You can resume following with the resume follower API.
 * You can pause and resume a follower index to change the configuration of the following task.
 * @rest_spec_name ccr.pause_follow
 * @availability stack since=6.5.0 stability=stable
 * @cluster_privileges manage_ccr
 * @doc_id ccr-post-pause-follow
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/{index}/_ccr/pause_follow'
      methods: ['POST']
    }
  ]
  path_parts: {
    /** The name of the follower index. */
    index: IndexName
  }
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * The period to wait for a connection to the master node.
     * If the master node is not available before the timeout expires, the request fails and returns an error.
     * It can also be set to `-1` to indicate that the request should never timeout.
     * @server_default 30s
     */
    master_timeout?: Duration
  }
}
