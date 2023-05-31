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

import { CatRequestBase, CatTransformColumns } from '@cat/_types/CatBase'
import { Id } from '@_types/common'
import { integer } from '@_types/Numeric'
import { Duration, TimeUnit } from '@_types/Time'

/**
 * Returns configuration and usage information about transforms.
 *
 * IMPORTANT: cat APIs are only intended for human consumption using the Kibana
 * console or command line. They are not intended for use by applications. For
 * application consumption, use the get transform statistics API.
 *
 * @rest_spec_name cat.transforms
 * @availability stack since=7.7.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @doc_id cat-transforms
 */
export interface Request extends CatRequestBase {
  path_parts: {
    transform_id?: Id
  }
  query_parameters: {
    allow_no_match?: boolean
    from?: integer
    /**
     * Comma-separated list of column names to display.
     * @server_default create_time,id,state,type
     */
    h?: CatTransformColumns
    /** Comma-separated list of column names or column aliases used to sort the
     * response.
     */
    s?: CatTransformColumns
    /**
     * Unit used to display time values.
     */
    time?: TimeUnit
    size?: integer
  }
}
