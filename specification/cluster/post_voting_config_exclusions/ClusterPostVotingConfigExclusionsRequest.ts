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
import { Ids, Names } from '@_types/common'
import { TimeSpan } from '@_types/Time'

/**
 * @rest_spec_name cluster.post_voting_config_exclusions
 * @since 7.0.0
 * @stability stable
 * @doc_id voting-config-exclusions
 */
export interface Request extends RequestBase {
  query_parameters: {
    /**
     * A comma-separated list of the names of the nodes to exclude from the
     * voting configuration. If specified, you may not also specify node_ids.
     */
    node_names?: Names
    /**
     * A comma-separated list of the persistent ids of the nodes to exclude
     * from the voting configuration. If specified, you may not also specify node_names.
     */
    node_ids?: Ids
    /**
     * When adding a voting configuration exclusion, the API waits for the
     * specified nodes to be excluded from the voting configuration before
     * returning. If the timeout expires before the appropriate condition
     * is satisfied, the request fails and returns an error.
     * @server_default 30s
     */
    timeout?: TimeSpan
  }
}
