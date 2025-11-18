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

/**
 * Update a filter.
 *
 * Updates the description of a filter, adds items, or removes items from the list.
 * @rest_spec_name ml.update_filter
 * @availability stack since=6.4.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_ml
 * @doc_tag ml anomaly
 * @doc_id ml-update-filter
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_ml/filters/{filter_id}/_update'
      methods: ['POST']
    }
  ]
  path_parts: {
    /**
     * A string that uniquely identifies a filter.
     */
    filter_id: Id
  }
  body: {
    /**
     * The items to add to the filter.
     */
    add_items?: string[]
    /**
     * A description for the filter.
     */
    description?: string
    /**
     * The items to remove from the filter.
     */
    remove_items?: string[]
  }
}
