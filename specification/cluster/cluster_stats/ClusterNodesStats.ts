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
import { VersionString } from '@_types/common'
import { integer } from '@_types/Numeric'
import { PluginStats } from '@_types/Stats'
import { ClusterFileSystem } from './ClusterFileSystem'
import { ClusterIngestStats } from './ClusterIngestStats'
import { ClusterJvm } from './ClusterJvm'
import { ClusterNetworkTypes } from './ClusterNetworkTypes'
import { ClusterNodeCount } from './ClusterNodeCount'
import { ClusterOperatingSystemStats } from './ClusterOperatingSystemStats'
import { ClusterProcess } from './ClusterProcess'
import { NodePackagingType } from './NodePackagingType'

export class ClusterNodesStats {
  /** Contains counts for nodes selected by the request’s node filters. */
  count: ClusterNodeCount
  /**
   * Contains statistics about the discovery types used by selected nodes.
   * @doc_url https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-discovery-hosts-providers.html
   */
  discovery_types: Dictionary<string, integer>
  /** Contains statistics about file stores by selected nodes. */
  fs: ClusterFileSystem
  ingest: ClusterIngestStats
  /** Contains statistics about the Java Virtual Machines (JVMs) used by selected nodes. */
  jvm: ClusterJvm
  /** Contains statistics about the transport and HTTP networks used by selected nodes. */
  network_types: ClusterNetworkTypes
  /** Contains statistics about the operating systems used by selected nodes. */
  os: ClusterOperatingSystemStats
  /** Contains statistics about Elasticsearch distributions installed on selected nodes. */
  packaging_types: NodePackagingType[]
  /** Contains statistics about installed plugins and modules by selected nodes. */
  plugins: PluginStats[]
  /** Contains statistics about processes used by selected nodes. */
  process: ClusterProcess
  /** Array of Elasticsearch versions used on selected nodes. */
  versions: VersionString[]
}
