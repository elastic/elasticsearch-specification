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

import { RequestBase } from '@_types/Base'
import { Ids } from '@_types/common'

/**
 * Returns the rollup capabilities of all jobs inside of a rollup index (for example, the index where rollup data is stored).
 * @rest_spec_name rollup.get_rollup_index_caps
 * @availability stack since=6.4.0 stability=experimental
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * Data stream or index to check for rollup capabilities.
     * Wildcard (`*`) expressions are supported.
     */
    index: Ids
  }
}
