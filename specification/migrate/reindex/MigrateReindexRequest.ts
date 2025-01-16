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

import { IndexName } from '@_types/common'
import { RequestBase } from '@_types/Base'

/**
 * "This API reindexes all legacy backing indices for a data stream. It does this in a persistent task. The persistent task id is returned immediately, and the reindexing work is completed in that task
 *
 * @rest_spec_name migrate.reindex
 * @availability stack since=8.18.0 stability=experimental
 * @doc_id migrate
 * @doc_tag reindex
 */
export interface Request extends RequestBase {
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
