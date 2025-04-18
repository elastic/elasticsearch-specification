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
import { Indices } from '@_types/common'

/**
 * Get the migration reindexing status.
 *
 * Get the status of a migration reindex attempt for a data stream or index.
 * @rest_spec_name indices.get_migrate_reindex_status
 * @availability stack since=8.18.0 stability=experimental
 * @availability serverless stability=experimental visibility=private
 * @doc_id migrate
 * @doc_tag migration
 */
export interface Request extends RequestBase {
  path_parts: {
    /** The index or data stream name. */
    index: Indices
  }
}
