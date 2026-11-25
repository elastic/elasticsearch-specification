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
 * Find Prometheus series.
 *
 * Get the time series that match the given selectors.
 * The endpoint mirrors the Prometheus `/api/v1/series` endpoint.
 * @rest_spec_name prometheus.series
 * @availability stack since=9.4.0 stability=tech_preview visibility=public
 * @availability serverless stability=tech_preview visibility=public
 * @doc_id prometheus-series
 * @doc_tag prometheus
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_prometheus/api/v1/series'
      methods: ['GET', 'POST']
    },
    {
      path: '/_prometheus/{index}/api/v1/series'
      methods: ['GET', 'POST']
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
     * Repeated series selectors, for example `up{job="prometheus"}`. At least one is required.
     * @codegen_name match
     */
    'match[]': string[]
    /**
     * The start of the time range, as an RFC 3339 timestamp or Unix time in seconds.
     * Defaults to 24 hours before `end`.
     */
    start?: string
    /**
     * The end of the time range, as an RFC 3339 timestamp or Unix time in seconds.
     * Defaults to the current time.
     */
    end?: string
    /**
     * The maximum number of series to return. `0` means no limit from the request.
     */
    limit?: integer
  }
}
