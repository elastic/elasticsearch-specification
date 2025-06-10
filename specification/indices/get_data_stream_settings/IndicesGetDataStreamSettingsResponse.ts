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

import { IndexSettings } from '@indices/_types/IndexSettings'

export class Response {
  /** @codegen_name data_stream_settings */
  body: {
    data_streams: Array<DataStreamSettings>
  }
}

export class DataStreamSettings {
  /** The name of the data stream. */
  name: string
  /** The settings specific to this data stream */
  settings: IndexSettings
  /**
   * The settings specific to this data stream merged with the settings from its template. These `effective_settings`
   * are the settings that will be used when a new index is created for this data stream.
   */
  effective_settings: IndexSettings
}
