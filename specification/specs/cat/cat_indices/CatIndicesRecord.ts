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

class CatIndicesRecord {
  /**
   * current health status
   * @aliases h
   */
  'health'?:string
  /**
   * open/close status
   * @aliases s
   */
  'status'?:string
  /**
   * index name
   * @aliases i,idx
   */
  'index'?:string
  /**
   * index uuid
   * @aliases id
   */
  'uuid'?:string
  /**
   * number of primary shards
   * @aliases p,shards.primary,shardsPrimary
   */
  'pri'?:string
  /**
   * number of replica shards
   * @aliases r,shards.replica,shardsReplica
   */
  'rep'?:string
  /**
   * available docs
   * @aliases dc,docsCount
   */
  'docs.count'?:string
  /**
   * deleted docs
   * @aliases dd,docsDeleted
   */
  'docs.deleted'?:string
  /**
   * index creation date (millisecond value)
   * @aliases cd
   */
  'creation.date'?:string
  /**
   * index creation date (as string)
   * @aliases cds
   */
  'creation.date.string'?:string
  /**
   * store size of primaries & replicas
   */
  'store.size'?:string
  /**
   * store size of primaries
   */
  'pri.store.size'?:string
  /**
   * size of completion
   */
  'completion.size'?:string
  /**
   * size of completion
   */
  'pri.completion.size'?:string
  /**
   * used fielddata cache
   */
  'fielddata.memory_size'?:string
  /**
   * used fielddata cache
   */
  'pri.fielddata.memory_size'?:string
  /**
   * fielddata evictions
   */
  'fielddata.evictions'?:string
  /**
   * fielddata evictions
   */
  'pri.fielddata.evictions'?:string
  /**
   * used query cache
   */
  'query_cache.memory_size'?:string
  /**
   * used query cache
   */
  'pri.query_cache.memory_size'?:string
  /**
   * query cache evictions
   */
  'query_cache.evictions'?:string
  /**
   * query cache evictions
   */
  'pri.query_cache.evictions'?:string
  /**
   * used request cache
   */
  'request_cache.memory_size'?:string
  /**
   * used request cache
   */
  'pri.request_cache.memory_size'?:string
  /**
   * request cache evictions
   */
  'request_cache.evictions'?:string
  /**
   * request cache evictions
   */
  'pri.request_cache.evictions'?:string
  /**
   * request cache hit count
   */
  'request_cache.hit_count'?:string
  /**
   * request cache hit count
   */
  'pri.request_cache.hit_count'?:string
  /**
   * request cache miss count
   */
  'request_cache.miss_count'?:string
  /**
   * request cache miss count
   */
  'pri.request_cache.miss_count'?:string
  /**
   * number of flushes
   */
  'flush.total'?:string
  /**
   * number of flushes
   */
  'pri.flush.total'?:string
  /**
   * time spent in flush
   */
  'flush.total_time'?:string
  /**
   * time spent in flush
   */
  'pri.flush.total_time'?:string
  /**
   * number of current get ops
   */
  'get.current'?:string
  /**
   * number of current get ops
   */
  'pri.get.current'?:string
  /**
   * time spent in get
   */
  'get.time'?:string
  /**
   * time spent in get
   */
  'pri.get.time'?:string
  /**
   * number of get ops
   */
  'get.total'?:string
  /**
   * number of get ops
   */
  'pri.get.total'?:string
  /**
   * time spent in successful gets
   */
  'get.exists_time'?:string
  /**
   * time spent in successful gets
   */
  'pri.get.exists_time'?:string
  /**
   * number of successful gets
   */
  'get.exists_total'?:string
  /**
   * number of successful gets
   */
  'pri.get.exists_total'?:string
  /**
   * time spent in failed gets
   */
  'get.missing_time'?:string
  /**
   * time spent in failed gets
   */
  'pri.get.missing_time'?:string
  /**
   * number of failed gets
   */
  'get.missing_total'?:string
  /**
   * number of failed gets
   */
  'pri.get.missing_total'?:string
  /**
   * number of current deletions
   */
  'indexing.delete_current'?:string
  /**
   * number of current deletions
   */
  'pri.indexing.delete_current'?:string
  /**
   * time spent in deletions
   */
  'indexing.delete_time'?:string
  /**
   * time spent in deletions
   */
  'pri.indexing.delete_time'?:string
  /**
   * number of delete ops
   */
  'indexing.delete_total'?:string
  /**
   * number of delete ops
   */
  'pri.indexing.delete_total'?:string
  /**
   * number of current indexing ops
   */
  'indexing.index_current'?:string
  /**
   * number of current indexing ops
   */
  'pri.indexing.index_current'?:string
  /**
   * time spent in indexing
   */
  'indexing.index_time'?:string
  /**
   * time spent in indexing
   */
  'pri.indexing.index_time'?:string
  /**
   * number of indexing ops
   */
  'indexing.index_total'?:string
  /**
   * number of indexing ops
   */
  'pri.indexing.index_total'?:string
  /**
   * number of failed indexing ops
   */
  'indexing.index_failed'?:string
  /**
   * number of failed indexing ops
   */
  'pri.indexing.index_failed'?:string
  /**
   * number of current merges
   */
  'merges.current'?:string
  /**
   * number of current merges
   */
  'pri.merges.current'?:string
  /**
   * number of current merging docs
   */
  'merges.current_docs'?:string
  /**
   * number of current merging docs
   */
  'pri.merges.current_docs'?:string
  /**
   * size of current merges
   */
  'merges.current_size'?:string
  /**
   * size of current merges
   */
  'pri.merges.current_size'?:string
  /**
   * number of completed merge ops
   */
  'merges.total'?:string
  /**
   * number of completed merge ops
   */
  'pri.merges.total'?:string
  /**
   * docs merged
   */
  'merges.total_docs'?:string
  /**
   * docs merged
   */
  'pri.merges.total_docs'?:string
  /**
   * size merged
   */
  'merges.total_size'?:string
  /**
   * size merged
   */
  'pri.merges.total_size'?:string
  /**
   * time spent in merges
   */
  'merges.total_time'?:string
  /**
   * time spent in merges
   */
  'pri.merges.total_time'?:string
  /**
   * total refreshes
   */
  'refresh.total'?:string
  /**
   * total refreshes
   */
  'pri.refresh.total'?:string
  /**
   * time spent in refreshes
   */
  'refresh.time'?:string
  /**
   * time spent in refreshes
   */
  'pri.refresh.time'?:string
  /**
   * total external refreshes
   */
  'refresh.external_total'?:string
  /**
   * total external refreshes
   */
  'pri.refresh.external_total'?:string
  /**
   * time spent in external refreshes
   */
  'refresh.external_time'?:string
  /**
   * time spent in external refreshes
   */
  'pri.refresh.external_time'?:string
  /**
   * number of pending refresh listeners
   */
  'refresh.listeners'?:string
  /**
   * number of pending refresh listeners
   */
  'pri.refresh.listeners'?:string
  /**
   * current fetch phase ops
   */
  'search.fetch_current'?:string
  /**
   * current fetch phase ops
   */
  'pri.search.fetch_current'?:string
  /**
   * time spent in fetch phase
   */
  'search.fetch_time'?:string
  /**
   * time spent in fetch phase
   */
  'pri.search.fetch_time'?:string
  /**
   * total fetch ops
   */
  'search.fetch_total'?:string
  /**
   * total fetch ops
   */
  'pri.search.fetch_total'?:string
  /**
   * open search contexts
   */
  'search.open_contexts'?:string
  /**
   * open search contexts
   */
  'pri.search.open_contexts'?:string
  /**
   * current query phase ops
   */
  'search.query_current'?:string
  /**
   * current query phase ops
   */
  'pri.search.query_current'?:string
  /**
   * time spent in query phase
   */
  'search.query_time'?:string
  /**
   * time spent in query phase
   */
  'pri.search.query_time'?:string
  /**
   * total query phase ops
   */
  'search.query_total'?:string
  /**
   * total query phase ops
   */
  'pri.search.query_total'?:string
  /**
   * open scroll contexts
   */
  'search.scroll_current'?:string
  /**
   * open scroll contexts
   */
  'pri.search.scroll_current'?:string
  /**
   * time scroll contexts held open
   */
  'search.scroll_time'?:string
  /**
   * time scroll contexts held open
   */
  'pri.search.scroll_time'?:string
  /**
   * completed scroll contexts
   */
  'search.scroll_total'?:string
  /**
   * completed scroll contexts
   */
  'pri.search.scroll_total'?:string
  /**
   * number of segments
   */
  'segments.count'?:string
  /**
   * number of segments
   */
  'pri.segments.count'?:string
  /**
   * memory used by segments
   */
  'segments.memory'?:string
  /**
   * memory used by segments
   */
  'pri.segments.memory'?:string
  /**
   * memory used by index writer
   */
  'segments.index_writer_memory'?:string
  /**
   * memory used by index writer
   */
  'pri.segments.index_writer_memory'?:string
  /**
   * memory used by version map
   */
  'segments.version_map_memory'?:string
  /**
   * memory used by version map
   */
  'pri.segments.version_map_memory'?:string
  /**
   * memory used by fixed bit sets for nested object field types and type filters for types referred in _parent fields
   */
  'segments.fixed_bitset_memory'?:string
  /**
   * memory used by fixed bit sets for nested object field types and type filters for types referred in _parent fields
   */
  'pri.segments.fixed_bitset_memory'?:string
  /**
   * current warmer ops
   */
  'warmer.current'?:string
  /**
   * current warmer ops
   */
  'pri.warmer.current'?:string
  /**
   * total warmer ops
   */
  'warmer.total'?:string
  /**
   * total warmer ops
   */
  'pri.warmer.total'?:string
  /**
   * time spent in warmers
   */
  'warmer.total_time'?:string
  /**
   * time spent in warmers
   */
  'pri.warmer.total_time'?:string
  /**
   * number of current suggest ops
   */
  'suggest.current'?:string
  /**
   * number of current suggest ops
   */
  'pri.suggest.current'?:string
  /**
   * time spend in suggest
   */
  'suggest.time'?:string
  /**
   * time spend in suggest
   */
  'pri.suggest.time'?:string
  /**
   * number of suggest ops
   */
  'suggest.total'?:string
  /**
   * number of suggest ops
   */
  'pri.suggest.total'?:string
  /**
   * total used memory
   */
  'memory.total'?:string
  /**
   * total user memory
   */
  'pri.memory.total'?:string
  /**
   * indicates if the index is search throttled
   * @aliases sth
   */
  'search.throttled'?:string
  /**
   * number of bulk shard ops
   */
  'bulk.total_operations'?:string
  /**
   * number of bulk shard ops
   */
  'pri.bulk.total_operations'?:string
  /**
   * time spend in shard bulk
   */
  'bulk.total_time'?:string
  /**
   * time spend in shard bulk
   */
  'pri.bulk.total_time'?:string
  /**
   * total size in bytes of shard bulk
   */
  'bulk.total_size_in_bytes'?:string
  /**
   * total size in bytes of shard bulk
   */
  'pri.bulk.total_size_in_bytes'?:string
  /**
   * average time spend in shard bulk
   */
  'bulk.avg_time'?:string
  /**
   * average time spend in shard bulk
   */
  'pri.bulk.avg_time'?:string
  /**
   * average size in bytes of shard bulk
   */
  'bulk.avg_size_in_bytes'?:string
  /**
   * average size in bytes of shard bulk
   */
  'pri.bulk.avg_size_in_bytes'?:string

}
