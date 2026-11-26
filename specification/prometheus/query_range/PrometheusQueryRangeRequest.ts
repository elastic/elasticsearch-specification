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
 * Run a PromQL range query.
 *
 * Evaluate a PromQL expression over a time range and return matrix data.
 * The endpoint mirrors the Prometheus `/api/v1/query_range` endpoint.
 * @rest_spec_name prometheus.query_range
 * @availability stack since=9.4.0 stability=tech_preview visibility=public
 * @availability serverless stability=tech_preview visibility=public
 * @doc_id prometheus-query-range
 * @doc_tag prometheus
 * @index_privileges read
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_prometheus/api/v1/query_range'
      methods: ['GET', 'POST']
    },
    {
      path: '/_prometheus/{index}/api/v1/query_range'
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
     * The PromQL expression to evaluate.
     */
    query: string
    /**
     * The start of the range, as an RFC 3339 timestamp or Unix time in seconds.
     */
    start: string
    /**
     * The end of the range, as an RFC 3339 timestamp or Unix time in seconds.
     */
    end: string
    /**
     * The resolution between samples, as a number of seconds or a duration such as `30s` or `1h30m`.
     */
    step: string
    /**
     * The maximum number of series to return. `0` means no limit from the request.
     */
    limit?: integer
    /**
     * The evaluation timeout, as a number of seconds or a duration such as `30s`.
     * It must be positive and is capped by the `xpack.prometheus.query.timeout` cluster setting.
     */
    timeout?: string
  }
}
