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

export class IndicesRecord {
  /**
   * current health status
   * @aliases h
   */
  'health'?: string

  /**
   * open/close status
   * @aliases s
   */
  'status'?: string

  /**
   * index name
   * @aliases i,idx
   */
  'index'?: string

  /**
   * index uuid
   * @aliases id
   */
  'uuid'?: string

  /**
   * number of primary shards
   * @aliases p,shards.primary,shardsPrimary
   */
  'pri'?: string

  /**
   * number of replica shards
   * @aliases r,shards.replica,shardsReplica
   */
  'rep'?: string

  /**
   * The number of documents in the index, including hidden nested documents.
   * For indices with `semantic_text` fields or other nested field types, this count
   * includes the internal nested documents used for storing chunks and embeddings.
   * To get the logical document count (excluding nested documents), use the `_count`
   * API or `_cat/count` API instead.
   * @aliases dc,docsCount
   */
  'docs.count'?: string | null

  /**
   * deleted docs
   * @aliases dd,docsDeleted
   */
  'docs.deleted'?: string | null

  /**
   * index creation date (millisecond value)
   * @aliases cd
   */
  'creation.date'?: string

  /**
   * index creation date (as string)
   * @aliases cds
   */
  'creation.date.string'?: string

  /**
   * store size of primaries & replicas
   * @aliases ss,storeSize
   */
  'store.size'?: string | null

  /**
   * store size of primaries
   */
  'pri.store.size'?: string | null

  /**
   * total size of dataset (including the cache for partially mounted indices)
   * @availability stack since=8.11.0 stability=stable
   * @availability serverless stability=stable visibility=public
   */
  'dataset.size'?: string | null

  /**
   * size of completion
   * @aliases cs,completionSize
   */
  'completion.size'?: string

  /**
   * size of completion
   */
  'pri.completion.size'?: string

  /**
   * used fielddata cache
   * @aliases fm,fielddataMemory
   */
  'fielddata.memory_size'?: string

  /**
   * used fielddata cache
   */
  'pri.fielddata.memory_size'?: string

  /**
   * fielddata evictions
   * @aliases fe,fielddataEvictions
   */
  'fielddata.evictions'?: string

  /**
   * fielddata evictions
   */
  'pri.fielddata.evictions'?: string

  /**
   * used query cache
   * @aliases qcm,queryCacheMemory
   */
  'query_cache.memory_size'?: string

  /**
   * used query cache
   */
  'pri.query_cache.memory_size'?: string

  /**
   * query cache evictions
   * @aliases qce,queryCacheEvictions
   */
  'query_cache.evictions'?: string

  /**
   * query cache evictions
   */
  'pri.query_cache.evictions'?: string

  /**
   * used request cache
   * @aliases rcm,requestCacheMemory
   */
  'request_cache.memory_size'?: string

  /**
   * used request cache
   */
  'pri.request_cache.memory_size'?: string

  /**
   * request cache evictions
   * @aliases rce,requestCacheEvictions
   */
  'request_cache.evictions'?: string

  /**
   * request cache evictions
   */
  'pri.request_cache.evictions'?: string

  /**
   * request cache hit count
   * @aliases rchc,requestCacheHitCount
   */
  'request_cache.hit_count'?: string

  /**
   * request cache hit count
   */
  'pri.request_cache.hit_count'?: string

  /**
   * request cache miss count
   * @aliases rcmc,requestCacheMissCount
   */
  'request_cache.miss_count'?: string

  /**
   * request cache miss count
   */
  'pri.request_cache.miss_count'?: string

  /**
   * number of flushes
   * @aliases ft,flushTotal
   */
  'flush.total'?: string

  /**
   * number of flushes
   */
  'pri.flush.total'?: string

  /**
   * time spent in flush
   * @aliases ftt,flushTotalTime
   */
  'flush.total_time'?: string

  /**
   * time spent in flush
   */
  'pri.flush.total_time'?: string

  /**
   * number of current get ops
   * @aliases gc,getCurrent
   */
  'get.current'?: string

  /**
   * number of current get ops
   */
  'pri.get.current'?: string

  /**
   * time spent in get
   * @aliases gti,getTime
   */
  'get.time'?: string

  /**
   * time spent in get
   */
  'pri.get.time'?: string

  /**
   * number of get ops
   * @aliases gto,getTotal
   */
  'get.total'?: string

  /**
   * number of get ops
   */
  'pri.get.total'?: string

  /**
   * time spent in successful gets
   * @aliases geti,getExistsTime
   */
  'get.exists_time'?: string

  /**
   * time spent in successful gets
   */
  'pri.get.exists_time'?: string

  /**
   * number of successful gets
   * @aliases geto,getExistsTotal
   */
  'get.exists_total'?: string

  /**
   * number of successful gets
   */
  'pri.get.exists_total'?: string

  /**
   * time spent in failed gets
   * @aliases gmti,getMissingTime
   */
  'get.missing_time'?: string

  /**
   * time spent in failed gets
   */
  'pri.get.missing_time'?: string

