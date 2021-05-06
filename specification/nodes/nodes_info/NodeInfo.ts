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

import { IndexRouting } from '@indices/_types/IndexRouting'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { ByteSize, Name, VersionString } from '@_types/common'
import { Host, Ip, TransportAddress } from '@_types/Networking'
import { integer, long } from '@_types/Numeric'
import { PluginStats } from '@_types/Stats'
import { NodeInfoHttp } from './NodeInfoHttp'
import { NodeInfoNetwork } from './NodeInfoNetwork'
import { NodeInfoTransport } from './NodeInfoTransport'
import { NodeJvmInfo } from './NodeJvmInfo'
import { NodeOperatingSystemInfo } from './NodeOperatingSystemInfo'
import { NodeProcessInfo } from './NodeProcessInfo'
import { NodeRole } from './NodeRole'
import { NodeThreadPoolInfo } from './NodeThreadPoolInfo'

export class NodeInfo {
  attributes: Dictionary<string, string>
  build_flavor: string
  /** Short hash of the last git commit in this release. */
  build_hash: string
  build_type: string
  /** The node’s host name. */
  host: Host
  http?: NodeInfoHttp
  /** The node’s IP address. */
  ip: Ip
  jvm?: NodeJvmInfo
  /** The node's name */
  name: Name
  network?: NodeInfoNetwork
  os?: NodeOperatingSystemInfo
  plugins?: PluginStats[]
  process?: NodeProcessInfo
  roles: NodeRole[]
  settings?: NodeInfoSettings
  thread_pool?: Dictionary<string, NodeThreadPoolInfo>
  /**
   * Total heap allowed to be used to hold recently indexed documents before they must be written to disk. This size is a shared pool across all shards on this node, and is controlled by Indexing Buffer settings.
   * @doc_url https://www.elastic.co/guide/en/elasticsearch/reference/master/indexing-buffer.html
   */
  total_indexing_buffer?: long
  /** Same as total_indexing_buffer, but expressed in bytes. */
  total_indexing_buffer_in_bytes?: ByteSize
  transport?: NodeInfoTransport
  /** Host and port where transport HTTP connections are accepted. */
  transport_address: TransportAddress
  /** Elasticsearch version running on this node. */
  version: VersionString
  modules?: PluginStats[]
  ingest?: NodeInfoIngest
  aggregations?: Dictionary<string, NodeInfoAggregation>
}

export class NodeInfoSettings {
  cluster: NodeInfoSettingsCluster
  node: NodeInfoSettingsNode
  path: NodeInfoPath
  repositories?: NodeInfoRepositories
  discovery?: NodeInfoDiscover
  action?: NodeInfoAction
  client: NodeInfoClient
  http: NodeInfoSettingsHttp
  bootstrap?: NodeInfoBootstrap
  transport: NodeInfoSettingsTransport
  network?: NodeInfoSettingsNetwork
  xpack?: NodeInfoXpack
  script?: NodeInfoScript
  search?: NodeInfoSearch
}

export class NodeInfoSettingsCluster {
  name: Name
  routing?: IndexRouting
  election: NodeInfoSettingsClusterElection
  initial_master_nodes?: string
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
  logs: string
  home: string
  repo: string[]
  data?: string[]
}

export class NodeInfoRepositories {
  url: NodeInfoRepositoriesUrl
}

export class NodeInfoRepositoriesUrl {
  allowed_urls: string
}

export class NodeInfoDiscover {
  seed_hosts: string
}

export class NodeInfoAction {
  destructive_requires_name: string
}

export class NodeInfoClient {
  type: string
}

export class NodeInfoSettingsHttp {
  type: string | NodeInfoSettingsHttpType
  'type.default'?: string // TODO this clashes with NodeInfoSettingsHttpType
  compression?: boolean | string
  port?: integer | string
}

export class NodeInfoSettingsHttpType {
  default: string
}

export class NodeInfoBootstrap {
  memory_lock: string
}

export class NodeInfoSettingsTransport {
  type: string | NodeInfoSettingsTransportType
  'type.default'?: string // TODO this clashes with NodeInfoSettingsTransportType
  features?: NodeInfoSettingsTransportFeatures
}

export class NodeInfoSettingsTransportType {
  default: string
}

export class NodeInfoSettingsTransportFeatures {
  'x-pack': string
}

export class NodeInfoSettingsNetwork {
  host: Host
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
}

export class NodeInfoXpackSecurity {
  http: NodeInfoXpackSecuritySsl
  enabled: string
  transport: NodeInfoXpackSecuritySsl
  authc?: NodeInfoXpackSecurityAuthc
}

export class NodeInfoXpackSecuritySsl {
  ssl: Dictionary<string, string>
}

export class NodeInfoXpackSecurityAuthc {
  realms: NodeInfoXpackSecurityAuthcRealms
  token: NodeInfoXpackSecurityAuthcToken
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
  disable_max_compilations_rate: string
}

export class NodeInfoSearch {
  remote: NodeInfoSearchRemote
}

export class NodeInfoSearchRemote {
  connect: string
}
