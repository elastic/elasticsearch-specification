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
  DataStreamName,
  Field,
  HealthStatus,
  IndexName,
  Metadata,
  Name,
  Uuid
} from '@_types/common'
import { integer } from '@_types/Numeric'

export class Response {
  '200': {
    body: { data_streams: IndicesGetDataStreamItem[] }
  }
}

export class IndicesGetDataStreamItem {
  name: DataStreamName
  timestamp_field: IndicesGetDataStreamItemTimestampField
  indices: IndicesGetDataStreamItemIndex[]
  generation: integer
  template: Name
  hidden: boolean
  /** @since 7.10.0 */
  system?: boolean
  status: HealthStatus
  ilm_policy?: Name
  /** @doc_url https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-meta-field.html */
  _meta?: Metadata
}

export class IndicesGetDataStreamItemTimestampField {
  name: Field
}

export class IndicesGetDataStreamItemIndex {
  index_name: IndexName
  index_uuid: Uuid
}
