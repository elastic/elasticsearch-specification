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

import { Field, Id, IndexName } from '@_types/common'
import { TotalHits } from '@global/search/_types/hits'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

export class EqlHits<TEvent> {
  /**
   * Metadata about the number of matching events or sequences.
   */
  total?: TotalHits
  /**
   * Contains events matching the query. Each object represents a matching event.
   */
  events?: HitsEvent<TEvent>[]
  /**
   * Contains event sequences matching the query. Each object represents a matching sequence. This parameter is only returned for EQL queries containing a sequence.
   * @doc_id eql-sequences
   */
  sequences?: HitsSequence<TEvent>[]
}

export class HitsEvent<TEvent> {
  /** Name of the index containing the event. */
  _index: IndexName
  /** Unique identifier for the event. This ID is only unique within the index. */
  _id: Id
  /** Original JSON body passed for the event at index time. */
  _source: TEvent
  /**
   * Set to `true` for events in a timespan-constrained sequence that do not meet a given condition.
   * @doc_id eql-missing-events
   */
  missing?: boolean
  fields?: Dictionary<Field, UserDefinedValue[]>
}

export class HitsSequence<TEvent> {
  /** Contains events matching the query. Each object represents a matching event. */
  events: HitsEvent<TEvent>[]
  /**
   * Shared field values used to constrain matches in the sequence. These are defined using the by keyword in the EQL query syntax.
   * @doc_id eql-sequences
   */
  join_keys?: UserDefinedValue[]
}
