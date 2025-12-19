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

import { ByteSize, HealthStatus, Name, VersionString } from '@_types/common'
import { double, integer, long } from '@_types/Numeric'
import {
  CompletionStats,
  DocStats,
  FielddataStats,
  PluginStats,
  QueryCacheStats,
  SegmentsStats,
  StoreStats
} from '@_types/Stats'
import { DateFormat, Duration, DurationValue, UnitMillis } from '@_types/Time'
import { IndexingPressureMemory } from '@nodes/_types/Stats'
import { Dictionary } from '@spec_utils/Dictionary'

export class ClusterFileSystem {
  path?: string
  mount?: string
  type?: string
  /**
   * Total number of bytes available to JVM in file stores across all selected nodes.
   * Depending on operating system or process-level restrictions, this number may be less than `nodes.fs.free_in_byes`.
   * This is the actual amount of free disk space the selected Elasticsearch nodes can use.
   */
  available_in_bytes?: long
  /**
   * Total number of bytes available to JVM in file stores across all selected nodes.
   * Depending on operating system or process-level restrictions, this number may be less than `nodes.fs.free_in_byes`.
   * This is the actual amount of free disk space the selected Elasticsearch nodes can use.
   */
  available?: ByteSize
  /**
   * Total number, in bytes, of unallocated bytes in file stores across all selected nodes.
   */
  free_in_bytes?: long
  /**
   * Total number of unallocated bytes in file stores across all selected nodes.
   */
  free?: ByteSize
  /**
   * Total size, in bytes, of all file stores across all selected nodes.
   */
  total_in_bytes?: long
  /**
   * Total size of all file stores across all selected nodes.
   */
  total?: ByteSize
  low_watermark_free_space?: ByteSize
  low_watermark_free_space_in_bytes?: long
  high_watermark_free_space?: ByteSize
  high_watermark_free_space_in_bytes?: long
  flood_stage_free_space?: ByteSize
  flood_stage_free_space_in_bytes?: long
  frozen_flood_stage_free_space?: ByteSize
  frozen_flood_stage_free_space_in_bytes?: long
}

export class ClusterIndicesShardsIndex {
  /** Contains statistics about the number of primary shards assigned to selected nodes. */
  primaries: ClusterShardMetrics
  /** Contains statistics about the number of replication shards assigned to selected nodes. */
  replication: ClusterShardMetrics
  /** Contains statistics about the number of shards assigned to selected nodes. */
  shards: ClusterShardMetrics
}

/**
 * Contains statistics about shards assigned to selected nodes.
 */
export class ClusterIndicesShards {
  /** Contains statistics about shards assigned to selected nodes. */
  index?: ClusterIndicesShardsIndex
  /** Number of primary shards assigned to selected nodes. */
  primaries?: double
  /** Ratio of replica shards to primary shards across all selected nodes. */
  replication?: double
  /** Total number of shards assigned to selected nodes. */
  total?: double
}

export class ClusterIndices {
  /**
   * Contains statistics about analyzers and analyzer components used in selected nodes.
   */
  analysis?: CharFilterTypes
  /** Contains statistics about memory used for completion in selected nodes. */
  completion: CompletionStats
  /** Total number of indices with shards assigned to selected nodes. */
  count: long
  /** Contains counts for documents in selected nodes. */
  docs: DocStats
  /**
   * Contains statistics about the field data cache of selected nodes.
   * @doc_id modules-fielddata
   */
  fielddata: FielddataStats
  /** Contains statistics about the query cache of selected nodes. */
  query_cache: QueryCacheStats
  /**
   * Holds a snapshot of the search usage statistics.
   * Used to hold the stats for a single node that's part of a ClusterStatsNodeResponse, as well as to
   * accumulate stats for the entire cluster and return them as part of the ClusterStatsResponse.
   */
  search: SearchUsageStats
  /** Contains statistics about segments in selected nodes. */
  segments: SegmentsStats
  /** Contains statistics about indices with shards assigned to selected nodes. */
  shards: ClusterIndicesShards
  /** Contains statistics about the size of shards assigned to selected nodes. */
  store: StoreStats
  /**
   * Contains statistics about field mappings in selected nodes.
   */
  mappings?: FieldTypesMappings
  /**
   * Contains statistics about analyzers and analyzer components used in selected nodes.
   * @doc_id analyzer-anatomy
   */
  versions?: IndicesVersions[]
  /**
   * Contains statistics about indexed dense vector
   */
  dense_vector: DenseVectorStats
  /**
   * Contains statistics about indexed sparse vector
   */
  sparse_vector: SparseVectorStats
}

