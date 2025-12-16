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

import { ByteSize, Field, Name } from '@_types/common'
import { Host, Ip, TransportAddress } from '@_types/Networking'
import { NodeRoles } from '@_types/Node'
import { double, float, integer, long } from '@_types/Numeric'
import { Duration, DurationValue, UnitMillis, UnitNanos } from '@_types/Time'
import { ShardStats } from '@indices/stats/types'
import { Dictionary } from '@spec_utils/Dictionary'

// The node stats response can be filtered both by `metric` and `filter_path`,
// every property needs to be optional to be compliant with the API behavior.
export class Stats {
  /**
   * Statistics about adaptive replica selection.
   */
  adaptive_selection?: Dictionary<string, AdaptiveSelection>
  /**
   * Statistics about the field data circuit breaker.
   */
  breakers?: Dictionary<string, Breaker>
  /**
   * File system information, data path, free disk space, read/write stats.
   */
  fs?: FileSystem
  /**
   * Network host for the node, based on the network host setting.
   */
  host?: Host
  /**
   * HTTP connection information.
   */
  http?: Http
  /**
   * Statistics about ingest preprocessing.
   */
  ingest?: Ingest
  /**
   * IP address and port for the node.
   */
  ip?: Ip | Ip[]
  /**
   * JVM stats, memory pool information, garbage collection, buffer pools, number of loaded/unloaded classes.
   */
  jvm?: Jvm
  /**
   * Human-readable identifier for the node.
   * Based on the node name setting.
   */
  name?: Name
  /**
   * Operating system stats, load average, mem, swap.
   */
  os?: OperatingSystem
  /**
   * Process statistics, memory consumption, cpu usage, open file descriptors.
   */
  process?: Process
  /**
   * Roles assigned to the node.
   */
  roles?: NodeRoles
  /**
   * Contains script statistics for the node.
   */
  script?: Scripting
  script_cache?: Dictionary<string, ScriptCache | ScriptCache[]>
  /**
   * Statistics about each thread pool, including current size, queue and rejected tasks.
   */
  thread_pool?: Dictionary<string, ThreadCount>
  timestamp?: long
  /**
   * Transport statistics about sent and received bytes in cluster communication.
   */
  transport?: Transport
  /**
   * Host and port for the transport layer, used for internal communication between nodes in a cluster.
   */
  transport_address?: TransportAddress
  /**
   * Contains a list of attributes for the node.
   */
  attributes?: Dictionary<Field, string>
  /**
   * Contains node discovery statistics for the node.
   */
  discovery?: Discovery
  /**
   * Contains indexing pressure statistics for the node.
   */
  indexing_pressure?: IndexingPressure
  /**
   * Indices stats about size, document count, indexing and deletion times, search times, field cache size, merges and flushes.
   */
  indices?: ShardStats
}

export class IndexingPressure {
  /**
   * Contains statistics for memory consumption from indexing load.
   */
  memory?: IndexingPressureMemory
}

export class IndexingPressureMemory {
  /**
   * Configured memory limit for the indexing requests.
   * Replica requests have an automatic limit that is 1.5x this value.
   */
  limit?: ByteSize
  /**
   * Configured memory limit, in bytes, for the indexing requests.
   * Replica requests have an automatic limit that is 1.5x this value.
   */
  limit_in_bytes?: long
  /**
   * Contains statistics for current indexing load.
   */
  current?: PressureMemory
  /**
   * Contains statistics for the cumulative indexing load since the node started.
   */
  total?: PressureMemory
}

