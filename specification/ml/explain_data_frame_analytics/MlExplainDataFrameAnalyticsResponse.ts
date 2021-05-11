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

import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

export class Response {
  body: {
    /** An array of objects that explain selection for each field, sorted by the field names. */
    field_selection: UserDefinedValue[] // TODO: it should be DataframeAnalyticsFieldSelection[] but GitHub Actions fails
    /** An array of objects that explain selection for each field, sorted by the field names. */
    memory_estimation: UserDefinedValue // TODO: it should be DataframeAnalyticsMemoryEstimation but GitHub Actions fails
  }
}
