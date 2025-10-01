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

import { AggregationContainer } from '@_types/aggregations/AggregationContainer'
import {
  DateHistogramAggregation,
  GeoTileGridAggregation,
  HistogramAggregation,
  TermsAggregation
} from '@_types/aggregations/bucket'
import { Field, IndexName, Indices } from '@_types/common'
import { RuntimeFields } from '@_types/mapping/RuntimeFields'
import { float, integer } from '@_types/Numeric'
import { QueryContainer } from '@_types/query_dsl/abstractions'
import { Duration } from '@_types/Time'
import { Dictionary } from '@spec_utils/Dictionary'

export class Destination {
  /**
   * The destination index for the transform. The mappings of the destination index are deduced based on the source
   * fields when possible. If alternate mappings are required, use the create index API prior to starting the
   * transform.
   */
  index?: IndexName
  /**
   * The unique identifier for an ingest pipeline.
   */
  pipeline?: string
}

export class Latest {
  /** Specifies the date field that is used to identify the latest documents. */
  sort: Field
  /** Specifies an array of one or more fields that are used to group the data. */
  unique_key: Field[]
}

export class Pivot {
  /**
   * Defines how to aggregate the grouped data. The following aggregations are currently supported: average, bucket
   * script, bucket selector, cardinality, filter, geo bounds, geo centroid, geo line, max, median absolute deviation,
   * min, missing, percentiles, rare terms, scripted metric, stats, sum, terms, top metrics, value count, weighted
   * average.
   * @aliases aggs
   */
  aggregations?: Dictionary<string, AggregationContainer>
  /**
   * Defines how to group the data. More than one grouping can be defined per pivot. The following groupings are
   * currently supported: date histogram, geotile grid, histogram, terms.
   */
  group_by?: Dictionary<string, PivotGroupByContainer>
}

/**
 * @variants container
 */
export class PivotGroupByContainer {
  date_histogram?: DateHistogramAggregation
  geotile_grid?: GeoTileGridAggregation
  histogram?: HistogramAggregation
  terms?: TermsAggregation
}

/**
 * @variants container
 */
export class RetentionPolicyContainer {
  /** Specifies that the transform uses a time field to set the retention policy. */
  time?: RetentionPolicy
}

export class RetentionPolicy {
  /** The date field that is used to calculate the age of the document. */
  field: Field
  /**
   * Specifies the maximum age of a document in the destination index. Documents that are older than the configured
   * value are removed from the destination index.
   */
  max_age: Duration
}

/**
 * The source of the data for the transform.
 */
export class Settings {
  /**
   * Specifies whether the transform checkpoint ranges should be optimized for performance. Such optimization can align
   * checkpoint ranges with the date histogram interval when date histogram is specified as a group source in the
   * transform config. As a result, less document updates in the destination index will be performed thus improving
   * overall performance.
   * @server_default true
   */
  align_checkpoints?: boolean
  /**
   * Defines if dates in the ouput should be written as ISO formatted string or as millis since epoch. epoch_millis was
   * the default for transforms created before version 7.11. For compatible output set this value to `true`.
   * @server_default false
   */
  dates_as_epoch_millis?: boolean
  /**
   * Specifies whether the transform should deduce the destination index mappings from the transform configuration.
   * @server_default true
   */
  deduce_mappings?: boolean
  /**
   * Specifies a limit on the number of input documents per second. This setting throttles the transform by adding a
   * wait time between search requests. The default value is null, which disables throttling.
   */
  docs_per_second?: float
  /**
   * Defines the initial page size to use for the composite aggregation for each checkpoint. If circuit breaker
   * exceptions occur, the page size is dynamically adjusted to a lower value. The minimum value is `10` and the
   * maximum is `65,536`.
   * @server_default 500
   */
  max_page_search_size?: integer
  /**
   * Specifies whether the transform checkpoint will use the Point In Time API while searching over the source index.
   * In general, Point In Time is an optimization that will reduce pressure on the source index by reducing the amount
   * of refreshes and merges, but it can be expensive if a large number of Point In Times are opened and closed for a
   * given index. The benefits and impact depend on the data being searched, the ingest rate into the source index, and
   * the amount of other consumers searching the same source index.
   * @ext_doc_id point-in-time-api
   * @server_default true
   */
  use_point_in_time?: boolean

  /**
   * If `true`, the transform runs in unattended mode. In unattended mode, the transform retries indefinitely in case
   * of an error which means the transform never fails. Setting the number of retries other than infinite fails in
   * validation.
   *
   * @server_default false
   * @availability stack since=8.5.0
   * @availability serverless
   */
  unattended?: boolean
}

export class Source {
  /**
   * The source indices for the transform. It can be a single index, an index pattern (for example, `"my-index-*""`), an
   * array of indices (for example, `["my-index-000001", "my-index-000002"]`), or an array of index patterns (for
   * example, `["my-index-*", "my-other-index-*"]`. For remote indices use the syntax `"remote_name:index_name"`. If
   * any indices are in remote clusters then the master node and at least one transform node must have the `remote_cluster_client` node role.
   */
  index: Indices
  /**
   * A query clause that retrieves a subset of data from the source index.
   */
  query?: QueryContainer
  /**
   * Definitions of search-time runtime fields that can be used by the transform. For search runtime fields all data
   * nodes, including remote nodes, must be 7.12 or later.
   * @availability stack since=7.12.0
   * @availability serverless
   */
  runtime_mappings?: RuntimeFields
}

export class Sync {}

/**
 * @variants container
 */
export class SyncContainer {
  /** Specifies that the transform uses a time field to synchronize the source and destination indices. */
  time?: TimeSync
}

export class TimeSync {
  /**
   * The time delay between the current time and the latest input data time.
   * @server_default 60s
   */
  delay?: Duration
  /**
   * The date field that is used to identify new documents in the source. In general, it’s a good idea to use a field
   * that contains the ingest timestamp. If you use a different field, you might need to set the delay such that it
   * accounts for data transmission delays.
   */
  field: Field
}
