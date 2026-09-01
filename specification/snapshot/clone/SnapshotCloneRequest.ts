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
 * Clone a snapshot.
 *
 * Clone part of all of a snapshot into another snapshot in the same repository.
 * @rest_spec_name snapshot.clone
 * @availability stack since=7.10.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges manage
 * @doc_id snapshot-clone
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_snapshot/{repository}/{snapshot}/_clone/{target_snapshot}'
      methods: ['PUT']
    }
  ]
  path_parts: {
    /**
     * The name of the snapshot repository that both source and target snapshot belong to.
     */
    repository: Name
    /**
     * The source snapshot name.
     */
    snapshot: Name
    /**
     * The target snapshot name.
     */
    target_snapshot: Name
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
  }
  body: {
    /**
     * A comma-separated list of indices to include in the snapshot.
     * Multi-target syntax is supported.
     */
    indices: string
  }
}
