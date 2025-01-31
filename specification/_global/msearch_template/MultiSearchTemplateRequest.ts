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
import { Indices, SearchType } from '@_types/common'
import { long } from '@_types/Numeric'
import { RequestItem } from './types'

/**
 * Run multiple templated searches.
 *
 * Run multiple templated searches with a single request.
 * If you are providing a text file or text input to `curl`, use the `--data-binary` flag instead of `-d` to preserve newlines.
 * For example:
 *
 * ```
 * $ cat requests
 * { "index": "my-index" }
 * { "id": "my-search-template", "params": { "query_string": "hello world", "from": 0, "size": 10 }}
 * { "index": "my-other-index" }
 * { "id": "my-other-search-template", "params": { "query_type": "match_all" }}
 *
 * $ curl -H "Content-Type: application/x-ndjson" -XGET localhost:9200/_msearch/template --data-binary "@requests"; echo
 * ```
 * @rest_spec_name msearch_template
 * @availability stack since=5.0.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @index_privileges read
 * @doc_tag search
 * @doc_id search-multi-search-template
 * @ext_doc_id search-templates
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_msearch/template'
      methods: ['GET', 'POST']
    },
    {
      path: '/{index}/_msearch/template'
      methods: ['GET', 'POST']
    }
  ]
  path_parts: {
    /**
     * A comma-separated list of data streams, indices, and aliases to search.
     * It supports wildcards (`*`).
     * To search all data streams and indices, omit this parameter or use `*`.
     */
    index?: Indices
  }
  query_parameters: {
    /**
     * If `true`, network round-trips are minimized for cross-cluster search requests.
     * @server_default true
     */
    ccs_minimize_roundtrips?: boolean
    /**
     * The maximum number of concurrent searches the API can run.
     */
    max_concurrent_searches?: long
    /**
     * The type of the search operation.
     */
    search_type?: SearchType
    /**
     * If `true`, the response returns `hits.total` as an integer.
     * If `false`, it returns `hits.total` as an object.
     * @server_default false
     */
    rest_total_hits_as_int?: boolean
    /**
     * If `true`, the response prefixes aggregation and suggester names with their respective types.
     * @server_default false
     */
    typed_keys?: boolean
  }
  /**
   * The request body must be newline-delimited JSON (NDJSON) in the following format:
   *
   * ```
   * <header>\n
   * <body>\n
   * <header>\n
   * <body>\n
   * ```
   *
   * Each `<header>` and `<body>` pair represents a search request.
   * The `<header>` supports the same parameters as the multi search API's `<header>`.
   * The `<body>` supports the same parameters as the search template API's request body.
   *
   * The `<header>` contains the parameters used to limit or change the search.
   * It is required for each search body but can be empty `({})` or a blank line.
   *
   * The `<body>` contains the parameters for the search.
   *
   * @codegen_name search_templates
   */
  body: Array<RequestItem>
}
