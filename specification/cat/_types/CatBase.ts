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
// Cat APIs are sharing many query parameters, those are defined
// in the CommonCatQueryParameters behavior, which every Cat*Request
// API will inherit because extends CatRequestBase.
// Cat*Request APIs will inherit the CommonQueryParameters behavior
// as well, as CatRequestBase extends RequestBase.

import { RequestBase } from "@_types/Base";
import { CommonCatQueryParameters } from "@spec_utils/behaviors";

export class CatRequestBase
  extends RequestBase
  implements CommonCatQueryParameters {}

export enum CatAnomalyDetectorColumn {
  /**
   * For open anomaly detection jobs only, contains messages relating to the
   * selection of a node to run the job.
   * @aliases ae
   */
  assignment_explanation,
  /**
   * The number of bucket results produced by the job.
   * @aliases bc, bucketsCount
   */
  "buckets.count",
  /**
   * Exponential moving average of all bucket processing times, in milliseconds.
   * @aliases btea, bucketsTimeExpAvg
   */
  "buckets.time.exp_avg",
  /**
   * Exponentially-weighted moving average of bucket processing times calculated
   * in a 1 hour time window, in milliseconds.
   * @aliases bteah, bucketsTimeExpAvgHour
   */
  "buckets.time.exp_avg_hour",
  /**
   * Maximum among all bucket processing times, in milliseconds.
   * @aliases btmax, bucketsTimeMax
   */
  "buckets.time.max",
  /**
   * Minimum among all bucket processing times, in milliseconds.
   * @aliases btmin, bucketsTimeMin
   */
  "buckets.time.min",
  /**
   * Sum of all bucket processing times, in milliseconds.
   * @aliases btt, bucketsTimeTotal
   */
  "buckets.time.total",
  /**
   * The number of buckets processed.
   * @aliases db, dataBuckets
   */
  "data.buckets",
  /**
   * The timestamp of the earliest chronologically input document.
   * @aliases der, dataEarliestRecord
   */
  "data.earliest_record",
  /**
   * The number of buckets which did not contain any data.
   * @aliases deb, dataEmptyBuckets */
  "data.empty_buckets",
  /**
   * The number of bytes of input data posted to the anomaly detection job.
   * @aliases dib, dataInputBytes
   */
  "data.input_bytes",
  /**
   * The total number of fields in input documents posted to the anomaly
   * detection job. This count includes fields that are not used in the analysis.
   * However, be aware that if you are using a datafeed, it extracts only the
   * required fields from the documents it retrieves before posting them to the job.
   * @aliases dif, dataInputFields
   */
  "data.input_fields",
  /**
   * The number of input documents posted to the anomaly detection job.
   * @aliases dir, dataInputRecords
   */
  "data.input_records",
  /**
   * The number of input documents with either a missing date field or a date
   * that could not be parsed.
   * @aliases did, dataInvalidDates
   */
  "data.invalid_dates",
  /**
   * The timestamp at which data was last analyzed, according to server time.
   * @aliases dl, dataLast
   */
  "data.last",
  /**
   * The timestamp of the last bucket that did not contain any data.
   * @aliases dleb, dataLastEmptyBucket
   */
  "data.last_empty_bucket",
  /**
   * The timestamp of the last bucket that was considered sparse.
   * @aliases dlsb, dataLastSparseBucket
   */
  "data.last_sparse_bucket",
  /**
   * The timestamp of the latest chronologically input document.
   * @aliases dlr, dataLatestRecord
   */
  "data.latest_record",
  /**
   * The number of input documents that are missing a field that the anomaly
   * detection job is configured to analyze. Input documents with missing fields
   * are still processed because it is possible that not all fields are missing.
   * @aliases dmf, dataMissingFields */
  "data.missing_fields",
  /**
   * The number of input documents that have a timestamp chronologically
   * preceding the start of the current anomaly detection bucket offset by the
   * latency window. This information is applicable only when you provide data
   * to the anomaly detection job by using the post data API. These out of order
   * documents are discarded, since jobs require time series data to be in
   * ascending chronological order.
   * @aliases doot, dataOutOfOrderTimestamps
   */
  "data.out_of_order_timestamps",
  /**
   * The total number of fields in all the documents that have been processed by
   * the anomaly detection job. Only fields that are specified in the detector
   * configuration object contribute to this count. The timestamp is not
   * included in this count.
   * @aliases dpf, dataProcessedFields
   */
  "data.processed_fields",
  /**
   * The number of input documents that have been processed by the anomaly
   * detection job. This value includes documents with missing fields, since
   * they are nonetheless analyzed. If you use datafeeds and have aggregations
   * in your search query, the processed record count is the number of
   * aggregation results processed, not the number of Elasticsearch documents.
   * @aliases dpr, dataProcessedRecords
   */
  "data.processed_records",
  /**
   * The number of buckets that contained few data points compared to the
   * expected number of data points.
   * @aliases dsb, dataSparseBuckets
   */
  "data.sparse_buckets",
  /**
   * The average memory usage in bytes for forecasts related to the anomaly
   * detection job.
   * @aliases fmavg, forecastsMemoryAvg
   */
  "forecasts.memory.avg",
  /**
   * The maximum memory usage in bytes for forecasts related to the anomaly
   * detection job.
   * @aliases fmmax, forecastsMemoryMax
   */
  "forecasts.memory.max",
  /**
   * The minimum memory usage in bytes for forecasts related to the anomaly
   * detection job.
   * @aliases fmmin, forecastsMemoryMin
   */
  "forecasts.memory.min",
  /**
   * The total memory usage in bytes for forecasts related to the anomaly
   * detection job.
   * @aliases fmt, forecastsMemoryTotal
   */
  "forecasts.memory.total",
  /**
   * The average number of `m`odel_forecast` documents written for forecasts
   * related to the anomaly detection job.
   * @aliases fravg, forecastsRecordsAvg
   */
  "forecasts.records.avg",
  /**
   * The maximum number of `model_forecast` documents written for forecasts
   * related to the anomaly detection job.
   * @aliases frmax, forecastsRecordsMax
   */
  "forecasts.records.max",
  /**
   * The minimum number of `model_forecast` documents written for forecasts
   * related to the anomaly detection job.
   * @aliases frmin, forecastsRecordsMin
   */
  "forecasts.records.min",
  /**
   * The total number of `model_forecast` documents written for forecasts
   * related to the anomaly detection job.
   * @aliases frt, forecastsRecordsTotal
   */
  "forecasts.records.total",
  /**
   * The average runtime in milliseconds for forecasts related to the anomaly
   * detection job.
   * @aliases ftavg, forecastsTimeAvg
   */
  "forecasts.time.avg",
  /**
   * The maximum runtime in milliseconds for forecasts related to the anomaly
   * detection job.
   * @aliases ftmax, forecastsTimeMax
   */
  "forecasts.time.max",
  /**
   * The minimum runtime in milliseconds for forecasts related to the anomaly
   * detection job.
   * @aliases ftmin, forecastsTimeMin
   */
  "forecasts.time.min",
  /**
   * The total runtime in milliseconds for forecasts related to the anomaly
   * detection job.
   * @aliases ftt, forecastsTimeTotal
   */
  "forecasts.time.total",
  /**
   * The number of individual forecasts currently available for the job.
   * @aliases ft, forecastsTotal
   */
  "forecasts.total",
  /** Identifier for the anomaly detection job. */
  id,
  /**
   * The number of buckets for which new entities in incoming data were not
   * processed due to insufficient model memory.
   * @aliases mbaf, modelBucketAllocationFailures
   */
  "model.bucket_allocation_failures",
  /**
   * The number of by field values that were analyzed by the models. This value
   * is cumulative for all detectors in the job.
   * @aliases mbf, modelByFields
   */
  "model.by_fields",
  /**
   * The number of bytes of memory used by the models. This is the maximum value
   * since the last time the model was persisted. If the job is closed, this
   * value indicates the latest size.
   * @aliases mb, modelBytes
   */
  "model.bytes",
  /**
   * The number of bytes over the high limit for memory usage at the last
   * allocation failure.
   * @aliases mbe, modelBytesExceeded
   */
  "model.bytes_exceeded",
  /**
   * The status of categorization for the job: `ok` or `warn`. If `ok`,
   * categorization is performing acceptably well (or not being used at all). If
   * `warn`, categorization is detecting a distribution of categories that
   * suggests the input data is inappropriate for categorization. Problems could
   * be that there is only one category, more than 90% of categories are rare,
   * the number of categories is greater than 50% of the number of categorized
   * documents, there are no frequently matched categories, or more than 50% of
   * categories are dead.
   * @aliases mcs, modelCategorizationStatus
   */
  "model.categorization_status",
  /**
   * The number of documents that have had a field categorized.
   * @aliases mcdc, modelCategorizedDocCount */
  "model.categorized_doc_count",
  /**
   * The number of categories created by categorization that will never be
   * assigned again because another category’s definition makes it a superset of
   * the dead category. Dead categories are a side effect of the way
   * categorization has no prior training.
   * @aliases mdcc, modelDeadCategoryCount
   */
  "model.dead_category_count",
  /**
   * The number of times that categorization wanted to create a new category but
   * couldn’t because the job had hit its model memory limit. This count does
   * not track which specific categories failed to be created. Therefore, you
   * cannot use this value to determine the number of unique categories that
   * were missed.
   * @aliases mdcc, modelFailedCategoryCount */
  "model.failed_category_count",
  /**
   * The number of categories that match more than 1% of categorized documents.
   * @aliases mfcc, modelFrequentCategoryCount
   */
  "model.frequent_category_count",
  /**
   * The timestamp when the model stats were gathered, according to server time.
   * @aliases mlt, modelLogTime
   */
  "model.log_time",
  /**
   * The timestamp when the model stats were gathered, according to server time.
   * @aliases mml, modelMemoryLimit
   */
  "model.memory_limit",
  /**
   * The status of the mathematical models: `ok`, `soft_limit`, or `hard_limit`.
   * If `ok`, the models stayed below the configured value. If `soft_limit`, the
   * models used more than 60% of the configured memory limit and older unused
   * models will be pruned to free up space. Additionally, in categorization jobs
   * no further category examples will be stored. If `hard_limit`, the models
   * used more space than the configured memory limit. As a result, not all
   * incoming data was processed.
   * @aliases mms, modelMemoryStatus
   */
  "model.memory_status",
  /**
   * The number of over field values that were analyzed by the models. This
   * value is cumulative for all detectors in the job.
   * @aliases mof, modelOverFields
   */
  "model.over_fields",
  /**
   * The number of partition field values that were analyzed by the models. This
   * value is cumulative for all detectors in the job.
   * @aliases mpf, modelPartitionFields
   */
  "model.partition_fields",
  /**
   * The number of categories that match just one categorized document.
   * @aliases mrcc, modelRareCategoryCount
   */
  "model.rare_category_count",
  /**
   * The timestamp of the last record when the model stats were gathered.
   * @aliases mt, modelTimestamp
   */
  "model.timestamp",
  /**
   * The number of categories created by categorization.
   * @aliases mtcc, modelTotalCategoryCount */
  "model.total_category_count",
  /**
   * The network address of the node that runs the job. This information is
   * available only for open jobs.
   * @aliases na, nodeAddress
   */
  "node.address",
  /**
   * The ephemeral ID of the node that runs the job. This information is
   * available only for open jobs.
   * @aliases ne, nodeEphemeralId
   */
  "node.ephemeral_id",
  /**
   * The unique identifier of the node that runs the job. This information is
   * available only for open jobs.
   * @aliases ni, nodeId
   */
  "node.id",
  /**
   * The name of the node that runs the job. This information is available only
   * for open jobs.
   * @aliases nn, nodeName
   */
  "node.name",
  /**
   * For open jobs only, the elapsed time for which the job has been open.
   * @aliases ot
   */
  opened_time,
  /**
   * The status of the anomaly detection job: `closed`, `closing`, `failed`,
   * `opened`, or `opening`. If `closed`, the job finished successfully with its
   * model state persisted. The job must be opened before it can accept further
   * data. If `closing`, the job close action is in progress and has not yet
   * completed. A closing job cannot accept further data. If `failed`, the job
   * did not finish successfully due to an error. This situation can occur due
   * to invalid input data, a fatal error occurring during the analysis, or an
   * external interaction such as the process being killed by the Linux out of
   * memory (OOM) killer. If the job had irrevocably failed, it must be force
   * closed and then deleted. If the datafeed can be corrected, the job can be
   * closed and then re-opened. If `opened`, the job is available to receive and
   * process data. If `opening`, the job open action is in progress and has not
   * yet completed.
   * @aliases s
   */
  state,
}
export type CatAnomalyDetectorColumns =
  | CatAnomalyDetectorColumn
  | CatAnomalyDetectorColumn[];
