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
 * Logout of OpenID Connect.
 *
 * Invalidate an access token and a refresh token that were generated as a response to the `/_security/oidc/authenticate` API.
 *
 * If the OpenID Connect authentication realm in Elasticsearch is accordingly configured, the response to this call will contain a URI pointing to the end session endpoint of the OpenID Connect Provider in order to perform single logout.
 *
 * Elasticsearch exposes all the necessary OpenID Connect related functionality with the OpenID Connect APIs.
 * These APIs are used internally by Kibana in order to provide OpenID Connect based authentication, but can also be used by other, custom web applications or other clients.
 * @rest_spec_name security.oidc_logout
 * @availability stack stability=stable visibility=public
 * @doc_id security-api-oidc-logout
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_security/oidc/logout'
      methods: ['POST']
    }
  ]
  body: {
    /**
     * The access token to be invalidated.
     */
    token: string
    /**
     * The refresh token to be invalidated.
     */
    refresh_token?: string
  }
}
