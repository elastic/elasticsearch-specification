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

import { Id, Name, VersionString } from '@_types/common'
import { TransportAddress } from '@_types/Networking'
import { integer } from '@_types/Numeric'
import { Dictionary, SingleKeyDictionary } from '@spec_utils/Dictionary'

export type DiscoveryNode = SingleKeyDictionary<Id, DiscoveryNodeContent>

export class DiscoveryNodeContent {
  name?: Name
  ephemeral_id: Id
  transport_address: TransportAddress
  external_id: string
  attributes: Dictionary<string, string>
  roles: string[]
  version: VersionString
  min_index_version: integer
  max_index_version: integer
}

/**
 * Alternative representation of DiscoveryNode used in ml.get_job_stats and ml.get_datafeed_stats
 */
export class DiscoveryNodeCompact {
  name: Name
  ephemeral_id: Id
  id: Id
  transport_address: TransportAddress
  attributes: Dictionary<string, string>
}
