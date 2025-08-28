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
import { Id, Ids } from '@_types/common'

/**
 * Delete anomaly jobs from a calendar.
 * @rest_spec_name ml.delete_calendar_job
 * @availability stack since=6.2.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_ml
 * @doc_id ml-delete-calendar-job
 * @doc_tag ml anomaly
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_ml/calendars/{calendar_id}/jobs/{job_id}'
      methods: ['DELETE']
    }
  ]
  path_parts: {
    /**
     * A string that uniquely identifies a calendar.
     */
    calendar_id: Id
    /**
     * An identifier for the anomaly detection jobs. It can be a job identifier, a group name, or a
     * comma-separated list of jobs or groups.
     */
    job_id: Ids
  }
}
