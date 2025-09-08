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

import { AggregationContainer } from '@_types/aggregations/AggregationContainer'
import { Id, IndicesOptions } from '@_types/common'
import { RuntimeFields } from '@_types/mapping/RuntimeFields'
import { integer } from '@_types/Numeric'
import { QueryContainer } from '@_types/query_dsl/abstractions'
import { ScriptField } from '@_types/Scripting'
import { Duration } from '@_types/Time'
import { DatafeedAuthorization } from '@ml/_types/Authorization'
import { ChunkingConfig, DelayedDataCheckConfig } from '@ml/_types/Datafeed'
import { Dictionary } from '@spec_utils/Dictionary'

export class Response {
  body: {
    authorization?: DatafeedAuthorization
    aggregations?: Dictionary<string, AggregationContainer>
    chunking_config: ChunkingConfig
    delayed_data_check_config?: DelayedDataCheckConfig
    datafeed_id: Id
    /**
    * The interval at which scheduled queries are made while the datafeed runs in real time. The default value is either the bucket span for short bucket spans, or, for longer bucket spans, a sensible fraction of the bucket span. For example: `150s`. When `frequency` is shorter than the bucket span, interim results for the last (partial) bucket are written then eventually overwritten by the full bucket results. If the datafeed uses aggregations, this value must be divisible by the interval of the date histogram aggregation.
    */
    frequency?: Duration
    indices: string[]
    indices_options?: IndicesOptions
    job_id: Id
    max_empty_searches?: integer
    query: QueryContainer
    query_delay: Duration
    runtime_mappings?: RuntimeFields
    script_fields?: Dictionary<string, ScriptField>
    scroll_size: integer
  }
}
