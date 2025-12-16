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
import { Id, MediaType } from '@_types/common'
import { Duration } from '@_types/Time'
import { DatabaseConfiguration } from '@ingest/_types/Database'

/**
 * Create or update an IP geolocation database configuration.
 *
 * @rest_spec_name ingest.put_ip_location_database
 * @availability stack since=8.15.0 stability=stable
 * @availability serverless visibility=private
 * @cluster_privileges manage
 * @doc_id ip-location-put-database
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_ingest/ip_location/database/{id}'
      methods: ['PUT']
    }
  ]
  path_parts: {
    /**
     * The database configuration identifier.
     */
    id: Id
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * The period to wait for a connection to the master node.
     * If no response is received before the timeout expires, the request fails and returns an error.
     * A value of `-1` indicates that the request should never time out.
     * @server_default 30s */
    master_timeout?: Duration
    /**
     * The period to wait for a response from all relevant nodes in the cluster after updating the cluster metadata.
     * If no response is received before the timeout expires, the cluster metadata update still applies but the response indicates that it was not completely acknowledged.
     * A value of `-1` indicates that the request should never time out.
     * @server_default 30s */
    timeout?: Duration
  }
  /** @codegen_name configuration */
  body: DatabaseConfiguration
}
