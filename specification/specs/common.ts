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

type Uri = string

// Date/Time
type DateString = string
type Timestamp = string
type TimeSpan = string
type EpochMillis = string | long

@class_serializer('ErrorCauseFormatter')
class ErrorCause {
  type: string
  reason: string

  caused_by?: ErrorCause
  shard?: integer | string
  stack_trace?: string

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
@class_serializer('ErrorFormatter')
class MainError extends ErrorCause {
  headers?: Dictionary<string, string>
  root_cause: ErrorCause[]
}
type short = number
type byte = number
type integer = number
type uint = number
type long = number
type ulong = number
type float = number
type double = number

//strongly typed path parameters these are aliases so we can expose documentation
//Some languages that support type alias or typed value types might want to keep these types
//others might rewrite to the underlying valuetypes

// TODO clean up Id and Name variants and make sure all API's use one purposefully
// Id includes numeric support, Name does not
type ScrollId = string
type ScrollIds = string // TODO: array of ScrollIds

type CategoryId = string
type ActionIds = string // TODO: check if this should be an array of ActionId

type Id = string
type Ids = Id | Id[]
type NodeId = string

type IndexName = string
type Indices = string | string[]
type IndexAlias = string
type IndexPattern = string
type IndexPatterns = IndexPattern[]

type Type = string
type Types = Type | Type[]

type Routing = string | number
type LongId = string
//TODO encode metrics as API specific enums
type IndexMetrics = string
type Metrics = string | string[]

type Name = string
type Names = string | string[]

type DataStreamName = string

type ByteSize = long | string

type Percentage = string | float

// Versionining Numbers & Strings
type VersionNumber = long
type VersionNumbers = VersionNumber[]
type VersionString = string
type VersionStrings = VersionString[]

// TODO: replace all uuid's with this type
type Uuid = string

// _seq_no
type SequenceNumber = integer

type NodeIds = string
type PropertyName = string
type RelationName = string
type TaskId = string | integer
type Fuzziness = string | integer
type MultiTermQueryRewrite = string
type GeoTilePrecision = number
type GeoHashPrecision = number
/** Path to field or array of paths. Some API's support wildcards in the path to select multiple fields.  */
type Field = string
type Fields = Field | Field[]

type WaitForActiveShards = integer | WaitForActiveShardOptions

/**
 * The aggregation name as returned from the server. Depending whether typed_keys is specified this could come back
 * in the form of `name#type` instead of simply `name`
 */
type AggregateName = string

/**
 * The suggestion name as returned from the server. Depending whether typed_keys is specified this could come back
 * in the form of `name#type` instead of simply `name`
 */
type SuggestionName = string

/**
 * QL Types
 */
type SqlRow = UserDefinedValue[]

/** A reference to a date field with formatting instructions on how to return the date */
class DateField {
  field: Field
  format?: string
  include_unmapped?: boolean
}

/** Rather then documenting `object` this specifies places in the response that depend on the mapping and or request
 * e.g the result of a script can be anything from value types to objects  */
class UserDefinedValue {}

class LatLon {
  lat: double
  lon: double
}

/** For empty Class assignments */
class EmptyObject {}
