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
import { IndexName } from '@_types/common'

/**
 * Remove policies from an index.
 * Remove the assigned lifecycle policies from an index or a data stream's backing indices.
 * It also stops managing the indices.
 * @rest_spec_name ilm.remove_policy
 * @availability stack since=6.6.0 stability=stable
 * @index_privileges manage_ilm
 * @doc_id ilm-remove-policy
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/{index}/_ilm/remove'
      methods: ['POST']
    }
  ]
  path_parts: {
    /** The name of the index to remove policy on */
    index: IndexName
  }
}
