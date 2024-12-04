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
import { SynonymRule } from '../_types/SynonymRule'

/**
 * Create or update a synonym set.
 * Synonyms sets are limited to a maximum of 10000 synonym rules per set.
 * If you need to manage more synonym rules, you can create multiple synonym sets.
 * @rest_spec_name synonyms.put_synonym
 * @availability stack since=8.10.0 stability=stable
 * @availability serverless stability=stable visibility=public
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * The id of the synonyms set to be created or updated
     */
    id: Id
  }
  body: {
    /**
     * The synonym set information to update
     */
    synonyms_set: SynonymRule | SynonymRule[]
  }
}
