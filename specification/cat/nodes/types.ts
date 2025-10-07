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

import { ByteSize, Id, Name, VersionString } from '@_types/common'
import { Percentage } from '@_types/Numeric'

export class NodesRecord {
  /**
   * The unique node identifier.
   * @aliases nodeId
   */
  'id'?: Id
  /**
   * The process identifier.
   * @aliases p
   */
  'pid'?: string
  /**
   * The IP address.
   * @aliases i
   */
  'ip'?: string
  /**
   * The bound transport port.
   * @aliases po
   */
  'port'?: string
  /**
   * The bound HTTP address.
   * @aliases http
   */
  'http_address'?: string

  /**
   * The Elasticsearch version.
   * @aliases v
   */
  'version'?: VersionString
  /**
   * The Elasticsearch distribution flavor.
   * @aliases f
   */
  'flavor'?: string
  /**
   * The Elasticsearch distribution type.
   * @aliases t
   */
  'type'?: string
  /**
   * The Elasticsearch build hash.
   * @aliases b
   */
  'build'?: string
  /**
   * The Java version.
   * @aliases j
   */
  'jdk'?: string
  /**
   * The total disk space.
   * @aliases dt,diskTotal
   */
  'disk.total'?: ByteSize
  /**
   * The used disk space.
   * @aliases du,diskUsed
   */
  'disk.used'?: ByteSize
  /**
   * The available disk space.
   * @aliases d,da,disk,diskAvail
   */
  'disk.avail'?: ByteSize
  /**
   * The used disk space percentage.
   * @aliases dup,diskUsedPercent
   */
  'disk.used_percent'?: Percentage
  /**
   * The used heap.
   * @aliases hc,heapCurrent
   */
  'heap.current'?: string
  /**
   * The used heap ratio.
   * @aliases hp,heapPercent
   */
  'heap.percent'?: Percentage
  /**
   * The maximum configured heap.
   * @aliases hm,heapMax
   */
  'heap.max'?: string
  /**
   * The used machine memory.
   * @aliases rc,ramCurrent
   */
  'ram.current'?: string
  /**
   * The used machine memory ratio.
   * @aliases rp,ramPercent
   */
  'ram.percent'?: Percentage
  /**
   * The total machine memory.
   * @aliases rn,ramMax
   */
  'ram.max'?: string
  /**
   * The used file descriptors.
   * @aliases fdc,fileDescriptorCurrent
   */
  'file_desc.current'?: string
  /**
   * The used file descriptor ratio.
   * @aliases fdp,fileDescriptorPercent
   */
  'file_desc.percent'?: Percentage
  /**
   * The maximum number of file descriptors.
   * @aliases fdm,fileDescriptorMax
   */
  'file_desc.max'?: string

  /**
   * The recent system CPU usage as a percentage.
   */
  'cpu'?: string
  /**
   * The load average for the most recent minute.
   */
  'load_1m'?: string
  /**
   * The load average for the last five minutes.
   */
  'load_5m'?: string
  /**
   * The load average for the last fifteen minutes.
   * @aliases l
   */
  'load_15m'?: string
  /**
   * The number of available processors (logical CPU cores available to the JVM).
   */
  'available_processors'?: string
  /**
   * The node uptime.
   * @aliases u
   */
  'uptime'?: string
  /**
   * The roles of the node.
   * Returned values include `c`(cold node), `d`(data node), `f`(frozen node), `h`(hot node), `i`(ingest node), `l`(machine learning node), `m` (master eligible node), `r`(remote cluster client node), `s`(content node), `t`(transform node), `v`(voting-only node), `w`(warm node),and `-`(coordinating node only).
   * @aliases r,role,nodeRole
   */
  'node.role'?: string

  /**
   * Indicates whether the node is the elected master node.
   * Returned values include `*`(elected master) and `-`(not elected master).
   * @aliases m
   */
  'master'?: string

  /**
   * The node name.
   * @aliases n
   */
  'name'?: Name

  /**
   * The size of completion.
   * @aliases cs,completionSize
   */
  'completion.size'?: string

  /**
   * The used fielddata cache.
   * @aliases fm,fielddataMemory
   */
  'fielddata.memory_size'?: string

