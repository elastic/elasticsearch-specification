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

import { CatRequestBase } from '@cat/_types/CatBase'
import { Indices } from '@_types/common'

/**
 * Get a document count.
 * Provides quick access to a document count for a data stream, an index, or an entire cluster.n/
 * The document count only includes live documents, not deleted documents which have not yet been removed by the merge process.
 *
 * CAT APIs are only intended for human consumption using the command line or Kibana console.
 * They are not intended for use by applications. For application consumption, use /_count endpoints.
 * @rest_spec_name cat.count
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=public
 * @doc_id cat-count
 * @index_privileges read
 */
export interface Request extends CatRequestBase {
  path_parts: {
    /**
     * Comma-separated list of data streams, indices, and aliases used to limit the request.
     * Supports wildcards (`*`). To target all data streams and indices, omit this parameter or use `*` or `_all`.
     */
    index?: Indices
  }
}
