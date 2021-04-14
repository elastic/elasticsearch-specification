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

export type AccessTokenGrantType = 'password' | 'client_credentials' | '_kerberos' | 'refresh_token'

export interface AcknowledgeState {
  state: AcknowledgementState
  timestamp: DateString
}

export type AcknowledgementState = 'awaits_successful_execution' | 'ackable' | 'acked'

export interface Action {
  action_type?: ActionType
  condition?: ConditionContainer
  foreach?: string
  max_iterations?: integer
  name?: string
  throttle_period?: Time
  throttle_period_in_millis?: EpochMillis
  transform?: TransformContainer
  index: ActionIndex
}

export type ActionExecutionMode = 'simulate' | 'force_simulate' | 'execute' | 'force_execute' | 'skip'

export interface ActionIndex {
  index: IndexName
}

export interface ActionStatus {
  ack: AcknowledgeState
  last_execution?: ExecutionState
  last_successful_execution?: ExecutionState
  last_throttle?: ThrottleState
}

export type ActionType = 'email' | 'webhook' | 'index' | 'logging' | 'slack' | 'pagerduty'

export interface ActivationState {
  active: boolean
  timestamp: Timestamp
}

export interface AdjacencyMatrixAggregation extends BucketAggregationBase {
  filters?: Record<string, QueryContainer>
}

export interface Aggregation {
  meta?: Record<string, any>
  name?: string
}

export interface AggregationContainer {
  adjacency_matrix?: AdjacencyMatrixAggregation
  aggs?: Record<string, AggregationContainer>
  aggregations?: Record<string, AggregationContainer>
  auto_date_histogram?: AutoDateHistogramAggregation
  avg?: AverageAggregation
  avg_bucket?: AverageBucketAggregation
  boxplot?: BoxplotAggregation
  bucket_script?: BucketScriptAggregation
  bucket_selector?: BucketSelectorAggregation
  bucket_sort?: BucketSortAggregation
  cardinality?: CardinalityAggregation
  children?: ChildrenAggregation
  composite?: CompositeAggregation
  cumulative_cardinality?: CumulativeCardinalityAggregation
  cumulative_sum?: CumulativeSumAggregation
  date_histogram?: DateHistogramAggregation
  date_range?: DateRangeAggregation
  derivative?: DerivativeAggregation
  diversified_sampler?: DiversifiedSamplerAggregation
  extended_stats?: ExtendedStatsAggregation
  extended_stats_bucket?: ExtendedStatsBucketAggregation
  filter?: QueryContainer
  filters?: FiltersAggregation
  geo_bounds?: GeoBoundsAggregation
  geo_centroid?: GeoCentroidAggregation
  geo_distance?: GeoDistanceAggregation
  geohash_grid?: GeoHashGridAggregation
  geo_line?: GeoLineAggregation
  geotile_grid?: GeoTileGridAggregation
  global?: GlobalAggregation
  histogram?: HistogramAggregation
  ip_range?: IpRangeAggregation
  inference?: InferenceAggregation
  line?: GeoLineAggregation
  matrix_stats?: MatrixStatsAggregation
  max?: MaxAggregation
  max_bucket?: MaxBucketAggregation
  median_absolute_deviation?: MedianAbsoluteDeviationAggregation
  meta?: Record<string, any>
  min?: MinAggregation
  min_bucket?: MinBucketAggregation
  missing?: MissingAggregation
  moving_avg?: MovingAverageAggregation
  moving_percentiles?: MovingPercentilesAggregation
  moving_fn?: MovingFunctionAggregation
  multi_terms?: MultiTermsAggregation
  nested?: NestedAggregation
  normalize?: NormalizeAggregation
  parent?: ParentAggregation
  percentile_ranks?: PercentileRanksAggregation
  percentiles?: PercentilesAggregation
  percentiles_bucket?: PercentilesBucketAggregation
  range?: RangeAggregation
  rare_terms?: RareTermsAggregation
  rate?: RateAggregation
  reverse_nested?: ReverseNestedAggregation
  sampler?: SamplerAggregation
  scripted_metric?: ScriptedMetricAggregation
  serial_diff?: SerialDifferencingAggregation
  significant_terms?: SignificantTermsAggregation
  significant_text?: SignificantTextAggregation
  stats?: StatsAggregation
  stats_bucket?: StatsBucketAggregation
  string_stats?: StringStatsAggregation
  sum?: SumAggregation
  sum_bucket?: SumBucketAggregation
  terms?: TermsAggregation
  top_hits?: TopHitsAggregation
  t_test?: TTestAggregation
  top_metrics?: TopMetricsAggregation
  value_count?: ValueCountAggregation
  weighted_avg?: WeightedAverageAggregation
  variable_width_histogram?: VariableWidthHistogramAggregation
}

export interface AggregationRange {
  from?: double | string
  key?: string
  to?: double | string
}

export interface Alias {
  filter?: QueryContainer
  index_routing?: Routing
  is_hidden?: boolean
  is_write_index?: boolean
  routing?: Routing
  search_routing?: Routing
}

export interface AliasDefinition {
  filter?: QueryContainer
  index_routing?: string
  is_write_index?: boolean
  routing?: string
  search_routing?: string
}

export interface AllField {
  analyzer: string
  enabled: boolean
  omit_norms: boolean
  search_analyzer: string
  similarity: string
  store: boolean
  store_term_vector_offsets: boolean
  store_term_vector_payloads: boolean
  store_term_vector_positions: boolean
  store_term_vectors: boolean
}

export interface AlwaysCondition {
}

export interface AnalysisConfig {
  bucket_span: TimeSpan
  categorization_field_name?: Field
  categorization_filters?: Array<string>
  detectors: Array<Detector>
  influencers?: Array<Field>
  latency?: Time
  multivariate_by_fields?: boolean
  per_partition_categorization?: PerPartitionCategorization
  summary_count_field_name?: Field
  categorization_analyzer?: CategorizationAnalyzer | string
}

export interface AnalysisLimits {
  categorization_examples_limit?: long
  model_memory_limit: string
}

export interface AnalysisMemoryLimit {
  model_memory_limit: string
}

export interface ApiKey {
  name: Name
  expiration?: Time
  role_descriptors?: Array<Record<string, any>>
}

export interface ApiKeyApplication {
  application: string
  privileges: Array<string>
  resources: Array<string>
}

export type ApiKeyGrantType = 'access_token' | 'password'

export interface ApiKeyPrivileges {
  names: Indices
  privileges: Array<string>
}

export interface ApiKeyRole {
  cluster: Array<string>
  index: Array<ApiKeyPrivileges>
  applications?: Array<ApiKeyApplication>
}

export interface AppendProcessor extends ProcessorBase {
  field: Field
  value: Array<any>
  allow_duplicates?: boolean
}

export interface ApplicationPrivileges {
  application: string
  privileges: Array<string>
  resources: Array<string>
}

export interface ApplicationPrivilegesCheck {
  application: string
  privileges: Array<string>
  resources: Array<string>
}

export type AppliesTo = 'actual' | 'typical' | 'diff_from_typical' | 'time'

export interface ArrayCompareCondition {
  array_path: string
  comparison: string
  path: string
  quantifier: Quantifier
  value: any
}

export interface AsciiFoldingTokenFilter extends TokenFilterBase {
  preserve_original: boolean
}

export interface AsyncSearchDeleteRequest extends RequestBase {
  id: Id
}

export interface AsyncSearchGetRequest extends RequestBase {
  id: Id
  typed_keys?: boolean
  body?: {
    keep_alive?: Time
    typed_keys?: boolean
    wait_for_completion_timeout?: Time
  }
}

export interface AsyncSearchStatusRequest extends RequestBase {
  id: Id
}

export interface AsyncSearchSubmitRequest extends RequestBase {
  index?: Indices
  batched_reduce_size?: long
  wait_for_completion_timeout?: Time
  keep_on_completion?: boolean
  typed_keys?: boolean
  body?: {
    aggs?: Record<string, AggregationContainer>
    allow_no_indices?: boolean
    allow_partial_search_results?: boolean
    analyzer?: string
    analyze_wildcard?: boolean
    batched_reduce_size?: long
    collapse?: FieldCollapse
    default_operator?: DefaultOperator
    df?: string
    docvalue_fields?: Fields
    expand_wildcards?: ExpandWildcards
    explain?: boolean
    from?: integer
    highlight?: Highlight
    ignore_throttled?: boolean
    ignore_unavailable?: boolean
    indices_boost?: Array<Record<IndexName, double>>
    keep_alive?: Time
    keep_on_completion?: boolean
    lenient?: boolean
    max_concurrent_shard_requests?: long
    min_score?: double
    post_filter?: QueryContainer
    preference?: string
    profile?: boolean
    pit?: PointInTimeReference
    query?: QueryContainer
    query_on_query_string?: string
    request_cache?: boolean
    rescore?: Array<Rescore>
    routing?: Routing
    script_fields?: Record<string, ScriptField>
    search_after?: Array<any>
    search_type?: SearchType
    sequence_number_primary_term?: boolean
    size?: integer
    sort?: Sort
    _source?: boolean | SourceFilter
    stats?: Array<string>
    stored_fields?: Fields
    suggest?: Record<string, SuggestContainer>
    suggest_field?: Field
    suggest_mode?: SuggestMode
    suggest_size?: long
    suggest_text?: string
    terminate_after?: long
    timeout?: string
    track_scores?: boolean
    track_total_hits?: boolean
    typed_keys?: boolean
    version?: boolean
    wait_for_completion_timeout?: Time
    fields?: Array<Field | DateField>
  }
}

export interface AttachmentProcessor extends ProcessorBase {
  field: Field
  ignore_missing?: boolean
  indexed_chars?: long
  indexed_chars_field?: Field
  properties?: Array<string>
  target_field?: Field
  resource_name?: string
}

export interface AutoDateHistogramAggregation extends BucketAggregationBase {
  buckets?: integer
  field?: Field
  format?: string
  minimum_interval?: MinimumInterval
  missing?: DateString
  offset?: string
  params?: Record<string, any>
  script?: Script
  time_zone?: string
}

export interface AverageAggregation extends FormatMetricAggregationBase {
}

export interface AverageBucketAggregation extends PipelineAggregationBase {
}

export interface BinaryProperty extends DocValuesPropertyBase {
  type: 'binary'
}

export interface BoolQuery extends QueryBase {
  filter?: QueryContainer | Array<QueryContainer>
  minimum_should_match?: MinimumShouldMatch
  must?: QueryContainer | Array<QueryContainer>
  must_not?: QueryContainer | Array<QueryContainer>
  should?: QueryContainer | Array<QueryContainer>
}

export interface BooleanProperty extends DocValuesPropertyBase {
  boost?: double
  fielddata?: NumericFielddata
  index?: boolean
  null_value?: boolean
  type: 'boolean'
}

export interface BoostingQuery extends QueryBase {
  negative_boost?: double
  negative?: QueryContainer
  positive?: QueryContainer
}

export type BoundaryScanner = 'chars' | 'sentence' | 'word'

export interface BoundingBox {
  bottom_right?: GeoLocation
  top_left?: GeoLocation
  wkt?: string
}

export interface BoxplotAggregation extends MetricAggregationBase {
  compression?: double
}

export interface BucketAggregationBase extends Aggregation {
  aggregations?: Record<string, AggregationContainer>
}

export interface BucketScriptAggregation extends PipelineAggregationBase {
  script?: Script
}

export interface BucketSelectorAggregation extends PipelineAggregationBase {
  script?: Script
}

export interface BucketSortAggregation extends Aggregation {
  from?: integer
  gap_policy?: GapPolicy
  size?: integer
  sort?: Sort
}

export interface BucketsPath {
}

export interface BulkCreateOperation extends BulkOperation {
}

export interface BulkDeleteOperation extends BulkOperation {
}

export interface BulkIndexOperation extends BulkOperation {
}

export interface BulkMonitoringRequest extends RequestBase {
  stub_a: string
  stub_b: string
  body: {
    stub_c: string
  }
}

export interface BulkOperation {
  _id: Id
  _index: IndexName
  retry_on_conflict: integer
  routing: Routing
  version: VersionNumber
  version_type: VersionType
}

export interface BulkOperationContainer {
  index?: BulkIndexOperation
  create?: BulkCreateOperation
  update?: BulkUpdateOperation
  delete?: BulkDeleteOperation
}

export interface BulkRequest<TSource = unknown> extends RequestBase {
  index?: IndexName
  type?: Type
  pipeline?: string
  refresh?: Refresh
  routing?: Routing
  _source?: boolean
  _source_excludes?: Fields
  _source_includes?: Fields
  timeout?: Time
  type_query_string?: string
  wait_for_active_shards?: WaitForActiveShards
  require_alias?: boolean
  body: Array<BulkOperationContainer | TSource>
}

export interface BulkUpdateOperation extends BulkOperation {
}

export type ByteSize = long | string

export type Bytes = 'b' | 'k' | 'kb' | 'm' | 'mb' | 'g' | 'gb' | 't' | 'tb' | 'p' | 'pb'

export interface BytesProcessor extends ProcessorBase {
  field: Field
  ignore_missing?: boolean
  target_field?: Field
}

export interface CancelTasksRequest extends RequestBase {
  task_id?: TaskId
  actions?: string | Array<string>
  nodes?: Array<string>
  parent_task_id?: string
}

export interface CardinalityAggregation extends MetricAggregationBase {
  precision_threshold?: integer
  rehash?: boolean
}

export interface CatAliasesRequest extends CatRequestBase {
  name?: Names
  expand_wildcards?: ExpandWildcards
}

export interface CatAllocationRequest extends CatRequestBase {
  node_id?: NodeIds
  bytes?: Bytes
}

export interface CatCountRequest extends CatRequestBase {
  index?: Indices
}

export interface CatDataFrameAnalyticsRequest extends CatRequestBase {
  id?: Id
  allow_no_match?: boolean
  bytes?: Bytes
}

export interface CatDatafeedsRequest extends CatRequestBase {
  datafeed_id?: Id
  allow_no_datafeeds?: boolean
}

export interface CatFielddataRequest extends CatRequestBase {
  fields?: Fields
  bytes?: Bytes
}

export interface CatHealthRequest extends CatRequestBase {
  include_timestamp?: boolean
  ts?: boolean
}

export interface CatHelpRequest extends CatRequestBase {
}

export interface CatIndicesRequest extends CatRequestBase {
  index?: Indices
  bytes?: Bytes
  expand_wildcards?: ExpandWildcards
  health?: Health
  include_unloaded_segments?: boolean
  pri?: boolean
}

export interface CatJobsRequest extends CatRequestBase {
  job_id?: Id
  allow_no_jobs?: boolean
  bytes?: Bytes
}

export interface CatMasterRequest extends CatRequestBase {
}

export interface CatNodeAttributesRequest extends CatRequestBase {
}

export interface CatNodesRequest extends CatRequestBase {
  bytes?: Bytes
  full_id?: boolean | string
}

export interface CatPendingTasksRequest extends CatRequestBase {
}

export interface CatPluginsRequest extends CatRequestBase {
}

export interface CatRecoveryRequest extends CatRequestBase {
  index?: Indices
  active_only?: boolean
  bytes?: Bytes
  detailed?: boolean
}

export interface CatRepositoriesRequest extends CatRequestBase {
}

export interface CatRequestBase extends RequestBase, CommonCatQueryParameters {
}

export interface CatSegmentsRequest extends CatRequestBase {
  index?: Indices
  bytes?: Bytes
}

export interface CatShardsRequest extends CatRequestBase {
  index?: Indices
  bytes?: Bytes
}

export interface CatSnapshotsRequest extends CatRequestBase {
  repository?: Names
  ignore_unavailable?: boolean
}

export interface CatTasksRequest extends CatRequestBase {
  actions?: Array<string>
  detailed?: boolean
  node_id?: Array<string>
  parent_task?: long
}

export interface CatTemplatesRequest extends CatRequestBase {
  name?: Name
}

export interface CatThreadPoolRequest extends CatRequestBase {
  thread_pool_patterns?: Names
  size?: Size | boolean
}

export interface CatTrainedModelsRequest extends CatRequestBase {
  model_id?: Id
  allow_no_match?: boolean
  bytes?: Bytes
  from?: integer
  size?: integer
}

export interface CatTransformsRequest extends CatRequestBase {
  transform_id?: Id
  allow_no_match?: boolean
  from?: integer
  size?: integer
}

export interface CategorizationAnalyzer {
  filter?: Array<string | TokenFilter>
  tokenizer?: string | Tokenizer
  char_filter?: Array<string | CharFilter>
}

export type CategoryId = string

export interface CcrStatsRequest extends RequestBase {
}

export interface ChainInput {
  inputs: Record<string, InputContainer>
}

export interface ChainTransform {
  transforms: Array<TransformContainer>
}

export type CharFilter = HtmlStripCharFilter | MappingCharFilter | PatternReplaceTokenFilter

export interface CharFilterBase {
  type: string
  version?: VersionString
}

export interface CharGroupTokenizer extends TokenizerBase {
  tokenize_on_chars: Array<string>
}

export interface ChiSquareHeuristic {
  background_is_superset: boolean
  include_negatives: boolean
}

export type ChildScoreMode = 'none' | 'avg' | 'sum' | 'max' | 'min'

export interface ChildrenAggregation extends BucketAggregationBase {
  type?: RelationName
}

export interface ChunkingConfig {
  mode: ChunkingMode
  time_span?: Time
}

export type ChunkingMode = 'auto' | 'manual' | 'off'

export interface CircleProcessor extends ProcessorBase {
  error_distance: double
  field: Field
  ignore_missing: boolean
  shape_type: ShapeType
  target_field: Field
}

export interface ClassificationInferenceOptions {
  num_top_classes?: integer
  num_top_feature_importance_values?: integer
  prediction_field_type?: string
}

export interface CleanupRepositoryRequest extends RequestBase {
  repository: Name
  master_timeout?: Time
  timeout?: Time
}

export interface ClearApiKeyCacheRequest extends RequestBase {
  ids?: Ids
}

export interface ClearScrollRequest extends RequestBase {
  scroll_id?: Ids
  body?: {
    scroll_id?: Ids
  }
}

export interface ClearSqlCursorRequest extends RequestBase {
  body: {
    cursor?: string
  }
}

export interface CloseJobRequest extends RequestBase {
  job_id: Id
  allow_no_jobs?: boolean
  force?: boolean
  timeout?: Time
}

export interface ClosePointInTimeRequest extends RequestBase {
  body?: {
    id: Id
  }
}

export interface ClusterAllocationExplainRequest extends RequestBase {
  include_disk_info?: boolean
  include_yes_decisions?: boolean
  body?: {
    index?: IndexName
    primary?: boolean
    shard?: integer
  }
}

export interface ClusterComponentTemplateExistsRequest extends RequestBase {
  stub_a: string
  stub_b: string
  body?: {
    stub_c: string
  }
}

export interface ClusterDeleteComponentTemplateRequest extends RequestBase {
  name: Name
  master_timeout?: Time
  timeout?: Time
}

export interface ClusterDeleteVotingConfigExclusionsRequest extends RequestBase {
}

export interface ClusterGetComponentTemplateRequest extends RequestBase {
  name?: Name
  flat_settings?: boolean
  local?: boolean
  master_timeout?: Time
}

export interface ClusterGetSettingsRequest extends RequestBase {
  flat_settings?: boolean
  include_defaults?: boolean
  master_timeout?: Time
  timeout?: Time
}

export interface ClusterHealthRequest extends RequestBase {
  index?: Indices
  expand_wildcards?: ExpandWildcards
  level?: Level
  local?: boolean
  master_timeout?: Time
  timeout?: Time
  wait_for_active_shards?: WaitForActiveShards
  wait_for_events?: WaitForEvents
  wait_for_nodes?: string
  wait_for_no_initializing_shards?: boolean
  wait_for_no_relocating_shards?: boolean
  wait_for_status?: WaitForStatus
}

export interface ClusterIndexTemplate {
  aliases?: Record<string, AliasDefinition>
  mappings?: TypeMapping
  settings?: IndexSettings
}

export interface ClusterPendingTasksRequest extends RequestBase {
  local?: boolean
  master_timeout?: Time
}

export interface ClusterPostVotingConfigExclusionsRequest extends RequestBase {
  node_names?: Names
  node_ids?: Ids
  timeout?: Time
  wait_for_removal?: boolean
}

export interface ClusterPutComponentTemplateRequest extends RequestBase {
  name: Name
  create?: boolean
  master_timeout?: Time
  body: {
    template: ClusterIndexTemplate
    aliases?: Record<string, AliasDefinition>
    mappings?: TypeMapping
    settings?: IndexSettings
    version?: VersionNumber
    _meta?: IndexMetaData
  }
}

export interface ClusterPutSettingsRequest extends RequestBase {
  flat_settings?: boolean
  master_timeout?: Time
  timeout?: Time
  body: {
    persistent?: Record<string, any>
    transient?: Record<string, any>
  }
}

