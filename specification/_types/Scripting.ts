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

import { SearchRequestBody } from '@global/search/_types/SearchRequestBody'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { Id } from './common'

/**
 * @doc_id modules-scripting
 * @non_exhaustive
 */
export enum ScriptLanguage {
  /**
   * Painless scripting language, purpose-built for Elasticsearch.
   */
  painless,
  /**
   * Lucene’s expressions language, compiles a JavaScript expression to bytecode.
   */
  expression,
  /**
   * Mustache templated, used for templates.
   */
  mustache,
  /**
   * Expert Java API
   */
  java
}

/** @codegen_names script_string, script_template */
export type ScriptSource = string | SearchRequestBody

export class StoredScript {
  /**
   * The language the script is written in.
   * For search templates, use `mustache`.
   */
  lang: ScriptLanguage
  options?: Dictionary<string, string>
  /**
   * The script source.
   * For search templates, an object containing the search template.
   */
  source: ScriptSource
}

/**
 * @shortcut_property source
 * */
export class Script {
  /**
   * The script source.
   */
  source?: ScriptSource
  /**
   * The `id` for a stored script.
   */
  id?: Id

  /**
   * Specifies any named parameters that are passed into the script as variables.
   * Use parameters instead of hard-coded values to decrease compile time.
   */
  params?: Dictionary<string, UserDefinedValue>
  /**
   * Specifies the language the script is written in.
   * @server_default painless
   */
  lang?: ScriptLanguage
  options?: Dictionary<string, string>
}

export class ScriptField {
  script: Script
  ignore_failure?: boolean
}
