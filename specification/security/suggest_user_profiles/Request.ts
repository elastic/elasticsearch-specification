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
 * Get suggestions for user profiles that match specified search criteria.
 * @rest_spec_name security.suggest_user_profiles
 * @since 8.2.0
 * @stability experimental
 */
export interface Request extends RequestBase {
  query_parameters: {
    /**
     * List of filters for the `data` field of the profile document.
     * To return all content use `data=*`. To return a subset of content
     * use `data=<key>` to retrieve content nested under the specified `<key>`.
     * By default returns no `data` content.
     */
    data?: string | string[]
  }
  body: {
    /**
     * Query string used to match name-related fields in user profile documents.
     * Name-related fields are the user's `username`, `full_name`, and `email`.
     */
    name?: string
    /**
     * Number of profiles to return.
     * @server_default 10
     */
    size?: long
    /**
     * List of filters for the `data` field of the profile document.
     * To return all content use `data=*`. To return a subset of content
     * use `data=<key>` to retrieve content nested under the specified `<key>`.
     * By default returns no `data` content.
     */
    data?: string | string[]
    /**
     * Extra search criteria to improve relevance of the suggestion result.
     * Profiles matching the spcified hint are ranked higher in the response.
     * Profiles not matching the hint don't exclude the profile from the response
     * as long as the profile matches the `name` field query.
     */
    hint?: Hint
  }
}