export interface PressureMemory {
  /**
   * Memory consumed by indexing requests in the coordinating, primary, or replica stage.
   */
  all?: ByteSize
  /**
   * Memory consumed, in bytes, by indexing requests in the coordinating, primary, or replica stage.
   */
  all_in_bytes?: long
  /**
   * Memory consumed by indexing requests in the coordinating or primary stage.
   * This value is not the sum of coordinating and primary as a node can reuse the coordinating memory if the primary stage is executed locally.
   */
  combined_coordinating_and_primary?: ByteSize
  /**
   * Memory consumed, in bytes, by indexing requests in the coordinating or primary stage.
   * This value is not the sum of coordinating and primary as a node can reuse the coordinating memory if the primary stage is executed locally.
   */
  combined_coordinating_and_primary_in_bytes?: long
  /**
   * Memory consumed by indexing requests in the coordinating stage.
   */
  coordinating?: ByteSize
  /**
   * Memory consumed, in bytes, by indexing requests in the coordinating stage.
   */
  coordinating_in_bytes?: long
  /**
   * Memory consumed by indexing requests in the primary stage.
   */
  primary?: ByteSize
  /**
   * Memory consumed, in bytes, by indexing requests in the primary stage.
   */
  primary_in_bytes?: long
  /**
   * Memory consumed by indexing requests in the replica stage.
   */
  replica?: ByteSize
  /**
   * Memory consumed, in bytes, by indexing requests in the replica stage.
   */
  replica_in_bytes?: long
  /**
   * Number of indexing requests rejected in the coordinating stage.
   */
  coordinating_rejections?: long
  /**
   * Number of indexing requests rejected in the primary stage.
   */
  primary_rejections?: long
  /**
   * Number of indexing requests rejected in the replica stage.
   */
  replica_rejections?: long
  primary_document_rejections?: long
  large_operation_rejections?: long
}

export class Discovery {
  /**
   * Contains statistics for the cluster state queue of the node.
   */
  cluster_state_queue?: ClusterStateQueue
  /**
   * Contains statistics for the published cluster states of the node.
   */
  published_cluster_states?: PublishedClusterStates
  /**
   * Contains low-level statistics about how long various activities took during cluster state updates while the node was the elected master.
   * Omitted if the node is not master-eligible.
   * Every field whose name ends in `_time` within this object is also represented as a raw number of milliseconds in a field whose name ends in `_time_millis`.
   * The human-readable fields with a `_time` suffix are only returned if requested with the `?human=true` query parameter.
   */
  cluster_state_update?: Dictionary<string, ClusterStateUpdate>
  serialized_cluster_states?: SerializedClusterState
  cluster_applier_stats?: ClusterAppliedStats
}

export class ClusterAppliedStats {
  recordings?: Recording[]
}

export class Recording {
  name?: string
  cumulative_execution_count?: long
  cumulative_execution_time?: Duration
  cumulative_execution_time_millis?: DurationValue<UnitMillis>
}

export class SerializedClusterState {
  /**
   * Number of published cluster states.
   */
  full_states?: SerializedClusterStateDetail
  diffs?: SerializedClusterStateDetail
}

export class SerializedClusterStateDetail {
  count?: long
  uncompressed_size?: string
  uncompressed_size_in_bytes?: long
  compressed_size?: string
  compressed_size_in_bytes?: long
}

export class ClusterStateQueue {
  /**
   * Total number of cluster states in queue.
   */
  total?: long
  /**
   * Number of pending cluster states in queue.
   */
  pending?: long
  /**
   * Number of committed cluster states in queue.
   */
  committed?: long
}

export class PublishedClusterStates {
  /**
   * Number of published cluster states.
   */
  full_states?: long
  /**
   * Number of incompatible differences between published cluster states.
   */
  incompatible_diffs?: long
  /**
   * Number of compatible differences between published cluster states.
   */
  compatible_diffs?: long
}

