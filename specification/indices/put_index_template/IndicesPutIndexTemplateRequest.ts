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
import { DataStream } from '@indices/_types/DataStream'
import { IndexSettings } from '@indices/_types/IndexSettings'
import { Dictionary } from '@spec_utils/Dictionary'
import { RequestBase } from '@_types/Base'
import {
  IndexName,
  Indices,
  Metadata,
  Name,
  VersionNumber
} from '@_types/common'
import { TypeMapping } from '@_types/mapping/TypeMapping'
import { integer } from '@_types/Numeric'

/**
 * @rest_spec_name indices.put_index_template
 * @since 7.9.0
 * @stability stable
 */
export interface Request extends RequestBase {
  path_parts: {
    /** Index or template name */
    name: Name
  }
  body: {
    index_patterns?: Indices
    composed_of?: Name[]
    template?: IndexTemplateMapping
    data_stream?: DataStream
    priority?: integer
    version?: VersionNumber
    /** @doc_id mapping-meta-field */
    _meta?: Metadata
  }
  query_parameters: {
    create?: boolean
  }
}

export class IndexTemplateMapping {
  aliases?: Dictionary<IndexName, Alias>
  mappings?: TypeMapping
  settings?: IndexSettings
}