export class SearchUsageStats {
  total: long
  queries: Dictionary<Name, long>
  rescorers: Dictionary<Name, long>
  sections: Dictionary<Name, long>
  retrievers: Dictionary<Name, long>
  /* @availability stack since=9.2.0 */
  extended: ExtendedSearchUsage
}

export class ExtendedSearchUsage {
  retrievers?: ExtendedRetrieversSearchUsage
  section?: ExtendedSectionSearchUsage
}

export class ExtendedRetrieversSearchUsage {
  text_similarity_reranker?: ExtendedTextSimilarityRetrieverUsage
}

export class ExtendedTextSimilarityRetrieverUsage {
  chunk_rescorer?: long
}

export class ExtendedSectionSearchUsage {
  sort?: Dictionary<string, long>
}

export class DenseVectorStats {
  value_count: long
  off_heap?: DenseVectorOffHeapStats
}

export class SparseVectorStats {
  value_count: long
}

export class DenseVectorOffHeapStats {
  total_size_bytes: long
  total_size?: ByteSize
  total_veb_size_bytes: long
  total_veb_size?: ByteSize
  total_vec_size_bytes: long
  total_vec_size?: ByteSize
  total_veq_size_bytes: long
  total_veq_size?: ByteSize
  total_vex_size_bytes: long
  total_vex_size?: ByteSize
  total_cenif_size_bytes: long
  total_cenif_size?: ByteSize
  total_clivf_size_bytes: long
  total_clivf_size?: ByteSize
  fielddata?: Dictionary<string, Dictionary<string, long>>
}

export class FieldTypesMappings {
  /**
   * Contains statistics about field data types used in selected nodes.
   */
  field_types: FieldTypes[]
  /**
   * Contains statistics about runtime field data types used in selected nodes.
   */
  runtime_field_types: RuntimeFieldTypes[]
  /**
   * Total number of fields in all non-system indices.
   */
  total_field_count?: long
  /**
   * Total number of fields in all non-system indices, accounting for mapping deduplication.
   */
  total_deduplicated_field_count?: long
  /**
   * Total size of all mappings after deduplication and compression.
   */
  total_deduplicated_mapping_size?: ByteSize
  /**
   * Total size of all mappings, in bytes, after deduplication and compression.
   */
  total_deduplicated_mapping_size_in_bytes?: long
  /**
   * Source mode usage count.
   */
  source_modes: Dictionary<Name, integer>
}

export class FieldTypes {
  /**
   * The name for the field type in selected nodes.
   */
  name: Name
  /**
   * The number of occurrences of the field type in selected nodes.
   */
  count: integer
  /**
   * The number of indices containing the field type in selected nodes.
   */
  index_count: integer
  /**
   * For dense_vector field types, number of indexed vector types in selected nodes.
   */
  indexed_vector_count?: integer
  /**
   * For dense_vector field types, the maximum dimension of all indexed vector types in selected nodes.
   */
  indexed_vector_dim_max?: integer
  /**
   * For dense_vector field types, the minimum dimension of all indexed vector types in selected nodes.
   */
  indexed_vector_dim_min?: integer
  /**
   * The number of fields that declare a script.
   * @availability stack since=7.13.0
   * @availability serverless
   */
  script_count?: integer
  /**
   * For dense_vector field types, count of mappings by index type
   */
  vector_index_type_count?: Dictionary<Name, integer>
  /**
   * For dense_vector field types, count of mappings by similarity
   */
  vector_similarity_type_count?: Dictionary<Name, integer>
  /**
   * For dense_vector field types, count of mappings by element type
   */
  vector_element_type_count?: Dictionary<Name, integer>
}

