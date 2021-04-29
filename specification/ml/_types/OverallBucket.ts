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

import { Id } from '@_types/common'
import { double, long } from '@_types/Numeric'
import { Time } from '@_types/Time'

export class OverallBucket {
  /** The length of the bucket in seconds. Matches the job with the longest bucket_span value. */
  bucket_span: long
  /** If true, this is an interim result. In other words, the results are calculated based on partial input data. */
  is_interim: boolean
  /** An array of objects that contain the max_anomaly_score per job_id. */
  jobs: OverallBucketJobInfo[]
  /** The top_n average of the maximum bucket anomaly_score per job. */
  overall_score: double
  /** Internal. This is always set to overall_bucket. */
  result_type: string
  /** The start time of the bucket for which these results were calculated. */
  timestamp: Time
}
export class OverallBucketJobInfo {
  job_id: Id
  max_anomaly_score: double
}
