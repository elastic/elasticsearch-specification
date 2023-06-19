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
import { ExpandWildcards, Indices, Routing } from '@_types/common'
import { double, long } from '@_types/Numeric'
import { QueryContainer } from '@_types/query_dsl/abstractions'
import { Operator } from '@_types/query_dsl/Operator'

/**
 * @rest_spec_name count
 * @availability stack since=0.0.0 stability=stable
 * @availability serverless stability=stable visibility=public
 */
export interface Request extends RequestBase {
  path_parts: {
    index?: Indices
  }
  query_parameters: {
    allow_no_indices?: boolean
    analyzer?: string
    analyze_wildcard?: boolean
    default_operator?: Operator
    df?: string
    expand_wildcards?: ExpandWildcards
    ignore_throttled?: boolean
    ignore_unavailable?: boolean
    lenient?: boolean
    min_score?: double
    preference?: string
    routing?: Routing
    terminate_after?: long
    q?: string
  }
  body: {
    query?: QueryContainer
  }
}
