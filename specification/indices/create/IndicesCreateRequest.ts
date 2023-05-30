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

import { Alias } from '@indices/_types/Alias'
import { IndexSettings } from '@indices/_types/IndexSettings'
import { Dictionary } from '@spec_utils/Dictionary'
import { RequestBase } from '@_types/Base'
import { IndexName, Name, WaitForActiveShards } from '@_types/common'
import { TypeMapping } from '@_types/mapping/TypeMapping'
import { Duration } from '@_types/Time'

/**
 * @rest_spec_name indices.create
 * @availability stack since=0.0.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @index_privileges create_index, manage
 */
export interface Request extends RequestBase {
  path_parts: {
    index: IndexName
  }
  query_parameters: {
    master_timeout?: Duration
    timeout?: Duration
    wait_for_active_shards?: WaitForActiveShards
  }
  body: {
    /* Aliases for the index. */
    aliases?: Dictionary<Name, Alias>
    /**
     * Mapping for fields in the index. If specified, this mapping can include:
     * - Field names
     * - Field data types
     * - Mapping parameters
     */
    mappings?: TypeMapping
    /* Configuration options for the index. */
    settings?: IndexSettings
  }
}
