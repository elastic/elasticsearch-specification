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
import { IndexName } from '@_types/common'
import { integer } from '@_types/Numeric'

/**
 * @rest_spec_name cluster.allocation_explain
 * @availability stack since=5.0.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @doc_id cluster-allocation-explain
 */
export interface Request extends RequestBase {
  query_parameters: {
    /**
     * If true, returns information about disk usage and shard sizes.
     * @server_default false
     */
    include_disk_info?: boolean
    /**
     * If true, returns YES decisions in explanation.
     * @server_default false
     */
    include_yes_decisions?: boolean
  }
  body: {
    /**
     * Specifies the node ID or the name of the node to only explain a shard that is currently located on the specified node.
     */
    current_node?: string
    /**
     * Specifies the name of the index that you would like an explanation for.
     */
    index?: IndexName
    /**
     * If true, returns explanation for the primary shard for the given shard ID.
     */
    primary?: boolean
    /**
     * Specifies the ID of the shard that you would like an explanation for.
     */
    shard?: integer
  }
}
