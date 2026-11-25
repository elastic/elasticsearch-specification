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
 * Index Prometheus time series into metrics data streams.
 * The request body is a Prometheus remote write 1.0 message: a protobuf `WriteRequest` sent with the content type `application/x-protobuf`, usually snappy-compressed (`Content-Encoding: snappy`).
 * A message that declares another `proto` parameter in its content type is rejected with `415 Unsupported Media Type`, so that Prometheus can fall back to remote write 1.0.
 * The data goes to the `metrics-{dataset}.prometheus-{namespace}` data stream.
 * @rest_spec_name prometheus.remote_write
 * @availability stack since=9.4.0 stability=tech_preview visibility=public
 * @availability serverless stability=tech_preview visibility=public
 * @doc_id prometheus-remote-write
 * @doc_tag prometheus
 * @index_privileges create_doc, auto_configure
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
     * The data stream dataset. The value is sanitized rather than rejected.
     * @server_default generic
     */
    dataset?: string
    /**
     * The data stream namespace. The value is sanitized rather than rejected.
     * @server_default default
     */
    namespace?: string
  }
}
