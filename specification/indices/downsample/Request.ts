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

import { DownsampleConfig } from '@indices/_types/Downsample'
import { RequestBase } from '@_types/Base'
import { IndexName } from '@_types/common'

/**
 * Aggregates a time series (TSDS) index and stores pre-computed statistical summaries (`min`, `max`, `sum`, `value_count` and `avg`) for each metric field grouped by a configured time interval.
 * @doc_id indices-downsample-data-stream
 * @rest_spec_name indices.downsample
 * @availability stack since=8.5.0 stability=experimental
 * @availability serverless stability=experimental visibility=private
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * Name of the time series index to downsample.
     */
    index: IndexName
    /**
     * Name of the index to create.
     */
    target_index: IndexName
  }
  /** @codegen_name config */
  body?: DownsampleConfig
}
