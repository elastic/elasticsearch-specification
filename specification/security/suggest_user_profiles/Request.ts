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
import { long } from '@_types/Numeric'
import { Hint } from './types'

/**
 * Suggest a user profile.
 *
 * Get suggestions for user profiles that match specified search criteria.
 *
 * NOTE: The user profile feature is designed only for use by Kibana and Elastic's Observability, Enterprise Search, and Elastic Security solutions.
 * Individual users and external applications should not call this API directly.
 * Elastic reserves the right to change or remove this feature in future releases without prior notice.
 * @rest_spec_name security.suggest_user_profiles
 * @availability stack since=8.2.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges read_security
 * @doc_id security-api-suggest
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_security/profile/_suggest'
      methods: ['GET', 'POST']
    }
  ]
  query_parameters: {
    /**
     * A comma-separated list of filters for the `data` field of the profile document.
     * To return all content use `data=*`.
     * To return a subset of content, use `data=<key>` to retrieve content nested under the specified `<key>`.
     * By default, the API returns no `data` content.
     * It is an error to specify `data` as both the query parameter and the request body field.
     */
    data?: string | string[]
  }
  body: {
    /**
     * A query string used to match name-related fields in user profile documents.
     * Name-related fields are the user's `username`, `full_name`, and `email`.
     */
    name?: string
    /**
     * The number of profiles to return.
     * @server_default 10
     */
    size?: long
    /**
     * A comma-separated list of filters for the `data` field of the profile document.
     * To return all content use `data=*`.
     * To return a subset of content, use `data=<key>` to retrieve content nested under the specified `<key>`.
     * By default, the API returns no `data` content.
     * It is an error to specify `data` as both the query parameter and the request body field.
     */
    data?: string | string[]
    /**
     * Extra search criteria to improve relevance of the suggestion result.
     * Profiles matching the spcified hint are ranked higher in the response.
     * Profiles not matching the hint aren't excluded from the response as long as the profile matches the `name` field query.
     */
    hint?: Hint
  }
}
