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

import { Id } from '@_types/common'
import { ScriptSource } from '@_types/Scripting'
import { MultisearchHeader } from '@global/msearch/types'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

/** @codegen_names header, body */
export type RequestItem = MultisearchHeader | TemplateConfig

export class TemplateConfig {
  /**
   * If `true`, returns detailed information about score calculation as part of each hit.
   * @server_default false */
  explain?: boolean
  /**
   * The ID of the search template to use. If no `source` is specified,
   * this parameter is required.
   */
  id?: Id
  /**
   * Key-value pairs used to replace Mustache variables in the template.
   * The key is the variable name.
   * The value is the variable value.
   */
  params?: Dictionary<string, UserDefinedValue>
  /**
   * If `true`, the query execution is profiled.
   * @server_default false */
  profile?: boolean
  /**
   * An inline search template. Supports the same parameters as the search API's
   * request body. It also supports Mustache variables. If no `id` is specified, this
   * parameter is required.
   */
  source?: ScriptSource
}
