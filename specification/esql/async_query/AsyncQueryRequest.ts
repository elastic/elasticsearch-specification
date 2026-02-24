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
import { FieldValue, MediaType, ProjectRouting } from '@_types/common'
import { QueryContainer } from '@_types/query_dsl/abstractions'
import { Duration } from '@_types/Time'
import { EsqlFormat } from '@esql/_types/QueryParameters'
import { TableValuesContainer } from '@esql/_types/TableValuesContainer'
import { Dictionary } from '@spec_utils/Dictionary'

/**
 * Run an async ES|QL query.
 *
 * Asynchronously run an ES|QL (Elasticsearch query language) query, monitor its progress, and retrieve results when they become available.
 *
 * The API accepts the same parameters and request body as the synchronous query API, along with additional async related properties.
 * @rest_spec_name esql.async_query
 * @availability stack since=8.13.0 stability=stable visibility=public
 * @doc_id esql-async-query
 * @ext_doc_id esql
 * @index_privileges read
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_query/async'
      methods: ['POST']
    }
  ]
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * If `true`, partial results will be returned if there are shard failures, but the query can continue to execute on other clusters and shards.
     * If `false`, the query will fail if there are any failures.
     *
     * To override the default behavior, you can set the `esql.query.allow_partial_results` cluster setting to `false`.
     * @server_default true
     */
    allow_partial_results?: boolean
    /**
     * The character to use between values within a CSV row.
     * It is valid only for the CSV format.
     * @server_default ,
     */
    delimiter?: string
    /**
     * Indicates whether columns that are entirely `null` will be removed from the `columns` and `values` portion of the results.
     * If `true`, the response will include an extra section under the name `all_columns` which has the name of all the columns.
     * @server_default false
     */
    drop_null_columns?: boolean
    /**
     * A short version of the Accept header, e.g. json, yaml.
     *
     * `csv`, `tsv`, and `txt` formats will return results in a tabular format, excluding other metadata fields from the response.
     *
     * For async requests, nothing will be returned if the async query doesn't finish within the timeout.
     * The query ID and running status are available in the `X-Elasticsearch-Async-Id` and `X-Elasticsearch-Async-Is-Running` HTTP headers of the response, respectively.
     */
    format?: EsqlFormat
  }
  /**
   * Use the `query` element to start a query. Use `time_zone` to specify an execution time zone and `columnar` to format the answer.
   */
  body: {
    /**
     * By default, ES|QL returns results as rows. For example, FROM returns each individual document as one row. For the JSON, YAML, CBOR and smile formats, ES|QL can return the results in a columnar fashion where one row represents all the values of a certain column in the results.
     */
    columnar?: boolean
    /**
     * Specify a Query DSL query in the filter parameter to filter the set of documents that an ES|QL query runs on.
     */
    filter?: QueryContainer
    /**
     * Sets the default timezone of the query.
     * @availability stack since=9.4.0 stability=stable
     * @availability serverless stability=stable
     * @doc_id esql-timezones
     */
    time_zone?: string
    /**
     * Returns results (especially dates) formatted per the conventions of the locale.
     * @doc_id esql-returning-localized-results
     */
    locale?: string
    /**
     * To avoid any attempts of hacking or code injection, extract the values in a separate list of parameters. Use question mark placeholders (?) in the query string for each of the parameters.
     * @doc_id esql-query-params
     */
    params?: Array<FieldValue>
    /**
     * If provided and `true` the response will include an extra `profile` object
     * with information on how the query was executed. This information is for human debugging
     * and its format can change at any time but it can give some insight into the performance
     * of each part of the query.
     */
    profile?: boolean
    /**
     * The ES|QL query API accepts an ES|QL query string in the query parameter, runs it, and returns the results.
     */
    query: string
    /**
     * Tables to use with the LOOKUP operation. The top level key is the table
     * name and the next level key is the column name.
     */
    tables?: Dictionary<string, Dictionary<string, TableValuesContainer>>
    /**
     * When set to `true` and performing a cross-cluster/cross-project query, the response will include an extra `_clusters`
     * object with information about the clusters that participated in the search along with info such as shards
     * count.
     * @server_default false
     */
    include_ccs_metadata?: boolean
    /**
     * When set to `true`, the response will include an extra `_clusters`
     * object with information about the clusters that participated in the search along with info such as shards
     * count.
     * This is similar to `include_ccs_metadata`, but it also returns metadata when the query is not CCS/CPS
     * @server_default false
     */
    include_execution_metadata?: boolean
    /**
     * The period to wait for the request to finish.
     * By default, the request waits for 1 second for the query results.
     * If the query completes during this period, results are returned
     * Otherwise, a query ID is returned that can later be used to retrieve the results.
     * @server_default 1s
     */
    wait_for_completion_timeout?: Duration
    /**
     * The period for which the query and its results are stored in the cluster.
     * The default period is five days.
     * When this period expires, the query and its results are deleted, even if the query is still ongoing.
     * If the `keep_on_completion` parameter is false, Elasticsearch only stores async queries that do not complete within the period set by the `wait_for_completion_timeout` parameter, regardless of this value.
     * @server_default 5d
     */
    keep_alive?: Duration
    /**
     *  Indicates whether the query and its results are stored in the cluster.
     * If false, the query and its results are stored in the cluster only if the request does not complete during the period set by the `wait_for_completion_timeout` parameter.
     * @server_default false
     */
    keep_on_completion?: boolean
    /**
     * Specifies a subset of projects to target using project
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
}
