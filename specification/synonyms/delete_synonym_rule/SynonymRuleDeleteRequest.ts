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
import { Id, MediaType } from '@_types/common'

/**
 * Delete a synonym rule.
 * Delete a synonym rule from a synonym set.
 * @rest_spec_name synonyms.delete_synonym_rule
 * @availability stack since=8.10.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_search_synonyms
 * @doc_id synonym-rule-delete
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_synonyms/{set_id}/{rule_id}'
      methods: ['DELETE']
    }
  ]
  path_parts: {
    /**
     * The ID of the synonym set to update.
     */
    set_id: Id
    /**
     * The ID of the synonym rule to delete.
     */
    rule_id: Id
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
}
