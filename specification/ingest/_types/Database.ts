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

export class DatabaseConfiguration {
  /** The provider-assigned name of the IP geolocation database to download. */
  name: Name
  /** The configuration necessary to identify which IP geolocation provider to use to download the database, as well as any provider-specific configuration necessary for such downloading.
   * At present, the only supported provider is maxmind, and the maxmind provider requires that an account_id (string) is configured.
   */
  maxmind: Maxmind
}

export class Maxmind {
  account_id: Id
}
