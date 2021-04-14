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

import { RolloverConditions } from '../indices/rollover/IndicesRolloverConditions'
import {
  DateString,
  IndexAlias,
  IndexName,
  integer,
  Name,
  PropertyName,
  Uuid,
  VersionNumber,
  VersionString
} from '../__common/common'
import { Time } from '../__common/common_options/time_unit/Time'
import { Property } from '../__common/mapping/types/Property'
import { Dictionary } from '../__spec_utils/Dictionary'
import { UserDefinedValue } from '../__spec_utils/UserDefinedValue'

export class ClusterStateBlocks {
  indices?: Dictionary<IndexName, Dictionary<string, ClusterStateBlockIndex>>
}

export class ClusterStateBlockIndex {
  description?: string
  retryable?: boolean
  levels?: string[]
  aliases?: Array<IndexAlias>
  aliases_version?: VersionNumber
  version?: VersionNumber
  mapping_version?: VersionNumber
  settings_version?: VersionNumber
  routing_num_shards?: VersionNumber
  state?: string // TODO: create export enum  of values
  settings?: Dictionary<IndexName, ClusterStateBlockIndexSetting>
  in_sync_allocations?: Dictionary<string, string[]>
  primary_terms?: Dictionary<string, integer>
  mappings?: Dictionary<string, ClusterStateBlockIndexMapping>
  rollover_info?: Dictionary<string, RolloverConditions> // TODO: not sure if this is correect
  timestamp_range?: Dictionary<string, UserDefinedValue>
  system?: boolean
}

export class ClusterStateBlockIndexSetting {
  routing?: ClusterStateBlockIndexSettingRouting
  refresh_interval?: Time
  number_of_shards: integer | string // TODO: not sure this correct
  number_of_replicas: integer | string // TODO: not sure this correct
  verified_before_close?: boolean | string // TODO: check if it should be only bool
  hidden?: boolean | string // TODO: check if it should be only bool
  format?: integer | string // TODO: check if it should be only integer
  provided_name?: Name
  auto_expand_replicas?: string
  creation_date?: DateString
  uuid?: Uuid
  version?: ClusterStateBlockIndexSettingVersion
  lifecycle?: ClusterStateBlockIndexSettingLifecycle
}

export class ClusterStateBlockIndexSettingRouting {
  allocation: ClusterStateBlockIndexSettingRoutingAllocation
}

export class ClusterStateBlockIndexSettingRoutingAllocation {
  include: Dictionary<string, string>
}

export class ClusterStateBlockIndexSettingVersion {
  created: VersionString
}

export class ClusterStateBlockIndexMapping {
  properties: Dictionary<PropertyName, Property>
}

export class ClusterStateBlockIndexSettingLifecycle {
  name: Name
}
