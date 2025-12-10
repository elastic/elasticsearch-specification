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

/**
 * Update a snapshot.
 * Updates certain properties of a snapshot.
 * @rest_spec_name ml.update_model_snapshot
 * @availability stack since=5.4.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges manage_ml
 * @doc_tag ml anomaly
 * @doc_id ml-update-snapshot
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_ml/anomaly_detectors/{job_id}/model_snapshots/{snapshot_id}/_update'
      methods: ['POST']
    }
  ]
  path_parts: {
    /**
     * Identifier for the anomaly detection job.
     */
    job_id: Id
    /**
     * Identifier for the model snapshot.
     */
    snapshot_id: Id
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  body: {
    /**
     * A description of the model snapshot.
     */
    description?: string
    /**
     * If `true`, this snapshot will not be deleted during automatic cleanup of
     * snapshots older than `model_snapshot_retention_days`. However, this
     * snapshot will be deleted when the job is deleted.
     * @server_default false
     */
    retain?: boolean
  }
}
