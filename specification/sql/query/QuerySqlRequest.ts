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

import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { RequestBase } from '@_types/Base'
import { RuntimeFields } from '@_types/mapping/RuntimeFields'
import { integer } from '@_types/Numeric'
import { QueryContainer } from '@_types/query_dsl/abstractions'
import { Time } from '@_types/Time'

/**
 * @rest_spec_name sql.query
 * @since 6.3.0
 * @stability stable
 */
export interface Request extends RequestBase {
  query_parameters: {
    /**
     * @doc_id sql-rest-format
     */
    format?: string
  }
  body: {
    /**
     * Default catalog (cluster) for queries. If unspecified, the queries execute on the data in the local cluster only.
     */
    catalog?: string
    columnar?: boolean
    cursor?: string
    /**
     * The maximum number of rows (or entries) to return in one response
     * @server_default 1000
     */
    fetch_size?: integer
    /**
     * Optional Elasticsearch query DSL for additional filtering.
     * @doc_id sql-rest-filtering
     * @server_default none
     */
    filter?: QueryContainer
    /**
     * SQL query to execute
     */
    query?: string
    /**
     * The timeout before the request fails.
     * @server_default 90s
     */
    request_timeout?: Time
    /**
     * The timeout before a pagination request fails.
     * @server_default 45s
     */
    page_timeout?: Time
    /**
     * Time-zone in ISO 8601 used for executing the query on the server. More information available here.
     * @doc_url https://docs.oracle.com/javase/8/docs/api/java/time/ZoneId.html
     */
    time_zone?: string
    /**
     * Throw an exception when encountering multiple values for a field (default) or be lenient and return the first value from the list (without any guarantees of what that will be - typically the first in natural ascending order).
     * @server_default false
     */
    field_multi_value_leniency?: boolean
    /**
     * Defines one or more runtime fields in the search request. These fields take
     * precedence over mapped fields with the same name.
     */
    runtime_mappings?: RuntimeFields
    /**
     * Period to wait for complete results. Defaults to no timeout, meaning the request waits for complete search results. If the search doesn’t finish within this period, the search becomes async.
     */
    wait_for_completion_timeout?: Time
    /**
     * Values for parameters in the query.
     */
    params?: Dictionary<string, UserDefinedValue>
    /**
     * Retention period for an async or saved synchronous search.
     * @server_default 5d
     */
    keep_alive?: Time
    /**
     * If true, Elasticsearch stores synchronous searches if you also specify the wait_for_completion_timeout parameter. If false, Elasticsearch only stores async searches that don’t finish before the wait_for_completion_timeout.
     * @server_default false
     */
    keep_on_completion?: boolean
    /**
     * If true, the search can run on frozen indices. Defaults to false.
     * @server_default false
     */
    index_using_frozen?: boolean
  }
}
