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
import { MediaType, Name } from '@_types/common'
import { Duration } from '@_types/Time'

/**
 * Pause an auto-follow pattern.
 *
 * Pause a cross-cluster replication auto-follow pattern.
 * When the API returns, the auto-follow pattern is inactive.
 * New indices that are created on the remote cluster and match the auto-follow patterns are ignored.
 *
 * You can resume auto-following with the resume auto-follow pattern API.
 * When it resumes, the auto-follow pattern is active again and automatically configures follower indices for newly created indices on the remote cluster that match its patterns.
 * Remote indices that were created while the pattern was paused will also be followed, unless they have been deleted or closed in the interim.
 * @rest_spec_name ccr.pause_auto_follow_pattern
 * @category management
 * @availability stack since=7.5.0 stability=stable
 * @cluster_privileges manage_ccr
 * @doc_id ccr-pause-auto-follow-pattern
 * @ext_doc_id ccr-auto-follow
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_ccr/auto_follow/{name}/pause'
      methods: ['POST']
    }
  ]
  path_parts: {
    /** The name of the auto-follow pattern to pause. */
    name: Name
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
