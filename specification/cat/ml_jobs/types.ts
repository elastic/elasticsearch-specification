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

import { ByteSize, Id, NodeId } from '@_types/common'
import { JobState } from '@ml/_types/Job'
import { CategorizationStatus, MemoryStatus } from '@ml/_types/Model'

export class JobsRecord {
  /**
   * The anomaly detection job identifier.
   */
  id?: Id
  /**
   * The status of the anomaly detection job.
   * @aliases s
   */
  'state'?: JobState
  /**
   * For open jobs only, the amount of time the job has been opened.
   * @aliases ot
   */
  'opened_time'?: string
  /**
   * For open anomaly detection jobs only, contains messages relating to the selection of a node to run the job.
   * @aliases ae
   */
  'assignment_explanation'?: string
  /**
   * The number of input documents that have been processed by the anomaly detection job.
   * This value includes documents with missing fields, since they are nonetheless analyzed.
   * If you use datafeeds and have aggregations in your search query, the `processed_record_count` is the number of aggregation results processed, not the number of Elasticsearch documents.
   * @aliases dpr, dataProcessedRecords
   */
  'data.processed_records'?: string
  /**
   * The total number of fields in all the documents that have been processed by the anomaly detection job.
   * Only fields that are specified in the detector configuration object contribute to this count.
   * The timestamp is not included in this count.
   * @aliases dpf, dataProcessedFields
   */
  'data.processed_fields'?: string
  /**
   * The number of bytes of input data posted to the anomaly detection job.
   * @aliases dib, dataInputBytes
   */
  'data.input_bytes'?: ByteSize
  /**
   * The number of input documents posted to the anomaly detection job.
   * @aliases dir, dataInputRecords
   */
  'data.input_records'?: string
  /**
   * The total number of fields in input documents posted to the anomaly detection job.
   * This count includes fields that are not used in the analysis.
   * However, be aware that if you are using a datafeed, it extracts only the required fields from the documents it retrieves before posting them to the job.
   * @aliases dif, dataInputFields
   */
  'data.input_fields'?: string
  /**
   * The number of input documents with either a missing date field or a date that could not be parsed.
   * @aliases did, dataInvalidDates
   */
  'data.invalid_dates'?: string
  /**
   * The number of input documents that are missing a field that the anomaly detection job is configured to analyze.
   * Input documents with missing fields are still processed because it is possible that not all fields are missing.
   * If you are using datafeeds or posting data to the job in JSON format, a high `missing_field_count` is often not an indication of data issues.
   * It is not necessarily a cause for concern.
   * @aliases dmf, dataMissingFields
   */
  'data.missing_fields'?: string
  /**
   * The number of input documents that have a timestamp chronologically preceding the start of the current anomaly detection bucket offset by the latency window.
   * This information is applicable only when you provide data to the anomaly detection job by using the post data API.
   * These out of order documents are discarded, since jobs require time series data to be in ascending chronological order.
   * @aliases doot, dataOutOfOrderTimestamps
   */
  'data.out_of_order_timestamps'?: string
  /**
   * The number of buckets which did not contain any data.
   * If your data contains many empty buckets, consider increasing your `bucket_span` or using functions that are tolerant to gaps in data such as mean, `non_null_sum` or `non_zero_count`.
   * @aliases deb, dataEmptyBuckets
   */
  'data.empty_buckets'?: string
  /**
   * The number of buckets that contained few data points compared to the expected number of data points.
   * If your data contains many sparse buckets, consider using a longer `bucket_span`.
   * @aliases dsb, dataSparseBuckets
   */
  'data.sparse_buckets'?: string
  /**
   * The total number of buckets processed.
   * @aliases db, dataBuckets
   */
  'data.buckets'?: string
  /**
   * The timestamp of the earliest chronologically input document.
   * @aliases der, dataEarliestRecord
   */
  'data.earliest_record'?: string
  /**
   * The timestamp of the latest chronologically input document.
   * @aliases dlr, dataLatestRecord
   */
  'data.latest_record'?: string
  /**
   * The timestamp at which data was last analyzed, according to server time.
   * @aliases dl, dataLast
   */
  'data.last'?: string
  /**
   * The timestamp of the last bucket that did not contain any data.
   * @aliases dleb, dataLastEmptyBucket
   */
  'data.last_empty_bucket'?: string
  /**
   * The timestamp of the last bucket that was considered sparse.
   * @aliases dlsb, dataLastSparseBucket
   */
  'data.last_sparse_bucket'?: string
  /**
   * The number of bytes of memory used by the models.
   * This is the maximum value since the last time the model was persisted.
   * If the job is closed, this value indicates the latest size.
   * @aliases mb, modelBytes
   */
  'model.bytes'?: ByteSize
  /**
   * The status of the mathematical models.
   * @aliases mms, modelMemoryStatus
   */
  'model.memory_status'?: MemoryStatus
  /**
   * The number of bytes over the high limit for memory usage at the last allocation failure.
   * @aliases mbe, modelBytesExceeded
   */
  'model.bytes_exceeded'?: ByteSize
  /**
   * The upper limit for model memory usage, checked on increasing values.
   * @aliases mml, modelMemoryLimit
   */
  'model.memory_limit'?: string
  /**
   * The number of `by` field values that were analyzed by the models.
   * This value is cumulative for all detectors in the job.
   * @aliases mbf, modelByFields
   */
  'model.by_fields'?: string
  /**
   * The number of `over` field values that were analyzed by the models.
   * This value is cumulative for all detectors in the job.
   * @aliases mof, modelOverFields
   */
  'model.over_fields'?: string
  /**
   * The number of `partition` field values that were analyzed by the models.
   * This value is cumulative for all detectors in the job.
   * @aliases mpf, modelPartitionFields
   */
  'model.partition_fields'?: string
  /**
   * The number of buckets for which new entities in incoming data were not processed due to insufficient model memory.
   * This situation is also signified by a `hard_limit: memory_status` property value.
   * @aliases mbaf, modelBucketAllocationFailures
   */
  'model.bucket_allocation_failures'?: string
  /**
   * The status of categorization for the job.
   * @aliases mcs, modelCategorizationStatus
   */
  'model.categorization_status'?: CategorizationStatus
  /**
   * The number of documents that have had a field categorized.
   * @aliases mcdc, modelCategorizedDocCount
   */
  'model.categorized_doc_count'?: string
  /**
   * The number of categories created by categorization.
   * @aliases mtcc, modelTotalCategoryCount
   */
  'model.total_category_count'?: string
  /**
   * The number of categories that match more than 1% of categorized documents.
   * @aliases modelFrequentCategoryCount
   */
  'model.frequent_category_count'?: string
  /**
   * The number of categories that match just one categorized document.
   * @aliases mrcc, modelRareCategoryCount
   */
  'model.rare_category_count'?: string
  /**
   * The number of categories created by categorization that will never be assigned again because another category’s definition makes it a superset of the dead category.
   * Dead categories are a side effect of the way categorization has no prior training.
   * @aliases mdcc, modelDeadCategoryCount
   */
  'model.dead_category_count'?: string
  /**
   * The number of times that categorization wanted to create a new category but couldn’t because the job had hit its `model_memory_limit`.
   * This count does not track which specific categories failed to be created.
   * Therefore you cannot use this value to determine the number of unique categories that were missed.
   * @aliases mfcc, modelFailedCategoryCount
   */
  'model.failed_category_count'?: string
  /**
   * The timestamp when the model stats were gathered, according to server time.
   * @aliases mlt, modelLogTime
   */
  'model.log_time'?: string
  /**
   * The timestamp of the last record when the model stats were gathered.
   * @aliases mt, modelTimestamp
   */
  'model.timestamp'?: string
  /**
   * The number of individual forecasts currently available for the job.
   * A value of one or more indicates that forecasts exist.
   * @aliases ft, forecastsTotal
   */
  'forecasts.total'?: string
  /**
   * The minimum memory usage in bytes for forecasts related to the anomaly detection job.
   * @aliases fmmin, forecastsMemoryMin
   */
  'forecasts.memory.min'?: string
  /**
   * The maximum memory usage in bytes for forecasts related to the anomaly detection job.
   * @aliases fmmax, forecastsMemoryMax
   */
  'forecasts.memory.max'?: string
  /**
   * The average memory usage in bytes for forecasts related to the anomaly detection job.
   * @aliases fmavg, forecastsMemoryAvg
   */
  'forecasts.memory.avg'?: string
  /**
   * The total memory usage in bytes for forecasts related to the anomaly detection job.
   * @aliases fmt, forecastsMemoryTotal
   */
  'forecasts.memory.total'?: string
  /**
   * The minimum number of `model_forecast` documents written for forecasts related to the anomaly detection job.
   * @aliases frmin, forecastsRecordsMin
   */
  'forecasts.records.min'?: string
  /**
   * The maximum number of `model_forecast` documents written for forecasts related to the anomaly detection job.
   * @aliases frmax, forecastsRecordsMax
   */
  'forecasts.records.max'?: string
  /**
   * The average number of `model_forecast` documents written for forecasts related to the anomaly detection job.
   * @aliases fravg, forecastsRecordsAvg
   */
  'forecasts.records.avg'?: string
  /**
   * The total number of `model_forecast` documents written for forecasts related to the anomaly detection job.
   * @aliases frt, forecastsRecordsTotal
   */
  'forecasts.records.total'?: string
  /**
   * The minimum runtime in milliseconds for forecasts related to the anomaly detection job.
   * @aliases ftmin, forecastsTimeMin
   */
  'forecasts.time.min'?: string
  /**
   * The maximum runtime in milliseconds for forecasts related to the anomaly detection job.
   * @aliases ftmax, forecastsTimeMax
   */
  'forecasts.time.max'?: string
  /**
   * The average runtime in milliseconds for forecasts related to the anomaly detection job.
   * @aliases ftavg, forecastsTimeAvg
   */
  'forecasts.time.avg'?: string
  /**
   * The total runtime in milliseconds for forecasts related to the anomaly detection job.
   * @aliases ftt, forecastsTimeTotal
   */
  'forecasts.time.total'?: string
  /**
   * The uniqe identifier of the assigned node.
   * @aliases ni, nodeId
   */
  'node.id'?: NodeId
  /**
   * The name of the assigned node.
   * @aliases nn, nodeName
   */
  'node.name'?: string
  /**
   * The ephemeral identifier of the assigned node.
   * @aliases ne, nodeEphemeralId
   */
  'node.ephemeral_id'?: NodeId
  /**
   * The network address of the assigned node.
   * @aliases na, nodeAddress
   */
  'node.address'?: string
  /**
   * The number of bucket results produced by the job.
   * @aliases bc, bucketsCount
   */
  'buckets.count'?: string
  /**
   * The sum of all bucket processing times, in milliseconds.
   * @aliases btt, bucketsTimeTotal
   */
  'buckets.time.total'?: string
  /**
   * The minimum of all bucket processing times, in milliseconds.
   * @aliases btmin, bucketsTimeMin
   */
  'buckets.time.min'?: string
  /**
   * The maximum of all bucket processing times, in milliseconds.
   * @aliases btmax, bucketsTimeMax
   */
  'buckets.time.max'?: string
  /**
   * The exponential moving average of all bucket processing times, in milliseconds.
   * @aliases btea, bucketsTimeExpAvg
   */
  'buckets.time.exp_avg'?: string
  /**
   * The exponential moving average of bucket processing times calculated in a one hour time window, in milliseconds.
   * @aliases bteah, bucketsTimeExpAvgHour
   */
  'buckets.time.exp_avg_hour'?: string
}
