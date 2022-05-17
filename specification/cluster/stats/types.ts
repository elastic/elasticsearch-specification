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

import { Dictionary } from '@spec_utils/Dictionary'
import { Name, VersionString } from '@_types/common'
import { double, integer, long } from '@_types/Numeric'
import {
  CompletionStats,
  DocStats,
  FielddataStats,
  QueryCacheStats,
  SegmentsStats,
  StoreStats,
  PluginStats
} from '@_types/Stats'
import { TimeSpan, TimeSpanMillis } from '@_types/Time'

export class ClusterFileSystem {
  available_in_bytes: long
  free_in_bytes: long
  total_in_bytes: long
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
  /** Contains statistics about segments in selected nodes. */
  segments: SegmentsStats
  /** Contains statistics about indices with shards assigned to selected nodes. */
  shards: ClusterIndicesShards
  /** Contains statistics about the size of shards assigned to selected nodes. */
  store: StoreStats
  /**
   * Contains statistics about field mappings in selected nodes.
   * @doc_id mapping
   */
  mappings: FieldTypesMappings
  /**
   * Contains statistics about analyzers and analyzer components used in selected nodes.
   * @doc_id analyzer-anatomy
   */
  analysis: CharFilterTypes
  versions?: IndicesVersions[]
}

export class FieldTypesMappings {
  field_types: FieldTypes[]
  runtime_field_types?: RuntimeFieldTypes[]
}

export class FieldTypes {
  name: Name
  count: integer
  index_count: integer
  /** @since 7.13.0 */
  script_count?: integer
}

export class RuntimeFieldTypes {
  name: Name
  count: integer
  index_count: integer
  scriptless_count: integer
  shadowed_count: integer
  lang: string[]
  lines_max: integer
  lines_total: integer
  chars_max: integer
  chars_total: integer
  source_max: integer
  source_total: integer
  doc_max: integer
  doc_total: integer
}

export class CharFilterTypes {
  char_filter_types: FieldTypes[]
  tokenizer_types: FieldTypes[]
  filter_types: FieldTypes[]
  analyzer_types: FieldTypes[]
  built_in_char_filters: FieldTypes[]
  built_in_tokenizers: FieldTypes[]
  built_in_filters: FieldTypes[]
  built_in_analyzers: FieldTypes[]
}

export class IndicesVersions {
  index_count: integer
  primary_shard_count: integer
  total_primary_bytes: long
  version: VersionString
}

export class ClusterIngest {
  number_of_pipelines: integer
  processor_stats: Dictionary<string, ClusterProcessor>
}

export class ClusterJvm {
  max_uptime_in_millis: long
  mem: ClusterJvmMemory
  threads: long
  versions: ClusterJvmVersion[]
}

export class ClusterJvmMemory {
  heap_max_in_bytes: long
  heap_used_in_bytes: long
}

export class ClusterJvmVersion {
  bundled_jdk: boolean
  count: integer
  using_bundled_jdk: boolean
  version: VersionString
  vm_name: string
  vm_vendor: string
  vm_version: VersionString
}

export class ClusterNetworkTypes {
  http_types: Dictionary<string, integer>
  transport_types: Dictionary<string, integer>
}

export class ClusterNodeCount {
  coordinating_only: integer
  data: integer
  ingest: integer
  master: integer
  total: integer
  voting_only: integer
  data_cold: integer
  /** @since 7.13.0 */
  data_frozen?: integer
  data_content: integer
  data_warm: integer
  data_hot: integer
  ml: integer
  remote_cluster_client: integer
  transform: integer
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
  ingest: ClusterIngest
  /** Contains statistics about the Java Virtual Machines (JVMs) used by selected nodes. */
  jvm: ClusterJvm
  /** Contains statistics about the transport and HTTP networks used by selected nodes. */
  network_types: ClusterNetworkTypes
  /** Contains statistics about the operating systems used by selected nodes. */
  os: ClusterOperatingSystem
  /** Contains statistics about Elasticsearch distributions installed on selected nodes. */
  packaging_types: NodePackagingType[]
  /** Contains statistics about installed plugins and modules by selected nodes. */
  plugins: PluginStats[]
  /** Contains statistics about processes used by selected nodes. */
  process: ClusterProcess
  /** Array of Elasticsearch versions used on selected nodes. */
  versions: VersionString[]
  /** @since 7.16.0 */
  indexing_pressure: IndexingPressure
}

export class ClusterOperatingSystemArchitecture {
  count: integer
  arch: string
}

export class ClusterOperatingSystem {
  allocated_processors: integer
  available_processors: integer
  mem: OperatingSystemMemoryInfo
  names: ClusterOperatingSystemName[]
  pretty_names: ClusterOperatingSystemPrettyName[]
  architectures?: ClusterOperatingSystemArchitecture[]
}

export class ClusterOperatingSystemName {
  count: integer
  name: Name
}

export class ClusterOperatingSystemPrettyName {
  count: integer
  pretty_name: Name
}

export class ClusterProcess {
  cpu: ClusterProcessCpu
  open_file_descriptors: ClusterProcessOpenFileDescriptors
}

export class ClusterProcessCpu {
  percent: integer
}

export class ClusterProcessOpenFileDescriptors {
  avg: long
  max: long
  min: long
}

export class ClusterProcessor {
  count: long
  current: long
  failed: long
  time?: TimeSpan
  time_in_millis: TimeSpanMillis
}

export class ClusterShardMetrics {
  avg: double
  max: double
  min: double
}

export class NodePackagingType {
  count: integer
  flavor: string
  type: string
}

export class OperatingSystemMemoryInfo {
  free_in_bytes: long
  free_percent: integer
  total_in_bytes: long
  used_in_bytes: long
  used_percent: integer
  /** @since 7.16.0 */
  adjusted_total_in_bytes?: long
}

export class IndexingPressure {
  memory: IndexingPressureMemory
}

export class IndexingPressureMemory {
  limit_in_bytes: long
  current: IndexingPressureMemorySummary
  total: IndexingPressureMemorySummary
}

export class IndexingPressureMemorySummary {
  all_in_bytes: long
  combined_coordinating_and_primary_in_bytes: long
  coordinating_in_bytes: long
  coordinating_rejections?: long
  primary_in_bytes: long
  primary_rejections?: long
  replica_in_bytes: long
  replica_rejections?: long
}
