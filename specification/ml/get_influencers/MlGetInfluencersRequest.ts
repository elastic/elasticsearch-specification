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
import { Field, Id, MediaType } from '@_types/common'
import { double, integer } from '@_types/Numeric'
import { DateTime } from '@_types/Time'
import { Page } from '@ml/_types/Page'

/**
 * Get anomaly detection job results for influencers.
 * Influencers are the entities that have contributed to, or are to blame for,
 * the anomalies. Influencer results are available only if an
 * `influencer_field_name` is specified in the job configuration.
 * @rest_spec_name ml.get_influencers
 * @availability stack since=5.4.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges monitor_ml
 * @doc_tag ml anomaly
 * @doc_id ml-get-influencer
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_ml/anomaly_detectors/{job_id}/results/influencers'
      methods: ['GET', 'POST']
    }
  ]
  path_parts: {
    /**
     * Identifier for the anomaly detection job.
     */
    job_id: Id
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * If true, the results are sorted in descending order.
     * @server_default false
     */
    desc?: boolean
    /**
     * Returns influencers with timestamps earlier than this time.
     * The default value means it is unset and results are not limited to
     * specific timestamps.
     * @server_default -1
     */
    end?: DateTime
    /**
     * If true, the output excludes interim results. By default, interim results
     * are included.
     * @server_default false
     */
    exclude_interim?: boolean
    /**
     * Returns influencers with anomaly scores greater than or equal to this
     * value.
     * @server_default 0.0
     */
    influencer_score?: double
    /**
     * Skips the specified number of influencers.
     * @server_default 0
     */
    from?: integer
    /**
     * Specifies the maximum number of influencers to obtain.
     * @server_default 100
     */
    size?: integer
    /**
     * Specifies the sort field for the requested influencers. By default, the
     * influencers are sorted by the `influencer_score` value.
     */
    sort?: Field
    /**
     * Returns influencers with timestamps after this time. The default value
     * means it is unset and results are not limited to specific timestamps.
     * @server_default -1
     */
    start?: DateTime
  }
  body?: {
    /**
     * Configures pagination.
     * This parameter has the `from` and `size` properties.
     */
    page?: Page
  }
}