export class RuntimeFieldTypes {
  /**
   * Maximum number of characters for a single runtime field script.
   */
  chars_max: integer
  /**
   * Total number of characters for the scripts that define the current runtime field data type.
   */
  chars_total: integer
  /**
   * Number of runtime fields mapped to the field data type in selected nodes.
   */
  count: integer
  /**
   * Maximum number of accesses to doc_values for a single runtime field script
   */
  doc_max: integer
  /**
   * Total number of accesses to doc_values for the scripts that define the current runtime field data type.
   */
  doc_total: integer
  /**
   * Number of indices containing a mapping of the runtime field data type in selected nodes.
   */
  index_count: integer
  /**
   * Script languages used for the runtime fields scripts.
   */
  lang: string[]
  /**
   * Maximum number of lines for a single runtime field script.
   */
  lines_max: integer
  /**
   * Total number of lines for the scripts that define the current runtime field data type.
   */
  lines_total: integer
  /**
   * Field data type used in selected nodes.
   */
  name: Name
  /**
   * Number of runtime fields that don’t declare a script.
   */
  scriptless_count: integer
  /**
   * Number of runtime fields that shadow an indexed field.
   */
  shadowed_count: integer
  /**
   * Maximum number of accesses to _source for a single runtime field script.
   */
  source_max: integer
  /**
   * Total number of accesses to _source for the scripts that define the current runtime field data type.
   */
  source_total: integer
}

export class CharFilterTypes {
  /**
   * Contains statistics about analyzer types used in selected nodes.
   */
  analyzer_types: FieldTypes[]
  /**
   * Contains statistics about built-in analyzers used in selected nodes.
   */
  built_in_analyzers: FieldTypes[]
  /**
   * Contains statistics about built-in character filters used in selected nodes.
   */
  built_in_char_filters: FieldTypes[]
  /**
   * Contains statistics about built-in token filters used in selected nodes.
   */
  built_in_filters: FieldTypes[]
  /**
   * Contains statistics about built-in tokenizers used in selected nodes.
   */
  built_in_tokenizers: FieldTypes[]
  /**
   * Contains statistics about character filter types used in selected nodes.
   */
  char_filter_types: FieldTypes[]
  /**
   * Contains statistics about token filter types used in selected nodes.
   */
  filter_types: FieldTypes[]
  /**
   * Contains statistics about tokenizer types used in selected nodes.
   */
  tokenizer_types: FieldTypes[]
  /**
   * Contains statistics about synonyms types used in selected nodes.
   */
  synonyms: Dictionary<Name, SynonymsStats>
}

export class SynonymsStats {
  count: integer
  index_count: integer
}

export class IndicesVersions {
  index_count: integer
  primary_shard_count: integer
  total_primary_bytes: long
  total_primary_size?: ByteSize
  version: VersionString
}

export class ClusterIngest {
  number_of_pipelines: integer
  processor_stats: Dictionary<string, ClusterProcessor>
}

export class ClusterJvm {
  /**
   * Uptime duration, in milliseconds, since JVM last started.
   */
  max_uptime_in_millis: DurationValue<UnitMillis>
  /**
   * Uptime duration since JVM last started.
   */
  max_uptime?: Duration
  /**
   * Contains statistics about memory used by selected nodes.
   */
  mem: ClusterJvmMemory
  /**
   * Number of active threads in use by JVM across all selected nodes.
   */
  threads: long
  /**
   * Contains statistics about the JVM versions used by selected nodes.
   */
  versions: ClusterJvmVersion[]
}

export class ClusterJvmMemory {
  /**
   * Maximum amount of memory, in bytes, available for use by the heap across all selected nodes.
   */
  heap_max_in_bytes: long
  /**
   * Maximum amount of memory available for use by the heap across all selected nodes.
   */
  heap_max?: ByteSize
  /**
   * Memory, in bytes, currently in use by the heap across all selected nodes.
   */
  heap_used_in_bytes: long
  /**
   * Memory currently in use by the heap across all selected nodes.
   */
  heap_used?: ByteSize
}

export class ClusterJvmVersion {
  /**
   * Always `true`. All distributions come with a bundled Java Development Kit (JDK).
   */
  bundled_jdk: boolean
  /**
   * Total number of selected nodes using JVM.
   */
  count: integer
  /**
   * If `true`, a bundled JDK is in use by JVM.
   */
  using_bundled_jdk: boolean
  /**
   * Version of JVM used by one or more selected nodes.
   */
  version: VersionString
  /**
   * Name of the JVM.
   */
  vm_name: string
  /**
   * Vendor of the JVM.
   */
  vm_vendor: string
  /**
   * Full version number of JVM.
   * The full version number includes a plus sign (+) followed by the build number.
   */
  vm_version: VersionString
}

