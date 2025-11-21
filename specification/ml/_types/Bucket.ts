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

import { Field, Id } from '@_types/common'
import { double, long } from '@_types/Numeric'
import {
  DateTime,
  DurationValue,
  EpochTime,
  UnitMillis,
  UnitSeconds
} from '@_types/Time'

export class BucketSummary {
  /**
   * The maximum anomaly score, between 0-100, for any of the bucket influencers. This is an overall, rate-limited
   * score for the job. All the anomaly records in the bucket contribute to this score. This value might be updated as
   * new data is analyzed.
   */
  anomaly_score: double
  bucket_influencers: BucketInfluencer[]
  /**
   * The length of the bucket in seconds. This value matches the bucket span that is specified in the job.
   */
  bucket_span: DurationValue<UnitSeconds>
  /**
   * The number of input data records processed in this bucket.
   */
  event_count: long
  /**
   * The maximum anomaly score for any of the bucket influencers. This is the initial value that was calculated at the
   * time the bucket was processed.
   */
  initial_anomaly_score: double
  /**
   * If true, this is an interim result. In other words, the results are calculated based on partial input data.
   */
  is_interim: boolean
  /**
   * Identifier for the anomaly detection job.
   */
  job_id: Id
  /**
   * The amount of time, in milliseconds, that it took to analyze the bucket contents and calculate results.
   */
  processing_time_ms: DurationValue<UnitMillis>
  /**
   * Internal. This value is always set to bucket.
   */
  result_type: string
  /**
   * The start time of the bucket. This timestamp uniquely identifies the bucket. Events that occur exactly at the
   * timestamp of the bucket are included in the results for the bucket.
   */
  timestamp: EpochTime<UnitMillis>
  /**
   * The start time of the bucket. This timestamp uniquely identifies the bucket. Events that occur exactly at the
   * timestamp of the bucket are included in the results for the bucket.
   */
  timestamp_string?: DateTime
}

export class BucketInfluencer {
  /**
   * A normalized score between 0-100, which is calculated for each bucket influencer. This score might be updated as
   * newer data is analyzed.
   */
  anomaly_score: double
  /**
   * The length of the bucket in seconds. This value matches the bucket span that is specified in the job.
   */
  bucket_span: DurationValue<UnitSeconds>
  /**
   * The field name of the influencer.
   */
  influencer_field_name: Field
  /**
   * The score between 0-100 for each bucket influencer. This score is the initial value that was calculated at the
   * time the bucket was processed.
   */
  initial_anomaly_score: double
  /**
   * If true, this is an interim result. In other words, the results are calculated based on partial input data.
   */
  is_interim: boolean
  /**
   * Identifier for the anomaly detection job.
   */
  job_id: Id
  /**
   * The probability that the bucket has this behavior, in the range 0 to 1. This value can be held to a high precision
   * of over 300 decimal places, so the `anomaly_score` is provided as a human-readable and friendly interpretation of
   * this.
   */
  probability: double
  /**
   * Internal.
   */
  raw_anomaly_score: double
  /**
   * Internal. This value is always set to `bucket_influencer`.
   */
  result_type: string
  /**
   * The start time of the bucket for which these results were calculated.
   */
  timestamp: EpochTime<UnitMillis>
  /**
   * The start time of the bucket for which these results were calculated.
   */
  timestamp_string?: DateTime
}

export class OverallBucket {
  /** The length of the bucket in seconds. Matches the job with the longest bucket_span value. */
  bucket_span: DurationValue<UnitSeconds>
  /** If true, this is an interim result. In other words, the results are calculated based on partial input data. */
  is_interim: boolean
  /** An array of objects that contain the max_anomaly_score per job_id. */
  jobs: OverallBucketJob[]
  /** The top_n average of the maximum bucket anomaly_score per job. */
  overall_score: double
  /** Internal. This is always set to overall_bucket. */
  result_type: string
  /** The start time of the bucket for which these results were calculated. */
  timestamp: EpochTime<UnitMillis>
  /** The start time of the bucket for which these results were calculated. */
  timestamp_string?: DateTime
}
export class OverallBucketJob {
  job_id: Id
  max_anomaly_score: double
}
