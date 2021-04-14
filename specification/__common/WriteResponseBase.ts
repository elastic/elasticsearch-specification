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

import { ErrorCause, Id, IndexName, long, SequenceNumber, Type, VersionNumber } from './common'
import { ResponseBase } from './common_abstractions/response/ResponseBase'
import { ShardStatistics } from './common_options/hit/ShardStatistics'
import { Result } from './Result'

export class WriteResponseBase extends ResponseBase {
  _id: Id
  _index: IndexName
  _primary_term: long
  result: Result
  _seq_no: SequenceNumber
  _shards: ShardStatistics
  _type?: Type
  _version: VersionNumber
  forced_refresh?: boolean
  error?: ErrorCause
}
