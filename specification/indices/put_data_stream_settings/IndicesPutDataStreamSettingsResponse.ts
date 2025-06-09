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
import { IndexSettings } from '@indices/_types/IndexSettings'

export class Response {
  /** @codegen_name data_stream_settings_results */
  body: {
    data_streams: Array<UpdatedDataStreamSettings>
  }
}

export class UpdatedDataStreamSettings {
  /** The data stream name. */
  name: IndexName
  /**
   * If the settings were successfully applied to the data stream (or would have been, if running in `dry_run`
   * mode), it is `true`. If an error occurred, it is `false`.
   */
  applied_to_data_stream: boolean
  /**
   * A message explaining why the settings could not be applied to the data stream.
   */
  error?: string
  /**
   * The settings that are specfic to this data stream that will override any settings from the matching index template.
   */
  settings: IndexSettings
  /**
   * The settings that are effective on this data stream, taking into account the settings from the matching index
   * template and the settings specific to this data stream.
   */
  effective_settings: IndexSettings
  /**
   * Information about whether and where each setting was applied.
   */
  index_settings_results: IndexSettingResults
}

export class IndexSettingResults {
  /**
   * The list of settings that were applied to the data stream but not to backing indices. These will be applied to
   * the write index the next time the data stream is rolled over.
   */
  applied_to_data_stream_only: Array<string>
  /**
   * The list of settings that were applied to the data stream and to all of its backing indices. These settings will
   * also be applied to the write index the next time the data stream is rolled over.
   */
  applied_to_data_stream_and_backing_indices: Array<string>
  errors?: Array<DataStreamSettingsError>
}

export class DataStreamSettingsError {
  index: IndexName
  /**
   * A message explaining why the settings could not be applied to specific indices.
   */
  error: string
}
