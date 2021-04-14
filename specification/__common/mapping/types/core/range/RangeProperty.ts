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

import { double } from '@common/common'
import { DocValuesPropertyBase } from '../../DocValuesProperty'
import { DateRangeProperty } from './date_range/DateRangeProperty'
import { DoubleRangeProperty } from './double_range/DoubleRangeProperty'
import { FloatRangeProperty } from './float_range/FloatRangeProperty'
import { IntegerRangeProperty } from './integer_range/IntegerRangeProperty'
import { IpRangeProperty } from './ip_range/IpRangeProperty'
import { LongRangeProperty } from './long_range/LongRangeProperty'

export class RangePropertyBase extends DocValuesPropertyBase {
  boost?: double
  coerce?: boolean
  index?: boolean
}

export type RangeProperty =
  | LongRangeProperty
  | IpRangeProperty
  | IntegerRangeProperty
  | FloatRangeProperty
  | DoubleRangeProperty
  | DateRangeProperty
