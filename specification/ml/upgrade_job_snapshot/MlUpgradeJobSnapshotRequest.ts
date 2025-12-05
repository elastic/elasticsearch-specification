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
 * Upgrade a snapshot.
 *
 * Upgrade an anomaly detection model snapshot to the latest major version.
 * Over time, older snapshot formats are deprecated and removed. Anomaly
 * detection jobs support only snapshots that are from the current or previous
 * major version.
 * This API provides a means to upgrade a snapshot to the current major version.
 * This aids in preparing the cluster for an upgrade to the next major version.
 * Only one snapshot per anomaly detection job can be upgraded at a time and the
 * upgraded snapshot cannot be the current snapshot of the anomaly detection
 * job.
 * @rest_spec_name ml.upgrade_job_snapshot
 * @availability stack since=5.4.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges manage_ml
 * @doc_tag ml anomaly
 * @doc_id ml-upgrade-job-model-snapshot
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_ml/anomaly_detectors/{job_id}/model_snapshots/{snapshot_id}/_upgrade'
      methods: ['POST']
    }
  ]
  path_parts: {
    /**
     * Identifier for the anomaly detection job.
     */
    job_id: Id
    /**
     * A numerical character string that uniquely identifies the model snapshot.
     */
    snapshot_id: Id
  }
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * When true, the API won’t respond until the upgrade is complete.
     * Otherwise, it responds as soon as the upgrade task is assigned to a node.
     * @server_default false
     */
    wait_for_completion?: boolean
    /**
     * Controls the time to wait for the request to complete.
     * @server_default 30m
     */
    timeout?: Duration
  }
}
