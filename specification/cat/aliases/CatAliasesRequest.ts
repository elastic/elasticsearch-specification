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

import { ExpandWildcards, Names } from '@_types/common'
import { Duration } from '@_types/Time'
import { CatAliasesColumns, CatRequestBase } from '@cat/_types/CatBase'

/**
 * Get aliases.
 *
 * Get the cluster's index aliases, including filter and routing information.
 * This API does not return data stream aliases.
 *
 * IMPORTANT: CAT APIs are only intended for human consumption using the command line or the Kibana console. They are not intended for use by applications. For application consumption, use the aliases API.
 * @rest_spec_name cat.aliases
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=public
 * @doc_id cat-alias
 * @index_privileges view_index_metadata
 */
export interface Request extends CatRequestBase {
  urls: [
    {
      path: '/_cat/aliases'
      methods: ['GET']
    },
    {
      path: '/_cat/aliases/{name}'
      methods: ['GET']
    }
  ]
  path_parts: {
    /** A comma-separated list of aliases to retrieve. Supports wildcards (`*`).  To retrieve all aliases, omit this parameter or use `*` or `_all`. */
    name?: Names
  }
  query_parameters: {
    /**
     * A comma-separated list of columns names to display. It supports simple wildcards.
     */
    h?: CatAliasesColumns
    /**
     * List of columns that determine how the table should be sorted.
     * Sorting defaults to ascending and can be changed by setting `:asc`
     * or `:desc` as a suffix to the column name.
     */
    s?: Names
    /**
     * The type of index that wildcard patterns can match.
     * If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams.
     * It supports comma-separated values, such as `open,hidden`.
     * @server_default all
     */
    expand_wildcards?: ExpandWildcards
    /**
     * The period to wait for a connection to the master node.
     * If the master node is not available before the timeout expires, the request fails and returns an error.
     * To indicated that the request should never timeout, you can set it to `-1`.
     * @server_default 30s
     */
    master_timeout?: Duration
  }
}