export class ClusterStateUpdate {
  /**
   * The number of cluster state update attempts that did not change the cluster state since the node started.
   */
  count: long
  /**
   * The cumulative amount of time spent computing no-op cluster state updates since the node started.
   */
  computation_time?: Duration
  /**
   * The cumulative amount of time, in milliseconds, spent computing no-op cluster state updates since the node started.
   */
  computation_time_millis?: DurationValue<UnitMillis>
  /**
   * The cumulative amount of time spent publishing cluster state updates which ultimately succeeded, which includes everything from the start of the publication (just after the computation of the new cluster state) until the publication has finished and the master node is ready to start processing the next state update.
   * This includes the time measured by `context_construction_time`, `commit_time`, `completion_time` and `master_apply_time`.
   */
  publication_time?: Duration
  /**
   * The cumulative amount of time, in milliseconds, spent publishing cluster state updates which ultimately succeeded, which includes everything from the start of the publication (just after the computation of the new cluster state) until the publication has finished and the master node is ready to start processing the next state update.
   * This includes the time measured by `context_construction_time`, `commit_time`, `completion_time` and `master_apply_time`.
   */
  publication_time_millis?: DurationValue<UnitMillis>
  /**
   * The cumulative amount of time spent constructing a publication context since the node started for publications that ultimately succeeded.
   * This statistic includes the time spent computing the difference between the current and new cluster state preparing a serialized representation of this difference.
   */
  context_construction_time?: Duration
  /**
   * The cumulative amount of time, in milliseconds, spent constructing a publication context since the node started for publications that ultimately succeeded.
   * This statistic includes the time spent computing the difference between the current and new cluster state preparing a serialized representation of this difference.
   */
  context_construction_time_millis?: DurationValue<UnitMillis>
  /**
   * The cumulative amount of time spent waiting for a successful cluster state update to commit, which measures the time from the start of each publication until a majority of the master-eligible nodes have written the state to disk and confirmed the write to the elected master.
   */
  commit_time?: Duration
  /**
   * The cumulative amount of time, in milliseconds, spent waiting for a successful cluster state update to commit, which measures the time from the start of each publication until a majority of the master-eligible nodes have written the state to disk and confirmed the write to the elected master.
   */
  commit_time_millis?: DurationValue<UnitMillis>
  /**
   * The cumulative amount of time spent waiting for a successful cluster state update to complete, which measures the time from the start of each publication until all the other nodes have notified the elected master that they have applied the cluster state.
   */
  completion_time?: Duration
  /**
   * The cumulative amount of time, in milliseconds,  spent waiting for a successful cluster state update to complete, which measures the time from the start of each publication until all the other nodes have notified the elected master that they have applied the cluster state.
   */
  completion_time_millis?: DurationValue<UnitMillis>
  /**
   * The cumulative amount of time spent successfully applying cluster state updates on the elected master since the node started.
   */
  master_apply_time?: Duration
  /**
   * The cumulative amount of time, in milliseconds, spent successfully applying cluster state updates on the elected master since the node started.
   */
  master_apply_time_millis?: DurationValue<UnitMillis>
  /**
   * The cumulative amount of time spent notifying listeners of a no-op cluster state update since the node started.
   */
  notification_time?: Duration
  /**
   * The cumulative amount of time, in milliseconds, spent notifying listeners of a no-op cluster state update since the node started.
   */
  notification_time_millis?: DurationValue<UnitMillis>
}

export class Ingest {
  /**
   * Contains statistics about ingest pipelines for the node.
   */
  pipelines?: Dictionary<string, IngestStats>
  /**
   * Contains statistics about ingest operations for the node.
   */
  total?: IngestTotal
}

export class IngestStats {
  /**
   * Total number of documents ingested during the lifetime of this node.
   */
  count: long
  /**
   * Total number of documents currently being ingested.
   */
  current: long
  /**
   * Total number of failed ingest operations during the lifetime of this node.
   */
  failed: long
  /**
   * Total number of ingest processors.
   */
  processors: Dictionary<string, KeyedProcessor>[]
  /**
   * Total time, in milliseconds, spent preprocessing ingest documents during the lifetime of this node.
   */
  time_in_millis: DurationValue<UnitMillis>
  /**
   * Total number of bytes of all documents ingested by the pipeline.
   * This field is only present on pipelines which are the first to process a document.
   * Thus, it is not present on pipelines which only serve as a final pipeline after a default pipeline, a pipeline run after a reroute processor, or pipelines in pipeline processors.
   * @availability stack since=8.15.0 stability=stable
   * @availability serverless
   */
  ingested_as_first_pipeline_in_bytes: long
  /**
   * Total number of bytes of all documents produced by the pipeline.
   * This field is only present on pipelines which are the first to process a document.
   * Thus, it is not present on pipelines which only serve as a final pipeline after a default pipeline, a pipeline run after a reroute processor, or pipelines in pipeline processors.
   * In situations where there are subsequent pipelines, the value represents the size of the document after all pipelines have run.
   * @availability stack since=8.15.0 stability=stable
   * @availability serverless
   */
  produced_as_first_pipeline_in_bytes: long
}

