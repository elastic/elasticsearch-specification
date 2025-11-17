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
import { Name } from '@_types/common'
import { Duration } from '@_types/Time'
import { Repository } from '@snapshot/_types/SnapshotRepository'

/**
 * Create or update a snapshot repository.
 *
 * IMPORTANT: If you are migrating searchable snapshots, the repository name must be identical in the source and destination clusters.
 * To register a snapshot repository, the cluster's global metadata must be writeable.
 * Ensure there are no cluster blocks (for example, `cluster.blocks.read_only` and `clsuter.blocks.read_only_allow_delete` settings) that prevent write access.
 *
 * Several options for this API can be specified using a query parameter or a request body parameter.
 * If both parameters are specified, only the query parameter is used.
 * @rest_spec_name snapshot.create_repository
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges manage
 * @doc_id snapshot-repo-create
 * @ext_doc_id register-repository
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_snapshot/{repository}'
      methods: ['PUT', 'POST']
    }
  ]
  path_parts: {
    /**
     * The name of the snapshot repository to register or update.
     * @codegen_name name
     */
    repository: Name
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
    /**
     * If `true`, the request verifies the repository is functional on all master and data nodes in the cluster.
     * If `false`, this verification is skipped.
     * You can also perform this verification with the verify snapshot repository API.
     * @server_default true
     */
    verify?: boolean
  }
  /** @codegen_name repository */
  body: Repository
}
