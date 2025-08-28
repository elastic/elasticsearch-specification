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

import { Indices, Names } from '@_types/common'
import { CatCountColumns, CatRequestBase } from '@cat/_types/CatBase'

/**
 * Get a document count.
 *
 * Get quick access to a document count for a data stream, an index, or an entire cluster.
 * The document count only includes live documents, not deleted documents which have not yet been removed by the merge process.
 *
 * IMPORTANT: CAT APIs are only intended for human consumption using the command line or Kibana console.
 * They are not intended for use by applications. For application consumption, use the count API.
 * @rest_spec_name cat.count
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=public
 * @doc_id cat-count
 * @index_privileges read
 */
export interface Request extends CatRequestBase {
  urls: [
    {
      path: '/_cat/count'
      methods: ['GET']
    },
    {
      path: '/_cat/count/{index}'
      methods: ['GET']
    }
  ]
  path_parts: {
    /**
     * A comma-separated list of data streams, indices, and aliases used to limit the request.
     * It supports wildcards (`*`).
     * To target all data streams and indices, omit this parameter or use `*` or `_all`.
     */
    index?: Indices
  }
  query_parameters: {
    /**
     * A comma-separated list of columns names to display. It supports simple wildcards.
     */
    h?: CatCountColumns
    /**
     * List of columns that determine how the table should be sorted.
     * Sorting defaults to ascending and can be changed by setting `:asc`
     * or `:desc` as a suffix to the column name.
     */
    s?: Names
  }
}
