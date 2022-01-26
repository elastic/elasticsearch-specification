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
  assignment_explanation = 0,
  /**
   * The number of bucket results produced by the job.
   * @aliases bc, bucketsCount
   */
  'buckets.count' = 1,
  /**
   * Exponential moving average of all bucket processing times, in milliseconds.
   * @aliases btea, bucketsTimeExpAvg
   */
  'buckets.time.exp_avg' = 2,
  /**
   * Exponentially-weighted moving average of bucket processing times calculated
   * in a 1 hour time window, in milliseconds.
   * @aliases bteah, bucketsTimeExpAvgHour
   */
  'buckets.time.exp_avg_hour' = 3,
  /**
   * Maximum among all bucket processing times, in milliseconds.
   * @aliases btmax, bucketsTimeMax
   */
  'buckets.time.max' = 4,
  /**
   * Minimum among all bucket processing times, in milliseconds.
   * @aliases btmin, bucketsTimeMin
   */
  'buckets.time.min' = 5,
  /**
   * Sum of all bucket processing times, in milliseconds.
   * @aliases btt, bucketsTimeTotal
   */
  'buckets.time.total' = 6,
  /**
   * The number of buckets processed.
   * @aliases db, dataBuckets
   */
  'data.buckets' = 7,
  /**
   * The timestamp of the earliest chronologically input document.
   * @aliases der, dataEarliestRecord
   */
  'data.earliest_record' = 8,
  /**
   * The number of buckets which did not contain any data.
   * @aliases deb, dataEmptyBuckets */
  'data.empty_buckets' = 9,
  /**
   * The number of bytes of input data posted to the anomaly detection job.
   * @aliases dib, dataInputBytes
   */
  'data.input_bytes' = 10,
  /**
   * The total number of fields in input documents posted to the anomaly
   * detection job. This count includes fields that are not used in the analysis.
   * However, be aware that if you are using a datafeed, it extracts only the
   * required fields from the documents it retrieves before posting them to the job.
   * @aliases dif, dataInputFields
   */
  'data.input_fields' = 11,
  /**
   * The number of input documents posted to the anomaly detection job.
   * @aliases dir, dataInputRecords
   */
  'data.input_records' = 12,
  /**
   * The number of input documents with either a missing date field or a date
   * that could not be parsed.
   * @aliases did, dataInvalidDates
   */
  'data.invalid_dates' = 13,
  /**
   * The timestamp at which data was last analyzed, according to server time.
   * @aliases dl, dataLast
   */
  'data.last' = 14,
  /**
   * The timestamp of the last bucket that did not contain any data.
   * @aliases dleb, dataLastEmptyBucket
   */
  'data.last_empty_bucket' = 15,
  /**
   * The timestamp of the last bucket that was considered sparse.
   * @aliases dlsb, dataLastSparseBucket
   */
  'data.last_sparse_bucket' = 16,
  /**
   * The timestamp of the latest chronologically input document.
   * @aliases dlr, dataLatestRecord
   */
  'data.latest_record' = 17,
  /**
   * The number of input documents that are missing a field that the anomaly
   * detection job is configured to analyze. Input documents with missing fields
   * are still processed because it is possible that not all fields are missing.
   * @aliases dmf, dataMissingFields */
  'data.missing_fields' = 18,
  /**
   * The number of input documents that have a timestamp chronologically
   * preceding the start of the current anomaly detection bucket offset by the
   * latency window. This information is applicable only when you provide data
   * to the anomaly detection job by using the post data API. These out of order
   * documents are discarded, since jobs require time series data to be in
   * ascending chronological order.
   * @aliases doot, dataOutOfOrderTimestamps
   */
  'data.out_of_order_timestamps' = 19,
  /**
   * The total number of fields in all the documents that have been processed by
   * the anomaly detection job. Only fields that are specified in the detector
   * configuration object contribute to this count. The timestamp is not
   * included in this count.
   * @aliases dpf, dataProcessedFields
   */
  'data.processed_fields' = 20,
  /**
   * The number of input documents that have been processed by the anomaly
   * detection job. This value includes documents with missing fields, since
   * they are nonetheless analyzed. If you use datafeeds and have aggregations
   * in your search query, the processed record count is the number of
   * aggregation results processed, not the number of Elasticsearch documents.
   * @aliases dpr, dataProcessedRecords
   */
  'data.processed_records' = 21,
  /**
   * The number of buckets that contained few data points compared to the
   * expected number of data points.
   * @aliases dsb, dataSparseBuckets
   */
  'data.sparse_buckets' = 22,
  /**
   * The average memory usage in bytes for forecasts related to the anomaly
   * detection job.
   * @aliases fmavg, forecastsMemoryAvg
   */
  'forecasts.memory.avg' = 23,
  /**
   * The maximum memory usage in bytes for forecasts related to the anomaly
   * detection job.
   * @aliases fmmax, forecastsMemoryMax
   */
  'forecasts.memory.max' = 24,
  /**
   * The minimum memory usage in bytes for forecasts related to the anomaly
   * detection job.
   * @aliases fmmin, forecastsMemoryMin
   */
  'forecasts.memory.min' = 25,
  /**
   * The total memory usage in bytes for forecasts related to the anomaly
   * detection job.
   * @aliases fmt, forecastsMemoryTotal
   */
  'forecasts.memory.total' = 26,
  /**
   * The average number of `m`odel_forecast` documents written for forecasts
   * related to the anomaly detection job.
   * @aliases fravg, forecastsRecordsAvg
   */
  'forecasts.records.avg' = 27,
  /**
   * The maximum number of `model_forecast` documents written for forecasts
   * related to the anomaly detection job.
   * @aliases frmax, forecastsRecordsMax
   */
  'forecasts.records.max' = 28,
  /**
   * The minimum number of `model_forecast` documents written for forecasts
   * related to the anomaly detection job.
   * @aliases frmin, forecastsRecordsMin
   */
  'forecasts.records.min' = 29,
  /**
   * The total number of `model_forecast` documents written for forecasts
   * related to the anomaly detection job.
   * @aliases frt, forecastsRecordsTotal
   */
  'forecasts.records.total' = 30,
  /**
   * The average runtime in milliseconds for forecasts related to the anomaly
   * detection job.
   * @aliases ftavg, forecastsTimeAvg
   */
  'forecasts.time.avg' = 31,
  /**
   * The maximum runtime in milliseconds for forecasts related to the anomaly
   * detection job.
   * @aliases ftmax, forecastsTimeMax
   */
  'forecasts.time.max' = 32,
  /**
   * The minimum runtime in milliseconds for forecasts related to the anomaly
   * detection job.
   * @aliases ftmin, forecastsTimeMin
   */
  'forecasts.time.min' = 33,
  /**
   * The total runtime in milliseconds for forecasts related to the anomaly
   * detection job.
   * @aliases ftt, forecastsTimeTotal
   */
  'forecasts.time.total' = 34,
  /**
   * The number of individual forecasts currently available for the job.
   * @aliases ft, forecastsTotal
   */
  'forecasts.total' = 35,
  /** Identifier for the anomaly detection job. */
  id = 36,
  /**
   * The number of buckets for which new entities in incoming data were not
   * processed due to insufficient model memory.
   * @aliases mbaf, modelBucketAllocationFailures
   */
  'model.bucket_allocation_failures' = 37,
  /**
   * The number of by field values that were analyzed by the models. This value
   * is cumulative for all detectors in the job.
   * @aliases mbf, modelByFields
   */
  'model.by_fields' = 38,
  /**
   * The number of bytes of memory used by the models. This is the maximum value
   * since the last time the model was persisted. If the job is closed, this
   * value indicates the latest size.
   * @aliases mb, modelBytes
   */
  'model.bytes' = 39,
  /**
   * The number of bytes over the high limit for memory usage at the last
   * allocation failure.
   * @aliases mbe, modelBytesExceeded
   */
  'model.bytes_exceeded' = 40,
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
  'model.categorization_status' = 41,
  /**
   * The number of documents that have had a field categorized.
   * @aliases mcdc, modelCategorizedDocCount */
  'model.categorized_doc_count' = 42,
  /**
   * The number of categories created by categorization that will never be
   * assigned again because another category’s definition makes it a superset of
   * the dead category. Dead categories are a side effect of the way
   * categorization has no prior training.
   * @aliases mdcc, modelDeadCategoryCount
   */
  'model.dead_category_count' = 43,
  /**
   * The number of times that categorization wanted to create a new category but
   * couldn’t because the job had hit its model memory limit. This count does
   * not track which specific categories failed to be created. Therefore, you
   * cannot use this value to determine the number of unique categories that
   * were missed.
   * @aliases mdcc, modelFailedCategoryCount */
  'model.failed_category_count' = 44,
  /**
   * The number of categories that match more than 1% of categorized documents.
   * @aliases mfcc, modelFrequentCategoryCount
   */
  'model.frequent_category_count' = 45,
  /**
   * The timestamp when the model stats were gathered, according to server time.
   * @aliases mlt, modelLogTime
   */
  'model.log_time' = 46,
  /**
   * The timestamp when the model stats were gathered, according to server time.
   * @aliases mml, modelMemoryLimit
   */
  'model.memory_limit' = 47,
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
  'model.memory_status' = 48,
  /**
   * The number of over field values that were analyzed by the models. This
   * value is cumulative for all detectors in the job.
   * @aliases mof, modelOverFields
   */
  'model.over_fields' = 49,
  /**
   * The number of partition field values that were analyzed by the models. This
   * value is cumulative for all detectors in the job.
   * @aliases mpf, modelPartitionFields
   */
  'model.partition_fields' = 50,
  /**
   * The number of categories that match just one categorized document.
   * @aliases mrcc, modelRareCategoryCount
   */
  'model.rare_category_count' = 51,
  /**
   * The timestamp of the last record when the model stats were gathered.
   * @aliases mt, modelTimestamp
   */
  'model.timestamp' = 52,
  /**
   * The number of categories created by categorization.
   * @aliases mtcc, modelTotalCategoryCount */
  'model.total_category_count' = 53,
  /**
   * The network address of the node that runs the job. This information is
   * available only for open jobs.
   * @aliases na, nodeAddress
   */
  'node.address' = 54,
  /**
   * The ephemeral ID of the node that runs the job. This information is
   * available only for open jobs.
   * @aliases ne, nodeEphemeralId
   */
  'node.ephemeral_id' = 55,
  /**
   * The unique identifier of the node that runs the job. This information is
   * available only for open jobs.
   * @aliases ni, nodeId
   */
  'node.id' = 56,
  /**
   * The name of the node that runs the job. This information is available only
   * for open jobs.
   * @aliases nn, nodeName
   */
  'node.name' = 57,
  /**
   * For open jobs only, the elapsed time for which the job has been open.
   * @aliases ot
   */
  opened_time = 58,
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
  state = 59
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
  ae = 0,
  /**
   * The number of buckets processed.
   * @aliases buckets.count, bucketsCount
   */
  bc = 1,
  /** A numerical character string that uniquely identifies the datafeed. */
  id = 2,
  /**
   * For started datafeeds only, the network address of the node where the
   * datafeed is started.
   * @aliases node.address, nodeAddress
   */
  na = 3,
  /**
   * For started datafeeds only, the ephemeral ID of the node where the
   * datafeed is started.
   * @aliases node.ephemeral_id, nodeEphemeralId
   */
  ne = 4,
  /**
   * For started datafeeds only, the unique identifier of the node where the
   * datafeed is started.
   * @aliases node.id, nodeId
   */
  ni = 5,
  /**
   * For started datafeeds only, the name of the node where the datafeed is
   * started.
   * @aliases node.name, nodeName
   */
  nn = 6,
  /**
   * The average search time per bucket, in milliseconds.
   * @aliases search.bucket_avg, searchBucketAvg
   */
  sba = 7,
  /**
   * The number of searches run by the datafeed.
   * @aliases search.count, searchCount */
  sc = 8,
  /**
   * The exponential average search time per hour, in milliseconds.
   * @aliases search.exp_avg_hour, searchExpAvgHour
   */
  seah = 9,
  /**
   * The total time the datafeed spent searching, in milliseconds.
   * @aliases search.time, searchTime */
  st = 10,
  /**
   * The status of the datafeed: `starting`, `started`, `stopping`, or `stopped`.
   * If `starting`, the datafeed has been requested to start but has not yet
   * started. If `started`, the datafeed is actively receiving data. If
   * `stopping`, the datafeed has been requested to stop gracefully and is
   * completing its final action. If `stopped`, the datafeed is stopped and will
   * not receive data until it is re-started.
   * @aliases state
   */
  s = 11
}
