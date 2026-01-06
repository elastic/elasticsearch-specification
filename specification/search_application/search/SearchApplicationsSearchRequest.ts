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
import { MediaType, Name } from '@_types/common'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

/**
 * Run a search application search.
 *
 * Generate and run an Elasticsearch query that uses the specified query parameteter and the search template associated with the search application or default template.
 * Unspecified template parameters are assigned their default values if applicable.
 * @rest_spec_name search_application.search
 * @availability stack since=8.8.0 stability=beta
 * @availability serverless stability=beta visibility=public
 * @doc_id search-application-search
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_application/search_application/{name}/_search'
      methods: ['GET', 'POST']
    }
  ]
  path_parts: {
    /**
     * The name of the search application to be searched.
     */
    name: Name
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * Determines whether aggregation names are prefixed by their respective types in the response.
     * @server_default false
     * @availability stack since=8.14.0
     * @availability serverless
     */
    typed_keys?: boolean
  }
  body?: {
    /**
     * Query parameters specific to this request, which will override any defaults specified in the template.
     */
    params?: Dictionary<string, UserDefinedValue>
  }
}
