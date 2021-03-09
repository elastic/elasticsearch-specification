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
  action_time_millis: DateString
  age: Time
  failed_step: string
  failed_step_retry_count: integer
  index: IndexName
  is_auto_retryable_error: boolean
  lifecycle_date_millis: DateString
  managed: boolean
  phase: string
  phase_time_millis: DateString
  policy: string
  step: string
  step_info: Dictionary<string, UserDefinedValue>
  step_time_millis: DateString
}