export enum CatDatafeedColumn {
  /**
   * For started datafeeds only, contains messages relating to the selection of
   * a node.
   * @aliases assignment_explanation
   */
  ae,
  /**
   * The number of buckets processed.
   * @aliases buckets.count, bucketsCount
   */
  bc,
  /** A numerical character string that uniquely identifies the datafeed. */
  id,
  /**
   * For started datafeeds only, the network address of the node where the
   * datafeed is started.
   * @aliases node.address, nodeAddress
   */
  na,
  /**
   * For started datafeeds only, the ephemeral ID of the node where the
   * datafeed is started.
   * @aliases node.ephemeral_id, nodeEphemeralId
   */
  ne,
  /**
   * For started datafeeds only, the unique identifier of the node where the
   * datafeed is started.
   * @aliases node.id, nodeId
   */
  ni,
  /**
   * For started datafeeds only, the name of the node where the datafeed is
   * started.
   * @aliases node.name, nodeName
   */
  nn,
  /**
   * The average search time per bucket, in milliseconds.
   * @aliases search.bucket_avg, searchBucketAvg
   */
  sba,
  /**
   * The number of searches run by the datafeed.
   * @aliases search.count, searchCount */
  sc,
  /**
   * The exponential average search time per hour, in milliseconds.
   * @aliases search.exp_avg_hour, searchExpAvgHour
   */
  seah,
  /**
   * The total time the datafeed spent searching, in milliseconds.
   * @aliases search.time, searchTime */
  st,
  /**
   * The status of the datafeed: `starting`, `started`, `stopping`, or `stopped`.
   * If `starting`, the datafeed has been requested to start but has not yet
   * started. If `started`, the datafeed is actively receiving data. If
   * `stopping`, the datafeed has been requested to stop gracefully and is
   * completing its final action. If `stopped`, the datafeed is stopped and will
   * not receive data until it is re-started.
   * @aliases state
   */
  s,
}

