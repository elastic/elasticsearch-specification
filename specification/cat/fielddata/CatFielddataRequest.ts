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

import { Fields, MediaType, Names } from '@_types/common'
import { CatFieldDataColumns, CatRequestBase } from '@cat/_types/CatBase'

/**
 * Get field data cache information.
 *
 * Get the amount of heap memory currently used by the field data cache on every data node in the cluster.
 *
 * IMPORTANT: cat APIs are only intended for human consumption using the command line or Kibana console.
 * They are not intended for use by applications. For application consumption, use the nodes stats API.
 * @rest_spec_name cat.fielddata
 * @category info
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=private
 * @doc_id cat-fielddata
 * @cluster_privileges monitor
 */
export interface Request extends CatRequestBase {
  urls: [
    {
      path: '/_cat/fielddata'
      methods: ['GET']
    },
    {
      path: '/_cat/fielddata/{fields}'
      methods: ['GET']
    }
  ]
  path_parts: {
    /**
     * Comma-separated list of fields used to limit returned information.
     * To retrieve all fields, omit this parameter.
     */
    fields?: Fields
  }
  response_media_type: MediaType.Text | MediaType.Json
  query_parameters: {
    /** Comma-separated list of fields used to limit returned information. */
    fields?: Fields
    /**
     * A comma-separated list of columns names to display. It supports simple wildcards.
     */
    h?: CatFieldDataColumns
    /**
     * List of columns that determine how the table should be sorted.
     * Sorting defaults to ascending and can be changed by setting `:asc`
     * or `:desc` as a suffix to the column name.
     */
    s?: Names
  }
}
