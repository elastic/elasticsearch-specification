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
import { integer } from '@_types/Numeric'
import { SyncStatus } from '../_types/Connector'
import { SyncJobType } from '../_types/SyncJob'

/**
 * Get all connector sync jobs.
 *
 * Get information about all stored connector sync jobs listed by their creation date in ascending order.
 * @rest_spec_name connector.sync_job_list
 * @availability stack since=8.12.0 stability=beta
 * @availability serverless stability=beta visibility=public
 * @doc_id connector-sync-job-list
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_connector/_sync_job'
      methods: ['GET']
    }
  ]
  query_parameters: {
    /**
     * Starting offset
     * @server_default 0
     */
    from?: integer
    /**
     * Specifies a max number of results to get
     * @server_default 100
     */
    size?: integer
    /**
     * A sync job status to fetch connector sync jobs for
     */
    status?: SyncStatus
    /**
     * A connector id to fetch connector sync jobs for
     */
    connector_id?: Id
    /**
     * A comma-separated list of job types to fetch the sync jobs for
     */
    job_type?: SyncJobType | SyncJobType[]
  }
}
