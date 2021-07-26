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

import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { integer, long } from './Numeric'

export class UrlParameter {}

export type Uri = string

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

export type Routing = string
export type LongId = string
//TODO encode metrics as API specific enums
export type IndexMetrics = string
export type Metrics = string | string[]

export type Name = string
export type Names = string | string[]

export type Namespace = string
export type Service = string

export type PipelineName = string

/** @doc_url https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-node.html#modules-node */
export type NodeName = string

/** @doc_url https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-create-data-stream.html#indices-create-data-stream-api-path-params */
export type DataStreamName = string

/** @doc_url https://www.elastic.co/guide/en/elasticsearch/reference/current/common-options.html#byte-units */
export type ByteSize = long | string

export type Metadata = Dictionary<string, UserDefinedValue>

// Versioning Numbers & Strings
export type VersionNumber = long
export type VersionNumbers = VersionNumber[]
export type VersionString = string
export type VersionStrings = VersionString[]
export enum VersionType {
  internal = 0,
  external = 1,
  external_gte = 2,
  force = 3
}

// TODO: replace all uuid's with this type
export type Uuid = string

// _seq_no
export type SequenceNumber = integer

export type NodeIds = string
export type PropertyName = string
export type RelationName = string
export type TaskId = string | integer
export type Fuzziness = string | integer
/** @doc_url https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-multi-term-rewrite.html */
export type MultiTermQueryRewrite = string

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

// Container Type for HTTP Headers
export type HttpHeaders = Dictionary<string, string | string[]>

/** For empty Class assignments */
export class EmptyObject {}

/**
 * The minimum number of terms that should match as integer, percentage or range
 * @doc_url https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-minimum-should-match.html
 */
export type MinimumShouldMatch = integer | string

export enum ShapeRelation {
  intersects = 0,
  disjoint = 1,
  within = 2
}

export enum Bytes {
  b = 0,
  k = 1,
  kb = 2,
  m = 3,
  mb = 4,
  g = 5,
  gb = 6,
  t = 7,
  tb = 8,
  p = 9,
  pb = 10
}

/**
 * Whenever the byte size of data needs to be specified, e.g. when setting a buffer size parameter, the value must specify the unit, like 10kb for 10 kilobytes. Note that these units use powers of 1024, so 1kb means 1024 bytes.
 * @doc_url https://www.elastic.co/guide/en/elasticsearch/reference/current/common-options.html#byte-units
 */
//type ByteSize = long | string
// TODO -- move here

export enum Conflicts {
  abort = 0,
  proceed = 1
}

export type Username = string
export type Password = string

export enum DefaultOperator {
  AND = 0,
  OR = 1
}

export class ElasticsearchResponseBase {}

export class ElasticsearchUrlFormatter {}

/**
 * Type of index that wildcard expressions can match.
 */
export enum ExpandWildcardOptions {
  /** Match any data stream or index, including hidden ones. */
  all = 0,
  /** Match open, non-hidden indices. Also matches any non-hidden data stream. */
  open = 1,
  /** Match closed, non-hidden indices. Also matches any non-hidden data stream. Data streams cannot be closed. */
  closed = 2,
  /** Match hidden data streams and hidden indices. Must be combined with open, closed, or both. */
  hidden = 3,
  /** Wildcard expressions are not accepted. */
  none = 4
}

export type ExpandWildcards =
  | ExpandWildcardOptions
  | Array<ExpandWildcardOptions>
  | string

export enum GroupBy {
  nodes = 0,
  parents = 1,
  none = 2
}

/**
 * Health status of the cluster, based on the state of its primary and replica shards.
 */
export enum Health {
  /** All shards are assigned. */
  green = 0,
  /** All primary shards are assigned, but one or more replica shards are unassigned. If a node in the cluster fails, some data could be unavailable until that node is repaired. */
  yellow = 1,
  /** One or more primary shards are unassigned, so some data is unavailable. This can occur briefly during cluster startup as primary shards are assigned. */
  red = 2
}

export enum HttpMethod {
  GET = 0,
  POST = 1,
  PUT = 2,
  DELETE = 3,
  HEAD = 4
}

export enum Level {
  cluster = 0,
  indices = 1,
  shards = 2
}

export enum OpType {
  index = 0,
  create = 1
}

export type Refresh = boolean | RefreshOptions
export enum RefreshOptions {
  wait_for = 1
}

export enum SearchType {
  /** Documents are scored using local term and document frequencies for the shard. This is usually faster but less accurate. */
  query_then_fetch = 0,
  /** Documents are scored using global term and document frequencies across all shards. This is usually slower but more accurate. */
  dfs_query_then_fetch = 1
}

export enum Size {
  Raw = 0,
  k = 1,
  m = 2,
  g = 3,
  t = 4,
  p = 5
}

export enum SuggestMode {
  missing = 0,
  popular = 1,
  always = 2
}

export enum ThreadType {
  cpu = 0,
  wait = 1,
  block = 2
}

// TODO: @see WaitForActiveShards & https://www.elastic.co/guide/en/elasticsearch/reference/current/cluster-health.html
export enum WaitForActiveShardOptions {
  'all' = 0
}

export enum WaitForEvents {
  immediate = 0,
  urgent = 1,
  high = 2,
  normal = 3,
  low = 4,
  languid = 5
}

export enum WaitForStatus {
  green = 0,
  yellow = 1,
  red = 2
}

export class InlineGet<TDocument> {
  fields?: Dictionary<string, UserDefinedValue>
  found: boolean
  _seq_no: SequenceNumber
  _primary_term: long
  _routing?: Routing
  _source: TDocument
}
