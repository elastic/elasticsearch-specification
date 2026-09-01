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

/**
 * A cloud service provider region.
 */
export class CspRegion {
  /**
   * The cloud service provider, for example `aws`, `gcp`, or `azure`.
   */
  csp: string
  /**
   * The region of the cloud service provider, for example `us-east-1`.
   */
  region: string
}

/**
 * The region policy configuration.
 * Specify exactly one of `allowed_geos` or `allowed_regions`.
 * @variants container
 */
export class RegionPolicy {
  /**
   * The list of allowed geographic areas.
   * Mutually exclusive with `allowed_regions`.
   */
  allowed_geos?: string[]
  /**
   * The list of allowed cloud service provider regions.
   * Mutually exclusive with `allowed_geos`.
   */
  allowed_regions?: CspRegion[]
}

/**
 * The stored region policy document.
 */
export class RegionPolicyDoc {
  region_policy: RegionPolicy
  /**
   * The date and time the region policy was created.
   */
  created_at: DateTime
  /**
   * The user who created the region policy.
   */
  created_by?: string
  /**
   * The date and time the region policy was last updated.
   */
  updated_at?: DateTime
  /**
   * The user who last updated the region policy.
   */
  updated_by?: string
}
