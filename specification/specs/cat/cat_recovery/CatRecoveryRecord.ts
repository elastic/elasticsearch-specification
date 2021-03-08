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

class CatRecoveryRecord {
  bytes?: string
  b?: string
  bytes_percent?: Percentage
  bp?: Percentage
  bytes_recovered?: string
  br?: string
  bytes_total?: string
  tb?: string
  files?: string
  f?: string
  files_percent?: Percentage
  fp?: Percentage
  files_recovered?: string
  fr?: string
  files_total?: string
  tf?: string
  index?: IndexName
  i?: IndexName
  repository?: string
  rep?: string
  shard?: string
  s?: string
  snapshot?: string
  snap?: string
  source_host?: string
  shost?: string
  source_node?: string
  stage?: string
  st?: string
  target_host?: string
  thost?: string
  target_node?: string
  time?: string
  t?: string
  translog_ops?: string
  to?: string
  translog_ops_percent?: Percentage
  top?: Percentage
  translog_ops_recovered?: string
  tor?: string
  type?: Type
  ty?: Type
}
