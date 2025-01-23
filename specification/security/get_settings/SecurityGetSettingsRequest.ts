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
 * Get security index settings.
 *
 * Get the user-configurable settings for the security internal index (`.security` and associated indices).
 * Only a subset of the index settings — those that are user-configurable—will be shown.
 * This includes:
 *
 * * `index.auto_expand_replicas`
 * * `index.number_of_replicas`
 * @rest_spec_name security.get_settings
 * @availability stack stability=stable visibility=public
 * @doc_id security-api-get-settings
 * @cluster_privileges read_security
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_security/settings'
      methods: ['GET']
    }
  ]
  query_parameters: {
    /**
     * Period to wait for a connection to the master node.
     * If no response is received before the timeout expires, the request fails and returns an error.
     */
    master_timeout?: Duration
  }
}
