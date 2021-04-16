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

import {
  DateString,
  double,
  Field,
  Id,
  integer,
  Timestamp
} from '@common/common'
import { RequestBase } from '@common/common_abstractions/request/RequestBase'
import { Page } from '@common/ml/Page'

/**
 * @rest_spec_name ml.get_buckets
 * @since 5.4.0
 * @stability TODO
 */
export interface MlGetBucketsRequest extends RequestBase {
  path_parts: {
    job_id: Id
    timestamp?: Timestamp
  }
  query_parameters?: {
    from?: integer
    size?: integer
    exclude_interim?: boolean // default: false
    sort?: Field
    desc?: boolean // default: false
    start?: DateString
    end?: DateString
  }
  body?: {
    anomaly_score?: double
    desc?: boolean // default: false
    exclude_interim?: boolean // default: false
    expand?: boolean // default: false
    page?: Page
    sort?: Field
    start?: DateString
    end?: DateString
  }
}
