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
import { Names } from '@_types/common'

/**
 * Returns information about the snapshots stored in one or more repositories.
 * A snapshot is a backup of an index or running Elasticsearch cluster.
 * IMPORTANT: cat APIs are only intended for human consumption using the command line or Kibana console. They are not intended for use by applications. For application consumption, use the get snapshot API.
 * @rest_spec_name cat.snapshots
 * @availability stack since=2.1.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @doc_id cat-snapshots
 * @cluster_privileges monitor_snapshot
 */
export interface Request extends CatRequestBase {
  path_parts: {
    /**
     * A comma-separated list of snapshot repositories used to limit the request.
     * Accepts wildcard expressions.
     * `_all` returns all repositories.
     * If any repository fails during the request, Elasticsearch returns an error.
     */
    repository?: Names
  }
  query_parameters: {
    /**
     * If `true`, the response does not include information from unavailable snapshots.
     * @server_default false
     */
    ignore_unavailable?: boolean
  }
}
