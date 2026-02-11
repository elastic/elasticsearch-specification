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
import { MediaType, Names } from '@_types/common'
import { integer } from '@_types/Numeric'

/**
 * Get transforms.
 *
 * Get configuration information for transforms.
 * @rest_spec_name transform.get_transform
 * @category ingest
 * @availability stack since=7.5.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges monitor_transform
 * @doc_id get-transform
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_transform/{transform_id}'
      methods: ['GET']
    },
    {
      path: '/_transform'
      methods: ['GET']
    }
  ]
  path_parts: {
    /**
     * Identifier for the transform. It can be a transform identifier or a
     * wildcard expression. You can get information for all transforms by using
     * `_all`, by specifying `*` as the `<transform_id>`, or by omitting the
     * `<transform_id>`.
     */
    transform_id?: Names
  }
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * Specifies what to do when the request:
     *
     * 1. Contains wildcard expressions and there are no transforms that match.
     * 2. Contains the _all string or no identifiers and there are no matches.
     * 3. Contains wildcard expressions and there are only partial matches.
     *
     * If this parameter is false, the request returns a 404 status code when
     * there are no matches or only partial matches.
     * @server_default true
     */
    allow_no_match?: boolean
    /**
     * Skips the specified number of transforms.
     * @server_default 0
     */
    from?: integer
    /**
     * Specifies the maximum number of transforms to obtain.
     * @server_default 100
     */
    size?: integer
    /**
     * Excludes fields that were automatically added when creating the
     * transform. This allows the configuration to be in an acceptable format to
     * be retrieved and then added to another cluster.
     * @server_default false
     */
    exclude_generated?: boolean
  }
}
