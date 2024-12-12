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

import { Policy } from '@ilm/_types/Policy'
import { RequestBase } from '@_types/Base'
import { Name } from '@_types/common'

/**
 * Create or update a lifecycle policy.
 * If the specified policy exists, it is replaced and the policy version is incremented.
 *
 * NOTE: Only the latest version of the policy is stored, you cannot revert to previous versions.
 * @rest_spec_name ilm.put_lifecycle
 * @availability stack since=6.6.0 stability=stable
 * @cluster_privileges manage_ilm
 * @index_privileges manage
 * @ext_doc_id ilm-index-lifecycle
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * Identifier for the policy.
     * @codegen_name name
     */
    policy: Name
  }
  body: {
    policy?: Policy
  }
}
