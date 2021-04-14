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

import { Id, long, VersionNumber } from '@common/common'
import { RequestBase } from '@common/common_abstractions/request/RequestBase'
import { Action } from '@common/watcher/actions/Action'
import { ConditionContainer } from '@common/watcher/conditions/ConditionContainer'
import { InputContainer } from '@common/watcher/input/InputContainer'
import { TransformContainer } from '@common/watcher/transform/TransformContainer'
import { TriggerContainer } from '@common/watcher/trigger/TriggerContainer'
import { Dictionary } from '__spec_utils/Dictionary'
import { UserDefinedValue } from '__spec_utils/UserDefinedValue'

/**
 * @rest_spec_name watcher.put_watch
 * @since 0.0.0
 * @stability TODO
 */
export interface WatcherPutWatchRequest extends RequestBase {
  path_parts?: {
    id: Id
  }
  query_parameters?: {
    active?: boolean
    if_primary_term?: long
    if_sequence_number?: long
    version?: VersionNumber
  }
  body?: {
    actions?: Dictionary<string, Action>
    condition?: ConditionContainer
    input?: InputContainer
    metadata?: Dictionary<string, UserDefinedValue>
    throttle_period?: string
    transform?: TransformContainer
    trigger?: TriggerContainer
  }
}
