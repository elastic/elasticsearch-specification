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

 /**
 * @rest_spec_name ccr.put_auto_follow_pattern
 * @since 6.5.0
 * @stability TODO
 */
interface CreateAutoFollowPatternRequest extends RequestBase {
  path_parts?: {
    name: Name
  }
  query_parameters?: {}
  body?: {
    follow_index_pattern?: string
    leader_index_patterns?: string[]
    max_outstanding_read_requests?: long
    max_outstanding_write_requests?: integer
    max_poll_timeout?: Time
    max_read_request_operation_count?: integer
    max_read_request_size?: string
    max_retry_delay?: Time
    max_write_buffer_count?: integer
    max_write_buffer_size?: string
    max_write_request_operation_count?: integer
    max_write_request_size?: string
    remote_cluster?: string
  }
}
