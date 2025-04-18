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
 * Get policy information.
 * Get snapshot lifecycle policy definitions and information about the latest snapshot attempts.
 * @rest_spec_name slm.get_lifecycle
 * @availability stack since=7.4.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges manage_slm
 * @doc_id slm-api-get-policy
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_slm/policy/{policy_id}'
      methods: ['GET']
    },
    {
      path: '/_slm/policy'
      methods: ['GET']
    }
  ]
  path_parts: {
    /*
    A comma-separate list of snapshot lifecycle policy identifiers.
    */
    policy_id?: Names
  }
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
