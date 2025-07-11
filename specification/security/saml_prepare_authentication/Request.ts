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
 * Prepare SAML authentication.
 *
 * Create a SAML authentication request (`<AuthnRequest>`) as a URL string based on the configuration of the respective SAML realm in Elasticsearch.
 *
 * NOTE: This API is intended for use by custom web applications other than Kibana.
 * If you are using Kibana, refer to the documentation for configuring SAML single-sign-on on the Elastic Stack.
 *
 * This API returns a URL pointing to the SAML Identity Provider.
 * You can use the URL to redirect the browser of the user in order to continue the authentication process.
 * The URL includes a single parameter named `SAMLRequest`, which contains a SAML Authentication request that is deflated and Base64 encoded.
 * If the configuration dictates that SAML authentication requests should be signed, the URL has two extra parameters named `SigAlg` and `Signature`.
 * These parameters contain the algorithm used for the signature and the signature value itself.
 * It also returns a random string that uniquely identifies this SAML Authentication request.
 * The caller of this API needs to store this identifier as it needs to be used in a following step of the authentication process.
 * @rest_spec_name security.saml_prepare_authentication
 * @availability stack since=7.5.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @doc_id security-api-saml-prepare-authentication
 * @ext_doc_id security-saml-guide
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_security/saml/prepare'
      methods: ['POST']
    }
  ]
  body: {
    /**
     * The Assertion Consumer Service URL that matches the one of the SAML realms in Elasticsearch.
     * The realm is used to generate the authentication request. You must specify either this parameter or the `realm` parameter.
     */
    acs?: string
    /**
     * The name of the SAML realm in Elasticsearch for which the configuration is used to generate the authentication request.
     * You must specify either this parameter or the `acs` parameter.
     */
    realm?: string
    /**
     * A string that will be included in the redirect URL that this API returns as the `RelayState` query parameter.
     * If the Authentication Request is signed, this value is used as part of the signature computation.
     */
    relay_state?: string
  }
}