export enum CatDfaColumn {
  /**
   * Contains messages relating to the selection of a node.
   * @aliases ae
   */
  assignment_explanation,
  /**
   * The time when the data frame analytics job was created.
   * @aliases ct, createTime
   */
  create_time,
  /**
   * A description of a job.
   * @aliases d
   */
  description,
  /**
   * Name of the destination index.
   * @aliases di, destIndex
   */
  dest_index,
  /**
   * Contains messages about the reason why a data frame analytics job failed.
   * @aliases fr, failureReason
   */
  failure_reason,
  /**
   * Identifier for the data frame analytics job.
   */
  id,
  /**
   * The approximate maximum amount of memory resources that are permitted for
   * the data frame analytics job.
   * @aliases mml, modelMemoryLimit
   */
  model_memory_limit,
  /**
   * The network address of the node that the data frame analytics job is
   * assigned to.
   * @aliases na, nodeAddress
   */
  "node.address",
  /**
   * The ephemeral ID of the node that the data frame analytics job is assigned
   * to.
   * @aliases ne, nodeEphemeralId
   */
  "node.ephemeral_id",
  /**
   * The unique identifier of the node that the data frame analytics job is
   * assigned to.
   * @aliases ni, nodeId
   */
  "node.id",
  /**
   * The name of the node that the data frame analytics job is assigned to.
   * @aliases nn, nodeName
   */
  "node.name",
  /**
   * The progress report of the data frame analytics job by phase.
   * @aliases p
   */
  progress,
  /**
   * Name of the source index.
   * @aliases si, sourceIndex
   */
  source_index,
  /**
   * Current state of the data frame analytics job.
   * @aliases s
   */
  state,
  /**
   * The type of analysis that the data frame analytics job performs.
   * @aliases t
   */
  type,
  /**
   * The Elasticsearch version number in which the data frame analytics job was
   * created.
   * @aliases v
   */
  version,
}

/** @non_exhaustive */
export enum CatNodeColumn {
  /**
   * The Elasticsearch build hash. For example: `5c03844`.
   * @aliases b
   */
  build,
  /**
   * The size of completion. For example: `0b`.
   * @aliases cs, completionSize
   */
  "completion.size",
  /**
   * The percentage of recent system CPU used.
   */
  cpu,
  /**
   * The available disk space. For example: `198.4gb`.
   * @aliases d, disk, diskAvail
   */
  "disk.avail",
  /**
   * The total disk space. For example: `458.3gb`.
   * @aliases dt, diskTotal
   */
  "disk.total",
  /**
   * The used disk space. For example: `259.8gb`.
   * @aliases du, diskUsed
   */
  "disk.used",
  /**
   * The percentage of disk space used.
   * @aliases dup, diskUsedPercent
   */
  "disk.used_percent",
  /**
   * The number of fielddata cache evictions.
   * @aliases fe, fielddataEvictions
   */
  "fielddata.evictions",
  /**
   * The fielddata cache memory used. For example: `0b`.
   * @aliases fm, fielddataMemory
   */
  "fielddata.memory_size",
  /**
   * The number of file descriptors used.
   * @aliases fdc, fileDescriptorCurrent
   */
  "file_desc.current",
  /**
   * The maximum number of file descriptors.
   * @aliases  fdm, fileDescriptorMax
   */
  "file_desc.max",
  /**
   * The percentage of file descriptors used.
   * @aliases fdp, fileDescriptorPercent
   */
  "file_desc.percent",
  /**
   * The number of flushes.
   * @aliases ft, flushTotal
   */
  "flush.total",
  /**
   * The amount of time spent in flush.
   * @aliases ftt, flushTotalTime
   */
  "flush.total_time",
  /**
   * The number of current get operations.
   * @aliases gc, getCurrent
   */
  "get.current",
  /**
   * The time spent in successful get operations. For example: `14ms`.
   * @aliases geti, getExistsTime
   */
  "get.exists_time",
  /**
   * The number of successful get operations.
   * @aliases geto, getExistsTotal
   */
  "get.exists_total",
  /**
   * The time spent in failed get operations. For example: `0s`.
   * @aliases gmti, getMissingTime
   */
  "get.missing_time",
  /**
   * The number of failed get operations.
   * @aliases gmto, getMissingTotal
   */
  "get.missing_total",
  /**
   * The amount of time spent in get operations. For example: `14ms`.
   * @aliases gti, getTime
   */
  "get.time",
  /**
   * The number of get operations.
   * @aliases gto, getTotal
   */
  "get.total",
  /**
   * The used heap size. For example: `311.2mb`.
   * @aliases hc, heapCurrent
   */
  "heap.current",
  /**
   * The total heap size. For example: `4gb`.
   * @aliases hm, heapMax
   */
  "heap.max",
  /**
   * The used percentage of total allocated Elasticsearch JVM heap.
   * This value reflects only the Elasticsearch process running within the operating system and is the most direct indicator of its JVM, heap, or memory resource performance.
   * @aliases hp, heapPercent
   */
  "heap.percent",
  /**
   * The bound HTTP address.
   * @aliases http
   */
  http_address,
  /**
   * The identifier for the node.
   * @aliases nodeId
   */
  id,
  /**
   * The number of current deletion operations.
   * @aliases idc, indexingDeleteCurrent
   */
  "indexing.delete_current",
  /**
   * The time spent in deletion operations. For example: `2ms`.
   * @aliases idti, indexingDeleteTime
   */
  "indexing.delete_time",
  /**
   * The number of deletion operations.
   * @aliases idto, indexingDeleteTotal
   */
  "indexing.delete_total",
  /**
   * The number of current indexing operations.
   * @aliases iic, indexingIndexCurrent
   */
  "indexing.index_current",
  /**
   * The number of failed indexing operations.
   * @aliases iif, indexingIndexFailed
   */
  "indexing.index_failed",
  /**
   * The number of indexing operations that failed due to version conflict.
   * @aliases iifvc, indexingIndexFailedDueToVersionConflict
   */
  "indexing.index_failed_due_to_version_conflict",
  /**
   * The time spent in indexing operations. For example: `134ms`.
   * @aliases iiti, indexingIndexTime
   */
  "indexing.index_time",
  /**
   * The number of indexing operations.
   * @aliases iito, indexingIndexTotal
   */
  "indexing.index_total",
  /**
   * The IP address.
   * @aliases i
   */
  ip,
  /**
   * The Java version. For example: `1.8.0`.
   * @aliases j
   */
  jdk,
  /**
   * The most recent load average. For example: `0.22`.
   * @aliases l
   */
  load_1m,
  /**
   * The load average for the last five minutes. For example: `0.78`.
   * @aliases l
   */
  load_5m,
  /**
   * The load average for the last fifteen minutes. For example: `1.24`.
   * @aliases l
   */
  load_15m,
  /**
   * The number of mappings, including runtime and object fields.
   * @aliases mtc, mappingsTotalCount
   */
  "mappings.total_count",
  /**
   * The estimated heap overhead, in bytes, of mappings on this node, which allows for 1KiB of heap for every mapped field.
   * @aliases mteo, mappingsTotalEstimatedOverheadInBytes
   */
  "mappings.total_estimated_overhead_in_bytes",
  /**
   * Indicates whether the node is the elected master node.
   * Returned values include `*` (elected master) and `-` (not elected master).
   * @aliases m
   */
  master,
  /**
   * The number of current merge operations.
   * @aliases mc, mergesCurrent
   */
  "merges.current",
  /**
   * The number of current merging documents.
   * @aliases mcd, mergesCurrentDocs
   */
  "merges.current_docs",
  /**
   * The size of current merges. For example: `0b`.
   * @aliases mcs, mergesCurrentSize
   */
  "merges.current_size",
  /**
   * The number of completed merge operations.
   * @aliases mt, mergesTotal
   */
  "merges.total",
  /**
   * The number of merged documents.
   * @aliases  mtd, mergesTotalDocs
   */
  "merges.total_docs",
  /**
   * The total size of merges. For example: `0b`.
   * @aliases mts, mergesTotalSize
   */
  "merges.total_size",
  /**
   * The time spent merging documents. For example: `0s`.
   * @aliases mtt, mergesTotalTime
   */
  "merges.total_time",
  /**
   * The node name.
   * @aliases n
   */
  name,
  /**
   * The roles of the node.
   * Returned values include `c` (cold node), `d` (data node), `f` (frozen node), `h` (hot node), `i` (ingest node), `l` (machine learning node), `m` (master-eligible node), `r` (remote cluster client node), `s` (content node), `t` (transform node), `v` (voting-only node), `w` (warm node), and `-` (coordinating node only).
   * For example, `dim` indicates a master-eligible data and ingest node.
   * @aliases r, role, nodeRole
   */
  "node.role",
  /**
   * The process identifier.
   * @aliases p
   */
  pid,
  /**
   * The bound transport port number.
   * @aliases po
   */
  port,
  /**
   * The used query cache memory. For example: `0b`.
   * @aliases qcm, queryCacheMemory
   */
  "query_cache.memory_size",
  /**
   * The number of query cache evictions.
   * @aliases qce, queryCacheEvictions
   */
  "query_cache.evictions",
  /**
   * The query cache hit count.
   * @aliases qchc, queryCacheHitCount
   */
  "query_cache.hit_count",
  /**
   * The query cache miss count.
   * @aliases qcmc, queryCacheMissCount
   */
  "query_cache.miss_count",
  /**
   * The used total memory. For example: `513.4mb`.
   * @aliases rc, ramCurrent
   */
  "ram.current",
  /**
   * The total memory. For example: `2.9gb`.
   * @aliases rm, ramMax
   */
  "ram.max",
  /**
   * The used percentage of the total operating system memory.
   * This reflects all processes running on the operating system instead of only Elasticsearch and is not guaranteed to correlate to its performance.
   * @aliases rp, ramPercent
   */
  "ram.percent",
  /**
   * The number of refresh operations.
   * @aliases rto, refreshTotal
   */
  "refresh.total",
  /**
   * The time spent in refresh operations. For example: `91ms`.
   * @aliases rti, refreshTime
   */
  "refresh.time",
  /**
   * The used request cache memory. For example: `0b`.
   * @aliases rcm, requestCacheMemory
   */
  "request_cache.memory_size",
  /**
   * The number of request cache evictions.
   * @aliases rce, requestCacheEvictions
   */
  "request_cache.evictions",
  /**
   * The request cache hit count.
   * @aliases rchc, requestCacheHitCount
   */
  "request_cache.hit_count",
  /**
   * The request cache miss count.
   * @aliases rcmc, requestCacheMissCount
   */
  "request_cache.miss_count",
  /**
   * The number of total script compilations.
   * @aliases scrcc, scriptCompilations
   */
  "script.compilations",
  /**
   * The number of total compiled scripts evicted from cache.
   * @aliases scrce, scriptCacheEvictions
   */
  "script.cache_evictions",
  /**
   * The number of current fetch phase operations.
   * @aliases sfc, searchFetchCurrent
   */
  "search.fetch_current",
  /**
   * The time spent in fetch phase. For example: `37ms`.
   * @aliases sfti, searchFetchTime
   */
  "search.fetch_time",
  /**
   * The number of fetch operations.
   * @aliases sfto, searchFetchTotal
   */
  "search.fetch_total",
  /**
   * The number of open search contexts.
   * @aliases so, searchOpenContexts
   */
  "search.open_contexts",
  /**
   * The number of current query phase operations.
   * @aliases sqc, searchQueryCurrent
   */
  "search.query_current",
  /**
   * The time spent in query phase. For example: `43ms`.
   * @aliases sqti, searchQueryTime
   */
  "search.query_time",
  /**
   * The number of query operations.
   * @aliases  sqto, searchQueryTotal
   */
  "search.query_total",
  /**
   * The number of open scroll contexts.
   * @aliases scc, searchScrollCurrent
   */
  "search.scroll_current",
  /**
   * The amount of time scroll contexts were held open. For example: `2m`.
   * @aliases scti, searchScrollTime
   */
  "search.scroll_time",
  /**
   * The number of completed scroll contexts.
   * @aliases scto, searchScrollTotal
   */
  "search.scroll_total",
  /**
   * The number of segments.
   * @aliases sc, segmentsCount
   */
  "segments.count",
  /**
   * The memory used by fixed bit sets for nested object field types and type filters for types referred in join fields.
   * For example: `1.0kb`.
   * @aliases sfbm, fixedBitsetMemory
   */
  "segments.fixed_bitset_memory",
  /**
   * The memory used by the index writer. For example: `18mb`.
   * @aliases siwm, segmentsIndexWriterMemory
   */
  "segments.index_writer_memory",
  /**
   * The memory used by segments. For example: `1.4kb`.
   * @aliases sm, segmentsMemory
   */
  "segments.memory",
  /**
   * The memory used by the version map. For example: `1.0kb`.
   * @aliases svmm, segmentsVersionMapMemory
   */
  "segments.version_map_memory",
  /**
   * The number of shards assigned.
   * @aliases sstc, shards, shardStatsTotalCount
   */
  "shard_stats.total_count",
  /**
   * The number of current suggest operations.
   * @aliases  suc, suggestCurrent
   */
  "suggest.current",
  /**
   * The time spent in suggest operations.
   * @aliases suti, suggestTime
   */
  "suggest.time",
  /**
   * The number of suggest operations.
   * @aliases suto, suggestTotal
   */
  "suggest.total",
  /**
   * The amount of node uptime. For example: `17.3m`.
   * @aliases u
   */
  uptime,
  /**
   * The Elasticsearch version. For example: `9.0.0`.
   * @aliases v
   */
  version,
}

