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
import { MediaType, Name } from '@_types/common'
import { Duration } from '@_types/Time'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

/**
 * Create or update an ES|QL data source.
 *
 * Creates or replaces a named, type-specific data source configuration for ES|QL data federation.
 * Datasets reference data source configurations to access external data. Names must be lowercase
 * and follow index or alias naming rules.
 *
 * @rest_spec_name esql.put_data_source
 * @cluster_privileges manage
 * @availability stack since=9.5.0 stability=tech_preview visibility=public
 * @availability serverless stability=tech_preview visibility=public
 * @ext_doc_id esql-data-federation
 * @doc_id esql-put-data-source
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_query/data_source/{name}'
      methods: ['PUT']
    }
  ]
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  path_parts: {
    /** The data source name to create or update. */
    name: Name
  }
  query_parameters: {
    /**
     * Period to wait for a connection to the master node.
     * @server_default 30s
     */
    master_timeout?: Duration
    /**
     * The time to wait for the request to be completed.
     * @server_default 30s
     */
    timeout?: Duration
  }
  body: {
    /**
     * The data source type. Currently, `s3` is supported.
     * The value must be lowercase and contain no whitespace.
     */
    type: string
    /** A free-text description of the data source. */
    description?: string
    /**
     * Type-specific connection and authentication settings.
     * For `s3`, connection settings include `region` and `endpoint`. Authentication settings
     * include `auth` and the credentials required by the selected authentication method.
     */
    settings?: Dictionary<string, UserDefinedValue>
  }
}
