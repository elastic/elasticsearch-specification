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

import { Name, SequenceNumber, Username } from '@_types/common'
import { long } from '@_types/Numeric'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

export type UserProfileId = string

export class UserProfileHitMetadata {
  _primary_term: long
  _seq_no: SequenceNumber
}

export class UserProfileUser {
  email?: string | null
  full_name?: Name | null
  realm_name: Name
  realm_domain?: Name
  roles: string[]
  username: Username
}

export class UserProfile {
  uid: UserProfileId
  user: UserProfileUser
  data: Dictionary<string, UserDefinedValue>
  labels: Dictionary<string, UserDefinedValue>
  enabled?: boolean
}

export class UserProfileWithMetadata extends UserProfile {
  last_synchronized: long
  _doc: UserProfileHitMetadata
}
