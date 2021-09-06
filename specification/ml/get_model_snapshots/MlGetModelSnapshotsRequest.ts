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
import { Field, Id } from '@_types/common'
import { integer } from '@_types/Numeric'
import { Time } from '@_types/Time'

/**
 * @rest_spec_name ml.get_model_snapshots
 * @since 5.4.0
 * @stability stable
 */
export interface Request extends RequestBase {
  path_parts: {
    /** Identifier for the anomaly detection job. */
    job_id: Id
    /** A numerical character string that uniquely identifies the model snapshot. */
    snapshot_id?: Id
  }
  query_parameters?: {
    /** If true, the results are sorted in descending order. */
    desc?: boolean
    /** Returns snapshots with timestamps earlier than this time. */
    end?: Time
    /** Skips the specified number of snapshots. */
    from?: integer
    /** Specifies the maximum number of snapshots to obtain. */
    size?: integer
    /** Specifies the sort field for the requested snapshots. By default, the snapshots are sorted by their timestamp. */
    sort?: Field
    /** Returns snapshots with timestamps after this time. */
    start?: Time
  }
  body?: {
    start?: Time
    end?: Time
  }
}
