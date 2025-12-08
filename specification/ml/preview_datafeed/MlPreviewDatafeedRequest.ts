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
import { DateTime } from '@_types/Time'
import { DatafeedConfig } from '@ml/_types/Datafeed'
import { JobConfig } from '@ml/_types/Job'

/**
 * Preview a datafeed.
 * This API returns the first "page" of search results from a datafeed.
 * You can preview an existing datafeed or provide configuration details for a datafeed
 * and anomaly detection job in the API. The preview shows the structure of the data
 * that will be passed to the anomaly detection engine.
 * IMPORTANT: When Elasticsearch security features are enabled, the preview uses the credentials of the user that
 * called the API. However, when the datafeed starts it uses the roles of the last user that created or updated the
 * datafeed. To get a preview that accurately reflects the behavior of the datafeed, use the appropriate credentials.
 * You can also use secondary authorization headers to supply the credentials.
 * @rest_spec_name ml.preview_datafeed
 * @availability stack since=5.4.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @index_privileges read
 * @cluster_privileges manage_ml
 * @doc_tag ml anomaly
 * @doc_id ml-preview-datafeed
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_ml/datafeeds/{datafeed_id}/_preview'
      methods: ['GET', 'POST']
    },
    {
      path: '/_ml/datafeeds/_preview'
      methods: ['GET', 'POST']
    }
  ]
  path_parts: {
    /**
     * A numerical character string that uniquely identifies the datafeed. This identifier can contain lowercase
     * alphanumeric characters (a-z and 0-9), hyphens, and underscores. It must start and end with alphanumeric
     * characters. NOTE: If you use this path parameter, you cannot provide datafeed or anomaly detection job
     * configuration details in the request body.
     */
    datafeed_id?: Id
  }
  query_parameters: {
    /** The start time from where the datafeed preview should begin */
    start?: DateTime
    /** The end time when the datafeed preview should stop */
    end?: DateTime
  }
  body?: {
    /**
     * The datafeed definition to preview.
     */
    datafeed_config?: DatafeedConfig
    /**
     * The configuration details for the anomaly detection job that is associated with the datafeed. If the
     * `datafeed_config` object does not include a `job_id` that references an existing anomaly detection job, you must
     * supply this `job_config` object. If you include both a `job_id` and a `job_config`, the latter information is
     * used. You cannot specify a `job_config` object unless you also supply a `datafeed_config` object.
     */
    job_config?: JobConfig
  }
}
