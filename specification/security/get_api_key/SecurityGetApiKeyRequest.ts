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
import { Id, MediaType, Name, Username } from '@_types/common'

/**
 * Get API key information.
 *
 * Retrieves information for one or more API keys.
 * NOTE: If you have only the `manage_own_api_key` privilege, this API returns only the API keys that you own.
 * If you have `read_security`, `manage_api_key` or greater privileges (including `manage_security`), this API returns all API keys regardless of ownership.
 * @rest_spec_name security.get_api_key
 * @availability stack since=6.7.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_own_api_key, read_security
 * @doc_id security-api-get-api-key
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_security/api_key'
      methods: ['GET']
    }
  ]
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * An API key id.
     * This parameter cannot be used with any of `name`, `realm_name` or `username`.
     */
    id?: Id
    /**
     * An API key name.
     * This parameter cannot be used with any of `id`, `realm_name` or `username`.
     * It supports prefix search with wildcard.
     */
    name?: Name
    /**
     * A boolean flag that can be used to query API keys owned by the currently authenticated user.
     * The `realm_name` or `username` parameters cannot be specified when this parameter is set to `true` as they are assumed to be the currently authenticated ones.
     * @server_default false
     */
    owner?: boolean
    /**
     * The name of an authentication realm.
     * This parameter cannot be used with either `id` or `name` or when `owner` flag is set to `true`.
     */
    realm_name?: Name
    /**
     * The username of a user.
     * This parameter cannot be used with either `id` or `name` or when `owner` flag is set to `true`.
     */
    username?: Username
    /**
     * Return the snapshot of the owner user's role descriptors
     * associated with the API key. An API key's actual
     * permission is the intersection of its assigned role
     * descriptors and the owner user's role descriptors.
     * @server_default false
     * @availability stack since=8.5.0
     * @availability serverless
     */
    with_limited_by?: boolean
    /**
     * A boolean flag that can be used to query API keys that are currently active. An API key is considered active if it is neither invalidated, nor expired at query time. You can specify this together with other parameters such as `owner` or `name`. If `active_only` is false, the response will include both active and inactive (expired or invalidated) keys.
     * @server_default false
     * @availability stack since=8.10.0
     * @availability serverless
     */
    active_only?: boolean
    /**
     * Determines whether to also retrieve the profile uid, for the API key owner principal, if it exists.
     * @server_default false
     * @availability stack since=8.14.0
     * @availability serverless
     */
    with_profile_uid?: boolean
  }
}
