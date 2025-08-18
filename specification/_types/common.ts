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

import { AdditionalProperties } from '@spec_utils/behaviors'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { double, integer, long } from './Numeric'

/**
 * A field value.
 * @codegen_names long, double, string, boolean, null, any
 */
// Note: the ending `UserDefinedValue` includes all other union members, but we keep them explicit so that
// code generators can provide direct access to scalar values, which are the most common use case.
export type FieldValue =
  | long
  | double
  | string
  | boolean
  | null
  | UserDefinedValue

/**
 * A scalar value.
 * @codegen_names long, double, string, boolean, null
 */
export type ScalarValue = long | double | string | boolean | null

export class UrlParameter {}

export type Uri = string

//strongly typed path parameters these are aliases so we can expose documentation
//Some languages that support type alias or typed value types might want to keep these types
//others might rewrite to the underlying valuetypes

// TODO clean up Id and Name variants and make sure all API's use one purposefully
// Id includes numeric support, Name does not
export type ScrollId = string
export type ScrollIds = ScrollId | ScrollId[]

export type CategoryId = string
export type ActionIds = string // TODO: check if this should be an array of ActionId

export type Id = string
export type Ids = Id | Id[]
export type NodeId = string
export type NodeIds = NodeId | NodeId[]

export type IndexName = string
export type Indices = IndexName | IndexName[]
export type IndexAlias = string
export type IndexPattern = string
export type IndexPatterns = IndexPattern[]

export type Routing = string
export type LongId = string
//TODO encode metrics as API specific enums
export type IndexMetrics = string
export type Metrics = string | string[]

export type ClusterAlias = string

export type Name = string
export type Names = Name | Name[]

export type Namespace = string
export type Service = string

export type PipelineName = string
export type GrokPattern = string

/** @doc_id modules-node */
export type NodeName = string

/** @doc_id data-stream-path-param  */
export type DataStreamName = string

export type DataStreamNames = DataStreamName | DataStreamName[]

/** @doc_id byte-units */
export type ByteSize = long | string

export type Metadata = Dictionary<string, UserDefinedValue>

// Versioning Numbers & Strings
export type VersionNumber = long
export type VersionNumbers = VersionNumber[]
export type VersionString = string
export type VersionStrings = VersionString[]
export enum VersionType {
  /**
   * Use internal versioning that starts at 1 and increments with each update or delete.
   */
  internal,
  /**
   * Only index the document if the specified version is strictly higher than the version of the stored document or if there is no existing document.
   */
  external,
  /**
   * Only index the document if the specified version is equal or higher than the version of the stored document or if there is no existing document.
   * NOTE: The `external_gte` version type is meant for special use cases and should be used with care.
   * If used incorrectly, it can result in loss of data.
   */
  external_gte,
  /**
   * This option is deprecated because it can cause primary and replica shards to diverge.
   */
  force
}

// TODO: replace all uuid's with this type
export type Uuid = string

// _seq_no
export type SequenceNumber = long

export type PropertyName = string
export type RelationName = string
export type TaskId = string | integer
/** @doc_id fuzziness */
export type Fuzziness = string | integer
/** @doc_id query-dsl-multi-term-rewrite */
export type MultiTermQueryRewrite = string

/** Path to field or array of paths. Some API's support wildcards in the path to select multiple fields.  */
export type Field = string
export type Fields = Field | Field[]

/** @codegen_names count, option */
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
 * @doc_id query-dsl-minimum-should-match
 */
export type MinimumShouldMatch = integer | string

/**
 * Byte size units. These units use powers of 1024, so 1 kB means 1024 bytes.
 *
 * @doc_id byte-units
 */
export enum Bytes {
  bytes = 'b',
  kilo_bytes = 'kb',
  mega_bytes = 'mb',
  giga_bytes = 'gb',
  tera_bytes = 'tb',
  peta_bytes = 'pb'
}

export enum Conflicts {
  /**
   * Stop reindexing if there are conflicts.
   */
  abort,
  /**
   * Continue reindexing even if there are conflicts.
   */
  proceed
}

export type Username = string
export type Password = string

export class ElasticsearchResponseBase {}

export class ElasticsearchUrlFormatter {}

/**
 * Type of index that wildcard expressions can match.
 */
