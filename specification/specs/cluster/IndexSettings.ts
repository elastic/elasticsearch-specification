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

/**
 * @doc_url https://www.elastic.co/guide/en/elasticsearch/reference/7.8/index-modules.html#index-modules-settings
 */
class IndexSettings {
  /**
   * @aliases index.number_of_shards
   * @server_default 1
   */
  number_of_shards?: integer
  /**
   * @aliases index.number_of_replicas
   * @server_default 0
   */
  number_of_replicas?: integer
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
   * @aliases index.routing_partition_size
   * @server_default 1
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
   * @aliases index.hidden
   * @server_default false
   */
  hidden?: boolean
  /**
   * @aliases index.auto_expand_replicas
   * @server_default false
   */
  auto_expand_replicas?: string
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
   * @aliases index.bocks
   */
  blocks?: IndexSettingBlocks
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
}

class IndexSettingBlocks {
  read_only?: boolean
  read_only_allow_delete?: boolean
  read?: boolean
  write?: boolean
  metadata?: boolean
}

enum IndexCheckOnStartup {
  false = 0,
  checksum = 1,
  true = 2
}
