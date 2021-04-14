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

import { long, VersionString } from '@common/common'
import { PluginStats } from '@common/common_options/stats/PluginStats'
import { Dictionary } from '__spec_utils/Dictionary'
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
  build_hash: string
  build_type: string
  host: string
  http: NodeInfoHttp
  ip: string
  jvm: NodeJvmInfo
  name: string
  network: NodeInfoNetwork
  os: NodeOperatingSystemInfo
  plugins: PluginStats[]
  process: NodeProcessInfo
  roles: NodeRole[]
  settings: string[]
  /** @prop_serializer VerbatimInterfaceReadOnlyDictionaryKeysFormatter`2 */
  thread_pool: Dictionary<string, NodeThreadPoolInfo>
  total_indexing_buffer: long
  transport: NodeInfoTransport
  transport_address: string
  version: VersionString
}
