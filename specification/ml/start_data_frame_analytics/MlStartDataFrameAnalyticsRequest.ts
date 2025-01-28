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
import { Duration } from '@_types/Time'

/**
 * Start a data frame analytics job.
 * A data frame analytics job can be started and stopped multiple times
 * throughout its lifecycle.
 * If the destination index does not exist, it is created automatically the
 * first time you start the data frame analytics job. The
 * `index.number_of_shards` and `index.number_of_replicas` settings for the
 * destination index are copied from the source index. If there are multiple
 * source indices, the destination index copies the highest setting values. The
 * mappings for the destination index are also copied from the source indices.
 * If there are any mapping conflicts, the job fails to start.
 * If the destination index exists, it is used as is. You can therefore set up
 * the destination index in advance with custom settings and mappings.
 * @rest_spec_name ml.start_data_frame_analytics
 * @availability stack since=7.3.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_ml
 * @index_privileges create_index, index, manage, read, view_index_metadata
 * @doc_tag ml data frame
 * @doc_id start-dfanalytics
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_ml/data_frame/analytics/{id}/_start'
      methods: ['POST']
    }
  ]
  path_parts: {
    /**
     * Identifier for the data frame analytics job. This identifier can contain
     * lowercase alphanumeric characters (a-z and 0-9), hyphens, and
     * underscores. It must start and end with alphanumeric characters.
     */
    id: Id
  }
  query_parameters: {
    /**
     * Controls the amount of time to wait until the data frame analytics job
     * starts.
     * @server_default 20s
     */
    timeout?: Duration
  }
}
