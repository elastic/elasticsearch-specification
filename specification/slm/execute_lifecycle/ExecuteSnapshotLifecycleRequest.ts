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
 * Run a policy.
 *
 * Immediately create a snapshot according to the snapshot lifecycle policy without waiting for the scheduled time.
 * The snapshot policy is normally applied according to its schedule, but you might want to manually run a policy before performing an upgrade or other maintenance.
 * @rest_spec_name slm.execute_lifecycle
 * @availability stack since=7.4.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges manage_slm
 * @doc_id slm-api-execute-lifecycle
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_slm/policy/{policy_id}/_execute'
      methods: ['PUT']
    }
  ]
  path_parts: {
    /** The id of the snapshot lifecycle policy to be executed */
    policy_id: Name
  }
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * The period to wait for a connection to the master node.
     * If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    master_timeout?: Duration
    /**
     * The period to wait for a response.
     * If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    timeout?: Duration
  }
}
