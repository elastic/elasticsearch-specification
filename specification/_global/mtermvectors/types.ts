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

import {
  Field,
  Fields,
  Id,
  IndexName,
  Routing,
  VersionNumber,
  VersionType
} from '@_types/common'
import { ErrorCause } from '@_types/Errors'
import { long } from '@_types/Numeric'
import { Filter, TermVector } from '@global/termvectors/types'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

export class Operation {
  /**
   * The ID of the document.
   */
  _id?: Id
  /**
   * The index of the document.
   */
  _index?: IndexName
  /**
   * An artificial document (a document not present in the index) for which you want to retrieve term vectors.
   */
  doc?: UserDefinedValue
  /**
   * Comma-separated list or wildcard expressions of fields to include in the statistics.
   * Used as the default list unless a specific field list is provided in the `completion_fields` or `fielddata_fields` parameters.
   */
  fields?: Fields
  /**
   * If `true`, the response includes the document count, sum of document frequencies, and sum of total term frequencies.
   * @server_default true
   */
  field_statistics?: boolean
  /**
   * Filter terms based on their tf-idf scores.
   */
  filter?: Filter
  /**
   * If `true`, the response includes term offsets.
   * @server_default true
   */
  offsets?: boolean
  /**
   * If `true`, the response includes term payloads.
   * @server_default true
   */
  payloads?: boolean
  /**
   * If `true`, the response includes term positions.
   * @server_default true
   */
  positions?: boolean
  /**
   * Custom value used to route operations to a specific shard.
   */
  routing?: Routing
  /**
   * If true, the response includes term frequency and document frequency.
   * @server_default false
   */
  term_statistics?: boolean
  /**
   * If `true`, returns the document version as part of a hit.
   */
  version?: VersionNumber
  /**
   * Specific version type.
   */
  version_type?: VersionType
}

export class TermVectorsResult {
  _id?: Id
  _index: IndexName
  _version?: VersionNumber
  took?: long
  found?: boolean
  term_vectors?: Dictionary<Field, TermVector>
  error?: ErrorCause
}
