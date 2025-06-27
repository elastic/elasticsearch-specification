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

import { Analyzer } from '@_types/analysis/analyzers'
import { CharFilter } from '@_types/analysis/char_filters'
import { Normalizer } from '@_types/analysis/normalizers'
import { TokenFilter } from '@_types/analysis/token_filters'
import { Tokenizer } from '@_types/analysis/tokenizers'
import {
  ByteSize,
  Name,
  PipelineName,
  Uuid,
  VersionString
} from '@_types/common'
import { double, integer, long } from '@_types/Numeric'
import { Script } from '@_types/Scripting'
import {
  DFIIndependenceMeasure,
  DFRAfterEffect,
  DFRBasicModel,
  IBDistribution,
  IBLambda,
  Normalization
} from '@_types/Similarity'
import { DateTime, Duration, EpochTime, UnitMillis } from '@_types/Time'
import { IndexRouting } from '@indices/_types/IndexRouting'
import { AdditionalProperties } from '@spec_utils/behaviors'
import { Dictionary } from '@spec_utils/Dictionary'
import { Stringified } from '@spec_utils/Stringified'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { WithNullValue } from '@spec_utils/utils'
import { IndexSegmentSort } from './IndexSegmentSort'

export class SoftDeletes {
  /**
   * Indicates whether soft deletes are enabled on the index.
   * @server_default true
   */
  enabled?: boolean
  /**
   * The maximum period to retain a shard history retention lease before it is considered expired.
   * Shard history retention leases ensure that soft deletes are retained during merges on the Lucene
   * index. If a soft delete is merged away before it can be replicated to a follower the following
   * process will fail due to incomplete history on the leader.
   */
  retention_lease?: RetentionLease
}

export class RetentionLease {
  period: Duration
}

/**
 * @doc_id index-modules-settings
 * @ext_doc_id index-settings
 * @behavior_meta AdditionalProperties fieldname=other_settings description="Additional settings not covered in this type."
 */
export class IndexSettings
  implements AdditionalProperties<string, UserDefinedValue>
{
  index?: IndexSettings
  mode?: string
  routing_path?: string | string[]
  soft_deletes?: SoftDeletes
  sort?: IndexSegmentSort
  /**
   * @server_default 1
   * @availability stack
   * */
  number_of_shards?: integer | string // TODO: should be only int
  /**
   * @server_default 0
   * @availability stack
   * */
  number_of_replicas?: integer | string // TODO: should be only int
  number_of_routing_shards?: integer
  /** @server_default false */
  check_on_startup?: IndexCheckOnStartup
  /** @server_default LZ4 */
  codec?: string
  /** @server_default 1 */
  routing_partition_size?: Stringified<integer>
  /** @server_default true */
  load_fixed_bitset_filters_eagerly?: boolean
  /** @server_default false */
  hidden?: boolean | string // TODO should be bool only
  /** @server_default false */
  auto_expand_replicas?: WithNullValue<string>
  merge?: Merge
  search?: SettingsSearch
  /** @server_default 1s */
  refresh_interval?: Duration
  /** @server_default 10000 */
  max_result_window?: integer
  /** @server_default 100 */
  max_inner_result_window?: integer
  /** @server_default 10000 */
  max_rescore_window?: integer
  /** @server_default 100 */
  max_docvalue_fields_search?: integer
  /** @server_default 32 */
  max_script_fields?: integer
  /** @server_default 1 */
  max_ngram_diff?: integer
  /** @server_default 3 */
  max_shingle_diff?: integer
  blocks?: IndexSettingBlocks
  max_refresh_listeners?: integer
  /**
   * Settings to define analyzers, tokenizers, token filters and character filters.
   * Refer to the linked documentation for step-by-step examples of updating analyzers on existing indices.
   * @ext_doc_id analyzer-update-existing
   */
  analyze?: SettingsAnalyze
  highlight?: SettingsHighlight
  /** @server_default 65536 */
  max_terms_count?: integer
  /** @server_default 1000 */
  max_regex_length?: integer
  routing?: IndexRouting
  /** @server_default 60s */
  gc_deletes?: Duration
  /** @server_default _none */
  default_pipeline?: PipelineName
  /** @server_default _none */
  final_pipeline?: PipelineName
  lifecycle?: IndexSettingsLifecycle
  provided_name?: Name
  creation_date?: Stringified<EpochTime<UnitMillis>>
  creation_date_string?: DateTime
  uuid?: Uuid
  version?: IndexVersioning
  verified_before_close?: boolean | string
  format?: string | integer
  max_slices_per_scroll?: integer
  translog?: Translog
  query_string?: SettingsQueryString
  priority?: integer | string
  top_metrics_max_size?: integer
  analysis?: IndexSettingsAnalysis
  settings?: IndexSettings
  time_series?: IndexSettingsTimeSeries
  queries?: Queries
  /**
   * Configure custom similarity settings to customize how search results are scored.
   */
  similarity?: Dictionary<string, SettingsSimilarity>
  /**
   * Enable or disable dynamic mapping for an index.
   */
  mapping?: MappingLimitSettings
  'indexing.slowlog'?: IndexingSlowlogSettings
  /**
   * Configure indexing back pressure limits.
   */
  indexing_pressure?: IndexingPressure
  /**
   * The store module allows you to control how index data is stored and accessed on disk.
   */
  store?: Storage
}

