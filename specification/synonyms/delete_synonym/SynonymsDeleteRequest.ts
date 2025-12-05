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
 * Delete a synonym set.
 *
 * You can only delete a synonyms set that is not in use by any index analyzer.
 *
 * Synonyms sets can be used in synonym graph token filters and synonym token filters.
 * These synonym filters can be used as part of search analyzers.
 *
 * Analyzers need to be loaded when an index is restored (such as when a node starts, or the index becomes open).
 * Even if the analyzer is not used on any field mapping, it still needs to be loaded on the index recovery phase.
 *
 * If any analyzers cannot be loaded, the index becomes unavailable and the cluster status becomes red or yellow as index shards are not available.
 * To prevent that, synonyms sets that are used in analyzers can't be deleted.
 * A delete request in this case will return a 400 response code.
 *
 * To remove a synonyms set, you must first remove all indices that contain analyzers using it.
 * You can migrate an index by creating a new index that does not contain the token filter with the synonyms set, and use the reindex API in order to copy over the index data.
 * Once finished, you can delete the index.
 * When the synonyms set is not used in analyzers, you will be able to delete it.
 * @rest_spec_name synonyms.delete_synonym
 * @availability stack since=8.10.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_search_synonyms
 * @doc_id synonym-set-delete
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_synonyms/{id}'
      methods: ['DELETE']
    }
  ]
  path_parts: {
    /**
     * The synonyms set identifier to delete.
     */
    id: Id
  }
  response_media_type: MediaType.Json
}
