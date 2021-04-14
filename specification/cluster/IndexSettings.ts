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

import { integer, PipelineName } from "../__common/common";
import { Time } from "../__common/common_options/time_unit/Time";

/**
 * @doc_url https://www.elastic.co/guide/en/elasticsearch/reference/7.8/index-modules.html#index-modules-settings
 */
export class IndexSettings {
  /**
   * @aliases index.number_of_shards
   */
  number_of_shards?: integer; // default 1
  /**
   * @aliases index.number_of_replicas
   */
  number_of_replicas?: integer; // default 0
  /**
   * @aliases index.number_of_routing_shards
   */
  number_of_routing_shards?: integer;
  /**
   * @aliases index.check_on_startup
   */
  check_on_startup?: IndexCheckOnStartup; // default false
  /**
   * @aliases index.codec
   */
  codec?: string; // default LZ4
  /**
   * @aliases index.routing_partition_size
   */
  routing_partition_size?: integer; // default 1
  /**
   * @aliases index.soft_deletes.retention_lease.period
   */
  "soft_deletes.retention_lease.period"?: Time; // default 12h
  /**
   * @aliases index.load_fixed_bitset_filters_eagerly
   */
  load_fixed_bitset_filters_eagerly?: boolean; // default true
  /**
   * @aliases index.hidden
   */
  hidden?: boolean; // default false
  /**
   * @aliases index.auto_expand_replicas
   */
  auto_expand_replicas?: string; // default false
  /**
   * @aliases index.search.idle.after
   */
  "search.idle.after"?: Time; // default 30s
  /**
   * @aliases index.refresh_interval
   */
  refresh_interval?: Time; // default 1s
  /**
   * @aliases index.max_result_window
   */
  max_result_window?: integer; // default 10000
  /**
   * @aliases index.max_inner_result_window
   */
  max_inner_result_window?: integer; // default 100
  /**
   * @aliases index.max_rescore_window
   */
  max_rescore_window?: integer; // default 10000
  /**
   * @aliases index.max_docvalue_fields_search
   */
  max_docvalue_fields_search?: integer; // default 100
  /**
   * @aliases index.max_script_fields
   */
  max_script_fields?: integer; // default 32
  /**
   * @aliases index.max_ngram_diff
   */
  max_ngram_diff?: integer; // default 1
  /**
   * @aliases index.max_shingle_diff
   */
  max_shingle_diff?: integer; // default 3
  /**
   * @aliases index.bocks
   */
  blocks?: IndexSettingBlocks;
  /**
   * @aliases index.max_refresh_listeners
   */
  max_refresh_listeners?: integer;
  /**
   * @aliases index.analyze.max_token_count
   */
  "analyze.max_token_count"?: integer; // default 10000
  /**
   * @aliases index.highlight.max_analyzed_offset
   */
  "highlight.max_analyzed_offset"?: integer; // default 1000000
  /**
   * @aliases index.max_terms_count
   */
  max_terms_count?: integer; // default 65536
  /**
   * @aliases index.max_regex_length
   */
  max_regex_length?: integer; // default 1000
  /**
   * @aliases index.routing
   */
  routing?: IndexSettingRouting;
  /**
   * @aliases index.gc_deletes
   */
  gc_deletes?: Time; // default 60s
  /**
   * @aliases index.default_pipeline
   */
  default_pipeline?: PipelineName; // default _none
  /**
   * @aliases index.final_pipeline
   */
  final_pipeline?: PipelineName; // default _none
}

export class IndexSettingBlocks {
  read_only?: boolean;
  read_only_allow_delete?: boolean;
  read?: boolean;
  write?: boolean;
  metadata?: boolean;
}

export enum IndexCheckOnStartup {
  false = 0,
  checksum = 1,
  true = 2,
}

export class IndexSettingRouting {
  "allocation.enable"?: IndexSettingRoutingAllocation; // default: all
  "rebalance.enable"?: IndexSettingRoutingRebalance; // default: all
}

export enum IndexSettingRoutingAllocation {
  all = 0,
  primaries = 1,
  new_primaries = 2,
  none = 3,
}

export enum IndexSettingRoutingRebalance {
  all = 0,
  primaries = 1,
  replicas = 2,
  none = 3,
}
