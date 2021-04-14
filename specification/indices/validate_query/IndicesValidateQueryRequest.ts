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

import { Indices, Types } from '../../__common/common'
import { DefaultOperator } from '../../__common/common/DefaultOperator'
import { ExpandWildcards } from '../../__common/common/ExpandWildcards'
import { RequestBase } from '../../__common/common_abstractions/request/RequestBase'
import { QueryContainer } from '../../__common/query_dsl/abstractions/container/QueryContainer'

/**
 * @rest_spec_name indices.validate_query
 * @since 1.3.0
 * @stability TODO
 */
export interface IndicesValidateQueryRequest extends RequestBase {
  path_parts?: {
    index?: Indices
    type?: Types
  }
  query_parameters?: {
    allow_no_indices?: boolean
    all_shards?: boolean
    analyzer?: string
    analyze_wildcard?: boolean
    default_operator?: DefaultOperator
    df?: string
    expand_wildcards?: ExpandWildcards
    explain?: boolean
    ignore_unavailable?: boolean
    lenient?: boolean
    query_on_query_string?: string
    rewrite?: boolean
    q?: string
  }
  body?: {
    query?: QueryContainer
  }
}
