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

import { Fields, integer, Name } from '@common/common'
import { ScriptField } from '@common/common_options/scripting/ScriptField'
import { Dictionary } from '__spec_utils/Dictionary'
import { FieldCollapse } from '../collapsing/FieldCollapse'
import { Highlight } from '../highlighting/Highlight'
import { Sort } from '../sort/Sort'
import { SourceFilter } from '../source_filtering/SourceFilter'

export class InnerHits {
  name?: Name
  size?: integer
  from?: integer
  collapse?: FieldCollapse
  docvalue_fields?: Fields
  explain?: boolean
  highlight?: Highlight
  ignore_unmapped?: boolean
  script_fields?: Dictionary<string, ScriptField>
  seq_no_primary_term?: boolean
  fields?: Fields
  sort?: Sort
  _source?: boolean | SourceFilter
  version?: boolean
}
