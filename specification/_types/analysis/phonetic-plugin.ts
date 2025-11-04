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

import { integer } from '@_types/Numeric'
import { TokenFilterBase } from './token_filters'

export enum PhoneticEncoder {
  metaphone,
  double_metaphone,
  soundex,
  refined_soundex,
  caverphone1,
  caverphone2,
  cologne,
  nysiis,
  koelnerphonetik,
  haasephonetik,
  beider_morse,
  daitch_mokotoff
}

export enum PhoneticLanguage {
  any,
  common,
  cyrillic,
  english,
  french,
  german,
  hebrew,
  hungarian,
  polish,
  romanian,
  russian,
  spanish
}

export enum PhoneticNameType {
  generic,
  ashkenazi,
  sephardic
}

export enum PhoneticRuleType {
  approx,
  exact
}

export class PhoneticTokenFilter extends TokenFilterBase {
  type: 'phonetic'
  encoder: PhoneticEncoder
  // eslint-disable-next-line es-spec-validator/prefer-tagged-variants -- TODO: use tagged variant
  languageset?: PhoneticLanguage | PhoneticLanguage[]
  max_code_len?: integer
  name_type?: PhoneticNameType
  replace?: boolean
  rule_type?: PhoneticRuleType
}
