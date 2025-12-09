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
import { HttpHeaders, Id, IndexName, MediaType } from '@_types/common'
import { integer } from '@_types/Numeric'
import { Duration } from '@_types/Time'
import { Groupings } from '@rollup/_types/Groupings'
import { FieldMetric } from '@rollup/_types/Metric'

/**
 * Create a rollup job.
 *
 * WARNING: From 8.15.0, calling this API in a cluster with no rollup usage will fail with a message about the deprecation and planned removal of rollup features. A cluster needs to contain either a rollup job or a rollup index in order for this API to be allowed to run.
 *
 * The rollup job configuration contains all the details about how the job should run, when it indexes documents, and what future queries will be able to run against the rollup index.
 *
 * There are three main sections to the job configuration: the logistical details about the job (for example, the cron schedule), the fields that are used for grouping, and what metrics to collect for each group.
 *
 * Jobs are created in a `STOPPED` state. You can start them with the start rollup jobs API.
 * @rest_spec_name rollup.put_job
 * @availability stack since=6.3.0 stability=experimental
 * @cluster_privileges manage, manage_rollup
 * @deprecated 8.11.0
 * @doc_id rollup-put-job
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_rollup/job/{id}'
      methods: ['PUT']
    }
  ]
  path_parts: {
    /**
     * Identifier for the rollup job. This can be any alphanumeric string and uniquely identifies the
     * data that is associated with the rollup job. The ID is persistent; it is stored with the rolled
     * up data. If you create a job, let it run for a while, then delete the job, the data that the job
     * rolled up is still be associated with this job ID. You cannot create a new job with the same ID
     * since that could lead to problems with mismatched job configurations.
     */
    id: Id
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  body: {
    /**
     * A cron string which defines the intervals when the rollup job should be executed. When the interval
     * triggers, the indexer attempts to rollup the data in the index pattern. The cron pattern is unrelated
     * to the time interval of the data being rolled up. For example, you may wish to create hourly rollups
     * of your document but to only run the indexer on a daily basis at midnight, as defined by the cron. The
     * cron pattern is defined just like a Watcher cron schedule.
     */
    cron: string
    /**
     * Defines the grouping fields and aggregations that are defined for this rollup job. These fields will then be
     * available later for aggregating into buckets. These aggs and fields can be used in any combination. Think of
     * the groups configuration as defining a set of tools that can later be used in aggregations to partition the
     * data. Unlike raw data, we have to think ahead to which fields and aggregations might be used. Rollups provide
     * enough flexibility that you simply need to determine which fields are needed, not in what order they are needed.
     */
    groups: Groupings
    /**
     * The index or index pattern to roll up. Supports wildcard-style patterns (`logstash-*`). The job attempts to
     * rollup the entire index or index-pattern.
     */
    index_pattern: string
    /**
     * Defines the metrics to collect for each grouping tuple. By default, only the doc_counts are collected for each
     * group. To make rollup useful, you will often add metrics like averages, mins, maxes, etc. Metrics are defined
     * on a per-field basis and for each field you configure which metric should be collected.
     */
    metrics?: FieldMetric[]
    /**
     * The number of bucket results that are processed on each iteration of the rollup indexer. A larger value tends
     * to execute faster, but requires more memory during processing. This value has no effect on how the data is
     * rolled up; it is merely used for tweaking the speed or memory cost of the indexer.
     */
    page_size: integer
    /**
     * The index that contains the rollup results. The index can be shared with other rollup jobs. The data is stored so that it doesn’t interfere with unrelated jobs.
     */
    rollup_index: IndexName
    /**
     * Time to wait for the request to complete.
     * @server_default 20s
     */
    timeout?: Duration
    headers?: HttpHeaders
  }
}
