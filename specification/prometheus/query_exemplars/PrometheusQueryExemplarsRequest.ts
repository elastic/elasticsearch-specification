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

/**
 * Query Prometheus exemplars.
 *
 * Get the exemplars of the series selected by a PromQL expression over a time range.
 * The endpoint mirrors the Prometheus `/api/v1/query_exemplars` endpoint.
 *
 * GET requests send parameters in the query string.
 * POST requests send the same parameters as an `application/x-www-form-urlencoded` body.
 * Form-encoded POST requests are accepted only only on authenticated TLS connections.
 * If you send the same parameter in both the query string and the form body, the API returns `400` with the standard Elasticsearch error body.
 * @rest_spec_name prometheus.query_exemplars
 * @availability stack since=9.7.0 stability=tech_preview visibility=public
 * @availability serverless stability=tech_preview visibility=public
 * @doc_id prometheus-query-exemplars
 * @doc_tag prometheus
 * @index_privileges read
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_prometheus/api/v1/query_exemplars'
      methods: ['GET', 'POST']
    },
    {
      path: '/_prometheus/{index}/api/v1/query_exemplars'
      methods: ['GET', 'POST']
    }
  ]
  path_parts: {
    /**
     * An index expression that restricts which indices are considered, for example `metrics-generic.prometheus-*`.
     * If you omit it, the default expression `metrics-*` is used.
     * Only indices with `index.mode: time_series` are considered.
     * An alias is accepted and index privileges are checked against that alias name.
     */
    index?: IndexName
  }
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * The PromQL expression that selects the series.
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
     * The evaluation timeout, as a number of seconds or a duration such as `30s`.
     * It must be positive: `0` is rejected with status code `400`.
     * The default and the maximum are the `xpack.prometheus.query.timeout` cluster setting.
     * A request can only lower that cap.
     * Set the cluster setting to `-1` to remove the default and the maximum; a positive `timeout` is then uncapped.
     * When the timeout elapses, the response is `503` with `errorType` `timeout`.
     * @server_default 2m
     */
    timeout?: string
  }
}