export interface ClusterRemoteInfoRequest extends RequestBase {
}

export interface ClusterRerouteCommand {
  cancel: ClusterRerouteCommandAction
}

export interface ClusterRerouteCommandAction {
  index: IndexName
  shard: integer
  node: string
}

export interface ClusterRerouteRequest extends RequestBase {
  dry_run?: boolean
  explain?: boolean
  metric?: Metrics
  retry_failed?: boolean
  master_timeout?: Time
  timeout?: Time
  body?: {
    commands?: Array<ClusterRerouteCommand>
  }
}

export interface ClusterStateRequest extends RequestBase {
  metric?: Metrics
  index?: Indices
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  flat_settings?: boolean
  ignore_unavailable?: boolean
  local?: boolean
  master_timeout?: Time
  wait_for_metadata_version?: VersionNumber
  wait_for_timeout?: Time
}

export interface ClusterStatsRequest extends RequestBase {
  node_id?: NodeIds
  flat_settings?: boolean
  timeout?: Time
}

export interface CommonGramsTokenFilter extends TokenFilterBase {
  common_words: Array<string>
  common_words_path: string
  ignore_case: boolean
  query_mode: boolean
}

export interface CommonTermsQuery extends QueryBase {
  analyzer?: string
  cutoff_frequency?: double
  high_freq_operator?: Operator
  low_freq_operator?: Operator
  minimum_should_match?: MinimumShouldMatch
  query?: string
}

export interface CompareCondition {
  comparison: string
  path: string
  value: any
}

export interface CompletionProperty extends DocValuesPropertyBase {
  analyzer?: string
  contexts?: Array<SuggestContext>
  max_input_length?: integer
  preserve_position_increments?: boolean
  preserve_separators?: boolean
  search_analyzer?: string
  type: 'completion'
}

export interface CompletionSuggester extends SuggesterBase {
  contexts?: Record<string, string | Array<string> | GeoLocation | Array<SuggestContextQuery>>
  fuzzy?: SuggestFuzziness
  prefix?: string
  regex?: string
  skip_duplicates?: boolean
}

export interface CompositeAggregation extends BucketAggregationBase {
  after?: Record<string, string | float | null>
  size?: integer
  sources?: Array<Record<string, CompositeAggregationSource>>
}

export interface CompositeAggregationSource {
  terms?: TermsAggregation
  histogram?: HistogramAggregation
  date_histogram?: DateHistogramAggregation
  geotile_grid?: GeoTileGridAggregation
}

export interface CompoundWordTokenFilterBase extends TokenFilterBase {
  hyphenation_patterns_path: string
  max_subword_size: integer
  min_subword_size: integer
  min_word_size: integer
  only_longest_match: boolean
  word_list: Array<string>
  word_list_path: string
}

export interface ConditionContainer {
  always?: AlwaysCondition
  array_compare?: ArrayCompareCondition
  compare?: CompareCondition
  never?: NeverCondition
  script?: ScriptCondition
}

export type ConditionOperator = 'gt' | 'gte' | 'lt' | 'lte'

export interface ConditionTokenFilter extends TokenFilterBase {
  filter: Array<string>
  script: Script
}

export type Conflicts = 'abort' | 'proceed'

export type ConnectionScheme = 'http' | 'https'

export interface ConstantKeywordProperty extends PropertyBase {
  value?: any
  type: 'constant_keyword'
}

export interface ConstantScoreQuery extends QueryBase {
  filter?: QueryContainer
  boost?: float
}

export type Context = string | GeoLocation

export interface ConvertProcessor extends ProcessorBase {
  field: Field
  ignore_missing?: boolean
  target_field: Field
  type: ConvertProcessorType
}

export type ConvertProcessorType = 'integer' | 'long' | 'float' | 'double' | 'string' | 'boolean' | 'auto'

export type CoreProperty = ObjectProperty | NestedProperty | SearchAsYouTypeProperty | TextProperty | DocValuesProperty

export interface CorePropertyBase extends PropertyBase {
  copy_to?: Fields
  similarity?: string
  store?: boolean
}

export interface CountRequest extends RequestBase {
  index?: Indices
  type?: Types
  allow_no_indices?: boolean
  analyzer?: string
  analyze_wildcard?: boolean
  default_operator?: DefaultOperator
  df?: string
  expand_wildcards?: ExpandWildcards
  ignore_throttled?: boolean
  ignore_unavailable?: boolean
  lenient?: boolean
  min_score?: double
  preference?: string
  query_on_query_string?: string
  routing?: Routing
  terminate_after?: long
  q?: string
  body?: {
    query?: QueryContainer
  }
}

export interface CreateApiKeyRequest extends RequestBase {
  refresh?: Refresh
  body: {
    expiration?: Time
    name?: string
    role_descriptors?: Record<string, ApiKeyRole>
  }
}

export interface CreateFollowIndexRequest extends RequestBase {
  index: IndexName
  wait_for_active_shards?: WaitForActiveShards
  body: {
    leader_index?: IndexName
    max_outstanding_read_requests?: long
    max_outstanding_write_requests?: long
    max_read_request_operation_count?: long
    max_read_request_size?: string
    max_retry_delay?: Time
    max_write_buffer_count?: long
    max_write_buffer_size?: string
    max_write_request_operation_count?: long
    max_write_request_size?: string
    read_poll_timeout?: Time
    remote_cluster?: string
  }
}

export interface CreateRequest<TDocument = unknown> extends RequestBase {
  id: Id
  index: IndexName
  type?: Type
  pipeline?: string
  refresh?: Refresh
  routing?: Routing
  timeout?: Time
  version?: VersionNumber
  version_type?: VersionType
  wait_for_active_shards?: WaitForActiveShards
  body: TDocument
}

export interface CreateRollupJobRequest extends RequestBase {
  id: Id
  body: {
    cron?: string
    groups?: RollupGroupings
    index_pattern?: string
    metrics?: Array<RollupFieldMetric>
    page_size?: long
    rollup_index?: IndexName
  }
}

export interface CronExpression extends ScheduleBase {
}

export interface CsvProcessor extends ProcessorBase {
  empty_value: any
  description?: string
  field: Field
  ignore_missing?: boolean
  quote?: string
  separator?: string
  target_fields: Fields
  trim: boolean
}

export interface CumulativeCardinalityAggregation extends PipelineAggregationBase {
}

export interface CumulativeSumAggregation extends PipelineAggregationBase {
}

export interface DailySchedule {
  at: Array<string> | TimeOfDay
}

export interface DataDescription {
  format?: string
  time_field: Field
  time_format?: string
  field_delimiter?: string
}

export type DataStreamName = string

export interface DatafeedIndicesOptions {
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
  ignore_throttled?: boolean
}

export interface DateDecayFunctionKeys extends DecayFunctionBase {
}
export type DateDecayFunction = DateDecayFunctionKeys |
    { [property: string]: DecayPlacement<DateMath, Time> }

export interface DateField {
  field: Field
  format?: string
  include_unmapped?: boolean
}

export interface DateHistogramAggregation extends BucketAggregationBase {
  calendar_interval?: DateInterval | Time
  extended_bounds?: ExtendedBounds<DateMath | long>
  hard_bounds?: ExtendedBounds<DateMath | long>
  field?: Field
  fixed_interval?: DateInterval | Time
  format?: string
  interval?: DateInterval | Time
  min_doc_count?: integer
  missing?: DateString
  offset?: Time
  order?: HistogramOrder
  params?: Record<string, any>
  script?: Script
  time_zone?: string
}

export interface DateHistogramRollupGrouping {
  delay?: Time
  field: Field
  format?: string
  interval?: Time
  calendar_interval?: Time
  fixed_interval?: Time
  time_zone?: string
}

export interface DateIndexNameProcessor extends ProcessorBase {
  date_formats: Array<string>
  date_rounding: DateRounding
  field: Field
  index_name_format: string
  index_name_prefix: string
  locale: string
  timezone: string
}

export type DateInterval = 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year'

export type DateMath = string

export interface DateNanosProperty extends DocValuesPropertyBase {
  boost?: double
  format?: string
  ignore_malformed?: boolean
  index?: boolean
  null_value?: DateString
  precision_step?: integer
  type: 'date_nanos'
}

export interface DateProcessor extends ProcessorBase {
  field: Field
  formats: Array<string>
  locale?: string
  target_field: Field
  timezone: string
}

export interface DateProperty extends DocValuesPropertyBase {
  boost?: double
  fielddata?: NumericFielddata
  format?: string
  ignore_malformed?: boolean
  index?: boolean
  null_value?: DateString
  precision_step?: integer
  type: 'date'
}

export interface DateRangeAggregation extends BucketAggregationBase {
  field?: Field
  format?: string
  missing?: Missing
  ranges?: Array<DateRangeExpression>
  time_zone?: string
}

export interface DateRangeExpression {
  from?: DateMath | float
  from_as_string?: string
  to_as_string?: string
  key?: string
  to?: DateMath | float
  doc_count?: long
}

export interface DateRangeProperty extends RangePropertyBase {
  format?: string
  type: 'date_range'
}

export type DateRounding = 's' | 'm' | 'h' | 'd' | 'w' | 'M' | 'y'

export type DateString = string

export type Day = 'sunday' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday'

export interface DeactivateWatchRequest extends RequestBase {
  watch_id: Name
}

export type DecayFunction = DateDecayFunction | NumericDecayFunction | GeoDecayFunction

export interface DecayFunctionBase extends ScoreFunctionBase {
  multi_value_mode?: MultiValueMode
}

export interface DecayPlacement<TOrigin = unknown, TScale = unknown> {
  decay?: double
  offset?: TScale
  scale?: TScale
  origin?: TOrigin
}

export type DefaultOperator = 'AND' | 'OR'

export interface DelayedDataCheckConfig {
  check_window?: Time
  enabled: boolean
}

export interface DeleteAutoFollowPatternRequest extends RequestBase {
  name: Name
}

export interface DeleteAutoscalingPolicyRequest extends RequestBase {
  stub_a: string
  stub_b: string
  body?: {
    stub_c: string
  }
}

export interface DeleteByQueryRequest extends RequestBase {
  index: Indices
  type?: Types
  allow_no_indices?: boolean
  analyzer?: string
  analyze_wildcard?: boolean
  conflicts?: Conflicts
  default_operator?: DefaultOperator
  df?: string
  expand_wildcards?: ExpandWildcards
  from?: long
  ignore_unavailable?: boolean
  lenient?: boolean
  preference?: string
  query_on_query_string?: string
  refresh?: boolean
  request_cache?: boolean
  requests_per_second?: long
  routing?: Routing
  q?: string
  scroll?: Time
  scroll_size?: long
  search_timeout?: Time
  search_type?: SearchType
  size?: long
  slices?: long
  sort?: Array<string>
  source_enabled?: boolean
  source_excludes?: Fields
  source_includes?: Fields
  stats?: Array<string>
  terminate_after?: long
  timeout?: Time
  version?: boolean
  wait_for_active_shards?: WaitForActiveShards
  wait_for_completion?: boolean
  body: {
    max_docs?: long
    query?: QueryContainer
    slice?: SlicedScroll
  }
}

export interface DeleteByQueryRethrottleRequest extends RequestBase {
  task_id: Id
  requests_per_second?: long
}

export interface DeleteCalendarEventRequest extends RequestBase {
  calendar_id: Id
  event_id: Id
}

export interface DeleteCalendarJobRequest extends RequestBase {
  calendar_id: Id
  job_id: Id
}

export interface DeleteCalendarRequest extends RequestBase {
  calendar_id: Id
}

export interface DeleteDanglingIndexRequest extends RequestBase {
  stub_a: string
  stub_b: string
  body?: {
    stub_c: string
  }
}

export interface DeleteDataFrameAnalyticsRequest extends RequestBase {
  id: Id
  force?: boolean
  timeout?: Time
}

export interface DeleteDatafeedRequest extends RequestBase {
  datafeed_id: Id
  force?: boolean
}

export interface DeleteEnrichPolicyRequest extends RequestBase {
  name: Name
}

export interface DeleteExpiredDataRequest extends RequestBase {
  name?: Name
  requests_per_second?: float
  timeout?: Time
  body?: {
    requests_per_second?: float
    timeout?: Time
  }
}

export interface DeleteFilterRequest extends RequestBase {
  filter_id: Id
}

export interface DeleteForecastRequest extends RequestBase {
  job_id: Id
  forecast_id?: Id
  allow_no_forecasts?: boolean
  timeout?: Time
}

export interface DeleteJobRequest extends RequestBase {
  job_id: Id
  force?: boolean
  wait_for_completion?: boolean
}

export interface DeleteLicenseRequest extends RequestBase {
}

export interface DeleteLifecycleRequest extends RequestBase {
  policy?: Name
  policy_id: Id
}

export interface DeleteModelSnapshotRequest extends RequestBase {
  job_id: Id
  snapshot_id: Id
}

export interface DeletePipelineRequest extends RequestBase {
  id: Id
  master_timeout?: Time
  timeout?: Time
}

export interface DeleteRequest extends RequestBase {
  id: Id
  index: IndexName
  type?: Type
  if_primary_term?: long
  if_seq_no?: SequenceNumber
  refresh?: Refresh
  routing?: Routing
  timeout?: Time
  version?: VersionNumber
  version_type?: VersionType
  wait_for_active_shards?: WaitForActiveShards
}

export interface DeleteRollupJobRequest extends RequestBase {
  id: Id
}

export interface DeleteScriptRequest extends RequestBase {
  id: Id
  master_timeout?: Time
  timeout?: Time
}

export interface DeleteSnapshotLifecycleRequest extends RequestBase {
  policy_id: Name
}

export interface DeleteTrainedModelAliasRequest extends RequestBase {
  model_alias: Name
  model_id: Id
}

export interface DeleteTrainedModelRequest extends RequestBase {
  model_id: Id
}

export interface DeleteTransformRequest extends RequestBase {
  transform_id: Name
  force?: boolean
}

export interface DeleteWatchRequest extends RequestBase {
  id: Name
}

export type DelimitedPayloadEncoding = 'int' | 'float' | 'identity'

export interface DelimitedPayloadTokenFilter extends TokenFilterBase {
  delimiter: string
  encoding: DelimitedPayloadEncoding
}

export interface DeprecationInfoRequest extends RequestBase {
  index?: IndexName
}

export interface DerivativeAggregation extends PipelineAggregationBase {
}

export interface DetectionRule {
  actions: Array<RuleAction>
  conditions: Array<RuleCondition>
  scope?: Record<Field, FilterRef>
}

export interface Detector {
  by_field_name?: Field
  custom_rules?: Array<DetectionRule>
  detector_description?: string
  detector_index?: integer
  exclude_frequent?: ExcludeFrequent
  field_name?: Field
  function: string
  use_null?: boolean
  over_field_name?: Field
  partition_field_name?: Field
}

export interface DirectGenerator {
  field: Field
  max_edits?: integer
  max_inspections?: float
  max_term_freq?: float
  min_doc_freq?: float
  min_word_length?: integer
  post_filter?: string
  pre_filter?: string
  prefix_length?: integer
  size?: integer
  suggest_mode?: SuggestMode
}

export interface DisMaxQuery extends QueryBase {
  queries?: Array<QueryContainer>
  tie_breaker?: double
  boost?: float
}

export interface DissectProcessor extends ProcessorBase {
  append_separator: string
  field: Field
  ignore_missing: boolean
  pattern: string
}

export type Distance = string

export interface DistanceFeatureQuery extends QueryBase {
  origin?: Array<number> | GeoCoordinate | DateMath
  pivot?: Distance | Time
  field?: Field
}

export type DistanceUnit = 'in' | 'ft' | 'yd' | 'mi' | 'nmi' | 'km' | 'm' | 'cm' | 'mm'

export interface DiversifiedSamplerAggregation extends BucketAggregationBase {
  execution_hint?: SamplerAggregationExecutionHint
  max_docs_per_value?: integer
  script?: Script
  shard_size?: integer
  field?: Field
}

export interface DocValueField {
  field: Field
  format?: string
}

export type DocValuesProperty = BinaryProperty | BooleanProperty | DateProperty | DateNanosProperty | KeywordProperty | NumberProperty | RangeProperty | GeoPointProperty | GeoShapeProperty | CompletionProperty | GenericProperty | IpProperty | Murmur3HashProperty | ShapeProperty | TokenCountProperty | VersionProperty | WildcardProperty | PointProperty

export interface DocValuesPropertyBase extends CorePropertyBase {
  doc_values?: boolean
}

export interface DocumentExistsRequest extends RequestBase {
  id: Id
  index: IndexName
  type?: Type
  preference?: string
  realtime?: boolean
  refresh?: boolean
  routing?: Routing
  source_enabled?: boolean
  source_excludes?: Fields
  source_includes?: Fields
  stored_fields?: Fields
  version?: VersionNumber
  version_type?: VersionType
}

export interface DotExpanderProcessor extends ProcessorBase {
  field: Field
  path?: string
}

export interface DoubleRangeProperty extends RangePropertyBase {
  type: 'double_range'
}

export interface DropProcessor extends ProcessorBase {
}

export type DynamicMapping = 'strict' | 'runtime' | 'true' | 'false'

export interface DynamicTemplate {
  mapping?: PropertyBase
  match?: string
  match_mapping_type?: string
  match_pattern?: MatchType
  path_match?: string
  path_unmatch?: string
  unmatch?: string
}

export type EdgeNGramSide = 'front' | 'back'

export interface EdgeNGramTokenFilter extends TokenFilterBase {
  max_gram: integer
  min_gram: integer
  side: EdgeNGramSide
}

export interface EdgeNGramTokenizer extends TokenizerBase {
  custom_token_chars: string
  max_gram: integer
  min_gram: integer
  token_chars: Array<TokenChar>
}

export interface ElisionTokenFilter extends TokenFilterBase {
  articles: Array<string>
  articles_case: boolean
}

export interface EmptyObject {
}

export interface EnrichPolicy {
  enrich_fields: Fields
  indices: Indices
  match_field: Field
  query?: string
}

export interface EnrichProcessor extends ProcessorBase {
  field: Field
  ignore_missing?: boolean
  max_matches?: integer
  override?: boolean
  policy_name: string
  shape_relation?: GeoShapeRelation
  target_field: Field
}

export interface EnrichStatsRequest extends RequestBase {
}

export type EpochMillis = string | long

export interface EqlDeleteRequest extends RequestBase {
  id: Id
}

export interface EqlGetRequest extends RequestBase {
  id: Id
  keep_alive?: Time
  wait_for_completion_timeout?: Time
}

export interface EqlGetStatusRequest extends RequestBase {
  id: Id
}

export interface EqlSearchFieldFormatted {
  field: Field
  format: string
}

export interface EqlSearchRequest extends RequestBase {
  index: IndexName
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
  keep_alive?: Time
  keep_on_completion?: boolean
  wait_for_completion_timeout?: Time
  body: {
    query: string
    case_sensitive?: boolean
    event_category_field?: Field
    tiebreaker_field?: Field
    timestamp_field?: Field
    fetch_size?: uint
    filter?: QueryContainer | Array<QueryContainer>
    keep_alive?: Time
    keep_on_completion?: boolean
    wait_for_completion_timeout?: Time
    size?: integer | float
    fields?: Array<Field | EqlSearchFieldFormatted>
  }
}

export interface EstimateModelMemoryRequest extends RequestBase {
  body: {
    analysis_config?: AnalysisConfig
    max_bucket_cardinality?: Record<Field, long>
    overall_cardinality?: Record<Field, long>
  }
}

export interface EwmaModelSettings {
  alpha?: float
}

export type ExcludeFrequent = 'all' | 'none' | 'by' | 'over'

export interface ExecuteEnrichPolicyRequest extends RequestBase {
  name: Name
  wait_for_completion?: boolean
}

export interface ExecutePainlessScriptRequest extends RequestBase {
  body?: {
    context?: string
    context_setup?: PainlessContextSetup
    script?: InlineScript
  }
}

export interface ExecuteRetentionRequest extends RequestBase {
}

export interface ExecuteSnapshotLifecycleRequest extends RequestBase {
  policy_id: Name
}

export interface ExecutionState {
  successful: boolean
  timestamp: DateString
}

export interface ExistsQuery extends QueryBase {
  field?: Field
}

export type ExpandWildcardOptions = 'open' | 'closed' | 'hidden' | 'none' | 'all'

export type ExpandWildcards = ExpandWildcardOptions | Array<ExpandWildcardOptions> | string

export interface ExplainLifecycleRequest extends RequestBase {
  index: IndexName
  only_errors?: boolean
  only_managed?: boolean
}

export interface ExplainRequest extends RequestBase {
  id: Id
  index: IndexName
  type?: Type
  analyzer?: string
  analyze_wildcard?: boolean
  default_operator?: DefaultOperator
  df?: string
  lenient?: boolean
  preference?: string
  query_on_query_string?: string
  routing?: Routing
  _source?: boolean | Fields | SourceFilter
  _source_excludes?: Fields
  _source_includes?: Fields
  stored_fields?: Fields
  q?: string
  body?: {
    query?: QueryContainer
  }
}

