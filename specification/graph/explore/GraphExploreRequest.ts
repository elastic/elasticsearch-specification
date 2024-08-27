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
import { Indices, Routing } from '@_types/common'
import { QueryContainer } from '@_types/query_dsl/abstractions'
import { Duration } from '@_types/Time'
import { ExploreControls } from '../_types/ExploreControls'
import { Hop } from '../_types/Hop'
import { VertexDefinition } from '@graph/_types/Vertex'

/**
 * Extracts and summarizes information about the documents and terms in an Elasticsearch data stream or index.
 * @doc_id graph-explore-api
 * @rest_spec_name graph.explore
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=public
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * Name of the index.
     */
    index: Indices
  }
  query_parameters: {
    /**
     * Custom value used to route operations to a specific shard.
     */
    routing?: Routing
    /**
     * Specifies the period of time to wait for a response from each shard.
     * If no response is received before the timeout expires, the request fails and returns an error.
     * Defaults to no timeout.
     */
    timeout?: Duration
  }
  body: {
    /**
     * Specifies or more fields from which you want to extract terms that are associated with the specified vertices.
     */
    connections?: Hop
    /**
     * Direct the Graph API how to build the graph.
     */
    controls?: ExploreControls
    /**
     * A seed query that identifies the documents of interest. Can be any valid Elasticsearch query.
     */
    query?: QueryContainer
    /**
     * Specifies one or more fields that contain the terms you want to include in the graph as vertices.
     */
    vertices?: VertexDefinition[]
  }
}
