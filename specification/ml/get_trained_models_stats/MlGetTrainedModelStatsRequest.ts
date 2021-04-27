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
import { integer } from '@_types/Numeric'

/**
 * @rest_spec_name ml.get_trained_models_stats
 * @since 7.10.0
 * @stability TODO
 */
export interface MlGetTrainedModelStatsRequest extends RequestBase {
  path_parts?: {
    /** The unique identifier of the trained model. */
    model_id?: Id
  }
  query_parameters?: {
    /**
     * Specifies what to do when the request:
     * - Contains wildcard expressions and there are no models that match.
     * - Contains the _all string or no identifiers and there are no matches.
     * - Contains wildcard expressions and there are only partial matches.
     */
    allow_no_match?: boolean
    /**
     * Skips the specified number of models.
     * @server_default false
     */
    from?: integer
    /**
     * Specifies the maximum number of models to obtain.
     * @server_default 100
     */
    size?: integer
  }
}
