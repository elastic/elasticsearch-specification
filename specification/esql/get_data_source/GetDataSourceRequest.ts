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
import { MediaType, Names } from '@_types/common'
import { Duration } from '@_types/Time'

/**
 * Get ES|QL data sources.
 *
 * Returns one or more data sources used in ES|QL data federation.
 * A concrete-name miss returns `404`; a wildcard pattern or list-all request with no match
 * returns `200` with an empty array.
 *
 * @rest_spec_name esql.get_data_source
 * @cluster_privileges manage
 * @availability stack since=9.5.0 stability=experimental visibility=public
 * @availability serverless stability=experimental visibility=public
 * @ext_doc_id esql-data-federation
 * @doc_id esql-get-data-source
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_query/data_source'
      methods: ['GET']
    },
    {
      path: '/_query/data_source/{name}'
      methods: ['GET']
    }
  ]
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  path_parts: {
    /** A comma-separated list of data source names or wildcard patterns. Omit to return all data sources. */
    name?: Names
  }
  query_parameters: {
    /**
     * Period to wait for a connection to the master node.
     * @server_default 30s
     */
    master_timeout?: Duration
  }
}
