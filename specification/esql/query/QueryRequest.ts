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
import { MediaType } from '@_types/common'
import { QueryContainer } from '@_types/query_dsl/abstractions'
import { EsqlFormat } from '@esql/_types/QueryParameters'
import { TableValuesContainer } from '@esql/_types/TableValuesContainer'
import { ESQLParam } from '@esql/_types/types'
import { Dictionary } from '@spec_utils/Dictionary'

/**
 * Run an ES|QL query.
 *
 * Get search results for an ES|QL (Elasticsearch query language) query.
 * @rest_spec_name esql.query
 * @availability stack since=8.11.0
 * @availability serverless
 * @doc_id esql-query
 * @ext_doc_id esql
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_query'
      methods: ['POST']
    }
  ]
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * A short version of the Accept header, e.g. json, yaml.
     *
     * `csv`, `tsv`, and `txt` formats will return results in a tabular format, excluding other metadata fields from the response.
     */
    format?: EsqlFormat
    /**
     * The character to use between values within a CSV row. Only valid for the CSV format.
     * @server_default ,
     */
    delimiter?: string
    /**
     * Should columns that are entirely `null` be removed from the `columns` and `values` portion of the results?
     * Defaults to `false`. If `true` then the response will include an extra section under the name `all_columns` which has the name of all columns.
     * @server_default false
     */
    drop_null_columns?: boolean
    /**
     * If `true`, partial results will be returned if there are shard failures, but the query can continue to execute on other clusters and shards.
     * If `false`, the query will fail if there are any failures.
     *
     * To override the default behavior, you can set the `esql.query.allow_partial_results` cluster setting to `false`.
     * @server_default true
     */
    allow_partial_results?: boolean
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
     * Returns results (especially dates) formatted per the conventions of the locale.
     * @doc_id esql-returning-localized-results
     */
    locale?: string
    /**
     * To avoid any attempts of hacking or code injection, extract the values in a separate list of parameters. Use question mark placeholders (?) in the query string for each of the parameters.
     * @doc_id esql-query-params
     */
    params?: Array<ESQLParam>
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
  }
}