/** @non_exhaustive */
export enum CatRecoveryColumn {
  /**
   * The name of the index.
   * @aliases i, idx
   */
  index,
  /**
   * The name of the shard.
   * @aliases s, sh
   */
  shard,
  /**
   * The recovery time elasped.
   * @aliases t, ti, primaryOrReplica
   */
  time,
  /**
   * The type of recovery, from a peer or a snapshot.
   */
  type,
  /**
   * The stage of the recovery. Returned values are: `INIT`, `INDEX`: recovery of lucene files, either reusing local ones are copying new ones, `VERIFY_INDEX`: potentially running check index, `TRANSLOG`: starting up the engine, replaying the translog, `FINALIZE`: performing final task after all translog ops have been done, `DONE`
   * @aliases st
   */
  stage,
  /**
   * The host address the index is moving from.
   * @aliases shost
   */
  source_host,
  /**
   * The node name the index is moving from.
   * @aliases snode
   */
  source_node,
  /**
   * The host address the index is moving to.
   * @aliases thost
   */
  target_host,
  /**
   * The node name the index is moving to.
   * @aliases tnode
   */
  target_node,
  /**
   * The name of the repository being used. if not relevant 'n/a'.
   * @aliases tnode
   */
  repository,
  /**
   * The name of the snapshot being used. if not relevant 'n/a'.
   * @aliases snap
   */
  snapshot,
  /**
   * The total number of files to recover.
   * @aliases f
   */
  files,
  /**
   * The number of files currently recovered.
   * @aliases fr
   */
  files_recovered,
  /**
   * The percentage of files currently recovered.
   * @aliases fp
   */
  files_percent,
  /**
   * The total number of files.
   * @aliases tf
   */
  files_total,
  /**
   * The total number of bytes to recover.
   * @aliases b
   */
  bytes,
  /**
   * Total number of bytes currently recovered.
   * @aliases br
   */
  bytes_recovered,
  /**
   * The percentage of bytes currently recovered.
   * @aliases bp
   */
  bytes_percent,
  /**
   * The total number of bytes.
   * @aliases tb
   */
  bytes_total,
  /**
   * The total number of translog ops to recover.
   * @aliases to
   */
  translog_ops,
  /**
   * The total number of translog ops currently recovered.
   * @aliases tor
   */
  translog_ops_recovered,
  /**
   * The percentage of translog ops currently recovered.
   * @aliases top
   */
  translog_ops_percent,
  /**
   * The start time of the recovery operation.
   * @aliases start
   */
  start_time,
  /**
   * The start time of the recovery operation in eopch milliseconds.
   * @aliases start_millis
   */
  start_time_millis,
  /**
   * The end time of the recovery operation. If ongoing '1970-01-01T00:00:00.000Z'
   * @aliases stop
   */
  stop_time,
  /**
   * The end time of the recovery operation in eopch milliseconds. If ongoing '0'
   * @aliases stop_millis
   */
  stop_time_millis,
}

