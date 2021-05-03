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
  Analytics,
  Ccr,
  DataStreams,
  DataTiers,
  Eql,
  Flattened,
  FrozenIndices,
  Ilm,
  MachineLearning,
  Monitoring,
  RuntimeFields,
  SearchableSnapshots,
  Security,
  Slm,
  Sql,
  Usage,
  Vector,
  Watcher
} from './types'

export class Response {
  body: {
    aggregate_metric: Usage
    analytics: Analytics
    watcher: Watcher
    ccr: Ccr
    data_frame?: Usage
    data_science?: Usage
    data_streams?: DataStreams
    data_tiers: DataTiers
    enrich?: Usage
    eql: Eql
    flattened?: Flattened
    frozen_indices: FrozenIndices
    graph: Usage
    ilm: Ilm
    logstash: Usage
    ml: MachineLearning
    monitoring: Monitoring
    rollup: Usage
    runtime_fields?: RuntimeFields
    spatial: Usage
    searchable_snapshots: SearchableSnapshots
    security: Security
    slm: Slm
    sql: Sql
    transform: Usage
    vectors: Vector
    voting_only: Usage
  }
}
