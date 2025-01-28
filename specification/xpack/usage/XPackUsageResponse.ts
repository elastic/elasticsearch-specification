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
  Archive,
  Base,
  Ccr,
  DataStreams,
  DataTiers,
  Eql,
  Flattened,
  HealthStatistics,
  Ilm,
  MachineLearning,
  Monitoring,
  RuntimeFieldTypes,
  SearchableSnapshots,
  Security,
  Slm,
  Sql,
  Vector,
  Watcher
} from './types'

export class Response {
  body: {
    aggregate_metric: Base
    analytics: Analytics
    /**
     * @availability stack since=8.2.0
     * @availability serverless
     */
    archive: Archive
    watcher: Watcher
    ccr: Ccr
    data_frame?: Base
    data_science?: Base
    data_streams?: DataStreams
    data_tiers: DataTiers
    enrich?: Base
    eql: Eql
    flattened?: Flattened
    graph: Base
    health_api?: HealthStatistics
    ilm: Ilm
    logstash: Base
    ml: MachineLearning
    monitoring: Monitoring
    rollup: Base
    runtime_fields?: RuntimeFieldTypes
    spatial: Base
    searchable_snapshots: SearchableSnapshots
    security: Security
    slm: Slm
    sql: Sql
    transform: Base
    vectors?: Vector
    voting_only: Base
  }
}