  /**
   * number of failed gets
   * @aliases gmto,getMissingTotal
   */
  'get.missing_total'?: string

  /**
   * number of failed gets
   */
  'pri.get.missing_total'?: string

  /**
   * number of current deletions
   * @aliases idc,indexingDeleteCurrent
   */
  'indexing.delete_current'?: string

  /**
   * number of current deletions
   */
  'pri.indexing.delete_current'?: string

  /**
   * time spent in deletions
   * @aliases idti,indexingDeleteTime
   */
  'indexing.delete_time'?: string

  /**
   * time spent in deletions
   */
  'pri.indexing.delete_time'?: string

  /**
   * number of delete ops
   * @aliases idto,indexingDeleteTotal
   */
  'indexing.delete_total'?: string

  /**
   * number of delete ops
   */
  'pri.indexing.delete_total'?: string

  /**
   * number of current indexing ops
   * @aliases iic,indexingIndexCurrent
   */
  'indexing.index_current'?: string

  /**
   * number of current indexing ops
   */
  'pri.indexing.index_current'?: string

  /**
   * time spent in indexing
   * @aliases iiti,indexingIndexTime
   */
  'indexing.index_time'?: string

  /**
   * time spent in indexing
   */
  'pri.indexing.index_time'?: string

  /**
   * number of indexing ops
   * @aliases iito,indexingIndexTotal
   */
  'indexing.index_total'?: string

  /**
   * number of indexing ops
   */
  'pri.indexing.index_total'?: string

  /**
   * number of failed indexing ops
   * @aliases iif,indexingIndexFailed
   */
  'indexing.index_failed'?: string

  /**
   * number of failed indexing ops
   */
  'pri.indexing.index_failed'?: string

  /**
   * number of current merges
   * @aliases mc,mergesCurrent
   */
  'merges.current'?: string

  /**
   * number of current merges
   */
  'pri.merges.current'?: string

  /**
   * number of current merging docs
   * @aliases mcd,mergesCurrentDocs
   */
  'merges.current_docs'?: string

  /**
   * number of current merging docs
   */
  'pri.merges.current_docs'?: string

  /**
   * size of current merges
   * @aliases mcs,mergesCurrentSize
   */
  'merges.current_size'?: string

  /**
   * size of current merges
   */
  'pri.merges.current_size'?: string

  /**
   * number of completed merge ops
   * @aliases mt,mergesTotal
   */
  'merges.total'?: string

  /**
   * number of completed merge ops
   */
  'pri.merges.total'?: string

  /**
   * docs merged
   * @aliases mtd,mergesTotalDocs
   */
  'merges.total_docs'?: string

  /**
   * docs merged
   */
  'pri.merges.total_docs'?: string

  /**
   * size merged
   * @aliases mts,mergesTotalSize
   */
  'merges.total_size'?: string

  /**
   * size merged
   */
  'pri.merges.total_size'?: string

  /**
   * time spent in merges
   * @aliases mtt,mergesTotalTime
   */
  'merges.total_time'?: string

  /**
   * time spent in merges
   */
  'pri.merges.total_time'?: string

  /**
   * total refreshes
   * @aliases rto,refreshTotal
   */
  'refresh.total'?: string

  /**
   * total refreshes
   */
  'pri.refresh.total'?: string

  /**
   * time spent in refreshes
   * @aliases rti,refreshTime
   */
  'refresh.time'?: string

  /**
   * time spent in refreshes
   */
  'pri.refresh.time'?: string

  /**
   * total external refreshes
   * @aliases reto
   */
  'refresh.external_total'?: string

  /**
   * total external refreshes
   */
  'pri.refresh.external_total'?: string

  /**
   * time spent in external refreshes
   * @aliases reti
   */
  'refresh.external_time'?: string

  /**
   * time spent in external refreshes
   */
  'pri.refresh.external_time'?: string

  /**
   * number of pending refresh listeners
   * @aliases rli,refreshListeners
   */
  'refresh.listeners'?: string

  /**
   * number of pending refresh listeners
   */
  'pri.refresh.listeners'?: string

  /**
   * current fetch phase ops
   * @aliases sfc,searchFetchCurrent
   */
  'search.fetch_current'?: string

  /**
   * current fetch phase ops
   */
  'pri.search.fetch_current'?: string

  /**
   * time spent in fetch phase
   * @aliases sfti,searchFetchTime
   */
  'search.fetch_time'?: string

  /**
   * time spent in fetch phase
   */
  'pri.search.fetch_time'?: string

  /**
   * total fetch ops
   * @aliases sfto,searchFetchTotal
   */
  'search.fetch_total'?: string

  /**
   * total fetch ops
   */
  'pri.search.fetch_total'?: string

  /**
   * open search contexts
   * @aliases so,searchOpenContexts
   */
  'search.open_contexts'?: string

  /**
   * open search contexts
   */
  'pri.search.open_contexts'?: string

  /**
   * current query phase ops
   * @aliases sqc,searchQueryCurrent
   */
  'search.query_current'?: string