/** @non_exhaustive */
export enum CatSegmentsColumn {
  /**
   * The name of the index.
   * @aliases i, idx
   */
  index,
  /**
   * The name of the shard.
   * @aliases s, sh
   */
  shard,
  /**
   * The shard type. Returned values are 'primary' or 'replica'.
   * @aliases p, pr, primaryOrReplica
   */
  prirep,
  /**
   * IP address of the segment’s shard, such as '127.0.1.1'.
   */
  ip,
  /**
   * The name of the segment, such as '_0'. The segment name is derived from the segment generation and used internally to create file names in the directory of the shard.
   */
  segment,
  /**
   * Generation number, such as '0'. Elasticsearch increments this generation number for each segment written. Elasticsearch then uses this number to derive the segment name.
   */
  generation,
  /**
   * The number of documents as reported by Lucene. This excludes deleted documents and counts any [nested documents](https://www.elastic.co/docs/reference/elasticsearch/mapping-reference/nested) separately from their parents. It also excludes documents which were indexed recently and do not yet belong to a segment.
   */
  "docs.count",
  /**
   * The number of deleted documents as reported by Lucene, which may be higher or lower than the number of delete operations you have performed. This number excludes deletes that were performed recently and do not yet belong to a segment. Deleted documents are cleaned up by the [automatic merge process](https://www.elastic.co/docs/reference/elasticsearch/index-settings/merge) if it makes sense to do so. Also, Elasticsearch creates extra deleted documents to internally track the recent history of operations on a shard.
   */
  "docs.deleted",
  /**
   * The disk space used by the segment, such as '50kb'.
   */
  size,
  /**
   * The bytes of segment data stored in memory for efficient search, such as '1264'. A value of '-1' indicates Elasticsearch was unable to compute this number.
   */
  "size.memory",
  /**
   * If 'true', the segments is synced to disk. Segments that are synced can survive a hard reboot. If 'false', the data from uncommitted segments is also stored in the transaction log so that Elasticsearch is able to replay changes on the next start.
   */
  committed,
  /**
   * If 'true', the segment is searchable. If 'false', the segment has most likely been written to disk but needs a [refresh](https://www.elastic.co/docs/api/doc/elasticsearch/operation/operation-indices-refresh) to be searchable.
   */
  searchable,
  /**
   * The version of Lucene used to write the segment.
   */
  version,
  /**
   * If 'true', the segment is stored in a compound file. This means Lucene merged all files from the segment in a single file to save file descriptors.
   */
  compound,
  /**
   * The ID of the node, such as 'k0zy'.
   */
  id,
}

/** @non_exhaustive */
export enum CatSnapshotsColumn {
  /**
   * The ID of the snapshot, such as 'snap1'.
   * @aliases snapshot
   */
  id,
  /**
   * The name of the repository, such as 'repo1'.
   * @aliases re, repo
   */
  repository,
  /**
   * State of the snapshot process. Returned values are: 'FAILED': The snapshot process failed. 'INCOMPATIBLE': The snapshot process is incompatible with the current cluster version. 'IN_PROGRESS': The snapshot process started but has not completed. 'PARTIAL': The snapshot process completed with a partial success. 'SUCCESS': The snapshot process completed with a full success.
   * @aliases s
   */
  status,
  /**
   * The [unix epoch time](https://en.wikipedia.org/wiki/Unix_time) at which the snapshot process started.
   * @aliases ste, startEpoch
   */
  start_epoch,
  /**
   * 'HH:MM:SS' time at which the snapshot process started.
   * @aliases sti, startTime
   */
  start_time,
  /**
   * The [unix epoch time](https://en.wikipedia.org/wiki/Unix_time) at which the snapshot process ended.
   * @aliases ete, endEpoch
   */
  end_epoch,
  /**
   * 'HH:MM:SS' time at which the snapshot process ended.
   * @aliases eti, endTime
   */
  end_time,
  /**
   * The time it took the snapshot process to complete in [time units](https://www.elastic.co/docs/reference/elasticsearch/rest-apis/api-conventions#time-units).
   * @aliases dur
   */
  duration,
  /**
   * The number of indices in the snapshot.
   * @aliases i
   */
  indices,
  /**
   * The number of successful shards in the snapshot.
   * @aliases ss
   */
  successful_shards,
  /**
   * The number of failed shards in the snapshot.
   * @aliases fs
   */
  failed_shards,
  /**
   * The total number of shards in the snapshot.
   * @aliases ts
   */
  total_shards,
  /**
   * The reason for any snapshot failures.
   * @aliases r
   */
  reason,
}

/** @non_exhaustive */
export enum CatAliasesColumn {
  /**
   * The name of the alias.
   * @aliases a
   */
  alias,
  /**
   * The name of the index the alias points to.
   * @aliases i, idx
   */
  index,
  /**
   * The filter applied to the alias.
   * @aliases f, fi
   */
  filter,
  /**
   * Index routing value for the alias.
   * @aliases ri, routingIndex
   */
  "routing.index",
  /**
   * Search routing value for the alias.
   * @aliases rs, routingSearch
   */
  "routing.search",
  /**
   * Indicates if the index is the write index for the alias.
   * @aliases w, isWriteIndex
   */
  is_write_index,
}

/** @non_exhaustive */
export enum CatAllocationColumn {
  /**
   * The number of shards on the node.
   * @aliases s
   */
  shards,
  /**
   * The number of shards scheduled to be moved elsewhere in the cluster.
   */
  "shards.undesired",
  /**
   * The sum of index write load forecasts.
   * @aliases wlf, writeLoadForecast
   */
  "write_load.forecast",
  /**
   * The sum of shard size forecasts.
   * @aliases dif, diskIndicesForecast
   */
  "disk.indices.forecast",
  /**
   * The disk space used by Elasticsearch indices.
   * @aliases di, diskIndices
   */
  "disk.indices",
  /**
   * The total disk space used on the node.
   * @aliases du,diskUsed
   */
  "disk.used",
  /**
   * The available disk space on the node.
   * @aliases da, diskAvail
   */
  "disk.avail",
  /**
   * The total disk capacity of all volumes on the node.
   * @aliases dt, diskTotal
   */
  "disk.total",
  /**
   * The percentage of disk space used on the node.
   * @aliases dp, diskPercent
   */
  "disk.percent",
  /**
   * IThe host of the node.
   * @aliases h
   */
  host,
  /**
   * The IP address of the node.
   */
  ip,
  /**
   * The name of the node.
   * @aliases n
   */
  node,
  /**
   * The roles assigned to the node.
   * @aliases r, role, nodeRole
   */
  "node.role",
}

/** @non_exhaustive */
export enum CatComponentColumn {
  /**
   * The name of the component template.
   * @aliases n
   */
  name,
  /**
   * The version number of the component template.
   * @aliases v
   */
  version,
  /**
   * The number of aliases in the component template.
   * @aliases a
   */
  alias_count,
  /**
   * The number of mappings in the component template.
   * @aliases m
   */
  mapping_count,
  /**
   * The number of settings in the component template.
   * @aliases s
   */
  settings_count,
  /**
   * The number of metadata entries in the component template.
   * @aliases me
   */
  metadata_count,
  /**
   * The index templates that include this component template.
   * @aliases i
   */
  included_in,
}

