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

import { CommonQueryParameters } from '@spec_utils/behaviors'
import {
  Id,
  IndexName,
  SequenceNumber,
  VersionNumber,
  VersionString
} from './common'
import { ErrorCause } from './Errors'
import { integer, long } from './Numeric'
import { Result } from './Result'
import { ShardStatistics } from './Stats'
import { DateTime } from './Time'

export class RequestBase implements CommonQueryParameters {}

export class WriteResponseBase {
  /**
   * The unique identifier for the added document.
   */
  _id: Id
  /**
   * The name of the index the document was added to.
   */
  _index: IndexName
  /**
   * The primary term assigned to the document for the indexing operation.
   */
  _primary_term?: long
  /**
   * The result of the indexing operation: `created` or `updated`.
   */
  result: Result
  /**
   * The sequence number assigned to the document for the indexing operation.
   * Sequence numbers are used to ensure an older version of a document doesn't overwrite a newer version.
   */
  _seq_no?: SequenceNumber
  /**
   * Information about the replication process of the operation.
   */
  _shards: ShardStatistics
  /**
   * The document version, which is incremented each time the document is updated.
   */
  _version: VersionNumber
  forced_refresh?: boolean
}

export class AcknowledgedResponseBase {
  /** For a successful response, this value is always true. On failure, an exception is returned instead. */
  acknowledged: boolean
}

export class DynamicResponseBase {}

export class ElasticsearchVersionInfo {
  /**
   * The Elasticsearch Git commit's date.
   */
  build_date: DateTime
  /**
   * The build flavor. For example, `default`.
   */
  build_flavor: string
  /**
   * The Elasticsearch Git commit's SHA hash.
   */
  build_hash: string
  /**
   * Indicates whether the Elasticsearch build was a snapshot.
   */
  build_snapshot: boolean
  /**
   * The build type that corresponds to how Elasticsearch was installed.
   * For example, `docker`, `rpm`, or `tar`.
   */
  build_type: string
  /**
   * The version number of Elasticsearch's underlying Lucene software.
   */
  lucene_version: VersionString
  /**
   * The minimum index version with which the responding node can read from disk.
   */
  minimum_index_compatibility_version: VersionString
  /**
   * The minimum node version with which the responding node can communicate.
   * Also the minimum version from which you can perform a rolling upgrade.
   */
  minimum_wire_compatibility_version: VersionString
  /**
   * The Elasticsearch version number.
   *
   * ::: IMPORTANT: For Serverless deployments, this static value is always `8.11.0` and is used solely for backward compatibility with legacy clients.
   *  Serverless environments are versionless and automatically upgraded, so this value can be safely ignored.
   */
  number: string
}

/**
 * Reduced (minimal) info ElasticsearchVersion
 */
export class ElasticsearchVersionMinInfo {
  build_flavor: string
  minimum_index_compatibility_version: VersionString
  minimum_wire_compatibility_version: VersionString
  number: string
}

/**
 * The response returned by Elasticsearch when request execution did not succeed.
 */
export class ErrorResponseBase {
  // In some edge cases `error` can be a string that is a shortcut to `error.reason`, for example if you call `GET _cat/foo`.
  // If the error is a string, it means that it was not caused by an exception on ES side, but on the HTTP routing layer.
  // This should never happen in clients, because we assume we will never send malformed request.
  error: ErrorCause
  status: integer
}

export class IndicesResponseBase extends AcknowledgedResponseBase {
  _shards?: ShardStatistics
}

export class ShardsOperationResponseBase {
  // _shards is always returned, but not when wait_for_completion is false in the request
  _shards?: ShardStatistics
}

export class CustomResponseBuilderBase {}