export class IngestTotal {
  /**
   * Total number of documents ingested during the lifetime of this node.
   */
  count: long
  /**
   * Total number of documents currently being ingested.
   */
  current: long
  /**
   * Total number of failed ingest operations during the lifetime of this node.
   */
  failed: long
  /**
   * Total time, in milliseconds, spent preprocessing ingest documents during the lifetime of this node.
   */
  time_in_millis: DurationValue<UnitMillis>
}

export class KeyedProcessor {
  stats?: Processor
  type?: string
}

export class Processor {
  /**
   * Number of documents transformed by the processor.
   */
  count?: long
  /**
   * Number of documents currently being transformed by the processor.
   */
  current?: long
  /**
   * Number of failed operations for the processor.
   */
  failed?: long
  /**
   * Time, in milliseconds, spent by the processor transforming documents.
   */
  time_in_millis?: DurationValue<UnitMillis>
}

export class AdaptiveSelection {
  /**
   * The exponentially weighted moving average queue size of search requests on the keyed node.
   */
  avg_queue_size?: long
  /**
   * The exponentially weighted moving average response time of search requests on the keyed node.
   */
  avg_response_time?: Duration
  /**
   * The exponentially weighted moving average response time, in nanoseconds, of search requests on the keyed node.
   */
  avg_response_time_ns?: long
  /**
   * The exponentially weighted moving average service time of search requests on the keyed node.
   */
  avg_service_time?: Duration
  /**
   * The exponentially weighted moving average service time, in nanoseconds, of search requests on the keyed node.
   */
  avg_service_time_ns?: long
  /**
   * The number of outstanding search requests to the keyed node from the node these stats are for.
   */
  outgoing_searches?: long
  /**
   * The rank of this node; used for shard selection when routing search requests.
   */
  rank?: string
}

export class Breaker {
  /**
   * Estimated memory used for the operation.
   */
  estimated_size?: string
  /**
   * Estimated memory used, in bytes, for the operation.
   */
  estimated_size_in_bytes?: long
  /**
   * Memory limit for the circuit breaker.
   */
  limit_size?: string
  /**
   * Memory limit, in bytes, for the circuit breaker.
   */
  limit_size_in_bytes?: long
  /**
   * A constant that all estimates for the circuit breaker are multiplied with to calculate a final estimate.
   */
  overhead?: float
  /**
   * Total number of times the circuit breaker has been triggered and prevented an out of memory error.
   */
  tripped?: float
}

export class Cgroup {
  /**
   * Contains statistics about `cpuacct` control group for the node.
   */
  cpuacct?: CpuAcct
  /**
   * Contains statistics about `cpu` control group for the node.
   */
  cpu?: CgroupCpu
  /**
   * Contains statistics about the memory control group for the node.
   */
  memory?: CgroupMemory
}

export class CpuAcct {
  /**
   * The `cpuacct` control group to which the Elasticsearch process belongs.
   */
  control_group?: string
  /**
   * The total CPU time, in nanoseconds, consumed by all tasks in the same cgroup as the Elasticsearch process.
   */
  usage_nanos?: DurationValue<UnitNanos>
}

export class CgroupCpu {
  /**
   * The `cpu` control group to which the Elasticsearch process belongs.
   */
  control_group?: string
  /**
   * The period of time, in microseconds, for how regularly all tasks in the same cgroup as the Elasticsearch process should have their access to CPU resources reallocated.
   */
  cfs_period_micros?: integer
  /**
   * The total amount of time, in microseconds, for which all tasks in the same cgroup as the Elasticsearch process can run during one period `cfs_period_micros`.
   */
  cfs_quota_micros?: integer
  /**
   * Contains CPU statistics for the node.
   */
  stat?: CgroupCpuStat
}

