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

import { Include } from '@ml/_types/Include'
import { RequestBase } from '@_types/Base'
import { Id } from '@_types/common'
import { integer } from '@_types/Numeric'

/**
 * Retrieves configuration information for a trained model.
 * @rest_spec_name ml.get_trained_models
 * @availability stack since=7.10.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges monitor_ml
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * The unique identifier of the trained model.
     */
    model_id?: Id
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
     * Specifies whether the included model definition should be returned as a
     * JSON map (true) or in a custom compressed format (false).
     * @server_default true
     */
    decompress_definition?: boolean
    /**
     * Indicates if certain fields should be removed from the configuration on
     * retrieval. This allows the configuration to be in an acceptable format to
     * be retrieved and then added to another cluster.
     * @server_default false
     */
    exclude_generated?: boolean
    /**
     * Skips the specified number of models.
     * @server_default 0
     */
    from?: integer
    /**
     * A comma delimited string of optional fields to include in the response
     * body.
     */
    include?: Include
    /**
     * Specifies the maximum number of models to obtain.
     * @server_default 100
     */
    size?: integer
    /**
     * A comma delimited string of tags. A trained model can have many tags, or
     * none. When supplied, only trained models that contain all the supplied
     * tags are returned.
     */
    tags?: string
  }
}
