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
import { integer } from '@_types/Numeric'
import { QueryContainer } from '@_types/query_dsl/abstractions'
import { TimeZone } from '@_types/Time'

/**
 * Translate SQL into Elasticsearch queries.
 *
 * Translate an SQL search into a search API request containing Query DSL.
 * It accepts the same request body parameters as the SQL search API, excluding `cursor`.
 * @rest_spec_name sql.translate
 * @category common
 * @availability stack since=6.3.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @index_privileges read
 * @doc_id sql-translate-api
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_sql/translate'
      methods: ['POST', 'GET']
    }
  ]
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  body: {
    /**
     * The maximum number of rows (or entries) to return in one response.
     * @server_default 1000
     */
    fetch_size?: integer
    /**
     * The Elasticsearch query DSL for additional filtering.
     * @ext_doc_id sql-rest-filtering
     * @server_default none
     */
    filter?: QueryContainer
    /**
     * The SQL query to run.
     */
    query: string
    /**
     * The ISO-8601 time zone ID for the search.
     * @ext_doc_id time-zone-id
     * @server_default Z
     */
    time_zone?: TimeZone
  }
}
