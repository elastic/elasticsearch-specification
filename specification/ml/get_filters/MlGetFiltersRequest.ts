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
import { Ids, MediaType } from '@_types/common'
import { integer } from '@_types/Numeric'

/**
 * Get filters.
 * You can get a single filter or all filters.
 * @rest_spec_name ml.get_filters
 * @availability stack since=5.5.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_ml
 * @doc_tag ml anomaly
 * @doc_id ml-get-filter
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_ml/filters'
      methods: ['GET']
    },
    {
      path: '/_ml/filters/{filter_id}'
      methods: ['GET']
    }
  ]
  path_parts: {
    /**
     * A string that uniquely identifies a filter.
     */
    filter_id?: Ids
  }
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * Skips the specified number of filters.
     * @server_default 0
     */
    from?: integer
    /**
     * Specifies the maximum number of filters to obtain.
     * @server_default 100
     */
    size?: integer
  }
}
