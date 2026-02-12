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
import { SynonymRule } from '../_types/SynonymRule'

/**
 * Create or update a synonym set.
 *
 * Synonyms sets are limited to a maximum of 10,000 synonym rules per set.
 * If you need to manage more synonym rules, you can create multiple synonym sets.
 *
 * When an existing synonyms set is updated, the search analyzers that use the synonyms set are reloaded automatically for all indices.
 * This is equivalent to invoking the reload search analyzers API for all indices that use the synonyms set.
 *
 * For practical examples of how to create or update a synonyms set, refer to the External documentation.
 * @rest_spec_name synonyms.put_synonym
 * @category ingest
 * @availability stack since=8.10.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_search_synonyms
 * @doc_id synonym-set-create
 * @ext_doc_id synonym-api-examples
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_synonyms/{id}'
      methods: ['PUT']
    }
  ]
  path_parts: {
    /**
     * The ID of the synonyms set to be created or updated.
     */
    id: Id
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  body: {
    /**
     * The synonym rules definitions for the synonyms set.
     */
    synonyms_set: SynonymRule | SynonymRule[]
  }
  query_parameters: {
    /**
     * If `true`, the request will refresh the analyzers with the new synonyms set and wait for the new synonyms to be available before returning.
     * If `false`, analyzers will not be reloaded with the new synonym set
     * @server_default true
     * @availability stack since=9.1.0
     */
    refresh?: boolean
  }
}
