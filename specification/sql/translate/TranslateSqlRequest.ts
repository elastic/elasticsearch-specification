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
import { integer } from '@_types/Numeric'
import { QueryContainer } from '@_types/query_dsl/abstractions'
import { TimeZone } from '@_types/Time'

/**
 * @rest_spec_name sql.translate
 * @availability stack since=6.3.0 stability=stable
 * @availability serverless stability=stable visibility=public
 */
export interface Request extends RequestBase {
  body: {
    /**
     * The maximum number of rows (or entries) to return in one response.
     * @server_default 1000
     */
    fetch_size?: integer
    /**
     * Elasticsearch query DSL for additional filtering.
     * @doc_id sql-rest-filtering
     * @server_default none
     */
    filter?: QueryContainer
    /**
     * SQL query to run.
     */
    query: string
    /**
     * ISO-8601 time zone ID for the search.
     * @doc_url https://docs.oracle.com/javase/8/docs/api/java/time/ZoneId.html
     * @server_default Z
     */
    time_zone?: TimeZone
  }
}
