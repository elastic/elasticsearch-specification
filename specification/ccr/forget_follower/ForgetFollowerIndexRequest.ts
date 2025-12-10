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
import { IndexName, MediaType, Uuid } from '@_types/common'
import { Duration } from '@_types/Time'

/**
 * Forget a follower.
 * Remove the cross-cluster replication follower retention leases from the leader.
 *
 * A following index takes out retention leases on its leader index.
 * These leases are used to increase the likelihood that the shards of the leader index retain the history of operations that the shards of the following index need to run replication.
 * When a follower index is converted to a regular index by the unfollow API (either by directly calling the API or by index lifecycle management tasks), these leases are removed.
 * However, removal of the leases can fail, for example when the remote cluster containing the leader index is unavailable.
 * While the leases will eventually expire on their own, their extended existence can cause the leader index to hold more history than necessary and prevent index lifecycle management from performing some operations on the leader index.
 * This API exists to enable manually removing the leases when the unfollow API is unable to do so.
 *
 * NOTE: This API does not stop replication by a following index. If you use this API with a follower index that is still actively following, the following index will add back retention leases on the leader.
 * The only purpose of this API is to handle the case of failure to remove the following retention leases after the unfollow API is invoked.
 * @rest_spec_name ccr.forget_follower
 * @availability stack since=6.7.0 stability=stable
 * @doc_id ccr-post-forget-follower
 * @ext_doc_id ccr
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/{index}/_ccr/forget_follower'
      methods: ['POST']
    }
  ]
  path_parts: {
    /** Name of the leader index for which specified follower retention leases should be removed */
    index: IndexName
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    timeout?: Duration
  }
  body: {
    follower_cluster?: string
    follower_index?: IndexName
    follower_index_uuid?: Uuid
    leader_remote_cluster?: string
  }
}
