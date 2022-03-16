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

import { Alias } from '@indices/_types/Alias'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { IndexName, Metadata, Name, VersionNumber } from '@_types/common'
import { TypeMapping } from '@_types/mapping/TypeMapping'
import { long } from '@_types/Numeric'

export class Response {
  body: {
    index_templates: IndexTemplateItem[]
  }
}

export class IndexTemplateItem {
  name: Name
  index_template: IndexTemplate
}

export class IndexTemplate {
  index_patterns: Name[]
  composed_of: Name[]
  template?: IndexTemplateSummary
  version?: VersionNumber
  priority?: long
  /** @doc_url https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-meta-field.html */
  _meta?: Metadata
  allow_auto_create?: boolean
  data_stream?: Dictionary<string, UserDefinedValue>
}

export class IndexTemplateSummary {
  aliases?: Dictionary<IndexName, Alias>
  mappings?: TypeMapping
  settings?: Dictionary<string, UserDefinedValue>
}
