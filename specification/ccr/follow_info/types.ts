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

import { IndexName, Name } from '@_types/common'

export class FollowerIndex {
  follower_index: IndexName
  leader_index: IndexName
  parameters?: FollowerIndexParameters
  remote_cluster: Name
  status: FollowerIndexStatus
}

export enum FollowerIndexStatus {
  active = 0,
  paused = 1
}

import { integer } from '@_types/Numeric'
import { Duration } from '@_types/Time'

export class FollowerIndexParameters {
  max_outstanding_read_requests: integer
  max_outstanding_write_requests: integer
  max_read_request_operation_count: integer
  max_read_request_size: string
  max_retry_delay: Duration
  max_write_buffer_count: integer
  max_write_buffer_size: string
  max_write_request_operation_count: integer
  max_write_request_size: string
  read_poll_timeout: Duration
}
