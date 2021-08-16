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

import { HttpHeaders, TaskId } from '@_types/common'
import { long } from '@_types/Numeric'
import { Status } from './TaskStatus'

export class State {
  action: string
  cancellable: boolean
  description?: string
  headers: HttpHeaders
  id: long
  node: string
  parent_task_id?: TaskId
  running_time_in_nanos: long
  start_time_in_millis: long
  status?: Status
  type: string
}
