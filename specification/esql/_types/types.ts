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

import { FieldValue, Name, ProjectRouting } from '@_types/common'
import { double, integer } from '@_types/Numeric'
import { Dictionary, SingleKeyDictionary } from '@spec_utils/Dictionary'
import { Stringified } from '@spec_utils/Stringified'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

/**
 * @codegen_names value, named
 */
export type ESQLParams = SingleOrMultiValue[] | NamedValue[]
export type NamedValue = SingleKeyDictionary<string, NamedParameterValue>
export type SingleOrMultiValue = FieldValue | FieldValue[]

/**
 * The value of a named ES|QL query parameter.
 * It is either a literal single or multi value, or a single-key object that classifies how
 * the parameter is interpreted.
 * @codegen_names literal, classified
 */
export type NamedParameterValue = SingleOrMultiValue | ClassifiedNamedParameter

/**
 * A named ES|QL query parameter supplied in its classified form.
 * Exactly one of `value`, `identifier`, or `pattern` must be set.
 * @variants container
 */
export class ClassifiedNamedParameter {
  /**
   * Interpret the parameter as a literal value.
   */
  value?: SingleOrMultiValue
  /**
   * Interpret the parameter as an identifier, such as a field or function name.
   */
  identifier?: string
  /**
   * Interpret the parameter as a pattern, such as an index or field name pattern.
   */
  pattern?: string
}

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
 * Represents a data source definition stored in cluster state. A data source holds
 * connection settings (credentials, endpoints, auth) for an external data provider.
 */
export class ESQLDataSource {
  /** The data source name. */
  name: Name
  /** The data source type. */
  type: string
  /** A free-text description. */
  description?: string
  /** Type-specific settings. */
  settings: Dictionary<string, UserDefinedValue>
}

/**
 * Represents a dataset definition stored in cluster state. A dataset is a named reference
 * to external data that participates in the index namespace alongside indices, aliases, and views.
 * Datasets inherit credentials from their referenced data source at query time.
 */
export class ESQLDataset {
  /** The dataset name. */
  name: Name
  /** The name of the referenced data source. */
  data_source: Name
  /**
   * The URI that identifies the data to read, resolved against the referenced data source, rather than only a path.
   * For S3, it can include glob patterns, for example a recursive `/**` matching `*.parquet` files under a prefix such as `s3://bucket/logs`.
   */
  resource: string
  /** A free-text description. */
  description?: string
  /**
   * Format- and parsing-specific settings that configure how the resource is read.
   * The accepted keys depend on the format reader; compression can be inferred from the resource URI.
   */
  settings?: Dictionary<string, UserDefinedValue>
}

/**
 * Per-query settings supplied through the request body.
 * This is the request-body equivalent of the in-query `SET` command.
 * Only settings that are exposed as request-body parameters can be set here; other `SET`-only
 * settings (such as `unmapped_fields`) must be supplied in the query itself.
 */
export class EsqlQuerySettings {
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
  column_metadata?: Stringified<boolean>
  /**
   * Limits the scope of a cross-project search (CPS) to specific projects before query execution, based on a Lucene query expression evaluated against project tags.
   * Excluded projects are not queried, which can reduce cost and latency.
   * @availability serverless stability=experimental
   */
  project_routing?: ProjectRouting
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