export class CgroupCpuStat {
  /**
   * The number of reporting periods (as specified by `cfs_period_micros`) that have elapsed.
   */
  number_of_elapsed_periods?: long
  /**
   * The number of times all tasks in the same cgroup as the Elasticsearch process have been throttled.
   */
  number_of_times_throttled?: long
  /**
   * The total amount of time, in nanoseconds, for which all tasks in the same cgroup as the Elasticsearch process have been throttled.
   */
  time_throttled_nanos?: DurationValue<UnitNanos>
}

export class CgroupMemory {
  /**
   * The `memory` control group to which the Elasticsearch process belongs.
   */
  control_group?: string
  /**
   * The maximum amount of user memory (including file cache) allowed for all tasks in the same cgroup as the Elasticsearch process.
   * This value can be too big to store in a `long`, so is returned as a string so that the value returned can exactly match what the underlying operating system interface returns.
   * Any value that is too large to parse into a `long` almost certainly means no limit has been set for the cgroup.
   */
  limit_in_bytes?: string
  /**
   * The total current memory usage by processes in the cgroup, in bytes, by all tasks in the same cgroup as the Elasticsearch process.
   * This value is stored as a string for consistency with `limit_in_bytes`.
   */
  usage_in_bytes?: string
}

export class Cpu {
  percent?: integer
  sys?: Duration
  sys_in_millis?: DurationValue<UnitMillis>
  total?: Duration
  total_in_millis?: DurationValue<UnitMillis>
  user?: Duration
  user_in_millis?: DurationValue<UnitMillis>
  load_average?: Dictionary<string, double>
}

export class DataPathStats {
  /**
   * Total amount of disk space available to this Java virtual machine on this file store.
   */
  available?: string
  /**
   * Total number of bytes available to this Java virtual machine on this file store.
   */
  available_in_bytes?: long
  disk_queue?: string
  disk_reads?: long
  disk_read_size?: string
  disk_read_size_in_bytes?: long
  disk_writes?: long
  disk_write_size?: string
  disk_write_size_in_bytes?: long
  /**
   * Total amount of unallocated disk space in the file store.
   */
  free?: string
  /**
   * Total number of unallocated bytes in the file store.
   */
  free_in_bytes?: long
  /**
   * Mount point of the file store (for example: `/dev/sda2`).
   */
  mount?: string
  /**
   * Path to the file store.
   */
  path?: string
  /**
   * Total size of the file store.
   */
  total?: string
  /**
   * Total size of the file store in bytes.
   */
  total_in_bytes?: long
  /**
   * Type of the file store (ex: ext4).
   */
  type?: string
}

export class MemoryStats {
  /**
   * If the amount of physical memory has been overridden using the `es`.`total_memory_bytes` system property then this reports the overridden value in bytes.
   * Otherwise it reports the same value as `total_in_bytes`.
   */
  adjusted_total_in_bytes?: long
  resident?: string
  resident_in_bytes?: long
  share?: string
  share_in_bytes?: long
  total_virtual?: string
  total_virtual_in_bytes?: long
  /**
   * Total amount of physical memory in bytes.
   */
  total_in_bytes?: long
  /**
   * Amount of free physical memory in bytes.
   */
  free_in_bytes?: long
  /**
   * Amount of used physical memory in bytes.
   */
  used_in_bytes?: long
}

export class ExtendedMemoryStats extends MemoryStats {
  /**
   * Percentage of free memory.
   */
  free_percent?: integer
  /**
   * Percentage of used memory.
   */
  used_percent?: integer
}

export class Http {
  /**
   * Current number of open HTTP connections for the node.
   */
  current_open?: integer
  /**
   * Total number of HTTP connections opened for the node.
   */
  total_opened?: long
  /**
   * Information on current and recently-closed HTTP client connections.
   * Clients that have been closed longer than the `http.client_stats.closed_channels.max_age` setting will not be represented here.
   */
  clients?: Client[]
  /**
   * Detailed HTTP stats broken down by route
   * @availability stack since=8.12.0 stability=stable
   */
  routes: Dictionary<string, HttpRoute>
}

