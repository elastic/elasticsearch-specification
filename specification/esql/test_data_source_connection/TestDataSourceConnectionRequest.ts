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
import { MediaType } from '@_types/common'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

/**
 * Test an ES|QL data source connection.
 *
 * Tests whether the supplied data source configuration can establish a live connection.
 * The data source does not need to exist in cluster state: this endpoint is intended for
 * validating a new configuration before saving it.
 * The request body accepts the same `type` and `settings` fields as the create or update data
 * source API.
 *
 * @rest_spec_name esql.test_data_source_connection
 * @cluster_privileges manage
 * @availability stack since=9.5.0 stability=experimental visibility=public
 * @availability serverless stability=experimental visibility=public
 * @ext_doc_id esql-data-federation
 * @doc_id esql-test-data-source-connection
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_query/data_source/_test'
      methods: ['POST']
    }
  ]
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  body: {
    /**
     * The data source type to test. Must be a known, registered type such as `s3`, `gcs`, or `azure`.
     * Unknown types return a `400` error.
     */
    type: string
    /**
     * Type-specific connection and authentication settings to test.
     * Uses the same structure as the `settings` field in the create or update data source API.
     */
    settings?: Dictionary<string, UserDefinedValue>
  }
}
