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

import { VersionString } from '@_types/common'
import { DateTime, EpochTime, UnitMillis } from '@_types/Time'
import { LicenseStatus, LicenseType } from '@license/_types/License'

export class BuildInformation {
  date: DateTime
  hash: string
}

export class NativeCodeInformation {
  build_hash: string
  version: VersionString
}

export class MinimalLicenseInformation {
  expiry_date_in_millis: EpochTime<UnitMillis>
  mode: LicenseType
  status: LicenseStatus
  type: LicenseType
  uid: string
}

export class Features {
  aggregate_metric: Feature
  analytics: Feature
  ccr: Feature
  data_streams: Feature
  data_tiers: Feature
  enrich: Feature
  /**
   * @availability stack since=8.8.0
   */
  enterprise_search: Feature
  eql: Feature
  /**
   * @availability stack since=8.14.0
   */
  esql: Feature
  frozen_indices: Feature
  graph: Feature
  ilm: Feature
  logstash: Feature
  logsdb: Feature
  ml: Feature
  monitoring: Feature
  rollup: Feature
  runtime_fields?: Feature
  searchable_snapshots: Feature
  security: Feature
  slm: Feature
  spatial: Feature
  sql: Feature
  transform: Feature
  /**
   * @availability stack since=8.7.0
   */
  universal_profiling: Feature
  voting_only: Feature
  watcher: Feature
  /**
   * @availability stack since=8.2.0
   */
  archive: Feature
}

export class Feature {
  available: boolean
  description?: string
  enabled: boolean
  native_code_info?: NativeCodeInformation
}
