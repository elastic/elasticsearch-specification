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
// TODO: move singular names to aliases

import { Fields } from '@_types/common'

/**
 * @shortcut_property includes
 */
export class SourceFilter {
  /**
   * If `true`, vector fields are excluded from the returned source.
   *
   * This option takes precedence over `includes`: any vector field will
   * remain excluded even if it matches an `includes` rule.
   */
  exclude_vectors?: boolean

  /**
   * A list of fields to exclude from the returned source.
   *
   * @aliases exclude
   */
  excludes?: Fields

  /**
   * A list of fields to include in the returned source.
   *
   * @aliases include
   */
  includes?: Fields
}

/**
 * Defines how to fetch a source. Fetching can be disabled entirely, or the source can be filtered.
 * @codegen_names fetch, filter
 */
export type SourceConfig = boolean | SourceFilter

/**
 * Defines how to fetch a source. Fetching can be disabled entirely, or the source can be filtered.
 * Used as a query parameter along with the `_source_includes` and `_source_excludes` parameters.
 *
 * @codegen_names fetch, fields
 */
export type SourceConfigParam = boolean | Fields
