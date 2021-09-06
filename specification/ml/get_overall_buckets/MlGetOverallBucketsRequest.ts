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
import { double, integer } from '@_types/Numeric'
import { Time } from '@_types/Time'

/**
 * @rest_spec_name ml.get_overall_buckets
 * @since 6.1.0
 * @stability stable
 */
export interface Request extends RequestBase {
  path_parts: {
    /**  Identifier for the anomaly detection job. It can be a job identifier, a group name, a comma-separated list of jobs or groups, or a wildcard expression. */
    job_id: Id
  }
  query_parameters?: {
    /** The span of the overall buckets. Must be greater or equal to the largest bucket span of the specified anomaly detection jobs, which is the default value. */
    bucket_span?: Time
    /** Returns overall buckets with overall scores greater than or equal to this value. */
    overall_score?: double | string
    /**
     * The number of top anomaly detection job bucket scores to be used in the overall_score calculation.
     * @server_default 1
     */
    top_n?: integer
    /** Returns overall buckets with timestamps earlier than this time. */
    end?: Time
    /** Returns overall buckets with timestamps after this time. */
    start?: Time
    /**  If true, the output excludes interim results. By default, interim results are included. */
    exclude_interim?: boolean
    allow_no_match?: boolean
  }
  body?: {
    allow_no_jobs?: boolean
  }
}
