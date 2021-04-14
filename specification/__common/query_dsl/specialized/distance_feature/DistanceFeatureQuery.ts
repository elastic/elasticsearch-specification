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

import { Field } from '../../../common'
import { DateMath } from '../../../common_options/date_math/DateMath'
import { Distance } from '../../../common_options/geo/Distance'
import { Time } from '../../../common_options/time_unit/Time'
import { QueryBase } from '../../abstractions/query/Query'
import { GeoCoordinate } from '../../geo/GeoLocation'

export class DistanceFeatureQuery extends QueryBase {
  origin?: Array<number> | GeoCoordinate | DateMath
  pivot?: Distance | Time
  field?: Field
}