/** @non_exhaustive */
export enum CatCountColumn {
  /**
   * The Unix epoch time in seconds since 1970-01-01 00:00:00.
   * @aliases t,time
   */
  epoch,
  /**
   * The current time in HH:MM:SS format.
   * @aliases ts,hms,hhmmss
   */
  timestamp,
  /**
   * The document count in the cluster or index.
   * @aliases dc,docs.count,docsCount
   */
  count,
}

/** @non_exhaustive */
export enum CatFieldDataColumn {
  /**
   * The node ID.
   */
  id,
  /**
   * The host name of the node.
   * @aliases h
   */
  host,
  /**
   * The IP address of the node.
   */
  ip,
  /**
   * The node name.
   * @aliases n
   */
  node,
  /**
   * The field name.
   * @aliases f
   */
  field,
  /**
   * The field data usage.
   * @aliases s
   */
  size,
}

export type CatDfaColumns = CatDfaColumn | CatDfaColumn[];
export type CatDatafeedColumns = CatDatafeedColumn | CatDatafeedColumn[];
export type CatNodeColumns = CatNodeColumn | CatNodeColumn[];
export type CatRecoveryColumns = CatRecoveryColumn | CatRecoveryColumn[];
export type CatSegmentsColumns = CatSegmentsColumn | CatSegmentsColumn[];
export type CatSnapshotsColumns = CatSnapshotsColumn | CatSnapshotsColumn[];
export type CatAliasesColumns = CatAliasesColumn | CatAliasesColumn[];
export type CatAllocationColumns = CatAllocationColumn | CatAllocationColumn[];
export type CatComponentColumns = CatComponentColumn | CatComponentColumn[];
export type CatCountColumns = CatCountColumn | CatCountColumn[];
export type CatFieldDataColumns = CatFieldDataColumn | CatFieldDataColumn[];

export enum CatTrainedModelsColumn {
  /**
   * The time when the trained model was created.
   * @aliases ct
   */
  create_time,
  /**
   * Information on the creator of the trained model.
   * @aliases c, createdBy
   */
  created_by,
  /**
   * Identifier for the data frame analytics job that created the model. Only
   * displayed if it is still available.
   * @aliases df, dataFrameAnalytics, dfid
   */
  data_frame_analytics_id,
  /**
   * The description of the trained model.
   * @aliases d
   */
  description,
  /**
   * The estimated heap size to keep the trained model in memory.
   * @aliases hs, modelHeapSize
   */
  heap_size,
  /**
   * Identifier for the trained model.
   */
  id,
  /**
   * The total number of documents that are processed by the model.
   * @aliases ic, ingestCount
   */
  "ingest.count",
  /**
   * The total number of document that are currently being handled by the
   * trained model.
   * @aliases icurr, ingestCurrent
   */
  "ingest.current",
  /**
   * The total number of failed ingest attempts with the trained model.
   * @aliases if, ingestFailed
   */
  "ingest.failed",
  /**
   * The total number of ingest pipelines that are referencing the trained
   * model.
   * @aliases ip, ingestPipelines
   */
  "ingest.pipelines",
  /**
   * The total time that is spent processing documents with the trained model.
   * @aliases it, ingestTime
   */
  "ingest.time",
  /**
   * The license level of the trained model.
   * @aliases l
   */
  license,
  /**
   * The estimated number of operations to use the trained model. This number
   * helps measuring the computational complexity of the model.
   * @aliases o, modelOperations
   */
  operations,
  /**
   * The Elasticsearch version number in which the trained model was created.
   * @aliases v
   */
  version,
}
export type CatTrainedModelsColumns =
  | CatTrainedModelsColumn
  | CatTrainedModelsColumn[];

export enum CatTransformColumn {
  /**
   * The timestamp when changes were last detected in the source indices.
   * @aliases cldt
   */
  changes_last_detection_time,
  /**
   * The sequence number for the checkpoint.
   * @aliases cp
   */
  checkpoint,
  /**
   * Exponential moving average of the duration of the checkpoint, in
   * milliseconds.
   * @aliases cdtea, checkpointTimeExpAvg
   */
  checkpoint_duration_time_exp_avg,
  /**
   * The progress of the next checkpoint that is currently in progress.
   * @aliases c, checkpointProgress
   */
  checkpoint_progress,
  /**
   * The time the transform was created.
   * @aliases ct, createTime
   */
  create_time,
  /**
   * The amount of time spent deleting, in milliseconds.
   * @aliases dtime
   */
  delete_time,
  /**
   * The description of the transform.
   * @aliases d
   */
  description,
  /**
   * The destination index for the transform. The mappings of the destination
   * index are deduced based on the source fields when possible. If alternate
   * mappings are required, use the Create index API prior to starting the
   * transform.
   * @aliases di, destIndex
   */
  dest_index,
  /**
   * The number of documents that have been deleted from the destination index
   * due to the retention policy for this transform.
   * @aliases docd
   */
  documents_deleted,
  /**
   * The number of documents that have been indexed into the destination index
   * for the transform.
   * @aliases doci
   */
  documents_indexed,
  /**
   * Specifies a limit on the number of input documents per second. This setting
   * throttles the transform by adding a wait time between search requests. The
   * default value is `null`, which disables throttling.
   * @aliases dps
   */
  docs_per_second,
  /**
   * The number of documents that have been processed from the source index of
   * the transform.
   * @aliases docp
   */
  documents_processed,
  /**
   * The interval between checks for changes in the source indices when the
   * transform is running continuously. Also determines the retry interval in
   * the event of transient failures while the transform is searching or
   * indexing. The minimum value is `1s` and the maximum is `1h`. The default
   * value is `1m`.
   * @aliases f
   */
  frequency,
  /**
   * Identifier for the transform.
   */
  id,
  /**
   * The number of indexing failures.
   * @aliases if
   */
  index_failure,
  /**
   * The amount of time spent indexing, in milliseconds.
   * @aliases itime
   */
  index_time,
  /**
   * The number of index operations.
   * @aliases it
   */
  index_total,
  /**
   * Exponential moving average of the number of new documents that have been
   * indexed.
   * @aliases idea
   */
  indexed_documents_exp_avg,
  /**
   * The timestamp of the last search in the source indices. This field is only
   * shown if the transform is running.
   * @aliases lst, lastSearchTime
   */
  last_search_time,
  /**
   * Defines the initial page size to use for the composite aggregation for each
   * checkpoint. If circuit breaker exceptions occur, the page size is
   * dynamically adjusted to a lower value. The minimum value is `10` and the
   * maximum is `65,536`. The default value is `500`.
   * @aliases mpsz
   */
  max_page_search_size,
  /**
   * The number of search or bulk index operations processed. Documents are
   * processed in batches instead of individually.
   * @aliases pp
   */
  pages_processed,
  /**
   * The unique identifier for an ingest pipeline.
   * @aliases p
   */
  pipeline,
  /**
   * Exponential moving average of the number of documents that have been
   * processed.
   * @aliases pdea
   */
  processed_documents_exp_avg,
  /**
   * The amount of time spent processing results, in milliseconds.
   * @aliases pt
   */
  processing_time,
  /**
   * If a transform has a `failed` state, this property provides details about
   * the reason for the failure.
   * @aliases r
   */
  reason,
  /**
   * The number of search failures.
   * @aliases sf
   */
  search_failure,
  /**
   * The amount of time spent searching, in milliseconds.
   * @aliases stime
   */
  search_time,
  /**
   * The number of search operations on the source index for the transform.
   * @aliases st
   */
  search_total,
  /**
   * The source indices for the transform. It can be a single index, an index
   * pattern (for example, `"my-index-*"`), an array of indices (for example,
   * `["my-index-000001", "my-index-000002"]`), or an array of index patterns
   * (for example, `["my-index-*", "my-other-index-*"]`. For remote indices use
   * the syntax `"remote_name:index_name"`. If any indices are in remote
   * clusters then the master node and at least one transform node must have the
   * `remote_cluster_client` node role.
   * @aliases si, sourceIndex
   */
  source_index,
  /**
   * The status of the transform, which can be one of the following values:
   *
   * * `aborting`: The transform is aborting.
   * * `failed`: The transform failed. For more information about the failure,
   * check the reason field.
   * * `indexing`: The transform is actively processing data and creating new
   * documents.
   * * `started`: The transform is running but not actively indexing data.
   * * `stopped`: The transform is stopped.
   * * `stopping`: The transform is stopping.
   * @aliases s
   */
  state,
  /**
   * Indicates the type of transform: `batch` or `continuous`.
   * @aliases tt
   */
  transform_type,
  /**
   * The number of times the transform has been triggered by the scheduler. For
   * example, the scheduler triggers the transform indexer to check for updates
   * or ingest new data at an interval specified in the `frequency` property.
   * @aliases tc
   */
  trigger_count,
  /**
   * The version of Elasticsearch that existed on the node when the transform
   * was created.
   * @aliases v
   */
  version,
}
export type CatTransformColumns = CatTransformColumn | CatTransformColumn[];

