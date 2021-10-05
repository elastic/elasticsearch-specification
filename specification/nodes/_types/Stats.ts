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

import { IndexStats } from '@indices/stats/types'
import { Dictionary } from '@spec_utils/Dictionary'
import { Field, Name } from '@_types/common'
import { Host, Ip, TransportAddress } from '@_types/Networking'
import { NodeRoles } from '@_types/Node'
import { double, float, integer, long } from '@_types/Numeric'

export class Stats {
  adaptive_selection: Dictionary<string, AdaptiveSelection>
  breakers: Dictionary<string, Breaker>
  fs: FileSystem
  host: Host
  http: Http
  indices: IndexStats
  ingest: Ingest
  ip: Ip | Ip[]
  jvm: Jvm
  name: Name
  os: OperatingSystem
  process: Process
  roles: NodeRoles
  script: Scripting
  thread_pool: Dictionary<string, ThreadCount>
  timestamp: long
  transport: Transport
  transport_address: TransportAddress
  attributes: Dictionary<Field, string>
}

export class Ingest {
  pipelines: Dictionary<string, IngestTotal>
  total: IngestTotal
}

export class IngestTotal {
  count: long
  current: long
  failed: long
  processors: KeyedProcessor[]
  time_in_millis: long
}

export class KeyedProcessor {
  statistics: Process
  type: string
}

export class AdaptiveSelection {
  avg_queue_size: long
  avg_response_time: long
  avg_response_time_ns: long
  avg_service_time: string
  avg_service_time_ns: long
  outgoing_searches: long
  rank: string
}

export class Breaker {
  estimated_size: string
  estimated_size_in_bytes: long
  limit_size: string
  limit_size_in_bytes: long
  overhead: float
  tripped: float
}

export class Cgroup {
  cpuacct: CpuAcct
  cpu: CgroupCpu
  memory: CgroupMemory
}

export class CpuAcct {
  control_group: string
  usage_nanos: long
}

export class CgroupCpu {
  control_group: string
  cfs_period_micros: integer
  cfs_quota_micros: integer
  stat: CgroupCpuStat
}

export class CgroupCpuStat {
  number_of_elapsed_periods: long
  number_of_times_throttled: long
  time_throttled_nanos: long
}

export class CgroupMemory {
  control_group: string
  limit_in_bytes: string
  usage_in_bytes: string
}

export class Cpu {
  percent: integer
  sys?: string
  sys_in_millis?: long
  total?: string
  total_in_millis?: long
  user?: string
  user_in_millis?: long
  load_average?: Dictionary<string, double>
}

export class DataPathStats {
  available: string
  available_in_bytes: long
  disk_queue: string
  disk_reads: long
  disk_read_size: string
  disk_read_size_in_bytes: long
  disk_writes: long
  disk_write_size: string
  disk_write_size_in_bytes: long
  free: string
  free_in_bytes: long
  mount: string
  path: string
  total: string
  total_in_bytes: long
  type: string
}

export class MemoryStats {
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
  free_percent: integer
  used_percent: integer
}

export class Http {
  current_open: integer
  total_opened: long
}

export class FileSystem {
  data: DataPathStats[]
  timestamp: long
  total: FileSystemTotal
}

export class FileSystemTotal {
  available: string
  available_in_bytes: long
  free: string
  free_in_bytes: long
  total: string
  total_in_bytes: long
}

export class NodeBufferPool {
  count: long
  total_capacity: string
  total_capacity_in_bytes: long
  used: string
  used_in_bytes: long
}

export class Jvm {
  buffer_pools: Dictionary<string, NodeBufferPool>
  classes: JvmClasses
  gc: GarbageCollector
  mem: JvmMemoryStats
  threads: JvmThreads
  timestamp: long
  uptime: string
  uptime_in_millis: long
}

export class JvmMemoryStats {
  heap_used_in_bytes: long
  heap_used_percent: long
  heap_committed_in_bytes: long
  heap_max_in_bytes: long
  non_heap_used_in_bytes: long
  non_heap_committed_in_bytes: long
  pools: Pools;
}

export class Pools {
  young: Pool
  old: Pool
  survivor: Pool
}

export class Pool {
  used_in_bytes: long
  max_in_bytes: long
  peak_used_in_bytes: long
  peak_max_in_bytes: long
}

export class JvmThreads {
  count: long
  peak_count: long
}

export class JvmClasses {
  current_loaded_count: long
  total_loaded_count: long
  total_unloaded_count: long
}

export class GarbageCollector {
  collectors: Dictionary<string, GarbageCollectorTotal>
}

export class GarbageCollectorTotal {
  collection_count: long
  collection_time: string
  collection_time_in_millis: long
}

export class OperatingSystem {
  cpu: Cpu
  mem: ExtendedMemoryStats
  swap: MemoryStats
  cgroup: Cgroup
  timestamp: long
}

export class Process {
  cpu: Cpu
  mem: MemoryStats
  open_file_descriptors: integer
  max_file_descriptors: integer
  timestamp: long
}

export class Scripting {
  cache_evictions: long
  compilations: long
}

export class ThreadCount {
  active: long
  completed: long
  largest: long
  queue: long
  rejected: long
  threads: long
}

export class Transport {
  rx_count: long
  rx_size: string
  rx_size_in_bytes: long
  server_open: integer
  tx_count: long
  tx_size: string
  tx_size_in_bytes: long
}
