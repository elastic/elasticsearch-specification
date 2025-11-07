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
import { IndexName } from '@_types/common'

/**
 * Reindex legacy backing indices.
 *
 * Reindex all legacy backing indices for a data stream.
 * This operation occurs in a persistent task.
 * The persistent task ID is returned immediately and the reindexing work is completed in that task.
 * @rest_spec_name indices.migrate_reindex
 * @availability stack since=8.18.0 stability=experimental
 * @doc_id migration-api-reindex
 * @doc_tag migration
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_migration/reindex'
      methods: ['POST']
    }
  ]
  /** @codegen_name reindex */
  body: MigrateReindex
}

export class MigrateReindex {
  /**
   * Reindex mode. Currently only 'upgrade' is supported.
   */
  mode: ModeEnum
  /**
   * The source index or data stream (only data streams are currently supported).
   */
  source: SourceIndex
}

export class SourceIndex {
  index: IndexName
}

enum ModeEnum {
  upgrade
}
