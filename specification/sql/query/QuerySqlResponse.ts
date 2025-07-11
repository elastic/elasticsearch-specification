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

import { Id } from '@_types/common'
import { Column, Row } from '../_types/types'

export class Response {
  body: {
    /**
     * Column headings for the search results. Each object is a column.
     */
    columns?: Column[]
    /**
     * The cursor for the next set of paginated results.
     * For CSV, TSV, and TXT responses, this value is returned in the `Cursor` HTTP header.
     */
    cursor?: string
    /**
     * The identifier for the search.
     * This value is returned only for async and saved synchronous searches.
     * For CSV, TSV, and TXT responses, this value is returned in the `Async-ID` HTTP header.
     */
    id?: Id
    /**
     * If `true`, the search is still running.
     * If `false`, the search has finished.
     * This value is returned only for async and saved synchronous searches.
     * For CSV, TSV, and TXT responses, this value is returned in the `Async-partial` HTTP header.
     */
    is_running?: boolean
    /**
     * If `true`, the response does not contain complete search results.
     * If `is_partial` is `true` and `is_running` is `true`, the search is still running.
     * If `is_partial` is `true` but `is_running` is `false`, the results are partial due to a failure or timeout.
     * This value is returned only for async and saved synchronous searches.
     * For CSV, TSV, and TXT responses, this value is returned in the `Async-partial` HTTP header.
     */
    is_partial?: boolean
    /**
     * The values for the search results.
     */
    rows: Row[]
  }
}
