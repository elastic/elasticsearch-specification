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
import { Id, Name } from '@_types/common'

/**
 * @rest_spec_name ml.put_trained_model_alias
 * @since 7.13.0
 * @stability TODO
 */
export interface Request extends RequestBase {
  path_parts: {
    /** The alias to create or update. This value cannot end in numbers. */
    model_alias: Name
    /** The identifier for the trained model that the alias refers to. */
    model_id: Id
  }
  query_parameters?: {
    /**
     * Specifies whether the alias gets reassigned to the specified trained model if it is already assigned to a different model. If the alias is already assigned and this parameter is false, the API returns an error.
     * @server_default false
     */
    reassign?: boolean
  }
}
