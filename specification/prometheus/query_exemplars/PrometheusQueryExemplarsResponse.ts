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

import { ErrorResponseBase } from '@_types/Base'
import { ErrorBody } from '@prometheus/_types/ErrorBody'
import { ExemplarSeries } from './types'

export class Response {
  body: {
    /**
     * The status of the request: `success`.
     */
    status: string
    /**
     * The exemplars, grouped by series.
     */
    data: ExemplarSeries[]
  }
  exceptions: [
    {
      /**
       * The request or expression is not valid, including a non-positive `timeout`.
       * A form parameter that is also in the query string is the standard Elasticsearch error body instead.
       */
      statusCodes: [400]
      body: ErrorBody
    },
    {
      /**
       * The caller is not allowed to run the query.
       */
      statusCodes: [403]
      body: ErrorBody
    },
    {
      /**
       * Form-encoded POST is not accepted when security is disabled, HTTP TLS is not enabled on Elasticsearch, or the caller is anonymous.
       */
      statusCodes: [406]
      body: ErrorResponseBase
    },
    {
      /**
       * The query ran, but the response could not be written.
       */
      statusCodes: [500]
      body: ErrorBody
    },
    {
      /**
       * The query timed out.
       */
      statusCodes: [503]
      body: ErrorBody
    }
  ]
}
