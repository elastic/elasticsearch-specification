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

import { long } from '@_types/Numeric'
import { AdditionalProperties } from '@spec_utils/behaviors'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

export class AnalyzeDetail {
  analyzer?: AnalyzerDetail
  charfilters?: CharFilterDetail[]
  custom_analyzer: boolean
  tokenfilters?: TokenDetail[]
  tokenizer?: TokenDetail
}

export class AnalyzerDetail {
  name: string
  tokens: Array<ExplainAnalyzeToken>
}

export class AnalyzeToken {
  end_offset: long
  position: long
  positionLength?: long
  start_offset: long
  token: string
  type: string
}

export class CharFilterDetail {
  filtered_text: string[]
  name: string
}

// Additional properties are attributes that can be set by plugin-defined tokenizers
/**
 * @behavior_meta AdditionalProperties fieldname=attributes description="Additional tokenizer-specific attributes"
 */
export class ExplainAnalyzeToken
  implements AdditionalProperties<string, UserDefinedValue>
{
  bytes: string
  end_offset: long
  keyword?: boolean
  position: long
  positionLength: long
  start_offset: long
  termFrequency: long
  token: string
  type: string
}

export type TextToAnalyze = string | Array<string>

export class TokenDetail {
  name: string
  tokens: ExplainAnalyzeToken[]
}
