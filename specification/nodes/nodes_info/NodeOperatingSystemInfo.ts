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

import { Name, VersionString } from '@_types/common'
import { integer } from '@_types/Numeric'
import { NodeInfoMemory } from './NodeInfoMemory'
import { NodeInfoOSCPU } from './NodeInfoOSCPU'

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
  refresh_interval_in_millis: integer
  /** Version of the operating system */
  version: VersionString
  cpu?: NodeInfoOSCPU
  mem?: NodeInfoMemory
  swap?: NodeInfoMemory
}
