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

import { Indices } from '@_types/common'

export class Response {
  body: {
    dry_run: boolean
    /**
     * The name of the legacy index template that was deleted.
     * This information is missing if no legacy index templates were deleted.
     */
    removed_legacy_template: string
    /**
     * The ILM policies that were updated.
     */
    migrated_ilm_policies: string[]
    /**
     * The indices that were migrated to tier preference routing.
     */
    migrated_indices: Indices
    /**
     * The legacy index templates that were updated to not contain custom routing settings for the provided data attribute.
     */
    migrated_legacy_templates: string[]
    /**
     * The composable index templates that were updated to not contain custom routing settings for the provided data attribute.
     */
    migrated_composable_templates: string[]
    /**
     * The component templates that were updated to not contain custom routing settings for the provided data attribute.
     */
    migrated_component_templates: string[]
  }
}
