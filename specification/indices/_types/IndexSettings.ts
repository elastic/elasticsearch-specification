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
import { double, integer } from '@_types/Numeric'
import { DateOrEpochMillis, DateString, Time } from '@_types/Time'
import { Tokenizer } from '@_types/analysis/tokenizers'
import { IndexSegmentSort } from './IndexSegmentSort'
import {
  DFIIndependenceMeasure,
  DFRAfterEffect,
  DFRBasicModel,
  IBDistribution,
  IBLambda,
  Normalization
} from '@_types/Similarity'
import { Script } from '@_types/Scripting'

export class SoftDeletes {
  enabled: boolean
  retention_lease?: RetentionLease
}

export class RetentionLease {
  period: Time
}

/**
 * @doc_id index-modules-settings
 */
export class IndexSettings {
  index?: IndexSettings
  mode?: string
  routing_path?: string | string[]
  soft_deletes?: SoftDeletes
  sort?: IndexSegmentSort
  /** @server_default 1 */
  number_of_shards?: integer | string // TODO: should be only int
  /** @server_default 0 */
  number_of_replicas?: integer | string // TODO: should be only int
  number_of_routing_shards?: integer
  /** @server_default false */
  check_on_startup?: IndexCheckOnStartup
  /** @server_default LZ4 */
  codec?: string
  /** @server_default 1 */
  routing_partition_size?: integer
  /** @server_default true */
  load_fixed_bitset_filters_eagerly?: boolean
  /** @server_default false */
  hidden?: boolean | string // TODO should be bool only
  /** @server_default false */
  auto_expand_replicas?: string
  merge?: Merge
  search?: SettingsSearch
  /** @server_default 1s */
  refresh_interval?: Time
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
  analyze?: SettingsAnalyze
  highlight?: SettingsHighlight
  /** @server_default 65536 */
  max_terms_count?: integer
  /** @server_default 1000 */
  max_regex_length?: integer
  routing?: IndexRouting
  /** @server_default 60s */
  gc_deletes?: Time
  /** @server_default _none */
  default_pipeline?: PipelineName
  /** @server_default _none */
  final_pipeline?: PipelineName
  lifecycle?: IndexSettingsLifecycle
  provided_name?: Name
  creation_date?: DateString
  creation_date_string?: DateString
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
  shards?: integer
  queries?: Queries
  similarity?: SettingsSimilarity
}

export class SettingsSimilarity {
  bm25?: SettingsSimilarityBm25
  dfi?: SettingsSimilarityDfi
  dfr?: SettingsSimilarityDfr
  ib?: SettingsSimilarityIb
  lmd?: SettingsSimilarityLmd
  lmj?: SettingsSimilarityLmj
  scripted_tfidf?: SettingsSimilarityScriptedTfidf
}

export class SettingsSimilarityBm25 {
  b: integer
  discount_overlaps: boolean
  k1: double
  type: 'BM25'
}

export class SettingsSimilarityDfi {
  independence_measure: DFIIndependenceMeasure
  type: 'DFI'
}

export class SettingsSimilarityDfr {
  after_effect: DFRAfterEffect
  basic_model: DFRBasicModel
  normalization: Normalization
  type: 'DFR'
}

export class SettingsSimilarityIb {
  distribution: IBDistribution
  lambda: IBLambda
  normalization: Normalization
  type: 'IB'
}

export class SettingsSimilarityLmd {
  mu: integer
  type: 'LMDirichlet'
}

export class SettingsSimilarityLmj {
  lambda: double
  type: 'LMJelinekMercer'
}

export class SettingsSimilarityScriptedTfidf {
  script: Script
  type: 'scripted'
}

export class SettingsHighlight {
  /** @server_default 1000000 */
  max_analyzed_offset?: integer
}

export class SettingsAnalyze {
  /** @server_default 10000 */
  max_token_count?: integer
}

export class SettingsSearch {
  idle: SearchIdle
}

export class SearchIdle {
  /** @server_default 30s */
  after?: Time
}

export class SettingsQueryString {
  lenient: boolean
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
  end_time?: DateOrEpochMillis
  start_time?: DateOrEpochMillis
}

export class Merge {
  scheduler?: MergeScheduler
}

export class MergeScheduler {
  max_thread_count?: integer
  max_merge_count?: integer
}

export class Translog {
  durability?: string
  flush_threshold_size?: string
  retention?: TranslogRetention
}

export class TranslogRetention {
  size: ByteSize
}

export class Queries {
  cache?: CacheQueries
}

export class CacheQueries {
  enabled: boolean
}
