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
import { Names } from '@_types/common'
import { Duration } from '@_types/Time'

/**
 * Delete snapshot repositories.
 *
 * When a repository is unregistered, Elasticsearch removes only the reference to the location where the repository is storing the snapshots.
 * The snapshots themselves are left untouched and in place.
 * @rest_spec_name snapshot.delete_repository
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges manage
 * @doc_id snapshot-repo-delete
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_snapshot/{repository}'
      methods: ['DELETE']
    }
  ]
  path_parts: {
    /**
     * The ame of the snapshot repositories to unregister.
     * Wildcard (`*`) patterns are supported.
     * @codegen_name name */
    repository: Names
  }
  query_parameters: {
    /**
     * The period to wait for the master node.
     * If the master node is not available before the timeout expires, the request fails and returns an error.
     * To indicate that the request should never timeout, set it to `-1`.
     * @server_default 30s
     */
    master_timeout?: Duration
    /**
     * The period to wait for a response from all relevant nodes in the cluster after updating the cluster metadata.
     * If no response is received before the timeout expires, the cluster metadata update still applies but the response will indicate that it was not completely acknowledged.
     * To indicate that the request should never timeout, set it to `-1`.
     * @server_default 30s
     */
    timeout?: Duration
  }
}
