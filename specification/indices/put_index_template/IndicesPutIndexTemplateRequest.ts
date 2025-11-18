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
import {
  IndexName,
  Indices,
  Metadata,
  Name,
  VersionNumber
} from '@_types/common'
import { TypeMapping } from '@_types/mapping/TypeMapping'
import { long } from '@_types/Numeric'
import { Duration } from '@_types/Time'
import { Alias } from '@indices/_types/Alias'
import { DataStreamVisibility } from '@indices/_types/DataStream'
import { DataStreamLifecycle } from '@indices/_types/DataStreamLifecycle'
import { IndexSettings } from '@indices/_types/IndexSettings'
import { Dictionary } from '@spec_utils/Dictionary'

/**
 * Create or update an index template.
 *
 * Index templates define settings, mappings, and aliases that can be applied automatically to new indices.
 *
 * Elasticsearch applies templates to new indices based on an wildcard pattern that matches the index name.
 * Index templates are applied during data stream or index creation.
 * For data streams, these settings and mappings are applied when the stream's backing indices are created.
 * Settings and mappings specified in a create index API request override any settings or mappings specified in an index template.
 * Changes to index templates do not affect existing indices, including the existing backing indices of a data stream.
 *
 * You can use C-style `/* *\/` block comments in index templates.
 * You can include comments anywhere in the request body, except before the opening curly bracket.
 *
 * **Multiple matching templates**
 *
 * If multiple index templates match the name of a new index or data stream, the template with the highest priority is used.
 *
 * Multiple templates with overlapping index patterns at the same priority are not allowed and an error will be thrown when attempting to create a template matching an existing index template at identical priorities.
 *
 * **Composing aliases, mappings, and settings**
 *
 * When multiple component templates are specified in the `composed_of` field for an index template, they are merged in the order specified, meaning that later component templates override earlier component templates.
 * Any mappings, settings, or aliases from the parent index template are merged in next.
 * Finally, any configuration on the index request itself is merged.
 * Mapping definitions are merged recursively, which means that later mapping components can introduce new field mappings and update the mapping configuration.
 * If a field mapping is already contained in an earlier component, its definition will be completely overwritten by the later one.
 * This recursive merging strategy applies not only to field mappings, but also root options like `dynamic_templates` and `meta`.
 * If an earlier component contains a `dynamic_templates` block, then by default new `dynamic_templates` entries are appended onto the end.
 * If an entry already exists with the same key, then it is overwritten by the new definition.
 * @rest_spec_name indices.put_index_template
 * @availability stack since=7.9.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_index_templates
 * @doc_id index-templates-put
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_index_template/{name}'
      methods: ['PUT', 'POST']
    }
  ]
  path_parts: {
    /** Index or template name */
    name: Name
  }
  body: {
    /**
     * Name of the index template to create.
     */
    index_patterns?: Indices
    /**
     * An ordered list of component template names.
     * Component templates are merged in the order specified, meaning that the last component template specified has the highest precedence.
     */
    composed_of?: Name[]
    /**
     * Template to be applied.
     * It may optionally include an `aliases`, `mappings`, or `settings` configuration.
     */
    template?: IndexTemplateMapping
    /**
     * If this object is included, the template is used to create data streams and their backing indices.
     * Supports an empty object.
     * Data streams require a matching index template with a `data_stream` object.
     */
    data_stream?: DataStreamVisibility
    /**
     * Priority to determine index template precedence when a new data stream or index is created.
     * The index template with the highest priority is chosen.
     * If no priority is specified the template is treated as though it is of priority 0 (lowest priority).
     * This number is not automatically generated by Elasticsearch.
     */
    priority?: long
    /**
     * Version number used to manage index templates externally.
     * This number is not automatically generated by Elasticsearch.
     * External systems can use these version numbers to simplify template management.
     * To unset a version, replace the template without specifying one.
     */
    version?: VersionNumber
    /**
     * Optional user metadata about the index template.
     * It may have any contents.
     * It is not automatically generated or used by Elasticsearch.
     * This user-defined object is stored in the cluster state, so keeping it short is preferable
     * To unset the metadata, replace the template without specifying it.
     * @doc_id mapping-meta-field */
    _meta?: Metadata
    /**
     * This setting overrides the value of the `action.auto_create_index` cluster setting.
     * If set to `true` in a template, then indices can be automatically created using that template even if auto-creation of indices is disabled via `actions.auto_create_index`.
     * If set to `false`, then indices or data streams matching the template must always be explicitly created, and may never be automatically created.
     */
    allow_auto_create?: boolean
    /**
     * The configuration option ignore_missing_component_templates can be used when an index template
     * references a component template that might not exist
     */
    ignore_missing_component_templates?: string[]
    /**
     * Marks this index template as deprecated. When creating or updating a non-deprecated index template
     * that uses deprecated components, Elasticsearch will emit a deprecation warning.
     */
    deprecated?: boolean
  }
  query_parameters: {
    /**
     * If `true`, this request cannot replace or update existing index templates.
     * @server_default false
     */
    create?: boolean
    /**
     * Period to wait for a connection to the master node.
     * If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s */
    master_timeout?: Duration
    /**
     * @server_default api
     */
    cause?: string
  }
}

export class IndexTemplateMapping {
  /**
   * Aliases to add.
   * If the index template includes a `data_stream` object, these are data stream aliases.
   * Otherwise, these are index aliases.
   * Data stream aliases ignore the `index_routing`, `routing`, and `search_routing` options.
   */
  aliases?: Dictionary<IndexName, Alias>
  /**
   * Mapping for fields in the index.
   * If specified, this mapping can include field names, field data types, and mapping parameters.
   */
  mappings?: TypeMapping
  /**
   * Configuration options for the index.
   */
  settings?: IndexSettings
  /**
   * @availability stack since=8.11.0 stability=stable
   * @availability serverless stability=stable
   */
  lifecycle?: DataStreamLifecycle
}