  /**
   * The fielddata evictions.
   * @aliases fe,fielddataEvictions
   */
  'fielddata.evictions'?: string

  /**
   * The used query cache.
   * @aliases qcm,queryCacheMemory
   */
  'query_cache.memory_size'?: string

  /**
   * The query cache evictions.
   * @aliases qce,queryCacheEvictions
   */
  'query_cache.evictions'?: string

  /**
   * The query cache hit counts.
   * @aliases qchc,queryCacheHitCount
   */
  'query_cache.hit_count'?: string

  /**
   * The query cache miss counts.
   * @aliases qcmc,queryCacheMissCount
   */
  'query_cache.miss_count'?: string

  /**
   * The used request cache.
   * @aliases rcm,requestCacheMemory
   */
  'request_cache.memory_size'?: string

  /**
   * The request cache evictions.
   * @aliases rce,requestCacheEvictions
   */
  'request_cache.evictions'?: string

  /**
   * The request cache hit counts.
   * @aliases rchc,requestCacheHitCount
   */
  'request_cache.hit_count'?: string

  /**
   * The request cache miss counts.
   * @aliases rcmc,requestCacheMissCount
   */
  'request_cache.miss_count'?: string

  /**
   * The number of flushes.
   * @aliases ft,flushTotal
   */
  'flush.total'?: string

  /**
   * The time spent in flush.
   * @aliases ftt,flushTotalTime
   */
  'flush.total_time'?: string

  /**
   * The number of current get ops.
   * @aliases gc,getCurrent
   */
  'get.current'?: string

  /**
   * The time spent in get.
   * @aliases gti,getTime
   */
  'get.time'?: string

  /**
   * The number of get ops.
   * @aliases gto,getTotal
   */
  'get.total'?: string

  /**
   * The time spent in successful gets.
   * @aliases geti,getExistsTime
   */
  'get.exists_time'?: string

  /**
   * The number of successful get operations.
   * @aliases geto,getExistsTotal
   */
  'get.exists_total'?: string

  /**
   * The time spent in failed gets.
   * @aliases gmti,getMissingTime
   */
  'get.missing_time'?: string

  /**
   * The number of failed gets.
   * @aliases gmto,getMissingTotal
   */
  'get.missing_total'?: string

  /**
   * The number of current deletions.
   * @aliases idc,indexingDeleteCurrent
   */
  'indexing.delete_current'?: string

  /**
   * The time spent in deletions.
   * @aliases idti,indexingDeleteTime
   */
  'indexing.delete_time'?: string

  /**
   * The number of delete operations.
   * @aliases idto,indexingDeleteTotal
   */
  'indexing.delete_total'?: string

  /**
   * The number of current indexing operations.
   * @aliases iic,indexingIndexCurrent
   */
  'indexing.index_current'?: string

  /**
   * The time spent in indexing.
   * @aliases iiti,indexingIndexTime
   */
  'indexing.index_time'?: string

  /**
   * The number of indexing operations.
   * @aliases iito,indexingIndexTotal
   */
  'indexing.index_total'?: string

  /**
   * The number of failed indexing operations.
   * @aliases iif,indexingIndexFailed
   */
  'indexing.index_failed'?: string

  /**
   * The number of current merges.
   * @aliases mc,mergesCurrent
   */
  'merges.current'?: string

  /**
   * The number of current merging docs.
   * @aliases mcd,mergesCurrentDocs
   */
  'merges.current_docs'?: string

  /**
   * The size of current merges.
   * @aliases mcs,mergesCurrentSize
   */
  'merges.current_size'?: string

  /**
   * The number of completed merge operations.
   * @aliases mt,mergesTotal
   */
  'merges.total'?: string

  /**
   * The docs merged.
   * @aliases mtd,mergesTotalDocs
   */
  'merges.total_docs'?: string
  /**
   * The size merged.
   * @aliases mts,mergesTotalSize
   */
  'merges.total_size'?: string
  /**
   * The time spent in merges.
   * @aliases mtt,mergesTotalTime
   */
  'merges.total_time'?: string

