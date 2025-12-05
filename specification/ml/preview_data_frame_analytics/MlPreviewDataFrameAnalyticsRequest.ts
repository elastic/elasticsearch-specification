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
import { DataframePreviewConfig } from './types'

/**
 * Preview features used by data frame analytics.
 *
 * Preview the extracted features used by a data frame analytics config.
 * @rest_spec_name ml.preview_data_frame_analytics
 * @availability stack since=7.13.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges monitor_ml
 * @doc_tag ml data frame
 * @doc_id preview-dfanalytics
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_ml/data_frame/analytics/_preview'
      methods: ['GET', 'POST']
    },
    {
      path: '/_ml/data_frame/analytics/{id}/_preview'
      methods: ['GET', 'POST']
    }
  ]
  path_parts: {
    /**
     * Identifier for the data frame analytics job.
     */
    id?: Id
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  body?: {
    /**
     * A data frame analytics config as described in create data frame analytics
     * jobs. Note that `id` and `dest` don’t need to be provided in the context of
     * this API.
     * @doc_id put-dfanalytics
     */
    config?: DataframePreviewConfig
  }
}
