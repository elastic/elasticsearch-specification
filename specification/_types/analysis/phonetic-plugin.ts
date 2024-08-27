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
  metaphone = 0,
  double_metaphone = 1,
  soundex = 2,
  refined_soundex = 3,
  caverphone1 = 4,
  caverphone2 = 5,
  cologne = 6,
  nysiis = 7,
  koelnerphonetik = 8,
  haasephonetik = 9,
  beider_morse = 10,
  daitch_mokotoff = 11
}

export enum PhoneticLanguage {
  any = 0,
  common = 1,
  cyrillic = 2,
  english = 3,
  french = 4,
  german = 5,
  hebrew = 6,
  hungarian = 7,
  polish = 8,
  romanian = 9,
  russian = 10,
  spanish = 11
}

export enum PhoneticNameType {
  generic = 0,
  ashkenazi = 1,
  sephardic = 2
}

export enum PhoneticRuleType {
  approx = 0,
  exact = 1
}

export class PhoneticTokenFilter extends TokenFilterBase {
  type: 'phonetic'
  encoder: PhoneticEncoder
  languageset?: PhoneticLanguage[]
  max_code_len?: integer
  name_type?: PhoneticNameType
  replace?: boolean
  rule_type?: PhoneticRuleType
}
