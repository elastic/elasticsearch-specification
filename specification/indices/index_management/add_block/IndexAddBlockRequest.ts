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

import { IndexName } from "../../../__common/common";
import { ExpandWildcardOptions } from "../../../__common/common/ExpandWildcards";
import { RequestBase } from "../../../__common/common_abstractions/request/RequestBase";
import { Time } from "../../../__common/common_options/time_unit/Time";
import { IndexBlockOptions } from "./IndexBlockOptions";

/**
 * @rest_spec_name indices.add_block
 * @since 7.9.0
 * @stability TODO
 */
export interface IndexAddBlockRequest extends RequestBase {
  path_parts?: {
    index: IndexName;
    block: IndexBlockOptions;
  };
  query_parameters?: {
    allow_no_indices?: boolean; // default: true
    expand_wildcards?: ExpandWildcardOptions; // default: open
    ignore_unavailable?: boolean; // default: false
    master_timeout?: Time; // default: 30s
    timeout?: Time; // default: 30s
  };
  body?: {};
}
