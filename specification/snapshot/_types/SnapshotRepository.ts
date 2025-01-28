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
  /**
   * The Azure repository type.
   * @ext_doc_id repository-azure
   */
  type: 'azure'
  /**
   * The repository settings.
   */
  settings: AzureRepositorySettings
}

export class GcsRepository extends RepositoryBase {
  /**
   * The Google Cloud Storage repository type.
   * @ext_doc_id repository-gcs
   */
  type: 'gcs'
  /**
   * The repository settings.
   */
  settings: GcsRepositorySettings
}

export class S3Repository extends RepositoryBase {
  /**
   * The S3 repository type.
   * @ext_doc_id repository-s3
   */
  type: 's3'
  /**
   * The repository settings.
   *
   * NOTE: In addition to the specified settings, you can also use all non-secure client settings in the repository settings.
   * In this case, the client settings found in the repository settings will be merged with those of the named client used by the repository.
   * Conflicts between client and repository settings are resolved by the repository settings taking precedence over client settings.
   */
  settings: S3RepositorySettings
}

export class SharedFileSystemRepository extends RepositoryBase {
  /**
   * The shared file system repository type.
   * @ext_doc_id repository-shared-fs
   */
  type: 'fs'
  /**
   * The repository settings.
   */
  settings: SharedFileSystemRepositorySettings
}

export class ReadOnlyUrlRepository extends RepositoryBase {
  /**
   * The read-only URL repository type.
   * @ext_doc_id repository-read-only
   */
  type: 'url'
  /**
   * The repository settings.
   */
  settings: ReadOnlyUrlRepositorySettings
}

export class SourceOnlyRepository extends RepositoryBase {
  /**
   * The source-only repository type.
   * @ext_doc_id repository-source-only
   */
  type: 'source'
  /**
   * The repository settings.
   */
  settings: SourceOnlyRepositorySettings
}

export class RepositorySettingsBase {
  /**
   * Big files can be broken down into multiple smaller blobs in the blob store during snapshotting.
   * It is not recommended to change this value from its default unless there is an explicit reason for limiting the size of blobs in the repository.
   * Setting a value lower than the default can result in an increased number of API calls to the blob store during snapshot create and restore operations compared to using the default value and thus make both operations slower and more costly.
   * Specify the chunk size as a byte unit, for example: `10MB`, `5KB`, 500B.
   * The default varies by repository type.
   */
  chunk_size?: ByteSize
  /**
   * When set to `true`, metadata files are stored in compressed format.
   * This setting doesn't affect index files that are already compressed by default.
   * @server_default true
   */
  compress?: boolean
  /**
   * The maximum snapshot restore rate per node.
   * It defaults to unlimited.
   * Note that restores are also throttled through recovery settings.
   */
  max_restore_bytes_per_sec?: ByteSize
  /**
   * The maximum snapshot creation rate per node.
   * It defaults to 40mb per second.
   * Note that if the recovery settings for managed services are set, then it defaults to unlimited, and the rate is additionally throttled through recovery settings.
   */
  max_snapshot_bytes_per_sec?: ByteSize
}

export class AzureRepositorySettings extends RepositorySettingsBase {
  /**
   * The path to the repository data within the container.
   * It defaults to the root directory.
   *
   * NOTE: Don't set `base_path` when configuring a snapshot repository for Elastic Cloud Enterprise.
   * Elastic Cloud Enterprise automatically generates the `base_path` for each deployment so that multiple deployments can share the same bucket.
   */
  base_path?: string
  /**
   * The name of the Azure repository client to use.
   * @server_default default
   */
  client?: string
  /**
   * The Azure container.
   * @server_default elasticsearch-snapshots
   */
  container?: string
  /**
   * The maxmimum batch size, between 1 and 256, used for `BlobBatch` requests.
   * Defaults to 256 which is the maximum number supported by the Azure blob batch API.
   * @server_default 256
   */
  delete_objects_max_size?: integer
  /**
   * Either `primary_only` or `secondary_only`.
   * Note that if you set it to `secondary_only`, it will force `readonly` to `true`.
   * @server_default primary_only
   */
  location_mode?: string
  /**
   * The maximum number of concurrent batch delete requests that will be submitted for any individual bulk delete with `BlobBatch`.
   * Note that the effective number of concurrent deletes is further limited by the Azure client connection and event loop thread limits.
   * Defaults to 10, minimum is 1, maximum is 100.
   * @server_default 10
   */
  max_concurrent_batch_deletes?: integer
  /**
   * If `true`, the repository is read-only.
   * The cluster can retrieve and restore snapshots from the repository but not write to the repository or create snapshots in it.
   *
   * Only a cluster with write access can create snapshots in the repository.
   * All other clusters connected to the repository should have the `readonly` parameter set to `true`.
   * If `false`, the cluster can write to the repository and create snapshots in it.
   *
   * IMPORTANT: If you register the same snapshot repository with multiple clusters, only one cluster should have write access to the repository.
   * Having multiple clusters write to the repository at the same time risks corrupting the contents of the repository.
   * @server_default false
   */
  readonly?: boolean
}

