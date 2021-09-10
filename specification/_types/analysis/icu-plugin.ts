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
import { TokenizerBase } from './tokenizers'
import { TokenFilterBase } from './token_filters'

export class IcuTransformTokenFilter extends TokenFilterBase {
  dir: IcuTransformDirection
  id: string
}

export class IcuTokenizer extends TokenizerBase {
  rule_files: string
}

export class IcuNormalizationTokenFilter extends TokenFilterBase {
  name: IcuNormalizationType
}

export class IcuNormalizationCharFilter extends CharFilterBase {
  mode: IcuNormalizationMode
  name: IcuNormalizationType
}

export class IcuFoldingTokenFilter extends TokenFilterBase {
  type: 'icu_folding'
  unicode_set_filter: string
}

export class IcuCollationTokenFilter extends TokenFilterBase {
  type: 'icu_collation'
  alternate: IcuCollationAlternate
  caseFirst: IcuCollationCaseFirst
  caseLevel: boolean
  country: string
  decomposition: IcuCollationDecomposition
  hiraganaQuaternaryMode: boolean
  language: string
  numeric: boolean
  strength: IcuCollationStrength
  variableTop: string
  variant: string
}

export class IcuAnalyzer {
  type: 'icu_analyzer'
  method: IcuNormalizationType
  mode: IcuNormalizationMode
}

export enum IcuTransformDirection {
  forward = 0,
  reverse = 1
}

export enum IcuNormalizationMode {
  decompose = 0,
  compose = 1
}

export enum IcuNormalizationType {
  nfc = 0,
  nfkc = 1,
  nfkc_cf = 2
}

export enum IcuCollationAlternate {
  shifted = 0,
  'non-ignorable' = 1
}

export enum IcuCollationCaseFirst {
  lower = 0,
  upper = 1
}

export enum IcuCollationDecomposition {
  no = 0,
  identical = 1
}

export enum IcuCollationStrength {
  primary = 0,
  secondary = 1,
  tertiary = 2,
  quaternary = 3,
  identical = 4
}
