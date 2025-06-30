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

import { ByteSize, Name, VersionNumber, VersionString } from '@_types/common'
import { Host, Ip, TransportAddress } from '@_types/Networking'
import { NodeRoles } from '@_types/Node'
import { integer, long } from '@_types/Numeric'
import { PluginStats } from '@_types/Stats'
import { Duration, DurationValue, EpochTime, UnitMillis } from '@_types/Time'
import { IndexRouting } from '@indices/_types/IndexRouting'
import { AdditionalProperties } from '@spec_utils/behaviors'
import { Dictionary } from '@spec_utils/Dictionary'
import { Stringified } from '@spec_utils/Stringified'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

export class NodeInfo {
  attributes: Dictionary<string, string>
  build_flavor: string
  /** Short hash of the last git commit in this release. */
  build_hash: string
  build_type: string
  component_versions: Dictionary<Name, integer>
  /** The node’s host name. */
  host: Host
  http?: NodeInfoHttp
  index_version: VersionNumber
  /** The node’s IP address. */
  ip: Ip
  jvm?: NodeJvmInfo
  /** The node's name */
  name: Name
  os?: NodeOperatingSystemInfo
  plugins?: PluginStats[]
  process?: NodeProcessInfo
  roles: NodeRoles
  settings?: NodeInfoSettings
  thread_pool?: Dictionary<string, NodeThreadPoolInfo>
  /**
   * Total heap allowed to be used to hold recently indexed documents before they must be written to disk. This size is a shared pool across all shards on this node, and is controlled by Indexing Buffer settings.
   * @doc_id indexing-buffer
   */
  total_indexing_buffer?: long
  /** Same as total_indexing_buffer, but expressed in bytes. */
  total_indexing_buffer_in_bytes?: ByteSize
  transport?: NodeInfoTransport
  /** Host and port where transport HTTP connections are accepted. */
  transport_address: TransportAddress
  transport_version: VersionNumber

  /** Elasticsearch version running on this node. */
  version: VersionString
  modules?: PluginStats[]
  ingest?: NodeInfoIngest
  aggregations?: Dictionary<string, NodeInfoAggregation>
  remote_cluster_server?: RemoveClusterServer
}

export class RemoveClusterServer {
  bound_address: TransportAddress[]
  publish_address: TransportAddress
}

export class NodeInfoSettings {
  cluster: NodeInfoSettingsCluster
  node: NodeInfoSettingsNode
  path?: NodeInfoPath
  repositories?: NodeInfoRepositories
  discovery?: NodeInfoDiscover
  action?: NodeInfoAction
  client?: NodeInfoClient
  http: NodeInfoSettingsHttp
  bootstrap?: NodeInfoBootstrap
  transport: NodeInfoSettingsTransport
  network?: NodeInfoSettingsNetwork
  xpack?: NodeInfoXpack
  script?: NodeInfoScript
  search?: NodeInfoSearch
  ingest?: NodeInfoSettingsIngest
}

export class NodeInfoSettingsIngest {
  attachment?: NodeInfoIngestInfo
  append?: NodeInfoIngestInfo
  csv?: NodeInfoIngestInfo
  convert?: NodeInfoIngestInfo
  date?: NodeInfoIngestInfo
  date_index_name?: NodeInfoIngestInfo
  dot_expander?: NodeInfoIngestInfo
  enrich?: NodeInfoIngestInfo
  fail?: NodeInfoIngestInfo
  foreach?: NodeInfoIngestInfo
  json?: NodeInfoIngestInfo
  user_agent?: NodeInfoIngestInfo
  kv?: NodeInfoIngestInfo
  geoip?: NodeInfoIngestInfo
  grok?: NodeInfoIngestInfo
  gsub?: NodeInfoIngestInfo
  join?: NodeInfoIngestInfo
  lowercase?: NodeInfoIngestInfo
  remove?: NodeInfoIngestInfo
  rename?: NodeInfoIngestInfo
  script?: NodeInfoIngestInfo
  set?: NodeInfoIngestInfo
  sort?: NodeInfoIngestInfo
  split?: NodeInfoIngestInfo
  trim?: NodeInfoIngestInfo
  uppercase?: NodeInfoIngestInfo
  urldecode?: NodeInfoIngestInfo
  bytes?: NodeInfoIngestInfo
  dissect?: NodeInfoIngestInfo
  set_security_user?: NodeInfoIngestInfo
  pipeline?: NodeInfoIngestInfo
  drop?: NodeInfoIngestInfo
  circle?: NodeInfoIngestInfo
  inference?: NodeInfoIngestInfo
}

