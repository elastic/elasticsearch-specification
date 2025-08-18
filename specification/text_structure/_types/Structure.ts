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

import { integer, long } from '@_types/Numeric'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

export class FieldStat {
  count: integer
  cardinality: integer
  top_hits: TopHit[]
  mean_value?: integer
  median_value?: integer
  max_value?: integer
  min_value?: integer
  earliest?: string
  latest?: string
}

export class TopHit {
  count: long
  value: UserDefinedValue
}

export enum EcsCompatibilityType {
  disabled,
  v1
}

export enum FormatType {
  delimited,
  ndjson,
  semi_structured_text,
  xml
}
