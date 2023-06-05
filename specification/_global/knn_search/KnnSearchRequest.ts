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
import { Fields, Indices, Routing } from '@_types/common'
import { Query } from './_types/Knn'
import { QueryContainer } from '@_types/query_dsl/abstractions'
import { SourceConfig } from '@global/search/_types/SourceFilter'
import { FieldAndFormat } from '@_types/query_dsl/abstractions'

/**
 * @rest_spec_name knn_search
 * @availability stack since=8.0.0 stability=experimental
 * @deprecated 8.4.0
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * A comma-separated list of index names to search;
     * use `_all` or to perform the operation on all indices
     */
    index: Indices
  }
  query_parameters: {
    /**
     * A comma-separated list of specific routing values
     */
    routing?: Routing
  }
  body: {
    /**
     * Indicates which source fields are returned for matching documents. These
     * fields are returned in the hits._source property of the search response.
     */
    _source?: SourceConfig
    /**
     * The request returns doc values for field names matching these patterns
     * in the hits.fields property of the response. Accepts wildcard (*) patterns.
     */
    docvalue_fields?: FieldAndFormat[]
    /**
     * List of stored fields to return as part of a hit. If no fields are specified,
     * no stored fields are included in the response. If this field is specified, the _source
     * parameter defaults to false. You can pass _source: true to return both source fields
     * and stored fields in the search response.
     */
    stored_fields?: Fields
    /**
     * The request returns values for field names matching these patterns
     * in the hits.fields property of the response. Accepts wildcard (*) patterns.
     */
    fields?: Fields
    /**
     * Query to filter the documents that can match. The kNN search will return the top
     * `k` documents that also match this filter. The value can be a single query or a
     * list of queries. If `filter` isn't provided, all documents are allowed to match.
     * @availability stack since=8.2.0
     * @availability serverless
     */
    filter?: QueryContainer | QueryContainer[]
    /** kNN query to execute */
    knn: Query
  }
}
