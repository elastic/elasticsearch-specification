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
import { IndexName, MediaType } from '@_types/common'
import { integer } from '@_types/Numeric'

/**
 * Get Prometheus metric metadata.
 *
 * Get the type and unit of the metrics in time series data streams, over a fixed 24-hour lookback.
 * The `help` field is always an empty string.
 * The endpoint mirrors the Prometheus `/api/v1/metadata` endpoint, without `match[]`, `start` and `end`.
 * @rest_spec_name prometheus.metadata
 * @availability stack since=9.5.0 stability=tech_preview visibility=public
 * @availability serverless stability=tech_preview visibility=public
 * @doc_id prometheus-metadata
 * @doc_tag prometheus
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_prometheus/api/v1/metadata'
      methods: ['GET']
    },
    {
      path: '/_prometheus/{index}/api/v1/metadata'
      methods: ['GET']
    }
  ]
  path_parts: {
    /**
     * An index expression that restricts which indices are considered, for example `metrics-generic.prometheus-*`.
     * If you omit it, the default expression `metrics-*` is used.
     * Only indices with `index.mode: time_series` are considered.
     */
    index?: IndexName
  }
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * Restricts the response to one metric name.
     */
    metric?: string
    /**
     * The maximum number of distinct metrics to return. `0` means no limit from the request.
     */
    limit?: integer
    /**
     * The maximum number of metadata entries to return for each metric. `0` means no limit from the request.
     */
    limit_per_metric?: integer
  }
}
