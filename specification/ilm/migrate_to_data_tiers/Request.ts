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
 * Migrate to data tiers routing.
 * Switch the indices, ILM policies, and legacy, composable, and component templates from using custom node attributes and attribute-based allocation filters to using data tiers.
 * Optionally, delete one legacy index template.
 * Using node roles enables ILM to automatically move the indices between data tiers.
 *
 * Migrating away from custom node attributes routing can be manually performed.
 * This API provides an automated way of performing three out of the four manual steps listed in the migration guide:
 *
 * 1. Stop setting the custom hot attribute on new indices.
 * 1. Remove custom allocation settings from existing ILM policies.
 * 1. Replace custom allocation settings from existing indices with the corresponding tier preference.
 *
 * ILM must be stopped before performing the migration.
 * Use the stop ILM and get ILM status APIs to wait until the reported operation mode is `STOPPED`.
 * @rest_spec_name ilm.migrate_to_data_tiers
 * @availability stack since=7.14.0 stability=stable
 * @doc_id ilm-migrate-to-data-tiers
 * @ext_doc_id migrate-index-allocation-filters
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_ilm/migrate_to_data_tiers'
      methods: ['POST']
    }
  ]
  query_parameters: {
    /**
     * If true, simulates the migration from node attributes based allocation filters to data tiers, but does not perform the migration.
     * This provides a way to retrieve the indices and ILM policies that need to be migrated.
     * @server_default false
     */
    dry_run?: boolean
  }
  body?: {
    legacy_template_to_delete?: string
    node_attribute?: string
  }
}