/** @non_exhaustive */
export enum CatShardColumn {
  /**
   * Size of completion. For example: `0b`.
   * @aliases cs, completionSize
   */
  "completion.size",
  /**
   * Disk space used by the shard’s dataset, which may or may not be the size on
   * disk, but includes space used by the shard on object storage. Reported as a size value for example: `5kb`.
   */
  "dataset.size",
  /**
   * Number of indexed dense vectors.
   * @aliases dvc, denseVectorCount
   */
  "dense_vector.value_count",
  /**
   * Number of documents in shard, for example: `25`.
   * @aliases d, dc
   */
  docs,
  /**
   * Fielddata cache evictions, for example: `0`.
   * @aliases fe, fielddataEvictions
   */
  "fielddata.evictions",
  /**
   * Used fielddata cache memory, for example: `0b`.
   * @aliases fm, fielddataMemory
   */
  "fielddata.memory_size",
  /**
   * Number of flushes, for example: `1`.
   * @aliases ft, flushTotal
   */
  "flush.total",
  /**
   * Time spent in flush, for example: `1`.
   * @aliases ftt, flushTotalTime
   */
  "flush.total_time",
  /**
   * Number of current get operations, for example: `0`.
   * @aliases gc, getCurrent
   */
  "get.current",
  /**
   * Time spent in successful gets, for example: `14ms`.
   * @aliases geti, getExistsTime
   */
  "get.exists_time",
  /**
   * Number of successful get operations, for example: `2`.
   * @aliases geto, getExistsTotal
   */
  "get.exists_total",
  /**
   * Time spent in failed gets, for example: `0s`.
   * @aliases gmti, getMissingTime
   */
  "get.missing_time",
  /**
   * Number of failed get operations, for example: `1`.
   * @aliases gmto, getMissingTotal
   */
  "get.missing_total",
  /**
   * Time spent in get, for example: `14ms`.
   * @aliases gti, getTime
   */
  "get.time",
  /**
   * Number of get operations, for example: `2`.
   * @aliases gto, getTotal
   */
  "get.total",
  /**
   * ID of the node, for example: `k0zy`.
   */
  id,
  /**
   * Name of the index.
   * @aliases i, idx
   */
  index,
  /**
   * Number of current deletion operations, for example: `0`.
   * @aliases idc, indexingDeleteCurrent
   */
  "indexing.delete_current",
  /**
   * Time spent in deletions, for example: `2ms`.
   * @aliases idti, indexingDeleteTime
   */
  "indexing.delete_time",
  /**
   * Number of deletion operations, for example: `2`.
   * @aliases idto, indexingDeleteTotal
   */
  "indexing.delete_total",
  /**
   * Number of current indexing operations, for example: `0`.
   * @aliases iic, indexingIndexCurrent
   */
  "indexing.index_current",
  /**
   * Number of failed indexing operations due to version conflict, for example: `0`.
   * @aliases iifvc, indexingIndexFailedDueToVersionConflict
   */
  "indexing.index_failed_due_to_version_conflict",
  /**
   * Number of failed indexing operations, for example: `0`.
   * @aliases iif, indexingIndexFailed
   */
  "indexing.index_failed",
  /**
   * Time spent in indexing, such as for example: `134ms`.
   * @aliases iiti, indexingIndexTime
   */
  "indexing.index_time",
  /**
   * Number of indexing operations, for example: `1`.
   * @aliases iito, indexingIndexTotal
   */
  "indexing.index_total",
  /**
   * IP address of the node, for example: `127.0.1.1`.
   */
  ip,
  /**
   * Number of current merge operations, for example: `0`.
   * @aliases mc, mergesCurrent
   */
  "merges.current",
  /**
   * Number of current merging documents, for example: `0`.
   * @aliases mcd, mergesCurrentDocs
   */
  "merges.current_docs",
  /**
   * Size of current merges, for example: `0b`.
   * @aliases mcs, mergesCurrentSize
   */
  "merges.current_size",
  /**
   * Number of completed merge operations, for example: `0`.
   * @aliases mt, mergesTotal
   */
  "merges.total",
  /**
   * Number of merged documents, for example: `0`.
   * @aliases mtd, mergesTotalDocs
   */
  "merges.total_docs",
  /**
   * Size of current merges, for example: `0b`.
   * @aliases mts, mergesTotalSize
   */
  "merges.total_size",
  /**
   * Time spent merging documents, for example: `0s`.
   * @aliases mtt, mergesTotalTime
   */
  "merges.total_time",
  /**
   * Node name, for example: `I8hydUG`.
   * @aliases n
   */
  node,
  /**
   * Shard type. Returned values are `primary` or `replica`.
   * @aliases p, pr, primaryOrReplica
   */
  prirep,
  /**
   * Query cache evictions, for example: `0`.
   * @aliases qce, queryCacheEvictions
   */
  "query_cache.evictions",
  /**
   * Used query cache memory, for example: `0b`.
   * @aliases qcm, queryCacheMemory
   */
  "query_cache.memory_size",
  /**
   * Type of recovery source.
   * @aliases rs
   */
  "recoverysource.type",
  /**
   * Time spent in refreshes, for example: `91ms`.
   * @aliases rti, refreshTime
   */
  "refresh.time",
  /**
   * Number of refreshes, for example: `16`.
   * @aliases rto, refreshTotal
   */
  "refresh.total",
  /**
   * Current fetch phase operations, for example: `0`.
   * @aliases sfc, searchFetchCurrent
   */
  "search.fetch_current",
  /**
   * Time spent in fetch phase, for example: `37ms`.
   * @aliases sfti, searchFetchTime
   */
  "search.fetch_time",
  /**
   * Number of fetch operations, for example: `7`.
   * @aliases sfto, searchFetchTotal
   */
  "search.fetch_total",
  /**
   * Open search contexts, for example: `0`.
   * @aliases so, searchOpenContexts
   */
  "search.open_contexts",
  /**
   * Current query phase operations, for example: `0`.
   * @aliases sqc, searchQueryCurrent
   */
  "search.query_current",
  /**
   * Time spent in query phase, for example: `43ms`.
   * @aliases sqti, searchQueryTime
   */
  "search.query_time",
  /**
   * Number of query operations, for example: `9`.
   * @aliases sqto, searchQueryTotal
   */
  "search.query_total",
  /**
   * Open scroll contexts, for example: `2`.
   * @aliases scc, searchScrollCurrent
   */
  "search.scroll_current",
  /**
   * Time scroll contexts held open, for example: `2m`.
   * @aliases scti, searchScrollTime
   */
  "search.scroll_time",
  /**
   * Completed scroll contexts, for example: `1`.
   * @aliases scto, searchScrollTotal
   */
  "search.scroll_total",
  /**
   * Number of segments, for example: `4`.
   * @aliases sc, segmentsCount
   */
  "segments.count",
  /**
   * Memory used by fixed bit sets for nested object field types and type filters for types referred in join fields, for example: `1.0kb`.
   * @aliases sfbm, fixedBitsetMemory
   */
  "segments.fixed_bitset_memory",
  /**
   * Memory used by index writer, for example: `18mb`.
   * @aliases siwm, segmentsIndexWriterMemory
   */
  "segments.index_writer_memory",
  /**
   * Memory used by segments, for example: `1.4kb`.
   * @aliases sm, segmentsMemory
   */
  "segments.memory",
  /**
   * Memory used by version map, for example: `1.0kb`.
   * @aliases svmm, segmentsVersionMapMemory
   */
  "segments.version_map_memory",
  /**
   * Global checkpoint.
   * @aliases sqg, globalCheckpoint
   */
  "seq_no.global_checkpoint",
  /**
   * Local checkpoint.
   * @aliases sql, localCheckpoint
   */
  "seq_no.local_checkpoint",
  /**
   * Maximum sequence number.
   * @aliases sqm, maxSeqNo
   */
  "seq_no.max",
  /**
   * Name of the shard.
   * @aliases s, sh
   */
  shard,
  /**
   * Number of indexed [sparse vectors](https://www.elastic.co/docs/reference/elasticsearch/mapping-reference/sparse-vector).
   * @aliases svc, sparseVectorCount
   */
  "dsparse_vector.value_count",
  /**
   * State of the shard. Returned values are:
   * * `INITIALIZING`: The shard is recovering from a peer shard or gateway.
   * * `RELOCATING`: The shard is relocating.
   * * `STARTED`: The shard has started.
   * * `UNASSIGNED`: The shard is not assigned to any node.
   * @aliases st
   */
  state,
  /**
   * Disk space used by the shard, for example: `5kb`.
   * @aliases sto
   */
  store,
  /**
   * Number of current suggest operations, for example: `0`.
   * @aliases suc, suggestCurrent
   */
  "suggest.current",
  /**
   * Time spent in suggest, for example: `0`.
   * @aliases suti, suggestTime
   */
  "suggest.time",
  /**
   * Number of suggest operations, for example: `0`.
   * @aliases suto, suggestTotal
   */
  "suggest.total",
  /**
   * Sync ID of the shard.
   */
  sync_id,
  /**
   * Time at which the shard became unassigned in [Coordinated Universal Time (UTC)](https://en.wikipedia.org/wiki/List_of_UTC_offsets).
   * @aliases ua
   */
  "unassigned.at",
  /**
   * Details about why the shard became unassigned. This does not explain why the shard is currently unassigned. To understand why a shard
   * is not assigned, use the [Cluster allocation explain](https://www.elastic.co/docs/api/doc/elasticsearch/operation/operation-cluster-allocation-explain) API.
   * @aliases ud
   */
  "unassigned.details",
  /**
   * Time at which the shard was requested to be unassigned in [Coordinated Universal Time (UTC)](https://en.wikipedia.org/wiki/List_of_UTC_offsets).
   * @aliases uf
   */
  "unassigned.for",
  /**
   * Indicates the reason for the last change to the state of this unassigned shard. This does not explain why the shard is currently unassigned.
   * To understand why a shard is not assigned, use the [Cluster allocation explain](https://www.elastic.co/docs/api/doc/elasticsearch/operation/operation-cluster-allocation-explain) API. Returned values include:
   *
   * * `ALLOCATION_FAILED`: Unassigned as a result of a failed allocation of the shard.
   * * `CLUSTER_RECOVERED`: Unassigned as a result of a full cluster recovery.
   * * `DANGLING_INDEX_IMPORTED`: Unassigned as a result of importing a dangling index.
   * * `EXISTING_INDEX_RESTORED`: Unassigned as a result of restoring into a closed index.
   * * `FORCED_EMPTY_PRIMARY`: The shard’s allocation was last modified by forcing an empty primary using the Cluster reroute API.
   * * `INDEX_CLOSED`: Unassigned because the index was closed.
   * * `INDEX_CREATED`: Unassigned as a result of an API creation of an index.
   * * `INDEX_REOPENED`: Unassigned as a result of opening a closed index.
   * * `MANUAL_ALLOCATION`: The shard’s allocation was last modified by the Cluster reroute API.
   * * `NEW_INDEX_RESTORED`: Unassigned as a result of restoring into a new index.
   * * `NODE_LEFT`: Unassigned as a result of the node hosting it leaving the cluster.
   * * `NODE_RESTARTING`: Similar to `NODE_LEFT`, except that the node was registered as restarting using the Node shutdown API.
   * * `PRIMARY_FAILED`: The shard was initializing as a replica, but the primary shard failed before the initialization completed.
   * * `REALLOCATED_REPLICA`: A better replica location is identified and causes the existing replica allocation to be cancelled.
   * * `REINITIALIZED`: When a shard moves from started back to initializing.
   * * `REPLICA_ADDED`: Unassigned as a result of explicit addition of a replica.
   * * `REROUTE_CANCELLED`: Unassigned as a result of explicit cancel reroute command.
   * @aliases ur
   */
  "unassigned.reason",
}
export type CatShardColumns = CatShardColumn | CatShardColumn[];

