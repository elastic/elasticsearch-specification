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

import { ByteSize, Id, Name } from '@_types/common'
import { double, integer, long } from '@_types/Numeric'
import { Duration, DurationValue, UnitNanos } from '@_types/Time'

export class Response {
  body: {
    /**
     * The number of blobs written to the repository during the test.
     */
    blob_count: integer
    /**
     * The path in the repository under which all the blobs were written during the test.
     */
    blob_path: string
    /**
     * The number of write operations performed concurrently during the test.
     */
    concurrency: integer
    /**
     * The node that coordinated the analysis and performed the final cleanup.
     */
    coordinating_node: SnapshotNodeInfo
    /**
     * The time it took to delete all the blobs in the container.
     */
    delete_elapsed: Duration
    /**
     * The time it took to delete all the blobs in the container, in nanoseconds.
     */
    delete_elapsed_nanos: DurationValue<UnitNanos>
    /**
     * A description of every read and write operation performed during the test.
     */
    details: DetailsInfo
    /**
     * The limit on the number of nodes on which early read operations were performed after writing each blob.
     */
    early_read_node_count: integer
    /**
     * A list of correctness issues detected, which is empty if the API succeeded.
     * It is included to emphasize that a successful response does not guarantee correct behaviour in future.
     */
    issues_detected: Array<string>
    /**
     * The time it took to retrieve a list of all the blobs in the container.
     */
    listing_elapsed: Duration
    /**
     * The time it took to retrieve a list of all the blobs in the container, in nanoseconds.
     */
    listing_elapsed_nanos: DurationValue<UnitNanos>
    /**
     * The limit on the size of a blob written during the test.
     */
    max_blob_size: ByteSize
    /**
     * The limit, in bytes, on the size of a blob written during the test.
     */
    max_blob_size_bytes: long
    /**
     * The limit on the total size of all blob written during the test.
     */
    max_total_data_size: ByteSize
    /**
     * The limit, in bytes, on the total size of all blob written during the test.
     */
    max_total_data_size_bytes: long
    /**
     * The probability of performing rare actions during the test.
     */
    rare_action_probability: double
    /**
     * The limit on the number of nodes on which read operations were performed after writing each blob.
     */
    read_node_count: integer
    /**
     * The name of the repository that was the subject of the analysis.
     */
    repository: string
    /**
     * The seed for the pseudo-random number generator used to generate the operations used during the test.
     */
    seed: long
    /**
     * A collection of statistics that summarize the results of the test.
     */
    summary: SummaryInfo
  }
}

export class SnapshotNodeInfo {
  id: Id
  name: Name
}

export class ReadSummaryInfo {
  /**
   * The number of read operations performed in the test.
   */
  count: integer
  /**
   * The maximum time spent waiting for the first byte of any read request to be received.
   */
  max_wait: Duration
  /**
   * The maximum time spent waiting for the first byte of any read request to be received, in nanoseconds.
   */
  max_wait_nanos: DurationValue<UnitNanos>
  /**
   * The total elapsed time spent on reading blobs in the test.
   */
  total_elapsed: Duration
  /**
   * The total elapsed time spent on reading blobs in the test, in nanoseconds.
   */
  total_elapsed_nanos: DurationValue<UnitNanos>
  /**
   * The total size of all the blobs or partial blobs read in the test.
   */
  total_size: ByteSize
  /**
   * The total size of all the blobs or partial blobs read in the test, in bytes.
   */
  total_size_bytes: long
  /**
   * The total time spent waiting due to the `max_restore_bytes_per_sec` or `indices.recovery.max_bytes_per_sec` throttles.
   */
  total_throttled: Duration
  /**
   * The total time spent waiting due to the `max_restore_bytes_per_sec` or `indices.recovery.max_bytes_per_sec` throttles, in nanoseconds.
   */
  total_throttled_nanos: DurationValue<UnitNanos>
  /**
   * The total time spent waiting for the first byte of each read request to be received.
   */
  total_wait: Duration
  /**
   * The total time spent waiting for the first byte of each read request to be received, in nanoseconds.
   */
  total_wait_nanos: DurationValue<UnitNanos>
}

