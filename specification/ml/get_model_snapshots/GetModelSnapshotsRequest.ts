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

import { DateString, Field, Id } from '../../__common/common'
import { RequestBase } from '../../__common/common_abstractions/request/RequestBase'
import { Page } from '../../__common/ml/Page'

/**
 * @rest_spec_name ml.get_model_snapshots
 * @since 5.4.0
 * @stability TODO
 */
export interface GetModelSnapshotsRequest extends RequestBase {
  path_parts?: {
    job_id: Id
    snapshot_id?: Id
  }
  query_parameters?: {}
  body?: {
    desc?: boolean
    /** @prop_serializer NullableDateTimeOffsetEpochMillisecondsFormatter */
    end?: DateString
    page?: Page
    sort?: Field
    /** @prop_serializer NullableDateTimeOffsetEpochMillisecondsFormatter */
    start?: DateString
  }
}
