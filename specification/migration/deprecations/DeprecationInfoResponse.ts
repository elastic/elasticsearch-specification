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

import { Dictionary } from '@spec_utils/Dictionary'
import { Deprecation } from './types'

export class Response {
  body: {
    /**
     * Cluster-level deprecation warnings.
     */
    cluster_settings: Deprecation[]
    /**
     * Index warnings are sectioned off per index and can be filtered using an index-pattern in the query.
     * This section includes warnings for the backing indices of data streams specified in the request path.
     */
    index_settings: Dictionary<string, Deprecation[]>
    data_streams: Dictionary<string, Deprecation[]>
    /**
     * Node-level deprecation warnings.
     * Since only a subset of your nodes might incorporate these settings, it is important to read the details section for more information about which nodes are affected.
     */
    node_settings: Deprecation[]
    /**
     * Machine learning-related deprecation warnings.
     */
    ml_settings: Deprecation[]
    /**
     * Template warnings are sectioned off per template and include deprecations for both component templates and
     * index templates.
     */
    templates: Dictionary<string, Deprecation[]>
    /**
     * ILM policy warnings are sectioned off per policy.
     */
    ilm_policies: Dictionary<string, Deprecation[]>
  }
}
