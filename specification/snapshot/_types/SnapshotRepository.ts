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
import { Base } from '@xpack/usage/types'
import { AdditionalProperties } from '@spec_utils/behaviors'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { Stringified } from '@spec_utils/Stringified'

export class BaseRepository<Settings> {
  uuid?: Uuid
  settings: Settings
}

/**
 * @variants internal tag='type'
 * @non_exhaustive
 */
export type Repository =
  | S3Repository
  | GoogleCloudRepository
  | AzureRepository
  | SourceRepository
  | UrlRepository
  | FsRepository
  | HdfsRepository

export class S3Repository extends BaseRepository<S3RepositorySettings> {
  type: 's3'
}

class BlobStoreSettings {
  chunk_size?: ByteSize
  concurrent_streams?: Stringified<integer>
  compress?: Stringified<boolean>
  max_number_of_snapshots?: integer
  max_snapshot_bytes_per_sec?: ByteSize
  max_restore_bytes_per_sec?: ByteSize
  /** @aliases read_only */
  readonly?: Stringified<boolean>
  use_for_peer_recovery?: boolean
}

export class S3RepositorySettings {
  base_path?: string
  bucket?: string
  buffer_size?: ByteSize
  client?: string
  location: string
  server_size_encryption?: boolean
  storage_class?: string
}

export class AzureRepository extends BaseRepository<AzureRepositorySettings> {
  type: 'azure'
}

export class AzureRepositorySettings extends BlobStoreSettings {
  /** aliases account */
  client?: string
  container?: string
  location_mode: AzureRepositoryLocation
  max_single_part_upload_size: ByteSize
}

export enum AzureRepositoryLocation {
  primary_only,
  secondary_only,
  primary_then_secondary,
  secondary_then_primary
}

export class GoogleCloudRepository extends BaseRepository<GoogleCloudRepositorySettings> {
  type: 'gcs'
}

export class GoogleCloudRepositorySettings extends BlobStoreSettings {
  bucket?: string
  base_path?: string
}

export class UrlRepository extends BaseRepository<UrlRepositorySettings> {
  type: 'url'
}

export class UrlRepositorySettings {
  url: string
  supported_protocols?: string
  allowed_urls?: string[]
}

export class SourceRepository extends BaseRepository<SourceRepositorySettings> {
  type: 'source'
}

export class SourceRepositorySettings
  implements AdditionalProperties<string, UserDefinedValue>
{
  delegate_type: string
}

export class FsRepository extends BaseRepository<FsRepositorySettings> {
  type: 'fs'
}

export class FsRepositorySettings extends BlobStoreSettings {
  location?: string
}

export class HdfsRepository extends BaseRepository<HdfsRepositorySettings> {
  type: 'hdfs'
}

export class HdfsRepositorySettings extends BlobStoreSettings {
  uri: string
  path: string
  'security.principal': string
}
