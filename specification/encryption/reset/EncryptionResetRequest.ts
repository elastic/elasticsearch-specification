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
import { MediaType } from '@_types/common'

/**
 * Reset the project encryption key.
 *
 * Destroy the current project encryption key (PEK) and generate a new one.
 * This is the recovery path for when the on-disk encrypted PEK becomes permanently
 * inaccessible, for example because the key encryption material protecting it was lost.
 *
 * All data that was encrypted under the destroyed key becomes permanently unrecoverable.
 * Each feature that stores encrypted data decides how to handle its own data during the
 * reset: some features drop the encrypted values entirely, while others preserve the rest
 * of the affected data and only clear the values that can no longer be decrypted.
 *
 * Because this operation causes permanent data loss, it requires the `accept_data_loss`
 * query parameter to be set to `true`.
 * @rest_spec_name encryption.reset
 * @availability stack since=9.5.0 stability=experimental
 * @availability serverless stability=experimental visibility=private
 * @doc_id encryption-reset
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_encryption/_reset'
      methods: ['POST']
    }
  ]
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * Acknowledge that resetting the project encryption key permanently destroys all data
     * that was encrypted under the current key.
     * The request fails if this is not set to `true`.
     */
    accept_data_loss: boolean
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
