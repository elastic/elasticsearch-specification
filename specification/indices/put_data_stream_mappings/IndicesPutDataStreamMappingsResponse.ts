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

import { IndexName } from '@_types/common'
import { TypeMapping } from '@_types/mapping/TypeMapping'

export class Response {
  /** @codegen_name data_stream_mappings_results */
  body: {
    data_streams: Array<UpdatedDataStreamMappings>
  }
}

export class UpdatedDataStreamMappings {
  /** The data stream name. */
  name: IndexName
  /**
   * If the mappings were successfully applied to the data stream (or would have been, if running in `dry_run`
   * mode), it is `true`. If an error occurred, it is `false`.
   */
  applied_to_data_stream: boolean
  /**
   * A message explaining why the mappings could not be applied to the data stream.
   */
  error?: string
  /**
   * The mappings that are specfic to this data stream that will override any mappings from the matching index template.
   */
  mappings?: TypeMapping
  /**
   * The mappings that are effective on this data stream, taking into account the mappings from the matching index
   * template and the mappings specific to this data stream.
   */
  effective_mappings?: TypeMapping
}
