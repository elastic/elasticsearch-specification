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
import { RequestBase } from '@_types/Base'
import { Id } from '@_types/common'
import { SynonymString } from '../_types/SynonymRule'

/**
 * Create or update a synonym rule.
 *
 * Create or update a synonym rule in a synonym set.
 *
 * If any of the synonym rules included is invalid, the API returns an error.
 *
 * When you update a synonym rule, all analyzers using the synonyms set will be reloaded automatically to reflect the new rule.
 * @rest_spec_name synonyms.put_synonym_rule
 * @availability stack since=8.10.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_search_synonyms
 * @doc_id synonym-rule-create
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_synonyms/{set_id}/{rule_id}'
      methods: ['PUT']
    }
  ]
  path_parts: {
    /**
     * The ID of the synonym set.
     */
    set_id: Id
    /**
     * The ID of the synonym rule to be updated or created.
     */
    rule_id: Id
  }
  body: {
    /**
     * The synonym rule information definition, which must be in Solr format.
     * @ext_doc_id synonym-set-define
     */
    synonyms: SynonymString
  }
  query_parameters: {
    /**
     * If `true`, the request will refresh the analyzers with the new synonym rule and wait for the new synonyms to be available before returning.
     * If `false`, analyzers will not be reloaded with the new synonym rule
     * @server_default true
     * @availability stack since=9.1.0
     */
    refresh?: boolean
  }
}
