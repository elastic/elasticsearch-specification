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
 * Get Watcher index settings.
 * Get settings for the Watcher internal index (`.watches`).
 * Only a subset of settings are shown, for example `index.auto_expand_replicas` and `index.number_of_replicas`.
 * @rest_spec_name watcher.get_settings
 * @availability stack stability=stable visibility=public
 * @doc_id watcher-api-get-settings
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_watcher/settings'
      methods: ['GET']
    }
  ]
  query_parameters: {
    /**
     * The period to wait for a connection to the master node.
     * If no response is received before the timeout expires, the request fails and returns an error.
     */
    master_timeout?: Duration
  }
}
