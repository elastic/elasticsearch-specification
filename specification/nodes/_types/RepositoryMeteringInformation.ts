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

import { Id, Name, VersionNumber } from '@_types/common'
import { long } from '@_types/Numeric'
import { EpochTime, UnitMillis } from '@_types/Time'

export class RepositoryMeteringInformation {
  /**
   * Repository name.
   */
  repository_name: Name
  /**
   * Repository type.
   */
  repository_type: string
  /**
   * Represents an unique location within the repository.
   */
  repository_location: RepositoryLocation
  /**
   * An identifier that changes every time the repository is updated.
   */
  repository_ephemeral_id: Id
  /**
   * Time the repository was created or updated. Recorded in milliseconds since the Unix Epoch.
   */
  repository_started_at: EpochTime<UnitMillis>
  /**
   * Time the repository was deleted or updated. Recorded in milliseconds since the Unix Epoch.
   */
  repository_stopped_at?: EpochTime<UnitMillis>
  /**
   * A flag that tells whether or not this object has been archived. When a repository is closed or updated the
   * repository metering information is archived and kept for a certain period of time. This allows retrieving the
   * repository metering information of previous repository instantiations.
   */
  archived: boolean
  /**
   * The cluster state version when this object was archived, this field can be used as a logical timestamp to delete
   * all the archived metrics up to an observed version. This field is only present for archived repository metering
   * information objects. The main purpose of this field is to avoid possible race conditions during repository metering
   * information deletions, i.e. deleting archived repositories metering information that we haven’t observed yet.
   */
  cluster_version?: VersionNumber
  /**
   * An object with the number of request performed against the repository grouped by request type.
   */
  request_counts: RequestCounts
}

export class RepositoryLocation {
  base_path: string
  /** Container name (Azure) */
  container?: string
  /** Bucket name (GCP, S3) */
  bucket?: string
}

export class RequestCounts {
  /** Number of Get Blob Properties requests (Azure) */
  GetBlobProperties?: long
  /** Number of Get Blob requests (Azure) */
  GetBlob?: long
  /** Number of List Blobs requests (Azure) */
  ListBlobs?: long
  /** Number of Put Blob requests (Azure) */
  PutBlob?: long
  /** Number of Put Block (Azure) */
  PutBlock?: long
  /** Number of Put Block List requests */
  PutBlockList?: long
  /** Number of get object requests (GCP, S3) */
  GetObject?: long
  /** Number of list objects requests (GCP, S3) */
  ListObjects?: long
  /**
   * Number of insert object requests, including simple, multipart and resumable uploads. Resumable uploads
   * can perform multiple http requests to insert a single object but they are considered as a single request
   * since they are billed as an individual operation. (GCP)
   */
  InsertObject?: long
  /** Number of PutObject requests (S3) */
  PutObject?: long
  /** Number of Multipart requests, including CreateMultipartUpload, UploadPart and CompleteMultipartUpload requests (S3) */
  PutMultipartObject?: long
}
