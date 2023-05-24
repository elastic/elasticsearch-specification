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

import { IndexTemplate } from '@indices/_types/IndexTemplate'
import { RequestBase } from '@_types/Base'
import { Name } from '@_types/common'
import { Duration } from '@_types/Time'

/**
 * Returns the index configuration that would be applied by a particular index template.
 * @rest_spec_name indices.simulate_template
 * @since 0.0.0
 * @stability stable
 * @cluster_privileges manage_index_templates,manage
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * Name of the index template to simulate. To test a template configuration before you add it to the cluster, omit
     * this parameter and specify the template configuration in the request body.
     */
    name?: Name
  }
  query_parameters: {
    /**
     * If true, the template passed in the body is only used if no existing templates match the same index patterns. If false, the simulation uses the template with the highest priority. Note that the template is not permanently added or updated in either case; it is only used for the simulation.
     * @server_default false
     */
    create?: boolean
    /**
     * Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    master_timeout?: Duration
    /**
     * If true, returns all relevant default configurations for the index template.
     * @server_default false
     * @since 8.8.0
     * @stability experimental
     */
    include_defaults?: boolean
  }
  /** @codegen_name template */
  body?: IndexTemplate
}
