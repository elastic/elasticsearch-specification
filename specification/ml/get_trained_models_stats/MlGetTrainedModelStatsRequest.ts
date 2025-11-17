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
import { Ids } from '@_types/common'
import { integer } from '@_types/Numeric'

/**
 * Get trained models usage info.
 *
 * You can get usage information for multiple trained
 * models in a single API request by using a comma-separated list of model IDs or a wildcard expression.
 * @rest_spec_name ml.get_trained_models_stats
 * @availability stack since=7.10.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges monitor_ml
 * @doc_tag ml trained model
 * @doc_id get-trained-models-stats
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_ml/trained_models/{model_id}/_stats'
      methods: ['GET']
    },
    {
      path: '/_ml/trained_models/_stats'
      methods: ['GET']
    }
  ]
  path_parts: {
    /**
     * The unique identifier of the trained model or a model alias. It can be a
     * comma-separated list or a wildcard expression.
     */
    model_id?: Ids
  }
  query_parameters: {
    /**
     * Specifies what to do when the request:
     *
     * - Contains wildcard expressions and there are no models that match.
     * - Contains the _all string or no identifiers and there are no matches.
     * - Contains wildcard expressions and there are only partial matches.
     *
     * If true, it returns an empty array when there are no matches and the
     * subset of results when there are partial matches.
     * @server_default true
     */
    allow_no_match?: boolean
    /**
     * Skips the specified number of models.
     * @server_default 0
     */
    from?: integer
    /**
     * Specifies the maximum number of models to obtain.
     * @server_default 100
     */
    size?: integer
  }
}