export class NodeInfoIngestInfo {
  downloader: NodeInfoIngestDownloader
}

export class NodeInfoIngestDownloader {
  enabled: string
}

export class NodeInfoSettingsCluster {
  name: Name
  routing?: IndexRouting
  election: NodeInfoSettingsClusterElection
  initial_master_nodes?: string[] | string
  /**
   * @availability stack since=7.16.0
   * @availability serverless
   */
  deprecation_indexing?: DeprecationIndexing
}

export class DeprecationIndexing {
  enabled: boolean | string
}

export class NodeInfoSettingsClusterElection {
  strategy: Name
}

export class NodeInfoSettingsNode {
  name: Name
  attr: Dictionary<string, UserDefinedValue>
  max_local_storage_nodes?: string
}

export class NodeInfoPath {
  logs?: string
  home?: string
  repo?: string[]
  data?: string | string[]
}

export class NodeInfoRepositories {
  url: NodeInfoRepositoriesUrl
}

export class NodeInfoRepositoriesUrl {
  allowed_urls: string
}

/**
 * @behavior_meta AdditionalProperties fieldname=settings description="Additional or alternative settings"
 */
export class NodeInfoDiscover
  implements AdditionalProperties<string, UserDefinedValue>
{
  seed_hosts?: string[] | string
  type?: string
  seed_providers?: string[]
}

export class NodeInfoAction {
  destructive_requires_name: string
}

export class NodeInfoClient {
  type: string
}

export class NodeInfoSettingsHttp {
  type: NodeInfoSettingsHttpType
  'type.default'?: string // TODO this clashes with NodeInfoSettingsHttpType
  compression?: boolean | string
  port?: integer | string
}

/** @shortcut_property default */
export class NodeInfoSettingsHttpType {
  default: string
}

export class NodeInfoBootstrap {
  memory_lock: string
}

export class NodeInfoSettingsTransport {
  type: NodeInfoSettingsTransportType
  'type.default'?: string // TODO this clashes with NodeInfoSettingsTransportType
  features?: NodeInfoSettingsTransportFeatures
  /**
   * Only used in unit tests
   * @availability stack visibility=private
   * */
  ignore_deserialization_errors?: Stringified<boolean>
}

/** @shortcut_property default */
export class NodeInfoSettingsTransportType {
  default: string
}

export class NodeInfoSettingsTransportFeatures {
  'x-pack': string
}

export class NodeInfoSettingsNetwork {
  host?: Host | Host[]
}

export class NodeInfoIngest {
  processors: NodeInfoIngestProcessor[]
}

export class NodeInfoIngestProcessor {
  type: string
}

export class NodeInfoAggregation {
  types: string[]
}

export class NodeInfoXpack {
  license?: NodeInfoXpackLicense
  security: NodeInfoXpackSecurity
  notification?: Dictionary<string, UserDefinedValue>
  ml?: NodeInfoXpackMl
}

export class NodeInfoXpackSecurity {
  http?: NodeInfoXpackSecuritySsl
  enabled: string
  transport?: NodeInfoXpackSecuritySsl
  authc?: NodeInfoXpackSecurityAuthc
}

export class NodeInfoXpackMl {
  use_auto_machine_memory_percent?: boolean
}

