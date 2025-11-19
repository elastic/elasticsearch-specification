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
import { Page } from '@ml/_types/Page'

/**
 * Get calendar configuration info.
 *
 * @rest_spec_name ml.get_calendars
 * @availability stack since=6.2.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges monitor_ml
 * @doc_tag ml anomaly
 * @doc_id ml-get-calendar
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_ml/calendars'
      methods: ['GET', 'POST']
    },
    {
      path: '/_ml/calendars/{calendar_id}'
      methods: ['GET', 'POST']
    }
  ]
  path_parts: {
    /** A string that uniquely identifies a calendar. You can get information for multiple calendars by using a comma-separated list of ids or a wildcard expression. You can get information for all calendars by using `_all` or `*` or by omitting the calendar identifier.*/
    calendar_id?: Id
  }
  query_parameters: {
    /** Skips the specified number of calendars. This parameter is supported only when you omit the calendar identifier.
     * @server_default 0
     */
    from?: integer
    /** Specifies the maximum number of calendars to obtain. This parameter is supported only when you omit the calendar identifier.
     * @server_default 10000
     */
    size?: integer
  }
  body: {
    /** This object is supported only when you omit the calendar identifier. */
    page?: Page
  }
}
