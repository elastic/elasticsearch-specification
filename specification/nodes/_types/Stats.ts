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

import { ShardStats } from '@indices/stats/types'
import { Dictionary } from '@spec_utils/Dictionary'
import { ByteSize, Field, Name } from '@_types/common'
import { Host, Ip, TransportAddress } from '@_types/Networking'
import { NodeRoles } from '@_types/Node'
import { double, float, integer, long } from '@_types/Numeric'
import { Duration, DurationValue, UnitMillis, UnitNanos } from '@_types/Time'

// The node stats response can be filtered both by `metric` and `filter_path`,
// every property needs to be optional to be compliant with the API behavior.
export class Stats {
  adaptive_selection?: Dictionary<string, AdaptiveSelection>
  breakers?: Dictionary<string, Breaker>
  fs?: FileSystem
  host?: Host
  http?: Http
  ingest?: Ingest
  ip?: Ip | Ip[]
  jvm?: Jvm
  name?: Name
  os?: OperatingSystem
  process?: Process
  roles?: NodeRoles
  script?: Scripting
  script_cache?: Dictionary<string, ScriptCache | ScriptCache[]>
  thread_pool?: Dictionary<string, ThreadCount>
  timestamp?: long
  transport?: Transport
  transport_address?: TransportAddress
  attributes?: Dictionary<Field, string>
  discovery?: Discovery
  indexing_pressure?: IndexingPressure
  indices?: ShardStats
}

export class IndexingPressure {
  memory?: IndexingPressureMemory
}

export class IndexingPressureMemory {
  limit?: ByteSize
  limit_in_bytes?: long
  current?: PressureMemory
  total?: PressureMemory
}

export interface PressureMemory {
  all?: ByteSize
  all_in_bytes?: long
  combined_coordinating_and_primary?: ByteSize
  combined_coordinating_and_primary_in_bytes?: long
  coordinating?: ByteSize
  coordinating_in_bytes?: long
  primary?: ByteSize
  primary_in_bytes?: long
  replica?: ByteSize
  replica_in_bytes?: long
  coordinating_rejections?: long
  primary_rejections?: long
  replica_rejections?: long
}

export class Discovery {
  cluster_state_queue?: ClusterStateQueue
  published_cluster_states?: PublishedClusterStates
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
  total?: long
  pending?: long
  committed?: long
}

export class PublishedClusterStates {
  full_states?: long
  incompatible_diffs?: long
  compatible_diffs?: long
}

export class ClusterStateUpdate {
  count: long
  computation_time?: Duration
  computation_time_millis?: DurationValue<UnitMillis>
  publication_time?: Duration
  publication_time_millis?: DurationValue<UnitMillis>
  context_construction_time?: Duration
  context_construction_time_millis?: DurationValue<UnitMillis>
  commit_time?: Duration
  commit_time_millis?: DurationValue<UnitMillis>
  completion_time?: Duration
  completion_time_millis?: DurationValue<UnitMillis>
  master_apply_time?: Duration
  master_apply_time_millis?: DurationValue<UnitMillis>
  notification_time?: Duration
  notification_time_millis?: DurationValue<UnitMillis>
}

export class Ingest {
  pipelines?: Dictionary<string, IngestTotal>
  total?: IngestTotal
}

export class IngestTotal {
  count?: long
  current?: long
  failed?: long
  processors?: Dictionary<string, KeyedProcessor>[]
  time_in_millis?: DurationValue<UnitMillis>
}

export class KeyedProcessor {
  stats?: Processor
  type?: string
}

export class Processor {
  count?: long
  current?: long
  failed?: long
  time_in_millis?: DurationValue<UnitMillis>
}

export class AdaptiveSelection {
  avg_queue_size?: long
  avg_response_time?: Duration
  avg_response_time_ns?: long
  avg_service_time?: Duration
  avg_service_time_ns?: long
  outgoing_searches?: long
  rank?: string
}

export class Breaker {
  estimated_size?: string
  estimated_size_in_bytes?: long
  limit_size?: string
  limit_size_in_bytes?: long
  overhead?: float
  tripped?: float
}

export class Cgroup {
  cpuacct?: CpuAcct
  cpu?: CgroupCpu
  memory?: CgroupMemory
}

export class CpuAcct {
  control_group?: string
  usage_nanos?: DurationValue<UnitNanos>
}

export class CgroupCpu {
  control_group?: string
  cfs_period_micros?: integer
  cfs_quota_micros?: integer
  stat?: CgroupCpuStat
}