/**
 * @variants internal tag='type'
 * @non_exhaustive
 */
export type SettingsSimilarity =
  | SettingsSimilarityBm25
  | SettingsSimilarityBoolean
  | SettingsSimilarityDfi
  | SettingsSimilarityDfr
  | SettingsSimilarityIb
  | SettingsSimilarityLmd
  | SettingsSimilarityLmj
  | SettingsSimilarityScripted

export class SettingsSimilarityBoolean {
  type: 'boolean'
}

export class SettingsSimilarityBm25 {
  type: 'BM25'
  b?: double
  discount_overlaps?: boolean
  k1?: double
}

export class SettingsSimilarityDfi {
  type: 'DFI'
  independence_measure: DFIIndependenceMeasure
}

export class SettingsSimilarityDfr {
  type: 'DFR'
  after_effect: DFRAfterEffect
  basic_model: DFRBasicModel
  normalization: Normalization
}

export class SettingsSimilarityIb {
  type: 'IB'
  distribution: IBDistribution
  lambda: IBLambda
  normalization: Normalization
}

export class SettingsSimilarityLmd {
  type: 'LMDirichlet'
  mu?: double
}

export class SettingsSimilarityLmj {
  type: 'LMJelinekMercer'
  lambda?: double
}

export class SettingsSimilarityScripted {
  type: 'scripted'
  script: Script
  weight_script?: Script
}

export class SettingsHighlight {
  /** @server_default 1000000 */
  max_analyzed_offset?: integer
}

export class SettingsAnalyze {
  /** @server_default 10000 */
  max_token_count?: Stringified<integer>
}

export class SettingsSearch {
  idle?: SearchIdle
  slowlog?: SlowlogSettings
}

export class SearchIdle {
  /** @server_default 30s */
  after?: Duration
}

export class SettingsQueryString {
  lenient: Stringified<boolean>
}

export class IndexSettingBlocks {
  read_only?: Stringified<boolean>
  read_only_allow_delete?: Stringified<boolean>
  read?: Stringified<boolean>
  write?: Stringified<boolean>
  metadata?: Stringified<boolean>
}

/**
 * @es_quirk This is a boolean that evolved into an enum. ES also accepts plain booleans for true and false.
 */
export enum IndexCheckOnStartup {
  true,
  false,
  checksum
}

export class IndexVersioning {
  created?: VersionString
  created_string?: string
}

export class IndexSettingsLifecycle {
  /**
   * The name of the policy to use to manage the index. For information about how Elasticsearch applies policy changes, see Policy updates.
   */
  name?: Name
  /**
   * Indicates whether or not the index has been rolled over. Automatically set to true when ILM completes the rollover action.
   * You can explicitly set it to skip rollover.
   * @server_default false
   */
  indexing_complete?: Stringified<boolean>
  /**
   * If specified, this is the timestamp used to calculate the index age for its phase transitions. Use this setting
   * if you create a new index that contains old data and want to use the original creation date to calculate the index
   * age. Specified as a Unix epoch value in milliseconds.
   * @server_default
   */
  origination_date?: long
  /**
   * Set to true to parse the origination date from the index name. This origination date is used to calculate the index age
   * for its phase transitions. The index name must match the pattern ^.*-{date_format}-\\d+, where the date_format is
   * yyyy.MM.dd and the trailing digits are optional. An index that was rolled over would normally match the full format,
   * for example logs-2016.10.31-000002). If the index name doesn’t match the pattern, index creation fails.
   */
  parse_origination_date?: boolean
  step?: IndexSettingsLifecycleStep
  /**
   * The index alias to update when the index rolls over. Specify when using a policy that contains a rollover action.
   * When the index rolls over, the alias is updated to reflect that the index is no longer the write index. For more
   * information about rolling indices, see Rollover.
   * @server_default
   */
  rollover_alias?: string
  /**
   * Preference for the system that manages a data stream backing index (preferring ILM when both ILM and DLM are
   * applicable for an index).
   * @server_default true
   */
  prefer_ilm?: boolean | string
}

