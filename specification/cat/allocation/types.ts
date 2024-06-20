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

import { ByteSize } from '@_types/common'
import { Host, Ip } from '@_types/Networking'
import { Percentage } from '@_types/Numeric'

export class AllocationRecord {
  /**
   * Number of primary and replica shards assigned to the node.
   * @aliases s
   */
  shards?: string
  /**
   * Disk space used by the node’s shards. Does not include disk space for the translog or unassigned shards.
   * IMPORTANT: This metric double-counts disk space for hard-linked files, such as those created when shrinking, splitting, or cloning an index.
   * @aliases di,diskIndices
   */
  'disk.indices'?: ByteSize | null
  /**
   * Total disk space in use.
   * Elasticsearch retrieves this metric from the node’s operating system (OS).
   * The metric includes disk space for: Elasticsearch, including the translog and unassigned shards; the node’s operating system; any other applications or files on the node.
   * Unlike `disk.indices`, this metric does not double-count disk space for hard-linked files.
   * @aliases du,diskUsed
   */
  'disk.used'?: ByteSize | null
  /**
   * Free disk space available to Elasticsearch.
   * Elasticsearch retrieves this metric from the node’s operating system.
   * Disk-based shard allocation uses this metric to assign shards to nodes based on available disk space.
   * @aliases da,diskAvail
   */
  'disk.avail'?: ByteSize | null
  /**
   * Total disk space for the node, including in-use and available space.
   * @aliases dt,diskTotal
   */
  'disk.total'?: ByteSize | null
  /**
   * Total percentage of disk space in use. Calculated as `disk.used / disk.total`.
   * @aliases dp,diskPercent
   */
  'disk.percent'?: Percentage | null
  /**
   * Network host for the node. Set using the `network.host` setting.
   * @aliases h
   */
  host?: Host | null
  /**
   * IP address and port for the node.
   */
  ip?: Ip | null
  /**
   * Name for the node. Set using the `node.name` setting.
   * @aliases n
   */
  node?: string
}
