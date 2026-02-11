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

/**
 * Get search application details.
 *
 * @rest_spec_name search_application.get
 * @category management
 * @availability stack since=8.8.0 stability=beta
 * @availability serverless stability=beta visibility=public
 * @cluster_privileges manage_search_application
 * @doc_id search-application-get
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_application/search_application/{name}'
      methods: ['GET']
    }
  ]
  path_parts: {
    /**
     * The name of the search application
     */
    name: Name
  }
  response_media_type: MediaType.Json
}
