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
 * The access tokens returned by the get token API have a finite period of time for which they are valid.
 * After that time period, they can no longer be used.
 * The time period is defined by the `xpack.security.authc.token.timeout` setting.
 * 
 * The refresh tokens returned by the get token API are only valid for 24 hours. They can also be used exactly once.
 * If you want to invalidate one or more access or refresh tokens immediately, use this invalidate token API.
 * @rest_spec_name security.invalidate_token
 * @availability stack since=5.5.0 stability=stable
 * @availability serverless stability=stable visibility=private
 */
export interface Request extends RequestBase {
  body: {
    token?: string
    refresh_token?: string
    realm_name?: Name
    username?: Username
  }
}
