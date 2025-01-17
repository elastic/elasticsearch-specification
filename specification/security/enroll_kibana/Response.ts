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

export class Response {
  body: {
    token: Token
    /**
     * The CA certificate used to sign the node certificates that Elasticsearch uses for TLS on the HTTP layer.
     * The certificate is returned as a Base64 encoded string of the ASN.1 DER encoding of the certificate.
     */
    http_ca: string
  }
}

export class Token {
  /**
   * The name of the bearer token for the `elastic/kibana` service account.
   */
  name: string
  /**
   * The value of the bearer token for the `elastic/kibana` service account.
   * Use this value to authenticate the service account with Elasticsearch.
   */
  value: string
}