export class IndexSettingsLifecycleStep {
  /**
   * Time to wait for the cluster to resolve allocation issues during an ILM shrink action. Must be greater than 1h (1 hour).
   * See Shard allocation for shrink.
   */
  wait_time_threshold?: Duration
}

export class IndexSettingsAnalysis {
  analyzer?: Dictionary<string, Analyzer>
  char_filter?: Dictionary<string, CharFilter>
  filter?: Dictionary<string, TokenFilter>
  normalizer?: Dictionary<string, Normalizer>
  tokenizer?: Dictionary<string, Tokenizer>
}

export class IndexSettingsTimeSeries {
  end_time?: DateTime
  start_time?: DateTime
}

export class Merge {
  scheduler?: MergeScheduler
}

export class MergeScheduler {
  max_thread_count?: Stringified<integer>
  max_merge_count?: Stringified<integer>
}

export class Translog {
  /**
   * How often the translog is fsynced to disk and committed, regardless of write operations.
   * Values less than 100ms are not allowed.
   * @server_default 5s
   */
  sync_interval?: Duration
  /**
   * Whether or not to `fsync` and commit the translog after every index, delete, update, or bulk request.
   * @server_default string
   */
  durability?: TranslogDurability
  /**
   * The translog stores all operations that are not yet safely persisted in Lucene (i.e., are not
   * part of a Lucene commit point). Although these operations are available for reads, they will need
   * to be replayed if the shard was stopped and had to be recovered. This setting controls the
   * maximum total size of these operations, to prevent recoveries from taking too long. Once the
   * maximum size has been reached a flush will happen, generating a new Lucene commit point.
   * @server_default 512mb
   */
  flush_threshold_size?: ByteSize
  retention?: TranslogRetention
}

export enum TranslogDurability {
  /**
   * (default) fsync and commit after every request. In the event of hardware failure, all acknowledged writes
   * will already have been committed to disk.
   *
   * @aliases REQUEST
   */
  request,
  /**
   * fsync and commit in the background every sync_interval. In the event of a failure, all acknowledged writes
   * since the last automatic commit will be discarded.
   *
   * @aliases ASYNC
   */
  async
}

export class TranslogRetention {
  /**
   * This controls the total size of translog files to keep for each shard. Keeping more translog files increases
   * the chance of performing an operation based sync when recovering a replica. If the translog files are not
   * sufficient, replica recovery will fall back to a file based sync. This setting is ignored, and should not be
   * set, if soft deletes are enabled. Soft deletes are enabled by default in indices created in Elasticsearch
   * versions 7.0.0 and later.
   * @server_default 512mb
   */
  size?: ByteSize
  /**
   * This controls the maximum duration for which translog files are kept by each shard. Keeping more
   * translog files increases the chance of performing an operation based sync when recovering replicas. If
   * the translog files are not sufficient, replica recovery will fall back to a file based sync. This setting
   * is ignored, and should not be set, if soft deletes are enabled. Soft deletes are enabled by default in
   * indices created in Elasticsearch versions 7.0.0 and later.
   * @server_default 12h
   */
  age?: Duration
}

export class Queries {
  cache?: CacheQueries
}

export class CacheQueries {
  enabled: boolean
}

/**
 * Mapping Limit Settings
 * @doc_id mapping-settings-limit
 */
export class MappingLimitSettings {
  coerce?: boolean
  total_fields?: MappingLimitSettingsTotalFields
  depth?: MappingLimitSettingsDepth
  nested_fields?: MappingLimitSettingsNestedFields
  nested_objects?: MappingLimitSettingsNestedObjects
  field_name_length?: MappingLimitSettingsFieldNameLength
  dimension_fields?: MappingLimitSettingsDimensionFields
  source?: MappingLimitSettingsSourceFields
  ignore_malformed?: boolean | string
}

export class MappingLimitSettingsTotalFields {
  /**
   * The maximum number of fields in an index. Field and object mappings, as well as field aliases count towards this limit.
   * The limit is in place to prevent mappings and searches from becoming too large. Higher values can lead to performance
   * degradations and memory issues, especially in clusters with a high load or few resources.
   * @server_default 1000
   */
  limit?: long | string
  /**
   * This setting determines what happens when a dynamically mapped field would exceed the total fields limit. When set
   * to false (the default), the index request of the document that tries to add a dynamic field to the mapping will fail
   * with the message Limit of total fields [X] has been exceeded. When set to true, the index request will not fail.
   * Instead, fields that would exceed the limit are not added to the mapping, similar to dynamic: false.
   * The fields that were not added to the mapping will be added to the _ignored field.
   * @server_default false
   */
  ignore_dynamic_beyond_limit?: boolean | string
}

