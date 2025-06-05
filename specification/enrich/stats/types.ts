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

import { Id, Name } from '@_types/common'
import { integer, long } from '@_types/Numeric'
import { DurationValue, UnitMillis } from '@_types/Time'
import { TaskInfo } from '@tasks/_types/TaskInfo'

export class ExecutingPolicy {
  name: Name
  task: TaskInfo
}

export class CoordinatorStats {
  executed_searches_total: long
  node_id: Id
  queue_size: integer
  remote_requests_current: integer
  remote_requests_total: long
}

export class CacheStats {
  node_id: Id
  count: integer
  hits: integer
  /* The amount of time in milliseconds spent fetching data from the cache on successful cache hits only. */
  hits_time_in_millis: DurationValue<UnitMillis>
  misses: integer
  /* The amount of time in milliseconds spent fetching data from the enrich index and updating the cache, on cache misses only. */
  misses_time_in_millis: DurationValue<UnitMillis>
  evictions: integer
  /* An _approximation_ of the size in bytes that the enrich cache takes up on the heap. */
  size_in_bytes: long
}
