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
import { IndexName } from '@_types/common'
import { TypeMapping } from '@_types/mapping/TypeMapping'
import { IndexSettings } from '@indices/_types/IndexSettings'

/**
 * Create an index from a source index.
 *
 * Copy the mappings and settings from the source index to a destination index while allowing request settings and mappings to override the source values.
 * @rest_spec_name indices.create_from
 * @availability stack since=8.18.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @doc_id migration-api-create-from
 * @doc_tag migration
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_create_from/{source}/{dest}'
      methods: ['PUT', 'POST']
    }
  ]
  path_parts: {
    /** The source index or data stream name */
    source: IndexName
    /** The destination index or data stream name */
    dest: IndexName
  }
  /** @codegen_name create_from */
  body?: CreateFrom
}

export class CreateFrom {
  /**
   * Mappings overrides to be applied to the destination index (optional)
   */
  mappings_override?: TypeMapping
  /**
   * Settings overrides to be applied to the destination index (optional)
   */
  settings_override?: IndexSettings
  /**
   * If index blocks should be removed when creating destination index (optional)
   * @server_default true
   */
  remove_index_blocks?: boolean
}
