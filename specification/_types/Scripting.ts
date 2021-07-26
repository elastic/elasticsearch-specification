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

/** @doc_url https://www.elastic.co/guide/en/elasticsearch/reference/master/modules-scripting.html */
export enum ScriptLanguage {
  painless = 0,
  expression = 1,
  mustache = 2,
  java = 0
}

export class StoredScript {
  lang?: ScriptLanguage
  source: string
}

export class ScriptBase {
  lang?: ScriptLanguage
  params?: Dictionary<string, UserDefinedValue>
}

export class InlineScript extends ScriptBase {
  source: string
}

export class IndexedScript extends ScriptBase {
  id: Id
}

// 'string' is a shortcut for InlineScript.source
export type Script = InlineScript | IndexedScript | string

export class ScriptField {
  script: Script
  ignore_failure?: boolean
}
