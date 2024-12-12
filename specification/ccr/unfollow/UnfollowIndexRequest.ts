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
import { IndexName } from '@_types/common'
import { Duration } from '@_types/Time'

/**
 * Unfollow an index.
 * Convert a cross-cluster replication follower index to a regular index.
 * The API stops the following task associated with a follower index and removes index metadata and settings associated with cross-cluster replication.
 * The follower index must be paused and closed before you call the unfollow API.
 *
 * NOTE: Currently cross-cluster replication does not support converting an existing regular index to a follower index. Converting a follower index to a regular index is an irreversible operation.
 * @rest_spec_name ccr.unfollow
 * @availability stack since=6.5.0 stability=stable
 * @doc_id ccr-post-unfollow
 * @ext_doc_id ccr
 */
export interface Request extends RequestBase {
  path_parts: {
    index: IndexName
  }
  query_parameters: {
    /**
     * Period to wait for a connection to the master node.
     * @server_default 30s
     */
    master_timeout?: Duration
  }
}
