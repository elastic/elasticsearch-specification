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
import { ResponseBase } from '@common/Base'
import { Id, Indices } from '@common/common'
import { integer } from '@common/Numeric'
import { QueryContainer } from '@common/query_dsl/abstractions/container/QueryContainer'
import { ScriptField } from '@common/Scripting'
import { Time } from '@common/Time'
import { ChunkingConfig } from '@ml/ChunkingConfig'
import { Dictionary } from '@spec_utils/Dictionary'

export class MlPutDatafeedResponse extends ResponseBase {
  aggregations: Dictionary<string, AggregationContainer>
  chunking_config: ChunkingConfig
  datafeed_id: Id
  frequency: Time
  indices: Indices
  job_id: Id
  max_empty_searches: integer
  query: QueryContainer
  query_delay: Time
  script_fields: Dictionary<string, ScriptField>
  scroll_size: integer
}