export class HttpRoute {
  requests: HttpRouteRequests
  responses: HttpRouteResponses
}

export class HttpRouteRequests {
  count: long
  total_size_in_bytes: long
  size_histogram: SizeHttpHistogram[]
}

export class HttpRouteResponses {
  count: long
  total_size_in_bytes: long
  handling_time_histogram: TimeHttpHistogram[]
  size_histogram: SizeHttpHistogram[]
}

export class TimeHttpHistogram {
  count: long
  ge_millis?: long
  lt_millis?: long
}

export class SizeHttpHistogram {
  count: long
  ge_bytes?: long
  lt_bytes?: long
}

export class Client {
  /**
   * Unique ID for the HTTP client.
   */
  id?: long
  /**
   * Reported agent for the HTTP client.
   * If unavailable, this property is not included in the response.
   */
  agent?: string
  /**
   * Local address for the HTTP connection.
   */
  local_address?: string
  /**
   * Remote address for the HTTP connection.
   */
  remote_address?: string
  /**
   * The URI of the client’s most recent request.
   */
  last_uri?: string
  /**
   * Time at which the client opened the connection.
   */
  opened_time_millis?: long
  /**
   * Time at which the client closed the connection if the connection is closed.
   */
  closed_time_millis?: long
  /**
   * Time of the most recent request from this client.
   */
  last_request_time_millis?: long
  /**
   * Number of requests from this client.
   */
  request_count?: long
  /**
   * Cumulative size in bytes of all requests from this client.
   */
  request_size_bytes?: long
  /**
   * Value from the client’s `x-opaque-id` HTTP header.
   * If unavailable, this property is not included in the response.
   */
  x_opaque_id?: string
}

export class FileSystem {
  /**
   * List of all file stores.
   */
  data?: DataPathStats[]
  /**
   * Last time the file stores statistics were refreshed.
   * Recorded in milliseconds since the Unix Epoch.
   */
  timestamp?: long
  /**
   * Contains statistics for all file stores of the node.
   */
  total?: FileSystemTotal
  /**
   * Contains I/O statistics for the node.
   */
  io_stats?: IoStats
}

export class IoStats {
  /**
   * Array of disk metrics for each device that is backing an Elasticsearch data path.
   * These disk metrics are probed periodically and averages between the last probe and the current probe are computed.
   */
  devices?: IoStatDevice[]
  /**
   * The sum of the disk metrics for all devices that back an Elasticsearch data path.
   */
  total?: IoStatDevice
}

export class IoStatDevice {
  /**
   * The Linux device name.
   */
  device_name?: string
  /**
   * The total number of read and write operations for the device completed since starting Elasticsearch.
   */
  operations?: long
  /**
   * The total number of kilobytes read for the device since starting Elasticsearch.
   */
  read_kilobytes?: long
  /**
   * The total number of read operations for the device completed since starting Elasticsearch.
   */
  read_operations?: long
  /**
   * The total number of kilobytes written for the device since starting Elasticsearch.
   */
  write_kilobytes?: long
  /**
   * The total number of write operations for the device completed since starting Elasticsearch.
   */
  write_operations?: long
}

export class FileSystemTotal {
  /**
   * Total disk space available to this Java virtual machine on all file stores.
   * Depending on OS or process level restrictions, this might appear less than `free`.
   * This is the actual amount of free disk space the Elasticsearch node can utilise.
   */
  available?: string
  /**
   * Total number of bytes available to this Java virtual machine on all file stores.
   * Depending on OS or process level restrictions, this might appear less than `free_in_bytes`.
   * This is the actual amount of free disk space the Elasticsearch node can utilise.
   */
  available_in_bytes?: long
  /**
   * Total unallocated disk space in all file stores.
   */
  free?: string
  /**
   * Total number of unallocated bytes in all file stores.
   */
  free_in_bytes?: long
  /**
   * Total size of all file stores.
   */
  total?: string
  /**
   * Total size of all file stores in bytes.
   */
  total_in_bytes?: long
}

