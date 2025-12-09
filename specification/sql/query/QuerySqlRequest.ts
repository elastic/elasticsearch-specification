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
import { MediaType, ProjectRouting } from '@_types/common'
import { RuntimeFields } from '@_types/mapping/RuntimeFields'
import { integer } from '@_types/Numeric'
import { QueryContainer } from '@_types/query_dsl/abstractions'
import { Duration, TimeZone } from '@_types/Time'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

/**
 * Get SQL search results.
 *
 * Run an SQL request.
 * @rest_spec_name sql.query
 * @availability stack since=6.3.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @index_privileges read
 * @doc_id sql-search-api
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_sql'
      methods: ['POST', 'GET']
    }
  ]
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * The format for the response.
     * You can also specify a format using the `Accept` HTTP header.
     * If you specify both this parameter and the `Accept` HTTP header, this parameter takes precedence.
     * @ext_doc_id sql-rest-format
     */
    format?: SqlFormat
    /**
     * Specifies a subset of projects to target for the search using project
     * metadata tags in a subset of Lucene query syntax.
     * Allowed Lucene queries: the _alias tag and a single value (possibly wildcarded).
     * Examples:
     *  _alias:my-project
     *  _alias:_origin
     *  _alias:*pr*
     * Supported in serverless only.
     * @availability serverless stability=stable visibility=feature_flag feature_flag=serverless.cross_project.enabled
     */
    project_routing?: ProjectRouting
  }
  body: {
    /**
     * If `true`, the response has partial results when there are shard request timeouts or shard failures.
     * If `false`, the API returns an error with no partial results.
     * @server_default false
     */
    allow_partial_search_results?: boolean
    /**
     * The default catalog (cluster) for queries.
     * If unspecified, the queries execute on the data in the local cluster only.
     */
    catalog?: string
    /**
     * If `true`, the results are in a columnar fashion: one row represents all the values of a certain column from the current page of results.
     * The API supports this parameter only for CBOR, JSON, SMILE, and YAML responses.
     * @ext_doc_id sql-rest-columnar
     * @server_default false
     */
    columnar?: boolean
    /**
     * The cursor used to retrieve a set of paginated results.
     * If you specify a cursor, the API only uses the `columnar` and `time_zone` request body parameters.
     * It ignores other request body parameters.
     */
    cursor?: string
    /**
     * The maximum number of rows (or entries) to return in one response.
     * @server_default 1000
     */
    fetch_size?: integer
    /**
     * If `false`, the API returns an exception when encountering multiple values for a field.
     * If `true`, the API is lenient and returns the first value from the array with no guarantee of consistent results.
     * @server_default false
     */
    field_multi_value_leniency?: boolean
    /**
     * The Elasticsearch query DSL for additional filtering.
     * @ext_doc_id sql-rest-filtering
     * @server_default none
     */
    filter?: QueryContainer
    /**
     * If `true`, the search can run on frozen indices.
     * @server_default false
     */
    index_using_frozen?: boolean
    /**
     * The retention period for an async or saved synchronous search.
     * @server_default 5d
     */
    keep_alive?: Duration
    /**
     * If `true`, Elasticsearch stores synchronous searches if you also specify the `wait_for_completion_timeout` parameter.
     * If `false`, Elasticsearch only stores async searches that don't finish before the `wait_for_completion_timeout`.
     * @server_default false
     */
    keep_on_completion?: boolean
    /**
     * The minimum retention period for the scroll cursor.
     * After this time period, a pagination request might fail because the scroll cursor is no longer available.
     * Subsequent scroll requests prolong the lifetime of the scroll cursor by the duration of `page_timeout` in the scroll request.
     * @server_default 45s
     */
    page_timeout?: Duration
    /**
     * The values for parameters in the query.
     */
    params?: UserDefinedValue[]
    /**
     * The SQL query to run.
     * @ext_doc_id sql-spec
     */
    query?: string
    /**
     * The timeout before the request fails.
     * @server_default 90s
     */
    request_timeout?: Duration
    /**
     * One or more runtime fields for the search request.
     * These fields take precedence over mapped fields with the same name.
     */
    runtime_mappings?: RuntimeFields
    /**
     * The ISO-8601 time zone ID for the search.
     * @ext_doc_id time-zone-id
     * @server_default Z
     */
    time_zone?: TimeZone
    /**
     * The period to wait for complete results.
     * It defaults to no timeout, meaning the request waits for complete search results.
     * If the search doesn't finish within this period, the search becomes async.
     *
     * To save a synchronous search, you must specify this parameter and the `keep_on_completion` parameter.
     */
    wait_for_completion_timeout?: Duration
  }
}

export enum SqlFormat {
  csv,
  json,
  tsv,
  txt,
  yaml,
  cbor,
  smile
}
