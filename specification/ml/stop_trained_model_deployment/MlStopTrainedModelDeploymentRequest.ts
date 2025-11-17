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
import { Id } from '@_types/common'

/**
 * Stop a trained model deployment.
 *
 * @rest_spec_name ml.stop_trained_model_deployment
 * @availability stack since=8.0.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_ml
 * @doc_tag ml trained model
 * @doc_id stop-trained-model-deployment
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_ml/trained_models/{model_id}/deployment/_stop'
      methods: ['POST']
    }
  ]
  path_parts: {
    /**
     * The unique identifier of the trained model.
     */
    model_id: Id
  }
  query_parameters: {
    /**
     * Specifies what to do when the request: contains wildcard expressions and there are no deployments that match;
     * contains the  `_all` string or no identifiers and there are no matches; or contains wildcard expressions and
     * there are only partial matches. By default, it returns an empty array when there are no matches and the subset of results when there are partial matches.
     * If `false`, the request returns a 404 status code when there are no matches or only partial matches.
     * @server_default true
     */
    allow_no_match?: boolean
    /**
     * Forcefully stops the deployment, even if it is used by ingest pipelines. You can't use these pipelines until you
     * restart the model deployment.
     * @server_default false
     */
    force?: boolean
  }
}
