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

import { HealthStatus } from '@_types/common'
import { integer } from '@_types/Numeric'
import { Dictionary } from '@spec_utils/Dictionary'

export class IndexHealthStats {
  active_primary_shards: integer
  active_shards: integer
  initializing_shards: integer
  number_of_replicas: integer
  number_of_shards: integer
  relocating_shards: integer
  shards?: Dictionary<string, ShardHealthStats>
  status: HealthStatus
  unassigned_shards: integer
  unassigned_primary_shards: integer
}

export class ShardHealthStats {
  active_shards: integer
  initializing_shards: integer
  primary_active: boolean
  relocating_shards: integer
  status: HealthStatus
  unassigned_shards: integer
  unassigned_primary_shards: integer
}

export type WaitForNodes = string | integer
