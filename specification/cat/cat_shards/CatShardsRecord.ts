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

export class CatShardsRecord {
  /**
   * index name
   * @aliases i,idx
   */
  'index'?: string
  /**
   * shard name
   * @aliases s,sh
   */
  'shard'?: string
  /**
   * primary or replica
   * @aliases p,pr,primaryOrReplica
   */
  'prirep'?: string
  /**
   * shard state
   * @aliases st
   */
  'state'?: string
  /**
   * number of docs in shard
   * @aliases d,dc
   */
  'docs'?: string
  /**
   * store size of shard (how much disk it uses)
   * @aliases sto
   */
  'store'?: string
  /**
   * ip of node where it lives
   */
  'ip'?: string
  /**
   * unique id of node where it lives
   */
  'id'?: string
  /**
   * name of node where it lives
   * @aliases n
   */
  'node'?: string
  /**
   * sync id
   */
  'sync_id'?: string
  /**
   * reason shard is unassigned
   * @aliases ur
   */
  'unassigned.reason'?: string
  /**
   * time shard became unassigned (UTC)
   * @aliases ua
   */
  'unassigned.at'?: string
  /**
   * time has been unassigned
   * @aliases uf
   */
  'unassigned.for'?: string
  /**
   * additional details as to why the shard became unassigned
   * @aliases ud
   */
  'unassigned.details'?: string
  /**
   * recovery source type
   * @aliases rs
   */
  'recoverysource.type'?: string
  /**
   * size of completion
   * @aliases cs,completionSize
   */
  'completion.size'?: string
  /**
   * used fielddata cache
   * @aliases fm,fielddataMemory
   */
  'fielddata.memory_size'?: string
  /**
   * fielddata evictions
   * @aliases fe,fielddataEvictions
   */
  'fielddata.evictions'?: string
  /**
   * used query cache
   * @aliases qcm,queryCacheMemory
   */
  'query_cache.memory_size'?: string
  /**
   * query cache evictions
   * @aliases qce,queryCacheEvictions
   */
  'query_cache.evictions'?: string
  /**
   * number of flushes
   * @aliases ft,flushTotal
   */
  'flush.total'?: string
  /**
   * time spent in flush
   * @aliases ftt,flushTotalTime
   */
  'flush.total_time'?: string
  /**
   * number of current get ops
   * @aliases gc,getCurrent
   */
  'get.current'?: string
  /**
   * time spent in get
   * @aliases gti,getTime
   */
  'get.time'?: string
  /**
   * number of get ops
   * @aliases gto,getTotal
   */
  'get.total'?: string
  /**
   * time spent in successful gets
   * @aliases geti,getExistsTime
   */
  'get.exists_time'?: string
  /**
   * number of successful gets
   * @aliases geto,getExistsTotal
   */
  'get.exists_total'?: string
  /**
   * time spent in failed gets
   * @aliases gmti,getMissingTime
   */
  'get.missing_time'?: string
  /**
   * number of failed gets
   * @aliases gmto,getMissingTotal
   */
  'get.missing_total'?: string
  /**
   * number of current deletions
   * @aliases idc,indexingDeleteCurrent
   */
  'indexing.delete_current'?: string
  /**
   * time spent in deletions
   * @aliases idti,indexingDeleteTime
   */
  'indexing.delete_time'?: string
  /**
   * number of delete ops
   * @aliases idto,indexingDeleteTotal
   */
  'indexing.delete_total'?: string
  /**
   * number of current indexing ops
   * @aliases iic,indexingIndexCurrent
   */
  'indexing.index_current'?: string
  /**
   * time spent in indexing
   * @aliases iiti,indexingIndexTime
   */
  'indexing.index_time'?: string
  /**
   * number of indexing ops
   * @aliases iito,indexingIndexTotal
   */
  'indexing.index_total'?: string
  /**
   * number of failed indexing ops
   * @aliases iif,indexingIndexFailed
   */
  'indexing.index_failed'?: string
  /**
   * number of current merges
   * @aliases mc,mergesCurrent
   */
  'merges.current'?: string
  /**
   * number of current merging docs
   * @aliases mcd,mergesCurrentDocs
   */
  'merges.current_docs'?: string
  /**
   * size of current merges
   * @aliases mcs,mergesCurrentSize
   */
  'merges.current_size'?: string
  /**
   * number of completed merge ops
   * @aliases mt,mergesTotal
   */
  'merges.total'?: string
  /**
   * docs merged
   * @aliases mtd,mergesTotalDocs
   */
  'merges.total_docs'?: string
  /**
   * size merged
   * @aliases mts,mergesTotalSize
   */
  'merges.total_size'?: string
  /**
   * time spent in merges
   * @aliases mtt,mergesTotalTime
   */
  'merges.total_time'?: string
  /**
   * total refreshes
   */
  'refresh.total'?: string
  /**
   * time spent in refreshes
   */
  'refresh.time'?: string
  /**
   * total external refreshes
   * @aliases rto,refreshTotal
   */
  'refresh.external_total'?: string
  /**
   * time spent in external refreshes
   * @aliases rti,refreshTime
   */
  'refresh.external_time'?: string
  /**
   * number of pending refresh listeners
   * @aliases rli,refreshListeners
   */
  'refresh.listeners'?: string
  /**
   * current fetch phase ops
   * @aliases sfc,searchFetchCurrent
   */
  'search.fetch_current'?: string
  /**
   * time spent in fetch phase
   * @aliases sfti,searchFetchTime
   */
  'search.fetch_time'?: string
  /**
   * total fetch ops
   * @aliases sfto,searchFetchTotal
   */
  'search.fetch_total'?: string
  /**
   * open search contexts
   * @aliases so,searchOpenContexts
   */
  'search.open_contexts'?: string
  /**
   * current query phase ops
   * @aliases sqc,searchQueryCurrent
   */
  'search.query_current'?: string
  /**
   * time spent in query phase
   * @aliases sqti,searchQueryTime
   */
  'search.query_time'?: string
  /**
   * total query phase ops
   * @aliases sqto,searchQueryTotal
   */
  'search.query_total'?: string
  /**
   * open scroll contexts
   * @aliases scc,searchScrollCurrent
   */
  'search.scroll_current'?: string
  /**
   * time scroll contexts held open
   * @aliases scti,searchScrollTime
   */
  'search.scroll_time'?: string
  /**
   * completed scroll contexts
   * @aliases scto,searchScrollTotal
   */
  'search.scroll_total'?: string
  /**
   * number of segments
   * @aliases sc,segmentsCount
   */
  'segments.count'?: string
  /**
   * memory used by segments
   * @aliases sm,segmentsMemory
   */
  'segments.memory'?: string
  /**
   * memory used by index writer
   * @aliases siwm,segmentsIndexWriterMemory
   */
  'segments.index_writer_memory'?: string
  /**
   * memory used by version map
   * @aliases svmm,segmentsVersionMapMemory
   */
  'segments.version_map_memory'?: string
  /**
   * memory used by fixed bit sets for nested object field types and export type filters for types referred in _parent fields
   * @aliases sfbm,fixedBitsetMemory
   */
  'segments.fixed_bitset_memory'?: string
  /**
   * max sequence number
   * @aliases sqm,maxSeqNo
   */
  'seq_no.max'?: string
  /**
   * local checkpoint
   * @aliases sql,localCheckpoint
   */
  'seq_no.local_checkpoint'?: string
  /**
   * global checkpoint
   * @aliases sqg,globalCheckpoint
   */
  'seq_no.global_checkpoint'?: string
  /**
   * current warmer ops
   * @aliases wc,warmerCurrent
   */
  'warmer.current'?: string
  /**
   * total warmer ops
   * @aliases wto,warmerTotal
   */
  'warmer.total'?: string
  /**
   * time spent in warmers
   * @aliases wtt,warmerTotalTime
   */
  'warmer.total_time'?: string
  /**
   * shard data path
   * @aliases pd,dataPath
   */
  'path.data'?: string
  /**
   * shard state path
   * @aliases ps,statsPath
   */
  'path.state'?: string
  /**
   * number of bulk shard ops
   * @aliases bto,bulkTotalOperations
   */
  'bulk.total_operations'?: string
  /**
   * time spend in shard bulk
   * @aliases btti,bulkTotalTime
   */
  'bulk.total_time'?: string
  /**
   * total size in bytes of shard bulk
   * @aliases btsi,bulkTotalSizeInBytes
   */
  'bulk.total_size_in_bytes'?: string
  /**
   * average time spend in shard bulk
   * @aliases bati,bulkAvgTime
   */
  'bulk.avg_time'?: string
  /**
   * avg size in bytes of shard bulk
   * @aliases basi,bulkAvgSizeInBytes
   */
  'bulk.avg_size_in_bytes'?: string
}
