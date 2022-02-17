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

import { CatRequestBase, CatTrainedModelsColumns } from '@cat/_types/CatBase'
import { Bytes, Id } from '@_types/common'
import { integer } from '@_types/Numeric'

/**
 * Returns configuration and usage information about inference trained models.
 *
 * IMPORTANT: cat APIs are only intended for human consumption using the Kibana
 * console or command line. They are not intended for use by applications. For
 * application consumption, use the get trained models statistics API.
 *
 * @rest_spec_name cat.ml_trained_models
 * @since 7.7.0
 * @stability stable
 */
export interface Request extends CatRequestBase {
  path_parts: {
    model_id?: Id
  }
  query_parameters: {
    allow_no_match?: boolean
    bytes?: Bytes
    h?: CatTrainedModelsColumns
    s?: CatTrainedModelsColumns
    from?: integer
    size?: integer
  }
}
