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
  ByteSize,
  Id,
  IndexName,
  Name,
  Uuid,
  VersionString
} from '@_types/common'
import { Host, Ip, TransportAddress } from '@_types/Networking'
import { long, Percentage } from '@_types/Numeric'
import {
  DateTime,
  Duration,
  DurationValue,
  EpochTime,
  UnitMillis
} from '@_types/Time'

export class RecoveryBytes {
  percent: Percentage
  recovered?: ByteSize
  recovered_in_bytes: ByteSize
  recovered_from_snapshot?: ByteSize
  recovered_from_snapshot_in_bytes?: ByteSize
  reused?: ByteSize
  reused_in_bytes: ByteSize
  total?: ByteSize
  total_in_bytes: ByteSize
}

export class FileDetails {
  length: long
  name: string
  recovered: long
}

export class RecoveryFiles {
  details?: FileDetails[]
  percent: Percentage
  recovered: long
  reused: long
  total: long
}

export class RecoveryIndexStatus {
  bytes?: RecoveryBytes
  files: RecoveryFiles
  size: RecoveryBytes
  source_throttle_time?: Duration
  source_throttle_time_in_millis: DurationValue<UnitMillis>
  target_throttle_time?: Duration
  target_throttle_time_in_millis: DurationValue<UnitMillis>
  total_time?: Duration
  total_time_in_millis: DurationValue<UnitMillis>
}

export class RecoveryOrigin {
  hostname?: string
  host?: Host
  transport_address?: TransportAddress
  id?: Id
  ip?: Ip
  name?: Name
  bootstrap_new_history_uuid?: boolean
  repository?: Name
  snapshot?: Name
  version?: VersionString
  restoreUUID?: Uuid
  index?: IndexName
}

export class RecoveryStartStatus {
  check_index_time?: Duration
  check_index_time_in_millis: DurationValue<UnitMillis>
  total_time?: Duration
  total_time_in_millis: DurationValue<UnitMillis>
}

export class RecoveryStatus {
  shards: ShardRecovery[]
}

export class TranslogStatus {
  percent: Percentage
  recovered: long
  total: long
  total_on_start: long
  total_time?: Duration
  total_time_in_millis: DurationValue<UnitMillis>
}

export class VerifyIndex {
  check_index_time?: Duration
  check_index_time_in_millis: DurationValue<UnitMillis>
  total_time?: Duration
  total_time_in_millis: DurationValue<UnitMillis>
}

export class ShardRecovery {
  id: long
  index: RecoveryIndexStatus
  primary: boolean
  source: RecoveryOrigin
  stage: string
  start?: RecoveryStartStatus
  start_time?: DateTime
  start_time_in_millis: EpochTime<UnitMillis>
  stop_time?: DateTime
  stop_time_in_millis?: EpochTime<UnitMillis>
  target: RecoveryOrigin
  total_time?: Duration
  total_time_in_millis: DurationValue<UnitMillis>
  translog: TranslogStatus
  type: string
  verify_index: VerifyIndex
}
