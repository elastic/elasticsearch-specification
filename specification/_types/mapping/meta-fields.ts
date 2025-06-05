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

import { Field } from '@_types/common'
import { SingleKeyDictionary } from '@spec_utils/Dictionary'
import { Property } from './Property'

export class FieldMapping {
  full_name: string
  mapping: SingleKeyDictionary<Field, Property>
}

export class AllField {
  analyzer: string
  enabled: boolean
  omit_norms: boolean
  search_analyzer: string
  similarity: string
  store: boolean
  store_term_vector_offsets: boolean
  store_term_vector_payloads: boolean
  store_term_vector_positions: boolean
  store_term_vectors: boolean
}

export class FieldNamesField {
  enabled: boolean
}

export class IndexField {
  enabled: boolean
}

export class RoutingField {
  required: boolean
}

export class SizeField {
  enabled: boolean
}

export class SourceField {
  compress?: boolean
  compress_threshold?: string
  enabled?: boolean
  excludes?: string[]
  includes?: string[]
  mode?: SourceFieldMode
}

export enum SourceFieldMode {
  disabled,
  stored,
  /**
   *  Instead of storing source documents on disk exactly as you send them,
   *  Elasticsearch can reconstruct source content on the fly upon retrieval.
   */
  synthetic
}
