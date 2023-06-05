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

import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { Field, Name } from '@_types/common'
import { double, integer } from '@_types/Numeric'
import { DocValuesPropertyBase, IndexOptions, OnScriptError } from './core'
import { PropertyBase } from './Property'
import { Script } from '@_types/Scripting'

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
  precision?: integer | string
}

export class ConstantKeywordProperty extends PropertyBase {
  value?: UserDefinedValue
  type: 'constant_keyword'
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