export enum ExpandWildcard {
  /** Match any data stream or index, including hidden ones. */
  all,
  /** Match open, non-hidden indices. Also matches any non-hidden data stream. */
  open,
  /** Match closed, non-hidden indices. Also matches any non-hidden data stream. Data streams cannot be closed. */
  closed,
  /** Match hidden data streams and hidden indices. Must be combined with `open`, `closed`, or `both`. */
  hidden,
  /** Wildcard expressions are not accepted. */
  none
}

export type ExpandWildcards = ExpandWildcard | ExpandWildcard[]

/**
 * Health status of the cluster, based on the state of its primary and replica shards.
 */
export enum HealthStatus {
  // ES will send this enum as upper or lowercase depending on the APIs
  /**
   * All shards are assigned.
   * @aliases GREEN
   */
  green,
  /**
   * All primary shards are assigned, but one or more replica shards are unassigned. If a node in the cluster fails, some data could be unavailable until that node is repaired.
   * @aliases YELLOW
   */
  yellow,
  /**
   * One or more primary shards are unassigned, so some data is unavailable. This can occur briefly during cluster startup as primary shards are assigned.
   * @aliases RED
   */
  red,
  unknown,
  unavailable
}

export enum HttpMethod {
  GET,
  POST,
  PUT,
  DELETE,
  HEAD
}

export enum Level {
  cluster,
  indices,
  shards
}

export enum OpType {
  /**
   * Overwrite any documents that already exist.
   */
  index,
  /**
   * Only index documents that do not already exist.
   */
  create
}

/**
 * @es_quirk This is a boolean that evolved into an enum. ES also accepts plain booleans for true and false.
 */
export enum Refresh {
  true,
  false,
  wait_for
}

export enum SearchType {
  /** Documents are scored using local term and document frequencies for the shard. This is usually faster but less accurate. */
  query_then_fetch,
  /** Documents are scored using global term and document frequencies across all shards. This is usually slower but more accurate. */
  dfs_query_then_fetch
}

export enum SuggestMode {
  /**
   * Only generate suggestions for terms that are not in the shard.
   */
  missing,
  /**
   * Only suggest terms that occur in more docs on the shard than the original term.
   */
  popular,
  /**
   * Suggest any matching suggestions based on terms in the suggest text.
   */
  always
}

export enum ThreadType {
  cpu,
  wait,
  block,
  gpu,
  mem
}

/** @doc_id cluster-health */
export enum WaitForActiveShardOptions {
  'all',
  'index-setting'
}

export enum WaitForEvents {
  immediate,
  urgent,
  high,
  normal,
  low,
  languid
}

/**
 * @behavior_meta AdditionalProperties fieldname=metadata description="Document metadata"
 */
// Additional properties are the meta fields
export class InlineGet<TDocument>
  implements AdditionalProperties<string, UserDefinedValue>
{
  fields?: Dictionary<string, UserDefinedValue>
  found: boolean
  _seq_no?: SequenceNumber
  _primary_term?: long
  _routing?: Routing
  _source?: TDocument
}

/**
 * Controls how to deal with unavailable concrete indices (closed or missing), how wildcard expressions are expanded
 * to actual indices (all, closed or open indices) and how to deal with wildcard expressions that resolve to no indices.
 */
export class IndicesOptions {
  /**
   * If false, the request returns an error if any wildcard expression, index alias, or `_all` value targets only
   * missing or closed indices. This behavior applies even if the request targets other open indices. For example,
   * a request targeting `foo*,bar*` returns an error if an index starts with `foo` but no index starts with `bar`.
   */
  allow_no_indices?: boolean
  /**
   * Type of index that wildcard patterns can match. If the request can target data streams, this argument
   * determines whether wildcard expressions match hidden data streams. Supports comma-separated values,
   * such as `open,hidden`.
   */
  expand_wildcards?: ExpandWildcards
  /**
   * If true, missing or closed indices are not included in the response.
   * @server_default false
   */
  ignore_unavailable?: boolean
  /**
   * If true, concrete, expanded or aliased indices are ignored when frozen.
   * @server_default true
   */
  ignore_throttled?: boolean
}

/**
 * Slices configuration used to parallelize a process.
 *
 * @codegen_names value, computed
 */
export type Slices = integer | SlicesCalculation

/**
 * Named computations to calculate the number of slices
 */
export enum SlicesCalculation {
  /**
   * Let Elasticsearch choose a reasonable number for most data streams and indices.
   */
  auto
}

export enum ClusterInfoTarget {
  _all,
  http,
  ingest,
  thread_pool,
  script
}

export type ClusterInfoTargets = ClusterInfoTarget | ClusterInfoTarget[]
