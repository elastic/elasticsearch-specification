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

import { OverloadOf } from '@spec_utils/behaviors'
import { Id } from '@_types/common'

export type SynonymString = string

// Synonym Rule with optional ID, used for PUT method
export class SynonymRule {
  /**
   * The identifier for the synonym rule.
   * If you do not specify a synonym rule ID when you create a rule, an identifier is created automatically by Elasticsearch.
   */
  id?: Id
  /**
   * The synonyms that conform the synonym rule in Solr format.
   * @ext_doc_id synonym-set-define
   */
  synonyms: SynonymString
}

// Synonym Rule with mandatory ID, used for responses (which always include it)
export class SynonymRuleRead implements OverloadOf<SynonymRule> {
  /**
   * Synonym Rule identifier
   */
  id: Id
  /**
   * Synonyms, in Solr format, that conform the synonym rule. See https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis-synonym-graph-tokenfilter.html#_solr_synonyms_2
   */
  synonyms: SynonymString
}
