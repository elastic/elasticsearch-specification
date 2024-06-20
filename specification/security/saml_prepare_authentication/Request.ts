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
 * Creates a SAML authentication request (<AuthnRequest>) as a URL string, based on the configuration of the respective SAML realm in Elasticsearch.
 * @rest_spec_name security.saml_prepare_authentication
 * @availability stack since=7.5.0 stability=stable
 * @availability serverless stability=stable visibility=private
 */
export interface Request extends RequestBase {
  body: {
    /**
     * The Assertion Consumer Service URL that matches the one of the SAML realms in Elasticsearch.
     * The realm is used to generate the authentication request. You must specify either this parameter or the realm parameter.
     */
    acs?: string
    /**
     * The name of the SAML realm in Elasticsearch for which the configuration is used to generate the authentication request.
     * You must specify either this parameter or the acs parameter.
     */
    realm?: string
    /**
     * A string that will be included in the redirect URL that this API returns as the RelayState query parameter.
     * If the Authentication Request is signed, this value is used as part of the signature computation.
     */
    relay_state?: string
  }
}
