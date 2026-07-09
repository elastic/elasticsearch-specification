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

/**
 * A region offered by a cloud service provider.
 */
export class CspRegion {
  /**
   * The cloud service provider, for example `aws`, `gcp`, or `azure`.
   */
  csp: string
  /**
   * The region identifier within the cloud service provider, for example `us-east-1`.
   */
  region: string
}

/**
 * The inference region policy that controls which cloud regions inference requests are allowed to reach.
 * Provide either `allowed_geos` or `allowed_regions`, but not both: the two fields are mutually exclusive.
 * @variants container
 */
export class RegionPolicy {
  /**
   * The list of allowed geographies, for example `us` or `eu`.
   * Mutually exclusive with `allowed_regions`.
   */
  allowed_geos?: string[]
  /**
   * The list of explicitly allowed cloud provider regions.
   * Mutually exclusive with `allowed_geos`.
   */
  allowed_regions?: CspRegion[]
}
