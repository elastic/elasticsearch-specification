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

import { Uuid } from '@_types/common'
import { integer, long } from '@_types/Numeric'
import { DateTime, EpochTime, UnitMillis } from '@_types/Time'
import { LicenseStatus, LicenseType } from '@license/_types/License'

export class LicenseInformation {
  /**
   * The date and time the license expires in ISO 8601 format.
   */
  expiry_date?: DateTime
  /**
   * The date and time the license expires in milliseconds since the Unix epoch.
   */
  expiry_date_in_millis?: EpochTime<UnitMillis>
  /**
   * The date and time the license was issued in ISO 8601 format.
   */
  issue_date: DateTime
  /**
   * The date and time the license was issued in milliseconds since the Unix epoch.
   */
  issue_date_in_millis: EpochTime<UnitMillis>
  /**
   * The name of the customer or organization that received the license.
   */
  issued_to: string
  /**
   * The name of the organization that issued the license.
   */
  issuer: string
  /**
   * The maximum number of nodes the license allows.
   */
  max_nodes: long | null
  /**
   * The maximum number of resource units the license allows (for enterprise licenses only).
   */
  max_resource_units?: integer | null
  /**
   * The status of the license. For example,active, valid, invalid, or expired.
   */
  status: LicenseStatus
  /**
   * The type of the license. For example, trial, basic, gold, platinum, or enterprise.
   */
  type: LicenseType
  /**
   * The unique identifier of the license.
   */
  uid: Uuid
  /**
   * The date and time the license was started in milliseconds since the Unix epoch.
   */
  start_date_in_millis: EpochTime<UnitMillis>
}
