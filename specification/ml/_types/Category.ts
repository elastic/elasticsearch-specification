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

import { GrokPattern, Id } from '@_types/common'
import { long, ulong } from '@_types/Numeric'

export class Category {
  /** A unique identifier for the category. category_id is unique at the job level, even when per-partition categorization is enabled. */
  category_id: ulong
  /** A list of examples of actual values that matched the category. */
  examples: string[]
  /** [experimental] A Grok pattern that could be used in Logstash or an ingest pipeline to extract fields from messages that match the category. This field is experimental and may be changed or removed in a future release. The Grok patterns that are found are not optimal, but are often a good starting point for manual tweaking. */
  grok_pattern?: GrokPattern
  /** Identifier for the anomaly detection job. */
  job_id: Id
  /** The maximum length of the fields that matched the category. The value is increased by 10% to enable matching for similar fields that have not been analyzed. */
  max_matching_length: ulong
  /** If per-partition categorization is enabled, this property identifies the field used to segment the categorization. It is not present when per-partition categorization is disabled. */
  partition_field_name?: string
  /** If per-partition categorization is enabled, this property identifies the value of the partition_field_name for the category. It is not present when per-partition categorization is disabled. */
  partition_field_value?: string
  /** A regular expression that is used to search for values that match the category. */
  regex: string
  /** A space separated list of the common tokens that are matched in values of the category. */
  terms: string
  /** The number of messages that have been matched by this category. This is only guaranteed to have the latest accurate count after a job _flush or _close */
  num_matches?: long
  /** A list of category_id entries that this current category encompasses. Any new message that is processed by the categorizer will match against this category and not any of the categories in this list. This is only guaranteed to have the latest accurate list of categories after a job _flush or _close */
  preferred_to_categories?: Id[]
  p?: string
  result_type: string
  mlcategory: string
}
