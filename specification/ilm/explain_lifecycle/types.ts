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

import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { IndexName, Name, VersionNumber } from '@_types/common'
import { integer } from '@_types/Numeric'
import { DateTime, EpochMillis, TimeSpan } from '@_types/Time'

export class LifecycleExplainManaged {
  action?: Name
  action_time?: DateTime
  action_time_millis?: EpochMillis
  /* `lifecycle_date` as a duration */
  age?: TimeSpan
  failed_step?: Name
  failed_step_retry_count?: integer
  index?: IndexName
  index_creation_date?: DateTime
  index_creation_date_millis?: EpochMillis
  is_auto_retryable_error?: boolean
  lifecycle_date?: DateTime
  lifecycle_date_millis?: EpochMillis
  managed: true
  phase: Name
  phase_time?: DateTime
  phase_time_millis?: EpochMillis
  policy: Name
  step?: Name
  step_info?: Dictionary<string, UserDefinedValue>
  step_time?: DateTime
  step_time_millis?: EpochMillis
  phase_execution?: LifecycleExplainPhaseExecution
  /* `index_creation_date` as a duration */
  time_since_index_creation?: TimeSpan
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
  policy: Name
  version: VersionNumber
  modified_date_in_millis: EpochMillis
}
