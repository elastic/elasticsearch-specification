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
import { Id } from '@_types/common'
import { ScriptSource } from '@_types/Scripting'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

/**
 * Render a search template.
 *
 * Render a search template as a search request body.
 * @rest_spec_name render_search_template
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=public
 * @index_privileges read
 * @doc_tag search
 * @doc_id render-search-template-api
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_render/template'
      methods: ['GET', 'POST']
    },
    {
      path: '/_render/template/{id}'
      methods: ['GET', 'POST']
    }
  ]
  path_parts: {
    /**
     * The ID of the search template to render.
     * If no `source` is specified, this or the `id` request body parameter is required.
     */
    id?: Id
  }
  body: {
    /**
     * The ID of the search template to render.
     * If no `source` is specified, this or the `<template-id>` request path parameter is required.
     * If you specify both this parameter and the `<template-id>` parameter, the API uses only `<template-id>`.
     */
    id?: Id
    file?: string
    /**
     * Key-value pairs used to replace Mustache variables in the template.
     * The key is the variable name.
     * The value is the variable value.
     */
    params?: Dictionary<string, UserDefinedValue>
    /**
     * An inline search template.
     * It supports the same parameters as the search API's request body.
     * These parameters also support Mustache variables.
     * If no `id` or `<templated-id>` is specified, this parameter is required.
     */
    source?: ScriptSource
  }
}
