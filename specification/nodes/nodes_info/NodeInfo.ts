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

import { Dictionary } from '@spec_utils/Dictionary'
import { ByteSize, Name, VersionString } from '@_types/common'
import { IndexRouting } from '@_types/index/IndexRouting'
import { Host, Ip, TransportAddress } from '@_types/Networking'
import { long } from '@_types/Numeric'
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
  http: NodeInfoHttp
  /** The node’s IP address. */
  ip: Ip
  jvm: NodeJvmInfo
  /** The node's name */
  name: Name
  network: NodeInfoNetwork
  os: NodeOperatingSystemInfo
  plugins: PluginStats[]
  process: NodeProcessInfo
  roles: NodeRole[]
  settings: NodeInfoSettings
  thread_pool: Dictionary<string, NodeThreadPoolInfo>
  /**
   * Total heap allowed to be used to hold recently indexed documents before they must be written to disk. This size is a shared pool across all shards on this node, and is controlled by Indexing Buffer settings.
   * @doc_url https://www.elastic.co/guide/en/elasticsearch/reference/master/indexing-buffer.html
   */
  total_indexing_buffer: long
  /** Same as total_indexing_buffer, but expressed in bytes. */
  total_indexing_buffer_in_bytes?: ByteSize
  transport: NodeInfoTransport
  /** Host and port where transport HTTP connections are accepted. */
  transport_address: TransportAddress
  /** Elasticsearch version running on this node. */
  version: VersionString
}

export class NodeInfoSettings {
  cluster: NodeInfoSettingsCluster
}

export class NodeInfoSettingsCluster {
  name: Name
  routing: IndexRouting
  election: NodeInfoSettingsClusterElection
  initial_master_nodes: string
}

export class NodeInfoSettingsClusterElection {
  strategy: Name
}
