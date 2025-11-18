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
import { integer } from '@_types/Numeric'
import { Duration } from '@_types/Time'

/**
 * Update Watcher index settings.
 *
 * Update settings for the Watcher internal index (`.watches`).
 * Only a subset of settings can be modified.
 * This includes `index.auto_expand_replicas`, `index.number_of_replicas`, `index.routing.allocation.exclude.*`,
 * `index.routing.allocation.include.*` and `index.routing.allocation.require.*`.
 * Modification of `index.routing.allocation.include._tier_preference` is an exception and is not allowed as the
 * Watcher shards must always be in the `data_content` tier.
 * @rest_spec_name watcher.update_settings
 * @availability stack stability=stable visibility=public
 * @cluster_privileges manage_watcher
 * @doc_id watcher-api-update-settings
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_watcher/settings'
      methods: ['PUT']
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
     */
    timeout?: Duration
  }
  /** @codegen_name watcher_index_settings */
  body: {
    'index.auto_expand_replicas'?: string
    'index.number_of_replicas'?: integer
  }
}
