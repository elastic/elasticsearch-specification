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
 * Create a filter.
 *
 * A filter contains a list of strings. It can be used by one or more anomaly detection jobs.
 * Specifically, filters are referenced in the `custom_rules` property of detector configuration objects.
 * @rest_spec_name ml.put_filter
 * @availability stack since=5.4.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_ml
 * @doc_tag ml anomaly
 * @doc_id ml-put-filter
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_ml/filters/{filter_id}'
      methods: ['PUT']
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
     * A description of the filter.
     */
    description?: string
    /**
     * The items of the filter. A wildcard `*` can be used at the beginning or the end of an item.
     * Up to 10000 items are allowed in each filter.
     */
    items?: string[]
  }
}
