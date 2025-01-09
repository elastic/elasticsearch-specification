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

import { Id } from '@_types/common'
import { integer } from '@_types/Numeric'

export class Response {
  body: {
    /**
     * The total number of synonyms sets defined.
     */
    count: integer
    /**
     * The identifier and total number of defined synonym rules for each synonyms set.
     */
    results: SynonymsSetItem[]
  }
}

export class SynonymsSetItem {
  /**
   * Synonyms set identifier
   */
  synonyms_set: Id
  /**
   * Number of synonym rules that the synonym set contains
   */
  count: integer
}
