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

import { Name } from '@_types/common'
import { ErrorCause } from '@_types/Errors'
import { DateTime } from '@_types/Time'

export class NodeReloadResult {
  name: Name
  reload_exception?: ErrorCause
  /**
   * The names of the secure settings that were reloaded.
   */
  secure_setting_names?: string[]
  /**
   * The path to the keystore file.
   */
  keystore_path?: string
  /**
   * A SHA-256 hash of the keystore file contents.
   */
  keystore_digest?: string
  /**
   * The last modification time of the keystore file.
   */
  keystore_last_modified_time?: DateTime
}
