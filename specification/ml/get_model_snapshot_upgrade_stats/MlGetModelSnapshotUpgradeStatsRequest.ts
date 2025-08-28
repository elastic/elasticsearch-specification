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

/**
 * Get anomaly detection job model snapshot upgrade usage info.
 * @rest_spec_name ml.get_model_snapshot_upgrade_stats
 * @availability stack since=7.16.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges monitor_ml
 * @doc_tag ml anomaly
 * @doc_id ml-get-job-model-snapshot-upgrade-stats
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_ml/anomaly_detectors/{job_id}/model_snapshots/{snapshot_id}/_upgrade/_stats'
      methods: ['GET']
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
    snapshot_id: Id
  }
  query_parameters: {
    /**
     * Specifies what to do when the request:
     *
     *  -  Contains wildcard expressions and there are no jobs that match.
     *  -  Contains the _all string or no identifiers and there are no matches.
     *  -  Contains wildcard expressions and there are only partial matches.
     *
     * The default value is true, which returns an empty jobs array when there are no matches and the subset of results
     * when there are partial matches. If this parameter is false, the request returns a 404 status code when there are
     * no matches or only partial matches.
     */
    allow_no_match?: boolean
  }
}
