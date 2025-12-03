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
 * Clear cluster voting config exclusions.
 *
 * Remove master-eligible nodes from the voting configuration exclusion list.
 * @rest_spec_name cluster.delete_voting_config_exclusions
 * @availability stack since=7.0.0 stability=stable
 * @doc_id voting-config-exclusions
 * @ext_doc_id add-nodes
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_cluster/voting_config_exclusions'
      methods: ['DELETE']
    }
  ]
  query_parameters: {
    /**
     * Period to wait for a connection to the master node.
     * @server_default 30s
     */
    master_timeout?: Duration
    /**
     * Specifies whether to wait for all excluded nodes to be removed from the
     * cluster before clearing the voting configuration exclusions list.
     * Defaults to true, meaning that all excluded nodes must be removed from
     * the cluster before this API takes any action. If set to false then the
     * voting configuration exclusions list is cleared even if some excluded
     * nodes are still in the cluster.
     * @server_default true
     */
    wait_for_removal?: boolean
  }
}
