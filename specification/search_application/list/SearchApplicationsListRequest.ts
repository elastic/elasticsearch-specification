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

/**
 * Get search applications.
 * Get information about search applications.
 * @rest_spec_name search_application.list
 * @availability stack since=8.8.0 stability=beta
 * @availability serverless stability=beta visibility=public
 * @cluster_privileges manage_search_application
 * @doc_id list-analytics-collection
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_application/search_application'
      methods: ['GET']
    }
  ]
  query_parameters: {
    /**
     * Query in the Lucene query string syntax.
     */
    q?: string
    /**
     * Starting offset.
     * @server_default 0
     */
    from?: integer
    /**
     * Specifies a max number of results to get.
     */
    size?: integer
  }
}
