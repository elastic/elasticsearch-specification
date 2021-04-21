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

import { RequestBase } from '@common/Base'
import { integer } from '@common/Numeric'
import { QueryContainer } from '@common/query_dsl/abstractions/container/QueryContainer'
import { Time } from '@common/Time'

/**
 * @rest_spec_name sql.query
 * @since 6.3.0
 * @stability TODO
 */
export interface QuerySqlRequest extends RequestBase {
  query_parameters?: {
    /**
     * @doc_url https://www.elastic.co/guide/en/elasticsearch/reference/current/sql-rest-format.html#sql-rest-format
     */
    format?: string
  }
  body?: {
    columnar?: boolean
    cursor?: string
    /**
     * The maximum number of rows (or entries) to return in one response
     * @server_default 1000
     */
    fetch_size?: integer
    /**
     * Optional Elasticsearch query DSL for additional filtering.
     * @doc_url https://www.elastic.co/guide/en/elasticsearch/reference/current/sql-rest-filtering.html
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
  }
}
