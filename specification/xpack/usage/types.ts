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

import { Phases } from '@ilm/_types/Phase'
import { Statistics } from '@slm/_types/SnapshotLifecycle'
import { Dictionary, SingleKeyDictionary } from '@spec_utils/Dictionary'
import { ByteSize, EmptyObject, Field, Name } from '@_types/common'
import { Job, JobStatistics } from '@ml/_types/Job'
import { integer, long, uint, ulong } from '@_types/Numeric'
import { AdditionalProperties } from '@spec_utils/behaviors'

export class Base {
  available: boolean
  enabled: boolean
}

export class Counter {
  active: long
  total: long
}

export class FeatureToggle {
  enabled: boolean
}

export class AlertingExecution {
  actions: Dictionary<string, ExecutionAction>
}

export class AlertingInput {
  input: Dictionary<string, Counter>
  trigger: Dictionary<string, Counter>
}

export class AnalyticsStatistics {
  boxplot_usage: long
  cumulative_cardinality_usage: long
  string_stats_usage: long
  top_metrics_usage: long
  t_test_usage: long
  moving_percentiles_usage: long
  normalize_usage: long
  rate_usage: long
  multi_terms_usage?: long
}

export class Audit extends FeatureToggle {
  outputs?: string[]
}

export class Datafeed {
  count: long
}

export class DataStreams extends Base {
  data_streams: long
  indices_count: long
}

export class DataTierPhaseStatistics {
  node_count: long
  index_count: long
  total_shard_count: long
  primary_shard_count: long
  doc_count: long
  total_size_bytes: long
  primary_size_bytes: long
  primary_shard_size_avg_bytes: long
  primary_shard_size_median_bytes: long
  primary_shard_size_mad_bytes: long
}

export class EqlFeatures {
  join: uint
  joins: EqlFeaturesJoin
  keys: EqlFeaturesKeys
  event: uint
  pipes: EqlFeaturesPipes
  sequence: uint
  sequences: EqlFeaturesSequences
}

export class EqlFeaturesJoin {
  join_queries_two: uint
  join_queries_three: uint
  join_until: uint
  join_queries_five_or_more: uint
  join_queries_four: uint
}

export class EqlFeaturesKeys {
  join_keys_two: uint
  join_keys_one: uint
  join_keys_three: uint
  join_keys_five_or_more: uint
  join_keys_four: uint
}

export class EqlFeaturesPipes {
  pipe_tail: uint
  pipe_head: uint
}

export class EqlFeaturesSequences {
  sequence_queries_three: uint
  sequence_queries_four: uint
  sequence_queries_two: uint
  sequence_until: uint
  sequence_queries_five_or_more: uint
  sequence_maxspan: uint
}

export class ExecutionAction {
  total: long
  total_in_ms: long
}

export class ForecastStatistics {
  forecasted_jobs: long
  memory_bytes: JobStatistics
  processing_time_ms: JobStatistics
  records: JobStatistics
  status: Dictionary<string, long>
  total: long
}

export class IlmPolicyStatistics {
  indices_managed: integer
  phases: Phases
}

export class Ilm {
  policy_count: integer
  policy_stats: IlmPolicyStatistics[]
}

export class IpFilter {
  http: boolean
  transport: boolean
}

export class MlJobForecasts {
  total: long
  forecasted_jobs: long
}

export class MlDataFrameAnalyticsJobs {
  memory_usage?: MlDataFrameAnalyticsJobsMemory
  _all: MlDataFrameAnalyticsJobsCount
  analysis_counts?: EmptyObject
}

export class MlDataFrameAnalyticsJobsMemory {
  peak_usage_bytes: JobStatistics
}

export class MlDataFrameAnalyticsJobsCount {
  count: long
}

export class MlInference {
  ingest_processors: Dictionary<string, MlInferenceIngestProcessor>
  trained_models: MlInferenceTrainedModels
}

export class MlInferenceIngestProcessor {
  num_docs_processed: MlInferenceIngestProcessorCount
  pipelines: MlCounter
  num_failures: MlInferenceIngestProcessorCount
  time_ms: MlInferenceIngestProcessorCount
}

export class MlInferenceTrainedModels {
  estimated_operations?: JobStatistics
  estimated_heap_memory_usage_bytes?: JobStatistics
  count?: MlInferenceTrainedModelsCount
  _all: MlCounter
}

export class MlInferenceIngestProcessorCount {
  max: long
  sum: long
  min: long
}

export class MlInferenceTrainedModelsCount {
  total: long
  prepackaged: long
  other: long
  regression: long
  classification: long
}

export class MlCounter {
  count: long
}

export class Query {
  count?: integer
  failed?: integer
  paging?: integer
  total?: integer
}

export class RealmCache {
  size: long
}

export class RoleMapping {
  enabled: integer
  size: integer
}

