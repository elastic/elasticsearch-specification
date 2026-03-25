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
  /** Contains information about whether high compression was enabled and per-field vector formats. */
  attributes: Dictionary<string, string>
  /**
   * If `true`, the segment is synced to disk. Segments that are synced can survive a hard reboot.
   * If `false`, the data from uncommitted segments is also stored in the transaction log so that Elasticsearch is able to replay changes on the next start.
   */
  committed: boolean
  /** If `true`, Lucene merged all files from the segment into a single file to save file descriptors. */
  compound: boolean
  /**
   * The number of deleted documents as reported by Lucene, which may be higher or lower than the number of delete operations you have performed.
   * This number excludes deletes that were performed recently and do not yet belong to a segment.
   * Deleted documents are cleaned up by the automatic merge process if it makes sense to do so.
   * Also, Elasticsearch creates extra deleted documents to internally track the recent history of operations on a shard.
   */
  deleted_docs: long
  /** Generation number, such as `0`. Elasticsearch increments this generation number for each segment written then uses this number to derive the segment name. */
  generation: integer
  /**
   * If `true`, the segment is searchable.
   * If `false`, the segment has most likely been written to disk but needs a refresh to be searchable.
   */
  search: boolean
  /** Disk space used by the segment, in bytes. */
  size_in_bytes: double
  /**
   * The number of documents as reported by Lucene.
   * This excludes deleted documents and counts any nested documents separately from their parents.
   * It also excludes documents which were indexed recently and do not yet belong to a segment.
   */
  num_docs: long
  /** Version of Lucene used to write the segment. */
  version: VersionString
}

export class ShardSegmentRouting {
  /** The node ID of the node that holds the shard. */
  node: string
  /** If `true`, the shard is a primary shard. */
  primary: boolean
  /** The state of the shard, such as `STARTED` or `RELOCATING`. */
  state: string
}

export class ShardsSegment {
  num_committed_segments: integer
  routing: ShardSegmentRouting
  num_search_segments: integer
  segments: Dictionary<string, Segment>
}
