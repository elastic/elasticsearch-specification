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

/**
 * Get datafeed stats.
 * You can get statistics for multiple datafeeds in a single API request by
 * using a comma-separated list of datafeeds or a wildcard expression. You can
 * get statistics for all datafeeds by using `_all`, by specifying `*` as the
 * `<feed_id>`, or by omitting the `<feed_id>`. If the datafeed is stopped, the
 * only information you receive is the `datafeed_id` and the `state`.
 * This API returns a maximum of 10,000 datafeeds.
 * @rest_spec_name ml.get_datafeed_stats
 * @availability stack since=5.5.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges monitor_ml
 * @doc_tag ml anomaly
 * @doc_id ml-get-datafeed-stats
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_ml/datafeeds/{datafeed_id}/_stats'
      methods: ['GET']
    },
    {
      path: '/_ml/datafeeds/_stats'
      methods: ['GET']
    }
  ]
  path_parts: {
    /**
     * Identifier for the datafeed. It can be a datafeed identifier or a
     * wildcard expression. If you do not specify one of these options, the API
     * returns information about all datafeeds.
     */
    datafeed_id?: Ids
  }
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * Specifies what to do when the request:
     *
     * 1. Contains wildcard expressions and there are no datafeeds that match.
     * 2. Contains the `_all` string or no identifiers and there are no matches.
     * 3. Contains wildcard expressions and there are only partial matches.
     *
     * The default value is `true`, which returns an empty `datafeeds` array
     * when there are no matches and the subset of results when there are
     * partial matches. If this parameter is `false`, the request returns a
     * `404` status code when there are no matches or only partial matches.
     */
    allow_no_match?: boolean
  }
}
