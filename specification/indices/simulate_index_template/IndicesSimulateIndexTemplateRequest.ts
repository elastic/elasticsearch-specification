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
import { IndexTemplate } from '@indices/_types/IndexTemplate'

/**
 * Simulate an index.
 * Get the index configuration that would be applied to the specified index from an existing index template.
 * @rest_spec_name indices.simulate_index_template
 * @availability stack since=7.9.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @doc_id indices-simulate
 * @cluster_privileges manage_index_templates
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_index_template/_simulate_index/{name}'
      methods: ['POST']
    }
  ]
  path_parts: {
    /** Name of the index to simulate */
    name: Name
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * Whether the index template we optionally defined in the body should only be dry-run added if new or can also replace an existing one
     * @server_default false
     */
    create?: boolean
    /** User defined reason for dry-run creating the new template for simulation purposes
     * @server_default false
     */
    cause?: string
    /**
     * Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    master_timeout?: Duration
    /**
     * If true, returns all relevant default configurations for the index template.
     * @server_default false
     * @availability stack since=8.11.0 stability=stable
     * @availability serverless stability=stable
     */
    include_defaults?: boolean
  }
  /** @codegen_name index_template */
  body?: IndexTemplate
}
