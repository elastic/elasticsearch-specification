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

import { Page } from '@ml/_types/Page'
import { RequestBase } from '@_types/Base'
import { Field, Id } from '@_types/common'
import { double, integer } from '@_types/Numeric'
import { DateString, Timestamp } from '@_types/Time'

/**
 * @rest_spec_name ml.get_buckets
 * @since 5.4.0
 * @stability stable
 */
export interface Request extends RequestBase {
  path_parts: {
    job_id: Id
    timestamp?: Timestamp
  }
  query_parameters: {
    from?: integer
    size?: integer
    /**
     * @server_default false
     * @identifier exclude_interim_query
     */
    exclude_interim?: boolean
    /** @identifier sort_query */
    sort?: Field
    /**
     * @server_default false
     * @identifier desc_query
     */
    desc?: boolean
    /** @identifier start_query */
    start?: DateString
    /** @identifier end_query */
    end?: DateString
  }
  body: {
    anomaly_score?: double
    /** @server_default false */
    desc?: boolean
    /** @server_default false */
    exclude_interim?: boolean
    /** @server_default false */
    expand?: boolean
    page?: Page
    sort?: Field
    start?: DateString
    end?: DateString
  }
}
