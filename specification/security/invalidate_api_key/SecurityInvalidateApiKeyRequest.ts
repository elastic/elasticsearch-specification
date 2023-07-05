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
import { Id, Name, Username } from '@_types/common'

/**
 * Invalidates one or more API keys.
 * The `manage_api_key` privilege allows deleting any API keys.
 * The `manage_own_api_key` only allows deleting API keys that are owned by the user.
 * In addition, with the `manage_own_api_key` privilege, an invalidation request must be issued in one of the three formats:
 * - Set the parameter `owner=true`.
 * - Or, set both `username` and `realm_name` to match the user’s identity.
 * - Or, if the request is issued by an API key, i.e. an API key invalidates itself, specify its ID in the `ids` field.
 * @rest_spec_name security.invalidate_api_key
 * @availability stack since=6.7.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_api_key, manage_own_api_key
 */
export interface Request extends RequestBase {
  body: {
    id?: Id
    /**
     * A list of API key ids.
     * This parameter cannot be used with any of `name`, `realm_name`, or `username`.
     */
    ids?: Id[]
    /**
     * An API key name.
     * This parameter cannot be used with any of `ids`, `realm_name` or `username`.
     */
    name?: Name
    /**
     * Can be used to query API keys owned by the currently authenticated user.
     * The `realm_name` or `username` parameters cannot be specified when this parameter is set to `true` as they are assumed to be the currently authenticated ones.
     * @server_default false
     */
    owner?: boolean
    /**
     * The name of an authentication realm.
     * This parameter cannot be used with either `ids` or `name`, or when `owner` flag is set to `true`.
     */
    realm_name?: string
    /**
     * The username of a user.
     * This parameter cannot be used with either `ids` or `name`, or when `owner` flag is set to `true`.
     */
    username?: Username
  }
}
