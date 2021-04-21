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

import { ResponseBase } from '@common/Base'
import { AnalyticsUsage } from './AnalyticsUsage'
import { CcrUsage } from './CcrUsage'
import { DataStreamsUsage } from './DataStreamsUsage'
import { DataTiersUsage } from './DataTiersUsage'
import { EqlUsage } from './EqlUsage'
import { FlattenedUsage } from './FlattenedUsage'
import { FrozenIndicesUsage } from './FrozenIndicesUsage'
import { IlmUsage } from './IlmUsage'
import { MachineLearningUsage } from './MachineLearningUsage'
import { MonitoringUsage } from './MonitoringUsage'
import { RuntimeFieldsUsage } from './RuntimeFieldsUsage'
import { SearchableSnapshotsUsage } from './SearchableSnapshotsUsage'
import { SecurityUsage } from './SecurityUsage'
import { SlmUsage } from './SlmUsage'
import { SqlUsage } from './SqlUsage'
import { VectorUsage } from './VectorUsage'
import { WatcherUsage } from './WatcherUsage'
import { XPackUsage } from './XPackUsage'

export class XPackUsageResponse extends ResponseBase {
  aggregate_metric: XPackUsage
  analytics: AnalyticsUsage
  watcher: WatcherUsage
  ccr: CcrUsage
  data_frame?: XPackUsage
  data_science?: XPackUsage
  data_streams?: DataStreamsUsage
  data_tiers: DataTiersUsage
  enrich?: XPackUsage
  eql: EqlUsage
  flattened?: FlattenedUsage
  frozen_indices: FrozenIndicesUsage
  graph: XPackUsage
  ilm: IlmUsage
  logstash: XPackUsage
  ml: MachineLearningUsage
  monitoring: MonitoringUsage
  rollup: XPackUsage
  runtime_fields?: RuntimeFieldsUsage
  spatial: XPackUsage
  searchable_snapshots: SearchableSnapshotsUsage
  security: SecurityUsage
  slm: SlmUsage
  sql: SqlUsage
  transform: XPackUsage
  vectors: VectorUsage
  voting_only: XPackUsage
}
