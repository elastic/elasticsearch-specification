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

export enum CatAnonalyDetectorColumn {
  /** @aliases ae */
  assignment_explanation = 0,
  /** @aliases bc, bucketsCount */
  'buckets.count' = 1,
  /** @aliases btea, bucketsTimeExpAvg */
  buckets.time.exp_avg = 2
  /** @aliases bteah, bucketsTimeExpAvgHour */
  buckets.time.exp_avg_hour = 3
  /** @aliases btmax, bucketsTimeMax */
  buckets.time.max = 4
  /** @aliases btmin, bucketsTimeMin */
  buckets.time.min = 5
  /** @aliases btt, bucketsTimeTotal */
  buckets.time.total = 6
  /** @aliases db, dataBuckets */
  data.buckets = 7
  /** @aliases der, dataEarliestRecord */
  data.earliest_record = 8
  /** @aliases deb, dataEmptyBuckets */
  data.empty_buckets = 9
  /** @aliases dib, dataInputBytes */
  data.input_bytes = 10
  /** @aliases dif, dataInputFields */
  data.input_fields = 11
  /** @aliases dir, dataInputRecords */
  data.input_records = 12
  /** @aliases did, dataInvalidDates */
  data.invalid_dates = 13
  /** @aliases dl, dataLast */
  data.last = 14
  /** @aliases dleb, dataLastEmptyBucket */
  data.last_empty_bucket = 15
  /** @aliases dlsb, dataLastSparseBucket */
  data.last_sparse_bucket = 16
  /** @aliases dlr, dataLatestRecord */
  data.latest_record = 17
  /** @aliases dmf, dataMissingFields */
  data.missing_fields = 18
  /** @aliases doot, dataOutOfOrderTimestamps */
  data.out_of_order_timestamps = 19
  /** @aliases dpf, dataProcessedFields */
  data.processed_fields = 20
  /** @aliases dpr, dataProcessedRecords */
  data.processed_records = 21
  /** @aliases dsb, dataSparseBuckets */
  data.sparse_buckets = 22
  /** @aliases fmavg, forecastsMemoryAvg */
  forecasts.memory.avg = 23
  /** @aliases fmmax, forecastsMemoryMax */
  forecasts.memory.max = 24
  /** @aliases fmmin, forecastsMemoryMin */
  forecasts.memory.min = 25
  /** @aliases fmt, forecastsMemoryTotal */
  forecasts.memory.total = 26
  /** @aliases fravg, forecastsRecordsAvg */
  forecasts.records.avg = 27
  /** @aliases frmax, forecastsRecordsMax */
  forecasts.records.max = 28
  /** @aliases frmin, forecastsRecordsMin */
  forecasts.records.min = 29
  /** @aliases frt, forecastsRecordsTotal */
  forecasts.records.total = 30
  /** @aliases ftavg, forecastsTimeAvg */
  forecasts.time.avg = 31
  /** @aliases ftmax, forecastsTimeMax */
  forecasts.time.max = 32
  /** @aliases ftmin, forecastsTimeMin */
  forecasts.time.min = 33
  /** @aliases ftt, forecastsTimeTotal */
  forecasts.time.total = 34
  /** @aliases ft, forecastsTotal */
  forecasts.total = 35
  id = 36
  /** @aliases mbaf, modelBucketAllocationFailures */
  model.bucket_allocation_failures = 37
  /** @aliases mbf, modelByFields */
  model.by_fields = 38
  /** @aliases mb, modelBytes */
  model.bytes = 39
  /** @aliases mbe, modelBytesExceeded */
  model.bytes_exceeded = 40
  /** @aliases mcs, modelCategorizationStatus */
  model.categorization_status = 41
  /** @aliases mcdc, modelCategorizedDocCount */
  model.categorized_doc_count = 42
  /** @aliases mdcc, modelDeadCategoryCount */
  model.dead_category_count = 43
  /** @aliases mdcc, modelFailedCategoryCount */
  model.failed_category_count = 44
  /** @aliases mfcc, modelFrequentCategoryCount */
  model.frequent_category_count = 45
  /** @aliases mlt, modelLogTime */
  model.log_time = 46
  /** @aliases mml, modelMemoryLimit */
  model.memory_limit = 47
  /** @aliases mms, modelMemoryStatus */
  model.memory_status = 48
  /** @aliases mof, modelOverFields */
  model.over_fields = 49
  /** @aliases mpf, modelPartitionFields */
  model.partition_fields = 50
  /** @aliases mrcc, modelRareCategoryCount */
  model.rare_category_count = 51
  /** @aliases mt, modelTimestamp */
  model.timestamp = 52
  /** @aliases mtcc, modelTotalCategoryCount */
  model.total_category_count = 53
  /** @aliases na, nodeAddress */
  node.address = 54
  /** @aliases ne, nodeEphemeralId */
  node.ephemeral_id = 55
  /** @aliases ni, nodeId */
  node.id = 56
  /** @aliases nn, nodeName */
  node.name = 57
  /** @aliases ot */
  opened_time = 58
  /** @aliases s */
  state = 59
}
export type CatAnonalyDetectorColumns = CatAnonalyDetectorColumn | CatAnonalyDetectorColumn[]