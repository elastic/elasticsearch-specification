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
import { Duration } from '@_types/Time'

/**
 * Run a retention policy.
 *
 * Manually apply the retention policy to force immediate removal of snapshots that are expired according to the snapshot lifecycle policy retention rules.
 * The retention policy is normally applied according to its schedule.
 * @rest_spec_name slm.execute_retention
 * @availability stack since=7.5.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges manage_slm
 * @doc_id slm-api-execute-retention
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_slm/_execute_retention'
      methods: ['POST']
    }
  ]
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
