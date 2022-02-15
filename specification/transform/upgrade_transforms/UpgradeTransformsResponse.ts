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

import { integer } from '@_types/Numeric'
/*
import { long } from '@_types/Numeric'
import { Transform } from '@_types/Transform'
*/
export class Response {
  '200': {
    body: {
      /** The number of transforms that need to be upgraded. */
      needs_update: integer
      /** The number of transforms that don’t require upgrading. */
      no_action: integer
      /** The number of transforms that have been upgraded. */
      updated: integer
    }
  }
}
