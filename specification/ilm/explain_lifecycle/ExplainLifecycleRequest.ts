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
import { IndexName, MediaType } from '@_types/common'
import { Duration } from '@_types/Time'

/**
 * Explain the lifecycle state.
 *
 * Get the current lifecycle status for one or more indices.
 * For data streams, the API retrieves the current lifecycle status for the stream's backing indices.
 *
 * The response indicates when the index entered each lifecycle state, provides the definition of the running phase, and information about any failures.
 * @rest_spec_name ilm.explain_lifecycle
 * @availability stack since=6.6.0 stability=stable
 * @index_privileges view_index_metadata,manage_ilm
 * @doc_id ilm-explain-lifecycle
 * @ext_doc_id explain-lifecycle-state
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/{index}/_ilm/explain'
      methods: ['GET']
    }
  ]
  path_parts: {
    /**
     * Comma-separated list of data streams, indices, and aliases to target. Supports wildcards (`*`).
     * To target all data streams and indices, use `*` or `_all`.
     */
    index: IndexName
  }
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * Filters the returned indices to only indices that are managed by ILM and are in an error state, either due to an encountering an error while executing the policy, or attempting to use a policy that does not exist.
     */
    only_errors?: boolean
    /**
     * Filters the returned indices to only indices that are managed by ILM.
     */
    only_managed?: boolean
    /**
     * Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    master_timeout?: Duration
  }
}
