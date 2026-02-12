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
 * Delete an index template.
 *
 * The provided <index-template> may contain multiple template names separated by a comma. If multiple template
 * names are specified then there is no wildcard support and the provided names should match completely with
 * existing templates.
 * @rest_spec_name indices.delete_index_template
 * @category management
 * @availability stack since=7.8.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_index_templates
 * @doc_id indices-delete-template
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_index_template/{name}'
      methods: ['DELETE']
    }
  ]
  path_parts: {
    /**
     * Comma-separated list of index template names used to limit the request. Wildcard (*) expressions are supported.
     */
    name: Names
  }
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    master_timeout?: Duration
    /**
     * Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    timeout?: Duration
  }
}
