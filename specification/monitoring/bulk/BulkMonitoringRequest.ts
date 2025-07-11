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
import { Duration } from '@_types/Time'
import { OperationContainer, UpdateAction } from '@global/bulk/types'

/**
 * Send monitoring data.
 * This API is used by the monitoring features to send monitoring data.
 * @rest_spec_name monitoring.bulk
 * @availability stack since=6.3.0 stability=stable visibility=private
 * @doc_id apis
 */
export interface Request<TDocument, TPartialDocument> extends RequestBase {
  urls: [
    {
      path: '/_monitoring/bulk'
      methods: ['POST', 'PUT']
    },
    {
      /** @deprecated 7.0.0 Specifying types in urls has been deprecated */
      path: '/_monitoring/{type}/bulk'
      methods: ['POST', 'PUT']
    }
  ]
  path_parts: {
    /**
     * @deprecated 7.0.0
     */
    type?: string
  }

  query_parameters: {
    /**
     * Identifier of the monitored system
     */
    system_id: string

    /**
     *
     */
    system_api_version: string

    /**
     * Collection interval (e.g., '10s' or '10000ms') of the payload
     */
    interval: Duration
  }

  /** @codegen_name operations */
  // BulkMonitoringRequest accepts a body request that has the same format as the BulkRequest
  // See BulkRequest for additional notes.
  body: Array<
    OperationContainer | UpdateAction<TDocument, TPartialDocument> | TDocument
  >
}
