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
import { Name } from '@_types/common'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

/**
 * Render a search application query.
 * Generate an Elasticsearch query using the specified query parameters and the search template associated with the search application or a default template if none is specified.
 * If a parameter used in the search template is not specified in `params`, the parameter's default value will be used.
 * The API returns the specific Elasticsearch query that would be generated and run by calling the search application search API.
 *
 * You must have `read` privileges on the backing alias of the search application.
 * @rest_spec_name search_application.render_query
 * @availability stack since=8.9.0 stability=experimental visibility=public
 * @doc_id search-render-query
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_application/search_application/{name}/_render_query'
      methods: ['POST']
    }
  ]
  path_parts: {
    /**
     * The name of the search application to render teh query for.
     */
    name: Name
  }
  /**
   * Contains parameters for a search application.
   */
  body: {
    params?: Dictionary<string, UserDefinedValue>
  }
}