export class ClusterNetworkTypes {
  /**
   * Contains statistics about the HTTP network types used by selected nodes.
   */
  http_types: Dictionary<string, integer>
  /**
   * Contains statistics about the transport network types used by selected nodes.
   */
  transport_types: Dictionary<string, integer>
}

export class ClusterNodeCount {
  total: integer
  coordinating_only?: integer
  data?: integer
  data_cold?: integer
  data_content?: integer
  /**
   * @availability stack since=7.13.0
   * @availability serverless
   */
  data_frozen?: integer
  data_hot?: integer
  data_warm?: integer
  index?: integer
  ingest?: integer
  master?: integer
  ml?: integer
  remote_cluster_client?: integer
  search?: integer
  transform?: integer
  voting_only?: integer
}

export class ClusterNodes {
  /** Contains counts for nodes selected by the request’s node filters. */
  count: ClusterNodeCount
  /**
   * Contains statistics about the discovery types used by selected nodes.
   * @doc_id modules-discovery-hosts-providers
   */
  discovery_types: Dictionary<string, integer>
  /** Contains statistics about file stores by selected nodes. */
  fs: ClusterFileSystem
  /**
   * @availability stack since=7.16.0
   * @availability serverless
   */
  indexing_pressure: IndexingPressure
  ingest: ClusterIngest
  /** Contains statistics about the Java Virtual Machines (JVMs) used by selected nodes. */
  jvm: ClusterJvm
  /** Contains statistics about the transport and HTTP networks used by selected nodes. */
  network_types: ClusterNetworkTypes
  /** Contains statistics about the operating systems used by selected nodes. */
  os: ClusterOperatingSystem
  /** Contains statistics about Elasticsearch distributions installed on selected nodes. */
  packaging_types: NodePackagingType[]
  /**
   * Contains statistics about installed plugins and modules by selected nodes.
   * If no plugins or modules are installed, this array is empty.
   */
  plugins: PluginStats[]
  /** Contains statistics about processes used by selected nodes. */
  process: ClusterProcess
  /** Array of Elasticsearch versions used on selected nodes. */
  versions: VersionString[]
}

export class ClusterOperatingSystemArchitecture {
  /**
   * Name of an architecture used by one or more selected nodes.
   */
  arch: string
  /**
   * Number of selected nodes using the architecture.
   */
  count: integer
}

export class ClusterOperatingSystem {
  /**
   * Number of processors used to calculate thread pool size across all selected nodes.
   * This number can be set with the processors setting of a node and defaults to the number of processors reported by the operating system.
   * In both cases, this number will never be larger than 32.
   */
  allocated_processors: integer
  /**
   * Contains statistics about processor architectures (for example, x86_64 or aarch64) used by selected nodes.
   */
  architectures?: ClusterOperatingSystemArchitecture[]
  /**
   * Number of processors available to JVM across all selected nodes.
   */
  available_processors: integer
  /**
   * Contains statistics about memory used by selected nodes.
   */
  mem: OperatingSystemMemoryInfo
  /**
   * Contains statistics about operating systems used by selected nodes.
   */
  names: ClusterOperatingSystemName[]
  /**
   * Contains statistics about operating systems used by selected nodes.
   */
  pretty_names: ClusterOperatingSystemPrettyName[]
}

export class ClusterOperatingSystemName {
  /**
   * Number of selected nodes using the operating system.
   */
  count: integer
  /**
   * Name of an operating system used by one or more selected nodes.
   */
  name: Name
}

export class ClusterOperatingSystemPrettyName {
  /**
   * Number of selected nodes using the operating system.
   */
  count: integer
  /**
   * Human-readable name of an operating system used by one or more selected nodes.
   */
  pretty_name: Name
}

export class ClusterProcess {
  /**
   * Contains statistics about CPU used by selected nodes.
   */
  cpu: ClusterProcessCpu
  /**
   * Contains statistics about open file descriptors in selected nodes.
   */
  open_file_descriptors: ClusterProcessOpenFileDescriptors
}

export class ClusterProcessCpu {
  /**
   * Percentage of CPU used across all selected nodes.
   * Returns `-1` if not supported.
   */
  percent: integer
}

