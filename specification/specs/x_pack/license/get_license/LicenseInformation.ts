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

class LicenseInformation {
  expiry_date: Date
  expiry_date_in_millis: long
  issue_date: Date
  issue_date_in_millis: long
  issued_to: string
  issuer: string
  max_nodes: long
  max_resource_units: integer
  status: LicenseStatus
  type: LicenseType
  uid: string
  expirty_date_in_millis: long
  start_date_in_millis: long
}
