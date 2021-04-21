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

import { TokenFilterBase } from '@_types/analysis/token_filters/TokenFilterBase'
import { integer } from '@_types/Numeric'
import { PhoneticEncoder } from './PhoneticEncoder'
import { PhoneticLanguage } from './PhoneticLanguage'
import { PhoneticNameType } from './PhoneticNameType'
import { PhoneticRuleType } from './PhoneticRuleType'

export class PhoneticTokenFilter extends TokenFilterBase {
  encoder: PhoneticEncoder
  languageset: PhoneticLanguage[]
  /** @prop_serializer NullableStringIntFormatter */
  max_code_len: integer
  name_type: PhoneticNameType
  /** @prop_serializer NullableStringBooleanFormatter */
  replace: boolean
  rule_type: PhoneticRuleType
}
