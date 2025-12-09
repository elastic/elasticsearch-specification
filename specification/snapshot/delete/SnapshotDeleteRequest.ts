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
 * Delete snapshots.
 * @rest_spec_name snapshot.delete
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges manage
 * @doc_id snapshot-delete
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_snapshot/{repository}/{snapshot}'
      methods: ['DELETE']
    }
  ]
  path_parts: {
    /**
     * The name of the repository to delete a snapshot from.
     */
    repository: Name
    /**
     * A comma-separated list of snapshot names to delete.
     * It also accepts wildcards (`*`).
     */
    snapshot: Name
  }
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * The period to wait for the master node.
     * If the master node is not available before the timeout expires, the request fails and returns an error.
     * To indicate that the request should never timeout, set it to `-1`.
     * @server_default 30s
     */
    master_timeout?: Duration
    /**
     * If `true`, the request returns a response when the matching snapshots are all deleted.
     * If `false`, the request returns a response as soon as the deletes are scheduled.
     * @server_default true
     */
    wait_for_completion?: boolean
  }
}
