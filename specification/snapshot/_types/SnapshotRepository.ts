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

import { ByteSize, Uuid } from '@_types/common'
import { integer } from '@_types/Numeric'
import { Duration } from '@_types/Time'

/**
 * @variants internal tag='type'
 * @non_exhaustive
 */
export type Repository =
  | AzureRepository
  | GcsRepository
  | S3Repository
  | SharedFileSystemRepository
  | ReadOnlyUrlRepository
  | SourceOnlyRepository

export class RepositoryBase {
  uuid?: Uuid
}

export class AzureRepository extends RepositoryBase {
  type: 'azure'
  settings: AzureRepositorySettings
}

export class GcsRepository extends RepositoryBase {
  type: 'gcs'
  settings: GcsRepositorySettings
}

export class S3Repository extends RepositoryBase {
  type: 's3'
  settings: S3RepositorySettings
}

export class SharedFileSystemRepository extends RepositoryBase {
  type: 'fs'
  settings: SharedFileSystemRepositorySettings
}

export class ReadOnlyUrlRepository extends RepositoryBase {
  type: 'url'
  settings: ReadOnlyUrlRepositorySettings
}

export class SourceOnlyRepository extends RepositoryBase {
  type: 'source'
  settings: SourceOnlyRepositorySettings
}

/**
 * @variants internal tag='type'
 * @non_exhaustive
 */
export type RepositorySettings =
  | AzureRepositorySettings
  | GcsRepositorySettings
  | S3RepositorySettings
  | SharedFileSystemRepositorySettings
  | ReadOnlyUrlRepositorySettings
  | SourceOnlyRepositorySettings

export class RepositorySettingsBase {
  chunk_size?: ByteSize
  compress?: boolean
  max_restore_bytes_per_sec?: ByteSize
  max_snapshot_bytes_per_sec?: ByteSize
}

export class AzureRepositorySettings extends RepositorySettingsBase {
  type: 'azure'
  client?: string
  container?: string
  base_path?: string
  /**
   * @aliases readonly
   */
  read_only?: boolean
  location_mode?: string
}

export class GcsRepositorySettings extends RepositorySettingsBase {
  type: 'gcs'
  bucket: string
  client?: string
  base_path?: string
  /**
   * @aliases readonly
   */
  read_only?: boolean
  application_name?: string
}

export class S3RepositorySettings extends RepositorySettingsBase {
  type: 's3'
  bucket: string
  client?: string
  base_path?: string
  /**
   * @aliases readonly
   */
  read_only?: boolean
  server_side_encryption?: boolean
  buffer_size?: ByteSize
  canned_acl?: string
  storage_class?: string
}

export class SharedFileSystemRepositorySettings extends RepositorySettingsBase {
  type: 'fs'
  location: string
  max_number_of_snapshots?: integer
  /**
   * @aliases readonly
   */
  read_only?: boolean
}

export class ReadOnlyUrlRepositorySettings extends RepositorySettingsBase {
  type: 'url'
  http_max_retries?: integer
  http_socket_timeout?: Duration
  max_number_of_snapshots?: integer
  url: string
}

export class SourceOnlyRepositorySettings extends RepositorySettingsBase {
  type: 'source'
  delegate_type?: string
  max_number_of_snapshots?: integer
  /**
   * @aliases readonly
   */
  read_only?: boolean
}