export class MappingLimitSettingsDepth {
  /**
   * The maximum depth for a field, which is measured as the number of inner objects. For instance, if all fields are defined
   * at the root object level, then the depth is 1. If there is one object mapping, then the depth is 2, etc.
   * @server_default 20
   */
  limit?: long
}

export class MappingLimitSettingsNestedFields {
  /**
   * The maximum number of distinct nested mappings in an index. The nested type should only be used in special cases, when
   * arrays of objects need to be queried independently of each other. To safeguard against poorly designed mappings, this
   * setting limits the number of unique nested types per index.
   * @server_default 50
   */
  limit?: long
}

export class MappingLimitSettingsNestedObjects {
  /**
   * The maximum number of nested JSON objects that a single document can contain across all nested types. This limit helps
   * to prevent out of memory errors when a document contains too many nested objects.
   * @server_default 10000
   */
  limit?: long
}

export class MappingLimitSettingsFieldNameLength {
  /**
   * Setting for the maximum length of a field name. This setting isn’t really something that addresses mappings explosion but
   * might still be useful if you want to limit the field length. It usually shouldn’t be necessary to set this setting. The
   * default is okay unless a user starts to add a huge number of fields with really long names. Default is `Long.MAX_VALUE` (no limit).
   */
  limit?: long
}

export class MappingLimitSettingsDimensionFields {
  /**
   * [preview] This functionality is in technical preview and may be changed or removed in a future release.
   * Elastic will work to fix any issues, but features in technical preview are not subject to the support SLA of official GA features.
   */
  limit?: long
}

export class MappingLimitSettingsSourceFields {
  mode: SourceMode
}

export enum SourceMode {
  disabled,
  stored,
  synthetic
}

export class SlowlogSettings {
  level?: string
  source?: integer
  reformat?: boolean
  threshold?: SlowlogTresholds
}

export class SlowlogTresholds {
  query?: SlowlogTresholdLevels
  fetch?: SlowlogTresholdLevels
}

export class SlowlogTresholdLevels {
  warn?: Duration
  info?: Duration
  debug?: Duration
  trace?: Duration
}

export class Storage {
  type: StorageType
  /**
   * You can restrict the use of the mmapfs and the related hybridfs store type via the setting node.store.allow_mmap.
   * This is a boolean setting indicating whether or not memory-mapping is allowed. The default is to allow it. This
   * setting is useful, for example, if you are in an environment where you can not control the ability to create a lot
   * of memory maps so you need disable the ability to use memory-mapping.
   */
  allow_mmap?: boolean
  /** How often store statistics are refreshed */
  stats_refresh_interval?: Duration
}

/**
 * @non_exhaustive
 */
export enum StorageType {
  /**
   * Default file system implementation. This will pick the best implementation depending on the operating environment, which
   * is currently hybridfs on all supported systems but is subject to change.
   */
  fs,
  /**
   * The NIO FS type stores the shard index on the file system (maps to Lucene NIOFSDirectory) using NIO. It allows multiple
   * threads to read from the same file concurrently. It is not recommended on Windows because of a bug in the SUN Java
   * implementation and disables some optimizations for heap memory usage.
   */
  niofs,
  /**
   * The MMap FS type stores the shard index on the file system (maps to Lucene MMapDirectory) by mapping a file into
   * memory (mmap). Memory mapping uses up a portion of the virtual memory address space in your process equal to the size
   * of the file being mapped. Before using this class, be sure you have allowed plenty of virtual address space.
   */
  mmapfs,
  /**
   * The hybridfs type is a hybrid of niofs and mmapfs, which chooses the best file system type for each type of file
   * based on the read access pattern. Currently only the Lucene term dictionary, norms and doc values files are memory
   * mapped. All other files are opened using Lucene NIOFSDirectory. Similarly to mmapfs be sure you have allowed
   * plenty of virtual address space.
   */
  hybridfs
}

export class IndexingPressure {
  memory: IndexingPressureMemory
}

export class IndexingPressureMemory {
  /**
   * Number of outstanding bytes that may be consumed by indexing requests. When this limit is reached or exceeded,
   * the node will reject new coordinating and primary operations. When replica operations consume 1.5x this limit,
   * the node will reject new replica operations. Defaults to 10% of the heap.
   */
  limit?: integer
}

export class IndexingSlowlogSettings {
  level?: string
  source?: integer
  reformat?: boolean
  threshold?: IndexingSlowlogTresholds
}

export class IndexingSlowlogTresholds {
  /**
   * The indexing slow log, similar in functionality to the search slow log. The log file name ends with `_index_indexing_slowlog.json`.
   * Log and the thresholds are configured in the same way as the search slowlog.
   * @doc_id index-modules-slowlog-slowlog
   */
  index?: SlowlogTresholdLevels
}
