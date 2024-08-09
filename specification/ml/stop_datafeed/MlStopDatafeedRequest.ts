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
import { Duration } from '@_types/Time'

/**
 * Stop datafeeds.
 * A datafeed that is stopped ceases to retrieve data from Elasticsearch. A datafeed can be started and stopped
 * multiple times throughout its lifecycle.
 * @rest_spec_name ml.stop_datafeed
 * @availability stack since=5.4.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_ml
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * Identifier for the datafeed. You can stop multiple datafeeds in a single API request by using a comma-separated
     * list of datafeeds or a wildcard expression. You can close all datafeeds by using `_all` or by specifying `*` as
     * the identifier.
     */
    datafeed_id: Id
  }
  query_parameters: {
    /**
     * Specifies what to do when the request:
     *
     * * Contains wildcard expressions and there are no datafeeds that match.
     * * Contains the `_all` string or no identifiers and there are no matches.
     * * Contains wildcard expressions and there are only partial matches.
     *
     * If `true`, the API returns an empty datafeeds array when there are no matches and the subset of results when
     * there are partial matches. If `false`, the API returns a 404 status code when there are no matches or only
     * partial matches.
     * @server_default true */
    allow_no_match?: boolean
    /**
     * If `true`, the datafeed is stopped forcefully.
     * @server_default false */
    force?: boolean
    /**
     * Specifies the amount of time to wait until a datafeed stops.
     *  @server_default 20s */
    timeout?: Duration
  }
  body: {
    /**
     * Refer to the description for the `allow_no_match` query parameter.
     * @server_default true */
    allow_no_match?: boolean
    /**
     * Refer to the description for the `force` query parameter.
     * @server_default false */
    force?: boolean
    /**
     * Refer to the description for the `timeout` query parameter.
     *  @server_default 20s */
    timeout?: Duration
  }
}
