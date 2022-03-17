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

import { IndexRouting } from '@indices/_types/IndexRouting'
import { Dictionary } from '@spec_utils/Dictionary'
import { Analyzer } from '@_types/analysis/analyzers'
import { TokenFilter } from '@_types/analysis/token_filters'
import { CharFilter } from '@_types/analysis/char_filters'
import { Normalizer } from '@_types/analysis/normalizers'
import {
  ByteSize,
  Name,
  PipelineName,
  Uuid,
  VersionString
} from '@_types/common'
import { integer, long } from '@_types/Numeric'
import { DateString, Time } from '@_types/Time'
import { Tokenizer } from '@_types/analysis/tokenizers'
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
  period: Time
}

/**
 * @doc_url https://www.elastic.co/guide/en/elasticsearch/reference/7.17/index-modules.html#index-modules-settings
 */
export class IndexSettings {
  index?: IndexSettings
  /**
   * @aliases index.mode
   */
  mode?: string
  /**
   * @aliases index.routing_path
   */
  routing_path?: string[]
  /**
   * @aliases index.soft_deletes
   */
  soft_deletes?: SoftDeletes
  /**
   * @aliases index.sort
   */
  sort?: IndexSegmentSort
  /**
   * @server_default 1
   * @aliases index.number_of_shards
   */
  number_of_shards?: integer | string // TODO: should be only int
  /**
   * @server_default 0
   * @aliases index.number_of_replicas
   */
  number_of_replicas?: integer | string // TODO: should be only int
  /**
   * @aliases index.number_of_routing_shards
   */
  number_of_routing_shards?: integer
  /**
   * @aliases index.check_on_startup
   * @server_default false
   */
  check_on_startup?: IndexCheckOnStartup
  /**
   * @aliases index.codec
   * @server_default LZ4
   */
  codec?: string
  /**
   * @server_default 1
   * @aliases index.routing_partition_size
   */
  routing_partition_size?: integer

  /**
   * @aliases index.soft_deletes.retention_lease.period
   * @server_default 12h
   */
  'soft_deletes.retention_lease.period'?: Time
  /**
   * @aliases index.load_fixed_bitset_filters_eagerly
   * @server_default true
   */
  load_fixed_bitset_filters_eagerly?: boolean
  /**
   * @server_default false
   * @aliases index.hidden
   */
  hidden?: boolean | string // TODO should be bool only
  /**
   * @aliases index.auto_expand_replicas
   * @server_default false
   */
  auto_expand_replicas?: string
  /**
   * @aliases index.merge.scheduler.max_thread_count
   */
  'merge.scheduler.max_thread_count'?: integer
  /**
   * @aliases index.search.idle.after
   * @server_default 30s
   */
  'search.idle.after'?: Time
  /**
   * @aliases index.refresh_interval
   * @server_default 1s
   */
  refresh_interval?: Time
  /**
   * @aliases index.max_result_window
   * @server_default 10000
   */
  max_result_window?: integer
  /**
   * @aliases index.max_inner_result_window
   * @server_default 100
   */
  max_inner_result_window?: integer
  /**
   * @aliases index.max_rescore_window
   * @server_default 10000
   */
  max_rescore_window?: integer
  /**
   * @aliases index.max_docvalue_fields_search
   * @server_default 100
   */
  max_docvalue_fields_search?: integer
  /**
   * @aliases index.max_script_fields
   * @server_default 32
   */
  max_script_fields?: integer
  /**
   * @aliases index.max_ngram_diff
   * @server_default 1
   */
  max_ngram_diff?: integer
  /**
   * @aliases index.max_shingle_diff
   * @server_default 3
   */
  max_shingle_diff?: integer
  /**
   * @aliases index.blocks
   */
  blocks?: IndexSettingBlocks
  /** @aliases index.blocks.read_only */
  'blocks.read_only'?: boolean
  /** @aliases index.blocks.read_only_allow_delete */
  'blocks.read_only_allow_delete'?: boolean
  /** @aliases index.blocks.read */
  'blocks.read'?: boolean
  /** @aliases index.blocks.write */
  'blocks.write'?: boolean | string // TODO: should be bool only
  /** @aliases index.blocks.metadata */
  'blocks.metadata'?: boolean
  /**
   * @aliases index.max_refresh_listeners
   */
  max_refresh_listeners?: integer
  /**
   * @aliases index.analyze.max_token_count
   * @server_default 10000
   */
  'analyze.max_token_count'?: integer
  /**
   * @aliases index.highlight.max_analyzed_offset
   * @server_default 1000000
   */
  'highlight.max_analyzed_offset'?: integer
  /**
   * @aliases index.max_terms_count
   * @server_default 65536
   */
  max_terms_count?: integer
  /**
   * @aliases index.max_regex_length
   * @server_default 1000
   */
  max_regex_length?: integer
  /**
   * @aliases index.routing
   */
  routing?: IndexRouting
  /**
   * @aliases index.gc_deletes
   * @server_default 60s
   */
  gc_deletes?: Time
  /**
   * @aliases index.default_pipeline
   * @server_default _none
   */
  default_pipeline?: PipelineName
  /**
   * @aliases index.final_pipeline
   * @server_default _none
   */
  final_pipeline?: PipelineName
  /**
   * @aliases index.lifecycle
   */
  lifecycle?: IndexSettingsLifecycle
  /**
   * @aliases index.lifecycle.name
   */
  'lifecycle.name'?: string
  /**
   * @aliases index.provided_name
   */
  provided_name?: Name
  /**
   * @aliases index.creation_date
   */
  creation_date?: DateString
  /**
   * @aliases index.uuid
   */
  uuid?: Uuid
  /**
   * @aliases index.version
   */
  version?: IndexVersioning
  /**
   * @aliases index.verified_before_close
   */
  verified_before_close?: boolean
  /**
   * @aliases index.format
   */
  format?: string | integer
  /**
   * @aliases index.max_slices_per_scroll
   */
  max_slices_per_scroll?: integer
  translog?: Translog
  /**
   * @aliases index.query_string.lenient
   */
  'query_string.lenient'?: boolean
  /**
   * @aliases index.priority
   */
  priority?: integer | string

