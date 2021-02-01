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

class CatTransformsRecord {
  changes_last_detection_time: string
  checkpoint_duration_time_exp_avg: long
  create_time: DateString
  description: string
  dest_index: string
  documents_indexed: long
  documents_processed: long
  frequency: Time
  id: string
  indexed_documents_exp_avg: long
  index_failure: long
  index_time: long
  index_total: long
  max_page_search_size: long
  pages_processed: long
  pipeline: string
  processed_documents_exp_avg: long
  processing_time: long
  reason: string
  search_failure: long
  search_time: long
  search_total: long
  /** @prop_serializer IndicesFormatter */
  source_index: Indices
  state: TransformState
  transform_type: TransformType
  trigger_count: long
  version: string
}
