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
import { Fields, Id, IndexName, Routing } from '@_types/common'
import { QueryContainer } from '@_types/query_dsl/abstractions'
import { Operator } from '@_types/query_dsl/Operator'
import { SourceConfigParam } from '@global/search/_types/SourceFilter'

/**
 * Explain a document match result.
 * Get information about why a specific document matches, or doesn't match, a query.
 * It computes a score explanation for a query and a specific document.
 * @rest_spec_name explain
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=public
 * @index_privileges read
 * @doc_tag search
 * @doc_id search-explain
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/{index}/_explain/{id}'
      methods: ['GET', 'POST']
    }
  ]
  path_parts: {
    /**
     * The document identifier.
     */
    id: Id
    /**
     * Index names that are used to limit the request.
     * Only a single index name can be provided to this parameter.
     */
    index: IndexName
  }
  query_parameters: {
    /**
     * The analyzer to use for the query string.
     * This parameter can be used only when the `q` query string parameter is specified.
     */
    analyzer?: string
    /**
     * If `true`, wildcard and prefix queries are analyzed.
     * This parameter can be used only when the `q` query string parameter is specified.
     * @server_default false
     */
    analyze_wildcard?: boolean
    /**
     * The default operator for query string query: `and` or `or`.
     * This parameter can be used only when the `q` query string parameter is specified.
     * @server_default or
     */
    default_operator?: Operator
    /**
     * The field to use as default where no field prefix is given in the query string.
     * This parameter can be used only when the `q` query string parameter is specified.
     */
    df?: string
    /**
     * If `true`, format-based query failures (such as providing text to a numeric field) in the query string will be ignored.
     * This parameter can be used only when the `q` query string parameter is specified.
     * @server_default false
     */
    lenient?: boolean
    /**
     * The node or shard the operation should be performed on.
     * It is random by default.
     */
    preference?: string
    /**
     * A custom value used to route operations to a specific shard.
     */
    routing?: Routing
    /**
     * `True` or `false` to return the `_source` field or not or a list of fields to return.
     */
    _source?: SourceConfigParam
    /**
     * A comma-separated list of source fields to exclude from the response.
     * You can also use this parameter to exclude fields from the subset specified in `_source_includes` query parameter.
     * If the `_source` parameter is `false`, this parameter is ignored.
     */
    _source_excludes?: Fields
    /**
     * A comma-separated list of source fields to include in the response.
     * If this parameter is specified, only these source fields are returned.
     * You can exclude fields from this subset using the `_source_excludes` query parameter.
     * If the `_source` parameter is `false`, this parameter is ignored.
     */
    _source_includes?: Fields
    /**
     * A comma-separated list of stored fields to return in the response.
     */
    stored_fields?: Fields
    /**
     * The query in the Lucene query string syntax.
     */
    q?: string
  }
  body: {
    /**
     * Defines the search definition using the Query DSL.
     */
    query?: QueryContainer
  }
}
