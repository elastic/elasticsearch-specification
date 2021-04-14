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

import { EpochMillis } from '@common/common'
import { Time } from '@common/common_options/time_unit/Time'
import { RecoveryBytes } from './RecoveryBytes'
import { RecoveryFiles } from './RecoveryFiles'

export class RecoveryIndexStatus {
  bytes?: RecoveryBytes
  files: RecoveryFiles
  size: RecoveryBytes
  source_throttle_time?: Time
  source_throttle_time_in_millis: EpochMillis
  target_throttle_time?: Time
  target_throttle_time_in_millis: EpochMillis
  total_time_in_millis: EpochMillis
  total_time?: Time
}
