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

import { JobState } from "../../ml/job/config/JobState";
import { ByteSize, Id, NodeId } from "../../__common/common";
import { ModelCategorizationStatus } from "./ModelCategorizationStatus";
import { ModelMemoryStatus } from "./ModelMemoryStatus";

export class CatJobsRecord {
  /**
   * the job_id
   */
  id?: Id;

  /**
   * the job state
   * @aliases s
   */
  "state"?: JobState;
  /**
   * the amount of time the job has been opened
   * @aliases ot
   */
  "opened_time"?: string;
  /**
   * why the job is or is not assigned to a node
   * @aliases ae
   */
  "assignment_explanation"?: string;
  /**
   * number of processed records
   * @aliases dpr, dataProcessedRecords
   */
  "data.processed_records"?: string;
  /**
   * number of processed fields
   * @aliases dpf, dataProcessedFields
   */
  "data.processed_fields"?: string;
  /**
   * total input bytes
   * @aliases dib, dataInputBytes
   */
  "data.input_bytes"?: ByteSize;
  /**
   * total record count
   * @aliases dir, dataInputRecords
   */
  "data.input_records"?: string;
  /**
   * total field count
   * @aliases dif, dataInputFields
   */
  "data.input_fields"?: string;
  /**
   * number of records with invalid dates
   * @aliases did, dataInvalidDates
   */
  "data.invalid_dates"?: string;
  /**
   * number of records with missing fields
   * @aliases dmf, dataMissingFields
   */
  "data.missing_fields"?: string;
  /**
   * number of records handled out of order
   * @aliases doot, dataOutOfOrderTimestamps
   */
  "data.out_of_order_timestamps"?: string;
  /**
   * number of empty buckets
   * @aliases deb, dataEmptyBuckets
   */
  "data.empty_buckets"?: string;
  /**
   * number of sparse buckets
   * @aliases dsb, dataSparseBuckets
   */
  "data.sparse_buckets"?: string;
  /**
   * total bucket count
   * @aliases db, dataBuckets
   */
  "data.buckets"?: string;
  /**
   * earliest record time
   * @aliases der, dataEarliestRecord
   */
  "data.earliest_record"?: string;
  /**
   * latest record time
   * @aliases dlr, dataLatestRecord
   */
  "data.latest_record"?: string;
  /**
   * last time data was seen
   * @aliases dl, dataLast
   */
  "data.last"?: string;
  /**
   * last time an empty bucket occurred
   * @aliases dleb, dataLastEmptyBucket
   */
  "data.last_empty_bucket"?: string;
  /**
   * last time a sparse bucket occurred
   * @aliases dlsb, dataLastSparseBucket
   */
  "data.last_sparse_bucket"?: string;
  /**
   * model size
   * @aliases mb, modelBytes
   */
  "model.bytes"?: ByteSize;
  /**
   * current memory status
   * @aliases mms, modelMemoryStatus
   */
  "model.memory_status"?: ModelMemoryStatus;
  /**
   * how much the model has exceeded the limit
   * @aliases mbe, modelBytesExceeded
   */
  "model.bytes_exceeded"?: ByteSize;
  /**
   * model memory limit
   * @aliases mml, modelMemoryLimit
   */
  "model.memory_limit"?: string;
  /**
   * count of 'by' fields
   * @aliases mbf, modelByFields
   */
  "model.by_fields"?: string;
  /**
   * count of 'over' fields
   * @aliases mof, modelOverFields
   */
  "model.over_fields"?: string;
  /**
   * count of 'partition' fields
   * @aliases mpf, modelPartitionFields
   */
  "model.partition_fields"?: string;
  /**
   * number of bucket allocation failures
   * @aliases mbaf, modelBucketAllocationFailures
   */
  "model.bucket_allocation_failures"?: string;
  /**
   * current categorization status
   * @aliases mcs, modelCategorizationStatus
   */
  "model.categorization_status"?: ModelCategorizationStatus;
  /**
   * count of categorized documents
   * @aliases mcdc, modelCategorizedDocCount
   */
  "model.categorized_doc_count"?: string;
  /**
   * count of categories
   * @aliases mtcc, modelTotalCategoryCount
   */
  "model.total_category_count"?: string;
  /**
   * count of frequent categories
   * @aliases modelFrequentCategoryCount
   */
  "model.frequent_category_count"?: string;
  /**
   * count of rare categories
   * @aliases mrcc, modelRareCategoryCount
   */
  "model.rare_category_count"?: string;
  /**
   * count of dead categories
   * @aliases mdcc, modelDeadCategoryCount
   */
  "model.dead_category_count"?: string;
  /**
   * count of failed categories
   * @aliases mfcc, modelFailedCategoryCount
   */
  "model.failed_category_count"?: string;
  /**
   * when the model stats were gathered
   * @aliases mlt, modelLogTime
   */
  "model.log_time"?: string;
  /**
   * the time of the last record when the model stats were gathered
   * @aliases mt, modelTimestamp
   */
  "model.timestamp"?: string;
  /**
   * total number of forecasts
   * @aliases ft, forecastsTotal
   */
  "forecasts.total"?: string;
  /**
   * minimum memory used by forecasts
   * @aliases fmmin, forecastsMemoryMin
   */
  "forecasts.memory.min"?: string;
  /**
   * maximum memory used by forecasts
   * @aliases fmmax, forecastsMemoryMax
   */
  "forecasts.memory.max"?: string;
  /**
   * average memory used by forecasts
   * @aliases fmavg, forecastsMemoryAvg
   */
  "forecasts.memory.avg"?: string;
  /**
   * total memory used by all forecasts
   * @aliases fmt, forecastsMemoryTotal
   */
  "forecasts.memory.total"?: string;
  /**
   * minimum record count for forecasts
   * @aliases frmin, forecastsRecordsMin
   */
  "forecasts.records.min"?: string;
  /**
   * maximum record count for forecasts
   * @aliases frmax, forecastsRecordsMax
   */
  "forecasts.records.max"?: string;
  /**
   * average record count for forecasts
   * @aliases fravg, forecastsRecordsAvg
   */
  "forecasts.records.avg"?: string;
  /**
   * total record count for all forecasts
   * @aliases frt, forecastsRecordsTotal
   */
  "forecasts.records.total"?: string;
  /**
   * minimum runtime for forecasts
   * @aliases ftmin, forecastsTimeMin
   */
  "forecasts.time.min"?: string;
  /**
   * maximum run time for forecasts
   * @aliases ftmax, forecastsTimeMax
   */
  "forecasts.time.max"?: string;
  /**
   * average runtime for all forecasts (milliseconds)
   * @aliases ftavg, forecastsTimeAvg
   */
  "forecasts.time.avg"?: string;
  /**
   * total runtime for all forecasts
   * @aliases ftt, forecastsTimeTotal
   */
  "forecasts.time.total"?: string;
  /**
   * id of the assigned node
   * @aliases ni, nodeId
   */
  "node.id"?: NodeId;
  /**
   * name of the assigned node
   * @aliases nn, nodeName
   */
  "node.name"?: string;
  /**
   * ephemeral id of the assigned node
   * @aliases ne, nodeEphemeralId
   */
  "node.ephemeral_id"?: NodeId;
  /**
   * network address of the assigned node
   * @aliases na, nodeAddress
   */
  "node.address"?: string;
  /**
   * bucket count
   * @aliases bc, bucketsCount
   */
  "buckets.count"?: string;
  /**
   * total bucket processing time
   * @aliases btt, bucketsTimeTotal
   */
  "buckets.time.total"?: string;
  /**
   * minimum bucket processing time
   * @aliases btmin, bucketsTimeMin
   */
  "buckets.time.min"?: string;
  /**
   * maximum bucket processing time
   * @aliases btmax, bucketsTimeMax
   */
  "buckets.time.max"?: string;
  /**
   * exponential average bucket processing time (milliseconds)
   * @aliases btea, bucketsTimeExpAvg
   */
  "buckets.time.exp_avg"?: string;
  /**
   * exponential average bucket processing time by hour (milliseconds)
   * @aliases bteah, bucketsTimeExpAvgHour
   */
  "buckets.time.exp_avg_hour"?: string;
}
