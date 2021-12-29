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
import { Name, PipelineName, Uuid, VersionString } from '@_types/common'
import { integer } from '@_types/Numeric'
import { DateString, Time } from '@_types/Time'
import { Tokenizer } from '@_types/analysis/tokenizers'
import { IndexSegmentSort } from './IndexSegmentSort'

export class SoftDeletes {
  enabled: boolean
  'retention_lease.period'?: Time
}

/**
 * @doc_url https://www.elastic.co/guide/en/elasticsearch/reference/7.8/index-modules.html#index-modules-settings
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
   * @aliases index.soft_deletes.enabled
   */
  'soft_deletes.enabled'?: boolean
  /**
   * @aliases index.soft_deletes.retention_lease.period
   * @server_default 12h
   */
  'soft_deletes.retention_lease.period'?: Time
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
   * @aliases index.merge.scheduler.max_merge_count
   */
  'merge.scheduler.max_merge_count'?: integer
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
   * @aliases index.creation_date_string
   */
  creation_date_string?: DateString
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
  verified_before_close?: boolean | string // TODO should be bool only
  /**
   * @aliases index.format
   */
  format?: string | integer
  /**
   * @aliases index.max_slices_per_scroll
   */
  max_slices_per_scroll?: integer
  /**
   * @aliases index.translog.durability
   */
  'translog.durability'?: string
  /**
   * @aliases index.translog.flush_threshold_size
   */
  'translog.flush_threshold_size'?: string
  /**
   * @aliases index.query_string.lenient
   */
  'query_string.lenient'?: boolean | string // TODO: should be bool only
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
   * @stability experimental
   */
  time_series?: IndexSettingsTimeSeries
}

export class IndexSettingBlocks {
  read_only?: boolean
  read_only_allow_delete?: boolean
  read?: boolean
  write?: boolean | string // TODO: should be bool only
  metadata?: boolean
}

export enum IndexCheckOnStartup {
  false = 0,
  checksum = 1,
  true = 2
}

export class IndexVersioning {
  created: VersionString
  created_string?: VersionString
}

export class IndexSettingsLifecycle {
  name: Name
}

export class IndexSettingsAnalysis {
  analyzer?: Dictionary<string, Analyzer>
  char_filter?: Dictionary<string, CharFilter>
  filter?: Dictionary<string, TokenFilter>
  normalizer?: Dictionary<string, Normalizer>
  tokenizer?: Dictionary<string, Tokenizer>
}

export class IndexSettingsTimeSeries {
  end_time: DateString
  start_time: DateString
}
