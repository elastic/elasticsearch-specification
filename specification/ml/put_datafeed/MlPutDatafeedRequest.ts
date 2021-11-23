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

import { ChunkingConfig, DelayedDataCheckConfig } from '@ml/_types/Datafeed'
import { Dictionary } from '@spec_utils/Dictionary'
import { AggregationContainer } from '@_types/aggregations/AggregationContainer'
import { RequestBase } from '@_types/Base'
import { ExpandWildcards, Id, Indices, IndicesOptions } from '@_types/common'
import { RuntimeFields } from '@_types/mapping/RuntimeFields'
import { integer } from '@_types/Numeric'
import { QueryContainer } from '@_types/query_dsl/abstractions'
import { ScriptField } from '@_types/Scripting'
import { Time } from '@_types/Time'

/**
 * @rest_spec_name ml.put_datafeed
 * @since 5.4.0
 * @stability stable
 */
export interface Request extends RequestBase {
  path_parts: {
    datafeed_id: Id
  }
  query_parameters: {
    allow_no_indices?: boolean
    expand_wildcards?: ExpandWildcards
    ignore_throttled?: boolean
    ignore_unavailable?: boolean
  }
  body: {
    aggregations?: Dictionary<string, AggregationContainer>
    chunking_config?: ChunkingConfig
    delayed_data_check_config?: DelayedDataCheckConfig
    frequency?: Time
    /** @aliases indexes */
    indices?: string[]
    indices_options?: IndicesOptions
    job_id?: Id
    max_empty_searches?: integer
    query?: QueryContainer
    query_delay?: Time
    runtime_mappings?: RuntimeFields
    script_fields?: Dictionary<string, ScriptField>
    scroll_size?: integer
  }
}
