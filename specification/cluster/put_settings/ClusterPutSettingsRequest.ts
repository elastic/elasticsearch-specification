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
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

/**
 * Update the cluster settings.
 * Configure and update dynamic settings on a running cluster.
 * You can also configure dynamic settings locally on an unstarted or shut down node in `elasticsearch.yml`.
 *
 * Updates made with this API can be persistent, which apply across cluster restarts, or transient, which reset after a cluster restart.
 * You can also reset transient or persistent settings by assigning them a null value.
 *
 * If you configure the same setting using multiple methods, Elasticsearch applies the settings in following order of precedence: 1) Transient setting; 2) Persistent setting; 3) `elasticsearch.yml` setting; 4) Default setting value.
 * For example, you can apply a transient setting to override a persistent setting or `elasticsearch.yml` setting.
 * However, a change to an `elasticsearch.yml` setting will not override a defined transient or persistent setting.
 *
 * TIP: In Elastic Cloud, use the user settings feature to configure all cluster settings. This method automatically rejects unsafe settings that could break your cluster.
 * If you run Elasticsearch on your own hardware, use this API to configure dynamic cluster settings.
 * Only use `elasticsearch.yml` for static cluster settings and node settings.
 * The API doesn’t require a restart and ensures a setting’s value is the same on all nodes.
 *
 * WARNING: Transient cluster settings are no longer recommended. Use persistent cluster settings instead.
 * If a cluster becomes unstable, transient settings can clear unexpectedly, resulting in a potentially undesired cluster configuration.
 * @rest_spec_name cluster.put_settings
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=private
 * @doc_id cluster-update-settings
 * @ext_doc_id es-settings
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_cluster/settings'
      methods: ['PUT']
    }
  ]
  query_parameters: {
    flat_settings?: boolean
    /** @server_default 30s */
    master_timeout?: Duration
    /** @server_default 30s */
    timeout?: Duration
  }
  body: {
    /** The settings that persist after the cluster restarts. */
    persistent?: Dictionary<string, UserDefinedValue>
    /** The settings that do not persist after the cluster restarts. */
    transient?: Dictionary<string, UserDefinedValue>
  }
}
