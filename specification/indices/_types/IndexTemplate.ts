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

import { Dictionary } from '@spec_utils/Dictionary'
import { IndexName, Metadata, Name, Names, VersionNumber } from '@_types/common'
import { TypeMapping } from '@_types/mapping/TypeMapping'
import { long } from '@_types/Numeric'
import { Alias } from './Alias'
import { IndexSettings } from './IndexSettings'

export class IndexTemplate {
  index_patterns: Names
  composed_of: Name[]
  template?: IndexTemplateSummary
  version?: VersionNumber
  priority?: long
  /** @doc_id mapping-meta-field */
  _meta?: Metadata
  allow_auto_create?: boolean
  data_stream?: IndexTemplateDataStreamConfiguration
}

export class IndexTemplateDataStreamConfiguration {
  /**
   * If true, the data stream is hidden.
   * @server_default false
   */
  hidden?: boolean
  /**
   * If true, the data stream supports custom routing.
   * @server_default false
   */
  allow_custom_routing?: boolean
}

export class IndexTemplateSummary {
  aliases?: Dictionary<IndexName, Alias>
  mappings?: TypeMapping
  settings?: IndexSettings
}
