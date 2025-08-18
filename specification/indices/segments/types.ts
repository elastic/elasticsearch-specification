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

import { VersionString } from '@_types/common'
import { double, integer, long } from '@_types/Numeric'
import { Dictionary } from '@spec_utils/Dictionary'

export class IndexSegment {
  shards: Dictionary<string, ShardsSegment | Array<ShardsSegment>>
}

export class Segment {
  attributes: Dictionary<string, string>
  committed: boolean
  compound: boolean
  deleted_docs: long
  generation: integer
  search: boolean
  size_in_bytes: double
  num_docs: long
  version: VersionString
}

export class ShardSegmentRouting {
  node: string
  primary: boolean
  state: string
}

export class ShardsSegment {
  num_committed_segments: integer
  routing: ShardSegmentRouting
  num_search_segments: integer
  segments: Dictionary<string, Segment>
}