export interface ExtendedBounds<T = unknown> {
  max: T
  min: T
}

export interface ExtendedStatsAggregation extends FormatMetricAggregationBase {
  sigma?: double
}

export interface ExtendedStatsBucketAggregation extends PipelineAggregationBase {
  sigma?: double
}

export interface FailProcessor extends ProcessorBase {
  message: string
}

export type Field = string

export interface FieldAliasProperty extends PropertyBase {
  path?: Field
  type: 'alias'
}

export interface FieldCapabilitiesBodyIndexFilter {
  range?: FieldCapabilitiesBodyIndexFilterRange
  match_none?: EmptyObject
  term?: FieldCapabilitiesBodyIndexFilterTerm
}

export interface FieldCapabilitiesBodyIndexFilterRange {
  timestamp: FieldCapabilitiesBodyIndexFilterRangeTimestamp
}

export interface FieldCapabilitiesBodyIndexFilterRangeTimestamp {
  gte?: integer
  gt?: integer
  lte?: integer
  lt?: integer
}

export interface FieldCapabilitiesBodyIndexFilterTerm {
  versionControl: FieldCapabilitiesBodyIndexFilterTermVersionControl
}

export interface FieldCapabilitiesBodyIndexFilterTermVersionControl {
  value: string
}

export interface FieldCapabilitiesRequest extends RequestBase {
  index?: Indices
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  fields?: Fields
  ignore_unavailable?: boolean
  include_unmapped?: boolean
  body?: {
    index_filter?: FieldCapabilitiesBodyIndexFilter
  }
}

export interface FieldCollapse {
  field: Field
  inner_hits?: InnerHits | Array<InnerHits>
  max_concurrent_group_searches?: integer
}

export interface FieldLookup {
  id?: Id
  index?: IndexName
  path?: Field
  routing?: Routing
}

export interface FieldNamesField {
  enabled: boolean
}

export interface FieldSecurity {
  except?: Fields
  grant: Fields
}

export interface FieldSort {
  missing?: Missing
  mode?: SortMode
  nested?: NestedSortValue
  order?: SortOrder
  unmapped_type?: FieldType
}

export interface FieldStat {
  count: number
  cardinality: number
  top_hits: Array<TopHit>
  mean_value?: number
  median_value?: number
  max_value?: number
  min_value?: number
  earliest?: string
  latest?: string
}

export type FieldType = 'none' | 'geo_point' | 'geo_shape' | 'ip' | 'binary' | 'keyword' | 'text' | 'search_as_you_type' | 'date' | 'date_nanos' | 'boolean' | 'completion' | 'nested' | 'object' | 'murmur3' | 'token_count' | 'percolator' | 'integer' | 'long' | 'short' | 'byte' | 'float' | 'half_float' | 'scaled_float' | 'double' | 'integer_range' | 'float_range' | 'long_range' | 'double_range' | 'date_range' | 'ip_range' | 'alias' | 'join' | 'rank_feature' | 'rank_features' | 'flattened' | 'shape' | 'histogram' | 'constant_keyword'

export type FieldValueFactorModifier = 'none' | 'log' | 'log1p' | 'log2p' | 'ln' | 'ln1p' | 'ln2p' | 'square' | 'sqrt' | 'reciprocal'

export interface FieldValueFactorScoreFunction extends ScoreFunctionBase {
  field: Field
  factor?: double
  missing?: double
  modifier?: FieldValueFactorModifier
}

export interface FielddataFrequencyFilter {
  max: double
  min: double
  min_segment_size: integer
}

export type Fields = Field | Array<Field>

export interface FilterRef {
  filter_id: Id
  filter_type: RuleFilterType
}

export interface FiltersAggregation extends BucketAggregationBase {
  filters?: Record<string, QueryContainer> | Array<QueryContainer>
  other_bucket?: boolean
  other_bucket_key?: string
}

export interface FindStructureRequest<TBody = unknown> {
  charset?: string
  column_names?: string
  delimiter?: string
  explain?: boolean
  format?: string
  grok_pattern?: string
  has_header_row?: boolean
  lines_to_sample?: uint
  quote?: string
  should_trim_fields?: boolean
  timeout?: Time
  timestamp_field?: Field
  timestamp_format?: string
  body: TBody
}

export interface FindStructureResponse {
  charset: string
  has_header_row: boolean
  has_byte_order_marker: boolean
  format: string
  field_stats: Record<Field, FieldStat>
  sample_start: string
  num_messages_analyzed: number
  mappings: TypeMapping
  quote: string
  delimiter: string
  need_client_timezone: boolean
  num_lines_analyzed: number
  column_names?: Array<string>
  explanation?: Array<string>
  grok_pattern?: string
  multiline_start_pattern?: string
  exclude_lines_pattern?: string
  java_timestamp_formats?: Array<string>
  joda_timestamp_formats?: Array<string>
  timestamp_field?: string
  should_trim_fields?: boolean
}

export interface FingerprintTokenFilter extends TokenFilterBase {
  max_output_size: integer
  separator: string
}

export interface FlattenedProperty extends PropertyBase {
  boost?: double
  depth_limit?: integer
  doc_values?: boolean
  eager_global_ordinals?: boolean
  index?: boolean
  index_options?: IndexOptions
  null_value?: string
  similarity?: string
  split_queries_on_whitespace?: boolean
  type: 'flattened'
}

export interface FloatRangeProperty extends RangePropertyBase {
  type: 'float_range'
}

export interface FlushJobRequest extends RequestBase {
  job_id: Id
  skip_time?: string
  body?: {
    advance_time?: DateString
    calc_interim?: boolean
    end?: DateString
    start?: DateString
  }
}

export interface FollowIndexStatsRequest extends RequestBase {
  index: Indices
}

export interface FollowInfoRequest extends RequestBase {
  index: Indices
}

export interface ForeachProcessor extends ProcessorBase {
  field: Field
  ignore_missing?: boolean
  processor: ProcessorContainer
}

export interface ForecastJobRequest extends RequestBase {
  job_id: Id
  body?: {
    duration?: Time
    expires_in?: Time
  }
}

export interface ForgetFollowerIndexRequest extends RequestBase {
  index: IndexName
  body: {
    follower_cluster?: string
    follower_index?: IndexName
    follower_index_uuid?: string
    leader_remote_cluster?: string
  }
}

export interface FormatMetricAggregationBase extends MetricAggregationBase {
  format?: string
}

export interface FormattableMetricAggregation extends MetricAggregationBase {
  format?: string
}

export type FunctionBoostMode = 'multiply' | 'replace' | 'sum' | 'avg' | 'max' | 'min'

export interface FunctionScoreContainer {
  exp?: DecayFunction
  gauss?: DecayFunction
  linear?: DecayFunction
  field_value_factor?: FieldValueFactorScoreFunction
  random_score?: RandomScoreFunction
  script_score?: ScriptScoreFunction
  filter?: QueryContainer
  weight?: double
}

export type FunctionScoreMode = 'multiply' | 'sum' | 'avg' | 'first' | 'max' | 'min'

export interface FunctionScoreQuery extends QueryBase {
  boost_mode?: FunctionBoostMode
  functions?: Array<FunctionScoreContainer>
  max_boost?: double
  min_score?: double
  query?: QueryContainer
  score_mode?: FunctionScoreMode
  boost?: float
}

export type Fuzziness = string | integer

export interface FuzzyQuery extends QueryBase {
  max_expansions?: integer
  prefix_length?: integer
  rewrite?: MultiTermQueryRewrite
  transpositions?: boolean
  fuzziness?: Fuzziness
  value: any
}

export type GapPolicy = 'skip' | 'insert_zeros'

export interface GenericProperty extends DocValuesPropertyBase {
  analyzer: string
  boost: double
  fielddata: StringFielddata
  ignore_malformed: boolean
  index: boolean
  index_options: IndexOptions
  norms: boolean
  null_value: string
  position_increment_gap: integer
  search_analyzer: string
  term_vector: TermVectorOption
  type: string
}

export interface GeoBoundingBoxQuery extends QueryBase {
  bounding_box?: BoundingBox
  type?: GeoExecution
  validation_method?: GeoValidationMethod
}

export interface GeoBoundsAggregation extends MetricAggregationBase {
  wrap_longitude?: boolean
}

export interface GeoCentroidAggregation extends MetricAggregationBase {
  count?: long
  location?: GeoLocation
}

export type GeoCoordinate = string | Array<double> | ThreeDimensionalPoint

export interface GeoDecayFunctionKeys extends DecayFunctionBase {
}
export type GeoDecayFunction = GeoDecayFunctionKeys |
    { [property: string]: DecayPlacement<GeoLocation, Distance> }

export interface GeoDistanceAggregation extends BucketAggregationBase {
  distance_type?: GeoDistanceType
  field?: Field
  origin?: GeoLocation | string
  ranges?: Array<AggregationRange>
  unit?: DistanceUnit
}

export interface GeoDistanceQuery extends QueryBase {
  distance?: Distance
  distance_type?: GeoDistanceType
  location?: GeoLocation
  validation_method?: GeoValidationMethod
}

export interface GeoDistanceSortKeys {
  mode?: SortMode
  distance_type?: GeoDistanceType
  order?: SortOrder
  unit?: DistanceUnit
}
export type GeoDistanceSort = GeoDistanceSortKeys |
    { [property: string]: GeoLocation | Array<GeoLocation> }

export type GeoDistanceType = 'arc' | 'plane'

export type GeoExecution = 'memory' | 'indexed'

export interface GeoHashGridAggregation extends BucketAggregationBase {
  bounds?: BoundingBox
  field?: Field
  precision?: GeoHashPrecision
  shard_size?: integer
  size?: integer
}

export type GeoHashPrecision = number

export interface GeoIpProcessor extends ProcessorBase {
  database_file: string
  field: Field
  first_only: boolean
  ignore_missing: boolean
  properties: Array<string>
  target_field: Field
}

export interface GeoLineAggregation {
  point: GeoLinePoint
  sort: GeoLineSort
  include_sort?: boolean
  sort_order?: SortOrder
  size?: integer
}

export interface GeoLinePoint {
  field: Field
}

export interface GeoLineSort {
  field: Field
}

export type GeoLocation = string | Array<double> | TwoDimensionalPoint

export type GeoOrientation = 'right' | 'RIGHT' | 'counterclockwise' | 'COUNTERCLOCKWISE' | 'ccw' | 'CCW' | 'left' | 'LEFT' | 'clockwise' | 'CLOCKWISE' | 'cw' | 'CW'

export interface GeoPointProperty extends DocValuesPropertyBase {
  ignore_malformed?: boolean
  ignore_z_value?: boolean
  null_value?: GeoLocation
  type: 'geo_point'
}

export interface GeoPolygonQuery extends QueryBase {
  points?: Array<GeoLocation>
  validation_method?: GeoValidationMethod
}

export interface GeoShape {
  type?: string
}

export interface GeoShapeProperty extends DocValuesPropertyBase {
  coerce?: boolean
  ignore_malformed?: boolean
  ignore_z_value?: boolean
  orientation?: GeoOrientation
  strategy?: GeoStrategy
  type: 'geo_shape'
}

export interface GeoShapeQuery extends QueryBase {
  ignore_unmapped?: boolean
  indexed_shape?: FieldLookup
  relation?: GeoShapeRelation
  shape?: GeoShape
}

export type GeoShapeRelation = 'intersects' | 'disjoint' | 'within' | 'contains'

export type GeoStrategy = 'recursive' | 'term'

export interface GeoTileGridAggregation extends BucketAggregationBase {
  field?: Field
  precision?: GeoTilePrecision
  shard_size?: integer
  size?: integer
}

export type GeoTilePrecision = number

export type GeoValidationMethod = 'coerce' | 'ignore_malformed' | 'strict'

export interface GetAnomalyRecordsRequest extends RequestBase {
  job_id: Id
  exclude_interim?: boolean
  from?: integer
  size?: integer
  start?: DateString
  end?: DateString
  body?: {
    desc?: boolean
    exclude_interim?: boolean
    page?: Page
    record_score?: double
    sort?: Field
    start?: DateString
    end?: DateString
  }
}

export interface GetApiKeyRequest extends RequestBase {
  id?: string
  name?: string
  owner?: boolean
  realm_name?: string
  username?: string
}

export interface GetAutoFollowPatternRequest extends RequestBase {
  name?: Name
}

export interface GetAutoscalingCapacityRequest extends RequestBase {
  stub_a: string
  stub_b: string
  body?: {
    stub_c: string
  }
}

export interface GetAutoscalingPolicyRequest extends RequestBase {
  stub_a: string
  stub_b: string
  body?: {
    stub_c: string
  }
}

export interface GetBasicLicenseStatusRequest extends RequestBase {
}

export interface GetBucketsRequest extends RequestBase {
  job_id: Id
  timestamp?: Timestamp
  from?: integer
  size?: integer
  exclude_interim?: boolean
  sort?: Field
  desc?: boolean
  start?: DateString
  end?: DateString
  body?: {
    anomaly_score?: double
    desc?: boolean
    exclude_interim?: boolean
    expand?: boolean
    page?: Page
    sort?: Field
    start?: DateString
    end?: DateString
  }
}

export interface GetCalendarEventsRequest extends RequestBase {
  calendar_id: Id
  job_id?: Id
  end?: DateString
  from?: integer
  start?: string
  size?: integer
  body?: {
    end?: DateString
    from?: integer
    start?: string
    size?: integer
  }
}

export interface GetCalendarsRequest extends RequestBase {
  calendar_id?: Id
  body?: {
    page?: Page
  }
}

export interface GetCategoriesRequest extends RequestBase {
  job_id: Id
  category_id?: CategoryId
  body?: {
    page?: Page
  }
}

export interface GetCertificatesRequest extends RequestBase {
}

export interface GetDatafeedStatsRequest extends RequestBase {
  datafeed_id?: Ids
  allow_no_datafeeds?: boolean
}

export interface GetDatafeedsRequest extends RequestBase {
  datafeed_id?: Id
  allow_no_datafeeds?: boolean
  exclude_generated?: boolean
}

export interface GetEnrichPolicyRequest extends RequestBase {
  name?: Names
}

export interface GetFeaturesRequest extends RequestBase {
  stub_a: string
  stub_b: string
  body?: {
    stub_c: string
  }
}

export interface GetFiltersRequest extends RequestBase {
  filter_id?: Id
  from?: integer
  size?: integer
}

export interface GetIlmStatusRequest extends RequestBase {
}

export interface GetInfluencersRequest extends RequestBase {
  job_id: Id
  body?: {
    descending?: boolean
    end?: DateString
    exclude_interim?: boolean
    influencer_score?: double
    page?: Page
    sort?: Field
    start?: DateString
  }
}

export interface GetJobStatsRequest extends RequestBase {
  job_id?: Id
  allow_no_jobs?: boolean
}

export interface GetJobsRequest extends RequestBase {
  job_id?: Ids
  allow_no_jobs?: boolean
  exclude_generated?: boolean
}

export interface GetLicenseRequest extends RequestBase {
  accept_enterprise?: boolean
  local?: boolean
}

export interface GetLifecycleRequest extends RequestBase {
  policy?: Name
  policy_id?: Id
}

export interface GetModelSnapshotsRequest extends RequestBase {
  job_id: Id
  snapshot_id?: Id
  body?: {
    desc?: boolean
    end?: DateString
    page?: Page
    sort?: Field
    start?: DateString
  }
}

export interface GetOverallBucketsRequest extends RequestBase {
  job_id: Id
  body?: {
    allow_no_jobs?: boolean
    bucket_span?: Time
    end?: DateString
    exclude_interim?: boolean
    overall_score?: double
    start?: DateString
    top_n?: integer
  }
}

export interface GetPipelineRequest extends RequestBase {
  id?: Id
  master_timeout?: Time
  summary?: boolean
}

export interface GetRequest extends RequestBase {
  id: Id
  index: IndexName
  type?: Type
  preference?: string
  realtime?: boolean
  refresh?: boolean
  routing?: Routing
  source_enabled?: boolean
  _source_excludes?: Fields
  _source_includes?: Fields
  stored_fields?: Fields
  version?: VersionNumber
  version_type?: VersionType
  _source?: boolean | string | Array<string>
}

export interface GetRollupCapabilitiesRequest extends RequestBase {
  id?: Id
}

export interface GetRollupIndexCapabilitiesRequest extends RequestBase {
  index: Id
}

export interface GetRollupJobRequest extends RequestBase {
  id?: Id
}

export interface GetScriptContextRequest extends RequestBase {
  stub_a: integer
  stub_b: integer
  body?: {
    stub_c: integer
  }
}

export interface GetScriptLanguagesRequest extends RequestBase {
  stub_a: integer
  stub_b: integer
  body?: {
    stub_c: integer
  }
}

export interface GetScriptRequest extends RequestBase {
  id: Id
  master_timeout?: Time
}

export interface GetSnapshotLifecycleManagementStatusRequest extends RequestBase {
}

export interface GetSnapshotLifecycleRequest extends RequestBase {
  policy_id?: Names
}

export interface GetSnapshotLifecycleStatsRequest extends RequestBase {
}

export interface GetTaskRequest extends RequestBase {
  task_id: Id
  timeout?: Time
  wait_for_completion?: boolean
}

export interface GetTransformRequest extends RequestBase {
  transform_id?: Name
  allow_no_match?: boolean
  from?: integer
  size?: integer
  exclude_generated?: boolean
}

export interface GetTransformStatsRequest extends RequestBase {
  transform_id: Name
  allow_no_match?: boolean
  from?: long
  size?: long
}

export interface GetTrialLicenseStatusRequest extends RequestBase {
}

export interface GetWatchRequest extends RequestBase {
  id: Name
}

export interface GlobalAggregation extends BucketAggregationBase {
}

export interface GoogleNormalizedDistanceHeuristic {
  background_is_superset: boolean
}

export interface GrantApiKeyRequest extends RequestBase {
  body: {
    api_key: ApiKey
    grant_type: ApiKeyGrantType
    access_token?: string
    username?: string
    password?: string
  }
}

export interface GraphExploreControls {
  sample_diversity?: SampleDiversity
  sample_size?: integer
  timeout?: Time
  use_significance: boolean
}

export interface GraphExploreRequest extends RequestBase {
  index: Indices
  type?: Types
  routing?: Routing
  timeout?: Time
  body?: {
    connections?: Hop
    controls?: GraphExploreControls
    query?: QueryContainer
    vertices?: Array<GraphVertexDefinition>
  }
}

export interface GraphVertexDefinition {
  exclude?: Array<string>
  field: Field
  include?: Array<GraphVertexInclude>
  min_doc_count?: long
  shard_min_doc_count?: long
  size?: integer
}

export interface GraphVertexInclude {
  boost: double
  term: string
}

export interface GrokProcessor extends ProcessorBase {
  field: Field
  ignore_missing?: boolean
  pattern_definitions: Record<string, string>
  patterns: Array<string>
  trace_match?: boolean
}

export interface GrokProcessorPatternsRequest extends RequestBase {
}

export type GroupBy = 'nodes' | 'parents' | 'none'

export interface GsubProcessor extends ProcessorBase {
  field: Field
  ignore_missing?: boolean
  pattern: string
  replacement: string
  target_field?: Field
}

export interface HasChildQuery extends QueryBase {
  ignore_unmapped?: boolean
  inner_hits?: InnerHits
  max_children?: integer
  min_children?: integer
  query?: QueryContainer
  score_mode?: ChildScoreMode
  type?: RelationName
}

export interface HasParentQuery extends QueryBase {
  ignore_unmapped?: boolean
  inner_hits?: InnerHits
  parent_type?: RelationName
  query?: QueryContainer
  score?: boolean
}

export interface HdrMethod {
  number_of_significant_value_digits?: integer
}

export type Health = 'green' | 'yellow' | 'red'

export interface Highlight {
  fields: Record<Field, HighlightField>
  type?: HighlighterType
  boundary_chars?: string
  boundary_max_scan?: integer
  boundary_scanner?: BoundaryScanner
  boundary_scanner_locale?: string
  encoder?: HighlighterEncoder
  fragmenter?: HighlighterFragmenter
  fragment_offset?: integer
  fragment_size?: integer
  max_fragment_length?: integer
  no_match_size?: integer
  number_of_fragments?: integer
  order?: HighlighterOrder
  post_tags?: Array<string>
  pre_tags?: Array<string>
  require_field_match?: boolean
  tags_schema?: HighlighterTagsSchema
  highlight_query?: QueryContainer
  max_analyzed_offset?: string | integer
}

export interface HighlightField {
  boundary_chars?: string
  boundary_max_scan?: integer
  boundary_scanner?: BoundaryScanner
  boundary_scanner_locale?: string
  field?: Field
  force_source?: boolean
  fragmenter?: HighlighterFragmenter
  fragment_offset?: integer
  fragment_size?: integer
  highlight_query?: QueryContainer
  matched_fields?: Fields
  max_fragment_length?: integer
  no_match_size?: integer
  number_of_fragments?: integer
  order?: HighlighterOrder
  phrase_limit?: integer
  post_tags?: Array<string>
  pre_tags?: Array<string>
  require_field_match?: boolean
  tags_schema?: HighlighterTagsSchema
  type?: HighlighterType | string
}

