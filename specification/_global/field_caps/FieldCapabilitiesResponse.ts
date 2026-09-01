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

import { Field, Indices } from '@_types/common'
import { Dictionary } from '@spec_utils/Dictionary'
import { FieldCapability } from './types'

/**
 * The types used in the response describe _families_ of field types.
 * Normally a type family is the same as the field type declared in the mapping, but to
 * simplify matters certain field types that behave identically are described using a type family.
 * For example, `keyword`, `constant_keyword` and `wildcard` field types are all described as the `keyword` type family.
 */
export class Response {
  body: {
    /**
     * The list of indices where this field has the same type family, or null if all indices have the same type family for the field.
     */
    indices: Indices
    fields: Dictionary<Field, Dictionary<string, FieldCapability>>
  }
}
