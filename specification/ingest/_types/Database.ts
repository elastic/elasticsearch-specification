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

import { Id, Name } from '@_types/common'

/**
 * The configuration necessary to identify which IP geolocation provider to use to download a database, as well as any provider-specific configuration necessary for such downloading.
 * At present, the only supported providers are `maxmind` and `ipinfo`, and the `maxmind` provider requires that an `account_id` (string) is configured.
 * A provider (either `maxmind` or `ipinfo`) must be specified. The web and local providers can be returned as read only configurations.
 * @variants container
 */
export class DatabaseConfiguration {
  /**
   * The provider-assigned name of the IP geolocation database to download.
   * @variant container_property
   */
  name: Name

  maxmind?: Maxmind
  ipinfo?: Ipinfo
}

/**
 * @variants container
 */
export class DatabaseConfigurationFull {
  web?: Web
  local?: Local
  /**
   * The provider-assigned name of the IP geolocation database to download.
   * @variant container_property
   */
  name: Name

  maxmind?: Maxmind
  ipinfo?: Ipinfo
}

export class Maxmind {
  account_id: Id
}

export class Ipinfo {}

export class Web {}

export class Local {
  type: string
}