export type HighlighterEncoder = 'default' | 'html'

export type HighlighterFragmenter = 'simple' | 'span'

export type HighlighterOrder = 'score'

export type HighlighterTagsSchema = 'styled'

export type HighlighterType = 'plain' | 'fvh' | 'unified'

export interface HistogramAggregation extends BucketAggregationBase {
  extended_bounds?: ExtendedBounds<double>
  hard_bounds?: ExtendedBounds<double>
  field?: Field
  interval?: double
  min_doc_count?: integer
  missing?: double
  offset?: double
  order?: HistogramOrder
  script?: Script
  format?: string
}

export interface HistogramOrder {
  _count?: SortOrder
  _key?: SortOrder
}

export interface HistogramProperty extends PropertyBase {
  ignore_malformed?: boolean
  type: 'histogram'
}

export interface HistogramRollupGrouping {
  fields: Fields
  interval: long
}

export interface HoltLinearModelSettings {
  alpha?: float
  beta?: float
}

export interface HoltWintersModelSettings {
  alpha?: float
  beta?: float
  gamma?: float
  pad?: boolean
  period?: integer
  type?: HoltWintersType
}

export type HoltWintersType = 'add' | 'mult'

export interface Hop {
  connections?: Hop
  query: QueryContainer
  vertices: Array<GraphVertexDefinition>
}

export interface HourlySchedule {
  minute: Array<integer>
}

export interface HtmlStripCharFilter extends CharFilterBase {
}

export interface HttpInput {
  extract: Array<string>
  request: HttpInputRequestDefinition
  response_content_type: ResponseContentType
}

export interface HttpInputAuthentication {
  basic: HttpInputBasicAuthentication
}

export interface HttpInputBasicAuthentication {
  password: string
  username: string
}

export type HttpInputMethod = 'head' | 'get' | 'post' | 'put' | 'delete'

export interface HttpInputProxy {
  host: string
  port: integer
}

export interface HttpInputRequestDefinition {
  auth?: HttpInputAuthentication
  body?: string
  connection_timeout?: Time
  headers?: Record<string, string>
  host?: string
  method?: HttpInputMethod
  params?: Record<string, string>
  path?: string
  port?: integer
  proxy?: HttpInputProxy
  read_timeout?: Time
  scheme?: ConnectionScheme
  url?: string
}

export interface HunspellTokenFilter extends TokenFilterBase {
  dedup: boolean
  dictionary: string
  locale: string
  longest_only: boolean
}

export interface HyphenationDecompounderTokenFilter extends CompoundWordTokenFilterBase {
}

export type Id = string

export type Ids = Id | Array<Id>

export interface IdsQuery extends QueryBase {
  values?: Array<Id> | Array<long>
}

export interface ImportDanglingIndexRequest extends RequestBase {
  stub_a: string
  stub_b: string
  body?: {
    stub_c: string
  }
}

export type IndexAlias = string

export type IndexCheckOnStartup = 'false' | 'checksum' | 'true'

export interface IndexField {
  enabled: boolean
}

export type IndexMetaData = Record<string, any>

export type IndexName = string

export type IndexOptions = 'docs' | 'freqs' | 'positions' | 'offsets'

export type IndexPattern = string

export type IndexPatterns = Array<IndexPattern>

export interface IndexPrivilegesCheck {
  names: Array<string>
  privileges: Array<string>
}

export interface IndexRequest<TDocument = unknown> extends RequestBase {
  id?: Id
  index: IndexName
  type?: Type
  if_primary_term?: long
  if_seq_no?: SequenceNumber
  op_type?: OpType
  pipeline?: string
  refresh?: Refresh
  routing?: Routing
  timeout?: Time
  version?: VersionNumber
  version_type?: VersionType
  wait_for_active_shards?: WaitForActiveShards
  require_alias?: boolean
  body: TDocument
}

export interface IndexSettingBlocks {
  read_only?: boolean
  read_only_allow_delete?: boolean
  read?: boolean
  write?: boolean
  metadata?: boolean
}

export interface IndexSettingRouting {
  'allocation.enable'?: IndexSettingRoutingAllocation
  'rebalance.enable'?: IndexSettingRoutingRebalance
}

export type IndexSettingRoutingAllocation = 'all' | 'primaries' | 'new_primaries' | 'none'

export type IndexSettingRoutingRebalance = 'all' | 'primaries' | 'replicas' | 'none'

export interface IndexSettings {
  number_of_shards?: integer
  'index.number_of_shards'?: integer
  number_of_replicas?: integer
  'index.number_of_replicas'?: integer
  number_of_routing_shards?: integer
  'index.number_of_routing_shards'?: integer
  check_on_startup?: IndexCheckOnStartup
  'index.check_on_startup'?: IndexCheckOnStartup
  codec?: string
  'index.codec'?: string
  routing_partition_size?: integer
  'index.routing_partition_size'?: integer
  'soft_deletes.retention_lease.period'?: Time
  'index.soft_deletes.retention_lease.period'?: Time
  load_fixed_bitset_filters_eagerly?: boolean
  'index.load_fixed_bitset_filters_eagerly'?: boolean
  hidden?: boolean
  'index.hidden'?: boolean
  auto_expand_replicas?: string
  'index.auto_expand_replicas'?: string
  'search.idle.after'?: Time
  'index.search.idle.after'?: Time
  refresh_interval?: Time
  'index.refresh_interval'?: Time
  max_result_window?: integer
  'index.max_result_window'?: integer
  max_inner_result_window?: integer
  'index.max_inner_result_window'?: integer
  max_rescore_window?: integer
  'index.max_rescore_window'?: integer
  max_docvalue_fields_search?: integer
  'index.max_docvalue_fields_search'?: integer
  max_script_fields?: integer
  'index.max_script_fields'?: integer
  max_ngram_diff?: integer
  'index.max_ngram_diff'?: integer
  max_shingle_diff?: integer
  'index.max_shingle_diff'?: integer
  blocks?: IndexSettingBlocks
  'index.bocks'?: IndexSettingBlocks
  max_refresh_listeners?: integer
  'index.max_refresh_listeners'?: integer
  'analyze.max_token_count'?: integer
  'index.analyze.max_token_count'?: integer
  'highlight.max_analyzed_offset'?: integer
  'index.highlight.max_analyzed_offset'?: integer
  max_terms_count?: integer
  'index.max_terms_count'?: integer
  max_regex_length?: integer
  'index.max_regex_length'?: integer
  routing?: IndexSettingRouting
  'index.routing'?: IndexSettingRouting
  gc_deletes?: Time
  'index.gc_deletes'?: Time
  default_pipeline?: PipelineName
  'index.default_pipeline'?: PipelineName
  final_pipeline?: PipelineName
  'index.final_pipeline'?: PipelineName
}

export interface IndexedScript extends ScriptBase {
  id: string
}

export type Indices = string | Array<string>

export interface IndicesAddBlockRequest extends RequestBase {
  index: IndexName
  block: IndicesBlockOptions
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcardOptions
  ignore_unavailable?: boolean
  master_timeout?: Time
  timeout?: Time
}

export interface IndicesAnalyzeRequest extends RequestBase {
  index?: IndexName
  body?: {
    analyzer?: string
    attributes?: Array<string>
    char_filter?: Array<string | CharFilter>
    explain?: boolean
    field?: Field
    filter?: Array<string | TokenFilter>
    normalizer?: string
    text?: TextToAnalyze
    tokenizer?: string | Tokenizer
  }
}

export type IndicesBlockOptions = 'metadata' | 'read' | 'read_only' | 'write'

export interface IndicesClearCacheRequest extends RequestBase {
  index?: Indices
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  fielddata?: boolean
  fields?: Fields
  ignore_unavailable?: boolean
  query?: boolean
  request?: boolean
}

export interface IndicesCloneRequest extends RequestBase {
  index: IndexName
  target: Name
  master_timeout?: Time
  timeout?: Time
  wait_for_active_shards?: WaitForActiveShards
  body?: {
    aliases?: Record<IndexName, Alias>
    settings?: Record<string, any>
  }
}

export interface IndicesCloseRequest extends RequestBase {
  index: Indices
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
  master_timeout?: Time
  timeout?: Time
  wait_for_active_shards?: WaitForActiveShards
}

export interface IndicesCreateDataStreamRequest extends RequestBase {
  name: DataStreamName
}

export interface IndicesCreateRequest extends RequestBase {
  index: IndexName
  include_type_name?: boolean
  master_timeout?: Time
  timeout?: Time
  wait_for_active_shards?: WaitForActiveShards
  body?: {
    aliases?: Record<IndexName, Alias>
    mappings?: Record<string, TypeMapping> | TypeMapping
    settings?: Record<string, any>
  }
}

export interface IndicesDataStreamsStatsRequest extends RequestBase {
  name?: IndexName
  expand_wildcards?: ExpandWildcardOptions
  human?: boolean
}

export interface IndicesDeleteAliasRequest extends RequestBase {
  index: Indices
  name: Names
  master_timeout?: Time
  timeout?: Time
}

export interface IndicesDeleteDataStreamRequest extends RequestBase {
  name: DataStreamName
}

export interface IndicesDeleteRequest extends RequestBase {
  index: Indices
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
  master_timeout?: Time
  timeout?: Time
}

export interface IndicesDeleteTemplateRequest extends RequestBase {
  name: Name
  master_timeout?: Time
  timeout?: Time
}

export interface IndicesExistsAliasRequest extends RequestBase {
  name: Names
  index?: Indices
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
  local?: boolean
}

export interface IndicesExistsRequest extends RequestBase {
  index: Indices
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  flat_settings?: boolean
  ignore_unavailable?: boolean
  include_defaults?: boolean
  local?: boolean
}

export interface IndicesExistsTemplateRequest extends RequestBase {
  name: Names
  flat_settings?: boolean
  local?: boolean
  master_timeout?: Time
}

export interface IndicesExistsTypeRequest extends RequestBase {
  index: Indices
  type: Types
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
  local?: boolean
}

export interface IndicesFlushRequest extends RequestBase {
  index?: Indices
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  force?: boolean
  ignore_unavailable?: boolean
  wait_if_ongoing?: boolean
}

export interface IndicesFlushSyncedRequest extends RequestBase {
  index?: Indices
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
}

export interface IndicesForceMergeRequest extends RequestBase {
  index?: Indices
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  flush?: boolean
  ignore_unavailable?: boolean
  max_num_segments?: long
  only_expunge_deletes?: boolean
}

export interface IndicesFreezeRequest extends RequestBase {
  index: IndexName
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
  master_timeout?: Time
  timeout?: Time
  wait_for_active_shards?: WaitForActiveShards
}

export interface IndicesGetAliasRequest extends RequestBase {
  name?: Names
  index?: Indices
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
  local?: boolean
}

export interface IndicesGetDataStreamRequest extends RequestBase {
  name?: IndexName
  expand_wildcards?: ExpandWildcardOptions
}

export interface IndicesGetFieldMappingRequest extends RequestBase {
  fields: Fields
  index?: Indices
  type?: Types
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
  include_defaults?: boolean
  include_type_name?: boolean
  local?: boolean
}

export interface IndicesGetMappingRequest extends RequestBase {
  index?: Indices
  type?: Types
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
  include_type_name?: boolean
  local?: boolean
  master_timeout?: Time
}

export interface IndicesGetRequest extends RequestBase {
  index: Indices
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  flat_settings?: boolean
  ignore_unavailable?: boolean
  include_defaults?: boolean
  include_type_name?: boolean
  local?: boolean
  master_timeout?: Time
}

export interface IndicesGetSettingsRequest extends RequestBase {
  index?: Indices
  name?: Names
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  flat_settings?: boolean
  ignore_unavailable?: boolean
  include_defaults?: boolean
  local?: boolean
  master_timeout?: Time
}

export interface IndicesGetTemplateRequest extends RequestBase {
  name?: Names
  flat_settings?: boolean
  include_type_name?: boolean
  local?: boolean
  master_timeout?: Time
}

export interface IndicesMigrateToDataStreamRequest extends RequestBase {
  name: IndexName
}

export interface IndicesOpenRequest extends RequestBase {
  index: Indices
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
  master_timeout?: Time
  timeout?: Time
  wait_for_active_shards?: WaitForActiveShards
}

export interface IndicesOptions {
  allow_no_indices: boolean
  expand_wildcards: ExpandWildcards
  ignore_unavailable: boolean
}

export interface IndicesPrivileges {
  field_security?: FieldSecurity
  names: Indices
  privileges: Array<string>
  query?: string | QueryContainer
  allow_restricted_indices?: boolean
}

export interface IndicesPromoteDataStreamRequest extends RequestBase {
  name: IndexName
}

export interface IndicesPutAliasRequest extends RequestBase {
  index: Indices
  name: Name
  master_timeout?: Time
  timeout?: Time
  body?: {
    filter?: QueryContainer
    index_routing?: Routing
    is_write_index?: boolean
    routing?: Routing
    search_routing?: Routing
  }
}

export interface IndicesPutMappingRequest extends RequestBase {
  index?: Indices
  type?: Type
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
  include_type_name?: boolean
  master_timeout?: Time
  timeout?: Time
  write_index_only?: boolean
  body: {
    all_field?: AllField
    date_detection?: boolean
    dynamic?: boolean | DynamicMapping
    dynamic_date_formats?: Array<string>
    dynamic_templates?: Record<string, DynamicTemplate> | Array<Record<string, DynamicTemplate>>
    field_names_field?: FieldNamesField
    index_field?: IndexField
    meta?: Record<string, any>
    numeric_detection?: boolean
    properties?: Record<PropertyName, Property>
    routing_field?: RoutingField
    size_field?: SizeField
    source_field?: SourceField
    runtime?: RuntimeFields
  }
}

export interface IndicesPutSettingsRequest extends RequestBase {
  index?: Indices
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  flat_settings?: boolean
  ignore_unavailable?: boolean
  master_timeout?: Time
  preserve_existing?: boolean
  timeout?: Time
  body: {
    index?: Record<string, any>
    refresh_interval?: Time
    number_of_replicas?: integer
  }
}

export interface IndicesPutTemplateRequest extends RequestBase {
  name: Name
  create?: boolean
  flat_settings?: boolean
  include_type_name?: boolean
  master_timeout?: Time
  timeout?: Time
  body: {
    aliases?: Record<IndexName, Alias>
    index_patterns?: string | Array<string>
    mappings?: TypeMapping
    order?: integer
    settings?: Record<string, any>
    version?: VersionNumber
  }
}

export interface IndicesRecoveryRequest extends RequestBase {
  index?: Indices
  active_only?: boolean
  detailed?: boolean
}

export interface IndicesRefreshRequest extends RequestBase {
  index?: Indices
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
}

export interface IndicesRolloverConditions {
  max_age?: Time
  max_docs?: long
  max_size?: string
  max_primary_shard_size?: ByteSize
}

export interface IndicesRolloverRequest extends RequestBase {
  alias: IndexAlias
  new_index?: IndexName
  dry_run?: boolean
  include_type_name?: boolean
  master_timeout?: Time
  timeout?: Time
  wait_for_active_shards?: WaitForActiveShards
  body?: {
    aliases?: Record<IndexName, Alias>
    conditions?: IndicesRolloverConditions
    mappings?: Record<string, TypeMapping> | TypeMapping
    settings?: Record<string, any>
  }
}

export interface IndicesSegmentsRequest extends RequestBase {
  index?: Indices
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
  verbose?: boolean
}

export interface IndicesShardStoresRequest extends RequestBase {
  index?: Indices
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
  status?: string | Array<string>
}

export interface IndicesShrinkRequest extends RequestBase {
  index: IndexName
  target: IndexName
  master_timeout?: Time
  timeout?: Time
  wait_for_active_shards?: WaitForActiveShards
  body?: {
    aliases?: Record<IndexName, Alias>
    settings?: Record<string, any>
  }
}

export interface IndicesSplitRequest extends RequestBase {
  index: IndexName
  target: IndexName
  master_timeout?: Time
  timeout?: Time
  wait_for_active_shards?: WaitForActiveShards
  body?: {
    aliases?: Record<IndexName, Alias>
    settings?: Record<string, any>
  }
}

export interface IndicesStatsRequest extends RequestBase {
  metric?: Metrics
  index?: Indices
  completion_fields?: Fields
  expand_wildcards?: ExpandWildcards
  fielddata_fields?: Fields
  fields?: Fields
  forbid_closed_indices?: boolean
  groups?: string | Array<string>
  include_segment_file_sizes?: boolean
  include_unloaded_segments?: boolean
  level?: Level
  types?: Types
}

export interface IndicesUnfreezeRequest extends RequestBase {
  index: IndexName
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
  master_timeout?: Time
  timeout?: Time
  wait_for_active_shards?: string
}

export interface IndicesUpdateAliasBulk {
}

export interface IndicesUpdateAliasBulkRequest extends RequestBase {
  master_timeout?: Time
  timeout?: Time
  body: {
    actions?: Array<IndicesUpdateAliasBulk>
  }
}

export interface IndicesValidateQueryRequest extends RequestBase {
  index?: Indices
  type?: Types
  allow_no_indices?: boolean
  all_shards?: boolean
  analyzer?: string
  analyze_wildcard?: boolean
  default_operator?: DefaultOperator
  df?: string
  expand_wildcards?: ExpandWildcards
  explain?: boolean
  ignore_unavailable?: boolean
  lenient?: boolean
  query_on_query_string?: string
  rewrite?: boolean
  q?: string
  body?: {
    query?: QueryContainer
  }
}

export interface InferenceAggregation extends PipelineAggregationBase {
  model_id: Name
  inference_config?: InferenceConfigContainer
}

export interface InferenceConfigContainer {
  regression?: RegressionInferenceOptions
  classification?: ClassificationInferenceOptions
}

export interface InferenceProcessor extends ProcessorBase {
  model_id: Id
  target_field: Field
  field_map?: Record<Field, any>
  inference_config?: InferenceProcessorConfig
}

export interface InferenceProcessorConfig {
  regression?: InferenceProcessorConfigRegression
}

export interface InferenceProcessorConfigRegression {
  results_field: string
}

export interface InlineScript extends ScriptBase {
  source: string
}

export interface InnerHits {
  name?: Name
  size?: integer
  from?: integer
  collapse?: FieldCollapse
  docvalue_fields?: Fields
  explain?: boolean
  highlight?: Highlight
  ignore_unmapped?: boolean
  script_fields?: Record<string, ScriptField>
  seq_no_primary_term?: boolean
  fields?: Fields
  sort?: Sort
  _source?: boolean | SourceFilter
  version?: boolean
}

export interface InputContainer {
  chain?: ChainInput
  http?: HttpInput
  search?: SearchInput
  simple?: SimpleInput
}

export interface IntegerRangeProperty extends RangePropertyBase {
  type: 'integer_range'
}

export interface Interval extends ScheduleBase {
  factor: long
  unit: IntervalUnit
}

export type IntervalUnit = 's' | 'm' | 'h' | 'd' | 'w'

export interface IntervalsAllOf {
  intervals?: Array<IntervalsContainer>
  max_gaps?: integer
  ordered?: boolean
  filter?: IntervalsFilter
}

export interface IntervalsAnyOf {
  intervals?: Array<IntervalsContainer>
  filter?: IntervalsFilter
}

export interface IntervalsContainer {
  all_of?: IntervalsAllOf
  any_of?: IntervalsAnyOf
  fuzzy?: IntervalsFuzzy
  match?: IntervalsMatch
  prefix?: IntervalsPrefix
  wildcard?: IntervalsWildcard
}

export interface IntervalsFilter {
  after?: IntervalsContainer
  before?: IntervalsContainer
  contained_by?: IntervalsContainer
  containing?: IntervalsContainer
  not_contained_by?: IntervalsContainer
  not_containing?: IntervalsContainer
  not_overlapping?: IntervalsContainer
  overlapping?: IntervalsContainer
  script?: Script
}

export interface IntervalsFuzzy {
  analyzer?: string
  fuzziness?: Fuzziness
  prefix_length?: integer
  term?: string
  transpositions?: boolean
  use_field?: Field
}

export interface IntervalsMatch {
  analyzer?: string
  max_gaps?: integer
  ordered?: boolean
  query?: string
  use_field?: Field
  filter?: IntervalsFilter
}

export interface IntervalsPrefix {
  analyzer?: string
  prefix?: string
  use_field?: Field
}

export interface IntervalsQuery extends QueryBase {
  all_of?: IntervalsAllOf
  any_of?: IntervalsAnyOf
  fuzzy?: IntervalsFuzzy
  match?: IntervalsMatch
  prefix?: IntervalsPrefix
  wildcard?: IntervalsWildcard
}