export class NodeBufferPool {
  /**
   * Number of buffer pools.
   */
  count?: long
  /**
   * Total capacity of buffer pools.
   */
  total_capacity?: string
  /**
   * Total capacity of buffer pools in bytes.
   */
  total_capacity_in_bytes?: long
  /**
   * Size of buffer pools.
   */
  used?: string
  /**
   * Size of buffer pools in bytes.
   */
  used_in_bytes?: long
}

export class Jvm {
  /**
   * Contains statistics about JVM buffer pools for the node.
   */
  buffer_pools?: Dictionary<string, NodeBufferPool>
  /**
   * Contains statistics about classes loaded by JVM for the node.
   */
  classes?: JvmClasses
  /**
   * Contains statistics about JVM garbage collectors for the node.
   */
  gc?: GarbageCollector
  /**
   * Contains JVM memory usage statistics for the node.
   */
  mem?: JvmMemoryStats
  /**
   * Contains statistics about JVM thread usage for the node.
   */
  threads?: JvmThreads
  /**
   * Last time JVM statistics were refreshed.
   */
  timestamp?: long
  /**
   * Human-readable JVM uptime.
   * Only returned if the `human` query parameter is `true`.
   */
  uptime?: string
  /**
   * JVM uptime in milliseconds.
   */
  uptime_in_millis?: long
}

export class JvmMemoryStats {
  /**
   * Memory, in bytes, currently in use by the heap.
   */
  heap_used_in_bytes?: long
  /**
   * Percentage of memory currently in use by the heap.
   */
  heap_used_percent?: long
  /**
   * Amount of memory, in bytes, available for use by the heap.
   */
  heap_committed_in_bytes?: long
  /**
   * Maximum amount of memory, in bytes, available for use by the heap.
   */
  heap_max_in_bytes?: long
  /**
   * Maximum amount of memory, available for use by the heap.
   */
  heap_max?: ByteSize

  /**
   * Non-heap memory used, in bytes.
   */
  non_heap_used_in_bytes?: long
  /**
   * Amount of non-heap memory available, in bytes.
   */
  non_heap_committed_in_bytes?: long
  /**
   * Contains statistics about heap memory usage for the node.
   */
  pools?: Dictionary<string, Pool>
}

export class Pool {
  /**
   * Memory, in bytes, used by the heap.
   */
  used_in_bytes?: long
  /**
   * Maximum amount of memory, in bytes, available for use by the heap.
   */
  max_in_bytes?: long
  /**
   * Largest amount of memory, in bytes, historically used by the heap.
   */
  peak_used_in_bytes?: long
  /**
   * Largest amount of memory, in bytes, historically used by the heap.
   */
  peak_max_in_bytes?: long
}

export class JvmThreads {
  /**
   * Number of active threads in use by JVM.
   */
  count?: long
  /**
   * Highest number of threads used by JVM.
   */
  peak_count?: long
}

export class JvmClasses {
  /**
   * Number of classes currently loaded by JVM.
   */
  current_loaded_count?: long
  /**
   * Total number of classes loaded since the JVM started.
   */
  total_loaded_count?: long
  /**
   * Total number of classes unloaded since the JVM started.
   */
  total_unloaded_count?: long
}

export class GarbageCollector {
  /**
   * Contains statistics about JVM garbage collectors for the node.
   */
  collectors?: Dictionary<string, GarbageCollectorTotal>
}

export class GarbageCollectorTotal {
  /**
   * Total number of JVM garbage collectors that collect objects.
   */
  collection_count?: long
  /**
   * Total time spent by JVM collecting objects.
   */
  collection_time?: string
  /**
   * Total time, in milliseconds, spent by JVM collecting objects.
   */
  collection_time_in_millis?: long
}

export class OperatingSystem {
  cpu?: Cpu
  mem?: ExtendedMemoryStats
  swap?: MemoryStats
  cgroup?: Cgroup
  timestamp?: long
}

