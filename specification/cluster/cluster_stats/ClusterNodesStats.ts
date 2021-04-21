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

import { integer } from '@common/Numeric'
import { PluginStats } from '@common/Stats'
import { Dictionary } from '@spec_utils/Dictionary'
import { ClusterFileSystem } from './ClusterFileSystem'
import { ClusterIngestStats } from './ClusterIngestStats'
import { ClusterJvm } from './ClusterJvm'
import { ClusterNetworkTypes } from './ClusterNetworkTypes'
import { ClusterNodeCount } from './ClusterNodeCount'
import { ClusterOperatingSystemStats } from './ClusterOperatingSystemStats'
import { ClusterProcess } from './ClusterProcess'
import { NodePackagingType } from './NodePackagingType'

export class ClusterNodesStats {
  count: ClusterNodeCount
  discovery_types: Dictionary<string, integer>
  fs: ClusterFileSystem
  ingest: ClusterIngestStats
  jvm: ClusterJvm
  network_types: ClusterNetworkTypes
  os: ClusterOperatingSystemStats
  packaging_types: NodePackagingType[]
  plugins: PluginStats[]
  process: ClusterProcess
  versions: string[]
}
