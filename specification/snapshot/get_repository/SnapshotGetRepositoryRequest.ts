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
import { MediaType, Names } from '@_types/common'
import { Duration } from '@_types/Time'

/**
 * Get snapshot repository information.
 * @rest_spec_name snapshot.get_repository
 * @availability stack since=0.0.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges monitor_snapshot
 * @doc_id snapshot-repo-get
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_snapshot'
      methods: ['GET']
    },
    {
      path: '/_snapshot/{repository}'
      methods: ['GET']
    }
  ]
  path_parts: {
    /**
     * A comma-separated list of snapshot repository names used to limit the request.
     * Wildcard (`*`) expressions are supported including combining wildcards with exclude patterns starting with `-`.
     *
     * To get information about all snapshot repositories registered in the cluster, omit this parameter or use `*` or `_all`.
     * @codegen_name name
     */
    repository?: Names
  }
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * If `true`, the request gets information from the local node only.
     * If `false`, the request gets information from the master node.
     * @server_default false
     */
    local?: boolean
    /**
     * The period to wait for the master node.
     * If the master node is not available before the timeout expires, the request fails and returns an error.
     * To indicate that the request should never timeout, set it to `-1`.
     * @server_default 30s
     */
    master_timeout?: Duration
  }
}