/** @non_exhaustive */
export enum CatThreadPoolColumn {
  /**
   * Number of active threads in the current thread pool.
   * @aliases a
   */
  active,
  /**
   * Number of tasks completed by the thread pool executor.
   * @aliases c
   */
  completed,
  /**
   * Configured core number of active threads allowed in the current thread pool.
   * @aliases cr
   */
  core,
  /**
   * Ephemeral node ID.
   * @aliases eid
   */
  ephemeral_id,
  /**
   * Hostname for the current node.
   * @aliases h
   */
  host,
  /**
   * IP address for the current node.
   * @aliases i
   */
  ip,
  /**
   * Configured keep alive time for threads.
   * @aliases k
   */
  keep_alive,
  /**
   * Highest number of active threads in the current thread pool.
   * @aliases l
   */
  largest,
  /**
   * Configured maximum number of active threads allowed in the current thread pool.
   * @aliases mx
   */
  max,
  /**
   * Name of the thread pool, such as `analyze` or `generic`.
   */
  name,
  /**
   * ID of the node, such as `k0zy`.
   * @aliases id
   */
  node_id,
  /**
   * Node name, such as `I8hydUG`.
   */
  node_name,
  /**
   * Process ID of the running node.
   * @aliases p
   */
  pid,
  /**
   * Number of threads in the current thread pool.
   * @aliases psz
   */
  pool_size,
  /**
   * Bound transport port for the current node.
   * @aliases po
   */
  port,
  /**
   * Number of tasks in the queue for the current thread pool.
   * @aliases q
   */
  queue,
  /**
   * Maximum number of tasks permitted in the queue for the current thread pool.
   * @aliases qs
   */
  queue_size,
  /**
   * Number of tasks rejected by the thread pool executor.
   * @aliases r
   */
  rejected,
  /**
   * Configured fixed number of active threads allowed in the current thread pool.
   * @aliases sz
   */
  size,
  /**
   * Type of thread pool. Returned values are `fixed`, `fixed_auto_queue_size`, `direct`, or `scaling`.
   * @aliases t
   */
  type,
}
export type CatThreadPoolColumns = CatThreadPoolColumn | CatThreadPoolColumn[];
