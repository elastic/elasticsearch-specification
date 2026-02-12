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
import { Duration } from '@_types/Time'

/**
 * Delete a data frame analytics job.
 *
 * @rest_spec_name ml.delete_data_frame_analytics
 * @category ai/ml
 * @availability stack since=7.3.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_ml
 * @doc_id ml-delete-dfanalytics
 * @doc_tag ml data frame
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_ml/data_frame/analytics/{id}'
      methods: ['DELETE']
    }
  ]
  path_parts: {
    /**
     * Identifier for the data frame analytics job.
     */
    id: Id
  }
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * If `true`, it deletes a job that is not stopped; this method is quicker than stopping and deleting the job.
     * @server_default false
     */
    force?: boolean
    /**
     * The time to wait for the job to be deleted.
     * @server_default 1m
     */
    timeout?: Duration
  }
}
