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

import { MediaType, Names } from '@_types/common'
import { Duration } from '@_types/Time'
import { CatComponentColumns, CatRequestBase } from '@cat/_types/CatBase'

/**
 * Get component templates.
 *
 * Get information about component templates in a cluster.
 * Component templates are building blocks for constructing index templates that specify index mappings, settings, and aliases.
 *
 * IMPORTANT: CAT APIs are only intended for human consumption using the command line or Kibana console.
 * They are not intended for use by applications. For application consumption, use the get component template API.
 * @rest_spec_name cat.component_templates
 * @availability stack since=5.1.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges monitor
 * @doc_id cat-component-templates
 */
export interface Request extends CatRequestBase {
  urls: [
    {
      path: '/_cat/component_templates'
      methods: ['GET']
    },
    {
      path: '/_cat/component_templates/{name}'
      methods: ['GET']
    }
  ]
  path_parts: {
    /**
     * The name of the component template.
     * It accepts wildcard expressions.
     * If it is omitted, all component templates are returned.
     */
    name?: string
  }
  response_media_type: MediaType.Text | MediaType.Json
  query_parameters: {
    /**
     * A comma-separated list of columns names to display. It supports simple wildcards.
     */
    h?: CatComponentColumns
    /**
     * List of columns that determine how the table should be sorted.
     * Sorting defaults to ascending and can be changed by setting `:asc`
     * or `:desc` as a suffix to the column name.
     */
    s?: Names
    /**
     * If `true`, the request computes the list of selected nodes from the
     * local cluster state. If `false` the list of selected nodes are computed
     * from the cluster state of the master node. In both cases the coordinating
     * node will send requests for further information to each selected node.
     * @server_default false
     */
    local?: boolean
    /**
     * The period to wait for a connection to the master node.
     * @server_default 30s
     */
    master_timeout?: Duration
  }
}
