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
  EpochMillis,
  IndexName,
  integer,
  Name,
  VersionNumber
} from '../../__common/common'
import { Time } from '../../__common/common_options/time_unit/Time'
import { Dictionary } from '../../__spec_utils/Dictionary'
import { UserDefinedValue } from '../../__spec_utils/UserDefinedValue'

export class LifecycleExplain {
  action: Name
  action_time_millis: EpochMillis
  age: Time
  failed_step?: Name
  failed_step_retry_count?: integer
  index: IndexName
  is_auto_retryable_error?: boolean
  lifecycle_date_millis: EpochMillis
  managed: boolean
  phase: Name
  phase_time_millis: EpochMillis
  policy: Name
  step: Name
  step_info?: Dictionary<string, UserDefinedValue>
  step_time_millis: EpochMillis
  phase_execution: LifecycleExplainPhaseExecution
}

export class LifecycleExplainPhaseExecution {
  policy: Name
  version: VersionNumber
  modified_date_in_millis: EpochMillis
}
