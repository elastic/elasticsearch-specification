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

class ClusterIndicesStats {
  completion: CompletionStats
  count: long
  docs: DocStats
  fielddata: FielddataStats
  query_cache: QueryCacheStats
  segments: SegmentsStats
  shards: ClusterIndicesShardsStats
  store: StoreStats
  mappings: FieldTypesMappings
  analysis: CharFilterTypes
  versions?: IndicesVersionsStats[]
}

class FieldTypesMappings {
  field_types: FieldTypesStats[]
  runtime_field_types?: RuntimeFieldTypesStats[]
}

class FieldTypesStats {
  name: Name
  count: integer
  index_count: integer
}

class RuntimeFieldTypesStats {
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

class CharFilterTypes {
  char_filter_types: FieldTypesStats[]
  tokenizer_types: FieldTypesStats[]
  filter_types: FieldTypesStats[]
  analyzer_types: FieldTypesStats[]
  built_in_char_filters: FieldTypesStats[]
  built_in_tokenizers: FieldTypesStats[]
  built_in_filters: FieldTypesStats[]
  built_in_analyzers: FieldTypesStats[]
}

class IndicesVersionsStats {
  index_count: integer
  primary_shard_count: integer
  total_primary_bytes: long
  version: VersionString
}
