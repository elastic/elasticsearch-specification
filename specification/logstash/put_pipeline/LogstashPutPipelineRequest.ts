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
import { Pipeline } from '@logstash/_types/Pipeline'

/**
 * Create or update a Logstash pipeline.
 *
 * Create a pipeline that is used for Logstash Central Management.
 * If the specified pipeline exists, it is replaced.
 * @rest_spec_name logstash.put_pipeline
 * @availability stack since=7.12.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_logstash_pipelines
 * @doc_id logstash-api-put-pipeline
 * @ext_doc_id logstash-centralized-pipeline-management
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_logstash/pipeline/{id}'
      methods: ['PUT']
    }
  ]
  path_parts: {
    /**
     * An identifier for the pipeline.
     * Pipeline IDs must begin with a letter or underscore and contain only letters, underscores, dashes, hyphens and numbers.
     */
    id: Id
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  /** @codegen_name pipeline */
  body: Pipeline
}
