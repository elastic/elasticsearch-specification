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
import { CategoryId, Id } from '@_types/common'
import { integer } from '@_types/Numeric'
import { Page } from '@ml/_types/Page'

/**
 * Get anomaly detection job results for categories.
 *
 * @rest_spec_name ml.get_categories
 * @availability stack since=5.4.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges monitor_ml
 * @doc_tag ml anomaly
 * @doc_id ml-get-category
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_ml/anomaly_detectors/{job_id}/results/categories/{category_id}'
      methods: ['GET', 'POST']
    },
    {
      path: '/_ml/anomaly_detectors/{job_id}/results/categories'
      methods: ['GET', 'POST']
    }
  ]
  path_parts: {
    /**
     * Identifier for the anomaly detection job.
     */
    job_id: Id
    /**
     * Identifier for the category, which is unique in the job. If you specify
     * neither the category ID nor the partition_field_value, the API returns
     * information about all categories. If you specify only the
     * partition_field_value, it returns information about all categories for
     * the specified partition.
     */
    category_id?: CategoryId
  }
  query_parameters: {
    /**
     * Skips the specified number of categories.
     * @server_default 0
     */
    from?: integer
    /**
     * Only return categories for the specified partition.
     */
    partition_field_value?: string
    /**
     * Specifies the maximum number of categories to obtain.
     * @server_default 100
     */
    size?: integer
  }
  body?: {
    /**
     * Configures pagination.
     * This parameter has the `from` and `size` properties.
     */
    page?: Page
  }
}
