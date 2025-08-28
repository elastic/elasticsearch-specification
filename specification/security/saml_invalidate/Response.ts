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

import { integer } from '@_types/Numeric'

export class Response {
  body: {
    /**
     * The number of tokens that were invalidated as part of this logout.
     */
    invalidated: integer
    /**
     * The realm name of the SAML realm in Elasticsearch that authenticated the user.
     */
    realm: string
    /**
     * A SAML logout response as a parameter so that the user can be redirected back to the SAML IdP.
     */
    redirect: string
  }
}
