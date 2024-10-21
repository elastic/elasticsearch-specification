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
import { Ids } from '@_types/common'

/**
 * Logout of SAML completely.
 * Verifies the logout response sent from the SAML IdP.
 * @rest_spec_name security.saml_complete_logout
 * @availability stack since=7.14.0 stability=stable
 * @availability serverless stability=stable visibility=private
 */
export interface Request extends RequestBase {
  body: {
    /** The name of the SAML realm in Elasticsearch for which the configuration is used to verify the logout response. */
    realm: string
    /**  A json array with all the valid SAML Request Ids that the caller of the API has for the current user. */
    ids: Ids
    /** If the SAML IdP sends the logout response with the HTTP-Redirect binding, this field must be set to the query string of the redirect URI. */
    query_string?: string
    /** If the SAML IdP sends the logout response with the HTTP-Post binding, this field must be set to the value of the SAMLResponse form parameter from the logout response. */
    content?: string
  }
}
