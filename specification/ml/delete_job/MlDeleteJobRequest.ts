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
 * Delete an anomaly detection job.
 *
 * All job configuration, model state and results are deleted.
 * It is not currently possible to delete multiple jobs using wildcards or a
 * comma separated list. If you delete a job that has a datafeed, the request
 * first tries to delete the datafeed. This behavior is equivalent to calling
 * the delete datafeed API with the same timeout and force parameters as the
 * delete job request.
 * @rest_spec_name ml.delete_job
 * @category ai/ml
 * @availability stack since=5.4.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_ml
 * @doc_tag ml anomaly
 * @doc_id ml-delete-job
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_ml/anomaly_detectors/{job_id}'
      methods: ['DELETE']
    }
  ]
  path_parts: {
    /**
     * Identifier for the anomaly detection job.
     */
    job_id: Id
  }
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * Use to forcefully delete an opened job; this method is quicker than
     * closing and deleting the job.
     * @server_default false
     */
    force?: boolean
    /**
     * Specifies whether annotations that have been added by the
     * user should be deleted along with any auto-generated annotations when the job is
     * reset.
     * @server_default false
     */
    delete_user_annotations?: boolean
    /**
     * Specifies whether the request should return immediately or wait until the
     * job deletion completes.
     * @server_default true
     */
    wait_for_completion?: boolean
  }
}
