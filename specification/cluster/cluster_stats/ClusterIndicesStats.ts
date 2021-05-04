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

import { Name, VersionString } from '@_types/common'
import { integer, long } from '@_types/Numeric'
import { CompletionStats, DocStats, FielddataStats, QueryCacheStats, SegmentsStats, StoreStats } from '@_types/Stats'
import { ClusterIndicesShardsStats } from './ClusterIndicesShardsStats'

export class ClusterIndicesStats {
  /** Contains statistics about memory used for completion in selected nodes. */
  completion: CompletionStats
  /** Total number of indices with shards assigned to selected nodes. */
  count: long
  /** Contains counts for documents in selected nodes. */
  docs: DocStats
  /**
   * Contains statistics about the field data cache of selected nodes.
   * @doc_url https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-fielddata.html
   */
  fielddata: FielddataStats
  /** Contains statistics about the query cache of selected nodes. */
  query_cache: QueryCacheStats
  /** Contains statistics about segments in selected nodes. */
  segments: SegmentsStats
  /** Contains statistics about indices with shards assigned to selected nodes. */
  shards: ClusterIndicesShardsStats
  /** Contains statistics about the size of shards assigned to selected nodes. */
  store: StoreStats
  /**
   * Contains statistics about field mappings in selected nodes.
   * @doc_url https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping.html
   */
  mappings: FieldTypesMappings
  /**
   * Contains statistics about analyzers and analyzer components used in selected nodes.
   * @doc_url https://www.elastic.co/guide/en/elasticsearch/reference/current/analyzer-anatomy.html
   */
  analysis: CharFilterTypes
  versions?: IndicesVersionsStats[]
}

export class FieldTypesMappings {
  field_types: FieldTypesStats[]
  runtime_field_types?: RuntimeFieldTypesStats[]
}

export class FieldTypesStats {
  name: Name
  count: integer
  index_count: integer
  /** @since 7.13.0 */
  script_count?: integer
}

export class RuntimeFieldTypesStats {
  name: Name
  count: integer
  index_count: integer
  scriptless_count: integer
  shadowed_count: integer
  lang: string[]
  lines_max: integer
  lines_total: integer
  chars_max: integer
  chars_total: integer
  source_max: integer
  source_total: integer
  doc_max: integer
  doc_total: integer
}

export class CharFilterTypes {
  char_filter_types: FieldTypesStats[]
  tokenizer_types: FieldTypesStats[]
  filter_types: FieldTypesStats[]
  analyzer_types: FieldTypesStats[]
  built_in_char_filters: FieldTypesStats[]
  built_in_tokenizers: FieldTypesStats[]
  built_in_filters: FieldTypesStats[]
  built_in_analyzers: FieldTypesStats[]
}

export class IndicesVersionsStats {
  index_count: integer
  primary_shard_count: integer
  total_primary_bytes: long
  version: VersionString
}
