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

import { Dictionary } from '@spec_utils/Dictionary'
import { AggregationContainer } from '@_types/aggregations/AggregationContainer'
import { RequestBase } from '@_types/Base'
import { Indices, Type } from '@_types/common'
import { integer } from '@_types/Numeric'
import { QueryContainer } from '@_types/query_dsl/abstractions/container/QueryContainer'

/**
 * @rest_spec_name rollup.rollup_search
 * @since 6.3.0
 * @stability TODO
 */
export interface RollupSearchRequest extends RequestBase {
  path_parts?: {
    index: Indices
    type?: Type
  }
  query_parameters?: {
    rest_total_hits_as_int?: boolean
    typed_keys?: boolean
  }
  body?: {
    aggs?: Dictionary<string, AggregationContainer>
    query?: QueryContainer
    size?: integer
  }
}