export class Process {
  /**
   * Contains CPU statistics for the node.
   */
  cpu?: Cpu
  /**
   * Contains virtual memory statistics for the node.
   */
  mem?: MemoryStats
  /**
   * Number of opened file descriptors associated with the current or `-1` if not supported.
   */
  open_file_descriptors?: integer
  /**
   * Maximum number of file descriptors allowed on the system, or `-1` if not supported.
   */
  max_file_descriptors?: integer
  /**
   * Last time the statistics were refreshed.
   * Recorded in milliseconds since the Unix Epoch.
   */
  timestamp?: long
}

export class Scripting {
  /**
   * Total number of times the script cache has evicted old data.
   */
  cache_evictions?: long
  /**
   * Total number of inline script compilations performed by the node.
   */
  compilations?: long
  /**
   * Contains this recent history of script compilations.
   */
  compilations_history?: Dictionary<string, long>
  /**
   * Total number of times the script compilation circuit breaker has limited inline script compilations.
   */
  compilation_limit_triggered?: long
  contexts?: Context[]
}

// eslint-disable-next-line es-spec-validator/no-same-name-as-enclosing-type
export class Context {
  context?: string
  compilations?: long
  cache_evictions?: long
  compilation_limit_triggered?: long
}

export class ThreadCount {
  /**
   * Number of active threads in the thread pool.
   */
  active?: long
  /**
   * Number of tasks completed by the thread pool executor.
   */
  completed?: long
  /**
   * Highest number of active threads in the thread pool.
   */
  largest?: long
  /**
   * Number of tasks in queue for the thread pool.
   */
  queue?: long
  /**
   * Number of tasks rejected by the thread pool executor.
   */
  rejected?: long
  /**
   * Number of threads in the thread pool.
   */
  threads?: long
}

export class ScriptCache {
  /**
   * Total number of times the script cache has evicted old data.
   */
  cache_evictions?: long
  /**
   * Total number of times the script compilation circuit breaker has limited inline script compilations.
   */
  compilation_limit_triggered?: long
  /**
   * Total number of inline script compilations performed by the node.
   */
  compilations?: long
  context?: string
}

export class Transport {
  /**
   * The distribution of the time spent handling each inbound message on a transport thread, represented as a histogram.
   */
  inbound_handling_time_histogram?: TransportHistogram[]
  /**
   * The distribution of the time spent sending each outbound transport message on a transport thread, represented as a histogram.
   */
  outbound_handling_time_histogram?: TransportHistogram[]
  /**
   * Total number of RX (receive) packets received by the node during internal cluster communication.
   */
  rx_count?: long
  /**
   * Size of RX packets received by the node during internal cluster communication.
   */
  rx_size?: string
  /**
   * Size, in bytes, of RX packets received by the node during internal cluster communication.
   */
  rx_size_in_bytes?: long
  /**
   * Current number of inbound TCP connections used for internal communication between nodes.
   */
  server_open?: integer
  /**
   * Total number of TX (transmit) packets sent by the node during internal cluster communication.
   */
  tx_count?: long
  /**
   * Size of TX packets sent by the node during internal cluster communication.
   */
  tx_size?: string
  /**
   * Size, in bytes, of TX packets sent by the node during internal cluster communication.
   */
  tx_size_in_bytes?: long
  /**
   * The cumulative number of outbound transport connections that this node has opened since it started.
   * Each transport connection may comprise multiple TCP connections but is only counted once in this statistic.
   * Transport connections are typically long-lived so this statistic should remain constant in a stable cluster.
   */
  total_outbound_connections?: long
}

export class TransportHistogram {
  /**
   * The number of times a transport thread took a period of time within the bounds of this bucket to handle an inbound message.
   */
  count?: long
  /**
   * The exclusive upper bound of the bucket in milliseconds.
   * May be omitted on the last bucket if this bucket has no upper bound.
   */
  lt_millis?: long
  /**
   * The inclusive lower bound of the bucket in milliseconds. May be omitted on the first bucket if this bucket has no lower bound.
   */
  ge_millis?: long
}
