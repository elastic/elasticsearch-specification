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

import { AliasDefinition } from '@indices/_types/AliasDefinition'
import { RequestBase } from '@_types/Base'
import { IndexMetaData, Name, VersionNumber } from '@_types/common'
import { IndexSettings } from '@_types/index/IndexSettings'
import { IndexState } from '@_types/index/IndexState'
import { TypeMapping } from '@_types/mapping/TypeMapping'
import { Time } from '@_types/Time'
import { Dictionary } from '_spec_utils/Dictionary'

/**
 * @rest_spec_name cluster.put_component_template
 * @since 7.8.0
 * @stability TODO
 */
export interface ClusterPutComponentTemplateRequest extends RequestBase {
  path_parts: {
    name: Name
  }
  query_parameters?: {
    /** @server_default false */
    create?: boolean
    /** @server_default 30s */
    master_timeout?: Time
  }
  body: {
    template: IndexState
    aliases?: Dictionary<string, AliasDefinition>
    mappings?: TypeMapping
    settings?: IndexSettings
    version?: VersionNumber
    _meta?: IndexMetaData
  }
}
