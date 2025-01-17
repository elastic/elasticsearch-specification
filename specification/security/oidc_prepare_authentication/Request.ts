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
 * Prepare OpenID connect authentication.
 *
 * Create an oAuth 2.0 authentication request as a URL string based on the configuration of the OpenID Connect authentication realm in Elasticsearch.
 *
 * The response of this API is a URL pointing to the Authorization Endpoint of the configured OpenID Connect Provider, which can be used to redirect the browser of the user in order to continue the authentication process.
 *
 * Elasticsearch exposes all the necessary OpenID Connect related functionality with the OpenID Connect APIs.
 * These APIs are used internally by Kibana in order to provide OpenID Connect based authentication, but can also be used by other, custom web applications or other clients.
 * @rest_spec_name security.oidc_prepare_authentication
 * @availability stack stability=stable visibility=public
 * @doc_id security-api-oidc-prepare
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_security/oidc/prepare'
      methods: ['POST']
    }
  ]
  body: {
    /**
     * In the case of a third party initiated single sign on, this is the issuer identifier for the OP that the RP is to send the authentication request to.
     * It cannot be specified when *realm* is specified.
     * One of *realm* or *iss* is required.
     */
    iss?: string
    /**
     * In the case of a third party initiated single sign on, it is a string value that is included in the authentication request as the *login_hint* parameter.
     * This parameter is not valid when *realm* is specified.
     */
    login_hint?: string
    /**
     * The value used to associate a client session with an ID token and to mitigate replay attacks.
     * If the caller of the API does not provide a value, Elasticsearch will generate one with sufficient entropy and return it in the response.
     */
    nonce?: string
    /**
     * The name of the OpenID Connect realm in Elasticsearch the configuration of which should be used in order to generate the authentication request.
     * It cannot be specified when *iss* is specified.
     * One of *realm* or *iss* is required.
     */
    realm?: string
    /**
     * The value used to maintain state between the authentication request and the response, typically used as a Cross-Site Request Forgery mitigation.
     * If the caller of the API does not provide a value, Elasticsearch will generate one with sufficient entropy and return it in the response.
     */
    state?: string
  }
}
