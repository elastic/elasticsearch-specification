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
  _id: Id
  _index: IndexName
  _primary_term?: long
  result: Result
  _seq_no: SequenceNumber
  _shards: ShardStatistics
  _version: VersionNumber
  forced_refresh?: boolean
}

export class AcknowledgedResponseBase {
  /** For a successful response, this value is always true. On failure, an exception is returned instead. */
  acknowledged: boolean
}

export class DynamicResponseBase {}

export class ElasticsearchVersionInfo {
  build_date: DateTime
  build_flavor: string
  build_hash: string
  build_snapshot: boolean
  build_type: string
  lucene_version: VersionString
  minimum_index_compatibility_version: VersionString
  minimum_wire_compatibility_version: VersionString
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
  _shards: ShardStatistics
}

export class CustomResponseBuilderBase {}
