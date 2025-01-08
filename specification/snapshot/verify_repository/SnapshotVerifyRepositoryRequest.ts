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
 * Verify a snapshot repository.
 * Check for common misconfigurations in a snapshot repository.
 * @rest_spec_name snapshot.verify_repository
 * @availability stack since=0.0.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges manage
 * @doc_id snapshot-repo-verify
 * @ext_doc_id verify-repository
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_snapshot/{repository}/_verify'
      methods: ['POST']
    }
  ]
  path_parts: {
    /**
     * The name of the snapshot repository to verify.
     * @codegen_name name */
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
  }
}