export interface IntervalsWildcard {
  analyzer?: string
  pattern?: string
  use_field?: Field
}

export interface InvalidateApiKeyRequest extends RequestBase {
  body: {
    id?: string
    ids?: Array<string>
    name?: string
    owner?: boolean
    realm_name?: string
    username?: string
  }
}

export interface IpProperty extends DocValuesPropertyBase {
  boost?: double
  index?: boolean
  null_value?: string
  type: 'ip'
}

export interface IpRangeAggregation extends BucketAggregationBase {
  field?: Field
  ranges?: Array<IpRangeAggregationRange>
}

export interface IpRangeAggregationRange {
  from?: string
  mask?: string
  to?: string
}

export interface IpRangeProperty extends RangePropertyBase {
  type: 'ip_range'
}

export interface JoinProcessor extends ProcessorBase {
  field: Field
  separator: string
  target_field?: Field
}

export interface JoinProperty extends PropertyBase {
  relations?: Record<RelationName, RelationName | Array<RelationName>>
  type: 'join'
}

export interface JsonProcessor extends ProcessorBase {
  add_to_root: boolean
  field: Field
  target_field: Field
}

export interface KStemTokenFilter extends TokenFilterBase {
}

export type KeepTypesMode = 'include' | 'exclude'

export interface KeepTypesTokenFilter extends TokenFilterBase {
  mode: KeepTypesMode
  types: Array<string>
}

export interface KeepWordsTokenFilter extends TokenFilterBase {
  keep_words: Array<string>
  keep_words_case: boolean
  keep_words_path: string
}

export interface KeyValueProcessor extends ProcessorBase {
  exclude_keys?: Array<string>
  field: Field
  field_split: string
  ignore_missing?: boolean
  include_keys?: Array<string>
  prefix?: string
  strip_brackets?: boolean
  target_field?: Field
  trim_key?: string
  trim_value?: string
  value_split: string
}

export interface KeywordMarkerTokenFilter extends TokenFilterBase {
  ignore_case: boolean
  keywords: Array<string>
  keywords_path: string
  keywords_pattern: string
}

export interface KeywordProperty extends DocValuesPropertyBase {
  boost?: double
  eager_global_ordinals?: boolean
  index?: boolean
  index_options?: IndexOptions
  normalizer?: string
  norms?: boolean
  null_value?: string
  split_queries_on_whitespace?: boolean
  type: 'keyword'
}

export interface KeywordTokenizer extends TokenizerBase {
  buffer_size: integer
}

export interface LaplaceSmoothingModel {
  alpha: double
}

export interface LengthTokenFilter extends TokenFilterBase {
  max: integer
  min: integer
}

export interface LetterTokenizer extends TokenizerBase {
}

export type Level = 'cluster' | 'indices' | 'shards'

export interface License {
  expiry_date_in_millis: EpochMillis
  issue_date_in_millis: EpochMillis
  issued_to: string
  issuer: string
  max_nodes?: long
  max_resource_units?: long
  signature: string
  start_date_in_millis: EpochMillis
  type: LicenseType
  uid: string
}

export type LicenseType = 'missing' | 'trial' | 'basic' | 'standard' | 'dev' | 'silver' | 'gold' | 'platinum' | 'enterprise'

export interface LifecycleAction {
}

export type Like = string | LikeDocument

export interface LikeDocument {
  doc?: any
  fields?: Fields
  _id?: Id | number
  _type?: Type
  _index?: IndexName
  per_field_analyzer?: Record<Field, string>
  routing?: Routing
}

export interface LimitTokenCountTokenFilter extends TokenFilterBase {
  consume_all_tokens: boolean
  max_token_count: integer
}

export interface LinearInterpolationSmoothingModel {
  bigram_lambda: double
  trigram_lambda: double
  unigram_lambda: double
}

export interface ListDanglingIndicesRequest extends RequestBase {
  stub_a: string
  stub_b: string
  body?: {
    stub_c: string
  }
}

export interface ListTasksRequest extends RequestBase {
  actions?: string | Array<string>
  detailed?: boolean
  group_by?: GroupBy
  nodes?: Array<string>
  parent_task_id?: Id
  timeout?: Time
  wait_for_completion?: boolean
}

export interface LogstashDeletePipelineRequest extends RequestBase {
  stub_a: string
  stub_b: string
  body?: {
    stub_c: string
  }
}

export interface LogstashGetPipelineRequest extends RequestBase {
  stub_a: string
  stub_b: string
  body?: {
    stub_c: string
  }
}

export interface LogstashPutPipelineRequest extends RequestBase {
  stub_a: string
  stub_b: string
  body: {
    stub_c: string
  }
}

export interface LongRangeProperty extends RangePropertyBase {
  type: 'long_range'
}

export interface LowercaseProcessor extends ProcessorBase {
  field: Field
  ignore_missing?: boolean
  target_field?: Field
}

export interface LowercaseTokenFilter extends TokenFilterBase {
  language: string
}

export interface LowercaseTokenizer extends TokenizerBase {
}

export interface MachineLearningInfoRequest extends RequestBase {
}

export interface MappingCharFilter extends CharFilterBase {
  mappings: Array<string>
  mappings_path: string
}

export interface MatchAllQuery extends QueryBase {
  norm_field?: string
}

export interface MatchBoolPrefixQuery extends QueryBase {
  analyzer?: string
  fuzziness?: Fuzziness
  fuzzy_rewrite?: MultiTermQueryRewrite
  fuzzy_transpositions?: boolean
  max_expansions?: integer
  minimum_should_match?: MinimumShouldMatch
  operator?: Operator
  prefix_length?: integer
  query?: string
}

export interface MatchNoneQuery extends QueryBase {
}

export interface MatchPhrasePrefixQuery extends QueryBase {
  analyzer?: string
  max_expansions?: integer
  query?: string
  slop?: integer
  zero_terms_query?: ZeroTermsQuery
}

export interface MatchPhraseQuery extends QueryBase {
  analyzer?: string
  query?: string
  slop?: integer
}

export interface MatchQuery extends QueryBase {
  analyzer?: string
  auto_generate_synonyms_phrase_query?: boolean
  cutoff_frequency?: double
  fuzziness?: Fuzziness
  fuzzy_rewrite?: MultiTermQueryRewrite
  fuzzy_transpositions?: boolean
  lenient?: boolean
  max_expansions?: integer
  minimum_should_match?: MinimumShouldMatch
  operator?: Operator
  prefix_length?: integer
  query?: string | float | boolean
  zero_terms_query?: ZeroTermsQuery
}

export type MatchType = 'simple' | 'regex'

export interface MatrixAggregation extends Aggregation {
  fields?: Fields
  missing?: Record<Field, double>
}

export interface MatrixStatsAggregation extends MatrixAggregation {
  mode?: MatrixStatsMode
}

export type MatrixStatsMode = 'avg' | 'min' | 'max' | 'sum' | 'median'

export interface MaxAggregation extends FormatMetricAggregationBase {
}

export interface MaxBucketAggregation extends PipelineAggregationBase {
}

export interface MedianAbsoluteDeviationAggregation extends FormatMetricAggregationBase {
  compression?: double
}

export interface MetricAggregationBase {
  field?: Field
  missing?: Missing
  script?: Script
}

export type Metrics = string | Array<string>

export interface MinAggregation extends FormatMetricAggregationBase {
}

export interface MinBucketAggregation extends PipelineAggregationBase {
}

export type MinimumInterval = 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year'

export type MinimumShouldMatch = integer | string

export type Missing = string | integer | double | boolean

export interface MissingAggregation extends BucketAggregationBase {
  field?: Field
  missing?: Missing
}

export interface ModelPlotConfig {
  terms?: Field
  enabled: boolean
  annotations_enabled?: boolean
}

export interface ModelPlotConfigEnabled {
  enabled: boolean
  terms?: string
}

export type Month = 'january' | 'february' | 'march' | 'april' | 'may' | 'june' | 'july' | 'august' | 'september' | 'october' | 'november' | 'december'

export interface MoreLikeThisQuery extends QueryBase {
  analyzer?: string
  boost_terms?: double
  fields?: Fields
  include?: boolean
  like?: Like | Array<Like>
  max_doc_freq?: integer
  max_query_terms?: integer
  max_word_length?: integer
  min_doc_freq?: integer
  minimum_should_match?: MinimumShouldMatch
  min_term_freq?: integer
  min_word_length?: integer
  per_field_analyzer?: Record<Field, string>
  routing?: Routing
  stop_words?: StopWords
  unlike?: Like | Array<Like>
  version?: VersionNumber
  version_type?: VersionType
}

export interface MoveToStepRequest extends RequestBase {
  index: IndexName
  body?: {
    current_step?: StepKey
    next_step?: StepKey
  }
}

export interface MovingAverageAggregation extends PipelineAggregationBase {
  minimize?: boolean
  model?: MovingAverageModel
  settings: MovingAverageSettings
  predict?: integer
  window?: integer
}

export type MovingAverageModel = 'linear' | 'simple' | 'ewma' | 'holt' | 'holt_winters'

export type MovingAverageSettings = EwmaModelSettings | HoltLinearModelSettings | HoltWintersModelSettings

export interface MovingFunctionAggregation extends PipelineAggregationBase {
  script?: string
  shift?: integer
  window?: integer
}

export interface MovingPercentilesAggregation extends PipelineAggregationBase {
  window?: integer
  shift?: integer
}

export type MultiGetId = string | integer

export interface MultiGetOperation {
  can_be_flattened?: boolean
  _id: MultiGetId
  _index?: IndexName
  routing?: Routing
  _source?: boolean | Fields | SourceFilter
  stored_fields?: Fields
  _type?: Type
  version?: VersionNumber
  version_type?: VersionType
}

export interface MultiGetRequest extends RequestBase {
  index?: IndexName
  type?: Type
  preference?: string
  realtime?: boolean
  refresh?: boolean
  routing?: Routing
  source_enabled?: boolean
  _source?: boolean | Fields
  _source_excludes?: Fields
  _source_includes?: Fields
  stored_fields?: Fields
  body: {
    docs?: Array<MultiGetOperation>
    ids?: Array<MultiGetId>
  }
}

export interface MultiMatchQuery extends QueryBase {
  analyzer?: string
  auto_generate_synonyms_phrase_query?: boolean
  cutoff_frequency?: double
  fields?: Fields
  fuzziness?: Fuzziness
  fuzzy_rewrite?: MultiTermQueryRewrite
  fuzzy_transpositions?: boolean
  lenient?: boolean
  max_expansions?: integer
  minimum_should_match?: MinimumShouldMatch
  operator?: Operator
  prefix_length?: integer
  query?: string
  slop?: integer
  tie_breaker?: double
  type?: TextQueryType
  use_dis_max?: boolean
  zero_terms_query?: ZeroTermsQuery
}

export interface MultiSearchBody {
  aggregations?: Record<string, AggregationContainer>
  aggs?: Record<string, AggregationContainer>
  query?: QueryContainer
  from?: integer
  size?: integer
  pit?: PointInTimeReference
  track_total_hits?: boolean | integer
  suggest?: SuggestContainer | Record<string, SuggestContainer>
}

export interface MultiSearchHeader {
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
  index?: Indices
  preference?: string
  request_cache?: boolean
  routing?: string
  search_type?: SearchType
}

export interface MultiSearchRequest extends RequestBase {
  index?: Indices
  type?: Types
  ccs_minimize_roundtrips?: boolean
  max_concurrent_searches?: long
  max_concurrent_shard_requests?: long
  pre_filter_shard_size?: long
  search_type?: SearchType
  rest_total_hits_as_int?: boolean
  typed_keys?: boolean
  body: Array<MultiSearchHeader | MultiSearchBody>
}

export interface MultiSearchTemplateRequest extends RequestBase {
  index?: Indices
  type?: Types
  ccs_minimize_roundtrips?: boolean
  max_concurrent_searches?: long
  search_type?: SearchType
  total_hits_as_integer?: boolean
  typed_keys?: boolean
  body: {
    operations?: Record<string, SearchTemplateRequest>
  }
}

export interface MultiTermLookup {
  field: Field
}

export type MultiTermQueryRewrite = string

export interface MultiTermVectorOperation {
  doc: object
  fields: Fields
  field_statistics: boolean
  filter: TermVectorFilter
  _id: Id
  _index: IndexName
  offsets: boolean
  payloads: boolean
  positions: boolean
  routing: Routing
  term_statistics: boolean
  version: VersionNumber
  version_type: VersionType
}

export interface MultiTermVectorsRequest extends RequestBase {
  index?: IndexName
  type?: Type
  fields?: Fields
  field_statistics?: boolean
  offsets?: boolean
  payloads?: boolean
  positions?: boolean
  preference?: string
  realtime?: boolean
  routing?: Routing
  term_statistics?: boolean
  version?: VersionNumber
  version_type?: VersionType
  body?: {
    docs?: Array<MultiTermVectorOperation>
    ids?: Array<Id>
  }
}

export interface MultiTermsAggregation extends BucketAggregationBase {
  terms: Array<MultiTermLookup>
}

export type MultiValueMode = 'min' | 'max' | 'avg' | 'sum'

export interface MultiplexerTokenFilter extends TokenFilterBase {
  filters: Array<string>
  preserve_original: boolean
}

export interface Murmur3HashProperty extends DocValuesPropertyBase {
  type: 'murmur3'
}

export interface MutualInformationHeuristic {
  background_is_superset: boolean
  include_negatives: boolean
}

export interface NGramTokenFilter extends TokenFilterBase {
  max_gram: integer
  min_gram: integer
}

export interface NGramTokenizer extends TokenizerBase {
  custom_token_chars: string
  max_gram: integer
  min_gram: integer
  token_chars: Array<TokenChar>
}

export type Name = string

export interface NamedQueryKeys<TQuery = unknown> {
  boost?: float
  _name?: string
  ignore_unmapped?: boolean
}
export type NamedQuery<TQuery = unknown> = NamedQueryKeys<TQuery> |
    { [property: string]: TQuery }

export type Names = string | Array<string>

export interface NestedAggregation extends BucketAggregationBase {
  path?: Field
}

export interface NestedProperty extends CorePropertyBase {
  dynamic?: boolean | DynamicMapping
  enabled?: boolean
  properties?: Record<PropertyName, Property>
  include_in_parent?: boolean
  include_in_root?: boolean
  type: 'nested'
}

export interface NestedQuery extends QueryBase {
  ignore_unmapped?: boolean
  inner_hits?: InnerHits
  path?: Field
  query?: QueryContainer
  score_mode?: NestedScoreMode
}

export type NestedScoreMode = 'avg' | 'sum' | 'min' | 'max' | 'none'

export interface NestedSortValue {
  filter: QueryContainer
  max_children?: integer
  path: Field
}

export interface NeverCondition {
}

export type NodeIds = string

export interface NodesHotThreadsRequest extends RequestBase {
  node_id?: NodeIds
  ignore_idle_threads?: boolean
  interval?: Time
  snapshots?: long
  threads?: long
  thread_type?: ThreadType
  timeout?: Time
}

export interface NodesInfoRequest extends RequestBase {
  node_id?: NodeIds
  metric?: Metrics
  flat_settings?: boolean
  timeout?: Time
}

export interface NodesStatsRequest extends RequestBase {
  node_id?: NodeIds
  metric?: Metrics
  index_metric?: Metrics
  completion_fields?: Fields
  fielddata_fields?: Fields
  fields?: Fields
  groups?: boolean
  include_segment_file_sizes?: boolean
  level?: Level
  timeout?: Time
  types?: Array<string>
}

export interface NodesUsageRequest extends RequestBase {
  node_id?: NodeIds
  metric?: Metrics
  timeout?: Time
}

export type NoriDecompoundMode = 'discard' | 'none' | 'mixed'

export interface NoriPartOfSpeechTokenFilter extends TokenFilterBase {
  stoptags: Array<string>
}

export interface NoriTokenizer extends TokenizerBase {
  decompound_mode: NoriDecompoundMode
  discard_punctuation: boolean
  user_dictionary: string
  user_dictionary_rules: Array<string>
}

export interface NormalizeAggregation extends PipelineAggregationBase {
  method?: NormalizeMethod
}

export type NormalizeMethod = 'rescale_0_1' | 'rescale_0_100' | 'percent_of_sum' | 'mean' | 'zscore' | 'softmax'

export interface NumberProperty extends DocValuesPropertyBase {
  boost?: double
  coerce?: boolean
  fielddata?: NumericFielddata
  ignore_malformed?: boolean
  index?: boolean
  null_value?: double
  scaling_factor?: double
  type: NumberType
}

export type NumberType = 'float' | 'half_float' | 'scaled_float' | 'double' | 'integer' | 'long' | 'short' | 'byte' | 'unsigned_long'

export interface NumericDecayFunctionKeys extends DecayFunctionBase {
}
export type NumericDecayFunction = NumericDecayFunctionKeys |
    { [property: string]: DecayPlacement<double, double> }

export interface NumericFielddata {
  format: NumericFielddataFormat
}

export type NumericFielddataFormat = 'array' | 'disabled'

export interface ObjectProperty extends CorePropertyBase {
  dynamic?: boolean | DynamicMapping
  enabled?: boolean
  properties?: Record<PropertyName, Property>
  type: 'object'
}

export type OpType = 'index' | 'create'

export interface OpenJobRequest extends RequestBase {
  job_id: Id
  body?: {
    timeout?: Time
  }
}

export interface OpenPointInTimeRequest extends RequestBase {
  index: Indices
  keep_alive?: Time
}

export type Operator = 'and' | 'or' | 'AND' | 'OR'

export interface Page {
  from: integer
  size: integer
}

export interface PainlessContextSetup {
  document: any
  index: IndexName
  query: QueryContainer
}

export interface ParentAggregation extends BucketAggregationBase {
  type?: RelationName
}

export interface ParentIdQuery extends QueryBase {
  id?: Id
  ignore_unmapped?: boolean
  type?: RelationName
}

export interface PathHierarchyTokenizer extends TokenizerBase {
  buffer_size: integer
  delimiter: string
  replacement: string
  reverse: boolean
  skip: integer
}

export interface PatternCaptureTokenFilter extends TokenFilterBase {
  patterns: Array<string>
  preserve_original: boolean
}

export interface PatternReplaceTokenFilter extends TokenFilterBase {
  flags: string
  pattern: string
  replacement: string
}

export interface PauseAutoFollowPatternRequest extends RequestBase {
  name: Name
}

export interface PauseFollowIndexRequest extends RequestBase {
  index: IndexName
}

export interface PerPartitionCategorization {
  enabled?: boolean
  stop_on_warn?: boolean
}

export interface PercentageScoreHeuristic {
}

export interface PercentileRanksAggregation extends FormatMetricAggregationBase {
  keyed?: boolean
  values?: Array<double>
  hdr?: HdrMethod
  tdigest?: TDigest
}

export interface PercentilesAggregation extends FormatMetricAggregationBase {
  keyed?: boolean
  percents?: Array<double>
  hdr?: HdrMethod
  tdigest?: TDigest
}

export interface PercentilesBucketAggregation extends PipelineAggregationBase {
  percents?: Array<double>
}

export interface PercolateQuery extends QueryBase {
  document?: any
  documents?: Array<any>
  field?: Field
  id?: Id
  index?: IndexName
  preference?: string
  routing?: Routing
  version?: VersionNumber
}

export interface PercolatorProperty extends PropertyBase {
  type: 'percolator'
}

export interface Phase {
  actions: Record<string, LifecycleAction> | Array<string>
  min_age?: Time
}

export interface Phases {
  cold?: Phase
  delete?: Phase
  hot?: Phase
  warm?: Phase
}

export interface PhraseSuggestCollate {
  params?: Record<string, any>
  prune?: boolean
  query: PhraseSuggestCollateQuery
}

export interface PhraseSuggestCollateQuery {
  id?: Id
  source?: string
}

export interface PhraseSuggestHighlight {
  post_tag: string
  pre_tag: string
}

export interface PhraseSuggester extends SuggesterBase {
  collate?: PhraseSuggestCollate
  confidence?: double
  direct_generator?: Array<DirectGenerator>
  force_unigrams?: boolean
  gram_size?: integer
  highlight?: PhraseSuggestHighlight
  max_errors?: double
  real_word_error_likelihood?: double
  separator?: string
  shard_size?: integer
  smoothing?: SmoothingModelContainer
  text?: string
  token_limit?: integer
}

export interface PingRequest extends RequestBase {
}

export interface PinnedQuery extends QueryBase {
  ids?: Array<Id> | Array<long>
  organic?: QueryContainer
}

export interface Pipeline {
  description?: string
  on_failure?: Array<ProcessorContainer>
  processors?: Array<ProcessorContainer>
  version?: VersionNumber
}

export interface PipelineAggregationBase extends Aggregation {
  buckets_path?: BucketsPath
  format?: string
  gap_policy?: GapPolicy
}

export type PipelineName = string

export interface PipelineProcessor extends ProcessorBase {
  name: string
}

