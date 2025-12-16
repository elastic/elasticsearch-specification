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
import { integer } from '@_types/Numeric'
import { MediaType } from '@_types/common'

/**
 * Get all synonym sets.
 *
 * Get a summary of all defined synonym sets.
 * @rest_spec_name synonyms.get_synonyms_sets
 * @availability stack since=8.10.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_search_synonyms
 * @doc_id synonym-set-list
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_synonyms'
      methods: ['GET']
    }
  ]
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * The starting offset for synonyms sets to retrieve.
     * @server_default 0
     */
    from?: integer
    /**
     * The maximum number of synonyms sets to retrieve.
     * @server_default 10
     */
    size?: integer
  }
}
