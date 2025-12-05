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
 * Delete a search application.
 *
 * Remove a search application and its associated alias. Indices attached to the search application are not removed.
 * @rest_spec_name search_application.delete
 * @availability stack since=8.8.0 stability=beta
 * @availability serverless stability=beta visibility=public
 * @cluster_privileges manage_search_application
 * @index_privileges manage
 * @doc_id search-application-delete
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_application/search_application/{name}'
      methods: ['DELETE']
    }
  ]
  path_parts: {
    /**
     * The name of the search application to delete.
     */
    name: Name
  }
  response_media_type: MediaType.Json
}
