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

import { IndexSettings } from '@indices/_types/IndexSettings'
import { RequestBase } from '@_types/Base'
import { IndexName } from '@_types/common'
import { TypeMapping } from '@_types/mapping/TypeMapping'

/**
 * This API creates a destination from a source index. It copies the mappings and settings from the source index while allowing request settings and mappings to override the source values.
 *
 * @rest_spec_name migrate.create_from
 * @availability stack since=8.18.0 stability=experimental
 * @availability serverless stability=experimental visibility=private
 * @doc_id migrate
 * @doc_tag create_from
 */
export interface Request extends RequestBase {
  path_parts: {
    /** The source index or data stream name */
    source: IndexName
    /** The destination index or data stream name */
    dest: IndexName
  }
  /** @codegen_name create_from */
  body: CreateFrom
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
}
