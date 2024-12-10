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
import { ExpandWildcards, Indices } from '@_types/common'
import { long } from '@_types/Numeric'

/**
 * Force a merge.
 * Perform the force merge operation on the shards of one or more indices.
 * For data streams, the API forces a merge on the shards of the stream's backing indices.
 *
 * Merging reduces the number of segments in each shard by merging some of them together and also frees up the space used by deleted documents.
 * Merging normally happens automatically, but sometimes it is useful to trigger a merge manually.
 *
 * WARNING: We recommend force merging only a read-only index (meaning the index is no longer receiving writes).
 * When documents are updated or deleted, the old version is not immediately removed but instead soft-deleted and marked with a "tombstone".
 * These soft-deleted documents are automatically cleaned up during regular segment merges.
 * But force merge can cause very large (greater than 5 GB) segments to be produced, which are not eligible for regular merges.
 * So the number of soft-deleted documents can then grow rapidly, resulting in higher disk usage and worse search performance.
 * If you regularly force merge an index receiving writes, this can also make snapshots more expensive, since the new documents can't be backed up incrementally.
 * @rest_spec_name indices.forcemerge
 * @availability stack since=2.1.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @ext_doc_id index-modules-merge
 */
export interface Request extends RequestBase {
  path_parts: {
    index?: Indices
  }
  query_parameters: {
    allow_no_indices?: boolean
    expand_wildcards?: ExpandWildcards
    flush?: boolean
    ignore_unavailable?: boolean
    max_num_segments?: long
    only_expunge_deletes?: boolean
    wait_for_completion?: boolean
  }
}
