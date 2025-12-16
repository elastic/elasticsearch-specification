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
import { Id, MediaType, Name } from '@_types/common'
import { Duration } from '@_types/Time'
import { Maxmind } from '@ingest/_types/Database'

/**
 * Create or update a GeoIP database configuration.
 *
 * Refer to the create or update IP geolocation database configuration API.
 * @rest_spec_name ingest.put_geoip_database
 * @availability stack since=8.15.0 stability=stable
 * @availability serverless visibility=private
 * @doc_id geoip-put-database
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_ingest/geoip/database/{id}'
      methods: ['PUT']
    }
  ]
  path_parts: {
    /**
     * ID of the database configuration to create or update.
     */
    id: Id
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * Period to wait for a connection to the master node.
     * If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s */
    master_timeout?: Duration
    /**
     * Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s */
    timeout?: Duration
  }
  body: {
    /** The provider-assigned name of the IP geolocation database to download. */
    name: Name
    /**
     * The configuration necessary to identify which IP geolocation provider to use to download the database, as well as any provider-specific configuration necessary for such downloading.
     * At present, the only supported provider is maxmind, and the maxmind provider requires that an account_id (string) is configured.
     */
    maxmind: Maxmind
  }
}
