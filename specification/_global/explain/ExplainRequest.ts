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
import { SourceConfigParam } from '@global/search/_types/SourceFilter'
import { Operator } from '@_types/query_dsl/Operator'

/**
 * Explain a document match result.
 * Returns information about why a specific document matches, or doesn’t match, a query.
 * @rest_spec_name explain
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=public
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * Defines the document ID.
     */
    id: Id
    /**
     * Index names used to limit the request.
     * Only a single index name can be provided to this parameter.
     */
    index: IndexName
  }
  query_parameters: {
    /**
     * Analyzer to use for the query string.
     * This parameter can only be used when the `q` query string parameter is specified.
     */
    analyzer?: string
    /**
     * If `true`, wildcard and prefix queries are analyzed.
     * @server_default false
     */
    analyze_wildcard?: boolean
    /**
     * The default operator for query string query: `AND` or `OR`.
     * @server_default OR
     */
    default_operator?: Operator
    /**
     * Field to use as default where no field prefix is given in the query string.
     */
    df?: string
    /**
     * If `true`, format-based query failures (such as providing text to a numeric field) in the query string will be ignored.
     * @server_default false
     */
    lenient?: boolean
    /**
     * Specifies the node or shard the operation should be performed on.
     * Random by default.
     */
    preference?: string
    /**
     * Custom value used to route operations to a specific shard.
     */
    routing?: Routing
    /**
     * True or false to return the `_source` field or not, or a list of fields to return.
     */
    _source?: SourceConfigParam
    /**
     * A comma-separated list of source fields to exclude from the response.
     */
    _source_excludes?: Fields
    /**
     * A comma-separated list of source fields to include in the response.
     */
    _source_includes?: Fields
    /**
     * A comma-separated list of stored fields to return in the response.
     */
    stored_fields?: Fields
    /**
     * Query in the Lucene query string syntax.
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
