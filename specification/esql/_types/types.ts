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

import { FieldValue, ProjectRouting } from '@_types/common'
import { double, integer } from '@_types/Numeric'
import { AdditionalProperties } from '@spec_utils/behaviors'
import { SingleKeyDictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

/**
 * @codegen_names value, named
 */
export type ESQLParams = SingleOrMultiValue[] | NamedValue[]
export type NamedValue = SingleKeyDictionary<string, SingleOrMultiValue>
export type SingleOrMultiValue = FieldValue | FieldValue[]

/**
 *
 * A non-materialized ES|QL view.
 *
 */
export class ESQLView {
  /** The name of the ES|QL view */
  name: string
  /** The ES|QL query */
  query: string
}

/**
 * Per-query settings supplied through the request body.
 * This is the request-body equivalent of the in-query `SET` command: each key is a
 * setting name (for example `time_zone`) and its value configures how the query runs.
 * @behavior_meta AdditionalProperties fieldname=settings description="Additional per-query settings, equivalent to in-query `SET` keys."
 */
export class EsqlQuerySettings implements AdditionalProperties<string, UserDefinedValue> {
  /**
   * The default timezone to be used in the query.
   * It defaults to UTC and overrides the `time_zone` request parameter.
   * @doc_id esql-timezones
   * @availability stack since=9.4.0 stability=stable
   * @availability serverless stability=stable
   */
  time_zone?: string
  /**
   * Enables query approximation if possible for the query.
   * `false` (the default) disables query approximation and `true` enables it with default settings.
   * A map value enables query approximation with custom settings.
   * @availability stack since=9.5.0 stability=stable
   * @availability serverless stability=stable
   */
  approximation?: EsqlApproximation
  /**
   * When enabled, column metadata is added to the query response as additional `_meta` properties.
   * Currently, only `_meta.bucket` is added for columns corresponding to the `BUCKET` function, containing the bucket interval and unit for queries where it can be determined.
   * @server_default false
   * @availability stack since=9.5.0 stability=experimental
   * @availability serverless stability=experimental
   */
  column_metadata?: boolean
  /**
   * Limits the scope of a cross-project search (CPS) to specific projects before query execution, based on a Lucene query expression evaluated against project tags.
   * Excluded projects are not queried, which can reduce cost and latency.
   * @availability serverless stability=experimental
   */
  project_routing?: ProjectRouting
  /**
   * Determines how unmapped fields are treated.
   * Possible values are `default` (queries fail when referencing unmapped fields), `nullify` (treats unmapped fields as null values), and `load` (loads unmapped fields from the stored `_source` with type `keyword`, or nullifies them if absent from `_source`).
   * @availability stack since=9.3.0 stability=experimental
   * @availability serverless stability=experimental
   */
  unmapped_fields?: string
}

/**
 * The `approximation` query setting.
 * It can be a boolean that toggles query approximation with default settings, or a map that enables it with custom settings.
 * @codegen_names enabled, settings
 */
export type EsqlApproximation = boolean | EsqlApproximationSettings

export class EsqlApproximationSettings {
  /**
   * The number of sampled rows used for approximating the query.
   * It must be at least 10,000. A null value uses the system default.
   */
  rows?: integer
  /**
   * The confidence level of the computed confidence intervals.
   * A null value disables computing confidence intervals.
   * @server_default 0.90
   */
  confidence_level?: double
}
