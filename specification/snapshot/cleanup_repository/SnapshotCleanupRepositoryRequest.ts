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

/**
 * Clean up the snapshot repository.
 * Trigger the review of the contents of a snapshot repository and delete any stale data not referenced by existing snapshots.
 * @rest_spec_name snapshot.cleanup_repository
 * @availability stack since=7.4.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges manage
 * @doc_id snapshot-repo-cleanup
 * @ext_doc_id clean-up-snapshot-repo
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_snapshot/{repository}/_cleanup'
      methods: ['POST']
    }
  ]
  path_parts: {
    /**
     * Snapshot repository to clean up.
     * @codegen_name name */
    repository: Name
  }
  query_parameters: {
    /**
     * Period to wait for a connection to the master node.
     * @server_default 30s
     */
    master_timeout?: Duration
    /**
     * Period to wait for a response.
     * @server_default 30s
     */
    timeout?: Duration
  }
}
