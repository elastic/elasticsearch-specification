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

import { Field } from '@_types/common'
import { OverloadOf } from '@spec_utils/behaviors'

export class ModelPlotConfig {
  /**
   * If true, enables calculation and storage of the model change annotations for each entity that is being analyzed.
   * @server_default true
   * @availability stack since=7.9.0
   * @availability serverless
   */
  annotations_enabled?: boolean
  /**
   * If true, enables calculation and storage of the model bounds for each entity that is being analyzed.
   * @server_default false
   */
  enabled?: boolean
  /**
   * Limits data collection to this comma separated list of partition or by field values. If terms are not specified or it is an empty string, no filtering is applied. Wildcards are not supported. Only the specified terms can be viewed when using the Single Metric Viewer.
   * @availability stack since=7.9.0
   * @availability serverless
   */
  terms?: Field
}

export class ModelPlotConfigEnabled implements OverloadOf<ModelPlotConfig> {
  annotations_enabled?: boolean
  enabled: boolean
  terms?: Field
}