export class ClusterProcessOpenFileDescriptors {
  /**
   * Average number of concurrently open file descriptors.
   * Returns `-1` if not supported.
   */
  avg: long
  /**
   * Maximum number of concurrently open file descriptors allowed across all selected nodes.
   * Returns `-1` if not supported.
   */
  max: long
  /**
   * Minimum number of concurrently open file descriptors across all selected nodes.
   * Returns -1 if not supported.
   */
  min: long
}

export class ClusterProcessor {
  count: long
  current: long
  failed: long
  time?: Duration
  time_in_millis: DurationValue<UnitMillis>
}

export class ClusterShardMetrics {
  /**
   * Mean number of shards in an index, counting only shards assigned to selected nodes.
   */
  avg: double
  /**
   * Maximum number of shards in an index, counting only shards assigned to selected nodes.
   */
  max: double
  /**
   * Minimum number of shards in an index, counting only shards assigned to selected nodes.
   */
  min: double
}

export class ClusterSnapshotStats {
  current_counts: SnapshotCurrentCounts
  repositories: Dictionary<Name, PerRepositoryStats>
}

export class SnapshotCurrentCounts {
  /**
   * Snapshots currently in progress
   */
  snapshots: integer
  /**
   * Incomplete shard snapshots
   */
  shard_snapshots: integer
  /**
   * Snapshots deletions in progress
   */
  snapshot_deletions: integer
  /**
   * Sum of snapshots and snapshot_deletions
   */
  concurrent_operations: integer
  /**
   * Cleanups in progress, not counted in concurrent_operations as they are not concurrent
   */
  cleanups: integer
}

export class PerRepositoryStats {
  type: string
  oldest_start_time_millis: UnitMillis
  oldest_start_time?: DateFormat
  current_counts: RepositoryStatsCurrentCounts
}

export class RepositoryStatsCurrentCounts {
  snapshots: integer
  clones: integer
  finalizations: integer
  deletions: integer
  snapshot_deletions: integer
  active_deletions: integer
  shards: RepositoryStatsShards
}

export class RepositoryStatsShards {
  total: integer
  complete: integer
  incomplete: integer
  states: Dictionary<ShardState, integer>
}

export enum ShardState {
  INIT,
  SUCCESS,
  FAILED,
  ABORTED,
  MISSING,
  WAITING,
  QUEUED,
  PAUSED_FOR_NODE_REMOVAL
}

export class NodePackagingType {
  /**
   * Number of selected nodes using the distribution flavor and file type.
   */
  count: integer
  /**
   * Type of Elasticsearch distribution. This is always `default`.
   */
  flavor: string
  /**
   * File type (such as `tar` or `zip`) used for the distribution package.
   */
  type: string
}

export class OperatingSystemMemoryInfo {
  /**
   * Total amount, in bytes, of memory across all selected nodes, but using the value specified using the `es.total_memory_bytes` system property instead of measured total memory for those nodes where that system property was set.
   * @availability stack since=7.16.0
   * @availability serverless
   */
  adjusted_total_in_bytes?: long
  /**
   * Total amount of memory across all selected nodes, but using the value specified using the `es.total_memory_bytes` system property instead of measured total memory for those nodes where that system property was set.
   * @availability stack since=7.16.0
   * @availability serverless
   */
  adjusted_total?: ByteSize

  /**
   * Amount, in bytes, of free physical memory across all selected nodes.
   */
  free_in_bytes: long
  /**
   * Amount of free physical memory across all selected nodes.
   */
  free?: ByteSize

  /**
   * Percentage of free physical memory across all selected nodes.
   */
  free_percent: integer
  /**
   * Total amount, in bytes, of physical memory across all selected nodes.
   */
  total_in_bytes: long
  /**
   * Total amount of physical memory across all selected nodes.
   */
  total?: ByteSize

  /**
   * Amount, in bytes, of physical memory in use across all selected nodes.
   */
  used_in_bytes: long
  /**
   * Amount of physical memory in use across all selected nodes.
   */
  used?: ByteSize
  /**
   * Percentage of physical memory in use across all selected nodes.
   */
  used_percent: integer
}

export class IndexingPressure {
  memory: IndexingPressureMemory
}

export class CCSStats {
  /**
   * Contains remote cluster settings and metrics collected from them.
   * The keys are cluster names, and the values are per-cluster data.
   * Only present if `include_remotes` option is set to true.
   */
  clusters?: Dictionary<string, RemoteClusterInfo>
  /**
   * Information about cross-cluster search usage.
   */
  _search: CCSUsageStats
  /**
   * Information about ES|QL cross-cluster query usage.
   */
  _esql?: CCSUsageStats
}

