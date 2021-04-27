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

import {
  DataFrameAnalysisContainer,
  DataFrameAnalyticsDestination,
  DataFrameAnalyticsSource,
  DataFrameAnalysisAnalyzedFields
} from '@ml/_types/DataFrameAnalytics'
import { ResponseBase } from '@_types/Base'
import { ByteSize, Id, VersionString } from '@_types/common'
import { integer, long } from '@_types/Numeric'

export class Response extends ResponseBase {
  count: integer
  /** An array of data frame analytics job resources, which are sorted by the id value in ascending order. */
  data_frame_analytics: DataFrameAnalyticsSummary[]
}

export class DataFrameAnalyticsSummary {
  id: Id
  source: DataFrameAnalyticsSource
  dest: DataFrameAnalyticsDestination
  analysis: DataFrameAnalysisContainer
  description?: string
  model_memory_limit?: ByteSize
  max_num_threads?: integer
  analyzed_fields?: DataFrameAnalysisAnalyzedFields
  allow_lazy_start?: boolean
  create_time?: long
  version?: VersionString
}
