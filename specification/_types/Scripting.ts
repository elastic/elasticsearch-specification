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
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { Id } from './common'

/**
 * @doc_id modules-scripting
 * @non_exhaustive
 */
export enum ScriptLanguage {
  painless = 0,
  expression = 1,
  mustache = 2,
  java = 3
}

export class StoredScript {
  lang: ScriptLanguage
  options?: Dictionary<string, string>
  source: string
}

export class ScriptBase {
  params?: Dictionary<string, UserDefinedValue>
}

/** @shortcut_property source */
export class InlineScript extends ScriptBase {
  lang?: ScriptLanguage
  options?: Dictionary<string, string>
  source: string
}

export class StoredScriptId extends ScriptBase {
  id: Id
}

/** @codegen_names inline, stored */
export type Script = InlineScript | StoredScriptId

export class ScriptField {
  script: Script
  ignore_failure?: boolean
}
