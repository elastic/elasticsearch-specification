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

import { ByteSize, Field, VersionString } from '@_types/common'
import { double, float, integer, long } from '@_types/Numeric'
import { Dictionary } from '@spec_utils/Dictionary'

export class IndexSegment {
  shards: Dictionary<string, ShardsSegment | Array<ShardsSegment>>
}

export class Segment {
  /** Contains information about whether high compression was enabled and per-field vector formats. */
  attributes?: Dictionary<string, string>
  /**
   * If `true`, the segment is synced to disk. Segments that are synced can survive a hard reboot.
   * If `false`, the data from uncommitted segments is also stored in the transaction log so that Elasticsearch is able to replay changes on the next start.
   */
  committed: boolean
  /** If `true`, Lucene merged all files from the segment into a single file to save file descriptors. */
  compound?: boolean
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
  /** The ID of the merge the segment is part of. Only returned while the segment is being merged. */
  merge_id?: string
  /** The index sort of the segment. Only returned when the index is sorted. */
  sort?: SegmentSort[]
  /** Disk space used by the segment. */
  size?: ByteSize
  /** Disk space used by the segment, in bytes. */
  size_in_bytes: double
  /**
   * The number of documents as reported by Lucene.
   * This excludes deleted documents and counts any nested documents separately from their parents.
   * It also excludes documents which were indexed recently and do not yet belong to a segment.
   */
  num_docs: long
  /** Version of Lucene used to write the segment. */
  version?: VersionString
  /**
   * The auto-calibration information of the segment, per `dense_vector` field that supports auto-calibration.
   * Only returned when `include_auto_calibration` is `true`.
   * @availability stack since=9.6.0
   * @availability serverless
   */
  auto_calibration?: Dictionary<Field, SegmentAutoCalibration>
}

export class SegmentSort {
  /** The name of the sort field. */
  field: Field
  /** The selector used to pick a value from multi-valued fields, such as `min` or `max`. Only returned for numeric and keyword fields. */
  mode?: string
  /** The value used for documents that are missing the field. */
  missing?: string
  /** If `true`, the sort order is descending. */
  reverse: boolean
}

/**
 * The auto-calibration information of a `dense_vector` field in a segment.
 *
 * The shape of `parameters` depends on the quantization method of the field.
 * @variants internal tag='type'
 * @non_exhaustive
 */
export type SegmentAutoCalibration = OsqSegmentAutoCalibration

export class SegmentAutoCalibrationBase {
  /** If `true`, the segment has been calibrated, and `parameters` is present. */
  calibrated: boolean
  /** The number of vectors of the field in the segment. */
  number_of_vectors: long
  size?: ByteSize
  /** The size of the vectors of the field in the segment, in bytes. */
  size_in_bytes: long
}

export class OsqSegmentAutoCalibration extends SegmentAutoCalibrationBase {
  type: 'osq'
  /** The calibration parameters. */
  parameters?: OsqSegmentAutoCalibrationParameters
}

export class OsqSegmentAutoCalibrationParameters {
  /** The number of bits used to quantize the vectors. */
  bits: integer
  /** The number of bits used to quantize the query vectors. */
  query_bits: integer
  /** If `true`, the vectors are preconditioned before quantization. */
  precondition: boolean
  /** The oversampling factor applied when rescoring. */
  oversample: float
}

export class ShardSegmentRouting {
  /** The node ID of the node that holds the shard. */
  node: string
  /** The node ID of the node the shard is relocating to. Only returned while the shard is relocating. */
  relocating_node?: string
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