export class NodeInfoXpackSecuritySsl {
  ssl: Dictionary<string, string>
}

export class NodeInfoXpackSecurityAuthc {
  realms?: NodeInfoXpackSecurityAuthcRealms
  token?: NodeInfoXpackSecurityAuthcToken
}

export class NodeInfoXpackSecurityAuthcRealms {
  file?: Dictionary<string, NodeInfoXpackSecurityAuthcRealmsStatus>
  native?: Dictionary<string, NodeInfoXpackSecurityAuthcRealmsStatus>
  pki?: Dictionary<string, NodeInfoXpackSecurityAuthcRealmsStatus>
}

export class NodeInfoXpackSecurityAuthcToken {
  enabled: string
}

export class NodeInfoXpackSecurityAuthcRealmsStatus {
  enabled?: string
  order: string
}

export class NodeInfoXpackLicense {
  self_generated: NodeInfoXpackLicenseType
}

export class NodeInfoXpackLicenseType {
  type: string
}

export class NodeInfoScript {
  allowed_types: string
  disable_max_compilations_rate?: string
}

export class NodeInfoSearch {
  remote: NodeInfoSearchRemote
}

export class NodeInfoSearchRemote {
  connect: string
}

export class NodeThreadPoolInfo {
  core?: integer
  keep_alive?: Duration
  max?: integer
  queue_size: integer
  size?: integer
  type: string
}

export class NodeInfoHttp {
  bound_address: string[]
  max_content_length?: ByteSize
  max_content_length_in_bytes: long
  publish_address: string
}

export class NodeInfoJvmMemory {
  direct_max?: ByteSize
  direct_max_in_bytes: long
  heap_init?: ByteSize
  heap_init_in_bytes: long
  heap_max?: ByteSize
  heap_max_in_bytes: long
  non_heap_init?: ByteSize
  non_heap_init_in_bytes: long
  non_heap_max?: ByteSize
  non_heap_max_in_bytes: long
}

export class NodeInfoMemory {
  total: string
  total_in_bytes: long
}

export class NodeInfoOSCPU {
  cache_size: string
  cache_size_in_bytes: integer
  cores_per_socket: integer
  mhz: integer
  model: string
  total_cores: integer
  total_sockets: integer
  vendor: string
}

export class NodeInfoTransport {
  bound_address: string[]
  publish_address: string
  profiles: Dictionary<string, string>
}

export class NodeJvmInfo {
  gc_collectors: string[]
  mem: NodeInfoJvmMemory
  memory_pools: string[]
  pid: integer
  start_time_in_millis: EpochTime<UnitMillis>
  version: VersionString
  vm_name: Name
  vm_vendor: string
  vm_version: VersionString
  using_bundled_jdk: boolean
  using_compressed_ordinary_object_pointers?: boolean | string
  input_arguments: string[]
}

export class NodeOperatingSystemInfo {
  /** Name of the JVM architecture (ex: amd64, x86) */
  arch: string
  /** Number of processors available to the Java virtual machine */
  available_processors: integer
  /** The number of processors actually used to calculate thread pool size. This number can be set with the node.processors setting of a node and defaults to the number of processors reported by the OS. */
  allocated_processors?: integer
  /** Name of the operating system (ex: Linux, Windows, Mac OS X) */
  name: Name
  pretty_name: Name
  /** Refresh interval for the OS statistics */
  refresh_interval_in_millis: DurationValue<UnitMillis>
  /** Version of the operating system */
  version: VersionString
  cpu?: NodeInfoOSCPU
  mem?: NodeInfoMemory
  swap?: NodeInfoMemory
}

export class NodeProcessInfo {
  /** Process identifier (PID) */
  id: long
  /** Indicates if the process address space has been successfully locked in memory */
  mlockall: boolean
  /** Refresh interval for the process statistics */
  refresh_interval_in_millis: DurationValue<UnitMillis>
}
