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

import { DateTime } from '@_types/Time'

export class CertificateInformation {
  /**
   * If the path refers to a container file (a jks keystore, or a PKCS#12 file), it is the alias of the certificate.
   * Otherwise, it is null.
   */
  alias: string | null
  /**
   * The ISO formatted date of the certificate's expiry (not-after) date.
   */
  expiry: DateTime
  /**
   * The format of the file.
   * Valid values include `jks`, `PKCS12`, and `PEM`.
   */
  format: string
  /**
   * Indicates whether Elasticsearch has access to the private key for this certificate.
   */
  has_private_key: boolean
  /**
   * The Distinguished Name of the certificate's issuer.
   */
  issuer?: string
  /**
   * The path to the certificate, as configured in the `elasticsearch.yml` file.
   */
  path: string
  /**
   * The hexadecimal representation of the certificate's serial number.
   */
  serial_number: string
  /**
   * The Distinguished Name of the certificate's subject.
   */
  subject_dn: string
}
