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

import { float } from '@_types/Numeric'
import { AdditionalProperties } from '_spec_utils/behaviors'

export class QueryBase {
  boost?: float
  _name?: string
}

/**
 * Queries can either be in the form of
 * { type: { field: { ...query_details...including_boost_and_name } } }
 * ||
 * { type: { boost: _, _name: _, field: { ...query_details... } } }
 */

export class NamedQuery<TQuery>
  implements AdditionalProperties<string, TQuery> {
  boost?: float
  _name?: string
  ignore_unmapped?: boolean
}
