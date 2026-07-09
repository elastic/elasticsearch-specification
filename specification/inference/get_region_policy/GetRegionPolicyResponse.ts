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
import { Username } from '@_types/common'
import { RegionPolicy } from '@inference/_types/RegionPolicy'

export class Response {
  body: {
    /**
     * The stored region policy configuration.
     */
    region_policy: RegionPolicy
    /**
     * The time the region policy was created.
     */
    created_at: DateTime
    /**
     * The user that created the region policy.
     */
    created_by?: Username
    /**
     * The time the region policy was last updated.
     */
    updated_at?: DateTime
    /**
     * The user that last updated the region policy.
     */
    updated_by?: Username
  }
}
