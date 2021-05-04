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

import { SourceFilter } from '@global/search/source_filtering/SourceFilter'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { 
  Fields, 
  Id, 
  IndexName, 
  Routing, 
  SequenceNumber, 
  Type, 
  VersionNumber, 
  VersionType } from '@_types/common'
import { MainError } from '@_types/Errors'
import { integer, long } from '@_types/Numeric'

export class Operation {
  _id: MultiGetId
  _index?: IndexName
  routing?: Routing
  _source?: boolean | Fields | SourceFilter
  stored_fields?: Fields
  _type?: Type
  version?: VersionNumber
  version_type?: VersionType
}

export type MultiGetId = string | integer

export class Hit<TDocument> {
  error?: MainError
  fields?: Dictionary<string, UserDefinedValue>
  found?: boolean
  _id: Id
  _index: IndexName
  _primary_term?: long
  _routing?: Routing
  _seq_no?: SequenceNumber
  _source?: TDocument
  _type?: Type
  _version?: VersionNumber
}