export interface PointInTimeReference {
  id: Id
  keep_alive?: Time
}

export interface PointProperty extends DocValuesPropertyBase {
  ignore_malformed?: boolean
  ignore_z_value?: boolean
  null_value?: string
  type: 'point'
}

export interface Policy {
  phases: Phases
  name?: string
}

export interface PorterStemTokenFilter extends TokenFilterBase {
}

export interface PostCalendarEventsRequest extends RequestBase {
  calendar_id: Id
  body: {
    events?: Array<ScheduledEvent>
  }
}

export interface PostJobDataRequest extends RequestBase {
  job_id: Id
  reset_end?: DateString
  reset_start?: DateString
  body: {
    data?: Array<any>
  }
}

export interface PostLicenseRequest extends RequestBase {
  acknowledge?: boolean
  body?: {
    license?: License
    licenses?: Array<License>
  }
}

export interface PredicateTokenFilter extends TokenFilterBase {
  script: Script
}

export interface PrefixQuery extends QueryBase {
  rewrite?: MultiTermQueryRewrite
  value: string
}

export interface PreviewDatafeedRequest extends RequestBase {
  datafeed_id: Id
}

export interface PreviewTransformRequest extends RequestBase {
  body: {
    description?: string
    dest?: TransformDestination
    frequency?: Time
    pivot?: TransformPivot
    source?: TransformSource
    sync?: TransformSyncContainer
  }
}

export interface PrivilegesActions {
  actions: Array<string>
  application?: string
  name?: string
  metadata?: Record<string, any>
}

export interface ProcessorBase {
  if?: string
  ignore_failure?: boolean
  on_failure?: Array<ProcessorContainer>
  tag?: string
}

export interface ProcessorContainer {
  attachment?: AttachmentProcessor
  append?: AppendProcessor
  csv?: CsvProcessor
  convert?: ConvertProcessor
  date?: DateProcessor
  date_index_name?: DateIndexNameProcessor
  dot_expander?: DotExpanderProcessor
  enrich?: EnrichProcessor
  fail?: FailProcessor
  foreach?: ForeachProcessor
  json?: JsonProcessor
  user_agent?: UserAgentProcessor
  kv?: KeyValueProcessor
  geoip?: GeoIpProcessor
  grok?: GrokProcessor
  gsub?: GsubProcessor
  join?: JoinProcessor
  lowercase?: LowercaseProcessor
  remove?: RemoveProcessor
  rename?: RenameProcessor
  script?: ScriptProcessor
  set?: SetProcessor
  sort?: SortProcessor
  split?: SplitProcessor
  trim?: TrimProcessor
  uppercase?: UppercaseProcessor
  urldecode?: UrlDecodeProcessor
  bytes?: BytesProcessor
  dissect?: DissectProcessor
  set_security_user?: SetSecurityUserProcessor
  pipeline?: PipelineProcessor
  drop?: DropProcessor
  circle?: CircleProcessor
  inference?: InferenceProcessor
}

export type Property = FlattenedProperty | JoinProperty | PercolatorProperty | RankFeatureProperty | RankFeaturesProperty | ConstantKeywordProperty | FieldAliasProperty | HistogramProperty | CoreProperty

export interface PropertyBase {
  local_metadata?: Record<string, any>
  meta?: Record<string, string>
  name?: PropertyName
  properties?: Record<PropertyName, Property>
  ignore_above?: integer
  dynamic?: boolean | DynamicMapping
  fields?: Record<PropertyName, Property>
}

export type PropertyName = string

export interface PutAutoFollowPatternRequest extends RequestBase {
  name: Name
  body: {
    remote_cluster: string
    follow_index_pattern?: IndexPattern
    leader_index_patterns?: IndexPatterns
    max_outstanding_read_requests?: integer
    settings?: Record<string, any>
    max_outstanding_write_requests?: integer
    read_poll_timeout?: Time
    max_read_request_operation_count?: integer
    max_read_request_size?: ByteSize
    max_retry_delay?: Time
    max_write_buffer_count?: integer
    max_write_buffer_size?: ByteSize
    max_write_request_operation_count?: integer
    max_write_request_size?: ByteSize
  }
}

export interface PutAutoscalingPolicyRequest extends RequestBase {
  stub_a: string
  stub_b: string
  body: {
    stub_c: string
  }
}

export interface PutCalendarJobRequest extends RequestBase {
  calendar_id: Id
  job_id: Id
}

export interface PutCalendarRequest extends RequestBase {
  calendar_id: Id
  body?: {
    description?: string
  }
}

export interface PutDatafeedRequest extends RequestBase {
  datafeed_id: Id
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_throttled?: boolean
  ignore_unavailable?: boolean
  body: {
    aggregations?: Record<string, AggregationContainer>
    chunking_config?: ChunkingConfig
    frequency?: Time
    indices?: Array<string>
    indexes?: Array<string>
    job_id?: Id
    max_empty_searches?: integer
    query?: QueryContainer
    query_delay?: Time
    script_fields?: Record<string, ScriptField>
    scroll_size?: integer
  }
}

export interface PutEnrichPolicyRequest extends RequestBase {
  name: Name
  body: {
    geo_match?: EnrichPolicy
    match?: EnrichPolicy
  }
}

export interface PutFilterRequest extends RequestBase {
  filter_id: Id
  body: {
    description?: string
    items?: Array<string>
  }
}

export interface PutJobRequest extends RequestBase {
  job_id: Id
  body: {
    allow_lazy_open?: boolean
    analysis_config?: AnalysisConfig
    analysis_limits?: AnalysisLimits
    data_description?: DataDescription
    description?: string
    model_plot?: ModelPlotConfig
    model_snapshot_retention_days?: long
    results_index_name?: IndexName
  }
}

export interface PutLifecycleRequest extends RequestBase {
  policy?: Name
  policy_id?: Id
  body?: {
    policy?: Policy
  }
}

export interface PutPipelineRequest extends RequestBase {
  id: Id
  master_timeout?: Time
  timeout?: Time
  body: {
    description?: string
    on_failure?: Array<ProcessorContainer>
    processors?: Array<ProcessorContainer>
    version?: VersionNumber
  }
}

export interface PutScriptRequest extends RequestBase {
  id: Id
  context?: Name
  master_timeout?: Time
  timeout?: Time
  body: {
    script?: StoredScript
  }
}

export interface PutSnapshotLifecycleRequest extends RequestBase {
  policy_id: Name
  body?: {
    config?: SnapshotLifecycleConfig
    name?: string
    repository?: string
    retention?: SnapshotRetentionConfiguration
    schedule?: CronExpression
  }
}

export interface PutTransformRequest extends RequestBase {
  transform_id: Name
  defer_validation?: boolean
  body: {
    description?: string
    dest?: TransformDestination
    frequency?: Time
    pivot?: TransformPivot
    source?: TransformSource
    sync?: TransformSyncContainer
  }
}

export type Quantifier = 'some' | 'all'

export interface QueryBase {
  boost?: float
  _name?: string
}

export interface QueryContainer {
  bool?: BoolQuery
  boosting?: BoostingQuery
  common?: Record<string, CommonTermsQuery | string>
  constant_score?: ConstantScoreQuery
  dis_max?: DisMaxQuery
  distance_feature?: Record<string, DistanceFeatureQuery | string> | DistanceFeatureQuery
  exists?: ExistsQuery
  function_score?: FunctionScoreQuery
  fuzzy?: Record<string, FuzzyQuery | string>
  geo_bounding_box?: NamedQuery<GeoBoundingBoxQuery | string>
  geo_distance?: NamedQuery<GeoDistanceQuery | string>
  geo_polygon?: NamedQuery<GeoPolygonQuery | string>
  geo_shape?: NamedQuery<GeoShapeQuery | string>
  has_child?: HasChildQuery
  has_parent?: HasParentQuery
  ids?: IdsQuery
  intervals?: NamedQuery<IntervalsQuery | string>
  is_conditionless?: boolean
  is_strict?: boolean
  is_verbatim?: boolean
  is_writable?: boolean
  match?: NamedQuery<MatchQuery | string | float | boolean>
  match_all?: MatchAllQuery
  match_bool_prefix?: NamedQuery<MatchBoolPrefixQuery | string>
  match_none?: MatchNoneQuery
  match_phrase?: NamedQuery<MatchPhraseQuery | string>
  match_phrase_prefix?: NamedQuery<MatchPhrasePrefixQuery | string>
  more_like_this?: MoreLikeThisQuery
  multi_match?: MultiMatchQuery
  nested?: NestedQuery
  parent_id?: ParentIdQuery
  percolate?: PercolateQuery
  pinned?: PinnedQuery
  prefix?: NamedQuery<PrefixQuery | string>
  query_string?: QueryStringQuery
  range?: NamedQuery<RangeQuery>
  rank_feature?: NamedQuery<RankFeatureQuery | string>
  regexp?: NamedQuery<RegexpQuery | string>
  script?: ScriptQuery
  script_score?: ScriptScoreQuery
  shape?: NamedQuery<ShapeQuery | string>
  simple_query_string?: SimpleQueryStringQuery
  span_containing?: SpanContainingQuery
  field_masking_span?: SpanFieldMaskingQuery
  span_first?: SpanFirstQuery
  span_multi?: SpanMultiTermQuery
  span_near?: SpanNearQuery
  span_not?: SpanNotQuery
  span_or?: SpanOrQuery
  span_term?: NamedQuery<SpanTermQuery | string>
  span_within?: SpanWithinQuery
  template?: QueryTemplate
  term?: NamedQuery<TermQuery | string | float | boolean>
  terms?: NamedQuery<TermsQuery | Array<string> | Array<long>>
  terms_set?: NamedQuery<TermsSetQuery | string>
  wildcard?: NamedQuery<WildcardQuery | string>
  type?: TypeQuery
}

export interface QuerySqlRequest extends RequestBase {
  format?: string
  body: {
    columnar?: boolean
    cursor?: string
    fetch_size?: integer
    filter?: QueryContainer
    query?: string
    time_zone?: string
  }
}

export interface QueryStringQuery extends QueryBase {
  allow_leading_wildcard?: boolean
  analyzer?: string
  analyze_wildcard?: boolean
  auto_generate_synonyms_phrase_query?: boolean
  default_field?: Field
  default_operator?: Operator
  enable_position_increments?: boolean
  escape?: boolean
  fields?: Fields
  fuzziness?: Fuzziness
  fuzzy_max_expansions?: integer
  fuzzy_prefix_length?: integer
  fuzzy_rewrite?: MultiTermQueryRewrite
  fuzzy_transpositions?: boolean
  lenient?: boolean
  max_determinized_states?: integer
  minimum_should_match?: MinimumShouldMatch
  phrase_slop?: double
  query?: string
  quote_analyzer?: string
  quote_field_suffix?: string
  rewrite?: MultiTermQueryRewrite
  tie_breaker?: double
  time_zone?: string
  type?: TextQueryType
}

export interface QueryTemplate {
  source: string
}

export interface RandomScoreFunction extends ScoreFunctionBase {
  field?: Field
  seed?: long | string
}

export interface RangeAggregation extends BucketAggregationBase {
  field?: Field
  ranges?: Array<AggregationRange>
  script?: Script
}

export type RangeProperty = LongRangeProperty | IpRangeProperty | IntegerRangeProperty | FloatRangeProperty | DoubleRangeProperty | DateRangeProperty

export interface RangePropertyBase extends DocValuesPropertyBase {
  boost?: double
  coerce?: boolean
  index?: boolean
}

export interface RangeQuery extends QueryBase {
  gt?: double | DateMath
  gte?: double | DateMath
  lt?: double | DateMath
  lte?: double | DateMath
  relation?: RangeRelation
  time_zone?: string
  from?: double | DateMath
  to?: double | DateMath
}

export type RangeRelation = 'within' | 'contains' | 'intersects'

export interface RankFeatureFunction {
}

export interface RankFeatureProperty extends PropertyBase {
  positive_score_impact?: boolean
  type: 'rank_feature'
}

export interface RankFeatureQuery extends QueryBase {
  function?: RankFeatureFunction
}

export interface RankFeaturesProperty extends PropertyBase {
  type: 'rank_features'
}

export interface RareTermsAggregation extends BucketAggregationBase {
  exclude?: string | Array<string>
  field?: Field
  include?: string | Array<string> | TermsInclude
  max_doc_count?: long
  missing?: Missing
  precision?: double
  value_type?: string
}

export interface RateAggregation extends FormatMetricAggregationBase {
  unit?: DateInterval
  mode?: RateMode
}

export type RateMode = 'sum' | 'value_count'

export type Refresh = boolean | RefreshOptions

export type RefreshOptions = 'wait_for'

export interface RegexpQuery extends QueryBase {
  flags?: string
  max_determinized_states?: integer
  value?: string
}

export interface RegressionInferenceOptions {
  results_field: Field
  num_top_feature_importance_values?: integer
}

export interface ReindexDestination {
  index: IndexName
  op_type?: OpType
  pipeline?: string
  routing?: ReindexRouting
  version_type?: VersionType
}

export interface ReindexRequest extends RequestBase {
  refresh?: boolean
  requests_per_second?: long
  scroll?: Time
  slices?: long
  timeout?: Time
  wait_for_active_shards?: WaitForActiveShards
  wait_for_completion?: boolean
  require_alias?: boolean
  body: {
    conflicts?: Conflicts
    dest?: ReindexDestination
    max_docs?: long
    script?: Script
    size?: long
    source?: ReindexSource
  }
}

export interface ReindexRethrottleRequest extends RequestBase {
  task_id: Id
  requests_per_second?: long
}

export interface ReindexRouting {
}

export interface ReindexSource {
  index: Indices
  query?: QueryContainer
  remote?: RemoteSource
  size?: integer
  slice?: SlicedScroll
  sort?: Sort
  _source?: Fields
}

export type RelationName = string

export interface ReloadSearchAnalyzersRequest extends RequestBase {
  index: Indices
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
}

export interface ReloadSecureSettingsRequest extends RequestBase {
  node_id?: NodeIds
  timeout?: Time
  body?: {
    secure_settings_password?: string
  }
}

export interface RemoteSource {
  connect_timeout: Time
  host: Uri
  password: string
  socket_timeout: Time
  username: string
}

export interface RemoveDuplicatesTokenFilter extends TokenFilterBase {
}

export interface RemovePolicyRequest extends RequestBase {
  index: IndexName
}

export interface RemoveProcessor extends ProcessorBase {
  field: Fields
  ignore_missing?: boolean
}

export interface RenameProcessor extends ProcessorBase {
  field: Field
  ignore_missing?: boolean
  target_field: Field
}

export interface RenderSearchTemplateRequest extends RequestBase {
  body?: {
    file?: string
    params?: Record<string, any>
    source?: string
  }
}

export interface RequestBase extends CommonQueryParameters {
}

export interface Rescore {
  query: RescoreQuery
  window_size?: integer
}

export interface RescoreQuery {
  rescore_query: QueryContainer
  query_weight?: double
  rescore_query_weight?: double
  score_mode?: ScoreMode
}

export interface ResolveIndexRequest extends RequestBase {
  name: Names
  expand_wildcards?: ExpandWildcards
}

export type ResponseContentType = 'json' | 'yaml' | 'text'

export interface ResumeAutoFollowPatternRequest extends RequestBase {
  name: Name
}

export interface ResumeFollowIndexRequest extends RequestBase {
  index: IndexName
  body?: {
    max_outstanding_read_requests?: long
    max_outstanding_write_requests?: long
    max_read_request_operation_count?: long
    max_read_request_size?: string
    max_retry_delay?: Time
    max_write_buffer_count?: long
    max_write_buffer_size?: string
    max_write_request_operation_count?: long
    max_write_request_size?: string
    read_poll_timeout?: Time
  }
}

export interface RetryIlmRequest extends RequestBase {
  index: IndexName
}

export interface ReverseNestedAggregation extends BucketAggregationBase {
  path?: Field
}

export interface ReverseTokenFilter extends TokenFilterBase {
}

export interface RevertModelSnapshotRequest extends RequestBase {
  job_id: Id
  snapshot_id: Id
  body?: {
    delete_intervening_results?: boolean
  }
}

export interface RoleMappingRuleBase {
}

export interface RollupFieldMetric {
  field: Field
  metrics: Array<RollupMetric>
}

export interface RollupGroupings {
  date_histogram?: DateHistogramRollupGrouping
  histogram?: HistogramRollupGrouping
  terms?: TermsRollupGrouping
}

export type RollupMetric = 'min' | 'max' | 'sum' | 'avg' | 'value_count'

export interface RollupRequest extends RequestBase {
  stubb: integer
  stuba: integer
  body: {
    stub: integer
  }
}

export interface RollupSearchRequest extends RequestBase {
  index: Indices
  type?: Type
  rest_total_hits_as_int?: boolean
  typed_keys?: boolean
  body: {
    aggs?: Record<string, AggregationContainer>
    query?: QueryContainer
    size?: integer
  }
}

export interface RootNodeInfoRequest extends RequestBase {
}

export type Routing = string | number

export interface RoutingField {
  required: boolean
}

export type RuleAction = 'skip_result' | 'skip_model_update'

export interface RuleCondition {
  applies_to: AppliesTo
  operator: ConditionOperator
  value: double
}

export type RuleFilterType = 'include' | 'exclude'

export interface RuntimeField {
  format?: string
  script?: Script
  type: RuntimeFieldType
}

export type RuntimeFieldType = 'boolean' | 'date' | 'double' | 'geo_point' | 'ip' | 'keyword' | 'long'

export type RuntimeFields = Record<Field, RuntimeField>

export interface SampleDiversity {
  field: Field
  max_docs_per_value: integer
}

export interface SamplerAggregation extends BucketAggregationBase {
  shard_size?: integer
}

export type SamplerAggregationExecutionHint = 'map' | 'global_ordinals' | 'bytes_hash'

export interface ScheduleBase {
}

export interface ScheduleContainer {
  cron?: CronExpression
  daily?: DailySchedule
  hourly?: HourlySchedule
  interval?: Interval
  monthly?: Array<TimeOfMonth>
  weekly?: Array<TimeOfWeek>
  yearly?: Array<TimeOfYear>
}

export interface ScheduleTriggerEvent {
  scheduled_time: DateString | string
  triggered_time?: DateString | string
}

export interface ScheduledEvent {
  calendar_id: Id
  description: string
  end_time: EpochMillis
  event_id: Id
  start_time: EpochMillis
}

export interface ScoreFunctionBase {
  filter?: QueryContainer
  weight?: double
}

export type ScoreMode = 'avg' | 'max' | 'min' | 'multiply' | 'total'

export interface ScoreSort {
  mode?: SortMode
  order?: SortOrder
}

export type Script = InlineScript | IndexedScript | string

export interface ScriptBase {
  lang?: string
  params?: Record<string, any>
}

export interface ScriptCondition {
  lang: string
  params?: Record<string, any>
  source: string
}

export interface ScriptField {
  script: Script
}

export interface ScriptProcessor extends ProcessorBase {
  id?: Id
  lang?: string
  params?: Record<string, any>
  source: string
}

export interface ScriptQuery extends QueryBase {
  script?: Script
}

export interface ScriptScoreFunction extends ScoreFunctionBase {
  script: Script
}

export interface ScriptScoreQuery extends QueryBase {
  query?: QueryContainer
  script?: Script
}

export interface ScriptSort {
  order?: SortOrder
  script: Script
  type?: string
}

export interface ScriptTransform {
  lang: string
  params: Record<string, any>
}

export interface ScriptedHeuristic {
  script: Script
}

export interface ScriptedMetricAggregation extends MetricAggregationBase {
  combine_script?: Script
  init_script?: Script
  map_script?: Script
  params?: Record<string, any>
  reduce_script?: Script
}

export type ScrollId = string

export interface ScrollRequest extends RequestBase {
  scroll_id?: Id
  scroll?: Time
  rest_total_hits_as_int?: boolean
  total_hits_as_integer?: boolean
  body?: {
    scroll?: Time
    scroll_id?: ScrollId
    rest_total_hits_as_int?: boolean
  }
}

export interface SearchAsYouTypeProperty extends CorePropertyBase {
  analyzer?: string
  index?: boolean
  index_options?: IndexOptions
  max_shingle_size?: integer
  norms?: boolean
  search_analyzer?: string
  search_quote_analyzer?: string
  term_vector?: TermVectorOption
  type: 'search_as_you_type'
}

export interface SearchInput {
  extract: Array<string>
  request: SearchInputRequestDefinition
  timeout: Time
}

export interface SearchInputRequestDefinition {
  body?: SearchRequest
  indices?: Array<IndexName>
  indices_options?: IndicesOptions
  search_type?: SearchType
  template?: SearchTemplateRequest
}

