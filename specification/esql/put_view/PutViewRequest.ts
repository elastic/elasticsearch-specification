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
import { Id, MediaType } from '@_types/common'

/**
 * Create or update an ES|QL view.
 *
 * Stores an ES|QL query that runs whenever the view is referenced.
 * A query that cannot be parsed is rejected. Replacing a reserved view fails.
 *
 * @rest_spec_name esql.put_view
 * @index_privileges create_view
 * @availability stack since=9.4.0 stability=stable visibility=public
 * @availability serverless stability=stable visibility=public
 * @ext_doc_id esql-views
 * @doc_id esql-put-view
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_query/view/{name}'
      methods: ['PUT']
    }
  ]
  path_parts: {
    /** The view name to create or update. */
    name: Id
  }
  query_parameters: {
    /**
     * Whether to analyze the view query and return a warning when validation fails.
     *
     * Validation reports an unknown index or column, including an index the caller cannot read.
     * The view is saved even when validation reports a problem.
     * Failures unrelated to the query, such as an overloaded cluster, produce no warning.
     * @server_default false
     * @availability stack since=9.7.0 stability=stable
     * @availability serverless stability=stable
     */
    validate?: boolean
  }
  body: {
    /** The ES|QL query string that defines the view. A query that cannot be parsed is rejected. */
    query: string
    /**
     * A free-text description of the view.
     * @availability stack since=9.6.0 stability=stable
     * @availability serverless stability=stable
     */
    description?: string
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
}