  top_metrics_max_size?: integer

  /**
   * @aliases index.analysis
   */
  analysis?: IndexSettingsAnalysis
  settings?: IndexSettings
  /**
   * Enable or disable dynamic mapping for an index.
   */
  mappings?: MappingLimitSettings
  'indexing.slowlog'?: SlowlogSettings
  /**
   * Configure indexing back pressure limits.
   */
  indexing_pressure?: IndexingPressure
  /**
   * The store module allows you to control how index data is stored and accessed on disk.
   */
  store?: Storage
}

export class IndexSettingBlocks {
  read_only?: boolean
  read_only_allow_delete?: boolean
  read?: boolean
  write?: boolean | string // TODO: should be bool only
  metadata?: boolean
}

export enum IndexCheckOnStartup {
  false,
  checksum,
  true
}

export class IndexVersioning {
  created: VersionString
}

export class IndexSettingsLifecycle {
  /**
   * The name of the policy to use to manage the index. For information about how Elasticsearch applies policy changes, see Policy updates.
   */
  name: Name
  /**
   * Indicates whether or not the index has been rolled over. Automatically set to true when ILM completes the rollover action.
   * You can explicitly set it to skip rollover.
   * @server_default false
   */
  indexing_complete?: boolean
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
}

export class IndexSettingsLifecycleStep {
  /**
   * Time to wait for the cluster to resolve allocation issues during an ILM shrink action. Must be greater than 1h (1 hour).
   * See Shard allocation for shrink.
   */
  wait_time_threshold?: Time
}

export class IndexSettingsAnalysis {
  analyzer?: Dictionary<string, Analyzer>
  char_filter?: Dictionary<string, CharFilter>
  filter?: Dictionary<string, TokenFilter>
  normalizer?: Dictionary<string, Normalizer>
  tokenizer?: Dictionary<string, Tokenizer>
}

export class Translog {
  /**
   * How often the translog is fsynced to disk and committed, regardless of write operations.
   * Values less than 100ms are not allowed.
   * @server_default 5s
   */
  sync_interval?: Time
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
   */
  request,
  /**
   * fsync and commit in the background every sync_interval. In the event of a failure, all acknowledged writes
   * since the last automatic commit will be discarded.
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
  age?: Time
}

/**
 * Mapping Limit Settings
 * @doc_id mapping-settings-limit
 */
export class MappingLimitSettings {
  total_fields?: MappingLimitSettingsTotalFields
  depth?: MappingLimitSettingsDepth
  nested_fields?: MappingLimitSettingsNestedFields
  nested_objects?: MappingLimitSettingsNestedObjects
  field_name_length?: MappingLimitSettingsFieldNameLength
  dimension_fields?: MappingLimitSettingsDimensionFields
}

export class MappingLimitSettingsTotalFields {
  /**
   * The maximum number of fields in an index. Field and object mappings, as well as field aliases count towards this limit.
   * The limit is in place to prevent mappings and searches from becoming too large. Higher values can lead to performance
   * degradations and memory issues, especially in clusters with a high load or few resources.
   * @server_default 1000
   */
  limit?: integer
}

export class MappingLimitSettingsDepth {
  /**
   * The maximum depth for a field, which is measured as the number of inner objects. For instance, if all fields are defined
   * at the root object level, then the depth is 1. If there is one object mapping, then the depth is 2, etc.
   * @server_default 20
   */
  limit?: integer
}

export class MappingLimitSettingsNestedFields {
  /**
   * The maximum number of distinct nested mappings in an index. The nested type should only be used in special cases, when
   * arrays of objects need to be queried independently of each other. To safeguard against poorly designed mappings, this
   * setting limits the number of unique nested types per index.
   * @server_default 50
   */
  limit?: integer
}

export class MappingLimitSettingsNestedObjects {
  /**
   * The maximum number of nested JSON objects that a single document can contain across all nested types. This limit helps
   * to prevent out of memory errors when a document contains too many nested objects.
   * @server_default 10000
   */
  limit?: integer
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
   * [preview] This functionality is in technical preview and may be changed or removed in a future release. Elastic will
   * apply best effort to fix any issues, but features in technical preview are not subject to the support SLA of official GA features.
   */
  limit?: integer
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
  /**
   * The indexing slow log, similar in functionality to the search slow log. The log file name ends with `_index_indexing_slowlog.json`.
   * Log and the thresholds are configured in the same way as the search slowlog.
   * @doc_id index-modules-slowlog-slowlog
   */
  index?: SlowlogTresholdLevels
}

export class SlowlogTresholdLevels {
  warn?: Time
  info?: Time
  debug?: Time
  trace?: Time
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
}

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
