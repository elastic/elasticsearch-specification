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
import { Policy } from '@enrich/_types/Policy'

/**
 * Create an enrich policy.
 *
 * Creates an enrich policy.
 * @doc_id put-enrich-policy-api
 * @rest_spec_name enrich.put_policy
 * @category ingest
 * @availability stack since=7.5.0 stability=stable
 * @availability serverless stability=stable visibility=public
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_enrich/policy/{name}'
      methods: ['PUT']
    }
  ]
  path_parts: {
    /**
     * Name of the enrich policy to create or update.
     */
    name: Name
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * Period to wait for a connection to the master node.
     * @server_default 30s
     */
    master_timeout?: Duration
  }
  body: {
    /**
     * Matches enrich data to incoming documents based on a `geo_shape` query.
     */
    geo_match?: Policy
    /**
     * Matches enrich data to incoming documents based on a `term` query.
     */
    match?: Policy
    /**
     * Matches a number, date, or IP address in incoming documents to a range in the enrich index based on a `term` query.
     */
    range?: Policy
  }
}
