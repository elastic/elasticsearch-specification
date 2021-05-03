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

import {
  AnalyticsUsage,
  CcrUsage,
  DataStreamsUsage,
  DataTiersUsage,
  EqlUsage,
  FlattenedUsage,
  FrozenIndicesUsage,
  IlmUsage,
  MachineLearningUsage,
  MonitoringUsage,
  RuntimeFieldsUsage,
  SearchableSnapshotsUsage,
  SecurityUsage,
  SlmUsage,
  SqlUsage,
  Usage,
  VectorUsage,
  WatcherUsage
} from './types'

export class Response {
  body: {
    aggregate_metric: Usage
    analytics: AnalyticsUsage
    watcher: WatcherUsage
    ccr: CcrUsage
    data_frame?: Usage
    data_science?: Usage
    data_streams?: DataStreamsUsage
    data_tiers: DataTiersUsage
    enrich?: Usage
    eql: EqlUsage
    flattened?: FlattenedUsage
    frozen_indices: FrozenIndicesUsage
    graph: Usage
    ilm: IlmUsage
    logstash: Usage
    ml: MachineLearningUsage
    monitoring: MonitoringUsage
    rollup: Usage
    runtime_fields?: RuntimeFieldsUsage
    spatial: Usage
    searchable_snapshots: SearchableSnapshotsUsage
    security: SecurityUsage
    slm: SlmUsage
    sql: SqlUsage
    transform: Usage
    vectors: VectorUsage
    voting_only: Usage
  }
}
