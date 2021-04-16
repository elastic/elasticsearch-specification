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

import { PainlessExecutionPosition } from '@global/scripts_painless_execute/ExecutePainlessScriptResponse'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { ShardFailure } from './common/ShardFailure'
import { WaitForActiveShardOptions } from './common/WaitForActiveShardOptions'

function class_serializer(ns: string) {
  return function (ns: any) {}
}
function rest_spec_name(ns: string) {
  return function (ns: any) {}
}
function prop_serializer(ns: string) {
  return function (ns: any, x: any) {}
}
function request_parameter() {
  return function (ns: any, x: any) {}
}
function namespace(ns: string) {
  return function (ns: any) {}
}
function since(ns: string) {
  return function (ns: any) {}
}

export type Uri = string

// Date/Time
export type DateString = string
export type Timestamp = string
export type TimeSpan = string
export type EpochMillis = string | long

export class ErrorCause {
  type: string
  reason: string

  caused_by?: ErrorCause
  shard?: integer | string
  stack_trace?: string

  root_cause?: ErrorCause[]

  bytes_limit?: long
  bytes_wanted?: long
  column?: integer
  col?: integer
  failed_shards?: ShardFailure[]
  grouped?: boolean
  index?: IndexName
  index_uuid?: Uuid
  language?: string
  licensed_expired_feature?: string
  line?: integer
  max_buckets?: integer
  phase?: string
  property_name?: string
  processor_type?: string
  /**
   * resource id
   * @aliases resource.id
   */
  resource_id?: Ids
  /**
   * resource type
   * @aliases resource.type
   */
  resource_type?: string
  script?: string
  script_stack?: string[]
  header?: Dictionary<string, string>
  lang?: string
  position?: PainlessExecutionPosition
}

export class MainError extends ErrorCause {
  headers?: Dictionary<string, string>
  root_cause: ErrorCause[]
}
export type short = number
export type byte = number
export type integer = number
export type uint = number
export type long = number
export type ulong = number
export type float = number
export type double = number

//strongly typed path parameters these are aliases so we can expose documentation
//Some languages that support type alias or typed value types might want to keep these types
//others might rewrite to the underlying valuetypes

// TODO clean up Id and Name variants and make sure all API's use one purposefully
// Id includes numeric support, Name does not
export type ScrollId = string
export type ScrollIds = string // TODO: array of ScrollIds

export type CategoryId = string
export type ActionIds = string // TODO: check if this should be an array of ActionId

export type Id = string
export type Ids = Id | Id[]
export type NodeId = string

export type IndexName = string
export type Indices = string | string[]
export type IndexAlias = string
export type IndexPattern = string
export type IndexPatterns = IndexPattern[]

export type Type = string
export type Types = Type | Type[]

export type Routing = string | number
export type LongId = string
//TODO encode metrics as API specific enums
export type IndexMetrics = string
export type Metrics = string | string[]

export type Name = string
export type Names = string | string[]

export type PipelineName = string

/** @doc_url https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-node.html#modules-node */
export type NodeName = string

/** @doc_url https://www.elastic.co/guide/en/elasticsearch/reference/7.12/indices-create-data-stream.html#indices-create-data-stream-api-path-params */
export type DataStreamName = string

/** @doc_url https://www.elastic.co/guide/en/elasticsearch/reference/current/common-options.html#byte-units */
export type ByteSize = long | string

export type Percentage = string | float

/** @doc_url https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-meta-field.html */
export type IndexMetaData = Dictionary<string, UserDefinedValue>

// Versionining Numbers & Strings
export type VersionNumber = long
export type VersionNumbers = VersionNumber[]
export type VersionString = string
export type VersionStrings = VersionString[]

// TODO: replace all uuid's with this type
export type Uuid = string

// _seq_no
export type SequenceNumber = integer

export type NodeIds = string
export type PropertyName = string
export type RelationName = string
export type TaskId = string | integer
export type Fuzziness = string | integer
export type MultiTermQueryRewrite = string
export type GeoTilePrecision = number
export type GeoHashPrecision = number

/** Path to field or array of paths. Some API's support wildcards in the path to select multiple fields.  */
export type Field = string
export type Fields = Field | Field[]

export type WaitForActiveShards = integer | WaitForActiveShardOptions

/**
 * The aggregation name as returned from the server. Depending whether typed_keys is specified this could come back
 * in the form of `name#type` instead of simply `name`
 */
export type AggregateName = string

/**
 * The suggestion name as returned from the server. Depending whether typed_keys is specified this could come back
 * in the form of `name#type` instead of simply `name`
 */
export type SuggestionName = string

/**
 * QL Types
 */
export type SqlRow = UserDefinedValue[]

/** A reference to a date field with formatting instructions on how to return the date */
export class DateField {
  field: Field
  format?: string
  include_unmapped?: boolean
}

export class LatLon {
  lat: double
  lon: double
}

/** For empty Class assignments */
export class EmptyObject {}
