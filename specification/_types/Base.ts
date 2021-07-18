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
  Type,
  VersionNumber,
  VersionString
} from './common'
import { ErrorCause, MainError } from './Errors'
import { integer, long } from './Numeric'
import { Result } from './Result'
import { ShardStatistics } from './Stats'
import { DateString } from './Time'

export class RequestBase implements CommonQueryParameters {}

export class WriteResponseBase {
  _id: Id
  _index: IndexName
  _primary_term: long
  result: Result
  _seq_no: SequenceNumber
  _shards: ShardStatistics
  _type?: Type
  _version: VersionNumber
  forced_refresh?: boolean
}

export class AcknowledgedResponseBase {
  /** For a successful response, this value is always true. On failure, an exception is returned instead. */
  acknowledged: boolean
}

export class DictionaryResponseBase<TKey, TValue> {}

export class DynamicResponseBase {}

export class ElasticsearchVersionInfo {
  build_date: DateString
  build_flavor: string
  build_hash: string
  build_snapshot: boolean
  build_type: string
  lucene_version: VersionString
  minimum_index_compatibility_version: VersionString
  minimum_wire_compatibility_version: VersionString
  number: string
}

export class ErrorResponseBase {
  error: MainError | string
  status: integer
}

export class IndicesResponseBase extends AcknowledgedResponseBase {
  _shards?: ShardStatistics
}

export class ShardsOperationResponseBase {
  _shards: ShardStatistics
}

export class CustomResponseBuilderBase {}
