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
import { MediaType } from '@_types/common'

/**
 * Invalidate SAML.
 *
 * Submit a SAML LogoutRequest message to Elasticsearch for consumption.
 *
 * NOTE: This API is intended for use by custom web applications other than Kibana.
 * If you are using Kibana, refer to the documentation for configuring SAML single-sign-on on the Elastic Stack.
 *
 * The logout request comes from the SAML IdP during an IdP initiated Single Logout.
 * The custom web application can use this API to have Elasticsearch process the `LogoutRequest`.
 * After successful validation of the request, Elasticsearch invalidates the access token and refresh token that corresponds to that specific SAML principal and provides a URL that contains a SAML LogoutResponse message.
 * Thus the user can be redirected back to their IdP.
 * @rest_spec_name security.saml_invalidate
 * @category security
 * @availability stack since=7.5.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @doc_id security-api-saml-invalidate
 * @ext_doc_id security-saml-guide
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_security/saml/invalidate'
      methods: ['POST']
    }
  ]
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  body: {
    /** The Assertion Consumer Service URL that matches the one of the SAML realm in Elasticsearch that should be used. You must specify either this parameter or the `realm` parameter. */
    acs?: string
    /**
     * The query part of the URL that the user was redirected to by the SAML IdP to initiate the Single Logout.
     * This query should include a single parameter named `SAMLRequest` that contains a SAML logout request that is deflated and Base64 encoded.
     * If the SAML IdP has signed the logout request, the URL should include two extra parameters named `SigAlg` and `Signature` that contain the algorithm used for the signature and the signature value itself.
     * In order for Elasticsearch to be able to verify the IdP's signature, the value of the `query_string` field must be an exact match to the string provided by the browser.
     * The client application must not attempt to parse or process the string in any way.
     */
    query_string: string
    /** The name of the SAML realm in Elasticsearch the configuration. You must specify either this parameter or the `acs` parameter. */
    realm?: string
  }
}
