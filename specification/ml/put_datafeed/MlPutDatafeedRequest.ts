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

import { AggregationContainer } from '@common/aggregations/AggregationContainer'
import { Id, Indices, integer } from '@common/common'
import { ExpandWildcards } from '@common/common/ExpandWildcards'
import { RequestBase } from '@common/common_abstractions/request/RequestBase'
import { ScriptField } from '@common/common_options/scripting/ScriptField'
import { Time } from '@common/common_options/time_unit/Time'
import { ChunkingConfig } from '@common/ml/ChunkingConfig'
import { QueryContainer } from '@common/query_dsl/abstractions/container/QueryContainer'
import { Dictionary } from '__spec_utils/Dictionary'

/**
 * @rest_spec_name ml.put_datafeed
 * @since 5.4.0
 * @stability TODO
 */
export interface MlPutDatafeedRequest extends RequestBase {
  path_parts: {
    datafeed_id: Id
  }
  query_parameters?: {
    allow_no_indices?: boolean
    expand_wildcards?: ExpandWildcards
    ignore_throttled?: boolean
    ignore_unavailable?: boolean
  }
  body?: {
    aggregations?: Dictionary<string, AggregationContainer>
    chunking_config?: ChunkingConfig
    frequency?: Time
    indices?: Indices
    indexes?: string[]
    job_id?: Id
    max_empty_searches?: integer
    query?: QueryContainer
    query_delay?: Time
    script_fields?: Dictionary<string, ScriptField>
    scroll_size?: integer
  }
}
