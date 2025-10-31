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

import { RequestBase } from '@_types/Base'
import { IndexName } from '@_types/common'
import { DownsampleConfig } from '@indices/_types/Downsample'

/**
 * Downsample an index.
 * Downsamples a time series (TSDS) index and reduces its size by keeping the last value or by pre-aggregating metrics:
 *
 * - When running in `aggregate` mode, it pre-calculates and stores statistical summaries (`min`, `max`, `sum`, `value_count` and `avg`)
 * for each metric field grouped by a configured time interval and their dimensions.
 * - When running in `last_value` mode, it keeps the last value for each metric in the configured interval and their dimensions.
 *
 * For example, a TSDS index that contains metrics sampled every 10 seconds can be downsampled to an hourly index.
 * All documents within an hour interval are summarized and stored as a single document in the downsample index.
 *
 * NOTE: Only indices in a time series data stream are supported.
 * Neither field nor document level security can be defined on the source index.
 * The source index must be read-only (`index.blocks.write: true`).
 * @doc_id indices-downsample-data-stream
 * @rest_spec_name indices.downsample
 * @availability stack since=8.5.0 stability=experimental
 * @availability serverless stability=experimental visibility=private
 * @doc_tag data stream
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/{index}/_downsample/{target_index}'
      methods: ['POST']
    }
  ]
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
  body: DownsampleConfig
}
