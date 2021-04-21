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

import { RequestBase } from '@common/Base'
import { Id, VersionNumber } from '@common/common'
import { long } from '@common/Numeric'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { Action } from '@watcher/Action'
import { ConditionContainer } from '@watcher/Conditions'
import { InputContainer } from '@watcher/Input'
import { TransformContainer } from '@watcher/Transform'
import { TriggerContainer } from '@watcher/Trigger'

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
