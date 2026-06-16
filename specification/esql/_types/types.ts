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

import { FieldValue, Name } from '@_types/common'
import { Dictionary, SingleKeyDictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

/**
 * @codegen_names value, named
 */
export type ESQLParams = SingleOrMultiValue[] | NamedValue[]
export type NamedValue = SingleKeyDictionary<string, SingleOrMultiValue>
export type SingleOrMultiValue = FieldValue | FieldValue[]

/**
 *
 * A non-materialized ES|QL view.
 *
 */
export class ESQLView {
  /** The name of the ES|QL view */
  name: string
  /** The ES|QL query */
  query: string
}

/**
 * Represents a data source definition stored in cluster state. A data source holds
 * connection settings (credentials, endpoints, auth) for an external data provider.
 */
export class ESQLDataSource {
  /** The data source name. */
  name: Name
  /** The data source type. */
  type: string
  /** A free-text description. */
  description?: string
  /** Type-specific settings. */
  settings?: Dictionary<string, UserDefinedValue>
}

/**
 * Represents a dataset definition stored in cluster state. A dataset is a named reference
 * to external data that participates in the index namespace alongside indices, aliases, and views.
 * Datasets inherit credentials from their parent data source at query time.
 */
export class ESQLDataset {
  /** The dataset name. */
  name: Name
  /** The name of the parent data source. */
  data_source: Name
  /** The data source-specific resource path */
  resource: string
  /** A free-text description. */
  description?: string
  /** Type-specific settings. */
  settings?: Dictionary<string, UserDefinedValue>
}
