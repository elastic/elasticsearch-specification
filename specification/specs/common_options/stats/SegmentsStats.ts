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

class SegmentsStats {
  count: integer
  doc_values_memory?: ByteSize
  doc_values_memory_in_bytes: integer
  file_sizes: Dictionary<string, ShardFileSizeInfo>
  fixed_bit_set?: ByteSize
  fixed_bit_set_memory_in_bytes: integer
  index_writer_memory?: ByteSize
  index_writer_max_memory_in_bytes?: integer
  index_writer_memory_in_bytes: integer
  max_unsafe_auto_id_timestamp: integer
  memory?: ByteSize
  memory_in_bytes: integer
  norms_memory?: ByteSize
  norms_memory_in_bytes: integer
  points_memory?: ByteSize
  points_memory_in_bytes: integer
  stored_memory?: ByteSize
  stored_fields_memory_in_bytes: integer
  terms_memory_in_bytes: integer
  terms_memory?: ByteSize
  term_vectory_memory?: ByteSize
  term_vectors_memory_in_bytes: integer
  version_map_memory?: ByteSize
  version_map_memory_in_bytes: integer
}
