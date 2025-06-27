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

import { CharFilterBase } from './char_filters'
import { TokenFilterBase } from './token_filters'
import { TokenizerBase } from './tokenizers'

export class IcuTransformTokenFilter extends TokenFilterBase {
  type: 'icu_transform'
  dir?: IcuTransformDirection
  id: string
}

export class IcuTokenizer extends TokenizerBase {
  type: 'icu_tokenizer'
  rule_files: string
}

export class IcuNormalizationTokenFilter extends TokenFilterBase {
  type: 'icu_normalizer'
  name: IcuNormalizationType
}

export class IcuNormalizationCharFilter extends CharFilterBase {
  type: 'icu_normalizer'
  mode?: IcuNormalizationMode
  name?: IcuNormalizationType
  unicode_set_filter?: string
}

export class IcuFoldingTokenFilter extends TokenFilterBase {
  type: 'icu_folding'
  unicode_set_filter: string
}

export class IcuCollationTokenFilter extends TokenFilterBase {
  type: 'icu_collation'
  alternate?: IcuCollationAlternate
  caseFirst?: IcuCollationCaseFirst
  caseLevel?: boolean
  country?: string
  decomposition?: IcuCollationDecomposition
  hiraganaQuaternaryMode?: boolean
  language?: string
  numeric?: boolean
  rules?: string
  strength?: IcuCollationStrength
  variableTop?: string
  variant?: string
}

export class IcuAnalyzer {
  type: 'icu_analyzer'
  method: IcuNormalizationType
  mode: IcuNormalizationMode
}

export enum IcuTransformDirection {
  forward,
  reverse
}

export enum IcuNormalizationMode {
  decompose,
  compose
}

export enum IcuNormalizationType {
  nfc,
  nfkc,
  nfkc_cf
}

export enum IcuCollationAlternate {
  shifted,
  'non-ignorable'
}

export enum IcuCollationCaseFirst {
  lower,
  upper
}

export enum IcuCollationDecomposition {
  no,
  identical
}

export enum IcuCollationStrength {
  primary,
  secondary,
  tertiary,
  quaternary,
  identical
}
