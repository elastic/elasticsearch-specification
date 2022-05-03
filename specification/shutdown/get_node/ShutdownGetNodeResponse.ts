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

import { NodeId } from '@_types/common'
import { Time, DateString } from '@_types/Time'

export class Response {
  body: {
    nodes: NodeShutdownStatus[]
  }
}

export class NodeShutdownStatus {
  node_id: NodeId
  type: ShutdownType
  reason: string
  shutdown_startedmillis: Time
  status: ShutdownStatus
  shard_migration: ShardMigrationStatus
  persistent_tasks: PersistentTaskStatus
  plugins: PluginsStatus
}

export enum ShutdownType {
  remove,
  restart
}

export enum ShutdownStatus {
  not_started,
  in_progress,
  stalled,
  complete
}

export class ShardMigrationStatus {
  status: ShutdownStatus
}

export class PersistentTaskStatus {
  status: ShutdownStatus
}

export class PluginsStatus {
  status: ShutdownStatus
}
