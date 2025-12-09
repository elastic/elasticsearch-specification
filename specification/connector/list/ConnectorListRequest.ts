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
import { Indices, MediaType, Names } from '@_types/common'
import { integer } from '@_types/Numeric'

/**
 * Get all connectors.
 *
 * Get information about all connectors.
 * @rest_spec_name connector.list
 * @availability stack since=8.12.0 stability=beta
 * @availability serverless stability=beta visibility=public
 * @doc_id connector-list
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_connector'
      methods: ['GET']
    }
  ]
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * Starting offset
     * @server_default 0
     */
    from?: integer
    /**
     * Specifies a max number of results to get
     * @server_default 100
     */
    size?: integer
    /**
     * A comma-separated list of connector index names to fetch connector documents for
     */
    index_name?: Indices
    /**
     * A comma-separated list of connector names to fetch connector documents for
     */
    connector_name?: Names
    /**
     * A comma-separated list of connector service types to fetch connector documents for
     */
    service_type?: Names
    /**
     * A wildcard query string that filters connectors with matching name, description or index name
     */
    query?: string
  }
}
