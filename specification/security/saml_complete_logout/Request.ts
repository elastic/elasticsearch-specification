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
import { Ids, MediaType } from '@_types/common'

/**
 * Logout of SAML completely.
 *
 * Verifies the logout response sent from the SAML IdP.
 *
 * NOTE: This API is intended for use by custom web applications other than Kibana.
 * If you are using Kibana, refer to the documentation for configuring SAML single-sign-on on the Elastic Stack.
 *
 * The SAML IdP may send a logout response back to the SP after handling the SP-initiated SAML Single Logout.
 * This API verifies the response by ensuring the content is relevant and validating its signature.
 * An empty response is returned if the verification process is successful.
 * The response can be sent by the IdP with either the HTTP-Redirect or the HTTP-Post binding.
 * The caller of this API must prepare the request accordingly so that this API can handle either of them.
 * @rest_spec_name security.saml_complete_logout
 * @category security
 * @availability stack since=7.14.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @doc_id security-api-saml-complete-logout
 * @ext_doc_id security-saml-guide
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_security/saml/complete_logout'
      methods: ['POST']
    }
  ]
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  body: {
    /** The name of the SAML realm in Elasticsearch for which the configuration is used to verify the logout response. */
    realm: string
    /**  A JSON array with all the valid SAML Request Ids that the caller of the API has for the current user. */
    ids: Ids
    /**
     * If the SAML IdP sends the logout response with the HTTP-Redirect binding, this field must be set to the query string of the redirect URI.
     */
    query_string?: string
    /** If the SAML IdP sends the logout response with the HTTP-Post binding, this field must be set to the value of the SAMLResponse form parameter from the logout response. */
    content?: string
  }
}
