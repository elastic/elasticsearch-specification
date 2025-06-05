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

import {
  Id,
  IndexName,
  Metadata,
  SequenceNumber,
  VersionNumber
} from '@_types/common'
import { integer } from '@_types/Numeric'
import { DateTime, Duration, DurationValue, UnitMillis } from '@_types/Time'
import { TransformContainer } from '@_types/Transform'
import { Dictionary } from '@spec_utils/Dictionary'
import { Action, Actions } from './Action'
import { ActivationState } from './Activation'
import { ConditionContainer } from './Conditions'
import { InputContainer } from './Input'
import { TriggerContainer } from './Trigger'

export class Watch {
  actions: Dictionary<IndexName, Action>
  condition: ConditionContainer
  input: InputContainer
  metadata?: Metadata
  status?: WatchStatus
  throttle_period?: Duration
  throttle_period_in_millis?: DurationValue<UnitMillis>
  transform?: TransformContainer
  trigger: TriggerContainer
}

export class WatchStatus {
  actions: Actions
  last_checked?: DateTime
  last_met_condition?: DateTime
  state: ActivationState
  version: VersionNumber
  execution_state?: string // TODO find execution states in export enum  in server codebase
}

export class QueryWatch {
  _id: Id
  status?: WatchStatus
  watch?: Watch
  _primary_term?: integer
  _seq_no?: SequenceNumber
}