export class GcsRepositorySettings extends RepositorySettingsBase {
  /**
   * The name of the bucket to be used for snapshots.
   */
  bucket: string
  /**
   * The name used by the client when it uses the Google Cloud Storage service.
   * @deprecated 6.3.0
   */
  application_name?: string
  /**
   * The path to the repository data within the bucket.
   * It defaults to the root of the bucket.
   *
   * NOTE: Don't set `base_path` when configuring a snapshot repository for Elastic Cloud Enterprise.
   * Elastic Cloud Enterprise automatically generates the `base_path` for each deployment so that multiple deployments can share the same bucket.
   */
  base_path?: string
  /**
   * The name of the client to use to connect to Google Cloud Storage.
   * @server_default default
   */
  client?: string
  /**
   * If `true`, the repository is read-only.
   * The cluster can retrieve and restore snapshots from the repository but not write to the repository or create snapshots in it.
   *
   * Only a cluster with write access can create snapshots in the repository.
   * All other clusters connected to the repository should have the `readonly` parameter set to `true`.
   *
   * If `false`, the cluster can write to the repository and create snapshots in it.
   *
   * IMPORTANT: If you register the same snapshot repository with multiple clusters, only one cluster should have write access to the repository.
   * Having multiple clusters write to the repository at the same time risks corrupting the contents of the repository.
   * @server_default false
   */
  readonly?: boolean
}

export class S3RepositorySettings extends RepositorySettingsBase {
  /**
   * The name of the S3 bucket to use for snapshots.
   * The bucket name must adhere to Amazon's S3 bucket naming rules.
   * @ext_doc_id repository-s3-naming
   */
  bucket: string
  /**
   * The path to the repository data within its bucket.
   * It defaults to an empty string, meaning that the repository is at the root of the bucket.
   * The value of this setting should not start or end with a forward slash (`/`).
   *
   * NOTE: Don't set base_path when configuring a snapshot repository for Elastic Cloud Enterprise.
   * Elastic Cloud Enterprise automatically generates the `base_path` for each deployment so that multiple deployments may share the same bucket.
   */
  base_path?: string
  /**
   * The minimum threshold below which the chunk is uploaded using a single request.
   * Beyond this threshold, the S3 repository will use the AWS Multipart Upload API to split the chunk into several parts, each of `buffer_size` length, and to upload each part in its own request.
   * Note that setting a buffer size lower than 5mb is not allowed since it will prevent the use of the Multipart API and may result in upload errors.
   * It is also not possible to set a buffer size greater than 5gb as it is the maximum upload size allowed by S3.
   * Defaults to `100mb` or 5% of JVM heap, whichever is smaller.
   */
  buffer_size?: ByteSize
  /**
   * The S3 repository supports all S3 canned ACLs: `private`, `public-read`, `public-read-write`, `authenticated-read`, `log-delivery-write`, `bucket-owner-read`, `bucket-owner-full-control`.
   * You could specify a canned ACL using the `canned_acl` setting.
   * When the S3 repository creates buckets and objects, it adds the canned ACL into the buckets and objects.
   * @server_default private
   * @ext_doc_id repository-s3-canned-acl
   */
  canned_acl?: string
  /**
   * The name of the S3 client to use to connect to S3.
   * @server_default default
   */
  client?: string
  /**
   * The maxmimum batch size, between 1 and 1000, used for `DeleteObjects` requests.
   * Defaults to 1000 which is the maximum number supported by the  AWS DeleteObjects API.
   * @server_default 1000
   * @ext_doc_id repository-s3-delete-objects
   */
  delete_objects_max_size?: integer
  /**
   * The time to wait before trying again if an attempt to read a linearizable register fails.
   * @server_default 5s
   */
  get_register_retry_delay?: Duration
  /**
   * The maximum number of parts that Elasticsearch will write during a multipart upload of a single object.
   * Files which are larger than `buffer_size × max_multipart_parts` will be chunked into several smaller objects.
   * Elasticsearch may also split a file across multiple objects to satisfy other constraints such as the `chunk_size` limit.
   * Defaults to `10000` which is the maximum number of parts in a multipart upload in AWS S3.
   * @server_default 10000
   */
  max_multipart_parts?: integer
  /**
   * The maximum number of possibly-dangling multipart uploads to clean up in each batch of snapshot deletions.
   * Defaults to 1000 which is the maximum number supported by the AWS ListMultipartUploads API.
   * If set to `0`, Elasticsearch will not attempt to clean up dangling multipart uploads.
   * @server_default 1000
   * @ext_doc_id repository-s3-list-multipart
   */
  max_multipart_upload_cleanup_size?: integer
  /**
   * If true, the repository is read-only.
   * The cluster can retrieve and restore snapshots from the repository but not write to the repository or create snapshots in it.
   *
   * Only a cluster with write access can create snapshots in the repository.
   * All other clusters connected to the repository should have the `readonly` parameter set to `true`.
   *
   * If `false`, the cluster can write to the repository and create snapshots in it.
   *
   * IMPORTANT: If you register the same snapshot repository with multiple clusters, only one cluster should have write access to the repository.
   * Having multiple clusters write to the repository at the same time risks corrupting the contents of the repository.
   * @server_default false
   */
  readonly?: boolean
  /**
   * When set to `true`, files are encrypted on server side using an AES256 algorithm.
   * @server_default false
   */
  server_side_encryption?: boolean
  /**
   * The S3 storage class for objects written to the repository.
   * Values may be `standard`, `reduced_redundancy`, `standard_ia`, `onezone_ia`, and `intelligent_tiering`.
   * @server_default standard
   * @ext_doc_id repository-s3-storage-classes
   */
  storage_class?: string
  /**
   * The delay before the first retry and the amount the delay is incremented by on each subsequent retry.
   * The default is 50ms and the minimum is 0ms.
   * @server_default 50ms
   */
  'throttled_delete_retry.delay_increment'?: Duration
  /**
   * The upper bound on how long the delays between retries will grow to.
   * The default is 5s and the minimum is 0ms.
   * @server_default 5s
   */
  'throttled_delete_retry.maximum_delay'?: Duration
  /**
   * The number times to retry a throttled snapshot deletion.
   * The default is 10 and the minimum value is 0 which will disable retries altogether.
   * Note that if retries are enabled in the Azure client, each of these retries comprises that many client-level retries.
   */
  'throttled_delete_retry.maximum_number_of_retries'?: integer
}

