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

class NodeInfo {
  attributes: Dictionary<string, string>
  build_flavor: string
  /** Short hash of the last git commit in this release. */
  build_hash: string
  build_type: string
  /** The node’s host name. */
  host: string
  http: NodeInfoHttp
  /** The node’s IP address. */
  ip: string
  jvm: NodeJvmInfo
  /** The node’s name. */
  name: string
  network: NodeInfoNetwork
  os: NodeOperatingSystemInfo
  plugins: PluginStats[]
  /** The process flag can be set to retrieve information that concern the current running process */
  process?: NodeProcessInfo
  roles: NodeRole[]
  settings: string[]
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
  transport_address: string
  /** Elasticsearch version running on this node. */
  version: VersionString
}
