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

import { Phases } from '@ilm/_types/Phases'
import { Dictionary } from '@spec_utils/Dictionary'
import { ByteSize, EmptyObject, Field, Name } from '@_types/common'
import { Job, JobStatistics } from '@_types/ml/Job'
import { integer, long, uint, ulong } from '@_types/Numeric'
import { Statistics } from '@_types/slm/Statistics'

export class Usage {
  available: boolean
  enabled: boolean
}

export class SecurityFeatureToggle {
  enabled: boolean
}

export class AlertingExecution {
  actions: Dictionary<string, ExecutionAction>
}

export class AlertingInput {
  input: Dictionary<string, UsageCount>
  trigger: Dictionary<string, UsageCount>
}

export class AnalyticsStatsUsage {
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

export class AuditUsage extends SecurityFeatureToggle {
  outputs?: string[]
}

export class DatafeedCount {
  count: long
}

export class DataStreamsUsage extends Usage {
  data_streams: long
  indices_count: long
}

export class DataTierPhaseCountUsage {
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

export class EqlFeaturesUsage {
  join: uint
  joins: EqlFeaturesJoinUsage
  keys: EqlFeaturesKeysUsage
  event: uint
  pipes: EqlFeaturesPipesUsage
  sequence: uint
  sequences: EqlFeaturesSequencesUsage
}

export class EqlFeaturesJoinUsage {
  join_queries_two: uint
  join_queries_three: uint
  join_until: uint
  join_queries_five_or_more: uint
  join_queries_four: uint
}

export class EqlFeaturesKeysUsage {
  join_keys_two: uint
  join_keys_one: uint
  join_keys_three: uint
  join_keys_five_or_more: uint
  join_keys_four: uint
}

export class EqlFeaturesPipesUsage {
  pipe_tail: uint
  pipe_head: uint
}

export class EqlFeaturesSequencesUsage {
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

export class IlmUsage {
  policy_count: integer
  policy_stats: IlmPolicyStatistics[]
}

export class IpFilterUsage {
  http: boolean
  transport: boolean
}

export class CustomSettings {
  custom_urls?: UrlConfig[]
  created_by?: string
  job_tags?: Dictionary<string, string>
}

export class BaseUrlConfig {
  url_name: string
  url_value: string
}

export class KibanaUrlConfig extends BaseUrlConfig {
  time_range?: string
}

export type UrlConfig = BaseUrlConfig | KibanaUrlConfig

export class MlJobForecasts {
  total: long
  forecasted_jobs: long
}

export class MlDataFrameAnalyticsJobsUsage {
  memory_usage?: MlDataFrameAnalyticsJobsMemoryUsage
  _all: MlDataFrameAnalyticsJobsCountUsage
  analysis_counts?: EmptyObject
}

export class MlDataFrameAnalyticsJobsMemoryUsage {
  peak_usage_bytes: JobStatistics
}

export class MlDataFrameAnalyticsJobsCountUsage {
  count: long
}

export class MlInferenceUsage {
  ingest_processors: Dictionary<string, MlInferenceIngestProcessorUsage>
  trained_models: MlInferenceTrainedModelsUsage
}

export class MlInferenceIngestProcessorUsage {
  num_docs_processed: MlInferenceIngestProcessorCountUsage
  pipelines: MlUsageCounter
  num_failures: MlInferenceIngestProcessorCountUsage
  time_ms: MlInferenceIngestProcessorCountUsage
}

export class MlInferenceTrainedModelsUsage {
  estimated_operations?: JobStatistics
  estimated_heap_memory_usage_bytes?: JobStatistics
  count?: MlInferenceTrainedModelsCountUsage
  _all: MlUsageCounter
}

export class MlInferenceIngestProcessorCountUsage {
  max: long
  sum: long
  min: long
}

export class MlInferenceTrainedModelsCountUsage {
  total: long
  prepackaged: long
  other: long
  regression: long
  classification: long
}

export class MlUsageCounter {
  count: long
}

export class QueryUsage {
  count?: integer
  failed?: integer
  paging?: integer
  total?: integer
}

export class RealmCacheUsage {
  size: long
}

export class RoleMappingUsage {
  enabled: integer
  size: integer
}

export class RuntimeFieldsUsage extends Usage {
  field_types: RuntimeFieldsTypeUsage[]
}

export class RuntimeFieldsTypeUsage {
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

export class SecurityRolesUsage {
  native: SecurityRolesNativeUsage
  dls: SecurityRolesDlsUsage
  file: SecurityRolesFileUsage
}

export class SecurityRolesNativeUsage {
  dls: boolean
  fls: boolean
  size: long
}

export class SecurityRolesDlsUsage {
  bit_set_cache: SecurityRolesDlsBitSetCacheUsage
}

export class SecurityRolesDlsBitSetCacheUsage {
  count: integer
  memory?: ByteSize
  memory_in_bytes: ulong
}

export class SecurityRolesFileUsage {
  dls: boolean
  fls: boolean
  size: long
}

export class AlertingUsage extends Usage {
  count: UsageCount
  execution: AlertingExecution
  watch: AlertingInput
}

export class AnalyticsUsage extends Usage {
  stats: AnalyticsStatsUsage
}

export class CcrUsage extends Usage {
  auto_follow_patterns_count: integer
  follower_indices_count: integer
}

export class DataTiersUsage extends Usage {
  data_warm: DataTierPhaseCountUsage
  /** @since 7.13.0 */
  data_frozen?: DataTierPhaseCountUsage
  data_cold: DataTierPhaseCountUsage
  data_content: DataTierPhaseCountUsage
  data_hot: DataTierPhaseCountUsage
}

export class EqlUsage extends Usage {
  features: EqlFeaturesUsage
  queries: Dictionary<string, QueryUsage>
}

export class FlattenedUsage extends Usage {
  field_count: integer
}

export class FrozenIndicesUsage extends Usage {
  indices_count: long
}

export class MachineLearningUsage extends Usage {
  datafeeds: Dictionary<string, DatafeedCount>
  jobs: Dictionary<string, Job>
  node_count: integer
  data_frame_analytics_jobs: MlDataFrameAnalyticsJobsUsage
  inference: MlInferenceUsage
}

export class MonitoringUsage extends Usage {
  collection_enabled: boolean
  enabled_exporters: Dictionary<string, long>
}

export class SqlUsage extends Usage {
  features: Dictionary<string, integer>
  queries: Dictionary<string, QueryUsage>
}

export class SslUsage {
  http: SecurityFeatureToggle
  transport: SecurityFeatureToggle
}

export class UsageCount {
  active: long
  total: long
}

export class WatcherActionsUsage {
  actions: Dictionary<Name, WatcherActionTotalsUsage>
}

export class WatcherWatchUsage {
  input: Dictionary<Name, UsageCount>
  condition?: Dictionary<Name, UsageCount>
  action?: Dictionary<Name, UsageCount>
  trigger: WatcherWatchTriggerUsage
}

export class WatcherWatchTriggerUsage {
  schedule?: WatcherWatchTriggerScheduleUsage
  _all: UsageCount
}

export class WatcherActionTotalsUsage {
  total: long
  total_time_in_ms: long
}

export class RealmUsage extends Usage {
  name?: string[]
  order?: long[]
  size?: long[]
  cache?: RealmCacheUsage[]
  has_authorization_realms?: boolean[]
  has_default_username_pattern?: boolean[]
  has_truststore?: boolean[]
  is_authentication_delegated?: boolean[]
}

export class SearchableSnapshotsUsage extends Usage {
  indices_count: integer
  full_copy_indices_count?: integer
  shared_cache_indices_count?: integer
}

export class SecurityUsage extends Usage {
  api_key_service: SecurityFeatureToggle
  anonymous: SecurityFeatureToggle
  audit: AuditUsage
  fips_140: SecurityFeatureToggle
  ipfilter: IpFilterUsage
  realms: Dictionary<string, RealmUsage>
  role_mapping: Dictionary<string, RoleMappingUsage>
  roles: SecurityRolesUsage
  ssl: SslUsage
  system_key?: SecurityFeatureToggle
  token_service: SecurityFeatureToggle
  operator_privileges: Usage
}

export class SlmUsage extends Usage {
  policy_count?: integer
  policy_stats?: Statistics
}

export class VectorUsage extends Usage {
  dense_vector_dims_avg_count: integer
  dense_vector_fields_count: integer
  sparse_vector_fields_count?: integer
}

export class WatcherUsage extends Usage {
  execution: WatcherActionsUsage
  watch: WatcherWatchUsage
  count: UsageCount
}

export class WatcherWatchTriggerScheduleUsage extends UsageCount {
  cron: UsageCount
  _all: UsageCount
}
