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

export class ShardsRecord {
  /**
   * The index name.
   * @aliases i,idx
   */
  'index'?: string
  /**
   * The shard name.
   * @aliases s,sh
   */
  'shard'?: string
  /**
   * The shard type: `primary` or `replica`.
   * @aliases p,pr,primaryOrReplica
   */
  'prirep'?: string
  /**
   * The shard state.
   * Returned values include:
   * `INITIALIZING`: The shard is recovering from a peer shard or gateway.
   * `RELOCATING`: The shard is relocating.
   * `STARTED`: The shard has started.
   * `UNASSIGNED`: The shard is not assigned to any node.
   * @aliases st
   */
  'state'?: string
  /**
   * The number of documents in the shard.
   * @aliases d,dc
   */
  'docs'?: string | null
  /**
   * The disk space used by the shard.
   * @aliases sto
   */
  'store'?: string | null
  /**
   * total size of dataset (including the cache for partially mounted indices)
   * @availability stack since=8.11.0 stability=stable
   * @availability serverless stability=stable visibility=public
   */
  'dataset'?: string | null
  /**
   * The IP address of the node.
   */
  'ip'?: string | null
  /**
   * The unique identifier for the node.
   */
  'id'?: string
  /**
   * The name of node.
   * @aliases n
   */
  'node'?: string | null
  /**
   * The sync identifier.
   */
  'sync_id'?: string
  /**
   * The reason for the last change to the state of an unassigned shard.
   * It does not explain why the shard is currently unassigned; use the cluster allocation explain API for that information.
   * Returned values include:
   * `ALLOCATION_FAILED`: Unassigned as a result of a failed allocation of the shard.
   * `CLUSTER_RECOVERED`: Unassigned as a result of a full cluster recovery.
   * `DANGLING_INDEX_IMPORTED`: Unassigned as a result of importing a dangling index.
   * `EXISTING_INDEX_RESTORED`: Unassigned as a result of restoring into a closed index.
   * `FORCED_EMPTY_PRIMARY`: The shard’s allocation was last modified by forcing an empty primary using the cluster reroute API.
   * `INDEX_CLOSED`: Unassigned because the index was closed.
   * `INDEX_CREATED`: Unassigned as a result of an API creation of an index.
   * `INDEX_REOPENED`: Unassigned as a result of opening a closed index.
   * `MANUAL_ALLOCATION`: The shard’s allocation was last modified by the cluster reroute API.
   * `NEW_INDEX_RESTORED`: Unassigned as a result of restoring into a new index.
   * `NODE_LEFT`: Unassigned as a result of the node hosting it leaving the cluster.
   * `NODE_RESTARTING`: Similar to `NODE_LEFT`, except that the node was registered as restarting using the node shutdown API.
   * `PRIMARY_FAILED`: The shard was initializing as a replica, but the primary shard failed before the initialization completed.
   * `REALLOCATED_REPLICA`: A better replica location is identified and causes the existing replica allocation to be cancelled.
   * `REINITIALIZED`: When a shard moves from started back to initializing.
   * `REPLICA_ADDED`: Unassigned as a result of explicit addition of a replica.
   * `REROUTE_CANCELLED`: Unassigned as a result of explicit cancel reroute command.
   * @aliases ur
   */
  'unassigned.reason'?: string
  /**
   * The time at which the shard became unassigned in Coordinated Universal Time (UTC).
   * @aliases ua
   */
  'unassigned.at'?: string
  /**
   * The time at which the shard was requested to be unassigned in Coordinated Universal Time (UTC).
   * @aliases uf
   */
  'unassigned.for'?: string
  /**
   * Additional details as to why the shard became unassigned.
   * It does not explain why the shard is not assigned; use the cluster allocation explain API for that information.
   * @aliases ud
   */
  'unassigned.details'?: string
  /**
   * The type of recovery source.
   * @aliases rs
   */
  'recoverysource.type'?: string
  /**
   * The size of completion.
   * @aliases cs,completionSize
   */
  'completion.size'?: string
  /**
   * The used fielddata cache memory.
   * @aliases fm,fielddataMemory
   */
  'fielddata.memory_size'?: string
  /**
   * The fielddata cache evictions.
   * @aliases fe,fielddataEvictions
   */
  'fielddata.evictions'?: string
  /**
   * The used query cache memory.
   * @aliases qcm,queryCacheMemory
   */
  'query_cache.memory_size'?: string
  /**
   * The query cache evictions.
   * @aliases qce,queryCacheEvictions
   */
  'query_cache.evictions'?: string
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
   * The number of current get operations.
   * @aliases gc,getCurrent
   */
  'get.current'?: string
  /**
   * The time spent in get operations.
   * @aliases gti,getTime
   */
  'get.time'?: string
  /**
   * The number of get operations.
   * @aliases gto,getTotal
   */
  'get.total'?: string
  /**
   * The time spent in successful get operations.
   * @aliases geti,getExistsTime
   */
  'get.exists_time'?: string
  /**
   * The number of successful get operations.
   * @aliases geto,getExistsTotal
   */
  'get.exists_total'?: string
  /**
   * The time spent in failed get operations.
   * @aliases gmti,getMissingTime
   */
  'get.missing_time'?: string
  /**
   * The number of failed get operations.
   * @aliases gmto,getMissingTotal
   */
  'get.missing_total'?: string
  /**
   * The number of current deletion operations.
   * @aliases idc,indexingDeleteCurrent
   */
  'indexing.delete_current'?: string
  /**
   * The time spent in deletion operations.
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
   * The time spent in indexing operations.
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
   * The number of current merge operations.
   * @aliases mc,mergesCurrent
   */
  'merges.current'?: string
  /**
   * The number of current merging documents.
   * @aliases mcd,mergesCurrentDocs
   */
  'merges.current_docs'?: string
  /**
   * The size of current merge operations.
   * @aliases mcs,mergesCurrentSize
   */
  'merges.current_size'?: string
  /**
   * The number of completed merge operations.
   * @aliases mt,mergesTotal
   */
  'merges.total'?: string
  /**
   * The nuber of merged documents.
   * @aliases mtd,mergesTotalDocs
   */
  'merges.total_docs'?: string
  /**
   * The size of current merges.
   * @aliases mts,mergesTotalSize
   */
  'merges.total_size'?: string
  /**
   * The time spent merging documents.
   * @aliases mtt,mergesTotalTime
   */
  'merges.total_time'?: string
  /**
   * The total number of refreshes.
   */
  'refresh.total'?: string
  /**
   * The time spent in refreshes.
   */
  'refresh.time'?: string
  /**
   * The total nunber of external refreshes.
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
   * The total number of fetch operations.
   * @aliases sfto,searchFetchTotal
   */
  'search.fetch_total'?: string
  /**
   * The number of open search contexts.
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
   * The total number of query phase operations.
   * @aliases sqto,searchQueryTotal
   */
  'search.query_total'?: string
  /**
   * The open scroll contexts.
   * @aliases scc,searchScrollCurrent
   */
  'search.scroll_current'?: string
  /**
   * The time scroll contexts were held open.
   * @aliases scti,searchScrollTime
   */
  'search.scroll_time'?: string
  /**
   * The number of completed scroll contexts.
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
   * The memory used by fixed bit sets for nested object field types and export type filters for types referred in `_parent` fields.
   * @aliases sfbm,fixedBitsetMemory
   */
  'segments.fixed_bitset_memory'?: string
  /**
   * The maximum sequence number.
   * @aliases sqm,maxSeqNo
   */
  'seq_no.max'?: string
  /**
   * The local checkpoint.
   * @aliases sql,localCheckpoint
   */
  'seq_no.local_checkpoint'?: string
  /**
   * The global checkpoint.
   * @aliases sqg,globalCheckpoint
   */
  'seq_no.global_checkpoint'?: string
  /**
   * The number of current warmer operations.
   * @aliases wc,warmerCurrent
   */
  'warmer.current'?: string
  /**
   * The total number of warmer operations.
   * @aliases wto,warmerTotal
   */
  'warmer.total'?: string
  /**
   * The time spent in warmer operations.
   * @aliases wtt,warmerTotalTime
   */
  'warmer.total_time'?: string
  /**
   * The shard data path.
   * @aliases pd,dataPath
   */
  'path.data'?: string
  /**
   * The shard state path.
   * @aliases ps,statsPath
   */
  'path.state'?: string
  /**
   * The number of bulk shard operations.
   * @aliases bto,bulkTotalOperations
   */
  'bulk.total_operations'?: string
  /**
   * The time spent in shard bulk operations.
   * @aliases btti,bulkTotalTime
   */
  'bulk.total_time'?: string
  /**
   * The total size in bytes of shard bulk operations.
   * @aliases btsi,bulkTotalSizeInBytes
   */
  'bulk.total_size_in_bytes'?: string
  /**
   * The average time spent in shard bulk operations.
   * @aliases bati,bulkAvgTime
   */
  'bulk.avg_time'?: string
  /**
   * The average size in bytes of shard bulk operations.
   * @aliases basi,bulkAvgSizeInBytes
   */
  'bulk.avg_size_in_bytes'?: string
}
