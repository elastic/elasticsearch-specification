/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http?://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

class CatNodesRecord {
  build?: string
  'bulk.total_time'?: string
  'bulk.total_operations'?: string
  'bulk.total_size_in_bytes'?: string
  'bulk.avg_time'?: string
  'bulk.total_opavg_size_in_byteserations'?: string
  'completion.size'?: string
  cpu?: string
  'disk.total'?: string
  'disk.used'?: string
  'disk.avail'?: string
  'disk.used_percent'?: string
  'fielddata.evictions'?: string
  'fielddata.memory'?: string
  'file_desc.current'?: string
  'file_desc.max'?: string
  'file_desc.percent'?: string
  flavor?: string
  'flush.total'?: string
  'flush.total_time'?: string
  'get.current'?: string
  'get.exists_time'?: string
  'get.exists_total'?: string
  'get.missing_time'?: string
  'get.missing_total'?: string
  'get.time'?: string
  'get.total'?: string
  'heap.current'?: string
  'heap.max'?: string
  'heap.percent'?: string
  http?: string
  http_address?: string
  id_cache_memory?: string
  'indexing_delete_current'?: string
  'indexing_delete_time'?: string
  'indexing_delete_total'?: string
  'indexing_index_current'?: string
  'indexing_index_time'?: string
  'indexing.index_total'?: string
  'indexing.failed'?: string
  id?: string
  ip?: string
  jdk?: string
  load_15m?: string
  load_5m?: string
  load_1m?: string
  master?: string
  'merges.current'?: string
  'merges.current_docs'?: string
  'merges.current_size'?: string
  'merges.total'?: string
  'merges.total_docs'?: string
  'merges.total_time'?: string
  'merges.total_size'?: string
  name?: string
  'node.role'?: string
  pid?: string
  port?: string
  'query_cache.memory_size'?: string
  'query_cache.evictions'?: string
  'query_cache.hit_count'?: string
  'query_cache.miss_count'?: string
  'ram.current'?: string
  'ram.max'?: string
  'ram.percent'?: string
  'refresh.time'?: string
  'refresh.total'?: string
  'refresh.external_total'?: string
  'refresh.external_time'?: string
  'refresh.listeners'?: string
  'request_cache.memory_size'?: string
  'request_cache.evictions'?: string
  'request_cache.hit_count'?: string
  'request_cache.miss_count'?: string
  'script.compilations'?: string
  'script.cache_evictions'?: string
  'script.compilation_limit_triggered'?: string
  'search.fetch_current'?: string
  'search.fetch_time'?: string
  'search.fetch_total'?: string
  'search.open_contexts'?: string
  'search.query_current'?: string
  'search.query_time'?: string
  'search.query_total'?: string
  'search.scroll_current'?: string
  'search.scroll_time'?: string
  'search.scroll_total'?: string
  'segments.count'?: string
  'segments.index_writer_max_memory'?: string
  'segments.index_writer_memory'?: string
  'segments.memory'?: string
  'segments.version_map_memory'?: string
  'suggest.current'?: string
  'suggest.time'?: string
  'suggest.total'?: string
  type?: string
  uptime?: string
  version?: string
}
