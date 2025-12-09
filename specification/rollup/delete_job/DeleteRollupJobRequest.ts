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
 * Delete a rollup job.
 *
 * A job must be stopped before it can be deleted.
 * If you attempt to delete a started job, an error occurs.
 * Similarly, if you attempt to delete a nonexistent job, an exception occurs.
 *
 * IMPORTANT: When you delete a job, you remove only the process that is actively monitoring and rolling up data.
 * The API does not delete any previously rolled up data.
 * This is by design; a user may wish to roll up a static data set.
 * Because the data set is static, after it has been fully rolled up there is no need to keep the indexing rollup job around (as there will be no new data).
 * Thus the job can be deleted, leaving behind the rolled up data for analysis.
 * If you wish to also remove the rollup data and the rollup index contains the data for only a single job, you can delete the whole rollup index.
 * If the rollup index stores data from several jobs, you must issue a delete-by-query that targets the rollup job's identifier in the rollup index. For example:
 *
 * ```
 * POST my_rollup_index/_delete_by_query
 * {
 *   "query": {
 *     "term": {
 *       "_rollup.id": "the_rollup_job_id"
 *     }
 *   }
 * }
 * ```
 * @rest_spec_name rollup.delete_job
 * @availability stack since=6.3.0 stability=experimental
 * @deprecated 8.11.0
 * @cluster_privileges manage_rollup
 * @doc_id rollup-delete-job
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_rollup/job/{id}'
      methods: ['DELETE']
    }
  ]
  path_parts: {
    /**
     * Identifier for the job.
     */
    id: Id
  }
  response_media_type: MediaType.Json
}
