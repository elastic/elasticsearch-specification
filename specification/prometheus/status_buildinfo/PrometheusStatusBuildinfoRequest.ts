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
 * Get Prometheus build information.
 *
 * Get Elasticsearch build information in the format of the Prometheus `/api/v1/status/buildinfo` endpoint.
 * Prometheus-compatible clients, such as Grafana, call this endpoint to identify the backend and the features it supports.
 * @rest_spec_name prometheus.status_buildinfo
 * @availability stack since=9.5.0 stability=tech_preview visibility=public
 * @availability serverless stability=tech_preview visibility=public
 * @doc_id prometheus-status-buildinfo
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_prometheus/api/v1/status/buildinfo'
      methods: ['GET']
    },
    {
      path: '/_prometheus/{index}/api/v1/status/buildinfo'
      methods: ['GET']
    }
  ]
  path_parts: {
    /**
     * An index pattern, accepted for consistency with the other Prometheus endpoints.
     * The response doesn't depend on it.
     */
    index?: IndexName
  }
  response_media_type: MediaType.Json
}