export class SharedFileSystemRepositorySettings extends RepositorySettingsBase {
  /**
   * The location of the shared filesystem used to store and retrieve snapshots.
   * This location must be registered in the `path.repo` setting on all master and data nodes in the cluster.
   * Unlike `path.repo`, this setting supports only a single file path.
   */
  location: string
  /**
   * The maximum number of snapshots the repository can contain.
   * The default is `Integer.MAX_VALUE`, which is 2^31-1 or `2147483647`.
   * @server_default 2147483647
   */
  max_number_of_snapshots?: integer
  /**
   * If `true`, the repository is read-only.
   * The cluster can retrieve and restore snapshots from the repository but not write to the repository or create snapshots in it.
   *
   * Only a cluster with write access can create snapshots in the repository.
   * All other clusters connected to the repository should have the `readonly` parameter set to `true`.
   *
   * If `false`, the cluster can write to the repository and create snapshots in it.
   *
   * IMPORTANT: If you register the same snapshot repository with multiple clusters, only one cluster should have write access to the repository.
   * Having multiple clusters write to the repository at the same time risks corrupting the contents of the repository.
   * @server_default false
   */
  readonly?: boolean
}

export class ReadOnlyUrlRepositorySettings extends RepositorySettingsBase {
  /**
   * The maximum number of retries for HTTP and HTTPS URLs.
   * @server_default 5
   */
  http_max_retries?: integer
  /**
   * The maximum wait time for data transfers over a connection.
   * @server_default 50s
   */
  http_socket_timeout?: Duration
  /**
   * The maximum number of snapshots the repository can contain.
   * The default is `Integer.MAX_VALUE`, which is 2^31-1 or `2147483647`.
   * @server_default 2147483647
   */
  max_number_of_snapshots?: integer
  /**
   * The URL location of the root of the shared filesystem repository.
   * The following protocols are supported:
   *
   * * `file`
   * * `ftp`
   * * `http`
   * * `https`
   * * `jar`
   *
   * URLs using the HTTP, HTTPS, or FTP protocols must be explicitly allowed with the `repositories.url.allowed_urls` cluster setting.
   * This setting supports wildcards in the place of a host, path, query, or fragment in the URL.
   *
   * URLs using the file protocol must point to the location of a shared filesystem accessible to all master and data nodes in the cluster.
   * This location must be registered in the `path.repo` setting.
   * You don't need to register URLs using the FTP, HTTP, HTTPS, or JAR protocols in the `path.repo` setting.
   */
  url: string
}

export class SourceOnlyRepositorySettings extends RepositorySettingsBase {
  /**
   * The delegated repository type. For valid values, refer to the `type` parameter.
   * Source repositories can use `settings` properties for its delegated repository type.
   */
  delegate_type?: string
  /**
   * The maximum number of snapshots the repository can contain.
   * The default is `Integer.MAX_VALUE`, which is 2^31-1 or `2147483647`.
   * @server_default 2147483647
   */
  max_number_of_snapshots?: integer
  /**
   * If `true`, the repository is read-only.
   * The cluster can retrieve and restore snapshots from the repository but not write to the repository or create snapshots in it.
   *
   * Only a cluster with write access can create snapshots in the repository.
   * All other clusters connected to the repository should have the `readonly` parameter set to `true`.
   *
   * If `false`, the cluster can write to the repository and create snapshots in it.
   *
   * IMPORTANT: If you register the same snapshot repository with multiple clusters, only one cluster should have write access to the repository.
   * Having multiple clusters write to the repository at the same time risks corrupting the contents of the repository.
   * @aliases readonly
   * @server_default false
   */
  read_only?: boolean
}