export interface SearchRequest extends RequestBase {
  index?: Indices
  type?: Types
  allow_no_indices?: boolean
  allow_partial_search_results?: boolean
  analyzer?: string
  analyze_wildcard?: boolean
  batched_reduce_size?: long
  ccs_minimize_roundtrips?: boolean
  default_operator?: DefaultOperator
  df?: string
  docvalue_fields?: Fields
  expand_wildcards?: ExpandWildcards
  ignore_throttled?: boolean
  ignore_unavailable?: boolean
  lenient?: boolean
  max_concurrent_shard_requests?: long
  preference?: string
  pre_filter_shard_size?: long
  query_on_query_string?: string
  request_cache?: boolean
  routing?: Routing
  scroll?: Time
  search_type?: SearchType
  sequence_number_primary_term?: boolean
  stats?: Array<string>
  stored_fields?: Fields
  suggest_field?: Field
  suggest_mode?: SuggestMode
  suggest_size?: long
  suggest_text?: string
  total_hits_as_integer?: boolean
  track_total_hits?: boolean | integer
  typed_keys?: boolean
  rest_total_hits_as_int?: boolean
  _source_excludes?: Fields
  _source_includes?: Fields
  seq_no_primary_term?: boolean
  q?: string
  size?: integer
  from?: integer
  sort?: string | Array<string>
  body?: {
    aggs?: Record<string, AggregationContainer>
    aggregations?: Record<string, AggregationContainer>
    collapse?: FieldCollapse
    explain?: boolean
    from?: integer
    highlight?: Highlight
    track_total_hits?: boolean | integer
    indices_boost?: Array<Record<IndexName, double>>
    docvalue_fields?: DocValueField | Array<Field | DocValueField>
    min_score?: double
    post_filter?: QueryContainer
    profile?: boolean
    query?: QueryContainer
    rescore?: Rescore | Array<Rescore>
    script_fields?: Record<string, ScriptField>
    search_after?: Array<integer | string>
    size?: integer
    slice?: SlicedScroll
    sort?: Sort
    _source?: boolean | Fields | SourceFilter
    fields?: Array<Field | DateField>
    suggest?: SuggestContainer | Record<string, SuggestContainer>
    terminate_after?: long
    timeout?: string
    track_scores?: boolean
    version?: boolean
    seq_no_primary_term?: boolean
    stored_fields?: Fields
    pit?: PointInTimeReference
    runtime_mappings?: RuntimeFields
    stats?: Array<string>
  }
}

export interface SearchShardsRequest extends RequestBase {
  index?: Indices
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
  local?: boolean
  preference?: string
  routing?: Routing
}

export interface SearchTemplateRequest extends RequestBase {
  index?: Indices
  type?: Types
  allow_no_indices?: boolean
  ccs_minimize_roundtrips?: boolean
  expand_wildcards?: ExpandWildcards
  explain?: boolean
  ignore_throttled?: boolean
  ignore_unavailable?: boolean
  preference?: string
  profile?: boolean
  routing?: Routing
  scroll?: Time
  search_type?: SearchType
  total_hits_as_integer?: boolean
  typed_keys?: boolean
  body: {
    id?: string
    params?: Record<string, any>
    source?: string
  }
}

export interface SearchTransform {
  request: SearchInputRequestDefinition
  timeout: Time
}

export type SearchType = 'query_then_fetch' | 'dfs_query_then_fetch'

export interface SearchableSnapshotsClearCacheRequest extends RequestBase {
  stub_a: integer
  stub_b: integer
  body?: {
    stub_c: integer
  }
}

export interface SearchableSnapshotsMountRequest extends RequestBase {
  repository: Name
  snapshot: Name
  master_timeout?: Time
  wait_for_completion?: boolean
  storage?: string
  body: {
    index: IndexName
    renamed_index?: IndexName
    index_settings?: Record<string, any>
    ignore_index_settings?: Array<string>
  }
}

export interface SearchableSnapshotsRepositoryStatsRequest extends RequestBase {
  stub_a: integer
  stub_b: integer
  body?: {
    stub_c: integer
  }
}

export interface SearchableSnapshotsStatsRequest extends RequestBase {
  stub_a: integer
  stub_b: integer
  body?: {
    stub_c: integer
  }
}

export interface SecurityAuthenticateRequest extends RequestBase {
  body?: {
    stub: integer
  }
}

export interface SecurityChangePasswordRequest extends RequestBase {
  username?: Name
  refresh?: Refresh
  body: {
    password?: string
  }
}

export interface SecurityClearCachedPrivilegesRequest extends RequestBase {
  application: Name
}

export interface SecurityClearCachedRealmsRequest extends RequestBase {
  realms: Names
  usernames?: Array<string>
}

export interface SecurityClearCachedRolesRequest extends RequestBase {
  name: Names
}

export interface SecurityDeletePrivilegesRequest extends RequestBase {
  application: Name
  name: Name
  refresh?: Refresh
}

export interface SecurityDeleteRoleMappingRequest extends RequestBase {
  name: Name
  refresh?: Refresh
}

export interface SecurityDeleteRoleRequest extends RequestBase {
  name: Name
  refresh?: Refresh
}

export interface SecurityDeleteUserRequest extends RequestBase {
  username: Name
  refresh?: Refresh
}

export interface SecurityDisableUserRequest extends RequestBase {
  username: Name
  refresh?: Refresh
}

export interface SecurityEnableUserRequest extends RequestBase {
  username: Name
  refresh?: Refresh
}

export interface SecurityGetBuiltinPrivilegesRequest extends RequestBase {
  stub: boolean
}

export interface SecurityGetPrivilegesRequest extends RequestBase {
  application?: Name
  name?: Name
}

export interface SecurityGetRoleMappingRequest extends RequestBase {
  name: Name
}

export interface SecurityGetRoleRequest extends RequestBase {
  name?: Name
}

export interface SecurityGetTokenRequest extends RequestBase {
  body: {
    grant_type?: AccessTokenGrantType
    scope?: string
    password?: string
    kerberos_ticket?: string
    refresh_token?: string
    username?: string
  }
}

export interface SecurityGetUserPrivilegesRequest extends RequestBase {
  stub: boolean
}

export interface SecurityGetUserRequest extends RequestBase {
  username?: Names
}

export interface SecurityHasPrivilegesRequest extends RequestBase {
  user?: Name
  body: {
    application?: Array<ApplicationPrivilegesCheck>
    cluster?: Array<string>
    index?: Array<IndexPrivilegesCheck>
  }
}

export interface SecurityInvalidateTokenRequest extends RequestBase {
  body: {
    token?: string
    refresh_token?: string
    realm_name?: Name
    username?: Name
  }
}

export interface SecurityPutPrivilegesRequest extends RequestBase {
  refresh?: Refresh
  body: Record<string, Record<string, PrivilegesActions>>
}

export interface SecurityPutRoleMappingRequest extends RequestBase {
  name: Name
  refresh?: Refresh
  body: {
    enabled?: boolean
    metadata?: Record<string, any>
    roles?: Array<string>
    rules?: RoleMappingRuleBase
    run_as?: Array<string>
  }
}

export interface SecurityPutRoleRequest extends RequestBase {
  name: Name
  refresh?: Refresh
  body: {
    applications?: Array<ApplicationPrivileges>
    cluster?: Array<string>
    global?: Record<string, any>
    indices?: Array<IndicesPrivileges>
    metadata?: Record<string, any>
    run_as?: Array<string>
    transient_metadata?: TransientMetadata
  }
}

export interface SecurityPutUserRequest extends RequestBase {
  username: Name
  refresh?: Refresh
  body: {
    username?: Name
    email?: string | null
    full_name?: string | null
    metadata?: Record<string, any>
    password?: string
    password_hash?: string
    roles?: Array<string>
    enabled?: boolean
  }
}

export type SequenceNumber = integer

export interface SerialDifferencingAggregation extends PipelineAggregationBase {
  lag?: integer
}

export interface SetProcessor extends ProcessorBase {
  field: Field
  override?: boolean
  value: any
}

export interface SetSecurityUserProcessor extends ProcessorBase {
  field: Field
  properties?: Array<string>
}

export interface SetUpgradeModeRequest extends RequestBase {
  enabled?: boolean
  timeout?: Time
}

export type ShapeOrientation = 'right' | 'counterclockwise' | 'ccw' | 'left' | 'clockwise' | 'cw'

export interface ShapeProperty extends DocValuesPropertyBase {
  coerce?: boolean
  ignore_malformed?: boolean
  ignore_z_value?: boolean
  orientation?: ShapeOrientation
  type: 'shape'
}

export interface ShapeQuery extends QueryBase {
  ignore_unmapped?: boolean
  indexed_shape?: FieldLookup
  relation?: ShapeRelation
  shape?: GeoShape
}

export type ShapeRelation = 'intersects' | 'disjoint' | 'within'

export type ShapeType = 'geo_shape' | 'shape'

export interface ShingleTokenFilter extends TokenFilterBase {
  filler_token: string
  max_shingle_size: integer
  min_shingle_size: integer
  output_unigrams: boolean
  output_unigrams_if_no_shingles: boolean
  token_separator: string
}

export interface SignificantTermsAggregation extends BucketAggregationBase {
  background_filter?: QueryContainer
  chi_square?: ChiSquareHeuristic
  exclude?: string | Array<string>
  execution_hint?: TermsAggregationExecutionHint
  field?: Field
  gnd?: GoogleNormalizedDistanceHeuristic
  include?: string | Array<string>
  min_doc_count?: long
  mutual_information?: MutualInformationHeuristic
  percentage?: PercentageScoreHeuristic
  script_heuristic?: ScriptedHeuristic
  shard_min_doc_count?: long
  shard_size?: integer
  size?: integer
}

export interface SignificantTextAggregation extends BucketAggregationBase {
  background_filter?: QueryContainer
  chi_square?: ChiSquareHeuristic
  exclude?: string | Array<string>
  execution_hint?: TermsAggregationExecutionHint
  field?: Field
  filter_duplicate_text?: boolean
  gnd?: GoogleNormalizedDistanceHeuristic
  include?: string | Array<string>
  min_doc_count?: long
  mutual_information?: MutualInformationHeuristic
  percentage?: PercentageScoreHeuristic
  script_heuristic?: ScriptedHeuristic
  shard_min_doc_count?: long
  shard_size?: integer
  size?: integer
  source_fields?: Fields
}

export interface SimpleInput {
  payload: Record<string, any>
}

export type SimpleQueryStringFlags = 'NONE' | 'AND' | 'OR' | 'NOT' | 'PREFIX' | 'PHRASE' | 'PRECEDENCE' | 'ESCAPE' | 'WHITESPACE' | 'FUZZY' | 'NEAR' | 'SLOP' | 'ALL'

export interface SimpleQueryStringQuery extends QueryBase {
  analyzer?: string
  analyze_wildcard?: boolean
  auto_generate_synonyms_phrase_query?: boolean
  default_operator?: Operator
  fields?: Fields
  flags?: SimpleQueryStringFlags | string
  fuzzy_max_expansions?: integer
  fuzzy_prefix_length?: integer
  fuzzy_transpositions?: boolean
  lenient?: boolean
  minimum_should_match?: MinimumShouldMatch
  query?: string
  quote_field_suffix?: string
}

export interface SimulatePipelineDocument {
  _id?: Id
  _index?: IndexName
  _source: any
}

export interface SimulatePipelineRequest extends RequestBase {
  id?: Id
  verbose?: boolean
  body: {
    docs?: Array<SimulatePipelineDocument>
    pipeline?: Pipeline
  }
}

export interface SimulatedActions {
  actions: Array<string>
  all: SimulatedActions
  use_all: boolean
}

export interface SingleGroupSource {
  field: Field
  script: Script
}

export type Size = 'Raw' | 'k' | 'm' | 'g' | 't' | 'p'

export interface SizeField {
  enabled: boolean
}

export interface SlicedScroll {
  field?: Field
  id: integer
  max: integer
}

export interface SmoothingModelContainer {
  laplace: LaplaceSmoothingModel
  linear_interpolation: LinearInterpolationSmoothingModel
  stupid_backoff: StupidBackoffSmoothingModel
}

export interface SnapshotCloneRequest extends RequestBase {
  repository: Name
  snapshot: Name
  target_snapshot: Name
  master_timeout?: Time
  timeout?: Time
  body: {
    indices: string
  }
}

export interface SnapshotCreateRepositoryRequest extends RequestBase {
  repository: Name
  master_timeout?: Time
  timeout?: Time
  verify?: boolean
  body: {
    repository?: SnapshotRepository
    type: string
    settings: SnapshotRepositorySettings
  }
}

export interface SnapshotCreateRequest extends RequestBase {
  repository: Name
  snapshot: Name
  master_timeout?: Time
  wait_for_completion?: boolean
  body?: {
    ignore_unavailable?: boolean
    include_global_state?: boolean
    indices?: Indices
    metadata?: Record<string, any>
    partial?: boolean
  }
}

export interface SnapshotDeleteRepositoryRequest extends RequestBase {
  repository: Names
  master_timeout?: Time
  timeout?: Time
}

export interface SnapshotDeleteRequest extends RequestBase {
  repository: Name
  snapshot: Name
  master_timeout?: Time
}

export interface SnapshotGetRepositoryRequest extends RequestBase {
  repository?: Names
  local?: boolean
  master_timeout?: Time
}

export interface SnapshotGetRequest extends RequestBase {
  repository: Name
  snapshot: Names
  ignore_unavailable?: boolean
  master_timeout?: Time
  verbose?: boolean
}

export interface SnapshotLifecycleConfig {
  ignore_unavailable?: boolean
  include_global_state?: boolean
  indices: Indices
}

export interface SnapshotRepository {
  type: string
  uuid?: Uuid
  settings: SnapshotRepositorySettings
}

export interface SnapshotRepositorySettings {
  chunk_size?: string
  compress?: string | boolean
  concurrent_streams?: string | integer
  location: string
  read_only?: string | boolean
  readonly?: string | boolean
}

export interface SnapshotRestoreRequest extends RequestBase {
  repository: Name
  snapshot: Name
  master_timeout?: Time
  wait_for_completion?: boolean
  body?: {
    ignore_index_settings?: Array<string>
    ignore_unavailable?: boolean
    include_aliases?: boolean
    include_global_state?: boolean
    index_settings?: IndicesPutSettingsRequest
    indices?: Indices
    partial?: boolean
    rename_pattern?: string
    rename_replacement?: string
  }
}

export interface SnapshotRetentionConfiguration {
  expire_after: Time
  max_count: integer
  min_count: integer
}

export interface SnapshotStatusRequest extends RequestBase {
  repository?: Name
  snapshot?: Names
  ignore_unavailable?: boolean
  master_timeout?: Time
}

export interface SnapshotVerifyRepositoryRequest extends RequestBase {
  repository: Name
  master_timeout?: Time
  timeout?: Time
}

export type SnowballLanguage = 'Armenian' | 'Basque' | 'Catalan' | 'Danish' | 'Dutch' | 'English' | 'Finnish' | 'French' | 'German' | 'German2' | 'Hungarian' | 'Italian' | 'Kp' | 'Lovins' | 'Norwegian' | 'Porter' | 'Portuguese' | 'Romanian' | 'Russian' | 'Spanish' | 'Swedish' | 'Turkish'

export interface SnowballTokenFilter extends TokenFilterBase {
  language: SnowballLanguage
}

export type Sort = SortCombinations | Array<SortCombinations>

export type SortCombinations = Field | SortContainer | SortOrder

export interface SortContainerKeys {
  _score?: ScoreSort
  _doc?: ScoreSort
  _geo_distance?: GeoDistanceSort
  _script?: ScriptSort
}
export type SortContainer = SortContainerKeys |
    { [property: string]: FieldSort | SortOrder }

export type SortMode = 'min' | 'max' | 'sum' | 'avg' | 'median'

export type SortOrder = 'asc' | 'desc' | '_doc'

export interface SortProcessor extends ProcessorBase {
  field: Field
  order: SortOrder
  target_field: Field
}

export interface SourceExistsRequest extends RequestBase {
  id: Id
  index: IndexName
  type?: Type
  preference?: string
  realtime?: boolean
  refresh?: boolean
  routing?: Routing
  source_enabled?: boolean
  source_excludes?: Fields
  source_includes?: Fields
  version?: VersionNumber
  version_type?: VersionType
}

export interface SourceField {
  compress?: boolean
  compress_threshold?: string
  enabled: boolean
  excludes?: Array<string>
  includes?: Array<string>
}

export interface SourceFilter {
  excludes?: Fields
  includes?: Fields
  exclude?: Fields
  include?: Fields
}

export interface SourceRequest extends RequestBase {
  id: Id
  index: IndexName
  type?: Type
  preference?: string
  realtime?: boolean
  refresh?: boolean
  routing?: Routing
  source_enabled?: boolean
  _source_excludes?: Fields
  _source_includes?: Fields
  version?: VersionNumber
  version_type?: VersionType
}

export interface SpanContainingQuery extends QueryBase {
  big?: SpanQuery
  little?: SpanQuery
}

export interface SpanFieldMaskingQuery extends QueryBase {
  field?: Field
  query?: SpanQuery
}

export interface SpanFirstQuery extends QueryBase {
  end?: integer
  match?: SpanQuery
}

export interface SpanGapQuery extends QueryBase {
  field?: Field
  width?: integer
}

export interface SpanMultiTermQuery extends QueryBase {
  match?: QueryContainer
}

export interface SpanNearQuery extends QueryBase {
  clauses?: Array<SpanQuery>
  in_order?: boolean
  slop?: integer
}

export interface SpanNotQuery extends QueryBase {
  dist?: integer
  exclude?: SpanQuery
  include?: SpanQuery
  post?: integer
  pre?: integer
}

export interface SpanOrQuery extends QueryBase {
  clauses?: Array<SpanQuery>
}

export interface SpanQuery extends QueryBase {
  span_containing?: NamedQuery<SpanContainingQuery | string>
  field_masking_span?: NamedQuery<SpanFieldMaskingQuery | string>
  span_first?: NamedQuery<SpanFirstQuery | string>
  span_gap?: NamedQuery<SpanGapQuery | integer>
  span_multi?: SpanMultiTermQuery
  span_near?: NamedQuery<SpanNearQuery | string>
  span_not?: NamedQuery<SpanNotQuery | string>
  span_or?: NamedQuery<SpanOrQuery | string>
  span_term?: NamedQuery<SpanTermQuery | string>
  span_within?: NamedQuery<SpanWithinQuery | string>
}

export interface SpanTermQuery extends QueryBase {
  value: string
}

export interface SpanWithinQuery extends QueryBase {
  big?: SpanQuery
  little?: SpanQuery
}

export interface SplitProcessor extends ProcessorBase {
  field: Field
  ignore_missing?: boolean
  preserve_trailing?: boolean
  separator: string
  target_field?: Field
}

export interface StandardTokenizer extends TokenizerBase {
  max_token_length: integer
}

export interface StartBasicLicenseRequest extends RequestBase {
  acknowledge?: boolean
}

export interface StartDatafeedRequest extends RequestBase {
  datafeed_id: Id
  start?: Time
  body?: {
    end?: Time
    start?: Time
    timeout?: Time
  }
}

export interface StartIlmRequest extends RequestBase {
}

export interface StartRollupJobRequest extends RequestBase {
  id: Id
}

export interface StartSnapshotLifecycleManagementRequest extends RequestBase {
}

export interface StartTransformRequest extends RequestBase {
  transform_id: Name
  timeout?: Time
}

export interface StartTrialLicenseRequest extends RequestBase {
  acknowledge?: boolean
  type_query_string?: string
}

export interface StatsAggregation extends FormatMetricAggregationBase {
}

export interface StatsBucketAggregation extends PipelineAggregationBase {
}

export interface StemmerOverrideTokenFilter extends TokenFilterBase {
  rules: Array<string>
  rules_path: string
}

export interface StemmerTokenFilter extends TokenFilterBase {
  language: string
}

export interface StepKey {
  action: string
  name: string
  phase: string
}

export interface StopDatafeedRequest extends RequestBase {
  datafeed_id: Ids
  allow_no_match?: boolean
  force?: boolean
  body?: {
    force?: boolean
    timeout?: Time
  }
}

export interface StopIlmRequest extends RequestBase {
}

export interface StopRollupJobRequest extends RequestBase {
  id: Id
  timeout?: Time
  wait_for_completion?: boolean
}

export interface StopSnapshotLifecycleManagementRequest extends RequestBase {
}

export interface StopTokenFilter extends TokenFilterBase {
  ignore_case?: boolean
  remove_trailing?: boolean
  stopwords: StopWords
  stopwords_path?: string
}

export interface StopTransformRequest extends RequestBase {
  transform_id: Name
  allow_no_match?: boolean
  force?: boolean
  timeout?: Time
  wait_for_checkpoint?: boolean
  wait_for_completion?: boolean
}

export type StopWords = string | Array<string>

export interface StoredScript {
  lang?: string
  source: string
}

export type StringDistance = 'internal' | 'damerau_levenshtein' | 'levenshtein' | 'jaro_winkler' | 'ngram'

export interface StringFielddata {
  format: StringFielddataFormat
}

export type StringFielddataFormat = 'paged_bytes' | 'disabled'

