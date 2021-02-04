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

class LifecycleExplain {
  action: string
  /** @prop_serializer DateTimeOffsetEpochMillisecondsFormatter */
  action_time_millis: Date
  age: Time
  failed_step: string
  failed_step_retry_count: integer
  index: IndexName
  is_auto_retryable_error: boolean
  /** @prop_serializer DateTimeOffsetEpochMillisecondsFormatter */
  lifecycle_date_millis: Date
  managed: boolean
  phase: string
  /** @prop_serializer DateTimeOffsetEpochMillisecondsFormatter */
  phase_time_millis: Date
  policy: string
  step: string
  step_info: Dictionary<string, UserDefinedValue>
  /** @prop_serializer DateTimeOffsetEpochMillisecondsFormatter */
  step_time_millis: Date
}
