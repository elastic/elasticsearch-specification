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
import { integer } from '@_types/Numeric'
import { CatRequestBase, CatTrainedModelsColumns } from '@cat/_types/CatBase'

/**
 * Get trained models.
 *
 * Get configuration and usage information about inference trained models.
 *
 * IMPORTANT: CAT APIs are only intended for human consumption using the Kibana
 * console or command line. They are not intended for use by applications. For
 * application consumption, use the get trained models statistics API.
 *
 * @rest_spec_name cat.ml_trained_models
 * @availability stack since=7.7.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @doc_id cat-trained-model
 * @cluster_privileges monitor_ml
 */
export interface Request extends CatRequestBase {
  urls: [
    {
      path: '/_cat/ml/trained_models'
      methods: ['GET']
    },
    {
      path: '/_cat/ml/trained_models/{model_id}'
      methods: ['GET']
    }
  ]
  path_parts: {
    /**
     * A unique identifier for the trained model.
     */
    model_id?: Id
  }
  query_parameters: {
    /**
     * Specifies what to do when the request: contains wildcard expressions and there are no models that match; contains the `_all` string or no identifiers and there are no matches; contains wildcard expressions and there are only partial matches.
     * If `true`, the API returns an empty array when there are no matches and the subset of results when there are partial matches.
     * If `false`, the API returns a 404 status code when there are no matches or only partial matches.
     * @server_default true
     */
    allow_no_match?: boolean
    /** A comma-separated list of column names to display. */
    h?: CatTrainedModelsColumns
    /** A comma-separated list of column names or aliases used to sort the response. */
    s?: CatTrainedModelsColumns
    /** Skips the specified number of transforms. */
    from?: integer
    /** The maximum number of transforms to display. */
    size?: integer
  }
}
