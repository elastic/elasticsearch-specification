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
 * Get feature migration information.
 * Version upgrades sometimes require changes to how features store configuration information and data in system indices.
 * Check which features need to be migrated and the status of any migrations that are in progress.
 *
 * TIP: This API is designed for indirect use by the Upgrade Assistant.
 * We strongly recommend you use the Upgrade Assistant.
 * @rest_spec_name migration.get_feature_upgrade_status
 * @availability stack since=7.16.0 stability=stable
 * @index_privileges manage
 * @cluster_privileges manage
 */
export interface Request extends RequestBase {}
