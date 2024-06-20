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

import { Sort, SortResults } from '@_types/sort'
import { RequestBase } from '@_types/Base'
import { integer } from '@_types/Numeric'
import { QueryContainer } from '@_types/query_dsl/abstractions'

/**
 * @rest_spec_name watcher.query_watches
 * @availability stack since=7.11.0 stability=stable
 */
export interface Request extends RequestBase {
  body: {
    /**
     * The offset from the first result to fetch. Needs to be non-negative.
     * @server_default 0
     */
    from?: integer
    /**
     * The number of hits to return. Needs to be non-negative.
     * @server_default 10
     */
    size?: integer
    /** Optional, query filter watches to be returned. */
    query?: QueryContainer
    /** Optional sort definition. */
    sort?: Sort
    /** Optional search After to do pagination using last hit’s sort values. */
    search_after?: SortResults
  }
}
