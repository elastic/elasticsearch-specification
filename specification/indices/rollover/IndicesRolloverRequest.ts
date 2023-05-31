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

import { Alias } from '@indices/_types/Alias'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { RequestBase } from '@_types/Base'
import { IndexAlias, IndexName, WaitForActiveShards } from '@_types/common'
import { TypeMapping } from '@_types/mapping/TypeMapping'
import { Duration } from '@_types/Time'
import { RolloverConditions } from './types'

/**
 * @rest_spec_name indices.rollover
 * @availability stack since=5.0.0 stability=stable
 * @availability serverless stability=stable visibility=public
 */
export interface Request extends RequestBase {
  path_parts: {
    alias: IndexAlias
    new_index?: IndexName
  }
  query_parameters: {
    dry_run?: boolean
    master_timeout?: Duration
    timeout?: Duration
    wait_for_active_shards?: WaitForActiveShards
  }
  body: {
    aliases?: Dictionary<IndexName, Alias>
    conditions?: RolloverConditions
    mappings?: TypeMapping
    settings?: Dictionary<string, UserDefinedValue>
  }
}
