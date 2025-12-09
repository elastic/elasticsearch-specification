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
 * Get an enrich policy.
 *
 * Returns information about an enrich policy.
 * @rest_spec_name enrich.get_policy
 * @availability stack since=7.5.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @doc_id get-enrich-policy-api
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_enrich/policy/{name}'
      methods: ['GET']
    },
    {
      path: '/_enrich/policy'
      methods: ['GET']
    }
  ]
  path_parts: {
    /**
     * Comma-separated list of enrich policy names used to limit the request.
     * To return information for all enrich policies, omit this parameter.
     */
    name?: Names
  }
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * Period to wait for a connection to the master node.
     * @server_default 30s
     */
    master_timeout?: Duration
  }
}
