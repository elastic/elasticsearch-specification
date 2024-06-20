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

/**
 * Switches the indices, ILM policies, and legacy, composable and component templates from using custom node attributes and
 * attribute-based allocation filters to using data tiers, and optionally deletes one legacy index template.+
 * Using node roles enables ILM to automatically move the indices between data tiers.
 *
 * @rest_spec_name ilm.migrate_to_data_tiers
 * @availability stack since=7.14.0 stability=stable
 */
export interface Request extends RequestBase {
  query_parameters: {
    /**
     * If true, simulates the migration from node attributes based allocation filters to data tiers, but does not perform the migration.
     * This provides a way to retrieve the indices and ILM policies that need to be migrated.
     * @server_default false
     */
    dry_run?: boolean
  }
  body: {
    legacy_template_to_delete?: string
    node_attribute?: string
  }
}
