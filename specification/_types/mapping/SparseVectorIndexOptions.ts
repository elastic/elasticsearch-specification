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

import { TokenPruningConfig } from '@_types/TokenPruningConfig'

export class SparseVectorIndexOptions {
  /**
   * Whether to perform pruning, omitting the non-significant tokens from the query to improve query performance.
   * If prune is true but the pruning_config is not specified, pruning will occur but default values will be used.
   * Default: false
   * @availability stack since=8.19.0
   * @availability serverless
   * @variant container_property
   */
  prune?: boolean
  /**
   * Optional pruning configuration.
   * If enabled, this will omit non-significant tokens from the query in order to improve query performance.
   * This is only used if prune is set to true.
   * If prune is set to true but pruning_config is not specified, default values will be used.
   * @availability stack since=8.19.0
   * @availability serverless
   * @variant container_property
   */
  pruning_config?: TokenPruningConfig
}
