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

import {
  IcuCollationAlternate,
  IcuCollationCaseFirst,
  IcuCollationDecomposition,
  IcuCollationStrength
} from '@_types/analysis/icu-plugin'
import { Field, Name } from '@_types/common'
import { double, integer } from '@_types/Numeric'
import { Script } from '@_types/Scripting'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { DocValuesPropertyBase, IndexOptions, OnScriptError } from './core'
import { PropertyBase } from './Property'

export class CompletionProperty extends DocValuesPropertyBase {
  analyzer?: string
  contexts?: SuggestContext[]
  max_input_length?: integer
  preserve_position_increments?: boolean
  preserve_separators?: boolean
  search_analyzer?: string
  type: 'completion'
}

export class SuggestContext {
  name: Name
  path?: Field
  type: string
  // eslint-disable-next-line es-spec-validator/no-inline-unions -- TODO: create named alias
  precision?: integer | string
}

export class ConstantKeywordProperty extends PropertyBase {
  value?: UserDefinedValue
  type: 'constant_keyword'
}

export class CountedKeywordProperty extends PropertyBase {
  type: 'counted_keyword'
  /*
   * Set to false to reduce disk usage for use cases where indexed fields are not required.
   * @server_default true
   */
  index?: boolean
}

export class FieldAliasProperty extends PropertyBase {
  path?: Field
  type: 'alias'
}

export class HistogramProperty extends PropertyBase {
  ignore_malformed?: boolean
  type: 'histogram'
}

export class IpProperty extends DocValuesPropertyBase {
  boost?: double
  index?: boolean
  ignore_malformed?: boolean
  null_value?: string
  on_script_error?: OnScriptError
  script?: Script
  /**
   * For internal use by Elastic only. Marks the field as a time series dimension. Defaults to false.
   * @availability stack stability=experimental
   * @availability serverless stability=experimental
   */
  time_series_dimension?: boolean
  type: 'ip'
}

export class Murmur3HashProperty extends DocValuesPropertyBase {
  type: 'murmur3'
}

export class TokenCountProperty extends DocValuesPropertyBase {
  analyzer?: string
  boost?: double
  index?: boolean
  null_value?: double
  enable_position_increments?: boolean
  type: 'token_count'
}

export class IcuCollationProperty extends DocValuesPropertyBase {
  type: 'icu_collation_keyword'
  norms?: boolean
  index_options?: IndexOptions
  /**
   * Should the field be searchable?
   */
  index?: boolean
  /**
   * Accepts a string value which is substituted for any explicit null values. Defaults to null, which means the field is treated as missing.
   */
  null_value?: string
  rules?: string
  language?: string
  country?: string
  variant?: string
  strength?: IcuCollationStrength
  decomposition?: IcuCollationDecomposition
  alternate?: IcuCollationAlternate
  case_level?: boolean
  case_first?: IcuCollationCaseFirst
  numeric?: boolean
  variable_top?: string
  hiragana_quaternary_mode?: boolean
}
