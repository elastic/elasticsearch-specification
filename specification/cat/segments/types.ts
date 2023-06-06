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

import { ByteSize, IndexName, NodeId, VersionString } from '@_types/common'

export class SegmentsRecord {
  /**
   * The index name.
   * @aliases i, idx
   */
  'index'?: IndexName
  /**
   * The shard name.
   * @aliases s, sh
   */
  'shard'?: string
  /**
   * The shard type. Returned values are `primary` or `replica`.
   * @aliases p,pr,primaryOrReplica
   */
  'prirep'?: string
  /**
   * The IP address of the node where it lives.
   */
  'ip'?: string
  /**
   * The unique identifier of the node where it lives.
   */
  'id'?: NodeId
  /**
   * The segment name, which is derived from the segment generation and used internally to create file names in the directory of the shard.
   * @aliases seg
   */
  'segment'?: string
  /**
   * The segment generation number.
   * Elasticsearch increments this generation number for each segment written then uses this number to derive the segment name.
   * @aliases g,gen
   */
  'generation'?: string
  /**
   * The number of documents in the segment.
   * This excludes deleted documents and counts any nested documents separately from their parents.
   * It also excludes documents which were indexed recently and do not yet belong to a segment.
   * @aliases dc,docsCount
   */
  'docs.count'?: string
  /**
   * The number of deleted documents in the segment, which might be higher or lower than the number of delete operations you have performed.
   * This number excludes deletes that were performed recently and do not yet belong to a segment.
   * Deleted documents are cleaned up by the automatic merge process if it makes sense to do so.
   * Also, Elasticsearch creates extra deleted documents to internally track the recent history of operations on a shard.
   * @aliases dd,docsDeleted
   */
  'docs.deleted'?: string
  /**
   * The segment size in bytes.
   * @aliases si
   */
  'size'?: ByteSize
  /**
   * The segment memory in bytes.
   * A value of `-1` indicates Elasticsearch was unable to compute this number.
   * @aliases sm,sizeMemory
   */
  'size.memory'?: ByteSize
  /**
   * If `true`, the segment is synced to disk.
   * Segments that are synced can survive a hard reboot.
   * If `false`, the data from uncommitted segments is also stored in the transaction log so that Elasticsearch is able to replay changes on the next start.
   * @aliases ic,isCommitted
   */
  'committed'?: string
  /**
   * If `true`, the segment is searchable.
   * If `false`, the segment has most likely been written to disk but needs a refresh to be searchable.
   * @aliases is,isSearchable
   */
  'searchable'?: string
  /**
   * The version of Lucene used to write the segment.
   * @aliases v
   */
  'version'?: VersionString
  /**
   * If `true`, the segment is stored in a compound file.
   * This means Lucene merged all files from the segment in a single file to save file descriptors.
   * @aliases ico,isCompound
   */
  'compound'?: string
}
