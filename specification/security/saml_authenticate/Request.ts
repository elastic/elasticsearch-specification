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
 * Authenticate SAML.
 *
 * Submit a SAML response message to Elasticsearch for consumption.
 *
 * NOTE: This API is intended for use by custom web applications other than Kibana.
 * If you are using Kibana, refer to the documentation for configuring SAML single-sign-on on the Elastic Stack.
 *
 * The SAML message that is submitted can be:
 *
 * * A response to a SAML authentication request that was previously created using the SAML prepare authentication API.
 * * An unsolicited SAML message in the case of an IdP-initiated single sign-on (SSO) flow.
 *
 * In either case, the SAML message needs to be a base64 encoded XML document with a root element of `<Response>`.
 *
 * After successful validation, Elasticsearch responds with an Elasticsearch internal access token and refresh token that can be subsequently used for authentication.
 * This API endpoint essentially exchanges SAML responses that indicate successful authentication in the IdP for Elasticsearch access and refresh tokens, which can be used for authentication against Elasticsearch.
 * @rest_spec_name security.saml_authenticate
 * @availability stack since=7.5.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @doc_id security-api-saml-authenticate
 * @ext_doc_id security-saml-guide
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_security/saml/authenticate'
      methods: ['POST']
    }
  ]
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  body: {
    /** The SAML response as it was sent by the user's browser, usually a Base64 encoded XML document. */
    content: string
    /** A JSON array with all the valid SAML Request Ids that the caller of the API has for the current user. */
    ids: Ids
    /** The name of the realm that should authenticate the SAML response. Useful in cases where many SAML realms are defined. */
    realm?: string
  }
}
