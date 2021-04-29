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
import { DateString } from '@_types/Time'

/**
 * deprecated 7.11.0
 * @rest_spec_name ml.post_data
 * @since 5.5.0
 * @stability TODO
 */
interface Request<TJsonDocument> extends RequestBase {
  path_parts?: {
    job_id: Id
  }
  query_parameters?: {
    reset_end?: DateString
    reset_start?: DateString
  }
  /** @doc_url https://www.elastic.co/guide/en/elasticsearch/reference/7.11/ml-post-data.html#_request_body_23 */
  body: TJsonDocument[] | TJsonDocument
}
