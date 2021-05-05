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
import { AggregationContainer } from '@_types/aggregations/AggregationContainer'
import { DateHistogramAggregation } from '@_types/aggregations/bucket/date_histogram/DateHistogramAggregation'
import { GeoTileGridAggregation } from '@_types/aggregations/bucket/geo_tile_grid/GeoTileGridAggregation'
import { HistogramAggregation } from '@_types/aggregations/bucket/histogram/HistogramAggregation'
import { TermsAggregation } from '@_types/aggregations/bucket/terms/TermsAggregation'
import { Field, IndexName, Indices } from '@_types/common'
import { RuntimeFields } from '@_types/mapping/RuntimeFields'
import { float, integer } from '@_types/Numeric'
import { QueryContainer } from '@_types/query_dsl/abstractions'
import { Time } from '@_types/Time'

export class Destination {
  /** The destination index for the transform. The mappings of the destination index are deduced based on the source fields when possible. If alternate mappings are required, use the Create index API prior to starting the transform. */
  index?: IndexName
  /**
   * The unique identifier for an ingest pipeline.
   * @doc_url https://www.elastic.co/guide/en/elasticsearch/reference/current/ingest.html
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
  /** @aliases aggs */
  aggregations?: Dictionary<string, AggregationContainer>
  group_by: Dictionary<string, PivotGroupByContainer>
  max_page_search_size?: integer
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
  time: RetentionPolicy
}

export class RetentionPolicy {
  /** The date field that is used to calculate the age of the document. */
  field: Field
  /** Specifies the maximum age of a document in the destination index. Documents that are older than the configured value are removed from the destination index. */
  max_age: Time
}

/**
 * The source of the data for the transform.
 */
export class Settings {
  /**
   * Defines if dates in the ouput should be written as ISO formatted string (default) or as millis since epoch. epoch_millis has been the default for transforms created before version 7.11. For compatible output set this to true.
   * @server_default false
   */
  dates_as_epoch_millis?: boolean
  /**
   * Specifies a limit on the number of input documents per second. This setting throttles the transform by adding a wait time between search requests. The default value is null, which disables throttling.
   */
  docs_per_second?: float
  /**
   * Defines the initial page size to use for the composite aggregation for each checkpoint. If circuit breaker exceptions occur, the page size is dynamically adjusted to a lower value. The minimum value is 10 and the maximum is 10,000.
   * @server_default 500
   */
  max_page_search_size?: integer
}

export class Source {
  /**The source indices for the transform. */
  index: Indices
  /**
   * A query clause that retrieves a subset of data from the source index.
   * @doc_url https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html
   */
  query?: QueryContainer
  /**
   * Definitions of search-time runtime fields that can be used by the transform. For search runtime fields all data nodes, including remote nodes, must be 7.12 or later.
   * @since 7.12.0
   */
  runtime_mappings?: RuntimeFields
}

export class Sync {}

/**
 * @variants container
 */
export class SyncContainer {
  /** Specifies that the transform uses a time field to synchronize the source and destination indices. */
  time: TimeSync
}

export class TimeSync {
  /** The time delay between the current time and the latest input data time. */
  delay?: Time
  /** The date field that is used to identify new documents in the source. */
  field: Field
}
