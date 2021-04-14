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

import { ByteSize, Id, Name, Percentage, Type, VersionString } from '../../__common/common'

export class CatNodesRecord {
  /**
   * unique node id
   * @aliases nodeId
   */
  'id'?: Id
  /**
   * process id
   * @aliases p
   */
  'pid'?: string
  /**
   * ip address
   * @aliases i
   */
  'ip'?: string
  /**
   * bound transport port
   * @aliases po
   */
  'port'?: string
  /**
   * bound http address
   * @aliases http
   */
  'http_address'?: string

  /**
   * es version
   * @aliases v
   */
  'version'?: VersionString
  /**
   * es distribution flavor
   * @aliases f
   */
  'flavor'?: string
  /**
   * es distribution type
   * @aliases t
   */
  'type'?: Type
  /**
   * es build hash
   * @aliases b
   */
  'build'?: string
  /**
   * jdk version
   * @aliases j
   */
  'jdk'?: string
  /**
   * total disk space
   * @aliases dt,diskTotal
   */
  'disk.total'?: ByteSize
  /**
   * used disk space
   * @aliases du,diskUsed
   */
  'disk.used'?: ByteSize
  /**
   * available disk space
   * @aliases d,da,disk,diskAvail
   */
  'disk.avail'?: ByteSize
  /**
   * used disk space percentage
   * @aliases dup,diskUsedPercent
   */
  'disk.used_percent'?: Percentage
  /**
   * used heap
   * @aliases hc,heapCurrent
   */
  'heap.current'?: string
  /**
   * used heap ratio
   * @aliases hp,heapPercent
   */
  'heap.percent'?: Percentage
  /**
   * max configured heap
   * @aliases hm,heapMax
   */
  'heap.max'?: string
  /**
   * used machine memory
   * @aliases rc,ramCurrent
   */
  'ram.current'?: string
  /**
   * used machine memory ratio
   * @aliases rp,ramPercent
   */
  'ram.percent'?: Percentage
  /**
   * total machine memory
   * @aliases rn,ramMax
   */
  'ram.max'?: string
  /**
   * used file descriptors
   * @aliases fdc,fileDescriptorCurrent
   */
  'file_desc.current'?: string
  /**
   * used file descriptor ratio
   * @aliases fdp,fileDescriptorPercent
   */
  'file_desc.percent'?: Percentage
  /**
   * max file descriptors
   * @aliases fdm,fileDescriptorMax
   */
  'file_desc.max'?: string

  /**
   * recent cpu usage
   */
  'cpu'?: string
  /**
   * 1m load avg
   */
  'load_1m'?: string
  /**
   * 5m load avg
   */
  'load_5m'?: string
  /**
   * 15m load avg
   * @aliases l
   */
  'load_15m'?: string
  /**
   * node uptime
   * @aliases u
   */
  'uptime'?: string
  /**
   * m:master eligible node, d:data node, i:ingest node, -:coordinating node only
   * @aliases r,role,nodeRole
   */
  'node.role'?: string

  /**
   * *:current master
   * @aliases m
   */
  'master'?: string

  /**
   * node name
   * @aliases n
   */
  'name'?: Name

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
   * query cache hit counts
   * @aliases qchc,queryCacheHitCount
   */
  'query_cache.hit_count'?: string

  /**
   * query cache miss counts
   * @aliases qcmc,queryCacheMissCount
   */
  'query_cache.miss_count'?: string

  /**
   * used request cache
   * @aliases rcm,requestCacheMemory
   */
  'request_cache.memory_size'?: string

  /**
   * request cache evictions
   * @aliases rce,requestCacheEvictions
   */
  'request_cache.evictions'?: string

  /**
   * request cache hit counts
   * @aliases rchc,requestCacheHitCount
   */
  'request_cache.hit_count'?: string

  /**
   * request cache miss counts
   * @aliases rcmc,requestCacheMissCount
   */
  'request_cache.miss_count'?: string

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
   * script compilations
   * @aliases scrcc,scriptCompilations
   */
  'script.compilations'?: string
  /**
   * script cache evictions
   * @aliases scrce,scriptCacheEvictions
   */
  'script.cache_evictions'?: string
  /**
   * script cache compilation limit triggered
   * @aliases scrclt,scriptCacheCompilationLimitTriggered
   */
  'script.compilation_limit_triggered'?: string

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
   * memory used by fixed bit sets for nested object field types  and export type filters for types referred in _parent fields
   * @aliases sfbm,fixedBitsetMemory
   */
  'segments.fixed_bitset_memory'?: string

  /**
   * number of current suggest ops
   * @aliases suc,suggestCurrent
   */
  'suggest.current'?: string
  /**
   * time spend in suggest
   * @aliases suti,suggestTime
   */
  'suggest.time'?: string
  /**
   * number of suggest ops
   * @aliases suto,suggestTotal
   */
  'suggest.total'?: string

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
   * average size in bytes of shard bulk
   * @aliases basi,bulkAvgSizeInBytes
   */
  'bulk.avg_size_in_bytes'?: string
}