export class RuntimeFieldTypes extends Base {
  field_types: RuntimeFieldsType[]
}

export class RuntimeFieldsType {
  chars_max: long
  chars_total: long
  count: long
  doc_max: long
  doc_total: long
  index_count: long
  lang: string[]
  lines_max: long
  lines_total: long
  name: Field
  scriptless_count: long
  shadowed_count: long
  source_max: long
  source_total: long
}

export class SecurityRoles {
  native: SecurityRolesNative
  dls: SecurityRolesDls
  file: SecurityRolesFile
}

export class SecurityRolesNative {
  dls: boolean
  fls: boolean
  size: long
}

export class SecurityRolesDls {
  bit_set_cache: SecurityRolesDlsBitSetCache
}

export class SecurityRolesDlsBitSetCache {
  count: integer
  memory?: ByteSize
  memory_in_bytes: ulong
}

export class SecurityRolesFile {
  dls: boolean
  fls: boolean
  size: long
}

export class Alerting extends Base {
  count: Counter
  execution: AlertingExecution
  watch: AlertingInput
}

export class Analytics extends Base {
  stats: AnalyticsStatistics
}

export class Ccr extends Base {
  auto_follow_patterns_count: integer
  follower_indices_count: integer
}

export class DataTiers extends Base {
  data_warm: DataTierPhaseStatistics
  /** @since 7.13.0 */
  data_frozen?: DataTierPhaseStatistics
  data_cold: DataTierPhaseStatistics
  data_content: DataTierPhaseStatistics
  data_hot: DataTierPhaseStatistics
}

export class Eql extends Base {
  features: EqlFeatures
  queries: Dictionary<string, Query>
}

export class Flattened extends Base {
  field_count: integer
}

export class FrozenIndices extends Base {
  indices_count: long
}

export class AllJobs {
  count: integer
  detectors: Dictionary<string, integer>
  created_by: Dictionary<string, string>
  model_size: Dictionary<string, integer>
  forecasts: Dictionary<string, integer>
}

// The 'jobs' entry in MachineLearning can either contain a dictionary of
// individual jobs or a single summary entry under the key '_all'.
// The layout of the summary varies from that of the individual job,
// and is specified in the 'AllJobs' class (defined above).
export class Jobs implements AdditionalProperties<string, Job> {
  _all?: AllJobs
}

export class MachineLearning extends Base {
  datafeeds: Dictionary<string, Datafeed>
  // TODO: xPack marks the entire Job definition as optional
  //       while the MlJob has many required properties.
  jobs: Jobs
  node_count: integer
  data_frame_analytics_jobs: MlDataFrameAnalyticsJobs
  inference: MlInference
}

export class Monitoring extends Base {
  collection_enabled: boolean
  enabled_exporters: Dictionary<string, long>
}

export class Sql extends Base {
  features: Dictionary<string, integer>
  queries: Dictionary<string, Query>
}

export class Ssl {
  http: FeatureToggle
  transport: FeatureToggle
}

export class WatcherActions {
  actions: Dictionary<Name, WatcherActionTotals>
}

export class WatcherWatch {
  input: Dictionary<Name, Counter>
  condition?: Dictionary<Name, Counter>
  action?: Dictionary<Name, Counter>
  trigger: WatcherWatchTrigger
}

export class WatcherWatchTrigger {
  schedule?: WatcherWatchTriggerSchedule
  _all: Counter
}

export class WatcherActionTotals {
  total: long
  total_time_in_ms: long
}

export class Realm extends Base {
  name?: string[]
  order?: long[]
  size?: long[]
  cache?: RealmCache[]
  has_authorization_realms?: boolean[]
  has_default_username_pattern?: boolean[]
  has_truststore?: boolean[]
  is_authentication_delegated?: boolean[]
}

export class SearchableSnapshots extends Base {
  indices_count: integer
  full_copy_indices_count?: integer
  shared_cache_indices_count?: integer
}

export class Security extends Base {
  api_key_service: FeatureToggle
  anonymous: FeatureToggle
  audit: Audit
  fips_140: FeatureToggle
  ipfilter: IpFilter
  realms: Dictionary<string, Realm>
  role_mapping: Dictionary<string, RoleMapping>
  roles: SecurityRoles
  ssl: Ssl
  system_key?: FeatureToggle
  token_service: FeatureToggle
  operator_privileges: Base
}

export class Slm extends Base {
  policy_count?: integer
  policy_stats?: Statistics
}

export class Vector extends Base {
  dense_vector_dims_avg_count: integer
  dense_vector_fields_count: integer
  sparse_vector_fields_count?: integer
}

export class Watcher extends Base {
  execution: WatcherActions
  watch: WatcherWatch
  count: Counter
}

export class WatcherWatchTriggerSchedule extends Counter {
  cron: Counter
  _all: Counter
}
