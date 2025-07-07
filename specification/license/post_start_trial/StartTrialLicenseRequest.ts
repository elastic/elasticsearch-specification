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
 * Start a trial.
 * Start a 30-day trial, which gives access to all subscription features.
 *
 * NOTE: You are allowed to start a trial only if your cluster has not already activated a trial for the current major product version.
 * For example, if you have already activated a trial for v8.0, you cannot start a new trial until v9.0. You can, however, request an extended trial at https://www.elastic.co/trialextension.
 *
 * To check the status of your trial, use the get trial status API.
 * @rest_spec_name license.post_start_trial
 * @availability stack since=6.1.0 stability=stable
 * @cluster_privileges manage
 * @doc_id start-trial
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_license/start_trial'
      methods: ['POST']
    }
  ]
  query_parameters: {
    acknowledge?: boolean
    type?: string
    /**
     * Period to wait for a connection to the master node.
     * @server_default 30s
     */
    master_timeout?: Duration
  }
}
