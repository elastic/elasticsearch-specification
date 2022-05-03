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

import { long } from '@_types/Numeric'
import { Time } from '@_types/Time'

export enum LicenseType {
  missing = 0,
  trial = 1,
  basic = 2,
  standard = 3,
  dev = 4,
  silver = 5,
  gold = 6,
  platinum = 7,
  enterprise = 8
}

export enum LicenseStatus {
  active = 0,
  valid = 1,
  invalid = 2,
  expired = 3
}

export class License {
  expiry_date_in_millis: Time
  issue_date_in_millis: Time
  start_date_in_millis?: Time
  issued_to: string
  issuer: string
  max_nodes?: long | null
  max_resource_units?: long
  signature: string
  type: LicenseType
  uid: string
}
