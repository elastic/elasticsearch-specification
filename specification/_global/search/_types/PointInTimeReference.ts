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

import { Id } from '@_types/common'
import { Duration } from '@_types/Time'

export class PointInTimeReference {
  id: Id
  keep_alive?: Duration
  /**
   * The slice identifiers to search within the point in time: a single slice, a comma-separated list such as `tenant-a,tenant-b`, or `_all` to search all slices.
   * @availability stack since=9.6.0 visibility=feature_flag feature_flag=slice_indexing
   * @availability serverless visibility=feature_flag feature_flag=slice_indexing
   * @codegen_name route_slice
   */
  _slice?: string
}
