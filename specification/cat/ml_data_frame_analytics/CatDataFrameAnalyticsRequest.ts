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

import { Id } from '@_types/common'
import { CatDfaColumns, CatRequestBase } from '@cat/_types/CatBase'

/**
 * Get data frame analytics jobs.
 *
 * Get configuration and usage information about data frame analytics jobs.
 *
 * IMPORTANT: CAT APIs are only intended for human consumption using the Kibana
 * console or command line. They are not intended for use by applications. For
 * application consumption, use the get data frame analytics jobs statistics API.
 *
 * @rest_spec_name cat.ml_data_frame_analytics
 * @availability stack since=7.7.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @doc_id cat-dfanalytics
 * @cluster_privileges monitor_ml
 */
export interface Request extends CatRequestBase {
  urls: [
    {
      path: '/_cat/ml/data_frame/analytics'
      methods: ['GET']
    },
    {
      path: '/_cat/ml/data_frame/analytics/{id}'
      methods: ['GET']
    }
  ]
  path_parts: {
    /** The ID of the data frame analytics to fetch */
    id?: Id
  }
  query_parameters: {
    /**
     * Whether to ignore if a wildcard expression matches no configs.
     * (This includes `_all` string or when no configs have been specified.)
     * @server_default false
     */
    allow_no_match?: boolean
    /**
     * Comma-separated list of column names to display.
     * @server_default create_time,id,state,type
     */
    h?: CatDfaColumns
    /** Comma-separated list of column names or column aliases used to sort the
     * response.
     */
    s?: CatDfaColumns
  }
}
