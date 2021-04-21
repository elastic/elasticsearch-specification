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

import { IndexName, Routing, Type } from '@_types/common'
import { double, long } from '@_types/Numeric'
import { Dictionary } from '_spec_utils/Dictionary'
import { UserDefinedValue } from '_spec_utils/UserDefinedValue'
import { Context } from './context_suggester/Context'

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
export type SuggestOption<TDocument> =
  | CompletionSuggestOption<TDocument>
  | PhraseSuggestOption
  | TermSuggestOption

export class CompletionSuggestOption<TDocument> {
  collate_match?: boolean
  contexts?: Dictionary<string, Context[]>
  fields?: Dictionary<string, UserDefinedValue>
  _id: string
  _index: IndexName
  _type?: Type
  _routing?: Routing
  _score: double
  _source: TDocument
  text: string
}

export class PhraseSuggestOption {
  text: string
  highlighted: string
  score: double
}

export class TermSuggestOption {
  text: string
  freq?: long
  score: double
}
