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

class XPackUsageResponse extends ResponseBase {
  watcher: AlertingUsage
  ccr: CcrUsage
  data_frame: XPackUsage
  data_science: XPackUsage
  enrich: XPackUsage
  flattened: FlattenedUsage
  graph: XPackUsage
  ilm: IlmUsage
  logstash: XPackUsage
  ml: MachineLearningUsage
  monitoring: MonitoringUsage
  rollup: XPackUsage
  security: SecurityUsage
  slm: SlmUsage
  sql: SqlUsage
  transform: XPackUsage
  vectors: VectorUsage
  voting_only: XPackUsage
}
