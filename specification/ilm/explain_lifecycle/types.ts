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

import { IndexName, Name, VersionNumber } from '@_types/common'
import { integer } from '@_types/Numeric'
import { DateTime, Duration, EpochTime, UnitMillis } from '@_types/Time'
import { Phase } from '@ilm/_types/Phase'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

export class LifecycleExplainManaged {
  action?: Name
  action_time?: DateTime
  action_time_millis?: EpochTime<UnitMillis>
  /* `lifecycle_date` as a duration */
  age?: Duration
  failed_step?: Name
  failed_step_retry_count?: integer
  index: IndexName
  index_creation_date?: DateTime
  index_creation_date_millis?: EpochTime<UnitMillis>
  is_auto_retryable_error?: boolean
  lifecycle_date?: DateTime
  lifecycle_date_millis?: EpochTime<UnitMillis>
  managed: true
  phase?: Name
  phase_time?: DateTime
  phase_time_millis?: EpochTime<UnitMillis>
  policy?: Name
  previous_step_info?: Dictionary<string, UserDefinedValue>
  repository_name?: string
  snapshot_name?: string
  shrink_index_name?: string
  step?: Name
  step_info?: Dictionary<string, UserDefinedValue>
  step_time?: DateTime
  step_time_millis?: EpochTime<UnitMillis>
  phase_execution?: LifecycleExplainPhaseExecution
  /* `index_creation_date` as a duration */
  time_since_index_creation?: Duration
}

export class LifecycleExplainUnmanaged {
  index: IndexName
  managed: false
}

/** @variants internal tag='managed' */
export type LifecycleExplain =
  | LifecycleExplainManaged
  | LifecycleExplainUnmanaged

export class LifecycleExplainPhaseExecution {
  phase_definition?: Phase
  policy: Name
  version: VersionNumber
  modified_date_in_millis: EpochTime<UnitMillis>
}
