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
import { Id, MediaType } from '@_types/common'

/**
 * Get an ES|QL view.
 *
 * Returns a stored ES|QL view.
 *
 * @rest_spec_name esql.get_view
 * @cluster_privileges monitor_esql
 * @availability stack since=9.3.0 stability=experimental visibility=feature_flag feature_flag=esql_views
 * @availability serverless stability=experimental visibility=feature_flag feature_flag=esql_views
 * @doc_id esql-get-view
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_query/view/{name}'
      methods: ['GET']
    }
  ]
  path_parts: {
    /** The comma-separated view names to retrieve. */
    name: Id
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
}