  /**
   * current query phase ops
   */
  'pri.search.query_current'?: string

  /**
   * time spent in query phase
   * @aliases sqti,searchQueryTime
   */
  'search.query_time'?: string

  /**
   * time spent in query phase
   */
  'pri.search.query_time'?: string

  /**
   * total query phase ops
   * @aliases sqto,searchQueryTotal
   */
  'search.query_total'?: string

  /**
   * total query phase ops
   */
  'pri.search.query_total'?: string

  /**
   * open scroll contexts
   * @aliases scc,searchScrollCurrent
   */
  'search.scroll_current'?: string

  /**
   * open scroll contexts
   */
  'pri.search.scroll_current'?: string

  /**
   * time scroll contexts held open
   * @aliases scti,searchScrollTime
   */
  'search.scroll_time'?: string

  /**
   * time scroll contexts held open
   */
  'pri.search.scroll_time'?: string

  /**
   * completed scroll contexts
   * @aliases scto,searchScrollTotal
   */
  'search.scroll_total'?: string

  /**
   * completed scroll contexts
   */
  'pri.search.scroll_total'?: string

  /**
   * number of segments
   * @aliases sc,segmentsCount
   */
  'segments.count'?: string

  /**
   * number of segments
   */
  'pri.segments.count'?: string

  /**
   * memory used by segments
   * @aliases sm,segmentsMemory
   */
  'segments.memory'?: string

  /**
   * memory used by segments
   */
  'pri.segments.memory'?: string

  /**
   * memory used by index writer
   * @aliases siwm,segmentsIndexWriterMemory
   */
  'segments.index_writer_memory'?: string

  /**
   * memory used by index writer
   */
  'pri.segments.index_writer_memory'?: string

  /**
   * memory used by version map
   * @aliases svmm,segmentsVersionMapMemory
   */
  'segments.version_map_memory'?: string

  /**
   * memory used by version map
   */
  'pri.segments.version_map_memory'?: string

  /**
   * memory used by fixed bit sets for nested object field types and export type filters for types referred in _parent fields
   * @aliases sfbm,fixedBitsetMemory
   */
  'segments.fixed_bitset_memory'?: string

  /**
   * memory used by fixed bit sets for nested object field types and export type filters for types referred in _parent fields
   */
  'pri.segments.fixed_bitset_memory'?: string

  /**
   * current warmer ops
   * @aliases wc,warmerCurrent
   */
  'warmer.current'?: string

  /**
   * current warmer ops
   */
  'pri.warmer.current'?: string

  /**
   * total warmer ops
   * @aliases wto,warmerTotal
   */
  'warmer.total'?: string

  /**
   * total warmer ops
   */
  'pri.warmer.total'?: string

  /**
   * time spent in warmers
   * @aliases wtt,warmerTotalTime
   */
  'warmer.total_time'?: string

  /**
   * time spent in warmers
   */
  'pri.warmer.total_time'?: string

  /**
   * number of current suggest ops
   * @aliases suc,suggestCurrent
   */
  'suggest.current'?: string

  /**
   * number of current suggest ops
   */
  'pri.suggest.current'?: string

  /**
   * time spend in suggest
   * @aliases suti,suggestTime
   */
  'suggest.time'?: string

  /**
   * time spend in suggest
   */
  'pri.suggest.time'?: string

  /**
   * number of suggest ops
   * @aliases suto,suggestTotal
   */
  'suggest.total'?: string

  /**
   * number of suggest ops
   */
  'pri.suggest.total'?: string

  /**
   * total used memory
   * @aliases tm,memoryTotal
   */
  'memory.total'?: string

  /**
   * total user memory
   */
  'pri.memory.total'?: string

  /**
   * indicates if the index is search throttled
   * @aliases sth
   */
  'search.throttled'?: string

  /**
   * number of bulk shard ops
   * @aliases bto,bulkTotalOperation
   */
  'bulk.total_operations'?: string

  /**
   * number of bulk shard ops
   */
  'pri.bulk.total_operations'?: string

  /**
   * time spend in shard bulk
   * @aliases btti,bulkTotalTime
   */
  'bulk.total_time'?: string

  /**
   * time spend in shard bulk
   */
  'pri.bulk.total_time'?: string

  /**
   * total size in bytes of shard bulk
   * @aliases btsi,bulkTotalSizeInBytes
   */
  'bulk.total_size_in_bytes'?: string

  /**
   * total size in bytes of shard bulk
   */
  'pri.bulk.total_size_in_bytes'?: string

  /**
   * average time spend in shard bulk
   * @aliases bati,bulkAvgTime
   */
  'bulk.avg_time'?: string

  /**
   * average time spend in shard bulk
   */
  'pri.bulk.avg_time'?: string

  /**
   * average size in bytes of shard bulk
   * @aliases basi,bulkAvgSizeInBytes
   */
  'bulk.avg_size_in_bytes'?: string

  /**
   * average size in bytes of shard bulk
   */
  'pri.bulk.avg_size_in_bytes'?: string
}
