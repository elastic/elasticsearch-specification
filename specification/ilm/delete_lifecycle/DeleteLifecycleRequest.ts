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
 * Delete a lifecycle policy.
 *
 * You cannot delete policies that are currently in use. If the policy is being used to manage any indices, the request fails and returns an error.
 * @rest_spec_name ilm.delete_lifecycle
 * @category management
 * @availability stack since=6.6.0 stability=stable
 * @cluster_privileges manage_ilm
 * @doc_id ilm-delete-lifecycle
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_ilm/policy/{policy}'
      methods: ['DELETE']
    }
  ]
  path_parts: {
    /**
     * Identifier for the policy.
     * @codegen_name name
     */
    policy: Name
  }
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    master_timeout?: Duration
    /**
     * Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    timeout?: Duration
  }
}
