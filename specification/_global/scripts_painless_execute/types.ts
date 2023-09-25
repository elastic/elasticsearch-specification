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

import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { IndexName } from '@_types/common'
import { integer } from '@_types/Numeric'
import { QueryContainer } from '@_types/query_dsl/abstractions'

export class PainlessContextSetup {
  /**
   * Document that’s temporarily indexed in-memory and accessible from the script.
   */
  document: UserDefinedValue
  /**
   * Index containing a mapping that’s compatible with the indexed document.
   * You may specify a remote index by prefixing the index with the remote cluster alias.
   */
  index: IndexName
  /**
   * Use this parameter to specify a query for computing a score.
   */
  query: QueryContainer
}

/**
 * If a painless script fails to execute this is returned on the serialized exception
 */
export class PainlessExecutionPosition {
  offset: integer
  start: integer
  end: integer
}
