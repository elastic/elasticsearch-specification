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
import { IndexName, MediaType, Name } from '@_types/common'
import { Duration } from '@_types/Time'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

/**
 * Mount a snapshot.
 * Mount a snapshot as a searchable snapshot index.
 * Do not use this API for snapshots managed by index lifecycle management (ILM).
 * Manually mounting ILM-managed snapshots can interfere with ILM processes.
 * @rest_spec_name searchable_snapshots.mount
 * @availability stack since=7.10.0 stability=stable
 * @cluster_privileges manage
 * @index_privileges manage
 * @doc_id searchable-snapshots-api-mount-snapshot
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_snapshot/{repository}/{snapshot}/_mount'
      methods: ['POST']
    }
  ]
  path_parts: {
    /**
     * The name of the repository containing the snapshot of the index to mount.
     */
    repository: Name
    /**
     * The name of the snapshot of the index to mount.
     */
    snapshot: Name
  }
  request_media_type: MediaType.Json
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
     * If true, the request blocks until the operation is complete.
     * @server_default false
     */
    wait_for_completion?: boolean
    /**
     * The mount option for the searchable snapshot index.
     * @server_default full_copy
     */
    storage?: string
  }
  body: {
    /**
     * The name of the index contained in the snapshot whose data is to be mounted.
     * If no `renamed_index` is specified, this name will also be used to create the new index.
     */
    index: IndexName
    /**
     * The name of the index that will be created.
     */
    renamed_index?: IndexName
    /**
     * The settings that should be added to the index when it is mounted.
     */
    index_settings?: Dictionary<string, UserDefinedValue>
    /**
     * The names of settings that should be removed from the index when it is mounted.
     */
    ignore_index_settings?: string[]
  }
}
