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
import { Id, MediaType } from '@_types/common'
import { Pipeline } from '@ingest/_types/Pipeline'
import { Document } from '../_types/Simulation'

/**
 * Simulate a pipeline.
 *
 * Run an ingest pipeline against a set of provided documents.
 * You can either specify an existing pipeline to use with the provided documents or supply a pipeline definition in the body of the request.
 * @rest_spec_name ingest.simulate
 * @availability stack since=5.0.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges read_pipeline
 * @doc_id simulate-pipeline-api
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_ingest/pipeline/_simulate'
      methods: ['GET', 'POST']
    },
    {
      path: '/_ingest/pipeline/{id}/_simulate'
      methods: ['GET', 'POST']
    }
  ]
  path_parts: {
    /**
     * The pipeline to test.
     * If you don't specify a `pipeline` in the request body, this parameter is required.
     */
    id?: Id
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * If `true`, the response includes output data for each processor in the executed pipeline.
     * @server_default false
     */
    verbose?: boolean
  }
  body: {
    /**
     * Sample documents to test in the pipeline.
     */
    docs: Document[]
    /**
     * The pipeline to test.
     * If you don't specify the `pipeline` request path parameter, this parameter is required.
     * If you specify both this and the request path parameter, the API only uses the request path parameter.
     */
    pipeline?: Pipeline
  }
}
