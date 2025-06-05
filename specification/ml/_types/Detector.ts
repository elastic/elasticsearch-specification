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

import { Field } from '@_types/common'
import { integer } from '@_types/Numeric'
import { OverloadOf } from '@spec_utils/behaviors'
import { DetectionRule } from './Rule'

export class Detector {
  /**
   * The field used to split the data. In particular, this property is used for analyzing the splits with respect to their own history. It is used for finding unusual values in the context of the split.
   */
  by_field_name?: Field
  /**
   * Custom rules enable you to customize the way detectors operate. For example, a rule may dictate conditions under which results should be skipped. Kibana refers to custom rules as job rules.
   */
  custom_rules?: DetectionRule[]
  /**
   * A description of the detector.
   */
  detector_description?: string
  /**
   * A unique identifier for the detector. This identifier is based on the order of the detectors in the `analysis_config`, starting at zero. If you specify a value for this property, it is ignored.
   */
  detector_index?: integer
  /**
   * If set, frequent entities are excluded from influencing the anomaly results. Entities can be considered frequent over time or frequent in a population. If you are working with both over and by fields, you can set `exclude_frequent` to `all` for both fields, or to `by` or `over` for those specific fields.
   */
  exclude_frequent?: ExcludeFrequent
  /**
   * The field that the detector uses in the function. If you use an event rate function such as count or rare, do not specify this field. The `field_name` cannot contain double quotes or backslashes.
   */
  field_name?: Field
  /**
   * The analysis function that is used. For example, `count`, `rare`, `mean`, `min`, `max`, or `sum`.
   */
  function?: string
  /**
   * The field used to split the data. In particular, this property is used for analyzing the splits with respect to the history of all splits. It is used for finding unusual values in the population of all splits.
   */
  over_field_name?: Field
  /**
   * The field used to segment the analysis. When you use this property, you have completely independent baselines for each value of this field.
   */
  partition_field_name?: Field
  /**
   * Defines whether a new series is used as the null series when there is no value for the by or partition fields.
   * @server_default false
   */
  use_null?: boolean
}

export class DetectorRead implements OverloadOf<Detector> {
  /**
   * The field used to split the data.
   * In particular, this property is used for analyzing the splits with respect to their own history.
   * It is used for finding unusual values in the context of the split.
   */
  by_field_name?: Field
  /**
   * An array of custom rule objects, which enable you to customize the way detectors operate.
   * For example, a rule may dictate to the detector conditions under which results should be skipped.
   * Kibana refers to custom rules as job rules.
   */
  custom_rules?: DetectionRule[]
  /**
   * A description of the detector.
   */
  detector_description?: string
  /**
   * A unique identifier for the detector.
   * This identifier is based on the order of the detectors in the `analysis_config`, starting at zero.
   */
  detector_index?: integer
  /**
   * Contains one of the following values: `all`, `none`, `by`, or `over`.
   * If set, frequent entities are excluded from influencing the anomaly results.
   * Entities can be considered frequent over time or frequent in a population.
   * If you are working with both over and by fields, then you can set `exclude_frequent` to all for both fields, or to `by` or `over` for those specific fields.
   */
  exclude_frequent?: ExcludeFrequent
  /**
   * The field that the detector uses in the function.
   * If you use an event rate function such as `count` or `rare`, do not specify this field.
   */
  field_name?: Field
  /**
   * The analysis function that is used.
   * For example, `count`, `rare`, `mean`, `min`, `max`, and `sum`.
   * @doc_id ml-functions
   */
  function: string
  /**
   * The field used to split the data.
   * In particular, this property is used for analyzing the splits with respect to the history of all splits.
   * It is used for finding unusual values in the population of all splits.
   */
  over_field_name?: Field
  /**
   * The field used to segment the analysis.
   * When you use this property, you have completely independent baselines for each value of this field.
   */
  partition_field_name?: Field
  /**
   * Defines whether a new series is used as the null series when there is no value for the by or partition fields.
   * @server_default false
   */
  use_null?: boolean
}

export class DetectorUpdate {
  /**
   * A unique identifier for the detector.
   * This identifier is based on the order of the detectors in the `analysis_config`, starting at zero.
   */
  detector_index: integer
  /**
   * A description of the detector.
   */
  description?: string
  /**
   * An array of custom rule objects, which enable you to customize the way detectors operate.
   * For example, a rule may dictate to the detector conditions under which results should be skipped.
   * Kibana refers to custom rules as job rules.
   */
  custom_rules?: DetectionRule[]
}

export enum ExcludeFrequent {
  all,
  none,
  by,
  over
}
