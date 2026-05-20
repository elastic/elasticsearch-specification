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

/**
 * Ingest Prometheus remote write data.
 *
 * Accepts a Prometheus remote write request (protobuf-encoded) and indexes the
 * time series data into Elasticsearch.
 * @rest_spec_name prometheus.remote_write
 * @availability stack since=9.4.0 stability=experimental visibility=public
 * @availability serverless since=9.4.0 stability=experimental visibility=public
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_prometheus/api/v1/write'
      methods: ['POST']
    },
    {
      path: '/_prometheus/metrics/{dataset}/api/v1/write'
      methods: ['POST']
    },
    {
      path: '/_prometheus/metrics/{dataset}/{namespace}/api/v1/write'
      methods: ['POST']
    }
  ]
  path_parts: {
    /**
     * The Prometheus dataset name.
     */
    dataset?: string
    /**
     * The Prometheus namespace.
     */
    namespace?: string
  }
}
