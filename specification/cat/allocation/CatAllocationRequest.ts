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

import { CatRequestBase } from '@cat/_types/CatBase'
import { Bytes, NodeIds } from '@_types/common'

/**
 * Provides a snapshot of the number of shards allocated to each data node and their disk space.
 * IMPORTANT: cat APIs are only intended for human consumption using the command line or Kibana console. They are not intended for use by applications.
 * @rest_spec_name cat.allocation
 * @since 0.0.0
 * @stability stable
 * @doc_id cat-allocation
 * @cluster_privileges monitor, manage
 */
export interface Request extends CatRequestBase {
  path_parts: {
    /** Comma-separated list of node identifiers or names used to limit the returned information. */
    node_id?: NodeIds
  }
  query_parameters: {
    /** The unit used to display byte values. */
    bytes?: Bytes
  }
}
