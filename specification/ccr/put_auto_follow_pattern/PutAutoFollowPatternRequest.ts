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

import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { RequestBase } from '@_types/Base'
import { ByteSize, IndexPattern, IndexPatterns, Name } from '@_types/common'
import { integer } from '@_types/Numeric'
import { Time } from '@_types/Time'

/**
 * @rest_spec_name ccr.put_auto_follow_pattern
 * @since 6.5.0
 * @stability TODO
 */
export interface Request extends RequestBase {
  path_parts?: {
    name: Name // param name in docs: auto_follow_pattern_name
  }
  query_parameters?: {}
  body?: {
    remote_cluster: string
    follow_index_pattern?: IndexPattern
    leader_index_patterns?: IndexPatterns
    /** @server_default 12 */
    max_outstanding_read_requests?: integer
    settings?: Dictionary<string, UserDefinedValue>
    /** @server_default 9 */
    max_outstanding_write_requests?: integer
    /** @server_default 1m */
    read_poll_timeout?: Time
    /** @server_default 5120 */
    max_read_request_operation_count?: integer
    /** @server_default 32mb */
    max_read_request_size?: ByteSize
    /** @server_default 500ms */
    max_retry_delay?: Time
    /** @server_default 2147483647 */
    max_write_buffer_count?: integer
    /** @server_default 512mb */
    max_write_buffer_size?: ByteSize
    /** @server_default 5120 */
    max_write_request_operation_count?: integer
    /** @server_default 9223372036854775807b */
    max_write_request_size?: ByteSize
  }
}
