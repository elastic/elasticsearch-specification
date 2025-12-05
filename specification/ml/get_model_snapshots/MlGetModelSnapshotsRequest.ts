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
import { Field, Id } from '@_types/common'
import { integer } from '@_types/Numeric'
import { DateTime } from '@_types/Time'
import { Page } from '@ml/_types/Page'

/**
 * Get model snapshots info.
 *
 * @rest_spec_name ml.get_model_snapshots
 * @availability stack since=5.4.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges monitor_ml
 * @doc_tag ml anomaly
 * @doc_id ml-get-snapshot
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_ml/anomaly_detectors/{job_id}/model_snapshots/{snapshot_id}'
      methods: ['GET', 'POST']
    },
    {
      path: '/_ml/anomaly_detectors/{job_id}/model_snapshots'
      methods: ['GET', 'POST']
    }
  ]
  path_parts: {
    /**
     * Identifier for the anomaly detection job.
     */
    job_id: Id
    /**
     * A numerical character string that uniquely identifies the model snapshot. You can get information for multiple
     * snapshots by using a comma-separated list or a wildcard expression. You can get all snapshots by using `_all`,
     * by specifying `*` as the snapshot ID, or by omitting the snapshot ID.
     */
    snapshot_id?: Id
  }
  query_parameters: {
    /**
     * If true, the results are sorted in descending order.
     * @server_default false
     */
    desc?: boolean
    /**
     * Returns snapshots with timestamps earlier than this time.
     */
    end?: DateTime
    /**
     * Skips the specified number of snapshots.
     * @server_default 0
     */
    from?: integer
    /**
     * Specifies the maximum number of snapshots to obtain.
     * @server_default 100
     */
    size?: integer
    /**
     * Specifies the sort field for the requested snapshots. By default, the
     * snapshots are sorted by their timestamp.
     */
    sort?: Field
    /**
     * Returns snapshots with timestamps after this time.
     */
    start?: DateTime
  }
  body?: {
    /**
     * Refer to the description for the `desc` query parameter.
     * @server_default false
     */
    desc?: boolean
    /**
     * Refer to the description for the `end` query parameter.
     */
    end?: DateTime
    page?: Page
    /**
     * Refer to the description for the `sort` query parameter.
     */
    sort?: Field
    /**
     * Refer to the description for the `start` query parameter.
     */
    start?: DateTime
  }
}
