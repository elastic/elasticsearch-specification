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

import { Name } from '@_types/common'
import { integer } from '@_types/Numeric'
import { DurationValue, UnitMillis } from '@_types/Time'

export class GeoIpDownloadStatistics {
  /** Total number of successful database downloads. */
  successful_downloads: integer
  /** Total number of failed database downloads. */
  failed_downloads: integer
  /** Total milliseconds spent downloading databases. */
  total_download_time: DurationValue<UnitMillis>
  /** Current number of databases available for use. */
  databases_count: integer
  /** Total number of database updates skipped. */
  skipped_updates: integer
  /** Total number of databases not updated after 30 days */
  expired_databases: integer
}

/** Downloaded databases for the node. The field key is the node ID. */
export class GeoIpNodeDatabases {
  /** Downloaded databases for the node. */
  databases: GeoIpNodeDatabaseName[]
  /** Downloaded database files, including related license files. Elasticsearch stores these files in the node’s temporary directory: $ES_TMPDIR/geoip-databases/<node_id>. */
  files_in_temp: string[]
}

export class GeoIpNodeDatabaseName {
  /** Name of the database. */
  name: Name
}
