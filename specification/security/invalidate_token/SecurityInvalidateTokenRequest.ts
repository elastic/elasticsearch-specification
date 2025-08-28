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
import { Name, Username } from '@_types/common'

/**
 * Invalidate a token.
 *
 * The access tokens returned by the get token API have a finite period of time for which they are valid.
 * After that time period, they can no longer be used.
 * The time period is defined by the `xpack.security.authc.token.timeout` setting.
 *
 * The refresh tokens returned by the get token API are only valid for 24 hours.
 * They can also be used exactly once.
 * If you want to invalidate one or more access or refresh tokens immediately, use this invalidate token API.
 *
 * NOTE: While all parameters are optional, at least one of them is required.
 * More specifically, either one of `token` or `refresh_token` parameters is required.
 * If none of these two are specified, then `realm_name` and/or `username` need to be specified.
 * @rest_spec_name security.invalidate_token
 * @availability stack since=5.5.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @doc_id security-api-invalidate-token
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_security/oauth2/token'
      methods: ['DELETE']
    }
  ]
  body: {
    /**
     * An access token.
     * This parameter cannot be used if any of `refresh_token`, `realm_name`, or `username` are used.
     */
    token?: string
    /**
     * A refresh token.
     * This parameter cannot be used if any of `refresh_token`, `realm_name`, or `username` are used.
     */
    refresh_token?: string
    /**
     * The name of an authentication realm.
     * This parameter cannot be used with either `refresh_token` or `token`.
     */
    realm_name?: Name
    /**
     * The username of a user.
     * This parameter cannot be used with either `refresh_token` or `token`.
     */
    username?: Username
  }
}
