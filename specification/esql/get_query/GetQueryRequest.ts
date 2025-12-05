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
import { Id } from '@_types/common'

/**
 * Get a specific running ES|QL query information.
 *
 * Returns an object extended information about a running ES|QL query.
 *
 * @rest_spec_name esql.get_query
 * @cluster_privileges monitor_esql
 * @availability stack since=9.1.0 stability=experimental visibility=public
 * @availability serverless stability=experimental visibility=public
 * @doc_id esql-get-query
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_query/queries/{id}'
      methods: ['GET']
    }
  ]
  path_parts: {
    /** The query ID */
    id: Id
  }
}