export class WriteSummaryInfo {
  /**
   * The number of write operations performed in the test.
   */
  count: integer
  /**
   * The total elapsed time spent on writing blobs in the test.
   */
  total_elapsed: Duration
  /**
   * The total elapsed time spent on writing blobs in the test, in nanoseconds.
   */
  total_elapsed_nanos: DurationValue<UnitNanos>
  /**
   * The total size of all the blobs written in the test.
   */
  total_size: ByteSize
  /**
   * The total size of all the blobs written in the test, in bytes.
   */
  total_size_bytes: long
  /**
   * The total time spent waiting due to the `max_snapshot_bytes_per_sec` throttle.
   */
  total_throttled: Duration
  /**
   * The total time spent waiting due to the `max_snapshot_bytes_per_sec` throttle, in nanoseconds.
   */
  total_throttled_nanos: long
}

export class SummaryInfo {
  /**
   * A collection of statistics that summarise the results of the read operations in the test.
   */
  read: ReadSummaryInfo
  /**
   * A collection of statistics that summarise the results of the write operations in the test.
   */
  write: WriteSummaryInfo
}

export class ReadBlobDetails {
  /**
   * Indicates whether the read operation may have started before the write operation was complete.
   */
  before_write_complete?: boolean
  /**
   * The length of time spent reading the blob.
   * If the blob was not found, this detail is omitted.
   */
  elapsed?: Duration
  /**
   * The length of time spent reading the blob, in nanoseconds.
   * If the blob was not found, this detail is omitted.
   */
  elapsed_nanos?: DurationValue<UnitNanos>
  /**
   * The length of time waiting for the first byte of the read operation to be received.
   * If the blob was not found, this detail is omitted.
   */
  first_byte_time?: Duration
  /**
   * The length of time waiting for the first byte of the read operation to be received, in nanoseconds.
   * If the blob was not found, this detail is omitted.
   */
  first_byte_time_nanos: DurationValue<UnitNanos>
  /**
   * Indicates whether the blob was found by the read operation.
   * If the read was started before the write completed or the write was ended before completion, it might be false.
   */
  found: boolean
  /**
   * The node that performed the read operation.
   */
  node: SnapshotNodeInfo
  /**
   * The length of time spent waiting due to the `max_restore_bytes_per_sec` or `indices.recovery.max_bytes_per_sec` throttles during the read of the blob.
   * If the blob was not found, this detail is omitted.
   */
  throttled?: Duration
  /**
   * The length of time spent waiting due to the `max_restore_bytes_per_sec` or `indices.recovery.max_bytes_per_sec` throttles during the read of the blob, in nanoseconds.
   * If the blob was not found, this detail is omitted.
   */
  throttled_nanos?: DurationValue<UnitNanos>
}

export class BlobDetails {
  /**
   * The name of the blob.
   */
  name: string
  /**
   * Indicates whether the blob was overwritten while the read operations were ongoing.
  /**
   */
  overwritten: boolean
  /*
   * Indicates whether any read operations were started before the write operation completed.
   */
  read_early: boolean
  /**
   * The position, in bytes, at which read operations completed.
   */
  read_end: long
  /**
   * The position, in bytes, at which read operations started.
   */
  read_start: long
  /**
   * A description of every read operation performed on the blob.
   */
  reads: ReadBlobDetails
  /**
   * The size of the blob.
   */
  size: ByteSize
  /**
   * The size of the blob in bytes.
   */
  size_bytes: long
}

export class DetailsInfo {
  /**
   * A description of the blob that was written and read.
   */
  blob: BlobDetails
  /**
   * The elapsed time spent overwriting the blob.
   * If the blob was not overwritten, this information is omitted.
   */
  overwrite_elapsed?: Duration
  /**
   * The elapsed time spent overwriting the blob, in nanoseconds.
   * If the blob was not overwritten, this information is omitted.
   */
  overwrite_elapsed_nanos?: DurationValue<UnitNanos>
  /**
   * The elapsed time spent writing the blob.
   */
  write_elapsed: Duration
  /**
   * The elapsed time spent writing the blob, in nanoseconds.
   */
  write_elapsed_nanos: DurationValue<UnitNanos>
  /**
   * The length of time spent waiting for the `max_snapshot_bytes_per_sec` (or `indices.recovery.max_bytes_per_sec` if the recovery settings for managed services are set) throttle while writing the blob.
   */
  write_throttled: Duration
  /**
   * The length of time spent waiting for the `max_snapshot_bytes_per_sec` (or `indices.recovery.max_bytes_per_sec` if the recovery settings for managed services are set) throttle while writing the blob, in nanoseconds.
   */
  write_throttled_nanos: DurationValue<UnitNanos>
  /**
   * The node which wrote the blob and coordinated the read operations.
   */
  writer_node: SnapshotNodeInfo
}
