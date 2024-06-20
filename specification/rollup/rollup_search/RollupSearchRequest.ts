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
import { Indices } from '@_types/common'
import { integer } from '@_types/Numeric'
import { QueryContainer } from '@_types/query_dsl/abstractions'

/**
 * Enables searching rolled-up data using the standard Query DSL.
 * @rest_spec_name rollup.rollup_search
 * @availability stack since=6.3.0 stability=experimental
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * Enables searching rolled-up data using the standard Query DSL.
     */
    index: Indices
  }
  query_parameters: {
    rest_total_hits_as_int?: boolean
    typed_keys?: boolean
  }
  body: {
    /**
     * Specifies aggregations.
     * @aliases aggs */
    aggregations?: Dictionary<string, AggregationContainer>
    /**
     * Specifies a DSL query.
     */
    query?: QueryContainer
    /**
     * Must be zero if set, as rollups work on pre-aggregated data.
     */
    size?: integer
  }
}
