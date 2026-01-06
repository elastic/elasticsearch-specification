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
import { integer } from '@_types/Numeric'

/**
 * Get data frame analytics job stats.
 *
 * @rest_spec_name ml.get_data_frame_analytics_stats
 * @availability stack since=7.3.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges monitor_ml
 * @doc_tag ml data frame
 * @doc_id get-dfanalytics-stats
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_ml/data_frame/analytics/_stats'
      methods: ['GET']
    },
    {
      path: '/_ml/data_frame/analytics/{id}/_stats'
      methods: ['GET']
    }
  ]
  path_parts: {
    /**
     * Identifier for the data frame analytics job. If you do not specify this
     * option, the API returns information for the first hundred data frame
     * analytics jobs.
     */
    id?: Id
  }
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * Specifies what to do when the request:
     *
     * 1. Contains wildcard expressions and there are no data frame analytics
     * jobs that match.
     * 2. Contains the `_all` string or no identifiers and there are no matches.
     * 3. Contains wildcard expressions and there are only partial matches.
     *
     * The default value returns an empty data_frame_analytics array when there
     * are no matches and the subset of results when there are partial matches.
     * If this parameter is `false`, the request returns a 404 status code when
     * there are no matches or only partial matches.
     * @server_default true
     */
    allow_no_match?: boolean
    /**
     * Skips the specified number of data frame analytics jobs.
     * @server_default 0
     */
    from?: integer
    /**
     * Specifies the maximum number of data frame analytics jobs to obtain.
     * @server_default 100
     */
    size?: integer
    /**
     * Defines whether the stats response should be verbose.
     * @server_default false
     */
    verbose?: boolean
  }
}
