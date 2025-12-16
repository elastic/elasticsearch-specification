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

import { Id, MediaType } from '@_types/common'
import { integer } from '@_types/Numeric'
import { CatRequestBase, CatTransformColumns } from '@cat/_types/CatBase'

/**
 * Get transform information.
 *
 * Get configuration and usage information about transforms.
 *
 * CAT APIs are only intended for human consumption using the Kibana
 * console or command line. They are not intended for use by applications. For
 * application consumption, use the get transform statistics API.
 *
 * @rest_spec_name cat.transforms
 * @availability stack since=7.7.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @doc_id cat-transforms
 * @cluster_privileges monitor_transform
 */
export interface Request extends CatRequestBase {
  urls: [
    {
      path: '/_cat/transforms'
      methods: ['GET']
    },
    {
      path: '/_cat/transforms/{transform_id}'
      methods: ['GET']
    }
  ]
  path_parts: {
    /**
     * A transform identifier or a wildcard expression.
     * If you do not specify one of these options, the API returns information for all transforms.
     */
    transform_id?: Id
  }
  response_media_type: MediaType.Text | MediaType.Json
  query_parameters: {
    /**
     * Specifies what to do when the request: contains wildcard expressions and there are no transforms that match; contains the `_all` string or no identifiers and there are no matches; contains wildcard expressions and there are only partial matches.
     * If `true`, it returns an empty transforms array when there are no matches and the subset of results when there are partial matches.
     * If `false`, the request returns a 404 status code when there are no matches or only partial matches.
     * @server_default true
     */
    allow_no_match?: boolean
    /**
     * Skips the specified number of transforms.
     * @server_default 0
     */
    from?: integer
    /**
     * Comma-separated list of column names to display.
     * @server_default changes_last_detection_time,checkpoint,checkpoint_progress,documents_processed,id,last_search_time,state
     */
    h?: CatTransformColumns
    /**
      Comma-separated list of column names or column aliases used to sort the response.
     */
    s?: CatTransformColumns
    /**
     * The maximum number of transforms to obtain.
     * @server_default 100
     */
    size?: integer
  }
}
