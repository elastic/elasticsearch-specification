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

import { Field, float, IndexName, integer, uint } from '@common/common'
import { ExpandWildcards } from '@common/common/ExpandWildcards'
import { RequestBase } from '@common/common_abstractions/request/RequestBase'
import { Time } from '@common/common_options/time_unit/Time'
import { QueryContainer } from '@common/query_dsl/abstractions/container/QueryContainer'

/**
 * @rest_spec_name eql.search
 * @since 7.9.0
 * @stability TODO
 */
export interface EqlSearchRequest extends RequestBase {
  path_parts?: {
    index: IndexName
  }
  query_parameters?: {
    allow_no_indices?: boolean
    expand_wildcards?: ExpandWildcards
    ignore_unavailable?: boolean
    keep_alive?: Time
    keep_on_completion?: boolean
    wait_for_completion_timeout?: Time
  }
  body?: {
    query: string
    case_sensitive?: boolean
    event_category_field?: Field
    tiebreaker_field?: Field
    timestamp_field?: Field
    fetch_size?: uint
    filter?: QueryContainer | QueryContainer[]
    keep_alive?: Time
    keep_on_completion?: boolean
    wait_for_completion_timeout?: Time
    size?: integer | float
    fields?: Array<Field | EqlSearchFieldFormatted>
  }
}

export class EqlSearchFieldFormatted {
  field: Field
  format: string
}
