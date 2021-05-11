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
import { Time } from '@_types/Time'

export class Bucket {
  anomaly_score: double
  bucket_influencers: BucketInfluencer[]
  bucket_span: Time
  event_count: long
  initial_anomaly_score: double
  is_interim: boolean
  job_id: Id
  partition_scores?: PartitionScore[]
  processing_time_ms: double
  result_type: string
  timestamp: Time
}

export class BucketInfluencer {
  /** The length of the bucket in seconds. This value matches the bucket_span that is specified in the job. */
  bucket_span: long
  /** A normalized score between 0-100, which is based on the probability of the influencer in this bucket aggregated across detectors. Unlike initial_influencer_score, this value will be updated by a re-normalization process as new data is analyzed. */
  influencer_score: double
  /** The field name of the influencer. */
  influencer_field_name: Field
  /** The entity that influenced, contributed to, or was to blame for the anomaly. */
  influencer_field_value: string
  /** A normalized score between 0-100, which is based on the probability of the influencer aggregated across detectors. This is the initial value that was calculated at the time the bucket was processed. */
  initial_influencer_score: double
  /** If true, this is an interim result. In other words, the results are calculated based on partial input data. */
  is_interim: boolean
  /** Identifier for the anomaly detection job. */
  job_id: Id
  /** The probability that the influencer has this behavior, in the range 0 to 1. This value can be held to a high precision of over 300 decimal places, so the influencer_score is provided as a human-readable and friendly interpretation of this. */
  probability: double
  /** Internal. This value is always set to influencer. */
  result_type: string
  /** The start time of the bucket for which these results were calculated. */
  timestamp: Time
  foo?: string // TODO ??? - the tests carry this prop but :shrug:
}

export class OverallBucket {
  /** The length of the bucket in seconds. Matches the job with the longest bucket_span value. */
  bucket_span: long
  /** If true, this is an interim result. In other words, the results are calculated based on partial input data. */
  is_interim: boolean
  /** An array of objects that contain the max_anomaly_score per job_id. */
  jobs: OverallBucketJob[]
  /** The top_n average of the maximum bucket anomaly_score per job. */
  overall_score: double
  /** Internal. This is always set to overall_bucket. */
  result_type: string
  /** The start time of the bucket for which these results were calculated. */
  timestamp: Time
}
export class OverallBucketJob {
  job_id: Id
  max_anomaly_score: double
}

export class PartitionScore {
  initial_record_score: double
  partition_field_name: Field
  partition_field_value: string
  probability: double
  record_score: double
}
