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
import { IndexName, MediaType, PipelineName } from '@_types/common'
import { TypeMapping } from '@_types/mapping/TypeMapping'
import { ComponentTemplateNode } from '@cluster/_types/ComponentTemplate'
import { IndexTemplate } from '@indices/_types/IndexTemplate'
import { Pipeline } from '@ingest/_types/Pipeline'
import { Document } from '@ingest/_types/Simulation'
import { Dictionary } from '@spec_utils/Dictionary'

/**
 * Simulate data ingestion.
 *
 * Run ingest pipelines against a set of provided documents, optionally with substitute pipeline definitions, to simulate ingesting data into an index.
 *
 * This API is meant to be used for troubleshooting or pipeline development, as it does not actually index any data into Elasticsearch.
 *
 * The API runs the default and final pipeline for that index against a set of documents provided in the body of the request.
 * If a pipeline contains a reroute processor, it follows that reroute processor to the new index, running that index's pipelines as well the same way that a non-simulated ingest would.
 * No data is indexed into Elasticsearch.
 * Instead, the transformed document is returned, along with the list of pipelines that have been run and the name of the index where the document would have been indexed if this were not a simulation.
 * The transformed document is validated against the mappings that would apply to this index, and any validation error is reported in the result.
 *
 * This API differs from the simulate pipeline API in that you specify a single pipeline for that API, and it runs only that one pipeline.
 * The simulate pipeline API is more useful for developing a single pipeline, while the simulate ingest API is more useful for troubleshooting the interaction of the various pipelines that get applied when ingesting into an index.
 *
 * By default, the pipeline definitions that are currently in the system are used.
 * However, you can supply substitute pipeline definitions in the body of the request.
 * These will be used in place of the pipeline definitions that are already in the system. This can be used to replace existing pipeline definitions or to create new ones. The pipeline substitutions are used only within this request.
 * @rest_spec_name simulate.ingest
 * @availability stack since=8.12.0 stability=experimental visibility=public
 * @index_privileges index
 * @doc_tag ingest
 * @doc_id simulate-ingest-api
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_ingest/_simulate'
      methods: ['GET', 'POST']
    },
    {
      path: '/_ingest/{index}/_simulate'
      methods: ['GET', 'POST']
    }
  ]
  path_parts: {
    /**
     * The index to simulate ingesting into.
     * This value can be overridden by specifying an index on each document.
     * If you specify this parameter in the request path, it is used for any documents that do not explicitly specify an index argument.
     */
    index?: IndexName
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * The pipeline to use as the default pipeline.
     * This value can be used to override the default pipeline of the index.
     */
    pipeline?: PipelineName
    /**
     * The mapping merge type if mapping overrides are being provided in mapping_addition.
     * The allowed values are one of index or template.
     * The index option merges mappings the way they would be merged into an existing index.
     * The template option merges mappings the way they would be merged into a template.
     * @server_default index
     */
    merge_type?: MergeType
  }
  body: {
    /**
     * Sample documents to test in the pipeline.
     */
    docs: Document[]
    /**
     * A map of component template names to substitute component template definition objects.
     */
    component_template_substitutions?: Dictionary<string, ComponentTemplateNode>
    /**
     * A map of index template names to substitute index template definition objects.
     */
    index_template_substitutions?: Dictionary<string, IndexTemplate>
    mapping_addition?: TypeMapping
    /**
     * Pipelines to test.
     * If you don’t specify the `pipeline` request path parameter, this parameter is required.
     * If you specify both this and the request path parameter, the API only uses the request path parameter.
     */
    pipeline_substitutions?: Dictionary<string, Pipeline>
  }
}

enum MergeType {
  index,
  template
}
