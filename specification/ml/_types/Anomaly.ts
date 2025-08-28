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
  /**
   * The actual value for the bucket.
   */
  actual?: double[]
  /**
   * Information about the factors impacting the initial anomaly score.
   */
  anomaly_score_explanation?: AnomalyExplanation
  /**
   * The length of the bucket in seconds. This value matches the `bucket_span` that is specified in the job.
   */
  bucket_span: DurationValue<UnitSeconds>
  /**
   * The field used to split the data. In particular, this property is used for analyzing the splits with respect to their own history. It is used for finding unusual values in the context of the split.
   */
  by_field_name?: string
  /**
   * The value of `by_field_name`.
   */
  by_field_value?: string
  /**
   * For population analysis, an over field must be specified in the detector. This property contains an array of anomaly records that are the causes for the anomaly that has been identified for the over field. This sub-resource contains the most anomalous records for the `over_field_name`. For scalability reasons, a maximum of the 10 most significant causes of the anomaly are returned. As part of the core analytical modeling, these low-level anomaly records are aggregated for their parent over field record. The `causes` resource contains similar elements to the record resource, namely `actual`, `typical`, `geo_results.actual_point`, `geo_results.typical_point`, `*_field_name` and `*_field_value`. Probability and scores are not applicable to causes.
   */
  causes?: AnomalyCause[]
  /**
   * A unique identifier for the detector.
   */
  detector_index: integer
  /**
   * Certain functions require a field to operate on, for example, `sum()`. For those functions, this value is the name of the field to be analyzed.
   */
  field_name?: string
  /**
   * The function in which the anomaly occurs, as specified in the detector configuration. For example, `max`.
   */
  function?: string
  /**
   * The description of the function in which the anomaly occurs, as specified in the detector configuration.
   */
  function_description?: string
  /**
   * If the detector function is `lat_long`, this object contains comma delimited strings for the latitude and longitude of the actual and typical values.
   */
  geo_results?: GeoResults
  /**
   * If influencers were specified in the detector configuration, this array contains influencers that contributed to or were to blame for an anomaly.
   */
  influencers?: Influence[]
  /**
   * A normalized score between 0-100, which is based on the probability of the anomalousness of this record. This is the initial value that was calculated at the time the bucket was processed.
   */
  initial_record_score: double
  /**
   * If true, this is an interim result. In other words, the results are calculated based on partial input data.
   */
  is_interim: boolean
  /**
   * Identifier for the anomaly detection job.
   */
  job_id: string
  /**
   * The field used to split the data. In particular, this property is used for analyzing the splits with respect to the history of all splits. It is used for finding unusual values in the population of all splits.
   */
  over_field_name?: string
  /**
   * The value of `over_field_name`.
   */
  over_field_value?: string
  /**
   * The field used to segment the analysis. When you use this property, you have completely independent baselines for each value of this field.
   */
  partition_field_name?: string
  /**
   * The value of `partition_field_name`.
   */
  partition_field_value?: string
  /**
   * The probability of the individual anomaly occurring, in the range 0 to 1. For example, `0.0000772031`. This value can be held to a high precision of over 300 decimal places, so the `record_score` is provided as a human-readable and friendly interpretation of this.
   */
  probability: double
  /**
   * A normalized score between 0-100, which is based on the probability of the anomalousness of this record. Unlike `initial_record_score`, this value will be updated by a re-normalization process as new data is analyzed.
   */
  record_score: double
  /**
   * Internal. This is always set to `record`.
   */
  result_type: string
  /**
   * The start time of the bucket for which these results were calculated.
   */
  timestamp: EpochTime<UnitMillis>
  /**
   * The typical value for the bucket, according to analytical modeling.
   */
  typical?: double[]
}

export class AnomalyCause {
  actual?: double[]
  by_field_name?: Name
  by_field_value?: string
  correlated_by_field_value?: string
  field_name?: Field
  function?: string
  function_description?: string
  geo_results?: GeoResults
  influencers?: Influence[]
  over_field_name?: Name
  over_field_value?: string
  partition_field_name?: string
  partition_field_value?: string
  probability: double
  typical?: double[]
}

export class Influence {
  influencer_field_name: string
  influencer_field_values: string[]
}

export class GeoResults {
  /**
   * The actual value for the bucket formatted as a `geo_point`.
   */
  actual_point?: string
  /**
   * The typical value for the bucket formatted as a `geo_point`.
   */
  typical_point?: string
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
   * If the bucket contains fewer samples than expected, the score is reduced.
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
