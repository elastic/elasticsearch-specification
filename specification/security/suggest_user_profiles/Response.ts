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

import { RelationName } from '@_types/common'
import { long } from '@_types/Numeric'
import { UserProfile } from '@security/_types/UserProfile'

export class TotalUserProfiles {
  value: long
  relation: RelationName
}

export class Response {
  body: {
    /**
     * Metadata about the number of matching profiles.
     */
    total: TotalUserProfiles
    /**
     * The number of milliseconds it took Elasticsearch to run the request.
     */
    took: long
    /**
     * A list of profile documents, ordered by relevance, that match the search criteria.
     */
    profiles: UserProfile[]
  }
}
