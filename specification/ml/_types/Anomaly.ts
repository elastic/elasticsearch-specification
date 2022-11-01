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

import { Field, Name } from '@_types/common'
import { double, integer } from '@_types/Numeric'
import { DurationValue, EpochTime, UnitMillis, UnitSeconds } from '@_types/Time'

export class Anomaly {
  actual?: double[]
  /**
   * Information about the factors impacting the initial anomaly score.
   */
  anomaly_score_explanation?: AnomalyExplanation
  bucket_span: DurationValue<UnitSeconds>
  by_field_name?: string
  by_field_value?: string
  causes?: AnomalyCause[]
  detector_index: integer
  field_name?: string
  function?: string
  function_description?: string
  influencers?: Influence[]
  initial_record_score: double
  is_interim: boolean
  job_id: string
  over_field_name?: string
  over_field_value?: string
  partition_field_name?: string
  partition_field_value?: string
  probability: double
  record_score: double
  result_type: string
  timestamp: EpochTime<UnitMillis>
  typical?: double[]
}

export class AnomalyCause {
  actual: double[]
  by_field_name: Name
  by_field_value: string
  correlated_by_field_value: string
  field_name: Field
  function: string
  function_description: string
  influencers: Influence[]
  over_field_name: Name
  over_field_value: string
  partition_field_name: string
  partition_field_value: string
  probability: double
  typical: double[]
}

export class Influence {
  influencer_field_name: string
  influencer_field_values: string[]
}

export class AnomalyExplanation {
  /**
   * Impact from the duration and magnitude of the detected anomaly relative to the historical average.
   */
  anomaly_characteristics_impact?: integer
  /**
   * Length of the detected anomaly in the number of buckets.
   */
  anomaly_length?: integer
  /**
   * Type of the detected anomaly: `spike` or `dip`.
   */
  anomaly_type?: string
  /**
   * Indicates reduction of anomaly score for the bucket with large confidence intervals. If a bucket has large confidence intervals, the score is reduced.
   */
  high_variance_penalty?: boolean
  /**
   * If the bucket contains fewer samples than expected, the score is reduced. If the bucket contains fewer samples than expected, the score is reduced.
   */
  incomplete_bucket_penalty?: boolean
  /**
   * Lower bound of the 95% confidence interval.
   */
  lower_confidence_bound?: double
  /**
   * Impact of the deviation between actual and typical values in the past 12 buckets.
   */
  multi_bucket_impact?: integer
  /**
   * Impact of the deviation between actual and typical values in the current bucket.
   */
  single_bucket_impact?: integer
  /**
   * Typical (expected) value for this bucket.
   */
  typical_value?: double
  /**
   * Upper bound of the 95% confidence interval.
   */
  upper_confidence_bound?: double
}
