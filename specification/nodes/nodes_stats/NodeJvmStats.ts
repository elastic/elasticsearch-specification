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

import { long } from '@common/Numeric'
import { Dictionary } from '@spec_utils/Dictionary'
import { GarbageCollectionStats } from './GarbageCollectionStats'
import { JvmClassesStats } from './JvmClassesStats'
import { MemoryStats } from './MemoryStats'
import { NodeBufferPool } from './NodeBufferPool'
import { ThreadStats } from './ThreadStats'

export class NodeJvmStats {
  /** @prop_serializer VerbatimInterfaceReadOnlyDictionaryKeysFormatter`2 */
  buffer_pools: Dictionary<string, NodeBufferPool>
  classes: JvmClassesStats
  gc: GarbageCollectionStats
  mem: MemoryStats
  threads: ThreadStats
  timestamp: long
  uptime: string
  uptime_in_millis: long
}
