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
import { ResponseBase } from '@common/common_abstractions/response/ResponseBase'
import { ScriptField } from '@common/common_options/scripting/ScriptField'
import { Time } from '@common/common_options/time_unit/Time'
import { ChunkingConfig } from '@common/ml/ChunkingConfig'
import { DelayedDataCheckConfig } from '@common/ml/Datafeed'
import { QueryContainer } from '@common/query_dsl/abstractions/container/QueryContainer'
import { Dictionary } from '__spec_utils/Dictionary'
import { DatafeedIndicesOptions } from './DatafeedIndicesOptions'

export class MlUpdateDatafeedResponse extends ResponseBase {
  aggregations?: Dictionary<string, AggregationContainer>
  chunking_config?: ChunkingConfig
  datafeed_id: Id
  frequency?: Time
  indices: Indices
  job_id: Id
  max_empty_searches?: integer
  query: QueryContainer
  query_delay: Time
  script_fields?: Dictionary<string, ScriptField>
  scroll_size: integer
  indices_options: DatafeedIndicesOptions
  delayed_data_check_config: DelayedDataCheckConfig
}