export class CgroupCpuStat {
  number_of_elapsed_periods?: long
  number_of_times_throttled?: long
  time_throttled_nanos?: DurationValue<UnitNanos>
}

export class CgroupMemory {
  control_group?: string
  limit_in_bytes?: string
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
  available?: string
  available_in_bytes?: long
  disk_queue?: string
  disk_reads?: long
  disk_read_size?: string
  disk_read_size_in_bytes?: long
  disk_writes?: long
  disk_write_size?: string
  disk_write_size_in_bytes?: long
  free?: string
  free_in_bytes?: long
  mount?: string
  path?: string
  total?: string
  total_in_bytes?: long
  type?: string
}

export class MemoryStats {
  adjusted_total_in_bytes?: long
  resident?: string
  resident_in_bytes?: long
  share?: string
  share_in_bytes?: long
  total_virtual?: string
  total_virtual_in_bytes?: long
  total_in_bytes?: long
  free_in_bytes?: long
  used_in_bytes?: long
}

export class ExtendedMemoryStats extends MemoryStats {
  free_percent?: integer
  used_percent?: integer
}

export class Http {
  current_open?: integer
  total_opened?: long
  clients?: Client[]
}

export class Client {
  id?: long
  agent?: string
  local_address?: string
  remote_address?: string
  last_uri?: string
  opened_time_millis?: long
  closed_time_millis?: long
  last_request_time_millis?: long
  request_count?: long
  request_size_bytes?: long
  x_opaque_id?: string
}

export class FileSystem {
  data?: DataPathStats[]
  timestamp?: long
  total?: FileSystemTotal
  io_stats?: IoStats
}

export class IoStats {
  devices?: IoStatDevice[]
  total?: IoStatDevice
}

export class IoStatDevice {
  device_name?: string
  operations?: long
  read_kilobytes?: long
  read_operations?: long
  write_kilobytes?: long
  write_operations?: long
}

export class FileSystemTotal {
  available?: string
  available_in_bytes?: long
  free?: string
  free_in_bytes?: long
  total?: string
  total_in_bytes?: long
}

export class NodeBufferPool {
  count?: long
  total_capacity?: string
  total_capacity_in_bytes?: long
  used?: string
  used_in_bytes?: long
}

export class Jvm {
  buffer_pools?: Dictionary<string, NodeBufferPool>
  classes?: JvmClasses
  gc?: GarbageCollector
  mem?: JvmMemoryStats
  threads?: JvmThreads
  timestamp?: long
  uptime?: string
  uptime_in_millis?: long
}

export class JvmMemoryStats {
  heap_used_in_bytes?: long
  heap_used_percent?: long
  heap_committed_in_bytes?: long
  heap_max_in_bytes?: long
  non_heap_used_in_bytes?: long
  non_heap_committed_in_bytes?: long
  pools?: Dictionary<string, Pool>
}

export class Pool {
  used_in_bytes?: long
  max_in_bytes?: long
  peak_used_in_bytes?: long
  peak_max_in_bytes?: long
}

export class JvmThreads {
  count?: long
  peak_count?: long
}

export class JvmClasses {
  current_loaded_count?: long
  total_loaded_count?: long
  total_unloaded_count?: long
}

export class GarbageCollector {
  collectors?: Dictionary<string, GarbageCollectorTotal>
}

export class GarbageCollectorTotal {
  collection_count?: long
  collection_time?: string
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
  cpu?: Cpu
  mem?: MemoryStats
  open_file_descriptors?: integer
  max_file_descriptors?: integer
  timestamp?: long
}

export class Scripting {
  cache_evictions?: long
  compilations?: long
  compilations_history?: Dictionary<string, long>
  compilation_limit_triggered?: long
  contexts?: Context[]
}

export class Context {
  context?: string
  compilations?: long
  cache_evictions?: long
  compilation_limit_triggered?: long
}

export class ThreadCount {
  active?: long
  completed?: long
  largest?: long
  queue?: long
  rejected?: long
  threads?: long
}

export class ScriptCache {
  cache_evictions?: long
  compilation_limit_triggered?: long
  compilations?: long
  context?: string
}

export class Transport {
  inbound_handling_time_histogram?: TransportHistogram[]
  outbound_handling_time_histogram?: TransportHistogram[]
  rx_count?: long
  rx_size?: string
  rx_size_in_bytes?: long
  server_open?: integer
  tx_count?: long
  tx_size?: string
  tx_size_in_bytes?: long
  total_outbound_connections?: long
}

export class TransportHistogram {
  count?: long
  lt_millis?: long
  ge_millis?: long
}
