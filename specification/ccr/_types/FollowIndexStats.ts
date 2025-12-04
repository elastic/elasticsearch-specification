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
  IndexName,
  SequenceNumber,
  VersionNumber
} from '@_types/common'
import { ErrorCause } from '@_types/Errors'
import { integer, long } from '@_types/Numeric'
import { Duration, DurationValue, UnitMillis } from '@_types/Time'

export class FollowIndexStats {
  /** The name of the follower index. */
  index: IndexName
  /** An array of shard-level following task statistics. */
  shards: ShardStats[]
}

export class ShardStats {
  /**
   * The total of transferred bytes read from the leader.
   * This is only an estimate and does not account for compression if enabled.
   */
  bytes_read: long
  /** The number of failed reads. */
  failed_read_requests: long
  /** The number of failed bulk write requests on the follower. */
  failed_write_requests: long
  fatal_exception?: ErrorCause
  /** The index aliases version the follower is synced up to. */
  follower_aliases_version: VersionNumber
  /**
   * The current global checkpoint on the follower.
   * The difference between the `leader_global_checkpoint` and the `follower_global_checkpoint` is an indication of how much the follower is lagging the leader.
   */
  follower_global_checkpoint: long
  /** The name of the follower index. */
  follower_index: string
  /** The mapping version the follower is synced up to. */
  follower_mapping_version: VersionNumber
  /** The current maximum sequence number on the follower. */
  follower_max_seq_no: SequenceNumber
  /** The index settings version the follower is synced up to. */
  follower_settings_version: VersionNumber
  /** The starting sequence number of the last batch of operations requested from the leader. */
  last_requested_seq_no: SequenceNumber
  /** The current global checkpoint on the leader known to the follower task. */
  leader_global_checkpoint: long
  /** The name of the index in the leader cluster being followed. */
  leader_index: string
  /** The current maximum sequence number on the leader known to the follower task. */
  leader_max_seq_no: SequenceNumber
  /** The total number of operations read from the leader. */
  operations_read: long
  /** The number of operations written on the follower. */
  operations_written: long
  /** The number of active read requests from the follower. */
  outstanding_read_requests: integer
  /** The number of active bulk write requests on the follower. */
  outstanding_write_requests: integer
  /** An array of objects representing failed reads. */
  read_exceptions: ReadException[]
  /** The remote cluster containing the leader index. */
  remote_cluster: string
  /** The numerical shard ID, with values from 0 to one less than the number of replicas. */
  shard_id: integer
  /** The number of successful fetches. */
  successful_read_requests: long
  /** The number of bulk write requests run on the follower.*/
  successful_write_requests: long
  time_since_last_read?: Duration
  /**
   * The number of milliseconds since a read request was sent to the leader.
   * When the follower is caught up to the leader, this number will increase up to the configured `read_poll_timeout` at which point another read request will be sent to the leader.
   */
  time_since_last_read_millis: DurationValue<UnitMillis>
  total_read_remote_exec_time?: Duration
  /** The total time reads spent running on the remote cluster. */
  total_read_remote_exec_time_millis: DurationValue<UnitMillis>
  total_read_time?: Duration
  /**
   * The total time reads were outstanding, measured from the time a read was sent to the leader to the time a reply was returned to the follower.
   */
  total_read_time_millis: DurationValue<UnitMillis>
  total_write_time?: Duration
  /** The total time spent writing on the follower. */
  total_write_time_millis: DurationValue<UnitMillis>
  /** The number of write operations queued on the follower. */
  write_buffer_operation_count: long
  /** The total number of bytes of operations currently queued for writing. */
  write_buffer_size_in_bytes: ByteSize
}

export class ReadException {
  /** The exception that caused the read to fail. */
  exception: ErrorCause
  /** The starting sequence number of the batch requested from the leader. */
  from_seq_no: SequenceNumber
  /** The number of times the batch has been retried. */
  retries: integer
}
