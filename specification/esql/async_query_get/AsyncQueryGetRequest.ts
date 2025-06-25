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
import { Id } from '@_types/common'
import { Duration } from '@_types/Time'
import { EsqlFormat } from '@esql/query/QueryParameters'

/**
 * Get async ES|QL query results.
 * Get the current status and available results or stored results for an ES|QL asynchronous query.
 * If the Elasticsearch security features are enabled, only the user who first submitted the ES|QL query can retrieve the results using this API.
 * @rest_spec_name esql.async_query_get
 * @availability stack since=8.13.0 stability=stable visibility=public
 * @doc_id esql-async-query-get
 * @ext_doc_id esql
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * The unique identifier of the query.
     * A query ID is provided in the ES|QL async query API response for a query that does not complete in the designated time.
     * A query ID is also provided when the request was submitted with the `keep_on_completion` parameter set to `true`.
     */
    id: Id
  }
  query_parameters: {
    /**
     * Indicates whether columns that are entirely `null` will be removed from the `columns` and `values` portion of the results.
     * If `true`, the response will include an extra section under the name `all_columns` which has the name of all the columns.
     * @server_default false
     */
    drop_null_columns?: boolean
    /**
     * A short version of the Accept header, for example `json` or `yaml`.
     */
    format?: EsqlFormat
    /**
     * The period for which the query and its results are stored in the cluster.
     * When this period expires, the query and its results are deleted, even if the query is still ongoing.
     */
    keep_alive?: Duration
    /**
     * The period to wait for the request to finish.
     * By default, the request waits for complete query results.
     * If the request completes during the period specified in this parameter, complete query results are returned.
     * Otherwise, the response returns an `is_running` value of `true` and no results.
     */
    wait_for_completion_timeout?: Duration
  }
}