export interface StringStatsAggregation extends MetricAggregationBase {
  show_distribution?: boolean
}

export interface StupidBackoffSmoothingModel {
  discount: double
}

export interface SuggestContainer {
  completion?: CompletionSuggester
  phrase?: PhraseSuggester
  prefix?: string
  regex?: string
  term?: TermSuggester
  text?: string
}

export interface SuggestContext {
  name: string
  path: Field
  type: string
}

export interface SuggestContextQuery {
  boost?: double
  context: Context
  neighbours?: Array<Distance> | Array<integer>
  precision?: Distance | integer
  prefix?: boolean
}

export interface SuggestFuzziness {
  fuzziness: Fuzziness
  min_length: integer
  prefix_length: integer
  transpositions: boolean
  unicode_aware: boolean
}

export type SuggestMode = 'missing' | 'popular' | 'always'

export type SuggestSort = 'score' | 'frequency'

export interface SuggesterBase {
  field: Field
  analyzer?: string
  size?: integer
}

export interface SumAggregation extends FormatMetricAggregationBase {
}

export interface SumBucketAggregation extends PipelineAggregationBase {
}

export type SynonymFormat = 'solr' | 'wordnet'

export interface SynonymGraphTokenFilter extends TokenFilterBase {
  expand: boolean
  format: SynonymFormat
  lenient: boolean
  synonyms: Array<string>
  synonyms_path: string
  tokenizer: string
  updateable: boolean
}

export interface SynonymTokenFilter extends TokenFilterBase {
  expand: boolean
  format: SynonymFormat
  lenient: boolean
  synonyms: Array<string>
  synonyms_path: string
  tokenizer: string
  updateable: boolean
}

export interface TDigest {
  compression?: integer
}

export interface TTestAggregation extends Aggregation {
  a?: TestPopulation
  b?: TestPopulation
  type?: TTestType
}

export type TTestType = 'paired' | 'homoscedastic' | 'heteroscedastic'

export type TaskId = string | integer

export interface TermQuery extends QueryBase {
  value?: string | float | boolean
}

export interface TermSuggester extends SuggesterBase {
  lowercase_terms?: boolean
  max_edits?: integer
  max_inspections?: integer
  max_term_freq?: float
  min_doc_freq?: float
  min_word_length?: integer
  prefix_length?: integer
  shard_size?: integer
  sort?: SuggestSort
  string_distance?: StringDistance
  suggest_mode?: SuggestMode
  text?: string
}

export interface TermVectorFilter {
  max_doc_freq?: integer
  max_num_terms?: integer
  max_term_freq?: integer
  max_word_length?: integer
  min_doc_freq?: integer
  min_term_freq?: integer
  min_word_length?: integer
}

export type TermVectorOption = 'no' | 'yes' | 'with_offsets' | 'with_positions' | 'with_positions_offsets' | 'with_positions_offsets_payloads'

export interface TermVectorsRequest<TDocument = unknown> extends RequestBase {
  index: IndexName
  id?: Id
  type?: Type
  fields?: Fields
  field_statistics?: boolean
  offsets?: boolean
  payloads?: boolean
  positions?: boolean
  preference?: string
  realtime?: boolean
  routing?: Routing
  term_statistics?: boolean
  version?: VersionNumber
  version_type?: VersionType
  body?: {
    doc?: TDocument
    filter?: TermVectorFilter
    per_field_analyzer?: Record<Field, string>
  }
}

export interface TermsAggregation extends BucketAggregationBase {
  collect_mode?: TermsAggregationCollectMode
  exclude?: string | Array<string>
  execution_hint?: TermsAggregationExecutionHint
  field?: Field
  include?: string | Array<string> | TermsInclude
  min_doc_count?: integer
  missing?: Missing
  missing_bucket?: boolean
  value_type?: string
  order?: TermsAggregationOrder
  script?: Script
  shard_size?: integer
  show_term_doc_count_error?: boolean
  size?: integer
}

export type TermsAggregationCollectMode = 'depth_first' | 'breadth_first'

export type TermsAggregationExecutionHint = 'map' | 'global_ordinals' | 'global_ordinals_hash' | 'global_ordinals_low_cardinality'

export type TermsAggregationOrder = SortOrder | Record<string, SortOrder> | Array<Record<string, SortOrder>>

export interface TermsInclude {
  num_partitions: long
  partition: long
}

export interface TermsQuery extends QueryBase {
  terms?: Array<string>
  index?: IndexName
  id?: Id
  path?: string
  routing?: Routing
}

export interface TermsRollupGrouping {
  fields: Fields
}

export interface TermsSetQuery extends QueryBase {
  minimum_should_match_field?: Field
  minimum_should_match_script?: Script
  terms?: Array<string>
}

export interface TestPopulation {
  field: Field
  script?: Script
  filter?: QueryContainer
}

export interface TextIndexPrefixes {
  max_chars: integer
  min_chars: integer
}

export interface TextProperty extends CorePropertyBase {
  analyzer?: string
  boost?: double
  eager_global_ordinals?: boolean
  fielddata?: boolean
  fielddata_frequency_filter?: FielddataFrequencyFilter
  index?: boolean
  index_options?: IndexOptions
  index_phrases?: boolean
  index_prefixes?: TextIndexPrefixes
  norms?: boolean
  position_increment_gap?: integer
  search_analyzer?: string
  search_quote_analyzer?: string
  term_vector?: TermVectorOption
  type: 'text'
}

export type TextQueryType = 'best_fields' | 'most_fields' | 'cross_fields' | 'phrase' | 'phrase_prefix' | 'bool_prefix'

export type TextToAnalyze = string | Array<string>

export type ThreadType = 'cpu' | 'wait' | 'block'

export interface ThreeDimensionalPoint {
  lat: double
  lon: double
  z?: double
}

export interface ThrottleState {
  reason: string
  timestamp: DateString
}

export type Time = string | integer

export interface TimeOfDay {
  hour: Array<integer>
  minute: Array<integer>
}

export interface TimeOfMonth {
  at: Array<string>
  on: Array<integer>
}

export interface TimeOfWeek {
  at: Array<string>
  on: Array<Day>
}

export interface TimeOfYear {
  at: Array<string>
  int: Array<Month>
  on: Array<integer>
}

export type TimeSpan = string

export type Timestamp = string

export type TokenChar = 'letter' | 'digit' | 'whitespace' | 'punctuation' | 'symbol' | 'custom'

export interface TokenCountProperty extends DocValuesPropertyBase {
  analyzer?: string
  boost?: double
  index?: boolean
  null_value?: double
  enable_position_increments?: boolean
  type: 'token_count'
}

export type TokenFilter = AsciiFoldingTokenFilter | CommonGramsTokenFilter | ConditionTokenFilter | DelimitedPayloadTokenFilter | EdgeNGramTokenFilter | ElisionTokenFilter | FingerprintTokenFilter | HunspellTokenFilter | HyphenationDecompounderTokenFilter | KeepTypesTokenFilter | KeepWordsTokenFilter | KeywordMarkerTokenFilter | KStemTokenFilter | LengthTokenFilter | LimitTokenCountTokenFilter | LowercaseTokenFilter | MultiplexerTokenFilter | NGramTokenFilter | NoriPartOfSpeechTokenFilter | PatternCaptureTokenFilter | PatternReplaceTokenFilter | PorterStemTokenFilter | PredicateTokenFilter | RemoveDuplicatesTokenFilter | ReverseTokenFilter | ShingleTokenFilter | SnowballTokenFilter | StemmerOverrideTokenFilter | StemmerTokenFilter | StopTokenFilter | SynonymGraphTokenFilter | SynonymTokenFilter | TrimTokenFilter | TruncateTokenFilter | UniqueTokenFilter | UppercaseTokenFilter | WordDelimiterGraphTokenFilter | WordDelimiterTokenFilter

export interface TokenFilterBase {
  type: string
  version?: VersionString
}

export type Tokenizer = CharGroupTokenizer | EdgeNGramTokenizer | KeywordTokenizer | LetterTokenizer | LowercaseTokenizer | NGramTokenizer | NoriTokenizer | PathHierarchyTokenizer | StandardTokenizer | UaxEmailUrlTokenizer | WhitespaceTokenizer

export interface TokenizerBase {
  type: string
  version?: VersionString
}

export interface TopHit {
  count: long
  value: any
}

export interface TopHitsAggregation extends MetricAggregationBase {
  docvalue_fields?: Fields
  explain?: boolean
  from?: integer
  highlight?: Highlight
  script_fields?: Record<string, ScriptField>
  size?: integer
  sort?: Sort
  _source?: boolean | SourceFilter | Fields
  stored_fields?: Fields
  track_scores?: boolean
  version?: boolean
  seq_no_primary_term?: boolean
}

export interface TopMetricsAggregation extends MetricAggregationBase {
  metrics?: TopMetricsValue | Array<TopMetricsValue>
  size?: integer
  sort?: Sort
}

export interface TopMetricsValue {
  field: Field
}

export interface TransformContainer {
  chain: ChainTransform
  script: ScriptTransform
  search: SearchTransform
}

export interface TransformDestination {
  index: IndexName
  pipeline?: string
}

export interface TransformPivot {
  aggregations: Record<string, AggregationContainer>
  group_by: Record<string, SingleGroupSource>
  max_page_search_size?: integer
}

export interface TransformSource {
  index: Indices
  query: QueryContainer
}

export interface TransformSyncContainer {
  time: TransformTimeSync
}

export interface TransformTimeSync {
  delay: Time
  field: Field
}

export interface TransientMetadata {
  enabled: boolean
}

export interface TranslateSqlRequest extends RequestBase {
  body: {
    fetch_size?: integer
    filter?: QueryContainer
    query?: string
    time_zone?: string
  }
}

export interface TriggerContainer {
  schedule: ScheduleContainer
}

export interface TrimProcessor extends ProcessorBase {
  field: Field
  ignore_missing?: boolean
  target_field?: Field
}

export interface TrimTokenFilter extends TokenFilterBase {
}

export interface TruncateTokenFilter extends TokenFilterBase {
  length: integer
}

export interface TwoDimensionalPoint {
  lat: double
  lon: double
}

export type Type = string

export interface TypeMapping {
  all_field?: AllField
  date_detection?: boolean
  dynamic?: boolean | DynamicMapping
  dynamic_date_formats?: Array<string>
  dynamic_templates?: Record<string, DynamicTemplate> | Array<Record<string, DynamicTemplate>>
  _field_names?: FieldNamesField
  index_field?: IndexField
  _meta?: IndexMetaData
  numeric_detection?: boolean
  properties?: Record<PropertyName, Property>
  _routing?: RoutingField
  _size?: SizeField
  _source?: SourceField
  runtime?: Record<string, RuntimeField>
}

export interface TypeQuery extends QueryBase {
  value: string
}

export type Types = Type | Array<Type>

export interface UaxEmailUrlTokenizer extends TokenizerBase {
  max_token_length: integer
}

export interface UnfollowIndexRequest extends RequestBase {
  index: IndexName
}

export interface UniqueTokenFilter extends TokenFilterBase {
  only_on_same_position: boolean
}

export interface UpdateByQueryRequest extends RequestBase {
  index: Indices
  type?: Types
  allow_no_indices?: boolean
  analyzer?: string
  analyze_wildcard?: boolean
  conflicts?: Conflicts
  default_operator?: DefaultOperator
  df?: string
  expand_wildcards?: ExpandWildcards
  from?: long
  ignore_unavailable?: boolean
  lenient?: boolean
  pipeline?: string
  preference?: string
  query_on_query_string?: string
  refresh?: boolean
  request_cache?: boolean
  requests_per_second?: long
  routing?: Routing
  scroll?: Time
  scroll_size?: long
  search_timeout?: Time
  search_type?: SearchType
  size?: long
  slices?: long
  sort?: Array<string>
  source_enabled?: boolean
  source_excludes?: Fields
  source_includes?: Fields
  stats?: Array<string>
  terminate_after?: long
  timeout?: Time
  version?: boolean
  version_type?: boolean
  wait_for_active_shards?: WaitForActiveShards
  wait_for_completion?: boolean
  body?: {
    max_docs?: long
    query?: QueryContainer
    script?: Script
    slice?: SlicedScroll
    conflicts?: Conflicts
  }
}

export interface UpdateByQueryRethrottleRequest extends RequestBase {
  task_id: Id
  requests_per_second?: long
}

export interface UpdateDatafeedRequest extends RequestBase {
  datafeed_id: Id
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_throttled?: boolean
  ignore_unavailable?: boolean
  body: {
    aggregations?: Record<string, AggregationContainer>
    chunking_config?: ChunkingConfig
    delayed_data_check_config?: DelayedDataCheckConfig
    frequency?: Time
    indexes?: Indices
    indices?: Indices
    indices_options?: DatafeedIndicesOptions
    job_id?: Id
    max_empty_searches?: integer
    query?: QueryContainer
    query_delay?: Time
    script_fields?: Record<string, ScriptField>
    scroll_size?: integer
  }
}

export interface UpdateFilterRequest extends RequestBase {
  filter_id: Id
  body: {
    add_items?: Array<string>
    description?: string
    remove_items?: Array<string>
  }
}

export interface UpdateJobRequest extends RequestBase {
  job_id: Id
  body: {
    allow_lazy_open?: boolean
    analysis_limits?: AnalysisMemoryLimit
    background_persist_interval?: Time
    custom_settings?: Record<string, any>
    description?: string
    model_plot_config?: ModelPlotConfigEnabled
    model_snapshot_retention_days?: long
    renormalization_window_days?: long
    results_retention_days?: long
    groups?: Array<string>
  }
}

export interface UpdateModelSnapshotRequest extends RequestBase {
  job_id: Id
  snapshot_id: Id
  body: {
    description?: string
    retain?: boolean
  }
}

export interface UpdateRequest<TDocument = unknown, TPartialDocument = unknown> extends RequestBase {
  id: Id
  index: IndexName
  type?: Type
  if_primary_term?: long
  if_seq_no?: SequenceNumber
  lang?: string
  refresh?: Refresh
  require_alias?: boolean
  retry_on_conflict?: long
  routing?: Routing
  source_enabled?: boolean
  timeout?: Time
  wait_for_active_shards?: WaitForActiveShards
  _source?: boolean | string | Array<string>
  _source_excludes?: Fields
  _source_includes?: Fields
  body: {
    detect_noop?: boolean
    doc?: TPartialDocument
    doc_as_upsert?: boolean
    script?: Script
    scripted_upsert?: boolean
    _source?: boolean | SourceFilter
    upsert?: TDocument
  }
}

export interface UpdateTransformRequest extends RequestBase {
  transform_id: Name
  defer_validation?: boolean
  body: {
    description?: string
    dest?: TransformDestination
    frequency?: Time
    source?: TransformSource
    sync?: TransformSyncContainer
  }
}

export interface UppercaseProcessor extends ProcessorBase {
  field: Field
  ignore_missing?: boolean
  target_field?: Field
}

export interface UppercaseTokenFilter extends TokenFilterBase {
}

export type Uri = string

export interface UrlDecodeProcessor extends ProcessorBase {
  field: Field
  ignore_missing?: boolean
  target_field?: Field
}

export interface UserAgentProcessor extends ProcessorBase {
  field: Field
  ignore_missing: boolean
  options: Array<UserAgentProperty>
  regex_file: string
  target_field: Field
}

export type UserAgentProperty = 'NAME' | 'MAJOR' | 'MINOR' | 'PATCH' | 'OS' | 'OS_NAME' | 'OS_MAJOR' | 'OS_MINOR' | 'DEVICE' | 'BUILD'

export type Uuid = string

export interface ValidateDetectorRequest extends RequestBase {
  body: Detector
}

export interface ValidateJobRequest extends RequestBase {
  body: {
    job_id?: Id
    analysis_config?: AnalysisConfig
    analysis_limits?: AnalysisLimits
    data_description?: DataDescription
    description?: string
    model_plot?: ModelPlotConfig
    model_snapshot_retention_days?: long
    results_index_name?: IndexName
  }
}

export interface ValueCountAggregation extends FormattableMetricAggregation {
}

export type ValueType = 'string' | 'long' | 'double' | 'number' | 'date' | 'date_nanos' | 'ip' | 'numeric' | 'geo_point' | 'boolean'

export interface VariableWidthHistogramAggregation {
  field?: Field
  buckets?: integer
  shard_size?: integer
  initial_buffer?: integer
}

export type VersionNumber = long

export interface VersionProperty extends DocValuesPropertyBase {
  type: 'version'
}

export type VersionString = string

export type VersionType = 'internal' | 'external' | 'external_gte' | 'force'

export type WaitForActiveShardOptions = 'all'

export type WaitForActiveShards = integer | WaitForActiveShardOptions

export type WaitForEvents = 'immediate' | 'urgent' | 'high' | 'normal' | 'low' | 'languid'

export type WaitForStatus = 'green' | 'yellow' | 'red'

export interface Watch {
  actions: Record<IndexName, Action>
  condition: ConditionContainer
  input: InputContainer
  metadata?: Record<string, any>
  status?: WatchStatus
  throttle_period?: string
  transform?: TransformContainer
  trigger: TriggerContainer
}

export interface WatchStatus {
  actions: Record<IndexName, ActionStatus>
  last_checked?: DateString
  last_met_condition?: DateString
  state: ActivationState
  version: VersionNumber
  execution_state?: string
}

export interface WatcherAckWatchRequest extends RequestBase {
  watch_id: Name
  action_id?: Names
}

export interface WatcherActivateWatchRequest extends RequestBase {
  watch_id: Name
}

export interface WatcherExecuteWatchRequest extends RequestBase {
  id?: Id
  debug?: boolean
  body?: {
    action_modes?: Record<string, ActionExecutionMode>
    alternative_input?: Record<string, any>
    ignore_condition?: boolean
    record_execution?: boolean
    simulated_actions?: SimulatedActions
    trigger_data?: ScheduleTriggerEvent
    watch?: Watch
  }
}

export interface WatcherPutWatchRequest extends RequestBase {
  id: Id
  active?: boolean
  if_primary_term?: long
  if_sequence_number?: long
  version?: VersionNumber
  body?: {
    actions?: Record<string, Action>
    condition?: ConditionContainer
    input?: InputContainer
    metadata?: Record<string, any>
    throttle_period?: string
    transform?: TransformContainer
    trigger?: TriggerContainer
  }
}

export interface WatcherQueryWatchesRequest extends RequestBase {
  stub_a: string
  stub_b: string
  body?: {
    stub_c: string
  }
}

export interface WatcherStartRequest extends RequestBase {
  body?: {
    stub: integer
  }
}

export interface WatcherStatsRequest extends RequestBase {
  metric?: Metrics
  emit_stacktraces?: boolean
}

export interface WatcherStopRequest extends RequestBase {
  body?: {
    stub: integer
  }
}

export interface WeightedAverageAggregation extends Aggregation {
  format?: string
  value?: WeightedAverageValue
  value_type?: ValueType
  weight?: WeightedAverageValue
}

export interface WeightedAverageValue {
  field?: Field
  missing?: double
  script?: Script
}

export interface WhitespaceTokenizer extends TokenizerBase {
  max_token_length: integer
}

export interface WildcardProperty extends DocValuesPropertyBase {
  type: 'wildcard'
}

export interface WildcardQuery extends QueryBase {
  rewrite?: MultiTermQueryRewrite
  value: string
}

export interface WordDelimiterGraphTokenFilter extends TokenFilterBase {
  adjust_offsets: boolean
  catenate_all: boolean
  catenate_numbers: boolean
  catenate_words: boolean
  generate_number_parts: boolean
  generate_word_parts: boolean
  preserve_original: boolean
  protected_words: Array<string>
  protected_words_path: string
  split_on_case_change: boolean
  split_on_numerics: boolean
  stem_english_possessive: boolean
  type_table: Array<string>
  type_table_path: string
}

export interface WordDelimiterTokenFilter extends TokenFilterBase {
  catenate_all: boolean
  catenate_numbers: boolean
  catenate_words: boolean
  generate_number_parts: boolean
  generate_word_parts: boolean
  preserve_original: boolean
  protected_words: Array<string>
  protected_words_path: string
  split_on_case_change: boolean
  split_on_numerics: boolean
  stem_english_possessive: boolean
  type_table: Array<string>
  type_table_path: string
}

export interface XPackInfoRequest extends RequestBase {
  categories?: Array<string>
}

export interface XPackUsageRequest extends RequestBase {
  master_timeout?: Time
}

export type ZeroTermsQuery = 'all' | 'none'

export type double = number

export type float = number

export type integer = number

export type long = number

export type uint = number

export interface CommonCatQueryParameters {
  format?: string
  h?: Names
  help?: boolean
  local?: boolean
  master_timeout?: Time
  s?: Array<string>
  v?: boolean
}

export interface CommonQueryParameters {
  error_trace?: boolean
  filter_path?: string | Array<string>
  human?: boolean
  pretty?: boolean
  source_query_string?: string
}

