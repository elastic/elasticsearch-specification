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

import { Id } from '@_types/common'
import { Dictionary } from '@spec_utils/Dictionary'

export class IndexRouting {
  allocation?: IndexRoutingAllocation
  rebalance?: IndexRoutingRebalance
}

export class IndexRoutingAllocation {
  enable?: IndexRoutingAllocationOptions
  include?: IndexRoutingAllocationInclude
  /**
   * Assign the index to a node whose attribute has all of the given values.
   * Each key is a node attribute: one of the built-in attributes `_name`, `_host_ip`, `_publish_ip`, `_ip`, `_host`, `_id` and `_tier`, or a custom node attribute.
   * Each value is a comma-separated string or an array of strings, and can use wildcards.
   */
  require?: IndexRoutingAllocationRequire
  initial_recovery?: IndexRoutingAllocationInitialRecovery
  disk?: IndexRoutingAllocationDisk
}

export type IndexRoutingAllocationRequire = Dictionary<
  string,
  string | string[]
>

export class IndexRoutingRebalance {
  enable: IndexRoutingRebalanceOptions
}

export enum IndexRoutingAllocationOptions {
  all,
  primaries,
  new_primaries,
  none
}

export enum IndexRoutingRebalanceOptions {
  all,
  primaries,
  replicas,
  none
}

export class IndexRoutingAllocationInclude {
  _tier_preference?: string
  _id?: Id
}

export class IndexRoutingAllocationInitialRecovery {
  _id?: Id
}

// ES: DiskThresholdSettings
export class IndexRoutingAllocationDisk {
  threshold_enabled?: boolean | string
}