  /**
   * The total refreshes.
   */
  'refresh.total'?: string
  /**
   * The time spent in refreshes.
   */
  'refresh.time'?: string
  /**
   * The total external refreshes.
   * @aliases rto,refreshTotal
   */
  'refresh.external_total'?: string
  /**
   * The time spent in external refreshes.
   * @aliases rti,refreshTime
   */
  'refresh.external_time'?: string
  /**
   * The number of pending refresh listeners.
   * @aliases rli,refreshListeners
   */
  'refresh.listeners'?: string

  /**
   * The total script compilations.
   * @aliases scrcc,scriptCompilations
   */
  'script.compilations'?: string
  /**
   * The total compiled scripts evicted from the cache.
   * @aliases scrce,scriptCacheEvictions
   */
  'script.cache_evictions'?: string
  /**
   * The script cache compilation limit triggered.
   * @aliases scrclt,scriptCacheCompilationLimitTriggered
   */
  'script.compilation_limit_triggered'?: string

  /**
   * The current fetch phase operations.
   * @aliases sfc,searchFetchCurrent
   */
  'search.fetch_current'?: string
  /**
   * The time spent in fetch phase.
   * @aliases sfti,searchFetchTime
   */
  'search.fetch_time'?: string
  /**
   * The total fetch operations.
   * @aliases sfto,searchFetchTotal
   */
  'search.fetch_total'?: string
  /**
   * The open search contexts.
   * @aliases so,searchOpenContexts
   */
  'search.open_contexts'?: string
  /**
   * The current query phase operations.
   * @aliases sqc,searchQueryCurrent
   */
  'search.query_current'?: string
  /**
   * The time spent in query phase.
   * @aliases sqti,searchQueryTime
   */
  'search.query_time'?: string
  /**
   * The total query phase operations.
   * @aliases sqto,searchQueryTotal
   */
  'search.query_total'?: string
  /**
   * The open scroll contexts.
   * @aliases scc,searchScrollCurrent
   */
  'search.scroll_current'?: string
  /**
   * The time scroll contexts held open.
   * @aliases scti,searchScrollTime
   */
  'search.scroll_time'?: string
  /**
   * The completed scroll contexts.
   * @aliases scto,searchScrollTotal
   */
  'search.scroll_total'?: string

  /**
   * The number of segments.
   * @aliases sc,segmentsCount
   */
  'segments.count'?: string
  /**
   * The memory used by segments.
   * @aliases sm,segmentsMemory
   */
  'segments.memory'?: string
  /**
   * The memory used by the index writer.
   * @aliases siwm,segmentsIndexWriterMemory
   */
  'segments.index_writer_memory'?: string
  /**
   * The memory used by the version map.
   * @aliases svmm,segmentsVersionMapMemory
   */
  'segments.version_map_memory'?: string
  /**
   * The memory used by fixed bit sets for nested object field types and export type filters for types referred in _parent fields.
   * @aliases sfbm,fixedBitsetMemory
   */
  'segments.fixed_bitset_memory'?: string
  /**
   * The number of current suggest operations.
   * @aliases suc,suggestCurrent
   */
  'suggest.current'?: string
  /**
   * The time spend in suggest.
   * @aliases suti,suggestTime
   */
  'suggest.time'?: string
  /**
   * The number of suggest operations.
   * @aliases suto,suggestTotal
   */
  'suggest.total'?: string

  /**
   * The number of bulk shard operations.
   * @aliases bto,bulkTotalOperations
   */
  'bulk.total_operations'?: string
  /**
   * The time spend in shard bulk.
   * @aliases btti,bulkTotalTime
   */
  'bulk.total_time'?: string
  /**
   * The total size in bytes of shard bulk.
   * @aliases btsi,bulkTotalSizeInBytes
   */
  'bulk.total_size_in_bytes'?: string
  /**
   * The average time spend in shard bulk.
   * @aliases bati,bulkAvgTime
   */
  'bulk.avg_time'?: string
  /**
   * The average size in bytes of shard bulk.
   * @aliases basi,bulkAvgSizeInBytes
   */
  'bulk.avg_size_in_bytes'?: string
}
