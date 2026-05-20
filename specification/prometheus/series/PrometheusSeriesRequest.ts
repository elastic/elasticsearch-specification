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
import { IndexName, MediaType } from '@_types/common'
import { integer } from '@_types/Numeric'

/**
 * Find matching time series.
 *
 * Return the list of time series that match a certain set of selectors.
 * @rest_spec_name prometheus.series
 * @availability stack since=9.4.0 stability=experimental visibility=public
 * @availability serverless since=9.4.0 stability=experimental visibility=public
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_prometheus/api/v1/series'
      methods: ['GET']
    },
    {
      path: '/_prometheus/{index}/api/v1/series'
      methods: ['GET']
    }
  ]
  path_parts: {
    /**
     * An index pattern that restricts the query to a specific index.
     */
    index?: IndexName
  }
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * Repeated series selector arguments that select the series to return.
     */
    'match[]': string[]
    /**
     * The start of the time range. Defaults to `now - 24h`.
     */
    start?: string
    /**
     * The end of the time range. Defaults to now.
     */
    end?: string
    /**
     * The maximum number of results to return. `0` means no limit.
     */
    limit?: integer
  }
}
