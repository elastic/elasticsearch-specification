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

import { CommonCatQueryParameters } from '@spec_utils/behaviors'
import { RequestBase } from '@_types/Base'

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
  'buckets.count',
  /**
   * Exponential moving average of all bucket processing times, in milliseconds.
   * @aliases btea, bucketsTimeExpAvg
   */
  'buckets.time.exp_avg',
  /**
   * Exponentially-weighted moving average of bucket processing times calculated
   * in a 1 hour time window, in milliseconds.
   * @aliases bteah, bucketsTimeExpAvgHour
   */
  'buckets.time.exp_avg_hour',
  /**
   * Maximum among all bucket processing times, in milliseconds.
   * @aliases btmax, bucketsTimeMax
   */
  'buckets.time.max',
  /**
   * Minimum among all bucket processing times, in milliseconds.
   * @aliases btmin, bucketsTimeMin
   */
  'buckets.time.min',
  /**
   * Sum of all bucket processing times, in milliseconds.
   * @aliases btt, bucketsTimeTotal
   */
  'buckets.time.total',
  /**
   * The number of buckets processed.
   * @aliases db, dataBuckets
   */
  'data.buckets',
  /**
   * The timestamp of the earliest chronologically input document.
   * @aliases der, dataEarliestRecord
   */
  'data.earliest_record',
  /**
   * The number of buckets which did not contain any data.
   * @aliases deb, dataEmptyBuckets */
  'data.empty_buckets',
  /**
   * The number of bytes of input data posted to the anomaly detection job.
   * @aliases dib, dataInputBytes
   */
  'data.input_bytes',
  /**
   * The total number of fields in input documents posted to the anomaly
   * detection job. This count includes fields that are not used in the analysis.
   * However, be aware that if you are using a datafeed, it extracts only the
   * required fields from the documents it retrieves before posting them to the job.
   * @aliases dif, dataInputFields
   */
  'data.input_fields',
  /**
   * The number of input documents posted to the anomaly detection job.
   * @aliases dir, dataInputRecords
   */
  'data.input_records',
  /**
   * The number of input documents with either a missing date field or a date
   * that could not be parsed.
   * @aliases did, dataInvalidDates
   */
  'data.invalid_dates',
  /**
   * The timestamp at which data was last analyzed, according to server time.
   * @aliases dl, dataLast
   */
  'data.last',
  /**
   * The timestamp of the last bucket that did not contain any data.
   * @aliases dleb, dataLastEmptyBucket
   */
  'data.last_empty_bucket',
  /**
   * The timestamp of the last bucket that was considered sparse.
   * @aliases dlsb, dataLastSparseBucket
   */
  'data.last_sparse_bucket',
  /**
   * The timestamp of the latest chronologically input document.
   * @aliases dlr, dataLatestRecord
   */
  'data.latest_record',
  /**
   * The number of input documents that are missing a field that the anomaly
   * detection job is configured to analyze. Input documents with missing fields
   * are still processed because it is possible that not all fields are missing.
   * @aliases dmf, dataMissingFields */
  'data.missing_fields',
  /**
   * The number of input documents that have a timestamp chronologically
   * preceding the start of the current anomaly detection bucket offset by the
   * latency window. This information is applicable only when you provide data
   * to the anomaly detection job by using the post data API. These out of order
   * documents are discarded, since jobs require time series data to be in
   * ascending chronological order.
   * @aliases doot, dataOutOfOrderTimestamps
   */
  'data.out_of_order_timestamps',
  /**
   * The total number of fields in all the documents that have been processed by
   * the anomaly detection job. Only fields that are specified in the detector
   * configuration object contribute to this count. The timestamp is not
   * included in this count.
   * @aliases dpf, dataProcessedFields
   */
  'data.processed_fields',
  /**
   * The number of input documents that have been processed by the anomaly
   * detection job. This value includes documents with missing fields, since
   * they are nonetheless analyzed. If you use datafeeds and have aggregations
   * in your search query, the processed record count is the number of
   * aggregation results processed, not the number of Elasticsearch documents.
   * @aliases dpr, dataProcessedRecords
   */
  'data.processed_records',
  /**
   * The number of buckets that contained few data points compared to the
   * expected number of data points.
   * @aliases dsb, dataSparseBuckets
   */
  'data.sparse_buckets',
  /**
   * The average memory usage in bytes for forecasts related to the anomaly
   * detection job.
   * @aliases fmavg, forecastsMemoryAvg
   */
  'forecasts.memory.avg',
  /**
   * The maximum memory usage in bytes for forecasts related to the anomaly
   * detection job.
   * @aliases fmmax, forecastsMemoryMax
   */
  'forecasts.memory.max',
  /**
   * The minimum memory usage in bytes for forecasts related to the anomaly
   * detection job.
   * @aliases fmmin, forecastsMemoryMin
   */
  'forecasts.memory.min',
  /**
   * The total memory usage in bytes for forecasts related to the anomaly
   * detection job.
   * @aliases fmt, forecastsMemoryTotal
   */
  'forecasts.memory.total',
  /**
   * The average number of `m`odel_forecast` documents written for forecasts
   * related to the anomaly detection job.
   * @aliases fravg, forecastsRecordsAvg
   */
  'forecasts.records.avg',
  /**
   * The maximum number of `model_forecast` documents written for forecasts
   * related to the anomaly detection job.
   * @aliases frmax, forecastsRecordsMax
   */
  'forecasts.records.max',
  /**
   * The minimum number of `model_forecast` documents written for forecasts
   * related to the anomaly detection job.
   * @aliases frmin, forecastsRecordsMin
   */
  'forecasts.records.min',
  /**
   * The total number of `model_forecast` documents written for forecasts
   * related to the anomaly detection job.
   * @aliases frt, forecastsRecordsTotal
   */
  'forecasts.records.total',
  /**
   * The average runtime in milliseconds for forecasts related to the anomaly
   * detection job.
   * @aliases ftavg, forecastsTimeAvg
   */
  'forecasts.time.avg',
  /**
   * The maximum runtime in milliseconds for forecasts related to the anomaly
   * detection job.
   * @aliases ftmax, forecastsTimeMax
   */
  'forecasts.time.max',
  /**
   * The minimum runtime in milliseconds for forecasts related to the anomaly
   * detection job.
   * @aliases ftmin, forecastsTimeMin
   */
  'forecasts.time.min',
  /**
   * The total runtime in milliseconds for forecasts related to the anomaly
   * detection job.
   * @aliases ftt, forecastsTimeTotal
   */
  'forecasts.time.total',
  /**
   * The number of individual forecasts currently available for the job.
   * @aliases ft, forecastsTotal
   */
  'forecasts.total',
  /** Identifier for the anomaly detection job. */
  id,
  /**
   * The number of buckets for which new entities in incoming data were not
   * processed due to insufficient model memory.
   * @aliases mbaf, modelBucketAllocationFailures
   */
  'model.bucket_allocation_failures',
  /**
   * The number of by field values that were analyzed by the models. This value
   * is cumulative for all detectors in the job.
   * @aliases mbf, modelByFields
   */
  'model.by_fields',
  /**
   * The number of bytes of memory used by the models. This is the maximum value
   * since the last time the model was persisted. If the job is closed, this
   * value indicates the latest size.
   * @aliases mb, modelBytes
   */
  'model.bytes',
  /**
   * The number of bytes over the high limit for memory usage at the last
   * allocation failure.
   * @aliases mbe, modelBytesExceeded
   */
  'model.bytes_exceeded',
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
  'model.categorization_status',
  /**
   * The number of documents that have had a field categorized.
   * @aliases mcdc, modelCategorizedDocCount */
  'model.categorized_doc_count',
  /**
   * The number of categories created by categorization that will never be
   * assigned again because another category’s definition makes it a superset of
   * the dead category. Dead categories are a side effect of the way
   * categorization has no prior training.
   * @aliases mdcc, modelDeadCategoryCount
   */
  'model.dead_category_count',
  /**
   * The number of times that categorization wanted to create a new category but
   * couldn’t because the job had hit its model memory limit. This count does
   * not track which specific categories failed to be created. Therefore, you
   * cannot use this value to determine the number of unique categories that
   * were missed.
   * @aliases mdcc, modelFailedCategoryCount */
  'model.failed_category_count',
  /**
   * The number of categories that match more than 1% of categorized documents.
   * @aliases mfcc, modelFrequentCategoryCount
   */
  'model.frequent_category_count',
  /**
   * The timestamp when the model stats were gathered, according to server time.
   * @aliases mlt, modelLogTime
   */
  'model.log_time',
  /**
   * The timestamp when the model stats were gathered, according to server time.
   * @aliases mml, modelMemoryLimit
   */
  'model.memory_limit',
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
  'model.memory_status',
  /**
   * The number of over field values that were analyzed by the models. This
   * value is cumulative for all detectors in the job.
   * @aliases mof, modelOverFields
   */
  'model.over_fields',
  /**
   * The number of partition field values that were analyzed by the models. This
   * value is cumulative for all detectors in the job.
   * @aliases mpf, modelPartitionFields
   */
  'model.partition_fields',
  /**
   * The number of categories that match just one categorized document.
   * @aliases mrcc, modelRareCategoryCount
   */
  'model.rare_category_count',
  /**
   * The timestamp of the last record when the model stats were gathered.
   * @aliases mt, modelTimestamp
   */
  'model.timestamp',
  /**
   * The number of categories created by categorization.
   * @aliases mtcc, modelTotalCategoryCount */
  'model.total_category_count',
  /**
   * The network address of the node that runs the job. This information is
   * available only for open jobs.
   * @aliases na, nodeAddress
   */
  'node.address',
  /**
   * The ephemeral ID of the node that runs the job. This information is
   * available only for open jobs.
   * @aliases ne, nodeEphemeralId
   */
  'node.ephemeral_id',
  /**
   * The unique identifier of the node that runs the job. This information is
   * available only for open jobs.
   * @aliases ni, nodeId
   */
  'node.id',
  /**
   * The name of the node that runs the job. This information is available only
   * for open jobs.
   * @aliases nn, nodeName
   */
  'node.name',
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
  state
}
export type CatAnonalyDetectorColumns =
  | CatAnomalyDetectorColumn
  | CatAnomalyDetectorColumn[]
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
  s
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
  'node.address',
  /**
   * The ephemeral ID of the node that the data frame analytics job is assigned
   * to.
   * @aliases ne, nodeEphemeralId
   */
  'node.ephemeral_id',
  /**
   * The unique identifier of the node that the data frame analytics job is
   * assigned to.
   * @aliases ni, nodeId
   */
  'node.id',
  /**
   * The name of the node that the data frame analytics job is assigned to.
   * @aliases nn, nodeName
   */
  'node.name',
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
  version
}
export type CatDfaColumns = CatDfaColumn | CatDfaColumn[]
export type CatDatafeedColumns = CatDatafeedColumn | CatDatafeedColumn[]

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
  'ingest.count',
  /**
   * The total number of document that are currently being handled by the
   * trained model.
   * @aliases icurr, ingestCurrent
   */
  'ingest.current',
  /**
   * The total number of failed ingest attempts with the trained model.
   * @aliases if, ingestFailed
   */
  'ingest.failed',
  /**
   * The total number of ingest pipelines that are referencing the trained
   * model.
   * @aliases ip, ingestPipelines
   */
  'ingest.pipelines',
  /**
   * The total time that is spent processing documents with the trained model.
   * @aliases it, ingestTime
   */
  'ingest.time',
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
  version
}
export type CatTrainedModelsColumns =
  | CatTrainedModelsColumn
  | CatTrainedModelsColumn[]

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
  version
}
export type CatTransformColumns = CatTransformColumn | CatTransformColumn[]
