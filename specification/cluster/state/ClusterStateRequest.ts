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
import {
  ExpandWildcards,
  Indices,
  Metrics,
  VersionNumber
} from '@_types/common'
import { Duration } from '@_types/Time'

/**
 * @rest_spec_name cluster.state
 * @availability stack since=1.3.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges monitor, manage
 * @doc_id cluster-state
 */
export interface Request extends RequestBase {
  path_parts: {
    metric?: Metrics
    index?: Indices
  }
  query_parameters: {
    /** @server_default true */
    allow_no_indices?: boolean
    expand_wildcards?: ExpandWildcards
    /** @server_default false */
    flat_settings?: boolean
    /** @server_default false */
    ignore_unavailable?: boolean
    /** @server_default false */
    local?: boolean
    /** @server_default 30s */
    master_timeout?: Duration
    wait_for_metadata_version?: VersionNumber
    wait_for_timeout?: Duration
  }
}
