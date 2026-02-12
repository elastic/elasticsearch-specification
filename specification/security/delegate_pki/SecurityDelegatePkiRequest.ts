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
 * Delegate PKI authentication.
 *
 * This API implements the exchange of an X509Certificate chain for an Elasticsearch access token.
 * The certificate chain is validated, according to RFC 5280, by sequentially considering the trust configuration of every installed PKI realm that has `delegation.enabled` set to `true`.
 * A successfully trusted client certificate is also subject to the validation of the subject distinguished name according to thw `username_pattern` of the respective realm.
 *
 * This API is called by smart and trusted proxies, such as Kibana, which terminate the user's TLS session but still want to authenticate the user by using a PKI realm—-​as if the user connected directly to Elasticsearch.
 *
 * IMPORTANT: The association between the subject public key in the target certificate and the corresponding private key is not validated.
 * This is part of the TLS authentication process and it is delegated to the proxy that calls this API.
 * The proxy is trusted to have performed the TLS authentication and this API translates that authentication into an Elasticsearch access token.
 * @rest_spec_name security.delegate_pki
 * @category security
 * @availability stack since=7.4.0 stability=stable
 * @cluster_privileges all
 * @doc_id security-api-delegate-pki
 * @ext_doc_id pki-realm
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_security/delegate_pki'
      methods: ['POST']
    }
  ]
  response_media_type: MediaType.Json
  body: {
    /**
     * The X509Certificate chain, which is represented as an ordered string array.
     * Each string in the array is a base64-encoded (Section 4 of RFC4648 - not base64url-encoded) of the certificate's DER encoding.
     *
     * The first element is the target certificate that contains the subject distinguished name that is requesting access.
     * This may be followed by additional certificates; each subsequent certificate is used to certify the previous one.
     */
    x509_certificate_chain: string[]
  }
}
