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
 * Revert to a snapshot.
 * The machine learning features react quickly to anomalous input, learning new
 * behaviors in data. Highly anomalous input increases the variance in the
 * models whilst the system learns whether this is a new step-change in behavior
 * or a one-off event. In the case where this anomalous input is known to be a
 * one-off, then it might be appropriate to reset the model state to a time
 * before this event. For example, you might consider reverting to a saved
 * snapshot after Black Friday or a critical system failure.
 * @rest_spec_name ml.revert_model_snapshot
 * @availability stack since=5.4.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges manage_ml
 * @doc_tag ml anomaly
 * @doc_id ml-revert-snapshot
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_ml/anomaly_detectors/{job_id}/model_snapshots/{snapshot_id}/_revert'
      methods: ['POST']
    }
  ]
  path_parts: {
    /**
     *  Identifier for the anomaly detection job.
     */
    job_id: Id
    /**
     * You can specify `empty` as the <snapshot_id>. Reverting to the empty
     * snapshot means the anomaly detection job starts learning a new model from
     * scratch when it is started.
     */
    snapshot_id: Id
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * If true, deletes the results in the time period between the latest
     * results and the time of the reverted snapshot. It also resets the model
     * to accept records for this time period. If you choose not to delete
     * intervening results when reverting a snapshot, the job will not accept
     * input data that is older than the current time. If you want to resend
     * data, then delete the intervening results.
     * @server_default false
     */
    delete_intervening_results?: boolean
  }
  body?: {
    /**
     * Refer to the description for the `delete_intervening_results` query parameter.
     * @server_default false
     */
    delete_intervening_results?: boolean
  }
}