export class RemoteClusterInfo {
  /** The UUID of the remote cluster. */
  cluster_uuid: string
  /** The connection mode used to communicate with the remote cluster. */
  mode: string
  /** The `skip_unavailable` setting used for this remote cluster. */
  skip_unavailable: boolean
  /** Transport compression setting used for this remote cluster. */
  'transport.compress': string
  /** Health status of the cluster, based on the state of its primary and replica shards. */
  status: HealthStatus
  /** The list of Elasticsearch versions used by the nodes on the remote cluster. */
  version: VersionString[]
  /** The total count of nodes in the remote cluster. */
  nodes_count: integer
  /** The total number of shards in the remote cluster. */
  shards_count: integer
  /** The total number of indices in the remote cluster. */
  indices_count: integer
  /** Total data set size, in bytes, of all shards assigned to selected nodes. */
  indices_total_size_in_bytes: long
  /** Total data set size of all shards assigned to selected nodes, as a human-readable string. */
  indices_total_size?: string
  /** Maximum amount of memory, in bytes, available for use by the heap across the nodes of the remote cluster. */
  max_heap_in_bytes: long
  /** Maximum amount of memory available for use by the heap across the nodes of the remote cluster, as a human-readable string. */
  max_heap?: string
  /** Total amount, in bytes, of physical memory across the nodes of the remote cluster. */
  mem_total_in_bytes: long
  /** Total amount of physical memory across the nodes of the remote cluster, as a human-readable string. */
  mem_total?: string
}

export class CCSUsageStats {
  /** The total number of cross-cluster search requests that have been executed by the cluster. */
  total: integer
  /** The total number of cross-cluster search requests that have been successfully executed by the cluster. */
  success: integer
  /** The total number of cross-cluster search requests (successful or failed) that had at least one remote cluster skipped. */
  skipped: integer
  /** Statistics about the time taken to execute cross-cluster search requests. */
  took: CCSUsageTimeValue
  /** Statistics about the time taken to execute cross-cluster search requests for which the `ccs_minimize_roundtrips` setting was set to `true`. */
  took_mrt_true?: CCSUsageTimeValue
  /** Statistics about the time taken to execute cross-cluster search requests for which the `ccs_minimize_roundtrips` setting was set to `false`. */
  took_mrt_false?: CCSUsageTimeValue
  /** The maximum number of remote clusters that were queried in a single cross-cluster search request. */
  remotes_per_search_max: integer
  /** The average number of remote clusters that were queried in a single cross-cluster search request. */
  remotes_per_search_avg: double
  /** Statistics about the reasons for cross-cluster search request failures. The keys are the failure reason names and the values are the number of requests that failed for that reason. */
  failure_reasons: Dictionary<string, integer>
  /** The keys are the names of the search feature, and the values are the number of requests that used that feature. Single request can use more than one feature (e.g. both `async` and `wildcard`). */
  features: Dictionary<string, integer>
  /** Statistics about the clients that executed cross-cluster search requests. The keys are the names of the clients, and the values are the number of requests that were executed by that client. Only known clients (such as `kibana` or `elasticsearch`) are counted. */
  clients: Dictionary<string, integer>
  /** Statistics about the clusters that were queried in cross-cluster search requests. The keys are cluster names, and the values are per-cluster telemetry data. This also includes the local cluster itself, which uses the name `(local)`. */
  clusters: Dictionary<string, CCSUsageClusterStats>
}

export class CCSUsageTimeValue {
  /** The maximum time taken to execute a request, in milliseconds. */
  max: DurationValue<UnitMillis>
  /** The average time taken to execute a request, in milliseconds. */
  avg: DurationValue<UnitMillis>
  /** The 90th percentile of the time taken to execute requests, in milliseconds. */
  p90: DurationValue<UnitMillis>
}

export class CCSUsageClusterStats {
  /** The total number of successful (not skipped) cross-cluster search requests that were executed against this cluster. This may include requests where partial results were returned, but not requests in which the cluster has been skipped entirely. */
  total: integer
  /** The total number of cross-cluster search requests for which this cluster was skipped. */
  skipped: integer
  /** Statistics about the time taken to execute requests against this cluster. */
  took: CCSUsageTimeValue
}
