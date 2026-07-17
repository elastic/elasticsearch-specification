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
import { MediaType, Name } from '@_types/common'
import { Duration } from '@_types/Time'
import { DatasetMapping } from '@esql/_types/types'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

/**
 * Create or replace an ES|QL dataset.
 *
 * Creates or replaces a dataset that references a data source in ES|QL data federation.
 * Dataset names participate in the index namespace and must follow index or alias naming rules.
 * Returns `404` if the referenced data source does not exist.
 *
 * @rest_spec_name esql.put_dataset
 * @index_privileges manage
 * @availability stack since=9.5.0 stability=experimental visibility=public
 * @availability serverless stability=experimental visibility=public
 * @ext_doc_id esql-data-federation
 * @doc_id esql-put-dataset
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_query/dataset/{name}'
      methods: ['PUT']
    }
  ]
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  path_parts: {
    /** The dataset name to create or update. */
    name: Name
  }
  query_parameters: {
    /**
     * Period to wait for a connection to the master node.
     * @server_default 30s
     */
    master_timeout?: Duration
    /**
     * The time to wait for the request to be completed.
     * @server_default 30s
     */
    timeout?: Duration
  }
  body: {
    /** The name of the referenced data source. The data source must already exist. */
    data_source: Name
    /**
     * The URI that identifies the data to read, resolved against the referenced data source.
     * It can include glob patterns. For example, a recursive pattern can match
     * all Parquet files under the `s3://logs-bucket/access` prefix.
     */
    resource: string
    /** A free-text description of the dataset. */
    description?: string
    /** User-declared mapping on the dataset definition */
    mappings?: DatasetMapping
    /**
     * Format and parsing-specific settings that configure how the resource is read.
     * Common keys include `format`, which explicitly selects a registered format, and
     * `partition_detection`, which accepts `auto`, `hive`, `template`, or `none`. Additional
     * keys depend on the format reader. Compression can be inferred from the resource URI.
     */
    settings?: Dictionary<string, UserDefinedValue>
  }
}
