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

/**
 * Logout of SAML.
 * Submits a request to invalidate an access token and refresh token.
 * @rest_spec_name security.saml_logout
 * @availability stack since=7.5.0 stability=stable
 * @availability serverless stability=stable visibility=private
 */
export interface Request extends RequestBase {
  body: {
    /**
     * The access token that was returned as a response to calling the SAML authenticate API.
     * Alternatively, the most recent token that was received after refreshing the original one by using a refresh_token.
     */
    token: string
    /**
     * The refresh token that was returned as a response to calling the SAML authenticate API.
     * Alternatively, the most recent refresh token that was received after refreshing the original access token.
     */
    refresh_token?: string
  }
}
